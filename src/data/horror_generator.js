// Seeded random number generator for stability
let seed = 666666666;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const settings = [
    'Haunted Mansion', 'Abandoned Asylum', 'Cursed Village', 'Foggy Graveyard',
    'Underground Crypt', 'Derelict Ship', 'Dark Forest', 'Frozen Monastery',
    'Burning Church', 'Empty Carnival', 'Ruined Cathedral', 'Deep Sewer',
    'Isolated Lighthouse', 'Forgotten Bunker', 'Ancient Tomb', 'Sunken City',
    'Remote Farmhouse', 'Deserted School', 'Silent Hospital', 'Underground Metro'
];

const entities = [
    'Whispering Ghosts', 'Crawling Shadows', 'Possessed Doll', 'Faceless Figure',
    'Blood Ritual', 'Ancient Demon', 'Hollow Children', 'Bone Collector',
    'Shadow Beast', 'Plague Spirit', 'Weeping Angel', 'Skin Walker',
    'Night Stalker', 'Void Entity', 'Rotting Giant', 'Spider Queen',
    'Death Choir', 'Cursed King', 'Phantom Train', 'Living Darkness'
];

const situations = [
    'Awakening', 'Hunt', 'Ritual', 'Manifestation', 'Possession', 'Return',
    'Escape', 'Summoning', 'Feeding', 'Breach', 'Invasion',
    'Transformation', 'Revelation', 'Convergence'
];

const conditions = [
    'At Midnight', 'In Endless Fog', 'During Thunderstorm', 'Under Blood Moon',
    'In Total Darkness', 'Beneath Flickering Candles', 'In Cold Rain',
    'During Eclipse', 'In Suffocating Silence', 'Under Red Sky',
    'In Whispering Wind', 'During Power Outage', 'In Ash Filled Air'
];

const theoryTemplates = {
    supernatural: {
        harmony: 'Phrygian, Semitone grinding, Low pedal drones',
        scales: {
            primary: 'Phrygian',
            secondary: 'Locrian, Phrygian Dominant'
        },
        chordTypes: 'Minor b2, Tritone Intervals, Clusters',
        moodKeywords: ['Dread', 'Supernatural', 'Ancient', 'Impending']
    },
    psychological: {
        harmony: 'Aeolian, Fragile intervals, Detuned layers',
        scales: {
            primary: 'Aeolian',
            secondary: 'Diminished, Harmonic Minor'
        },
        chordTypes: 'Minor 9, Diminished 7th, Suspensions',
        moodKeywords: ['Uneasy', 'Psychological', 'Paranoid', 'Disturbing']
    },
    cosmic: {
        harmony: 'Octatonic, Whole Tone, Atonal clusters',
        scales: {
            primary: 'Octatonic (Diminished)',
            secondary: 'Whole Tone, Chromatic'
        },
        chordTypes: 'Polychords, Augmented, Cluster chords',
        moodKeywords: ['Terror', 'Cosmic', 'Surreal', 'Alien']
    },
    monster: {
        harmony: 'Heavy dissonant stabs, Chromatic rising',
        scales: {
            primary: 'Chromatic',
            secondary: 'Phrygian Dominant'
        },
        chordTypes: 'Power Chords with Tritones, Slamming clusters',
        moodKeywords: ['Panic', 'Violent', 'Aggressive', 'Chaotic']
    },
    occult: {
        harmony: 'Chanting harmony, Open 5ths, Tritone shifts',
        scales: {
            primary: 'Harmonic Minor',
            secondary: 'Phrygian Dominant'
        },
        chordTypes: 'Minor, Diminished, Open 5th Drones',
        moodKeywords: ['Occult', 'Ritualistic', 'Evil', 'Solemn']
    }
};

const getCategoryDetails = (setting, entity, situation, condition) => {
    let type = 'supernatural'; // default

    // Logic mapping
    if (['Possessed Doll', 'Hollow Children', 'Faceless Figure'].includes(entity) ||
        ['Abandoned Asylum', 'Deserted School'].includes(setting) ||
        ['Revelation', 'Transformation'].includes(situation)) {
        type = 'psychological';
    } else if (['Void Entity', 'Rotting Giant', 'Spider Queen'].includes(entity) ||
        ['Sunken City', 'Pyramids', 'Forgotten Bunker'].includes(setting)) {
        type = 'cosmic';
    } else if (['Shadow Beast', 'Skin Walker', 'Night Stalker', 'Plague Spirit'].includes(entity) ||
        ['Hunt', 'Feeding', 'Escape'].includes(situation)) {
        type = 'monster';
    } else if (['Blood Ritual', 'Ancient Demon', 'Cursed King', 'Death Choir'].includes(entity) ||
        ['Ritual', 'Summoning', 'Invasion'].includes(situation) ||
        ['Burning Church', 'Underground Crypt'].includes(setting)) {
        type = 'occult';
    }

    // Tempo logic
    let tempoRange = '30-70 BPM';
    let tempoType = 'Low'; // for Intensity
    let intensity = 'Dread';

    if (type === 'monster' || situation === 'Escape' || situation === 'Hunt') {
        tempoRange = '80-110 BPM';
        intensity = 'Panic';
    } else if (type === 'psychological') {
        tempoRange = 'Free Time / 40-60 BPM';
        intensity = 'Uneasy';
    } else if (type === 'cosmic' || type === 'occult') {
        tempoRange = '30-50 BPM';
        intensity = 'Terror';
    }

    return { type, tempoRange, intensity, template: theoryTemplates[type] };
};

export const generateHorrorSubcategories = (count) => {
    const generated = [];
    const usedTitles = new Set();

    // Removing artificial cap to support full request
    const actualCount = count;

    for (let i = 0; i < actualCount; i++) {
        let setting, entity, situation, condition;
        let title;

        // Retry until unique
        let attempts = 0;
        do {
            setting = getRandomItem(settings);
            entity = getRandomItem(entities);
            situation = getRandomItem(situations);
            condition = getRandomItem(conditions);

            const r = random();
            if (r < 0.33) {
                title = `${setting} ${entity} ${situation}`;
            } else if (r < 0.66) {
                title = `${setting} ${situation} ${condition}`;
            } else {
                title = `${entity} ${situation} ${condition}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(setting, entity, situation, condition);
        const { template, tempoRange, intensity } = details;

        // Orchestration & Melody specific to types
        let orchestration = 'Low Strings, Contrabass, Drone textures';
        if (details.type === 'cosmic') orchestration = 'Sub Booms, Metallic Scrapes, Distorted Synth Drones';
        if (details.type === 'monster') orchestration = 'Heavy Brass stabs, Tribal Percussion, Screeching Strings';
        if (details.type === 'occult') orchestration = 'Dark Choir, Throaty Vocals, Deep Drums, Organ';
        if (details.type === 'psychological') orchestration = 'Detuned Piano, Whispering Voices, Waterphone, Reverse FX';

        let melodyDescription = 'Barely melodic, fragmented whispers';
        if (details.type === 'occult') melodyDescription = 'Chanting, repetitive, minor modal phrases';
        if (details.type === 'monster') melodyDescription = 'Aggressive, jagged, descending chromatic lines';

        let rhythmDescription = 'Irregular pulses, distance booms';
        if (details.type === 'monster') rhythmDescription = 'Driving, visceral, pounding heartbeat';
        if (details.type === 'psychological') rhythmDescription = 'Non-existent, suspended time, random clicks';

        const moodText = `${template.moodKeywords.join(', ')}. A ${intensity.toLowerCase()} scenario involving ${entity} in ${setting}. Condition: ${condition}.`;

        const prompt = `Compose a Horror track. Title: "${title}". Tempo: ${tempoRange}. Mood: ${template.moodKeywords.join(', ')}. 
        Use ${template.scales.primary} scale to create ${intensity}. 
        Instrumentation: ${orchestration}. 
        Rhythm: ${rhythmDescription}. 
        Harmonic Texture: ${template.harmony}. 
        Scenario: ${situation} of the ${entity}, ${condition}. 
        Dynamics: Long stretches of silence or low dread, broken by sudden violent stingers or rising chromatic tension.`;

        generated.push({
            id: `horror-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [details.type.charAt(0).toUpperCase() + details.type.slice(1), intensity, 'Horror'],
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
                            'i - bII - i',
                            'i - viio - i',
                            'Tritone Shock (i - bV)'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

// Generating 10,000 as requested, though client rendering might need optimization (lazy loading handled in UI ideally)
export const generatedHorrorSubcategories = generateHorrorSubcategories(10000);
