// Seed for stability
let seed = 56565656;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    'Data Corruption', 'System Failure', 'Glitch Hop', 'IDM Texture',
    'Broken Simulation', 'Digital Noise', 'Fragmented Memory', 'Bitcrushed Chaos',
    'Cyber Attack', 'Circuit Bending', 'Error Code', 'Reality Distortion'
];

const contexts = [
    'Hacking the Mainframe', 'Game Crashing', 'Memory Deletion', 'Virus Uploading',
    'Reality Breaking Apart', 'Time Skipping', 'Robot Malfunction', 'Corrupted File',
    'Simulation Glitch', 'Entering the Matrix', 'Signal Loss', 'Digital Ghost',
    'Blue Screen of Death', 'Overclocking CPU', 'Encryption Key Found', 'System Reboot Loop'
];

const locations = [
    'Server Farm', 'Virtual Reality Void', 'Cyber Slums', 'Digital Highway',
    'Corrupted Hard Drive', 'Hacker\'s Den', 'Broken Screen', 'Matrix Code',
    'Glitch City', 'Dark Web', 'AI Core', 'Electric Wasteland',
    'Pixelated Forest', 'Void Space', 'Binary Tunnels', 'Static Dimension'
];

const elements = [
    'With Stuttering Beats', 'In Reverse', 'With White Noise', 'Under Heavy Distortion',
    'With Random Stops', 'In Low Bitrate', 'With Pitch Bends', 'With Chopped Vocals',
    'Flickering On and Off', 'Overloaded Audio', 'With Granular Textures', 'Skipping Like CD'
];

const theoryTemplates = {
    chaos: {
        tempo: '140-180 BPM',
        rhythm: 'Breakcore, erratic, random fills',
        harmony: 'Atonal, clusters, sharp dissonance',
        scales: { primary: 'Chromatic', secondary: 'Diminished' },
        moodKeywords: ['Chaotic', 'Broken', 'Aggressive', 'Fast']
    },
    system: {
        tempo: '90-110 BPM',
        rhythm: 'Hip-Hop groove, swung grid, micro-edits',
        harmony: 'Minor, Jazz extensions (7#9)',
        scales: { primary: 'Dorian', secondary: 'Blues' },
        moodKeywords: ['Funky', 'Glitchy', 'Cool', 'Digital']
    },
    decay: {
        tempo: '60-80 BPM',
        rhythm: 'Slow, dragging, time-stretched',
        harmony: 'Detuned, microtonal, haunting',
        scales: { primary: 'Whole Tone', secondary: 'Locrian' },
        moodKeywords: ['Decaying', 'Creepy', 'Lost', 'Distorted']
    }
};

const getCategoryDetails = (style, context) => {
    let type = 'system'; // default

    if (style.includes('Chaos') || style.includes('Attack') || context.includes('Crashing')) {
        type = 'chaos';
    } else if (style.includes('Memory') || style.includes('Corruption') || context.includes('Ghost')) {
        type = 'decay';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateGlitchSubcategories = (count) => {
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
                title = `${location} Error - ${style}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context);
        const { template, type } = details;

        let orchestration = 'Synths, Bitcrusher, Samples';
        if (type === 'chaos') orchestration = 'Distorted Drums, Amen Break, Saw Waves, Noise';
        if (type === 'system') orchestration = 'Sine Bass, 8-bit leads, Glitch Percussion';
        if (type === 'decay') orchestration = 'Time-stretched Piano, Granular Drones, Tape FX';

        const prompt = `Compose a Glitch/Fractured Reality track. Title: "${title}". Tempo: ${template.tempo}. Mood: ${template.moodKeywords.join(', ')}.
        Style: ${style}. Scale: ${template.scales.primary} (${template.scales.secondary} nuances).
        Instrumentation: ${orchestration}.
        Rhythm: ${template.rhythm}.
        Harmony: ${template.harmony}.
        Scenario: ${context} in ${location}, ${element}.
        Focus on: Unpredictability, digital artifacts, stutters, and a sense of something breaking.`;

        generated.push({
            id: `glitch-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: `A ${style} glitch: ${context} at ${location}. Condition: ${element}.`,
            tags: [template.moodKeywords[0], style, 'Glitch', 'Fractured'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Fragmented, chopped, non-linear',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Glitch',
                    scales: template.scales,
                    chords: {
                        types: 'Clusters, Detuned Triads, Samples',
                        progressions: [
                            'Random Root Movement',
                            'i - bV - i (Tritone jump)',
                            'Static Drone with random stabs'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedGlitchSubcategories = generateGlitchSubcategories(10000);
