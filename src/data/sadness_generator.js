// Seeded random number generator for stability
let seed = 123456789;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const subjects = [
    'Lost Letter', 'Empty Photograph', 'Broken Promise', 'Fading Voice', 'Old Diary',
    'Silent Piano', 'Forgotten Toy', 'Last Train Ticket', 'Withered Flower',
    'Unsent Message', 'Distant Footsteps', 'Empty Chair', 'Closed Window',
    'Final Embrace', 'Lonely Streetlight', 'Old Cassette', 'Torn Map',
    'Childhood Drawing', 'Worn Jacket', 'Abandoned Ring'
];

const situations = [
    'Farewell', 'Waiting', 'Return', 'Reflection', 'Confession', 'Separation',
    'Reunion', 'Apology', 'Regret', 'Longing', 'Goodbye', 'Remembering',
    'Letting Go', 'Searching', 'Drifting', 'Watching', 'Wandering',
    'Dreaming', 'Hoping', 'Healing'
];

const places = [
    'Rainy Window', 'Quiet Bedroom', 'Empty Station', 'Winter Shore', 'Old House',
    'Night Bus', 'Foggy Bridge', 'Small Café', 'Hospital Hallway', 'Snowy Field',
    'Deserted Park', 'Attic Room', 'Balcony View', 'Riverside Bench', 'Lonely Highway',
    'Harbor Dock', 'Village Road', 'Mountain Cabin', 'City Rooftop', 'Church Steps'
];

const atmospheres = [
    'At Dusk', 'In Gentle Rain', 'Under Grey Sky', 'During Autumn Wind',
    'In Soft Snowfall', 'At Midnight', 'In Early Morning Mist', 'Under Fading Light',
    'In Cold Silence', 'During Distant Thunder', 'Beneath Pale Moon', 'In Endless Drizzle'
];

const theoryTemplates = {
    lonely: {
        harmony: 'Aeolian, Sparse voicings, Open 5ths',
        scales: {
            primary: 'Aeolian (Natural Minor)',
            secondary: 'Dorian'
        },
        chordTypes: 'Minor 7, Sus2, Minor 11',
        moodKeywords: ['Lonely', 'Isolating', 'Cold', 'Empty']
    },
    nostalgic: {
        harmony: 'Major 7ths mixed with Minor, Warmth',
        scales: {
            primary: 'Ionian / Aeolian Mix',
            secondary: 'Mixolydian b6'
        },
        chordTypes: 'Maj7, Min9, Add9',
        moodKeywords: ['Nostalgic', 'Warm', 'Reflective', 'Memories']
    },
    grieving: {
        harmony: 'Deep Minor, Slow changes, Plagal Cadences',
        scales: {
            primary: 'Harmonic Minor',
            secondary: 'Aeolian'
        },
        chordTypes: 'Minor, Diminished 7, Neapolitan',
        moodKeywords: ['Grieving', 'Tragic', 'Heavy', 'Sorrowful']
    },
    bittersweet: {
        harmony: 'IV - iv motion, Major to relative Minor',
        scales: {
            primary: 'Major Scale',
            secondary: 'Melodic Minor'
        },
        chordTypes: 'Maj7, Min6, Half-Diminished',
        moodKeywords: ['Bittersweet', 'Moving', 'Gentle', 'Acceptance']
    },
    hopeful: {
        harmony: 'Rising progressions, Suspensions resolving up',
        scales: {
            primary: 'Dorian',
            secondary: 'Lydian fragments'
        },
        chordTypes: 'Sus4, Add9, Maj7',
        moodKeywords: ['Hopeful', 'Healing', 'Peaceful', 'Fragile']
    }
};

const getCategoryDetails = (subject, situation, place, atmosphere) => {
    let type = 'lonely'; // default

    // Logic mapping
    if (['Healing', 'Hoping', 'Dreaming', 'Reunion'].includes(situation) ||
        ['Sunrise', 'Morning'].some(k => atmosphere.includes(k))) {
        type = 'hopeful';
    } else if (['Old Diary', 'Old Cassette', 'Childhood Drawing'].includes(subject) ||
        ['Remembering', 'Reflection'].includes(situation)) {
        type = 'nostalgic';
    } else if (['Farewell', 'Goodbye', 'Breaking', 'Empty Chair', 'Final Embrace'].includes(situation) ||
        ['Final Embrace', 'Withered Flower'].includes(subject)) {
        type = 'grieving';
    } else if (['Letting Go', 'Apology', 'Confession'].includes(situation)) {
        type = 'bittersweet';
    }

    // Tempo logic
    let tempoRange = '50-70 BPM';
    let tempoType = 'Slow';

    if (type === 'grieving') {
        tempoRange = '40-60 BPM';
        tempoType = 'Very Slow';
    } else if (type === 'hopeful' || type === 'nostalgic') {
        tempoRange = '60-80 BPM';
        tempoType = 'Moderate';
    }

    return { type, tempoRange, tempoType, template: theoryTemplates[type] };
};

export const generateSadnessSubcategories = (count) => {
    const generated = [];
    const usedTitles = new Set();

    // Removing artificial cap to support full request
    const actualCount = count;

    for (let i = 0; i < actualCount; i++) {
        let subject, situation, place, atmosphere;
        let title;

        // Retry until unique
        let attempts = 0;
        do {
            subject = getRandomItem(subjects);
            situation = getRandomItem(situations);
            place = getRandomItem(places);
            atmosphere = getRandomItem(atmospheres);

            const r = random();
            if (r < 0.33) {
                title = `${subject} ${situation} At ${place} ${atmosphere}`;
            } else if (r < 0.66) {
                title = `${situation} Of ${subject} In ${place}`;
            } else {
                title = `${atmosphere} ${situation} With ${subject}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(subject, situation, place, atmosphere);
        const { template, tempoRange, tempoType } = details;

        // Orchestration
        let orchestration = 'Solo Piano, Cello, Violins';
        if (details.type === 'grieving') orchestration = 'Low Strings, Dull Piano, Slow Choir';
        if (details.type === 'nostalgic') orchestration = 'Warm Piano, Acoustic Guitar, Woodwinds';
        if (details.type === 'lonely') orchestration = 'Distant Piano, Solo Violin, Cold Synth Pad';
        if (details.type === 'hopeful') orchestration = 'Piano, Rising String Section, French Horn';
        if (details.type === 'bittersweet') orchestration = 'Piano, Oboe, Cello counter-melody';

        let melodyDescription = 'Long legato lines, stepwise motion';
        if (details.type === 'grieving') melodyDescription = 'Descending, slow, pauses, crying quality';
        if (details.type === 'hopeful') melodyDescription = 'Rising, opening up intervals, reaching upwards';

        let rhythmDescription = 'Simple pulse, rubato';
        if (details.type === 'lonely') rhythmDescription = 'Sparse, lots of silence, non-rhythmic';

        const moodText = `${template.moodKeywords.join(', ')}. A sadness scenario focused on ${subject} during a ${situation} at ${place}. Atmosphere: ${atmosphere}.`;

        const prompt = `Compose a Sadness track. Title: "${title}". Tempo: ${tempoRange}. Mood: ${template.moodKeywords.join(', ')}. 
        Use ${template.scales.primary} scale for a ${details.type} emotion. 
        Instrumentation: ${orchestration}. 
        Rhythm: ${rhythmDescription}. 
        Harmonic Texture: ${template.harmony}. 
        Scenario: ${subject} ${situation} in ${place}, ${atmosphere}. 
        Dynamics: Soft, expressive, use silence to let the emotion breathe. Gradual builds that bloom and fade.`;

        generated.push({
            id: `sadness-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [details.type.charAt(0).toUpperCase() + details.type.slice(1), tempoType, 'Sadness', 'Emotional'],
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
                            'i - VI - III - VII',
                            'i - iv - i - V',
                            'i - v - VI - iv (Yearning)'
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
export const generatedSadnessSubcategories = generateSadnessSubcategories(10000);
