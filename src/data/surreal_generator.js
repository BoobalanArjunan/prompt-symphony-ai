// Seed for stability
let seed = 11223344;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    'Lucid Dream', 'Abstract Ambient', 'Psychedelic Drift', 'Shoegaze Texture',
    'Ethereal Drone', 'Hypnagogic Pop', 'Glitch Dream', 'Underwater Submerged',
    'Memory Haze', 'Astral Projection', 'Mirror World', 'Time Loop'
];

const contexts = [
    'Walking in a Memory', 'Flying Without Wings', 'Underwater Breathing', 'Looking at Old Photos',
    'Entering a Portal', 'Meeting a Faceless Figure', 'A Clock Melting', 'Infinite Hallway',
    'Falling Slowly', 'Talking to Animals', 'Changing Seasons Instantly', 'Floating in Void',
    'Deja Vu Moment', 'Out of Body Experience', ' Lucid Realization', 'Waking Up Loop'
];

const locations = [
    'Cloud Castle', 'Upside Down Forest', 'Mirror City', 'Endless Ocean',
    'White Room', 'Glass Desert', 'Neon Jungle', 'Subconscious Mind',
    'Childhood Home (Distorted)', 'Staircase to Nowhere', 'Melting Landscape', 'Crystal Cage',
    'Field of Clocks', 'Zero Gravity Garden', 'Aurora Borealis', 'Inside a Painting'
];

const elements = [
    'In Reverse Motion', 'With Echoing Whispers', 'In Slow Motion', 'With Blurring Vision',
    'Under Purple Sky', 'With Gravity Shifting', 'In Black and White', 'With Muffled Sound',
    'Glowing Softly', 'Disintegrating into Sand', 'Frozen in Time', 'Repeating Endlessly'
];

const theoryTemplates = {
    floating: {
        tempo: 'Free Time or 60 BPM',
        rhythm: 'Non-metric, flowing, washed out',
        harmony: 'Lydian, Major 7ths, No resolution',
        scales: { primary: 'Lydian', secondary: 'Whole Tone' },
        moodKeywords: ['Floating', 'Ethereal', 'Weightless', 'Peaceful']
    },
    unsettling: {
        tempo: 'Unstable, shifting pulses',
        rhythm: 'Glitchy, reversed percussion',
        harmony: 'Locrian, Bitonal clusters',
        scales: { primary: 'Whole Tone', secondary: 'Locrian' },
        moodKeywords: ['Strange', 'Disorienting', 'Bizarre', 'Unreal']
    },
    nostalgic: {
        tempo: '50-70 BPM',
        rhythm: 'Slow, dusty, tape warble',
        harmony: 'Major 7, Add9, drifting pitch',
        scales: { primary: 'Major Pentatonic', secondary: 'Mixolydian' },
        moodKeywords: ['Nostalgic', 'Hazy', 'Warm', 'Fading']
    },
    psychedelic: {
        tempo: '80-100 BPM (Groovy but loose)',
        rhythm: 'Delay-heavy, swirling visuals',
        harmony: 'Phrygian Major, Chromatic mediants',
        scales: { primary: 'Phrygian Dominant', secondary: 'Lydian Dominant' },
        moodKeywords: ['Trippy', 'Colorful', 'Vibrant', 'Expanding']
    }
};

const getCategoryDetails = (style, context) => {
    let type = 'floating'; // default

    if (style.includes('Glitch') || style.includes('Mirror') || context.includes('Melting')) {
        type = 'unsettling';
    } else if (style.includes('Memory') || style.includes('Haze') || context.includes('Photos')) {
        type = 'nostalgic';
    } else if (style.includes('Psychedelic') || context.includes('Portal') || style.includes('Loop')) {
        type = 'psychedelic';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateSurrealSubcategories = (count) => {
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
                title = `${location} Dream - ${style}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context);
        const { template, type } = details;

        let orchestration = 'Pads, Piano, Reverse FX';
        if (type === 'floating') orchestration = 'Lush Synth Pads, Glass Harp, Bowed Vibraphone';
        if (type === 'unsettling') orchestration = 'Detuned Piano, Reverse Cymbals, Granular Synthesis';
        if (type === 'nostalgic') orchestration = 'Tape-saturated Piano, Mellotron, Vinyl Crackle';
        if (type === 'psychedelic') orchestration = 'Sitar, Phaser Guitar, Hammond Organ, Delay';

        const prompt = `Compose a Surreal/Dreamscape track. Title: "${title}". Tempo: ${template.tempo}. Mood: ${template.moodKeywords.join(', ')}.
        Style: ${style}. Scale: ${template.scales.primary} (${template.scales.secondary} nuances).
        Instrumentation: ${orchestration}.
        Rhythm: ${template.rhythm}.
        Harmony: ${template.harmony}.
        Scenario: ${context} in ${location}, ${element}.
        Focus on: Creating a sense of unreality, blurring the lines of time, and avoiding strong resolutions.`;

        generated.push({
            id: `surreal-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: `A ${style} dream sequence: ${context} at ${location}. Condition: ${element}.`,
            tags: [template.moodKeywords[0], style, 'Surreal', 'Dream'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Drifting, fragmented, echoing',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Dream',
                    scales: template.scales,
                    chords: {
                        types: 'Maj7, Sus2, Polychords',
                        progressions: [
                            'I - II (#4 Lydian shift)',
                            'Cmaj7 - Ebmaj7 - Gbmaj7 (Planing)',
                            'Static Chord held for 4 bars'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedSurrealSubcategories = generateSurrealSubcategories(10000);
