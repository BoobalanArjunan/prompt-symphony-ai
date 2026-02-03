// Seed for stability
let seed = 44556677;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    'Noir Detective', 'Sherlock Style', 'Modern Crime Thriller', 'Supernatural Mystery',
    'Cozy Mystery', 'Espionage', 'Forensic Analysis', 'Psychological Puzzle',
    'Ancient Riddle', 'Cyber Detective', 'Cold Case', 'Whodunit'
];

const contexts = [
    'Searching the Crime Scene', 'Examining Evidence', 'Interrogating a Suspect', 'Following a Lead',
    'Decoding a Cipher', 'Walking a Foggy Street', 'Discovering a Body', 'Realization Moment',
    'Stalking a Target', 'Reading Old Diaries', 'Hacking a Database', 'Entering a Secret Room',
    'Flashback to the Crime', 'Waiting in the Rain', 'Connecting the Dots', 'Final Confrontation (Cerebral)'
];

const locations = [
    'Smoky Jazz Club', 'Abandoned Mansion', 'Rainy Alleyway', 'High-Tech Lab',
    'Dusty Library', 'Police Station', 'Morgue', 'Subway Station',
    'Museum at Night', 'Private Jet', 'Old Lighthouse', 'Victorian London',
    'Neo-Noir City', 'Remote Cabin', 'Art Gallery', 'Secret Bunker'
];

const elements = [
    'With a Ticking Clock', 'While Being Watched', 'In Monochrome', 'With a Red Herring',
    'Under Shadow', 'With Broken Flashlight', 'During a Storm', 'In Total Silence',
    'With a Smoking Gun', 'In Crowded Room', 'With False Clues', 'At Midnight'
];

const theoryTemplates = {
    noir: {
        tempo: '60-90 BPM',
        rhythm: 'Slow swing, brush drums, walking bass',
        harmony: 'Minor 7ths, Diminished passing chords, Altered dominants',
        scales: { primary: 'Harmonic Minor', secondary: 'Blues Scale' },
        moodKeywords: ['Smoky', 'Lonely', 'Dark', 'Classy']
    },
    modern: {
        tempo: '100-120 BPM',
        rhythm: 'Digital ticks, pulsing bass, minimal',
        harmony: 'Pedal points, quartal harmony, chromaticism',
        scales: { primary: 'Dorian', secondary: 'Chromatic' },
        moodKeywords: ['Tense', 'Analytical', 'Cold', 'Urgent']
    },
    cerebral: {
        tempo: '70-100 BPM',
        rhythm: 'Irregular, pizzicato strings, marimba',
        harmony: 'Polytonality, dissonant clusters, unexpected resolutions',
        scales: { primary: 'Whole Tone', secondary: 'Octatonic' },
        moodKeywords: ['Curious', 'Weird', 'Mental', 'Puzzling']
    },
    supernatural: {
        tempo: '50-80 BPM',
        rhythm: 'Free time, bowed metals, drones',
        harmony: 'Atonal, microtonal, dense clusters',
        scales: { primary: 'Locrian', secondary: 'Phrygian' },
        moodKeywords: ['Eerie', 'Unknown', 'Unsettling', 'Ghostly']
    }
};

const getCategoryDetails = (style, context, location) => {
    let type = 'modern'; // default

    if (style.includes('Noir') || style.includes('Jazz') || location.includes('Jazz') || location.includes('Alleyway')) {
        type = 'noir';
    } else if (style.includes('Sherlock') || style.includes('Cozy') || style.includes('Puzzle')) {
        type = 'cerebral';
    } else if (style.includes('Supernatural') || location.includes('Mansion') || location.includes('Lighthouse')) {
        type = 'supernatural';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateMysterySubcategories = (count) => {
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
                title = `${style}: ${context}`;
            } else if (r < 0.66) {
                title = `${context} in ${location} (${element})`;
            } else {
                title = `${location} Mystery - ${style}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context, location);
        const { template, type } = details;

        let orchestration = 'Piano, Strings, Synths';
        if (type === 'noir') orchestration = 'Muted Trumpet, Saxophone, Upright Bass, Piano';
        if (type === 'cerebral') orchestration = 'Marimba, Pizzicato Strings, Harp, Celeste';
        if (type === 'supernatural') orchestration = 'Bowed Cymbals, Waterphone, Low Drones, Whispers';

        const prompt = `Compose a Mystery/Investigation track. Title: "${title}". Tempo: ${template.tempo}. Mood: ${template.moodKeywords.join(', ')}.
        Style: ${style}. Scale: ${template.scales.primary} (${template.scales.secondary} nuances).
        Instrumentation: ${orchestration}.
        Rhythm: ${template.rhythm}.
        Harmony: ${template.harmony}.
        Scenario: ${context} in ${location}, ${element}.
        Focus on: Curiosity, discovering secrets, and underlying tension. Keep it subtle and intelligent.`;

        generated.push({
            id: `mystery-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: `A ${style} scene: ${context} at ${location}. Condition: ${element}.`,
            tags: [template.moodKeywords[0], style, 'Mystery', 'Investigation'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Short motifs, questions and answers',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Cue',
                    scales: template.scales,
                    chords: {
                        types: 'Minor 6, Min(maj7), Dim7',
                        progressions: [
                            'i - V/V - i (Cadence)',
                            'Im - IV - Im (Dorian loop)',
                            'Chromatic descending bass'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedMysterySubcategories = generateMysterySubcategories(10000);
