import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmIzA1CO8WeHwj8maer_nIRXEOGk8Y978",
    authDomain: "promptsymphonyai.firebaseapp.com",
    projectId: "promptsymphonyai",
    storageBucket: "promptsymphonyai.firebasestorage.app",
    messagingSenderId: "549515556380",
    appId: "1:549515556380:web:4f620f4edb1e58881891d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
