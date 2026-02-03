// Seeded random number generator for stability
let seed = 999888777;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const dynamics = [
    'Young Lovers', 'Long-lost Soulmates', 'Secret Admirers', 'Royal Couple',
    'High School Sweethearts', 'Devoted Partners', 'Forbidden Lovers', 'Stranger Crush',
    'Destined Pair', 'Shy Neighbors', 'Summer Fling', 'Childhood Friends',
    'Wartime Lovers', 'Artist and Muse', 'Rival Chefs', 'Time Travelers',
    'Arranged Match', 'Office Romance', 'Dance Partners', 'Pen Pals'
];

const situations = [
    'First Date', 'Proposal', 'Wedding Vows', 'Tearful Goodbye', 'Secret Meeting',
    'Reunion', 'Morning Cuddles', 'Late Night Walk', 'Shared Dance', 'First Kiss',
    'Confession', 'Anniversary', 'Elopement', 'Reconciliation', 'Gazing at Stars',
    'Cooking Together', 'Sheltering from Rain', 'Reading Aloud', 'Painting Portrait',
    'Sharing an Umbrella', 'Blind Date', 'Chance Encounter', 'Saving a Dance',
    'Exchanging Letters'
];

const locations = [
    'Paris Balcony', 'Moonlit Beach', 'Rainy Cafe', 'Enchanted Garden', 'Fireplace Rug',
    'Rooftop at Sunset', 'Snowy Park', 'Candlelit Dinner', 'Autumn Forest',
    'Luxury Yacht', 'Rustic Cabin', 'Flower Field', 'Quiet Library', 'Venetian Gondola',
    'Old Bookstore', 'Ferris Wheel', 'Mountain Lookout', 'Opera Box',
    'Seaside Cliff', 'Botanical Garden', 'Train Cabin', 'Lighthouse Top'
];

const conditions = [
    'Under the Stars', 'In Pouring Rain', 'At Golden Hour', 'With Soft Snowfall',
    'By Candlelight', 'During Fireworks', 'In Cherry Blossom Season',
    'Under the Northern Lights', 'At Sunrise', 'In Soft Fog'
];

const theoryTemplates = {
    sweet: {
        harmony: 'Major 7ths, Add9, Pastoral',
        scales: {
            primary: 'Major (Ionian)',
            secondary: 'Lydian'
        },
        chordTypes: 'Maj7, Add9, Sus2',
        moodKeywords: ['Sweet', 'Innocent', 'Cute', 'Gentle']
    },
    passionate: {
        harmony: 'Lush, Chromatic inner voices, Sweeping',
        scales: {
            primary: 'Major',
            secondary: 'Major Pentatonic (Orchestral)'
        },
        chordTypes: 'Maj9, Min7, Slash Chords',
        moodKeywords: ['Passionate', 'Epic', 'Intense', 'Romantic']
    },
    bittersweet: {
        harmony: 'Major/Minor shifts, Plagal Cadences',
        scales: {
            primary: 'Major/Minor Mix',
            secondary: 'Dorian'
        },
        chordTypes: 'Min6, Maj7, Suspended',
        moodKeywords: ['Bittersweet', 'Nostalgic', 'Melancholy', 'Emotional']
    },
    dreamy: {
        harmony: 'Floating, Static, Extended chords',
        scales: {
            primary: 'Lydian',
            secondary: 'Whole Tone'
        },
        chordTypes: 'Maj7#11, Maj13, Polychords',
        moodKeywords: ['Dreamy', 'Ethereal', 'Magical', 'Soft']
    },
    sensual: {
        harmony: 'Jazz-influenced, smooth voice leading',
        scales: {
            primary: 'Dorian',
            secondary: 'Blues Scale'
        },
        chordTypes: 'Min9, Dom13, Altered Dominants',
        moodKeywords: ['Sensual', 'Intimate', 'Seductive', 'Warm']
    }
};

const getCategoryDetails = (dynamic, situation, location, condition) => {
    let type = 'sweet'; // default

    // Logic mapping
    if (['Proposal', 'Wedding Vows', 'Reunion', 'First Kiss'].includes(situation) ||
        ['Royal Couple', 'Destined Pair'].includes(dynamic)) {
        type = 'passionate';
    } else if (['Tearful Goodbye', 'Reconciliation'].includes(situation) ||
        ['Long-lost Soulmates', 'Forbidden Lovers'].includes(dynamic) ||
        condition.includes('Rain')) {
        type = 'bittersweet';
    } else if (['Enchanted Garden', 'Under the Northern Lights'].includes(location) ||
        condition.includes('Stars') || condition.includes('Fog')) {
        type = 'dreamy';
    } else if (['Fireplace Rug', 'Late Night Walk', 'Candlelit Dinner'].includes(location) ||
        ['Secret Admirers'].includes(dynamic)) {
        type = 'sensual';
    }

    // Tempo logic
    let tempoRange = '60-80 BPM';
    let tempoType = 'Slow';

    if (type === 'passionate') {
        tempoRange = '60-90 BPM (Rubato)';
    } else if (type === 'sweet') {
        tempoRange = '80-100 BPM';
        tempoType = 'Medium';
    } else if (type === 'sensual' || type === 'dreamy') {
        tempoRange = '50-70 BPM';
        tempoType = 'Very Slow';
    }

    return { type, tempoRange, tempoType, template: theoryTemplates[type] };
};

export const generateRomanceSubcategories = (count) => {
    const generated = [];
    const usedTitles = new Set();

    // Removing artificial cap to support full request
    const actualCount = count;

    for (let i = 0; i < actualCount; i++) {
        let dynamic, situation, location, condition;
        let title;

        // Retry until unique
        let attempts = 0;
        do {
            dynamic = getRandomItem(dynamics);
            situation = getRandomItem(situations);
            location = getRandomItem(locations);
            condition = getRandomItem(conditions);

            const r = random();
            if (r < 0.33) {
                title = `${dynamic} ${situation} ${location}`;
            } else if (r < 0.66) {
                title = `${situation} ${condition} At ${location}`;
            } else {
                title = `${condition} ${dynamic} ${situation}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(dynamic, situation, location, condition);
        const { template, tempoRange, tempoType } = details;

        // Orchestration
        let orchestration = 'Strings, Piano, Flute';
        if (details.type === 'passionate') orchestration = 'Full String Section, French Horns, Timpani Swells';
        if (details.type === 'sweet') orchestration = 'Acoustic Guitar, Light Piano, Solo Violin, Glockenspiel';
        if (details.type === 'bittersweet') orchestration = 'Solo Cello, Oboe, Piano with Reverb';
        if (details.type === 'dreamy') orchestration = 'Harp, Pad Synth, Chimes, High Strings';
        if (details.type === 'sensual') orchestration = 'Saxophone, Rhodes Piano, Upright Bass, Brushes';

        let melodyDescription = 'Lyrical, singing quality';
        if (details.type === 'passionate') melodyDescription = 'Soaring, octave leaps, intense vibrato';
        if (details.type === 'sweet') melodyDescription = 'Simple, stepwise, innocent, folk-like';
        if (details.type === 'bittersweet') melodyDescription = 'Falling intervals, sighs, pauses';

        let rhythmDescription = 'Gentle, flowing';
        if (details.type === 'passionate') rhythmDescription = 'Rubato (free time), pushing and pulling';
        if (details.type === 'sensual') rhythmDescription = 'Laid back, swing feel, slow groove';

        const moodText = `${template.moodKeywords.join(', ')}. A romantic moment featuring ${dynamic} during a ${situation} at ${location}. Condition: ${condition}.`;

        const prompt = `Compose a Romance track. Title: "${title}". Tempo: ${tempoRange}. Mood: ${template.moodKeywords.join(', ')}. 
        Use ${template.scales.primary} scale for a ${details.type} emotion. 
        Instrumentation: ${orchestration}. 
        Rhythm: ${rhythmDescription}. 
        Harmonic Texture: ${template.harmony}. 
        Scenario: ${dynamic} ${situation} in ${location}, ${condition}. 
        Dynamics: Swelling and expressive. Focus on emotional connection and intimacy. Use rubato for human feel.`;

        generated.push({
            id: `romance-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [details.type.charAt(0).toUpperCase() + details.type.slice(1), tempoType, 'Romance', 'Love'],
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
                            'I - IV - V - I',
                            'ii - V - I - vi',
                            'IV - iv - I (Bittersweet resolution)'
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
export const generatedRomanceSubcategories = generateRomanceSubcategories(10000);
