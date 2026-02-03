// Seed for stability
let seed = 78787878;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    'Deep Space Ambient', 'Celestial Choir', 'Cosmic Horror', 'Ethereal Meditation',
    'Interstellar Drift', 'Nebula Soundscape', 'Zero Gravity', 'Planetary Orbit',
    'Starlight Wonder', 'Void Silence', 'Solar Wind', 'Event Horizon'
];

const contexts = [
    'Leaving Earth', 'Watching a Supernova', 'Floating in Space', 'Discovering Alien Life',
    'Entering Hyperspace', 'Walking on the Moon', 'Gazing at the Galaxy', 'Solar Flare Impact',
    'Drifting to Infinity', 'First Contact', 'Satellite Repair', 'Crossing the Universe',
    'Black Hole Approach', 'Terraforming Mars', 'The Big Bang', 'End of Time'
];

const locations = [
    'The Milky Way', 'Orion Nebula', 'Rings of Saturn', 'Edge of the Void',
    'Alien Planet Surface', 'International Space Station', 'Dying Star', 'Crystal Asteroid',
    'Galactic Core', 'Dark Matter Cloud', 'Ice Moon', 'Solar Crown',
    'Wormhole Entrance', 'Exoplanet Beach', 'Comet Tail', 'Observatory Dome'
];

const elements = [
    'With Huge Reverb', 'In Complete Silence', 'With Angelic Voices', 'Under Bright Light',
    'With Slow Motion', 'In Infinite Loop', 'With Shimmering Particles', 'Under Black Sky',
    'With Deep Bass Rumble', 'Floating Weightless', 'With Glassy Textures', 'Expanding Forever'
];

const theoryTemplates = {
    awe: {
        tempo: '60 BPM (Very Slow)',
        rhythm: 'Free time, slow breathing pads',
        harmony: 'Lydian, Major Add9, Suspended chords',
        scales: { primary: 'Lydian', secondary: 'Major Pentatonic' },
        moodKeywords: ['Awe', 'Beautiful', 'Vast', 'Peaceful']
    },
    void: {
        tempo: 'Free / Drone',
        rhythm: 'No rhythm, just texture',
        harmony: 'Open 5ths, Octaves, Sparse',
        scales: { primary: 'Minor Pentatonic', secondary: 'Aeolian' },
        moodKeywords: ['Empty', 'Lonely', 'Cold', 'Infinite']
    },
    contact: {
        tempo: '70-90 BPM',
        rhythm: 'Gentle pulse, heartbeat',
        harmony: 'Major 7 #11, Mystic Chord',
        scales: { primary: 'Lydian Dominant', secondary: 'Whole Tone' },
        moodKeywords: ['Mysteriou', 'Wondrous', 'Alien', 'Warm']
    }
};

const getCategoryDetails = (style, context) => {
    let type = 'awe'; // default

    if (style.includes('Horror') || style.includes('Void') || context.includes('Black Hole')) {
        type = 'void';
    } else if (context.includes('Contact') || context.includes('Alien') || style.includes('Interstellar')) {
        type = 'contact';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateCelestialSubcategories = (count) => {
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
                title = `${context} at ${location} (${element})`;
            } else {
                title = `${location} - ${style}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context);
        const { template, type } = details;

        let orchestration = 'Synth Pads, Choir, Reverb';
        if (type === 'awe') orchestration = 'Full String Section, Female Choir, Glass Harp';
        if (type === 'void') orchestration = 'Sub Bass, Bowed Metal, Deep Drones';
        if (type === 'contact') orchestration = 'Analog Synths (Vangelis style), Chimes, Solo Cello';

        const prompt = `Compose a Celestial/Cosmic Awe track. Title: "${title}". Tempo: ${template.tempo}. Mood: ${template.moodKeywords.join(', ')}.
        Style: ${style}. Scale: ${template.scales.primary} (${template.scales.secondary} nuances).
        Instrumentation: ${orchestration}.
        Rhythm: ${template.rhythm}.
        Harmony: ${template.harmony}.
        Scenario: ${context} in ${location}, ${element}.
        Focus on: Vastness, infinity, slow evolution, and the beauty of space.`;

        generated.push({
            id: `celestial-gen-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: `A ${style} experience: ${context} at ${location}. Condition: ${element}.`,
            tags: [template.moodKeywords[0], style, 'Celestial', 'Cosmic'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Slow rising lines, sustained notes',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Theme',
                    scales: template.scales,
                    chords: {
                        types: 'Maj7, Sus2, Slash Chords',
                        progressions: [
                            'I - II (Lydian lift)',
                            'I - V - IV (Hopeful)',
                            'Static Chord with shifting textures'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedCelestialSubcategories = generateCelestialSubcategories(10000);
