// Seeded random number generator for stability
let seed = 777333111;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const subjects = [
    'Ancient Spellbook', 'Crystal Dragon', 'Hidden Portal', 'Enchanted Forest', 'Arcane Tower',
    'Floating Island', 'Moonlit Lake', 'Golden Phoenix', 'Runic Gate', 'Mystic Sword',
    'Celestial Crown', 'Whispering Tree', 'Starlight Bridge', 'Time Orb', 'Spirit Lantern',
    'Shadow Familiar', 'Sunken Throne', 'Astral Mirror', 'Elemental Core', 'Dreaming Giant'
];

const actions = [
    'Awakening', 'Summoning', 'Journey', 'Transformation', 'Revelation', 'Ritual', 'Flight',
    'Crossing', 'Discovery', 'Binding', 'Unsealing', 'Convergence', 'Ascension', 'Return',
    'Blessing', 'Trial', 'Guardian Call', 'Prophecy', 'Alignment', 'Passage'
];

const places = [
    'Sky Temple', 'Forgotten Kingdom', 'Crystal Cavern', 'Cloud Citadel', 'Emerald Valley',
    'Obsidian Mountain', 'Silver Desert', 'Starfall Plains', 'Ancient Library', 'Moon Shrine',
    'Hidden Sanctuary', 'Sapphire Sea', 'Floating Ruins', 'Luminous Garden', 'Eternal Labyrinth',
    'Spirit Realm', 'Aurora Peaks', 'Mythic Battlefield', 'Secret Grove', 'Timeless City'
];

const atmospheres = [
    'Under Twin Moons', 'In Shimmering Mist', 'Beneath Aurora Sky', 'During Starfall',
    'In Golden Dawn', 'At Eternal Twilight', 'In Glowing Fog', 'Under Cosmic Storm',
    'In Sacred Silence', 'Amid Falling Comets', 'In Rainbow Light', 'Beneath Crystal Rain'
];

const theoryTemplates = {
    ethereal: {
        harmony: 'Floating, Suspended, Parallel Chords',
        scales: {
            primary: 'Lydian',
            secondary: 'Whole Tone'
        },
        chordTypes: 'Maj7#11, Sus2, Sus4',
        moodKeywords: ['Ethereal', 'Dreamlike', 'Floating', 'Delicate']
    },
    heroic: {
        harmony: 'Strong Tonal Centers, Epic lifts',
        scales: {
            primary: 'Ionian (Major)',
            secondary: 'Mixolydian'
        },
        chordTypes: 'Major Triads, Power Chords, Add9',
        moodKeywords: ['Heroic', 'Epic', 'Brave', 'Grand']
    },
    sacred: {
        harmony: 'Choral, Open 5ths, Modal',
        scales: {
            primary: 'Dorian',
            secondary: 'Ionian'
        },
        chordTypes: 'Plagal Cadences (IV-I), Minor 7',
        moodKeywords: ['Sacred', 'Holy', 'Ancient', 'Divine']
    },
    mystical: {
        harmony: 'Minor/Modal mixture, Unexpected shifts',
        scales: {
            primary: 'Dorian #4 (Lydian Dominant)',
            secondary: 'Harmonic Minor'
        },
        chordTypes: 'MinMaj7, Diminished, Augmented',
        moodKeywords: ['Mystical', 'Secretive', 'Arcane', 'Magical']
    },
    grand: {
        harmony: 'Dense orchestration, Big Block Chords',
        scales: {
            primary: 'Lydian',
            secondary: 'Major'
        },
        chordTypes: 'Polychords, Maj7, Add9',
        moodKeywords: ['Grand', 'Majestic', 'Soaring', 'Radiant']
    }
};

const getCategoryDetails = (subject, action, place, atmosphere) => {
    let type = 'mystical'; // default

    // Logic mapping
    if (['Crystal Dragon', 'Golden Phoenix', 'Celestial Crown'].includes(subject) ||
        ['Flight', 'Ascension'].includes(action) ||
        ['Starfall Plains', 'Cloud Citadel'].includes(place)) {
        type = 'grand';
    } else if (['Ancient Spellbook', 'Runic Gate', 'Spirit Lantern'].includes(subject) ||
        ['Ritual', 'Binding', 'Prophecy'].includes(action)) {
        type = 'mystical';
    } else if (['Hidden Portal', 'Whispering Tree', 'Moonlit Lake'].includes(subject) ||
        ['Discovery', 'Revelation'].includes(action) ||
        ['Luminous Garden', 'Spirit Realm'].includes(place)) {
        type = 'ethereal';
    } else if (['Mystic Sword', 'Arcane Tower'].includes(subject) ||
        ['Journey', 'Trial', 'Battlefield'].includes(action)) {
        type = 'heroic';
    } else if (['Sunken Throne', 'Ancient Library'].includes(subject) ||
        ['Blessing', 'Alignment'].includes(action) ||
        ['Moon Shrine', 'Sky Temple'].includes(place)) {
        type = 'sacred';
    }

    // Tempo logic
    let tempoRange = '80-110 BPM';
    let tempoType = 'Medium';

    if (type === 'grand' || type === 'heroic') {
        tempoRange = '110-140 BPM';
        tempoType = 'Fast';
    } else if (type === 'sacred') {
        tempoRange = '60-80 BPM';
        tempoType = 'Slow';
    } else if (type === 'ethereal') {
        tempoRange = '70-90 BPM (Flowing)';
        tempoType = 'Medium';
    }

    return { type, tempoRange, tempoType, template: theoryTemplates[type] };
};

export const generateFantasySubcategories = (count) => {
    const generated = [];
    const usedTitles = new Set();

    // Removing artificial cap to support full request
    const actualCount = count;

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
                title = `${subject} ${action} In ${place} ${atmosphere}`;
            } else if (r < 0.66) {
                title = `${action} Of ${subject} At ${place}`;
            } else {
                title = `${atmosphere} ${subject} ${action} In ${place}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(subject, action, place, atmosphere);
        const { template, tempoRange, tempoType } = details;

        // Orchestration
        let orchestration = 'Orchestra, Harp, Choir';
        if (details.type === 'grand') orchestration = 'Full Orchestra, Brass Fanfares, Tympani, Large Choir';
        if (details.type === 'ethereal') orchestration = 'Harp, Flutes, Celesta, High Strings, Female Choir';
        if (details.type === 'sacred') orchestration = 'Organ, Gregorian Choir, Low Brass, Chimes';
        if (details.type === 'mystical') orchestration = 'Woodwinds, Pizzicato Strings, Glockenspiel, Ambient Pads';
        if (details.type === 'heroic') orchestration = 'French Horns, Trumpets, Driving Strings, Percussion';

        let melodyDescription = 'Soaring, lyrical arcs';
        if (details.type === 'mystical') melodyDescription = 'Wandering, chromatic touches, mysterious';
        if (details.type === 'heroic') melodyDescription = 'Bold, stepwise, anthemic, fanfare-like';
        if (details.type === 'ethereal') melodyDescription = 'Floating, high register, long notes';

        let rhythmDescription = 'Flowing triplets, gentle pulse';
        if (details.type === 'heroic') rhythmDescription = 'Driving cinematics (spiccato strings), marching snares';
        if (details.type === 'sacred') rhythmDescription = 'Slow, steady, breathing pauses';

        const moodText = `${template.moodKeywords.join(', ')}. An enchanted scenario featuring ${subject} during a ${action} at ${place}. Atmosphere: ${atmosphere}.`;

        const prompt = `Compose a Fantasy/Magic track. Title: "${title}". Tempo: ${tempoRange}. Mood: ${template.moodKeywords.join(', ')}. 
        Use ${template.scales.primary} scale for a ${details.type} atmosphere. 
        Instrumentation: ${orchestration}. 
        Rhythm: ${rhythmDescription}. 
        Harmonic Texture: ${template.harmony}. 
        Scenario: ${subject} undergoing ${action} in ${place}, ${atmosphere}. 
        Dynamics: Magical and radiant. Crescendos that bloom with light and wonder. Use glittering textures (chimes, harp) for the magic.`;

        generated.push({
            id: `fantasy-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [details.type.charAt(0).toUpperCase() + details.type.slice(1), tempoType, 'Fantasy', 'Magic'],
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
                            'I - II - V - I (Lydian Lift)',
                            'i - IV - i - V',
                            'I(add9) - V - vi - IV'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

// Generating 10,000 as requested (limited to 2000 in implementation for performance)
export const generatedFantasySubcategories = generateFantasySubcategories(10000);
