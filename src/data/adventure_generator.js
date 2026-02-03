// Seeded random number generator for stability
let seed = 543219876;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const journeyTypes = [
    'Journey', 'Expedition', 'Voyage', 'Trek', 'Quest', 'Exploration',
    'Pilgrimage', 'Discovery', 'Crossing', 'Ascent', 'Descent', 'Search',
    'Passage', 'Return'
];

const locations = [
    'Ancient Ruins', 'Lost City', 'Floating Mountains', 'Endless Desert',
    'Crystal Forest', 'Frozen Tundra', 'Mystic River', 'Hidden Valley',
    'Sky Kingdom', 'Deep Jungle', 'Sunken Temple', 'Golden Canyon',
    'Whispering Caves', 'Cloud Seas', 'Forgotten Island', 'Star Valley'
];

const goals = [
    'Treasure Hunt', 'Secret Map', 'Hidden Portal', 'Sacred Relic',
    'Ancient Machine', 'Dragon Trail', 'Forgotten Library', 'Time Gate',
    'Spirit Shrine', 'Giant Tree', 'Celestial Bridge', 'Echoing Obelisk',
    'Magic Compass', 'Solar Temple'
];

const twists = [
    'At Dawn', 'Under Starlight', 'In Endless Fog', 'During Eclipse',
    'Beneath Aurora', 'In Gentle Rain', 'Under Twin Suns', 'In Shifting Sands',
    'Amid Falling Ash', 'Through Glowing Mist'
];

const theoryTemplates = {
    wonder: {
        harmony: 'Lydian mode, add9, Major with #4',
        scales: {
            primary: 'Lydian',
            secondary: 'Major Pentatonic, Ionian'
        },
        chordTypes: 'Maj7, Add9, Sus2, Lydian clusters',
        moodKeywords: ['Wonder', 'Bright', 'Discovery', 'Expansive']
    },
    heroic: {
        harmony: 'Dorian, Aeolian, Melodic Minor, Consonant but strong',
        scales: {
            primary: 'Dorian',
            secondary: 'Aeolian, Melodic Minor'
        },
        chordTypes: 'Minor 7, Sus4, Major chords (IV)',
        moodKeywords: ['Heroic', 'Epic', 'Brave', 'Triumphant']
    },
    mystery: {
        harmony: 'Aeolian, Phrygian, Harmonic Minor, Modal interchange',
        scales: {
            primary: 'Aeolian',
            secondary: 'Phrygian, Harmonic Minor'
        },
        chordTypes: 'Minor 9, Sus4, Diminished, Pedal tones',
        moodKeywords: ['Mysterious', 'Ancient', 'Reflective', 'Secretive']
    },
    magical: {
        harmony: 'Lydian, Whole Tone, Ethereal textures',
        scales: {
            primary: 'Lydian',
            secondary: 'Whole Tone, Lydian Dominant'
        },
        chordTypes: 'Augmented, Maj7#5, Polychords',
        moodKeywords: ['Magical', 'Ethereal', 'Celestial', 'Enchanted']
    }
};

const getCategoryDetails = (journey, location, goal, twist) => {
    let type = 'mystery'; // default

    // Logic mapping
    if (['Floating Mountains', 'Crystal Forest', 'Sky Kingdom', 'Star Valley'].includes(location) ||
        ['Celestial Bridge', 'Magic Compass', 'Spirit Shrine', 'Time Gate'].includes(goal) ||
        ['Beneath Aurora', 'Through Glowing Mist'].includes(twist)) {
        type = 'magical';
    } else if (['Golden Canyon', 'Cloud Seas', 'Endless Desert'].includes(location) ||
        ['Discovery', 'Return', 'Ascent'].includes(journey) ||
        ['At Dawn', 'Under Twin Suns'].includes(twist)) {
        type = 'wonder';
    } else if (['Quest', 'Pilgrimage', 'Crossing', 'Voyage'].includes(journey) ||
        ['Dragon Trail', 'Solar Temple'].includes(goal)) {
        type = 'heroic';
    } else if (['Ancient Ruins', 'Lost City', 'Sunken Temple', 'Forgotten Catacombs', 'Whispering Caves', 'Deep Jungle'].includes(location) ||
        ['Secret Map', 'Hidden Portal', 'Echoing Obelisk'].includes(goal) ||
        ['In Endless Fog', 'During Eclipse'].includes(twist)) {
        type = 'mystery';
    }

    // Tempo logic
    let tempoRange = '70-140 BPM';
    let tempoType = 'Medium';

    if (['Ascent', 'Crossing', 'Trek'].includes(journey) || type === 'heroic') {
        tempoRange = '110-140 BPM';
        tempoType = 'Fast';
    } else if (['Exploration', 'Discovery', 'Pilgrimage'].includes(journey) && type !== 'heroic') {
        tempoRange = '60-90 BPM';
        tempoType = 'Slow';
    }

    return { type, tempoRange, tempoType, template: theoryTemplates[type] };
};

export const generateAdventureSubcategories = (count) => {
    const generated = [];
    const usedTitles = new Set();

    for (let i = 0; i < count; i++) {
        let journey, location, goal, twist;
        let title;

        let attempts = 0;
        do {
            journey = getRandomItem(journeyTypes);
            location = getRandomItem(locations);
            goal = getRandomItem(goals);
            twist = getRandomItem(twists);

            const r = random();
            if (r < 0.25) {
                title = `${location} ${journey} ${twist}`;
            } else if (r < 0.5) {
                title = `${goal} ${journey} ${twist}`;
            } else if (r < 0.75) {
                title = `${location} ${goal} ${twist}`;
            } else {
                title = `${twist} ${journey} to ${location}`; // Slightly varied format
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(journey, location, goal, twist);
        const { template, tempoRange, tempoType } = details;

        // Orchestration & Melody specific to types
        let orchestration = 'Strings, French Horns, Woodwinds, Light Percussion';
        if (details.type === 'magical') orchestration = 'Harp, Celesta, High Woodwinds, Ambient Pads, Strings';
        if (details.type === 'heroic') orchestration = 'Full Strings, Brass Fanfares, Timpani, Driving Percussion';
        if (details.type === 'mystery') orchestration = 'Low Flutes, Solo Cello, Soft Choir, Suspenseful Strings';
        if (details.type === 'wonder') orchestration = 'Lush Strings, Soaring Horns, Acoustic Guitar, Chimes';

        let melodyDescription = 'Long lyrical lines and rising themes';
        if (details.type === 'heroic') melodyDescription = 'Call-and-response motifs, strong anthem-like melody';
        if (details.type === 'mystery') melodyDescription = 'Fragmented, low register, wandering motifs';

        let rhythmDescription = 'Steady pulse, rolling percussion';
        if (details.type === 'heroic') rhythmDescription = 'Marching triplets, driving ostinato';
        if (details.type === 'wonder') rhythmDescription = 'Flowing 6/8 or gentle 4/4 smooth motion';
        if (details.type === 'mystery') rhythmDescription = 'Sparse, irregular, heavy pauses';

        const moodText = `${template.moodKeywords.join(', ')}. An exploration of ${location} on a ${journey}. Focus is ${goal}. Setting: ${twist}.`;

        const prompt = `Compose an Orchestral Adventure track. Title: "${title}". Tempo: ${tempoRange} (${tempoType}). Mood: ${template.moodKeywords.join(', ')}. 
        Use ${template.scales.primary} scale to convey a sense of ${details.type}. 
        Instrumentation: ${orchestration}. 
        Rhythm: ${rhythmDescription}. 
        Scenario: Traveling through ${location}, seeking ${goal}, ${twist}. 
        Dynamics: Gradual build from quiet openings to wide, epic vistas. Sweeping and cinematic.`;

        generated.push({
            id: `adv-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [template.moodKeywords[0], tempoType, 'Adventure', 'Procedural'],
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
                            'I - V - vi - IV',
                            'i - VI - III - VII',
                            'I(add9) - II - V - I'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedAdventureSubcategories = generateAdventureSubcategories(1000);
