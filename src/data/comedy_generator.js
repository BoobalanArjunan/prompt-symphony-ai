// Seeded random number generator for stability
let seed = 42424242;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const characters = [
    'Clumsy Chef', 'Sneaky Cat', 'Silly Robot', 'Forgetful Wizard', 'Tiny Dinosaur',
    'Dancing Penguin', 'Lazy Pirate', 'Hyperactive Monkey', 'Talking Car', 'Confused Detective',
    'Sleepy Dragon', 'Goofy Alien', 'Nervous Butler', 'Bouncing Blob', 'Prankster Kid',
    'Wobbly Giant', 'Rubber Chicken', 'Juggling Clown', 'Space Hamster', 'Mad Scientist'
];

const situations = [
    'Chase', 'Dance', 'Mishap', 'Experiment', 'Performance', 'Parade', 'Escape', 'Race',
    'Heist', 'Showdown', 'Lesson', 'Journey', 'Delivery', 'Practice', 'Audition',
    'Cooking Contest', 'Magic Trick', 'Invention Test', 'Rehearsal', 'Picnic'
];

const locations = [
    'Busy Kitchen', 'City Park', 'Toy Store', 'Space Station', 'School Hallway', 'Circus Tent',
    'Supermarket', 'Rooftop Garden', 'Train Platform', 'Beach Boardwalk', 'Jungle Treehouse',
    'Candy Factory', 'Old Library', 'Film Studio', 'Science Lab', 'Amusement Park',
    'Subway Car', 'Bakery', 'Farmyard', 'TV Studio'
];

const twists = [
    'On Roller Skates', 'In Zero Gravity', 'During Heavy Rain', 'With Banana Peels',
    'Under Falling Boxes', 'In Slow Motion', 'Backwards', 'Upside Down', 'While Juggling',
    'During Power Cut', 'With Broken Machine', 'In Giant Costume', 'With Echoing Room',
    'On Bouncy Floor', 'In Endless Loop'
];

const theoryTemplates = {
    playful: {
        harmony: 'Major, Simple I-IV-V, Bounce',
        scales: {
            primary: 'Major (Ionian)',
            secondary: 'Major Pentatonic, Mixolydian'
        },
        chordTypes: 'Major, Major 6, Dominant 7th',
        moodKeywords: ['Playful', 'Bouncy', 'Light', 'Fun']
    },
    quirky: {
        harmony: 'Lydian, Unexpected modulations, Whole Tone',
        scales: {
            primary: 'Lydian',
            secondary: 'Whole Tone, Chromatic'
        },
        chordTypes: 'Sus2, Major 7#11, Augmented',
        moodKeywords: ['Quirky', 'Odd', 'Confused', 'Whimsical']
    },
    sneaky: {
        harmony: 'Minor/Dorian, Chromatic bass, Tiptoeing',
        scales: {
            primary: 'Dorian',
            secondary: 'Melodic Minor, Blues Scale'
        },
        chordTypes: 'Minor 6, Diminished 7th, Staccato',
        moodKeywords: ['Sneaky', 'Mischievous', 'Secretive', 'Clever']
    },
    energetic: {
        harmony: 'Fast changes, Circle of Fifths, Bright Major',
        scales: {
            primary: 'Major Scale',
            secondary: 'Mixolydian'
        },
        chordTypes: 'Power Chords, Dominant 7th, Slash chords',
        moodKeywords: ['Energetic', 'Chaotic', 'Fast', 'Exciting']
    },
    goofy: {
        harmony: 'Mixolydian, Slide guitar style, Cartoonish',
        scales: {
            primary: 'Mixolydian',
            secondary: 'Blues Scale'
        },
        chordTypes: 'Dom7, Dom9, Flat 7 chords',
        moodKeywords: ['Goofy', 'Silly', 'Clumsy', 'Wobbly']
    }
};

const getCategoryDetails = (character, situation, location, twist) => {
    let type = 'playful'; // default

    // Logic mapping
    if (['Sneaky Cat', 'Nervous Butler', 'Confused Detective', 'Prankster Kid'].includes(character) ||
        ['Heist', 'Escape', 'Magic Trick'].includes(situation)) {
        type = 'sneaky';
    } else if (['Silly Robot', 'Goofy Alien', 'Wobbly Giant', 'Bouncing Blob'].includes(character) ||
        ['Experiment', 'Invention Test', 'In Zero Gravity'].includes(situation) ||
        twist.includes('Backwards') || twist.includes('Upside Down')) {
        type = 'quirky';
    } else if (['Hyperactive Monkey', 'Space Hamster', 'Juggling Clown'].includes(character) ||
        ['Chase', 'Race', 'Showdown'].includes(situation) ||
        twist.includes('Roller Skates')) {
        type = 'energetic';
    } else if (['Clumsy Chef', 'Lazy Pirate', 'Dancing Penguin', 'Rubber Chicken'].includes(character) ||
        twist.includes('Banana Peels') || twist.includes('Bouncy Floor')) {
        type = 'goofy';
    }

    // Tempo logic
    let tempoRange = '110-140 BPM';
    let tempoType = 'Medium';

    if (type === 'energetic' || situation === 'Chase' || situation === 'Race') {
        tempoRange = '150-180 BPM';
        tempoType = 'Very Fast';
    } else if (type === 'sneaky') {
        tempoRange = '90-115 BPM';
        tempoType = 'Medium';
    } else if (type === 'playful' || type === 'goofy') {
        tempoRange = '120-150 BPM';
        tempoType = 'Fast';
    }

    return { type, tempoRange, tempoType, template: theoryTemplates[type] };
};

export const generateComedySubcategories = (count) => {
    const generated = [];
    const usedTitles = new Set();

    // Removing artificial cap to support full request
    const actualCount = count;

    for (let i = 0; i < actualCount; i++) {
        let character, situation, location, twist;
        let title;

        // Retry until unique
        let attempts = 0;
        do {
            character = getRandomItem(characters);
            situation = getRandomItem(situations);
            location = getRandomItem(locations);
            twist = getRandomItem(twists);

            const r = random();
            if (r < 0.33) {
                title = `${character} ${situation} In ${location} ${twist}`;
            } else if (r < 0.66) {
                title = `${character} ${situation} ${twist}`;
            } else {
                title = `${situation} Of The ${character} In ${location}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(character, situation, location, twist);
        const { template, tempoRange, tempoType } = details;

        // Orchestration
        let orchestration = 'Pizzicato Strings, Woodwinds (Bassoon/FIute), Xylophone';
        if (details.type === 'energetic') orchestration = 'Full Orchestra hits, Drum Kit, Slide Whistle, Trumpet';
        if (details.type === 'sneaky') orchestration = 'Clarinet, Muted Trumpet, Upright Bass, Woodblock';
        if (details.type === 'quirky') orchestration = 'Theremin, Synth Blips, Detuned Piano, Flexatone';
        if (details.type === 'goofy') orchestration = 'Tuba, Banjo, Trombone Glissandos, Jaw Harp';

        let melodyDescription = 'Short catchy motifs, leaps';
        if (details.type === 'sneaky') melodyDescription = 'Chromatic, tiptoeing, staccato, silence gaps';
        if (details.type === 'goofy') melodyDescription = 'Descending slides, repetitive, call-and-response';
        if (details.type === 'energetic') melodyDescription = 'Fast runs, trills, triplets, fanfare-like';

        let rhythmDescription = 'Bounce, Swing, Staccato';
        if (details.type === 'energetic') rhythmDescription = 'Galop (dum-da-da), fast 4/4 rock beat';
        if (details.type === 'sneaky') rhythmDescription = 'Sparse walking bass, finger snaps, off-beats';

        const moodText = `${template.moodKeywords.join(', ')}. A scenario with ${character} during a ${situation} at ${location}. Condition: ${twist}.`;

        const prompt = `Compose a Comedy track. Title: "${title}". Tempo: ${tempoRange}. Mood: ${template.moodKeywords.join(', ')}. 
        Use ${template.scales.primary} scale for a ${details.type} feel. 
        Instrumentation: ${orchestration}. 
        Rhythm: ${rhythmDescription}. 
        Harmonic Texture: ${template.harmony}, frequent playful key shifts. 
        Scenario: ${situation} involving a ${character} in ${location}, ${twist}. 
        Dynamics: Exaggerated staccato, sudden stops for comedic effect, playful glissandos. Make it sound like a cartoon score.`;

        generated.push({
            id: `comedy-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [details.type.charAt(0).toUpperCase() + details.type.slice(1), tempoType, 'Comedy', 'Funny'],
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
                            'I - IV - I - V',
                            'I - vi - ii - V',
                            'Chromatic Passing Chords'
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
export const generatedComedySubcategories = generateComedySubcategories(10000);
