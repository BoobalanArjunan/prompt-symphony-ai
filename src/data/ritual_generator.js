// Seed for stability
let seed = 66778899;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    'Ancient Chant', 'Dark Ritual', 'Pagans Folk', 'Eldritch Summoning',
    'Tribal Ceremony', 'Gothic Cathedral', 'Shamans Trance', 'Cult Horror',
    'Forbidden Spell', 'Sacrificial Rite', 'Mystic Drone', 'Occult Ambient'
];

const contexts = [
    'Summoning an Ancient God', 'Preparing a Sacrifice', 'Entering the Forbidden Temple', 'Reading the Cursed Book',
    'Dancing Around Fire', 'Chanting in Unison', 'Drinking the Elixir', 'Awakening the Sleeper',
    'Drawing a Pentagram', 'Walking to the Altar', 'Communing with Spirits', 'Banishing a Demon',
    'Blood Moon Rising', 'Eclipse Ceremony', 'Initiation Rite', 'Funeral for a King'
];

const locations = [
    'Stone Circle', 'Underground Catacombs', 'Cursed Forest', 'Abandoned Church',
    'Mountain Peak at Night', 'Desert Temple', 'Swamp Hut', 'Cave of Echoes',
    'Volcanic Altar', 'Ancient Ruins', 'Hidden Crypt', 'Sacred Grove',
    'Void Dimension', 'Frozen Wasteland', 'Pyramid Chamber', 'Haunted Village'
];

const elements = [
    'With Heavy Drums', 'In Total Darkness', 'With Glowing Runes', 'During a Storm',
    'With Whispering Voices', 'Under Red Sky', 'With Burning Incense', 'In Slow Procession',
    'With Animal Masks', 'Bleeding Statues', 'With Distorted Reality', 'Surrounded by Fog'
];

const theoryTemplates = {
    chant: {
        tempo: '60-80 BPM',
        rhythm: 'Repetitive, hypnotic, slow march',
        harmony: 'Drone-based, Parallel 5ths',
        scales: { primary: 'Phrygian', secondary: 'Minor Pentatonic' },
        moodKeywords: ['Hypnotic', 'Ancient', 'Vocal', 'Repetitive']
    },
    dark: {
        tempo: '50-70 BPM',
        rhythm: 'Heavy, sporadic impacts',
        harmony: 'Dissonant clusters, Minor 2nds, Tritones',
        scales: { primary: 'Locrian', secondary: 'Diminished' },
        moodKeywords: ['Evil', 'Forbidden', 'Terrifying', 'Dark']
    },
    tribal: {
        tempo: '90-120 BPM',
        rhythm: 'Driving triplets, polyrhythms',
        harmony: 'Minimal, focus on percussion texture',
        scales: { primary: 'Dorian', secondary: 'Mixolydian' },
        moodKeywords: ['Primal', 'Energetic', 'Raw', 'Intense']
    },
    mystic: {
        tempo: 'Free Time (Drone)',
        rhythm: 'Undefined, breath-based',
        harmony: 'Microtonal, overtone singing',
        scales: { primary: 'Lydian #5', secondary: 'Harmonic Major' },
        moodKeywords: ['Mystical', 'Otherworldly', 'Spiritual', 'Strange']
    }
};

const getCategoryDetails = (style, context) => {
    let type = 'chant'; // default

    if (style.includes('Dark') || style.includes('Eldritch') || context.includes('Sacrifice')) {
        type = 'dark';
    } else if (style.includes('Tribal') || style.includes('Shamans') || context.includes('Dancing')) {
        type = 'tribal';
    } else if (style.includes('Mystic') || context.includes('Communing')) {
        type = 'mystic';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateRitualSubcategories = (count) => {
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
                title = `${context} at ${location} (${element})`;
            } else {
                title = `${location} Ritual - ${style}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context);
        const { template, type } = details;

        let orchestration = 'Choir, Frame Drums, Drones';
        if (type === 'chant') orchestration = 'Male Choir (Bass/Baritone), Throat Singing, Deep Bell';
        if (type === 'dark') orchestration = 'Low Brass, Waterphone, Distorted Cello, Chains';
        if (type === 'tribal') orchestration = 'Taiko Drums, Shakers, Bone Flutes, Vocal Yells';
        if (type === 'mystic') orchestration = 'Singing Bowls, Gongs, Overtone Choir, Bowed Metal';

        const prompt = `Compose a Ritual/Occult track. Title: "${title}". Tempo: ${template.tempo}. Mood: ${template.moodKeywords.join(', ')}.
        Style: ${style}. Scale: ${template.scales.primary} (${template.scales.secondary} nuances).
        Instrumentation: ${orchestration}.
        Rhythm: ${template.rhythm}.
        Harmony: ${template.harmony}.
        Scenario: ${context} in ${location}, ${element}.
        Focus on: Repetition, ancient atmosphere, and building a trance-like state.`;

        generated.push({
            id: `ritual-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: `A ${style} ceremony for ${context} at ${location}. Condition: ${element}.`,
            tags: [template.moodKeywords[0], style, 'Ritual', 'Occult'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Chanted, limited range, repetitive',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Rite',
                    scales: template.scales,
                    chords: {
                        types: 'Power Chords, Clusters, Drone',
                        progressions: [
                            'i - bII - i (Phrygian toggle)',
                            'Constant Drone on Root',
                            'Im - bVI - dim7 - Im'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedRitualSubcategories = generateRitualSubcategories(10000);
