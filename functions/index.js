const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Razorpay = require("razorpay");
const crypto = require("crypto");

admin.initializeApp();
const db = admin.firestore();

// Initialize Razorpay
// Set these in Firebase config: firebase functions:config:set razorpay.key_id="KEY" razorpay.key_secret="SECRET"
const razorpay = new Razorpay({
    key_id: functions.config().razorpay?.key_id || "YOUR_TEST_KEY_ID",
    key_secret: functions.config().razorpay?.key_secret || "YOUR_TEST_KEY_SECRET",
});

const WEBHOOK_SECRET = functions.config().razorpay?.webhook_secret || "YOUR_WEBHOOK_SECRET";

/**
 * cloud function to create a Razorpay Subscription
 * Call this from the frontend instead of direct checkout if using Subscriptions.
 */
exports.createSubscription = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "User must be logged in.");
    }

    const { planType } = data; // 'monthly' or 'yearly'
    const uid = context.auth.uid;

    // Define your Plan IDs from Razorpay Dashboard
    const PLAN_IDS = {
        monthly: "plan_MonthlyIdForRazorpay",
        yearly: "plan_YearlyIdForRazorpay"
    };

    if (!PLAN_IDS[planType]) {
        throw new functions.https.HttpsError("invalid-argument", "Invalid plan type.");
    }

    try {
        const subscription = await razorpay.subscriptions.create({
            plan_id: PLAN_IDS[planType],
            customer_notify: 1,
            total_count: 120, // 10 years
            notes: {
                uid: uid,
                email: context.auth.token.email
            }
        });

        return {
            subscriptionId: subscription.id,
            keyId: razorpay.key_id
        };
    } catch (error) {
        console.error("Error creating subscription:", error);
        throw new functions.https.HttpsError("internal", "Unable to create subscription");
    }
});

/**
 * Webhook to handle status updates (Subscription activated, charged, etc.)
 * URL: https://us-central1-<project-id>.cloudfunctions.net/razorpayWebhook
 */
exports.razorpayWebhook = functions.https.onRequest(async (req, res) => {
    const signature = req.headers["x-razorpay-signature"];
    const body = JSON.stringify(req.body);

    // 1. Verify Signature
    const expectedSignature = crypto
        .createHmac("sha256", WEBHOOK_SECRET)
        .update(body)
        .digest("hex");

    if (signature !== expectedSignature) {
        console.warn("Invalid Webhook Signature");
        return res.status(400).send("Invalid Signature");
    }

    const event = req.body.event;
    const payload = req.body.payload;

    console.log("Received Webhook:", event);

    try {
        if (event === "subscription.activated" || event === "subscription.charged") {
            const sub = payload.subscription.entity;
            const uid = sub.notes.uid;

            if (!uid) {
                console.warn("No UID in subscription notes");
                return res.status(200).send("No UID");
            }

            // Calculate end date based on period
            const currentPeriodEnd = new Date(sub.current_end * 1000);

            // Update User Plan
            await db.collection("users").doc(uid).update({
                "subscription.status": "active",
                "subscription.planId": "pro",
                "subscription.planType": "pro", // Simplified or map from plan_id
                "subscription.endDate": currentPeriodEnd,
                "subscription.paymentProvider": "razorpay",
                "plan": "pro"
            });

            // Log Billing History
            await db.collection("users").doc(uid).collection("billing").add({
                provider: "razorpay",
                subscriptionId: sub.id,
                status: sub.status,
                amount: payload.payment ? payload.payment.entity.amount : 0,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                event: event,
                rawData: sub
            });

        } else if (event === "subscription.cancelled" || event === "subscription.halted") {
            const sub = payload.subscription.entity;
            const uid = sub.notes.uid;

            if (uid) {
                await db.collection("users").doc(uid).update({
                    "subscription.status": "cancelled",
                    "subscription.autoRenew": false
                    // We don't revoke 'plan' immediately; we let it expire based on endDate check in app
                });
            }
        }

        res.json({ status: "ok" });
    } catch (error) {
        console.error("Webhook processing error:", error);
        res.status(500).send("Internal Error");
    }
});
