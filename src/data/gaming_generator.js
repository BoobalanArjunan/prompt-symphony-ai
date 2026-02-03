// Seeded random number generator for stability
let seed = 12345678;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    '8-Bit Retro', 'Orchestral Hybrid', 'Cyberpunk Synthwave', 'Dark Souls Style',
    'JRPG Fantasy', 'Atmospheric Horror', 'Lo-Fi Chill', 'High-Octane Racing',
    'Industrial Metal', 'Minimalist Ambient', 'Epic Choral', 'Tactical Stealth'
];

const contexts = [
    'Boss Battle (Phase 1)', 'Boss Battle (Final Form)', 'Dungeon Exploration', 'Safe Room / Save Point',
    'Overworld Travel', 'Shop / Merchant', 'Victory Fanfare', 'Game Over Screen',
    'Stealth Mission', 'Puzzle Solving', 'Speedrun Chase', 'Main Menu',
    'Character Select', 'Cutscene (Sad)', 'Cutscene (Action)', 'Tutorial Level'
];

const locations = [
    'Cyber City', 'Enchanted Forest', 'Volcanic Core', 'Underwater Temple',
    'Abandoned Space Station', 'Haunted Castle', 'Desert Ruins', 'Floating Islands',
    'Pixel Kingdom', 'Toxic Wasteland', 'Crystal Cavern', 'Ancient Library',
    'War-Torn Battlefield', 'Neon Nightclub', 'Frozen Tundra', 'Alien Hive'
];

const elements = [
    'Low Health', 'Time Running Out', 'Power-Up Active', 'Stealth Meter Full',
    'Enemy Alerted', 'Rainy Night', 'Underwater Level', 'Boss Enraged',
    'Heavy Fog', 'Zero Gravity', 'Glitch Mode', 'Double Speed'
];

const theoryTemplates = {
    exploration: {
        tempo: '80-110 BPM',
        rhythm: 'Steady, walking pace, light percussion',
        harmony: 'Dorian mode (i-IV), Major Pentatonic',
        scales: { primary: 'Dorian', secondary: 'Mixolydian' },
        moodKeywords: ['Curious', 'Adventurous', 'Steady', 'Atmospheric']
    },
    combat: {
        tempo: '140-170 BPM',
        rhythm: 'Driving 16th notes, aggressive accents',
        harmony: 'Aeolian, Phrygian loops (i-bVI-bVII)',
        scales: { primary: 'Aeolian', secondary: 'Phrygian' },
        moodKeywords: ['Intense', 'Aggressive', 'Action-packed', 'Danger']
    },
    boss: {
        tempo: '160-200 BPM',
        rhythm: 'Complex, changing meters, relentless',
        harmony: 'Harmonic Minor, Diminished, Tritones',
        scales: { primary: 'Harmonic Minor', secondary: 'Diminished' },
        moodKeywords: ['Epic', 'Terrifying', 'Grand', 'Climactic']
    },
    puzzle: {
        tempo: '60-80 BPM',
        rhythm: 'Sparse, non-intrusive, textural',
        harmony: 'Lydian, Whole Tone, suspended chords',
        scales: { primary: 'Lydian', secondary: 'Whole Tone' },
        moodKeywords: ['Mysterious', 'Calm', 'Intellectual', 'Ethereal']
    },
    menu: {
        tempo: '90-120 BPM',
        rhythm: 'Groovy, loopable, steady',
        harmony: 'Major 7ths, Neo-Soul, or Heroic Fanfare',
        scales: { primary: 'Major Scale', secondary: 'Lydian' },
        moodKeywords: ['Welcoming', 'Anticipatory', 'Cool', 'Memorable']
    }
};

const getCategoryDetails = (style, context) => {
    let type = 'exploration'; // default

    if (context.includes('Boss') || context.includes('Chase')) {
        type = 'boss';
    } else if (context.includes('Combat') || context.includes('Battle') || style.includes('Metal') || style.includes('High-Octane')) {
        type = 'combat';
    } else if (context.includes('Puzzle') || context.includes('Safe Room') || style.includes('Ambient')) {
        type = 'puzzle';
    } else if (context.includes('Menu') || context.includes('Select') || context.includes('Shop')) {
        type = 'menu';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateGamingSubcategories = (count) => {
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
                title = `${style} ${context} in ${location}`;
            } else if (r < 0.66) {
                title = `${context} at ${location} (${element})`;
            } else {
                title = `${location} ${context} - ${style} Style`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context);
        const { template, type } = details;
        const moodKeywords = template.moodKeywords;

        let orchestration = 'Hybrid Orchestra + Synths';
        if (style.includes('8-Bit')) orchestration = 'Chiptune Synths, Square Waves, Noise Drums';
        if (style.includes('Orchestral')) orchestration = 'Full Orchestra, Epic Percussion';
        if (style.includes('Retro')) orchestration = 'Analog Synths, Drum Machines, Reverb';
        if (style.includes('Metal')) orchestration = 'Distorted Guitars, Double Kick Drums, Bass';

        const moodText = `A loopable ${style} track for ${context} in ${location}. Condition: ${element}.`;

        const prompt = `Compose a loopable Video Game track. Title: "${title}". Tempo: ${template.tempo}. Mood: ${moodKeywords.join(', ')}. 
        Style: ${style}. Scale: ${template.scales.primary} (${template.scales.secondary} nuances).
        Instrumentation: ${orchestration}. 
        Rhythm: ${template.rhythm}. 
        Harmony: ${template.harmony}. 
        Scenario: ${context} in ${location}, ${element}. 
        Focus on: Seamless looping, strong motifs, and game-state energy.`;

        generated.push({
            id: `gaming-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [moodKeywords[0], style, 'Gaming', 'Loopable'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Short, memorable motifs, repeatable',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Loop',
                    scales: template.scales,
                    chords: {
                        types: 'Triads, Power Chords, 7ths',
                        progressions: [
                            'i - VI - III - VII',
                            'i - bII - i (Tension)',
                            'I - V - vi - IV (Heroic)'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedGamingSubcategories = generateGamingSubcategories(10000);
