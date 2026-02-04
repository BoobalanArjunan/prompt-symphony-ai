// EDM Generator for Massive Subcategory Expansion
// Generating 10,000 permutations for 60+ genres based on specific logic.

let seed = 123456789;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}
function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

// 🧠 Group 1: Experimental / Complex Word Banks
const experimentalAdjectives = ['Stochastic', 'Granular', 'Fractal', 'Non-Linear', 'Algorithmic', 'Hyper', 'Glitch', 'Quantum', 'Neural', 'Bio-Digital', 'Recursive', 'Polymetric', 'Chaotic', 'Spectral', 'Microtonal'];
const experimentalNouns = ['Flux', 'Matrix', 'Process', 'function()', 'Error', 'Artifact', 'Grid', 'Automaton', 'Sequencer', 'OSC', 'Signal', 'Noise', 'Feedback', 'Texture', 'Synthesis'];
const experimentalContexts = ['in the Lab', 'during Compilation', 'at the Edge of Chaos', 'inside the CPU', 'rendering Reality', 'calculating Infinity', 'breaking the Loop', 'merging with AI'];

// 🕉️ Group 2: Spiritual / Psy Word Banks
const spiritualAdjectives = ['Astral', 'Lucid', 'Sacred', 'Ancient', 'Inner', 'Conscious', 'Healing', 'Vibrational', 'Third-Eye', 'Shamanic', 'Ritual', 'Hypnotic', 'Zen', 'Awakened', 'Transcendent'];
const spiritualNouns = ['Chakra', 'Spirit', 'Soul', 'Mantra', 'Vibration', 'Journey', 'Temple', 'Forest', 'Moon', 'Gaia', 'Vision', 'Ceremony', 'Portals', 'Dimensions', 'Oracle'];
const spiritualContexts = ['at Sunrise', 'in deep Meditation', 'during the Ritual', 'opening the Portal', 'healing the Mind', 'connecting to Source', 'under the Bodhi Tree', 'transcending Time'];

// 🏭 Group 3: Industrial / Mech Word Banks
const industrialAdjectives = ['Steel', 'Rusty', 'Mechanical', 'Hydraulic', 'Concrete', 'Heavy', 'Broken', 'Automated', 'Pneumatic', 'Post-Apocalyptic', 'Gritty', 'Metallic', 'Cybernetic', 'Raw', 'Brutal'];
const industrialNouns = ['Factory', 'Gear', 'Piston', 'Assembly Line', 'Wasteland', 'Machine', 'Engine', 'Press', 'Hammer', 'Alarm', 'Siren', 'Generator', 'Sector 9', 'Warehouse', 'Steel Mill'];
const industrialContexts = ['at the Factory', 'during the Shift', 'breaking the Machine', 'in the Rust Belt', 'underground', 'formatting the Drive', 'welding the Future', 'system Failure'];

// 🌌 Group 4: Cosmic / Space Word Banks
const cosmicAdjectives = ['Interstellar', 'Orbital', 'Galactic', 'Zero-G', 'Alien', 'Stellar', 'Nebular', 'Dark', 'Infinite', 'Weightless', 'Faster-than-Light', 'Plasma', 'Magnetic', 'Void', 'Hyper-Space'];
const cosmicNouns = ['Star', 'Planet', 'Moon', 'Asteroid', 'Comet', 'Quasar', 'Black Hole', 'Event Horizon', 'Spaceship', 'Station', 'Colony', 'Signal', 'Constellation', 'Supernova', 'Dimension'];
const cosmicContexts = ['near the Event Horizon', 'landing on Mars', 'orbiting Saturn', 'drifting in Void', 'making Contact', 'fixing the Hull', 'watching the Stars', 'escaping Gravity'];

// 🌑 Group 5: Dark / Hypnotic Word Banks
const darkAdjectives = ['Shadow', 'Abyssal', 'Midnight', 'Foggy', 'Subterranean', 'Haunted', 'Cursed', 'Unknown', 'Deep', 'Cold', 'Nocturnal', 'Hidden', 'Obscure', 'Ghostly', 'Forgotten'];
const darkNouns = ['Crypt', 'Dungeon', 'Night', 'Fog', 'Abyss', 'Void', 'Creature', 'Phantom', 'Echo', 'Tomb', 'Ritual', 'Basement', 'Underground', 'Tunnel', 'Secret'];
const darkContexts = ['at 3AM', 'in the Fog', 'under the City', 'hiding in Shadows', 'running from Ghosts', 'entering the Void', 'lost in the Dark', 'whispering secrets'];

// 🤖 Group 6: AI / Virtual Word Banks
const aiAdjectives = ['Virtual', 'Digital', 'Simulated', 'Meta', 'Cyber', 'Neural', 'Synthetic', 'Holographic', 'Augmented', 'Encrypted', 'Uploaded', 'Rendered', 'Pixelated', 'Artificial', 'Binary'];
const aiNouns = ['Avatar', 'Server', 'Cloud', 'Data', 'Network', 'Glitch', 'Bot', 'Mainframe', 'Simulation', 'Reality', 'Protocol', 'Code', 'Virus', 'Algorithm', 'Interface'];
const aiContexts = ['in VR', 'uploading Consciousness', 'hacking the Mainframe', 'creating the Avatar', 'exploring the Net', 'simulating Life', 'rendering the World', 'connecting to the Hive'];

// Theory Generators
const getBPM = (genreId) => {
    if (genreId.includes('minimal')) return '120-128 BPM';
    if (genreId.includes('techno')) return '130-140 BPM';
    if (genreId.includes('bass') || genreId.includes('dubstep')) return '140 BPM (Half-time)';
    if (genreId.includes('rave')) return '150+ BPM';
    if (genreId.includes('ambient') || genreId.includes('meditative')) return '80-100 BPM';
    if (genreId.includes('psy')) return '138-145 BPM';
    if (genreId.includes('glitch')) return '100-115 BPM';
    return '128 BPM';
};

const getScale = (group) => {
    if (group === 'experimental') return { primary: 'Chromatic', secondary: 'Whole Tone' };
    if (group === 'spiritual') return { primary: 'Phrygian', secondary: 'Locrian' };
    if (group === 'industrial') return { primary: 'Minor', secondary: 'Diminished' };
    if (group === 'cosmic') return { primary: 'Lydian', secondary: 'Mixolydian' };
    if (group === 'dark') return { primary: 'Harmonic Minor', secondary: 'Aeolian' };
    if (group === 'ai') return { primary: 'Dorian', secondary: 'Binary (0-1)' };
    return { primary: 'Minor', secondary: 'Major' };
};

const getBanks = (group) => {
    switch (group) {
        case 'experimental': return [experimentalAdjectives, experimentalNouns, experimentalContexts];
        case 'spiritual': return [spiritualAdjectives, spiritualNouns, spiritualContexts];
        case 'industrial': return [industrialAdjectives, industrialNouns, industrialContexts];
        case 'cosmic': return [cosmicAdjectives, cosmicNouns, cosmicContexts];
        case 'dark': return [darkAdjectives, darkNouns, darkContexts];
        case 'ai': return [aiAdjectives, aiNouns, aiContexts];
        default: return [experimentalAdjectives, experimentalNouns, experimentalContexts];
    }
};

export const generateEDMSubcategories = (genreId, genreTitle, group, count) => {
    const generated = [];
    const usedTitles = new Set();
    const actualCount = Math.min(count, 10000);
    const [adjs, nouns, contexts] = getBanks(group);

    // Core theory for this entire batch
    const bpm = getBPM(genreId);
    const scale = getScale(group);

    for (let i = 0; i < actualCount; i++) {
        let title, adj, noun, context;
        let attempts = 0;

        do {
            adj = getRandomItem(adjs);
            noun = getRandomItem(nouns);
            context = getRandomItem(contexts);

            const r = random();
            if (r < 0.4) title = `${adj} ${noun}`;
            else if (r < 0.7) title = `${noun} ${context}`;
            else title = `${adj} ${genreTitle}`;

            // Add slight variation number if collision often
            if (usedTitles.has(title)) {
                title = `${title} (Variation ${Math.floor(random() * 999)})`;
            }

            attempts++;
        } while (usedTitles.has(title) && attempts < 10);

        usedTitles.add(title);

        const prompt = `Create a ${genreTitle} track. Title: "${title}". 
        Mood: ${adj}, ${noun}. Context: ${context}.
        Tempo: ${bpm}. Scale: ${scale.primary} with ${scale.secondary} nuances.
        Production: High quality, genre-specific sound design. Focus on ${adj} textures and ${noun} rhythms.`;

        generated.push({
            id: `${genreId}-${i}-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
            title: title,
            moodUseCase: `${adj} atmosphere. Context: ${context}.`,
            tags: [group, adj, noun, genreTitle],
            coreTheory: {
                tempo: bpm,
                rhythm: `${adj} Groove`,
                harmony: `${scale.primary} progressions`,
                melody: `${noun} motifs`,
                orchestration: `Synthesized ${noun}s, ${adj} Bass`
            },
            variations: [
                {
                    id: `${genreId}-${i}-var`,
                    name: 'Main Mix',
                    scales: scale,
                    chords: {
                        types: 'Genre Standard',
                        progressions: ['i - VI - VII', 'Static', 'Generative']
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};
export const generatedEDMSubcategories = [];
