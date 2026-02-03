// Seeded random number generator for stability (using a different seed for batch 2)
let seed = 987654321;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const situations = [
    'Raid', 'Counterstrike', 'Breakthrough', 'Evacuation', 'Interception',
    'Last Stand', 'Overrun', 'Retaliation', 'Suppression', 'Uprising',
    'Hunt', 'Breakout', 'Lockdown', 'Confrontation', 'Detonation'
];

const locations = [
    'Orbital Ring', 'Deep Sea Trench', 'Floating City', 'Crystal Cavern',
    'Lava Fortress', 'Sky Islands', 'Magnetic Rail Line', 'Quantum Lab', 'Bio Dome',
    'Ancient Library', 'Forgotten Catacombs', 'Solar Farm', 'Storm Barrier',
    'Cliffside Highway', 'Frozen Harbor', 'Sunken Metropolis'
];

const threats = [
    'Void Beasts', 'Shadow Legion', 'Rogue AI', 'Nano Swarm', 'Steel Titans',
    'Ghost Armada', 'Inferno Serpents', 'War Golems', 'Spectral Knights',
    'Plasma Drones', 'Mutant Horde', 'Dark Mechs', 'Storm Giants',
    'Abyss Creatures', 'Chrono Assassins'
];

const twists = [
    'During Blackout', 'In Meteor Shower', 'Under Blood Moon', 'In Time Loop',
    'Amid Solar Flare', 'In Reality Glitch', 'Underwater Pressure',
    'In Vacuum Breach', 'During Gravity Surge', 'In Sonic Storm',
    'Inside Energy Field', 'During Dimension Merge'
];

const theoryTemplates = {
    cosmic: {
        harmony: 'Whole Tone, Octatonic, Altered scale, Evolving pads',
        scales: {
            primary: 'Whole Tone',
            secondary: 'Octatonic, Diminished'
        },
        chordTypes: 'Augmented, Polychords, Clusters',
        moodKeywords: ['Surreal', 'Cosmic', 'Unstable', 'Ethereal']
    },
    supernatural: {
        harmony: 'Phrygian, Locrian, Harmonic Minor, Tritone tension',
        scales: {
            primary: 'Phrygian Dominant',
            secondary: 'Locrian'
        },
        chordTypes: 'Minor, Diminished 7th, Tritone Dominants',
        moodKeywords: ['Dark', 'Terrifying', 'Spectral', 'ominous']
    },
    heroic: {
        harmony: 'Dorian, Aeolian, Melodic Minor, Powerful intervals',
        scales: {
            primary: 'Dorian',
            secondary: 'Melodic Minor'
        },
        chordTypes: 'Minor 7, Sus4, Power Chords, Major IV',
        moodKeywords: ['Heroic', 'Defiant', 'Epic', 'Determined']
    },
    hightech: {
        harmony: 'Chromatic, Diminished, Synthetic, Glitchy',
        scales: {
            primary: 'Chromatic',
            secondary: 'Hungarian Minor'
        },
        chordTypes: 'Bitonal, Clusters, Sus2',
        moodKeywords: ['Chaotic', 'Futuristic', 'Precise', 'Cold']
    },
    huge: {
        harmony: 'Low, Heavy, Open 5ths, Modal',
        scales: {
            primary: 'Aeolian',
            secondary: 'Phrygian'
        },
        chordTypes: 'Power Chords, Low Minor Triads',
        moodKeywords: ['Massive', 'Crushing', 'Awe-inspiring']
    }
};

const getCategoryDetails = (threat, location, twist) => {
    let type = 'heroic'; // default

    // Logic mapping
    if (['Void Beasts', 'Abyss Creatures', 'Chrono Assassins'].includes(threat) ||
        ['Dimension Merge', 'Reality Glitch', 'Time Loop'].includes(twist) ||
        ['Quantum Lab', 'Crystal Cavern'].includes(location)) {
        type = 'cosmic';
    } else if (['Shadow Legion', 'Ghost Armada', 'Inferno Serpents', 'Spectral Knights', 'Under Blood Moon'].includes(threat) ||
        twist === 'Under Blood Moon' || location === 'Forgotten Catacombs') {
        type = 'supernatural';
    } else if (['Rogue AI', 'Nano Swarm', 'Plasma Drones', 'Cyborgs', 'Sonic Storm'].includes(threat) ||
        ['Magnetic Rail Line', 'Bio Dome', 'Solar Farm'].includes(location)) {
        type = 'hightech';
    } else if (['Steel Titans', 'War Golems', 'Storm Giants', 'Dark Mechs'].includes(threat) ||
        ['Lava Fortress', 'Deep Sea Trench'].includes(location)) {
        type = 'huge';
    }

    // Tempo logic
    let tempoRange = '130-150 BPM';
    let tempoType = 'Medium';

    if (['Raid', 'Interception', 'Hunt', 'Breakout'].some(t => location.includes(t) || twist.includes(t)) || type === 'hightech') {
        tempoRange = '160-190 BPM';
        tempoType = 'Fast';
    }
    if (['Last Stand', 'Siege', 'Defense'].includes(situations) || type === 'huge') {
        tempoRange = '70-100 BPM';
        tempoType = 'Slow';
    }

    // Twist modifiers
    if (twist === 'In Time Loop' || twist === 'Reality Glitch') {
        tempoRange = 'Variable / Glitched BPM';
        tempoType = 'Extreme';
    }

    return { type, tempoRange, tempoType, template: theoryTemplates[type] };
};

export const generateActionSubcategories2 = (count) => {
    const generated = [];
    const usedTitles = new Set();

    for (let i = 0; i < count; i++) {
        let situation, location, threat, twist;
        let title;

        let attempts = 0;
        do {
            situation = getRandomItem(situations);
            location = getRandomItem(locations);
            threat = getRandomItem(threats);
            twist = getRandomItem(twists);

            const r = random();
            if (r < 0.33) {
                title = `${location} ${situation} ${twist}`;
            } else if (r < 0.66) {
                title = `${threat} ${situation} ${twist}`;
            } else {
                title = `${location} ${threat} ${situation}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(threat, location, twist);
        const { template, tempoRange, tempoType } = details;

        // Orchestration & Melody specific to new types
        let orchestration = 'Full Orchestra';
        if (details.type === 'cosmic') orchestration = 'Evolving Synth Pads, Choir, Cello, Weird FX';
        if (details.type === 'hightech') orchestration = 'Glitch Drums, Sawtooth Bass, Staccato Strings';
        if (details.type === 'huge') orchestration = 'Low Brass (Tuba/Trombone), Taiko Drums, Anvil';
        if (details.type === 'supernatural') orchestration = 'Tremolo Strings, Pipe Organ, Dissonant Winds';

        let melodyDescription = 'Thematic and driving';
        if (details.type === 'hightech') melodyDescription = 'Short, robotic, arpeggiated motifs';
        if (details.type === 'cosmic') melodyDescription = 'Long, wandering, chromatic lines';

        const moodText = `${template.moodKeywords.join(', ')}. A high-stakes ${details.type} scenario involving ${threat} at ${location}. Condition: ${twist}.`;

        const prompt = `Compose a track for "${title}". Tempo: ${tempoRange}. Mood: ${template.moodKeywords.join(', ')}. 
        Orchestration should focus on ${orchestration}. 
        Rhythm: ${tempoType === 'Fast' ? 'Fast, frantic, syncopated' : 'Heavy, crushing, slow'}. 
        Harmony: ${template.harmony}. 
        Scenario: ${situation} involving ${threat} in ${location} ${twist}. 
        Structure: Atmospheric Intro -> Tension Build -> Explosive Action -> Abrupt Ending. Cinematic and detailed.`;

        generated.push({
            id: `gen2-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [template.moodKeywords[0], tempoType, 'New Wave'],
            coreTheory: {
                tempo: tempoRange,
                rhythm: `${tempoType === 'Fast' ? 'Driving, irregular 7/8 or 5/4' : 'Massive downbeats, triplets'}`,
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
                            'i - bV - i (Tritone)',
                            'Pedal Point builds',
                            'Rising Chromatic sequences'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedActionSubcategories2 = generateActionSubcategories2(500);
