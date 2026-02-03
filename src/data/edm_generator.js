// Seeded random number generator
let seed = 2049;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

// 1. Rare & Underground EDM Sub-Styles (User Provided + Expansions)
const styleCategories = {
    dark_experimental: [
        'Darkwave EDM', 'Industrial Techno Hybrid', 'Ritual Techno', 'Occult Bass', 'Doom EDM',
        'Nocturnal Techstep', 'Shadow House', 'Drone Techno', 'Voidstep', 'Blackened EDM',
        'Gothic Trance', 'Witch House Fusion', 'Abyssal Techno', 'Hellscape House'
    ],
    cinematic_atmospheric: [
        'Cinematic Bass', 'Epic EDM Hybrid', 'Orchestral EDM Fusion', 'Trailer EDM', 'Ambient Rave',
        'Dreamstep', 'Ethereal Bass', 'Atmospheric Big Room', 'Space EDM', 'Celestial Trance',
        'Score-Step', 'Hans Zimmer Trance', 'Symphonic Dubstep', 'Film-Score House'
    ],
    rare_bass: [
        'Neuro Bass', 'Psybass', 'Deep Glitch Bass', 'Organic Bass', 'Acid Basswave',
        'Fractal Bass', 'Subharmonic EDM', 'Polyrhythmic Bass', 'Quantum Bass', 'Ritual Bass',
        'Sludge Bass', 'Neurofunk Hybrid', 'Liquid Glitch', 'Granular Bass'
    ],
    futuristic_cyber: [
        'Cyber Trance', 'Neon Tech', 'Hologram EDM', 'AI-Generated EDM Style', 'Robotic Groove',
        'Synthetic Pulse EDM', 'Machine Funk', 'Chrome House', 'Cyberpunk EDM', 'Digital Dystopia EDM',
        'Android Disco', 'Mainframe Techno', 'Binary Beat', 'Neo-Tokyo Bass'
    ],
    rhythm_experimental: [
        'Broken Beat EDM', 'Asymmetric Groove EDM', 'Micro-Rhythm EDM', 'Irregular Drop EDM', 'Modular EDM',
        'Polymeter EDM', 'Free-Form EDM', 'Unquantized EDM', 'Chaos EDM', 'Anti-Drop EDM',
        'Math-Step', 'Algorithmic House', 'Glitch-Hop Fusion', 'Stutter Techno'
    ]
};

// 2. Contexts / Atmospheres
const contexts = [
    'Cyberpunk Underground Club', 'Ancient Ritual Ceremony', 'Neon-Drenched City Streets', 'Abandoned Industrial Warehouse',
    'Deep Space Void', 'Holographic Concert', 'Post-Apocalyptic Wasteland', 'Underwater Sea Lab',
    'Digital Simulation', 'Dreamscape Void', 'High-Speed Chase', 'Boss Battle Arena',
    'Sacred Geometry Temple', 'Artificial Intelligence Core', 'Frozen Tundra Rave'
];

// 3. Sonic Elements
const elements = [
    'Heavy Sidechain Compression', 'Distorted Neuro Bass', 'Crystalline Synth Plucks', 'Evolving Pad Textures',
    'Granular Glitch Artifacts', 'Polyrhythmic Percussion', 'Shepard Tone Risers', 'Vocoder Chops',
    'Acid 303 Squalc', 'Tape Saturation', 'Reese Bass Sawtooths', 'Bitcrushed Drums',
    'Modular Patch Chaos', 'Binaural Beats', 'Sub-Bass Sine Waves', 'Arpeggiated Melodies'
];

// 4. Theory Templates per Category
const theoryTemplates = {
    dark_experimental: {
        tempo: '90-120 BPM',
        rhythm: 'Hypnotic, steady, industrial 4/4 or broken beat',
        harmony: 'Phrygian, Locrian, minor thirds, dissonance',
        orchestration: 'Distorted kicks, metallic percussion, drone layers',
        moodKeywords: ['Dark', 'Ritualistic', 'Oppressive', 'Hypnotic']
    },
    cinematic_atmospheric: {
        tempo: '120-140 BPM',
        rhythm: 'Driving, epic percussion, syncopated layers',
        harmony: 'Minor, Dorian, Aeolian, epic chord progressions (VI-VII-i)',
        orchestration: 'Hybrid orchestra, massive brass, choir, synth stacks',
        moodKeywords: ['Epic', 'Grand', 'Ethereal', 'Cinematic']
    },
    rare_bass: {
        tempo: '140-174 BPM',
        rhythm: 'Half-time feel, syncopated snare, breakbeats',
        harmony: 'Chromatic, dissonant bass movement, minimal melody',
        orchestration: 'Neuro bass reeses, punchy snares, glitch foley',
        moodKeywords: ['Aggressive', 'Gritty', 'Complex', 'Heavy']
    },
    futuristic_cyber: {
        tempo: '128-150 BPM',
        rhythm: 'Machine-like, precise 4/4 or electro breaks',
        harmony: 'Minor, pentatonic, futuristic "tech" intervals',
        orchestration: 'Clean crisp synths, neon pads, robotic vocals',
        moodKeywords: ['Futuristic', 'Neon', 'Synthetic', 'High-Tech']
    },
    rhythm_experimental: {
        tempo: '110-160 BPM',
        rhythm: 'Polymetric (4/4 over 3/4), unquantized, micro-rhythmic',
        harmony: 'Atonal, whole tone, mathematical patterns',
        orchestration: 'Modular bleeps, generative clusters, random percussion',
        moodKeywords: ['Chaotic', 'Unpredictable', 'Mathy', 'Experimental']
    }
};

const getCategoryDetails = (styleCategory, styleName) => {
    const template = theoryTemplates[styleCategory];
    return {
        type: styleCategory,
        template: template
    };
};

export const generateEDMSubcategories = (count) => {
    const generated = [];
    const usedTitles = new Set();
    const actualCount = Math.min(count, 10000);

    // Flatten styles to array for random picking when needed, but we mostly iterate categories
    const allStyles = Object.values(styleCategories).flat();

    for (let i = 0; i < actualCount; i++) {
        // Pick a category based on distribution
        const rCat = random();
        let categoryKey;
        if (rCat < 0.2) categoryKey = 'dark_experimental';
        else if (rCat < 0.4) categoryKey = 'cinematic_atmospheric';
        else if (rCat < 0.6) categoryKey = 'rare_bass';
        else if (rCat < 0.8) categoryKey = 'futuristic_cyber';
        else categoryKey = 'rhythm_experimental';

        const style = getRandomItem(styleCategories[categoryKey]);
        const context = getRandomItem(contexts);
        const element = getRandomItem(elements);

        // Generate Title
        let title;
        let variant = Math.floor(random() * 4);

        if (variant === 0) title = `${style}: ${context}`;
        else if (variant === 1) title = `${element} ${style}`;
        else if (variant === 2) title = `${style} [${element} Variation]`;
        else title = `The ${context} ${style.split(' ').pop()}`; // e.g., "The Neon City Rave"

        // Ensure Uniqueness
        let attempts = 0;
        while (usedTitles.has(title) && attempts < 10) {
            title += ` ${Math.floor(random() * 99)}`; // Fallback for uniqueness
            attempts++;
        }
        usedTitles.add(title);

        const details = getCategoryDetails(categoryKey, style);
        const mood = getRandomItem(details.template.moodKeywords);

        // Construct Prompt
        const prompt = `Create a ${mood.toLowerCase()}, ${style.toLowerCase()} track set in a ${contexts.includes(context) ? context.toLowerCase() : 'futuristic setting'}. 
        **BPM:** ${details.template.tempo}. 
        **Rhythm:** ${details.template.rhythm}. 
        **Instrumentation:** Focus on ${element.toLowerCase()} combined with ${details.template.orchestration}. 
        **Harmony:** Use ${details.template.harmony}. 
        **Design:** Ensure the sound design features ${element.toLowerCase()} prominently. 
        **Vibe:** The track should feel ${mood.toLowerCase()} and distinctive, utilizing advanced production techniques common in ${style}.`;

        generated.push({
            id: `edm-gen-${i}-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
            title: title,
            moodUseCase: `A ${mood.toLowerCase()} ${style} track perfect for ${context}.`,
            tags: ['EDM', style, mood, categoryKey.replace('_', ' ')],
            coreTheory: details.template,
            variations: [
                {
                    id: 'var-1',
                    name: 'Main Mix',
                    scales: {
                        primary: details.template.harmony.split(',')[0] || 'Minor',
                        secondary: details.template.harmony.split(',')[1] || 'Chromatic'
                    },
                    chords: {
                        types: 'Extended (7ths, 9ths), Suspended',
                        progressions: ['i-VI-VII', 'i-iv-v', 'Modal Vamp']
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedEDMSubcategories = generateEDMSubcategories(10000);
