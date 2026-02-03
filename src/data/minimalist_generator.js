// Seed for stability
let seed = 34343434;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    'Glassy Minimal', 'Pulsing Synth', 'Organic Repetition', 'Piano Arpeggios',
    'Tech Minimal', 'Ambient Pulse', 'Mathematical Loop', 'Time-Lapse',
    'Documentary Underscore', 'Scientific Analysis', 'Neutral Tension', 'Evolving Systems'
];

const contexts = [
    'Watching Clouds Pass', 'Traffic at Night', 'Building a Machine', 'Solving a Math Problem',
    'Coding Late Night', 'Waiting in a Lobby', 'Observing Ants', 'Loading Screen',
    'Train Journey Window', 'Studying Patterns', 'Clock Ticking', 'City Waking Up',
    'Data Transfer', 'Microscopic World', 'Architecture Montage', 'Growing Plants'
];

const locations = [
    'Modern Office', 'Laboratory', 'Train Station', 'Empty Highway',
    'Glass Skyscrapers', 'Server Room', 'Art Museum', 'Clean White Room',
    'Botanic Garden', 'Library Archive', 'Observatory', 'Digital Grid',
    'Subway Tunnel', 'Design Step', 'Quiet Study', 'Space Station Window'
];

const elements = [
    'With Steady Tick', 'In Fast Forward', 'With Gentle Beeps', 'Under Fluorescent Light',
    'With Soft Marimba', 'In Perfect Sync', 'With Evolving Filters', 'Under Microscope',
    'With Clean Lines', 'In Pattern Loop', 'With Subtle Delay', 'Flowing Smoothly'
];

const theoryTemplates = {
    pulse: {
        tempo: '100-120 BPM',
        rhythm: 'Stereo delay 8th notes, steady kick',
        harmony: 'Static, very slow changes',
        scales: { primary: 'Dorian', secondary: 'Mixolydian' },
        moodKeywords: ['Hypnotic', 'Steady', 'Focused', 'Tech']
    },
    organic: {
        tempo: '80-100 BPM',
        rhythm: 'Polyrhythmic layers (3 against 4)',
        harmony: 'Major 7ths, Add9s',
        scales: { primary: 'Major', secondary: 'Lydian' },
        moodKeywords: ['Organic', 'Flowing', 'Beautiful', 'Calm']
    },
    glass: {
        tempo: '90-110 BPM',
        rhythm: 'Staccato arpeggios, sharp attacks',
        harmony: 'Cluster chords, diatonic stacking',
        scales: { primary: 'Ionian', secondary: 'Whole Tone' },
        moodKeywords: ['Clean', 'Sharp', 'Bright', 'Detailed']
    }
};

const getCategoryDetails = (style, context) => {
    let type = 'pulse'; // default

    if (style.includes('Organic') || context.includes('Plants') || context.includes('Clouds')) {
        type = 'organic';
    } else if (style.includes('Glassy') || style.includes('Math') || context.includes('Architecture')) {
        type = 'glass';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateMinimalistSubcategories = (count) => {
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
                title = `${location} Loop - ${style}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context);
        const { template, type } = details;

        let orchestration = 'Piano, Marimba, Sine Waves';
        if (type === 'pulse') orchestration = 'Analog Synth Plucks, Muted Guitar, Shaker';
        if (type === 'organic') orchestration = 'Acoustic Guitar, Woodwinds, Kalimba';
        if (type === 'glass') orchestration = 'Celeste, Glockenspiel, High Piano, Pizzicato';

        const prompt = `Compose a Minimalist Pulse track. Title: "${title}". Tempo: ${template.tempo}. Mood: ${template.moodKeywords.join(', ')}.
        Style: ${style}. Scale: ${template.scales.primary} (${template.scales.secondary} nuances).
        Instrumentation: ${orchestration}.
        Rhythm: ${template.rhythm}.
        Harmony: ${template.harmony}.
        Scenario: ${context} in ${location}, ${element}.
        Focus on: Repetition, gradual evolution, and hypnotic layering. Avoid big melodies.`;

        generated.push({
            id: `minimal-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: `A ${style} sequence: ${context} at ${location}. Condition: ${element}.`,
            tags: [template.moodKeywords[0], style, 'Minimalist', 'Pulse'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Ostinato patterns, arpeggios',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Loop',
                    scales: template.scales,
                    chords: {
                        types: 'Add9, Sus2, Major 7',
                        progressions: [
                            'I - V (Loop)',
                            'vi - IV - I - V (Axis)',
                            'Static Chord with shifting bass'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedMinimalistSubcategories = generateMinimalistSubcategories(10000);
