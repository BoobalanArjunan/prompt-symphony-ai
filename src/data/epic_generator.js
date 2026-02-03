// Seed for stability
let seed = 88552211;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    'Hollywood Blockbuster', 'Ancient War', 'Fantasy Crusade', 'Modern Hero',
    'Dark Anti-Hero', 'Apocalyptic Hybrid', 'Choral Requiem', 'Viking Nordic',
    'Pirate Adventure', 'Superhro Origin', 'Alien Invasion', 'Sports Victory'
];

const contexts = [
    'Final Battle', 'Hero\'s Return', 'Dragon Flight', 'Kingdom Reveal',
    'City Destruction', 'Charge of the Rohirrim Style', 'Last Stand', 'Victory Parade',
    'Titan Awakening', 'Space Armada Launch', 'Sword Duel on Cliff', 'Rescuing the World',
    'Olympic Gold Medal', 'Trailer Climax (Rise)', 'Slow Motion Walk', 'Destiny Fulfilled'
];

const locations = [
    'Mount Doom', 'Galactic Core', 'Battlefield of Blood', 'Golden City',
    'Ancient Colosseum', 'Post-Apocalyptic Ruins', 'Stormy Ocean', 'Cybernetic Skyscraper',
    'Heaven\'s Gate', 'Underworld Entrance', 'Viking Hall', 'Alien Mothership',
    'Football Stadium', 'Wasteland Canyon', 'Throne Room', 'Edge of the Universe'
];

const elements = [
    'At Dawn', 'In Slow Motion', 'With Massive Choir', 'During Eclipse',
    'With Burning Flags', 'In Heavy Armor', 'With Magic Exploding', 'Under Heavy Fire',
    'With Tears of Joy', 'Against Impossible Odds', 'With Divine Light', 'At World\'s End'
];

const theoryTemplates = {
    heroic: {
        tempo: '100-130 BPM',
        rhythm: 'Marching snare, driving spiccato, triplets',
        harmony: 'Major, I-V-vi-IV, Rising progressions',
        scales: { primary: 'Major', secondary: 'Mixolydian' },
        moodKeywords: ['Heroic', 'Hopeful', 'Brave', 'Triumphant']
    },
    dark: {
        tempo: '80-110 BPM',
        rhythm: 'Heavy stomps, industrial hits, slow burn',
        harmony: 'Minor, Phrygian dominant, Tritones',
        scales: { primary: 'Aeolian', secondary: 'Phrygian' },
        moodKeywords: ['Menacing', 'Powerful', 'Destructive', 'Gritty']
    },
    hybrid: {
        tempo: '140 BPM+',
        rhythm: 'Breakbeats, Trailer hits, Braaams',
        harmony: 'Power chords, Synth pulses, One-note builds',
        scales: { primary: 'Minor', secondary: 'Dorian' },
        moodKeywords: ['Modern', 'Hybrid', 'Intense', 'Action']
    },
    choral: {
        tempo: '60-90 BPM',
        rhythm: 'Slow, majestic, swelling cymbals',
        harmony: 'Rich triads, Sus4 resolutions, Open 5ths',
        scales: { primary: 'Natural Minor', secondary: 'Harmonic Minor' },
        moodKeywords: ['Majestic', 'Divine', 'Gothic', 'Emotional']
    }
};

const getCategoryDetails = (style, context) => {
    let type = 'heroic'; // default

    if (style.includes('Dark') || style.includes('Alien') || context.includes('Destruction') || context.includes('Titan')) {
        type = 'dark';
    } else if (style.includes('Blockbuster') || style.includes('Hybrid') || context.includes('Trailer')) {
        type = 'hybrid';
    } else if (style.includes('Choral') || style.includes('Fantasy') || context.includes('Requiem')) {
        type = 'choral';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateEpicSubcategories = (count) => {
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
                title = `${style} Epic: ${context}`;
            } else if (r < 0.66) {
                title = `${context} at ${location} (${element})`;
            } else {
                title = `${location} - ${style} Anthem`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context);
        const { template, type } = details;

        let orchestration = 'Full Symphony Orchestra + Choir';
        if (type === 'hybrid') orchestration = 'Orchestra + Trailer FX + Synths + Heavy Drums';
        if (type === 'dark') orchestration = 'Low Brass (Braaams), Distortion, Percussion';
        if (type === 'choral') orchestration = 'SATB Choir, Pipe Organ, Timpani, Strings';

        const prompt = `Compose a massive Epic/Trailer track. Title: "${title}". Tempo: ${template.tempo}. Mood: ${template.moodKeywords.join(', ')}.
        Style: ${style}. Scale: ${template.scales.primary} (${template.scales.secondary} nuances).
        Instrumentation: ${orchestration}.
        Rhythm: ${template.rhythm}.
        Harmony: ${template.harmony}.
        Scenario: ${context} in ${location}, ${element}.
        Structure: Intro -> Slow Build -> Pulse Enter -> Climax (The Drop) -> Tail.
        Focus on: Huge dynamic range, "Call to Adventure" feeling, and trailer hit points.`;

        generated.push({
            id: `epic-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: `An epic ${style} theme for ${context}. Setting: ${location}. Condition: ${element}.`,
            tags: [template.moodKeywords[0], style, 'Epic', 'Trailer'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Simple, anthem-like, powerful',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Theme',
                    scales: template.scales,
                    chords: {
                        types: 'Power Chords, Triads, Sus4',
                        progressions: [
                            'vi - IV - I - V (Epic Axis)',
                            'Dm - Bb - C - Dm (Gladiator)',
                            'Cm - Ab - Fm - G (Dark Epic)'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedEpicSubcategories = generateEpicSubcategories(10000);
