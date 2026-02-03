// Seeded random number generator for stability
// Simple LCG
let seed = 123456789;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

function getRandomInt(min, max) {
    return Math.floor(random() * (max - min + 1)) + min;
}

const situations = [
    'Chase', 'Assault', 'Escape', 'Defense', 'Showdown', 'Ambush', 'Siege',
    'Pursuit', 'Breakout', 'Infiltration', 'Extraction', 'Survival', 'Counterattack'
];

const locations = [
    'City', 'Space Station', 'Jungle', 'Desert', 'Arctic', 'Ocean', 'Volcano',
    'Castle', 'Factory', 'Subway', 'Skyscraper', 'Bunker', 'Ruins', 'Lab',
    'Highway', 'Asteroid Field', 'Dimension Rift'
];

const threats = [
    'Drones', 'Titans', 'Aliens', 'Robots', 'Soldiers', 'Monsters', 'Mutants',
    'Demons', 'Raiders', 'Mechs', 'Warships', 'Kaiju', 'Assassins', 'Cyborgs'
];

const twists = [
    'Under Fire', 'During Collapse', 'Zero Gravity', 'In Storm', 'On Fire',
    'Flooded', 'In Darkness', 'Time Frozen', 'Reality Shifting', 'Gravity Failing'
];

const theoryTemplates = {
    dark: {
        harmony: 'Chromatic, Dissonant, Tritone tension',
        scales: {
            primary: 'Locrian',
            secondary: 'Octatonic (Diminished)'
        },
        chordTypes: 'Diminished, Minor with b5, Clusters',
        moodKeywords: ['Dark', 'Tense', 'Chaotic']
    },
    epic: {
        harmony: 'Orchestral, Modal Minor, Power Chords',
        scales: {
            primary: 'Aeolian',
            secondary: 'Dorian'
        },
        chordTypes: 'Minor, Sus4, Power Chords',
        moodKeywords: ['Epic', 'Heroic', 'Huge']
    },
    scifi: {
        harmony: 'Glitchy, Cold, Atonal or Lydian',
        scales: {
            primary: 'Whole Tone',
            secondary: 'Chromatic'
        },
        chordTypes: 'Augmented, Sus2, Polychords',
        moodKeywords: ['Tense', 'Chaotic', 'Futuristic']
    },
    fast: {
        rhythm: 'Driving ostinatos, 16th notes',
        orchestration: 'Fast Strings, Hybrid Percussion'
    },
    slow: {
        rhythm: 'Heavy, lumbering downbeats',
        orchestration: 'Low Brass, Sub Bass'
    }
};

const getCategoryDetails = (threat, location, twist) => {
    let type = 'epic'; // default
    if (['Demons', 'Monsters', 'Mutants', 'Aliens'].includes(threat) ||
        ['In Darkness', 'Reality Shifting'].includes(twist)) {
        type = 'dark';
    } else if (['Robots', 'Drones', 'Cyborgs', 'Space Station', 'Dimension Rift', 'Asteroid Field'].includes(threat) ||
        ['Space Station', 'Factory', 'Lab'].includes(location)) {
        type = 'scifi';
    }

    // Tempo logic
    let tempoRange = '120-140 BPM';
    let tempoType = 'Medium';
    if (['Chase', 'Pursuit', 'Escape'].some(t => location.includes(t) || twist.includes(t))) { // Checking keywords in context
        tempoRange = '150-180 BPM';
        tempoType = 'Fast';
    }
    if (twist === 'Time Frozen' || threat === 'Titans') {
        tempoRange = '60-90 BPM';
        tempoType = 'Slow';
    }
    // Randomize slightly if standard
    if (tempoType === 'Medium' && random() > 0.5) {
        tempoRange = '130-160 BPM';
        tempoType = 'Fast';
    }

    return { type, tempoRange, tempoType, template: theoryTemplates[type] };
};

export const generateActionSubcategories = (count) => {
    const generated = [];
    const usedTitles = new Set();

    for (let i = 0; i < count; i++) {
        let situation, location, threat, twist;
        let title;

        // Retry until unique
        let attempts = 0;
        do {
            situation = getRandomItem(situations);
            location = getRandomItem(locations);
            threat = getRandomItem(threats);
            twist = getRandomItem(twists);

            // Randomize title structure for variety
            const r = random();
            if (r < 0.33) {
                title = `${twist} ${location} ${situation}`;
            } else if (r < 0.66) {
                title = `${location} ${threat} ${situation}`;
            } else {
                title = `${twist} ${threat} ${situation}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(threat, location, twist);
        const { template, tempoRange, tempoType } = details;

        // Construct detailed strings
        const rhythm = tempoType === 'Fast'
            ? 'Driving ostinatos, rapid syncopation, unrelenting pulse'
            : 'Heavy, plodding, large impact spacing, crushing downbeats';

        const orchestration = details.type === 'scifi'
            ? 'Hybrid: Heavy Synths, Glitch FX, Metallic Percussion, Strings'
            : (details.type === 'dark'
                ? 'Low Strings, Tremolo, Dissonant Brass, Horror FX'
                : 'Full Orchestra, Epic Brass, Cinematic Percussion');

        const melody = details.type === 'heroic'
            ? 'Soaring horns, wide intervals, anthemic'
            : 'Short aggressive motifs, rhythmic chanting, fragmented';

        const moodText = `${template.moodKeywords.join(', ')}. A cinematic ${details.type} scenario involving ${threat} in a ${location} setting. The condition is: ${twist}.`;

        const prompt = `Compose a track for a "${title}" scene. Tempo: ${tempoRange}. Mood: ${template.moodKeywords.join(', ')}. 
        focus on ${orchestration}. The rhythm needs to be ${rhythm.toLowerCase()}. 
        Harmonically, use ${template.harmony} to convey the tension of ${twist}.
        Key moment: A sudden shift in dynamics when the ${threat} attacks. 
        Structure: Build up -> Chaos -> Climax. High cinematic production value.`;

        generated.push({
            id: `gen-${i}-${title.toLowerCase().replace(/ /g, '-')}`, // Unique ID
            title: title,
            moodUseCase: moodText,
            tags: [template.moodKeywords[0], tempoType], // Valid tags for filtering
            coreTheory: {
                tempo: tempoRange,
                rhythm: rhythm,
                harmony: template.harmony,
                melody: melody,
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
                            'i - VI - VII',
                            'i - bII - i (Phrygian)',
                            'Chromatic mediant shifts'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedActionSubcategories = generateActionSubcategories(500);
