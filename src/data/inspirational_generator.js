// Seeded random number generator for stability
let seed = 111222333;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const subjects = [
    'Rising Leader', 'Young Dreamer', 'Brave Runner', 'Determined Team', 'Lone Inventor',
    'Future Pioneer', 'Fallen Hero', 'Small Startup', 'Hopeful Child', 'Mountain Climber',
    'Street Musician', 'Quiet Student', 'Village Builder', 'Space Explorer', 'Marathon Runner',
    'Rescue Crew', 'Peace Maker', 'Bold Captain', 'New Graduate', 'Visionary Artist'
];

const journeys = [
    'First Step', 'Breakthrough', 'Comeback', 'Victory', 'Ascent', 'Transformation',
    'Reunion', 'Launch', 'Discovery', 'Return', 'Rebuild', 'Awakening',
    'Break Free', 'Turning Point', 'Final Push', 'Leap Forward', 'New Beginning',
    'Great Climb', 'Open Path', 'Dawn March'
];

const places = [
    'City Skyline', 'Open Highway', 'Mountain Peak', 'Vast Ocean', 'Golden Field',
    'Future City', 'Training Ground', 'Launch Pad', 'Quiet Town', 'Desert Horizon',
    'Snowy Summit', 'Starship Deck', 'Coastal Cliff', 'River Bridge', 'Grand Arena',
    'Workshop Garage', 'School Stage', 'Forest Trail', 'High Plateau', 'Endless Sky'
];

const atmospheres = [
    'At Sunrise', 'In Golden Light', 'Under Clear Sky', 'With Roaring Crowd',
    'In Gentle Wind', 'Beneath Bright Stars', 'In Morning Mist', 'Under Fireworks',
    'In Spring Bloom', 'With Rising Sun', 'In Fresh Rain', 'Under Rainbow Glow'
];

const theoryTemplates = {
    hopeful: {
        harmony: 'Major, Add9, Gentle Lifts',
        scales: {
            primary: 'Major (Ionian)',
            secondary: 'Lydian'
        },
        chordTypes: 'Maj7, Add9, Sus2',
        moodKeywords: ['Hopeful', 'Gentle', 'Optimistic', 'Bright']
    },
    determined: {
        harmony: 'Driving, Steady, vi-IV-I-V propulsiveness',
        scales: {
            primary: 'Dorian',
            secondary: 'Mixolydian'
        },
        chordTypes: 'Power Chords, Sus4, Minor 7',
        moodKeywords: ['Determined', 'Focused', 'Steady', 'Driving']
    },
    triumphant: {
        harmony: 'Bold Major, Brass Fanfares, V-I cadence',
        scales: {
            primary: 'Major',
            secondary: 'Lydian'
        },
        chordTypes: 'Major Triads, Octaves, Dominant 7',
        moodKeywords: ['Triumphant', 'Victorious', 'Bold', 'Powerful']
    },
    emotional: {
        harmony: 'Slow build, Major/Minor modulation',
        scales: {
            primary: 'Major with vi emphasis',
            secondary: 'Melodic Minor'
        },
        chordTypes: 'Maj9, Min7, Slash Chords',
        moodKeywords: ['Emotional', 'Touching', 'Moving', 'Heartfelt']
    },
    victorious: {
        harmony: 'Epic, Wide voicings, Choral',
        scales: {
            primary: 'Lydian',
            secondary: 'Major Pentatonic'
        },
        chordTypes: 'Maj7#11, Polychords, Sus4',
        moodKeywords: ['Victorious', 'Epic', 'Grand', 'Glorious']
    }
};

const getCategoryDetails = (subject, journey, place, atmosphere) => {
    let type = 'hopeful'; // default

    // Logic mapping
    if (['Victory', 'Ascent', 'Launch', 'Great Climb'].includes(journey) ||
        ['Grand Arena', 'Mountain Peak'].includes(place) ||
        ['Roaring Crowd', 'Fireworks'].some(k => atmosphere.includes(k))) {
        type = 'victorious';
    } else if (['Comeback', 'Breakthrough', 'Return'].includes(journey) ||
        ['Fallen Hero', 'Rescue Crew'].includes(subject)) {
        type = 'triumphant';
    } else if (['Determined Team', 'Marathon Runner', 'Brave Runner'].includes(subject) ||
        ['Final Push', 'Leap Forward'].includes(journey) ||
        ['Training Ground'].includes(place)) {
        type = 'determined';
    } else if (['Reunion', 'First Step', 'Forgiveness'].includes(journey) ||
        ['Hopeful Child', 'Quiet Student'].includes(subject)) {
        type = 'emotional';
    } else if (['New Beginning', 'Turning Point', 'Open Path'].includes(journey) ||
        ['Dawn March', 'Awakening'].includes(journey)) {
        type = 'hopeful';
    }

    // Tempo logic
    let tempoRange = '90-110 BPM';
    let tempoType = 'Medium';

    if (type === 'victorious' || type === 'triumphant') {
        tempoRange = '120-140 BPM';
        tempoType = 'Epic';
    } else if (type === 'determined') {
        tempoRange = '110-130 BPM';
        tempoType = 'High';
    } else if (type === 'emotional') {
        tempoRange = '80-100 BPM';
        tempoType = 'Medium';
    }

    return { type, tempoRange, tempoType, template: theoryTemplates[type] };
};

export const generateInspirationalSubcategories = (count) => {
    const generated = [];
    const usedTitles = new Set();

    // Removing artificial cap to support full request
    const actualCount = count;

    for (let i = 0; i < actualCount; i++) {
        let subject, journey, place, atmosphere;
        let title;

        // Retry until unique
        let attempts = 0;
        do {
            subject = getRandomItem(subjects);
            journey = getRandomItem(journeys);
            place = getRandomItem(places);
            atmosphere = getRandomItem(atmospheres);

            const r = random();
            if (r < 0.33) {
                title = `${subject} ${journey} On ${place} ${atmosphere}`;
            } else if (r < 0.66) {
                title = `${journey} Of ${subject} In ${place}`;
            } else {
                title = `${atmosphere} ${subject} ${journey} At ${place}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(subject, journey, place, atmosphere);
        const { template, tempoRange, tempoType } = details;

        // Orchestration
        let orchestration = 'Piano, Strings, French Horns';
        if (details.type === 'victorious') orchestration = 'Full Orchestra, Choir, Brass, Timpani';
        if (details.type === 'determined') orchestration = 'Staccato Strings, Driving Percussion, Electric Guitar';
        if (details.type === 'emotional') orchestration = 'Solo Piano, Cello, Swelling String Orchestra';
        if (details.type === 'hopeful') orchestration = 'Acoustic Guitar, Light Strings, Flute, Piano';
        if (details.type === 'triumphant') orchestration = 'Brass Section, Snare Drum, Crash Cymbals, High Strings';

        let melodyDescription = 'Rising arcs, memorable motifs';
        if (details.type === 'victorious') melodyDescription = 'Soaring, high register, anthemic';
        if (details.type === 'determined') melodyDescription = 'Rhythmic, repetitive, climbing stepwise';
        if (details.type === 'emotional') melodyDescription = 'Lyrical, expressive, touching';

        let rhythmDescription = 'Steady pulse, driving';
        if (details.type === 'victorious') rhythmDescription = 'Marching snares, heavy downbeats, syncopated accents';
        if (details.type === 'emotional') rhythmDescription = 'Flowing 8th notes, gentle crescendo';

        const moodText = `${template.moodKeywords.join(', ')}. An encouraging story of ${subject} experiencing a ${journey} at ${place}. Atmosphere: ${atmosphere}.`;

        const prompt = `Compose an Inspirational track. Title: "${title}". Tempo: ${tempoRange}. Mood: ${template.moodKeywords.join(', ')}. 
        Use ${template.scales.primary} scale for a ${details.type} feeling. 
        Instrumentation: ${orchestration}. 
        Rhythm: ${rhythmDescription}. 
        Harmonic Texture: ${template.harmony}. 
        Scenario: ${subject} achieving ${journey} in ${place}, ${atmosphere}. 
        Dynamics: Starts soft and builds to a powerful, triumphant climax. Use rising key changes or volume swells to depict overcoming obstacles.`;

        generated.push({
            id: `inspirational-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [details.type.charAt(0).toUpperCase() + details.type.slice(1), tempoType, 'Inspirational', 'Motivational'],
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
                            'I - V - vi - IV (Anthem)',
                            'vi - IV - I - V (Struggle to Victory)',
                            'I(add9) - V - IV - I'
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
export const generatedInspirationalSubcategories = generateInspirationalSubcategories(10000);
