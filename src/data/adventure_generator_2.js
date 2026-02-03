// Seeded random number generator for stability
let seed = 555444333;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const subjects = [
    'Lost Explorer', 'Brave Knight', 'Curious Cartographer', 'Rogue Archaeologist', 'Nomadic Tribe',
    'Sky Pirate', 'Deep Sea Diver', 'Mountain Guide', 'Forest Ranger', 'Wandering Bard',
    'Royal Messenger', 'Exiled Prince', 'Veteran Sailor', 'Young Scout', 'Treasure Hunter',
    'Mystic Pilgrim', 'Grizzled Mercenary', 'Biology Team', 'Diplomatic Envoy', 'Solo Aviator',
    'Fallen Paladin', 'Elven Scout', 'Dwarven Miner', 'Time Traveler', 'Beast Tamer',
    'Spellsword', 'Merchant Caravan', 'Bounty Hunter', 'Druid Circle', 'Cartel Smuggler'
];

const actions = [
    'Discovering', 'Traversing', 'Climbing', 'Sailing', 'Mapping', 'Escaping',
    'Investigating', 'Crossing', 'Searching for', 'Uncovering', 'Navigating', 'Surviving',
    'Camping in', 'Descending into', 'Flying over', 'Documenting', 'Guarding', 'Restoring',
    'Trading in', 'Studying', 'Defending', 'Raiding', 'Infiltrating', 'Rescuing',
    'Deciphering', 'Hunting', 'Taming', 'Constructing', 'Fleeing from', 'Awakening'
];

const places = [
    'Ancient Ruins', 'Dense Jungle', 'High Mountain Pass', 'Crystal Cave', 'Sunken City',
    'Vast Desert', 'Frozen Tundra', 'Hidden Valley', 'Foggy Swamp', 'Volcanic Crater',
    'Underground River', 'Floating Archipelago', 'Coral Reef', 'Abandoned Mine', 'Secret Temple',
    'Giant Redwood Forest', 'Windy Canyon', 'Coastal Cliffs', 'Moonlit Oasis', 'Stormy Sea',
    'Dragon\'s Lair', 'Cloud Fortress', 'Haunted Mangrove', 'Petrified Forest', 'Obsidian Spire',
    'Glacial Crevasse', 'Mushroom Cavern', 'Starfall Crater', 'Forgotten Library', 'Celestial Observatory'
];

const atmospheres = [
    'During Sunrise', 'Under Full Moon', 'In Heavy Rain', 'Amidst Dense Fog', 'During Snowstorm',
    'At Sunset', 'In Blinding Heat', 'Under Aurora', 'In Pitch Darkness', 'With Strong Winds',
    'During Eclipse', 'In Spring Bloom', 'After the Storm', 'In Golden Hour', 'Under Starry Sky',
    'Amidst Falling Ash', 'In Magical Twilight', 'During Solar Flare', 'Under Double Rainbow',
    'Amidst Fireflies', 'In Hailstorm', 'During Earthquake', 'In Zero Gravity', 'Under Blood Moon'
];

const theoryTemplates = {
    heroic: {
        harmony: 'Major, Bold Fanfares, Strong Cadences',
        scales: {
            primary: 'Mixolydian',
            secondary: 'Major Pentatonic'
        },
        chordTypes: 'Major Triads, Sus4, Power Chords',
        moodKeywords: ['Heroic', 'Brave', 'Bold', 'Triumphant']
    },
    wonder: {
        harmony: 'Lydian, Sparkling, Wide Voicings',
        scales: {
            primary: 'Lydian',
            secondary: 'Major (Ionian)'
        },
        chordTypes: 'Maj7#11, Add9, Polychords',
        moodKeywords: ['Wonder', 'Awe', 'Magical', 'Beautiful']
    },
    mysterious: {
        harmony: 'Minor, Chromatic Mediants, Unresolved',
        scales: {
            primary: 'Dorian',
            secondary: 'Harmonic Minor'
        },
        chordTypes: 'MinMaj7, Diminished, Augmented',
        moodKeywords: ['Mysterious', 'Secretive', 'Cryptic', 'Unknown']
    },
    magical: {
        harmony: 'Floating, Whole Tone accents, Harp textures',
        scales: {
            primary: 'Lydian Dominant',
            secondary: 'Whole Tone'
        },
        chordTypes: 'Augmented, Maj7#5, Cluster',
        moodKeywords: ['Magical', 'Enchanted', 'Whimsical', 'Spiritual']
    },
    calm: {
        harmony: 'Pastoral, Diatonic, Slow harmonic rhythm',
        scales: {
            primary: 'Major (Ionian)',
            secondary: 'Pentatonic'
        },
        chordTypes: 'Maj7, Add9, Sus2',
        moodKeywords: ['Calm', 'Peaceful', 'Serene', 'Reflective']
    }
};

const getCategoryDetails = (subject, action, place, atmosphere) => {
    let type = 'wonder'; // default

    // Logic mapping
    if (['Brave Knight', 'Sky Pirate', 'Exiled Prince', 'Veteran Sailor'].includes(subject) ||
        ['Climbing', 'Sailing', 'Escaping'].includes(action)) {
        type = 'heroic';
    } else if (['Rogue Archaeologist', 'Deep Sea Diver', 'Detective'].includes(subject) ||
        ['Investigating', 'Uncovering', 'Descending into'].includes(action) ||
        ['Foggy Swamp', 'Underground River', 'Secret Temple'].includes(place)) {
        type = 'mysterious';
    } else if (['Mystic Pilgrim', 'Wandering Bard'].includes(subject) ||
        ['Crystal Cave', 'Floating Archipelago'].includes(place) ||
        atmosphere.includes('Aurora') || atmosphere.includes('Eclipse')) {
        type = 'magical';
    } else if (['Forest Ranger', 'Biology Team', 'Nomadic Tribe'].includes(subject) ||
        ['Camping in', 'Studying', 'Restoring'].includes(action) ||
        ['Hidden Valley', 'Moonlit Oasis', 'Giant Redwood Forest'].includes(place)) {
        type = 'calm';
    } else if (['Curious Cartographer', 'Solo Aviator', 'Young Scout'].includes(subject) ||
        ['Discovering', 'Mapping', 'Flying over'].includes(action)) {
        type = 'wonder';
    }

    // Tempo logic
    let tempoRange = '90-110 BPM';
    let tempoType = 'Medium';

    if (type === 'heroic') {
        tempoRange = '110-130 BPM';
        tempoType = 'Fast';
    } else if (type === 'calm' || type === 'magical') {
        tempoRange = '60-80 BPM';
        tempoType = 'Slow';
    } else if (type === 'mysterious') {
        tempoRange = '70-90 BPM';
        tempoType = 'Slow';
    }

    return { type, tempoRange, tempoType, template: theoryTemplates[type] };
};

export const generateAdventureSubcategories2 = (count) => {
    const generated = [];
    const usedTitles = new Set();
    const actualCount = Math.min(count, 8000);

    for (let i = 0; i < actualCount; i++) {
        let subject, action, place, atmosphere;
        let title;

        // Retry until unique
        let attempts = 0;
        do {
            subject = getRandomItem(subjects);
            action = getRandomItem(actions);
            place = getRandomItem(places);
            atmosphere = getRandomItem(atmospheres);

            const r = random();
            if (r < 0.33) {
                title = `${subject} ${action} ${place}`;
            } else if (r < 0.66) {
                title = `${action} ${place} ${atmosphere}`;
            } else {
                title = `${subject} In ${place} ${atmosphere}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(subject, action, place, atmosphere);
        const { template, tempoRange, tempoType } = details;

        // Orchestration
        let orchestration = 'Full Orchestra, Focus on Horns/Strings';
        if (details.type === 'calm') orchestration = 'Solo Woodwinds, Acoustic Guitar, Light Strings';
        if (details.type === 'magical') orchestration = 'Harp, Celesta, High Strings, Choir';
        if (details.type === 'mysterious') orchestration = 'Tremolo Strings, Low Woodwinds, Marimba';
        if (details.type === 'heroic') orchestration = 'Brass Section, Percussion, Soaring Strings';
        if (details.type === 'wonder') orchestration = 'French Horns, Flutes, Swelling Strings';

        let melodyDescription = 'Sweeping, wide intervals';
        if (details.type === 'calm') melodyDescription = 'Gentle, lyrical, stepwise';
        if (details.type === 'mysterious') melodyDescription = 'Fragmented, chromatic, low register';
        if (details.type === 'heroic') melodyDescription = 'Bold, fanfare-like, rhythmic';

        let rhythmDescription = 'Flowing 12/8 or steady 4/4';
        if (details.type === 'heroic') rhythmDescription = 'Driving, galloping (triplets), syncopated accents';
        if (details.type === 'calm') rhythmDescription = 'Free flowing, rubato, gentle pulse';

        const moodText = `${template.moodKeywords.join(', ')}. An adventure featuring ${subject} ${action.toLowerCase()} in ${place}. Atmosphere: ${atmosphere}.`;

        const prompt = `Compose an Adventure track. Title: "${title}". Tempo: ${tempoRange}. Mood: ${template.moodKeywords.join(', ')}. 
        Use ${template.scales.primary} scale for a ${details.type} feel. 
        Instrumentation: ${orchestration}. 
        Rhythm: ${rhythmDescription}. 
        Harmonic Texture: ${template.harmony}. 
        Scenario: ${subject} ${action} in ${place}, ${atmosphere}. 
        Dynamics: Expressive and evolving. Capture the spirit of exploration and ${details.type}.`;

        generated.push({
            id: `adventure-gen-2-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [details.type.charAt(0).toUpperCase() + details.type.slice(1), tempoType, 'Adventure', 'Exploration'],
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
                            'I - bVII - IV - I',
                            'I - V - vi - IV',
                            'i - VI - VII - i (Heroic Minor)'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

// Generating 8,000 as requested
export const generatedAdventureSubcategories2 = generateAdventureSubcategories2(8000);
