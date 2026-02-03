// Seed for stability
let seed = 12121212;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    'Ancient Heroic', 'Nordic Legend', 'Greco-Roman Epic', 'Timeless Orchestral',
    'Lost Civilization', 'Biblical Epic', 'Fantasy Kingdom', 'Solemn War',
    'Prophetic Choral', 'Titan Origin', 'Ancestral Folk', 'Eternal Guardian'
];

const contexts = [
    'Forging the First Sword', 'The King\'s Funeral', 'Discovery of the Ruins', 'Reading the Prophecy',
    'Army Gathering', 'Hero\'s Sacrifice', 'Building the Wonder', 'Coronation Ceremony',
    'Walking the Path of Gods', 'Defending the Last Gate', 'Return of the King', 'Statues Coming to Life',
    'Secret of the Bloodline', 'Opening the Tomb', 'Lighting the Beacon', 'Crossing the Great Sea'
];

const locations = [
    'Temple of Zeus', 'Frozen Valhalla', 'Desert of Kings', 'Mountain Fortress',
    'Forgotten City', 'Sacred Grove', 'Hall of Ancestors', 'Gates of Babylon',
    'Sunken Atlantis', 'Eternal Flame Shrine', 'Throne Room', 'Great Wall',
    'Stonehenge Circle', 'Oracle\'s Cave', 'Hero\'s Grave', 'Golden Palace'
];

const elements = [
    'With Massive War Drums', 'Under Golden Sun', 'With Soaring Horns', 'In Slow Motion',
    'With Deep Male Choir', 'Amidst Falling Ash', 'With Ringing Bells', 'Under Heavy Rain',
    'Radiating Power', 'Carved in Stone', 'With Thunderous Bass', 'Echoing Through Time'
];

const theoryTemplates = {
    heroic: {
        tempo: '60-80 BPM',
        rhythm: 'Heavy, accented downbeats',
        harmony: 'Open 5ths, Major triads, no 3rds',
        scales: { primary: 'Major', secondary: 'Mixolydian' },
        moodKeywords: ['Noble', 'Grand', 'Timeless', 'Powerful']
    },
    solemn: {
        tempo: '50-70 BPM',
        rhythm: 'Slow march, dirge-like',
        harmony: 'Minor, Aeolian, Pedal tones',
        scales: { primary: 'Aeolian', secondary: 'Dorian' },
        moodKeywords: ['Solemn', 'Ancient', 'Sad', 'Heavy']
    },
    legend: {
        tempo: '70-90 BPM',
        rhythm: 'Steady, rolling percussion',
        harmony: 'Modal interchange, Epic shifts',
        scales: { primary: 'Dorian', secondary: 'Lydian' },
        moodKeywords: ['Legendary', 'Mythic', 'Inspiring', 'Vast']
    }
};

const getCategoryDetails = (style, context) => {
    let type = 'heroic'; // default

    if (context.includes('Funeral') || context.includes('Sacrifice') || style.includes('Solemn')) {
        type = 'solemn';
    } else if (style.includes('Legend') || context.includes('Prophecy') || context.includes('Wonder')) {
        type = 'legend';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateMythicSubcategories = (count) => {
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
                title = `${style} Tale: ${context}`;
            } else if (r < 0.66) {
                title = `${context} at ${location}`;
            } else {
                title = `Legend of ${location}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context);
        const { template, type } = details;

        let orchestration = 'Full Orchestra, Deep Brass, Choir';
        if (type === 'solemn') orchestration = 'Low Strings, French Horns, Timpani';
        if (type === 'legend') orchestration = 'Duduk, Female Vocal, Orchestral Swells';

        const prompt = `Compose a Mythic/Legendary track. Title: "${title}". Tempo: ${template.tempo}. Mood: ${template.moodKeywords.join(', ')}.
        Style: ${style}. Scale: ${template.scales.primary} (${template.scales.secondary} nuances).
        Instrumentation: ${orchestration}.
        Rhythm: ${template.rhythm}.
        Harmony: ${template.harmony}.
        Scenario: ${context} in ${location}, ${element}.
        Focus on: Weight, history, and a sound that feels "carved in stone". Use open intervals for grandeur.`;

        generated.push({
            id: `mythic-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: `A ${style} scene: ${context} at ${location}. Condition: ${element}.`,
            tags: [template.moodKeywords[0], style, 'Mythic', 'Legendary'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Slow, noble, wide intervals',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Saga',
                    scales: template.scales,
                    chords: {
                        types: 'Power Chords (5ths), Sus4',
                        progressions: [
                            'i - VII - VI - VII (Aeolian)',
                            'I - bVII - IV - I (Mixolydian)',
                            'Open 5th Drone builds'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedMythicSubcategories = generateMythicSubcategories(10000);
