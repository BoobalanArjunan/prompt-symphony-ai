// Seeded random number generator for stability
let seed = 314159265;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const situations = [
    'Surveillance', 'Stakeout', 'Investigation', 'Infiltration', 'Escape',
    'Tracking', 'Interrogation', 'Hideout', 'Lockdown', 'Search', 'Evasion',
    'Observation', 'Countdown', 'Signal Trace', 'Shadowing', 'Pursuit',
    'Ambush', 'Covert Op', 'Extraction', 'Reconnaissance', 'Sabotage',
    'Hacking', 'Decryption', 'Patrol', 'Standoff', 'Negotiation', 'Trap',
    'Breach', 'Blackmail', 'Witness Protection'
];

const locations = [
    'Abandoned Hospital', 'Empty Subway', 'Foggy Harbor', 'Silent Forest',
    'Underground Lab', 'Deserted Mansion', 'Dark Alley', 'Parking Garage',
    'Border Checkpoint', 'Old Factory', 'Remote Cabin', 'Data Center',
    'Stormy Lighthouse', 'Cargo Warehouse', 'Underground Tunnel', 'Rooftop Edge',
    'Quarantine Zone', 'Missile Silo', 'Frozen Outpost', 'Night Market',
    'Submarine Dock', 'Construction Site', 'Sewer System', 'Museum Vault',
    'Elevator Shaft', 'Server Farm', 'Crime Scene', 'Morgue', 'Safe House'
];

const threats = [
    'Unknown Presence', 'Hidden Sniper', 'Secret Experiment', 'Missing Agent',
    'Ghost Signal', 'Locked Door', 'Moving Shadow', 'Ticking Device',
    'Hidden Camera', 'Silent Intruder', 'False Identity', 'Lost Evidence',
    'Sealed Room', 'Broken Transmission', 'Vanished Convoy', 'Double Agent',
    'Rogue AI', 'Viral Outbreak', 'Chemical Leak', 'Sniper Drone',
    'Traitor', 'Mercenary Squad', 'Shadow Govt', 'Ancient Curse',
    'Serial Killer', 'Stalker', 'Infected Subject', 'Time Bomb'
];

const conditions = [
    'At Midnight', 'In Heavy Fog', 'During Power Outage', 'Under Flickering Lights',
    'In Cold Rain', 'Beneath Thunderstorm', 'During Blackout', 'In Red Emergency Glow',
    'Under Siren Echoes', 'In Complete Silence', 'Driverless Car', 'With Low Battery',
    'While Injured', 'Under Time Limit', 'With Jammed Comms', 'In Zero Visibility',
    'During Blizzard', 'Under Lockdown', 'In Panic', 'Without Weapon'
];

const theoryTemplates = {
    tension: {
        harmony: 'Phrygian, Semitone movement, Pedal bass',
        scales: {
            primary: 'Phrygian',
            secondary: 'Locrian, Diminished'
        },
        chordTypes: 'Minor with b2, Tritone intervals, Sus4 (unresolved)',
        moodKeywords: ['Tense', 'Urgent', 'Dangerous', 'Impending']
    },
    mystery: {
        harmony: 'Aeolian, Harmonic Minor, Dorian b2',
        scales: {
            primary: 'Aeolian',
            secondary: 'Harmonic Minor'
        },
        chordTypes: 'Minor 9, Diminished 7th, Minor-Major 7',
        moodKeywords: ['Mysterious', 'Cerebral', 'Secretive', 'Dark']
    },
    dread: {
        harmony: 'Chromatic, Clusters, Atonal textures',
        scales: {
            primary: 'Chromatic',
            secondary: 'Phrygian Dominant'
        },
        chordTypes: 'Polychords, Clusters, Augmented',
        moodKeywords: ['Paranoid', 'Terrifying', 'Unsettling', 'Creepy']
    },
    stealth: {
        harmony: 'Static, Minimal, Sparse',
        scales: {
            primary: 'Dorian',
            secondary: 'Aeolian'
        },
        chordTypes: 'Minor 11, Sus2, Open 5ths',
        moodKeywords: ['Stealthy', 'Quiet', 'Focused', 'Cautious']
    }
};

const getCategoryDetails = (situation, location, threat, condition) => {
    let type = 'tension'; // default

    // Logic mapping
    if (['Abandoned Hospital', 'Deserted Mansion', 'Silent Forest'].includes(location) ||
        ['Ghost Signal', 'Unknown Presence'].includes(threat) ||
        ['In Complete Silence', 'In Cold Rain'].includes(condition)) {
        type = 'dread';
    } else if (['Investigation', 'Signal Trace', 'Search'].includes(situation) ||
        ['Data Center', 'Underground Lab'].includes(location) ||
        ['Missing Agent', 'Lost Evidence'].includes(threat)) {
        type = 'mystery';
    } else if (['Infiltration', 'Surveillance', 'Shadowing', 'Evasion'].includes(situation) ||
        ['Hidden Camera', 'Silent Intruder'].includes(threat)) {
        type = 'stealth';
    } else if (['Countdown', 'Escape', 'Lockdown'].includes(situation) ||
        ['Ticking Device', 'Hidden Sniper'].includes(threat) ||
        ['In Red Emergency Glow', 'Under Siren Echoes'].includes(condition)) {
        type = 'tension';
    }

    // Tempo logic
    let tempoRange = '60-90 BPM';
    let tempoType = 'Medium';

    if (type === 'tension' && (situation === 'Escape' || situation === 'Countdown')) {
        tempoRange = '100-120 BPM';
        tempoType = 'High';
    } else if (type === 'dread' || type === 'stealth') {
        tempoRange = '40-70 BPM';
        tempoType = 'Low';
    }

    return { type, tempoRange, tempoType, template: theoryTemplates[type] };
};

export const generateSuspenseSubcategories = (count) => {
    const generated = [];
    const usedTitles = new Set();

    for (let i = 0; i < count; i++) {
        let situation, location, threat, condition;
        let title;

        let attempts = 0;
        do {
            situation = getRandomItem(situations);
            location = getRandomItem(locations);
            threat = getRandomItem(threats);
            condition = getRandomItem(conditions);

            const r = random();
            if (r < 0.33) {
                title = `${location} ${situation} ${condition}`;
            } else if (r < 0.66) {
                title = `${threat} ${situation} ${condition}`;
            } else {
                title = `${condition} ${location} ${situation}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(situation, location, threat, condition);
        const { template, tempoRange, tempoType } = details;

        // Orchestration & Melody specific to types
        let orchestration = 'Low Strings, Piano, Subtle Percussion';
        if (details.type === 'dread') orchestration = 'Bowing FX, Tremolo Strings, Sub Bass, Dissonant Pads';
        if (details.type === 'tension') orchestration = 'Pulsing Synth Bass, Ticking Percussion, Staccato Strings';
        if (details.type === 'mystery') orchestration = 'Muted Piano, Marimba, Harp, Solo Cello';
        if (details.type === 'stealth') orchestration = 'Pizzicato Bass, Light Shakers, Breath FX, Muted Trumpet';

        let melodyDescription = 'Minimal and fragmented';
        if (details.type === 'tension') melodyDescription = 'Repeating, urgent rhythmic cells';
        if (details.type === 'mystery') melodyDescription = 'Slow, unfolding intervals, unanswered phrases';

        let rhythmDescription = 'Steady pulse, irregular heartbeat';
        if (details.type === 'dread') rhythmDescription = 'Sparse, undefined, random swells';
        if (details.type === 'tension') rhythmDescription = 'Driving, constant 16th note tick';

        const moodText = `${template.moodKeywords.join(', ')}. A scenario of ${situation} in ${location} involving ${threat}. Atmosphere: ${condition}.`;

        const prompt = `Compose a Suspense track. Title: "${title}". Tempo: ${tempoRange}. Mood: ${template.moodKeywords.join(', ')}. 
        Use ${template.scales.primary} scale for ${details.type} atmosphere. 
        Instrumentation: ${orchestration}. 
        Rhythm: ${rhythmDescription}. 
        Harmonic Texture: ${template.harmony}. 
        Scenario: ${situation} the ${threat} in ${location}, ${condition}. 
        Dynamics: Start quietly with high tension, introduce subtle layers, build to a terrifying unspoken threat. Use silence effectively.`;

        generated.push({
            id: `susp-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [template.moodKeywords[0], tempoType, 'Suspense', 'Thriller'],
            coreTheory: {
                tempo: tempoRange,
                rhythm: rhythmDescription,
                harmony: template.harmony,
                melody: melodyDescription,
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Theme',
                    scales: template.scales,
                    chords: {
                        types: template.chordTypes,
                        progressions: [
                            'i - bII - i',
                            'i - viio - i',
                            'Pedal Point Tension'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedSuspenseSubcategories = generateSuspenseSubcategories(10000);
