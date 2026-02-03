// Seed for stability
let seed = 42000042;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    'Cyberpunk Noir', 'Space Opera', 'Dystopian Industrial', 'Retro-Futurism',
    'Ethereal Space Ambient', 'Glitch-Hop', 'Tech-Noir', 'Post-Human Choir',
    'Hard Sci-Fi', 'Alien Soundscape', 'Time Travel Synth', 'Holographic Pop',
    'Biopunk Horror', 'Solarpunk Hope', 'Galactic Western', 'Nanotech Minimal',
    'Quantum Jazz', 'Mecha Metal', 'Void Drone', 'Asteroid Mining Blues'
];

const contexts = [
    'Exploring a Derelict Ship', 'Cybernetic Surgery', 'Warp Speed Travel', 'AI Awakening',
    'Neon City Chase', 'First Contact', 'Cryo-Sleep Waking', 'Hacking the Mainframe',
    'Robot Uprising', 'Terraforming a Planet', 'Space Station Docking', 'Black Hole Event',
    'Virtual Reality Dive', 'Android Love Story', 'Galactic Senate Meeting', 'Mech Repair',
    'Downloading Consciousness', 'Escaping a Supernova', 'Negotiating with Aliens', 'Analyzing Anomalies',
    'Defending the Core', 'Smuggling Contraband', 'Racing Hovercars', 'Scanning Ancient Glyphs'
];

const locations = [
    'Neo-Tokyo', 'Mars Colony', 'Deep Space Nine', 'The Void',
    'Underground Bunker', 'Crystal Planet', 'Cyber-Slums', 'Orbital Elevator',
    'Alien Hive Mind', 'Quantum Realm', 'Dying Star', 'Synthetic Garden',
    'Data stream', 'Moon Base Alpha', 'Abandoned Factory', 'Starship Bridge',
    'Frozen Moon of Jupiter', 'Undersea Domed City', 'Dyson Sphere', 'Nebula Cloud',
    'Server Farm', 'Holographic Simulation', 'Toxic Wasteland', 'Floating Sky-Port'
];

const elements = [
    'With Failing Oxygen', 'During Solar Flare', 'Gravity Malfunction', 'System Critical',
    'Scanning for Life', 'Downloading Data', 'Time Dilation Effect', 'Holograms Flickering',
    'Reactor Meltdown', 'Stealth Mode Active', 'Communication Lost', 'Aliens Approaching',
    'Reality Dissolving', 'Nanobots Swarming', 'Shields Failing', 'Engines Overheating',
    'Memory Corrupting', 'Portal Opening', 'Code Compiling', 'Virus Spreading'
];

const theoryTemplates = {
    exploration: {
        tempo: '70-90 BPM',
        rhythm: 'Floating, irregular pulses, delay-heavy',
        harmony: 'Lydian, Whole Tone, Quartal harmony',
        scales: { primary: 'Lydian', secondary: 'Whole Tone' },
        moodKeywords: ['Wonder', 'Vast', 'Ethereal', 'Advanced']
    },
    action: {
        tempo: '130-170 BPM',
        rhythm: 'Driving arpeggios, glitch beats, breakbeats',
        harmony: 'Minor, chromatic mediants, power chords',
        scales: { primary: 'Dorian', secondary: 'Minor Pentatonic' },
        moodKeywords: ['Adrenaline', 'Futuristic', 'Intense', 'Tech']
    },
    tension: {
        tempo: '100-120 BPM',
        rhythm: 'Steady synth pulse, heartbeat kick',
        harmony: 'Diminished, Locrian, Tritone intervals',
        scales: { primary: 'Locrian', secondary: 'Octatonic' },
        moodKeywords: ['Tense', 'Dangerous', 'Unknown', 'Creepy']
    },
    emotional: {
        tempo: '60-80 BPM',
        rhythm: 'Slow, breathing pads, sparse piano',
        harmony: 'Major 7ths, Suspended chords, Pedal points',
        scales: { primary: 'Ionian', secondary: 'Mixolydian' },
        moodKeywords: ['Hopeful', 'Melancholic', 'Human', 'Beautiful']
    }
};

const getCategoryDetails = (style, context) => {
    let type = 'exploration'; // default

    if (context.includes('Chase') || context.includes('Uprising') || context.includes('Battle') || style.includes('Hard')) {
        type = 'action';
    } else if (context.includes('Hacking') || context.includes('Crowd') || context.includes('Critical')) {
        type = 'tension';
    } else if (context.includes('Love') || context.includes('Awakening') || context.includes('Melancholy')) {
        type = 'emotional';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateSciFiSubcategories = (count) => {
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
                title = `${style}: ${context} in ${location}`;
            } else if (r < 0.66) {
                title = `${context} at ${location} (${element})`;
            } else {
                title = `${location}: ${context} - ${style}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context);
        const { template, type } = details;

        let orchestration = 'Synths, Sound Design, Hybrid Strings';
        if (style.includes('Orchestral') || style.includes('Space Opera')) orchestration = 'Full Orchestra + Synths';
        if (style.includes('Retro')) orchestration = 'Analog Synths (CS-80), Drum Machines';
        if (style.includes('Cyberpunk')) orchestration = 'Distorted Bass, Saw Leads, Glitch FX';

        const prompt = `Compose a Sci-Fi/Futuristic track. Title: "${title}". Tempo: ${template.tempo}. Mood: ${template.moodKeywords.join(', ')}.
        Style: ${style}. Scale: ${template.scales.primary} (${template.scales.secondary} nuances).
        Instrumentation: ${orchestration}.
        Rhythm: ${template.rhythm}.
        Harmony: ${template.harmony}.
        Scenario: ${context} in ${location}, ${element}.
        Focus on: High-tech atmosphere, futuristic textures, and immersion.`;

        generated.push({
            id: `scifi-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: `A ${style} track for ${context}. Setting: ${location}. Condition: ${element}.`,
            tags: [template.moodKeywords[0], style, 'Sci-Fi'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Synth leads, Evolving pads, Arpeggios',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Theme',
                    scales: template.scales,
                    chords: {
                        types: 'Sus2, Major 7, Quartal stacks',
                        progressions: [
                            'I - bVII - IV (Space Wonder)',
                            'i - bVI - bIII - bVII (Epic)',
                            'Pedal Point Drones'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedSciFiSubcategories = generateSciFiSubcategories(10000);
