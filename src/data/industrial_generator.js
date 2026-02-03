// Seed for stability
let seed = 55443322;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    'Cyberpunk Industrial', 'Heavy Machinery', 'Dystopian Factory', 'Future War',
    'Tech-Horror', 'Glitch Industrial', 'Aggrotech', 'Robotic Assembly',
    'Dark Ambient Industrial', 'Power Noise', 'Metallic Drone', 'Steam-Driven'
];

const contexts = [
    'Assembly Line Malfunction', 'Robot Army Marching', 'Hacking the Core', 'Escaping the Factory',
    'Cybernetic Surgery', 'Countdown to Explosion', 'Mech Suit Battle', 'System Reboot',
    'Processing Data', 'Forging Weapons', 'Navigating the Slums', 'Fighting the AI',
    'Train Chase', 'Loading Cargo', 'Constructing the Monolith', 'Reactors Overheating'
];

const locations = [
    'Automated Factory', 'Underground Bunker', 'Scrap Yard', 'Neon Slums',
    'Power Plant', 'Spaceship Engine Room', 'Robot Hive', 'Steel Foundry',
    'Cyber Prison', 'Wasteland Outpost', 'High-Tech Lab', 'Oil Rig',
    'Steam Tunnels', 'Server Room', 'War Zone', 'Chemical Plant'
];

const elements = [
    'With Alarm Klaxons', 'In Heavy Steam', 'With Sparks Flying', 'Under Strobe Lights',
    'With Hydraulic Hissing', 'In Grinding Gears', 'With Glitching Screens', 'Under High Pressure',
    'With Minimal Power', 'Overloaded Circuits', 'With Toxic Gas', 'In Zero Visibility'
];

const theoryTemplates = {
    machine: {
        tempo: '110-140 BPM',
        rhythm: 'Quantized, strict 16th notes, mechanical',
        harmony: 'Chromatic, atonal, machine noise',
        scales: { primary: 'Chromatic', secondary: 'Diminished' },
        moodKeywords: ['Mechanical', 'Cold', 'Precise', 'Repetitive']
    },
    heavy: {
        tempo: '90-110 BPM (Stomp)',
        rhythm: 'Heavy downbeats, industrial slam',
        harmony: 'Power chords, Tritones, Distortion',
        scales: { primary: 'Phrygian', secondary: 'Locrian' },
        moodKeywords: ['Heavy', 'Brutal', 'Aggressive', 'Powerful']
    },
    tense: {
        tempo: '100-130 BPM',
        rhythm: 'Syncopated metallic clicks, uneven loops',
        harmony: 'Suspenseful drones, sudden stabs',
        scales: { primary: 'Octatonic', secondary: 'Minor Blues' },
        moodKeywords: ['Tense', 'Dangerous', 'Anxious', 'Sharp']
    },
    ambient: {
        tempo: '60-80 BPM',
        rhythm: 'Sparse strokes, distant clanks',
        harmony: 'Dark clusters, reverb-heavy pads',
        scales: { primary: 'Whole Tone', secondary: 'Minor Pentatonic' },
        moodKeywords: ['Atmospheric', 'Grim', 'Desolate', 'Metallic']
    }
};

const getCategoryDetails = (style, context) => {
    let type = 'machine'; // default

    if (style.includes('Heavy') || style.includes('War') || context.includes('Battle') || context.includes('Forging')) {
        type = 'heavy';
    } else if (style.includes('Horror') || context.includes('Hacking') || context.includes('Escaping')) {
        type = 'tense';
    } else if (style.includes('Ambient') || style.includes('Drone')) {
        type = 'ambient';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateIndustrialSubcategories = (count) => {
    const generated = [];
    const usedTitles = new Set();
    const actualCount = Math.min(count, 10000);

    for (let i = 0; i < actualCount; i++) {
        let style, context, location, element;
        let title;
        let attempts = 0;

        do {
            style = getRandomItem(styles);
            context = getRandomItem(contexts);
            location = getRandomItem(locations);
            element = getRandomItem(elements);

            const r = random();
            if (r < 0.33) {
                title = `${style}: ${context}`;
            } else if (r < 0.66) {
                title = `${context} in ${location} (${element})`;
            } else {
                title = `${location} Sector - ${style}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context);
        const { template, type } = details;

        let orchestration = 'Synths, Found Sounds, Distortion';
        if (type === 'machine') orchestration = 'Modular Synths, Drum Machines, Sequencers';
        if (type === 'heavy') orchestration = 'Distorted Guitars, Anvil Hits, Trash Cans, Bass Synth';
        if (type === 'tense') orchestration = 'Metallic Percussion, High-Pass Filters, Glitch FX';
        if (type === 'ambient') orchestration = 'Reverb Tanks, Bowed Metal, Low Drones';

        const prompt = `Compose an Industrial/Mechanical track. Title: "${title}". Tempo: ${template.tempo}. Mood: ${template.moodKeywords.join(', ')}.
        Style: ${style}. Scale: ${template.scales.primary} (${template.scales.secondary} nuances).
        Instrumentation: ${orchestration}.
        Rhythm: ${template.rhythm}.
        Harmony: ${template.harmony}.
        Scenario: ${context} in ${location}, ${element}.
        Focus on: Texture, rhythm over melody, and the cold, unfeeling nature of machines.`;

        generated.push({
            id: `industrial-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: `A ${style} track for ${context} at ${location}. Condition: ${element}.`,
            tags: [template.moodKeywords[0], style, 'Industrial', 'Mechanical'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Minimal, repetitive, riff-based',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Loop',
                    scales: template.scales,
                    chords: {
                        types: 'Power Chords, Octaves, No 3rds',
                        progressions: [
                            'i - bII (Phrygian Riff)',
                            'Chromatic Descent',
                            'One Chord Stabs'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedIndustrialSubcategories = generateIndustrialSubcategories(10000);
