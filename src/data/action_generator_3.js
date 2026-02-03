// Seeded random number generator for stability
let seed = 99118822;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

const styles = [
    'Cyberpunk', 'Orchestral Hybrid', 'Tribal Percussion', 'Industrial',
    'Epic Choral', 'Retro Synthwave', 'Gritty Rock-Orchestral', 'Minimalist Tension',
    'Chaotic Avant-Garde', 'Spy Thriller/Jazz', 'Dubstep-Cinematic', 'Glitch-Hop Battle',
    'Simulated Brass', 'Bio-Mechanical', 'Gothic Metal', 'Desert Blues Action',
    'Acid Techno Chase', '8-Bit Combat', 'Steampunk Swing', 'Heavy Metal Symphony'
];

const contexts = [
    'Car Chase', 'Rooftop Battle', 'Underground Fight Club', 'Alien Invasion',
    'Bank Heist', 'Prison Break', 'Mecha Duel', 'Jungle Ambush',
    'Escape from Exploding Base', 'Sniper Duel', 'Sword Fight', 'Space Dogfight',
    'Train Heist', 'Gladiator Arena', 'Zombie Horde', 'Robot Uprising',
    'Natural Disaster Run', 'Cyber Attack', 'Hostage Rescue', 'Last Stand',
    'Drone Race', 'Submarine Battle', 'Monster Hunt', 'Parkour Escape',
    'Speedboat Pursuit', 'Helicopter Dogfight', 'Zero-G Skirmish', 'Virtual Reality Combat',
    'Samurai Duel', 'Viking Raid', 'Western Shootout', 'Ninja Infiltration'
];

const locations = [
    'Neo-Tokyo Streets', 'Burning Skyscraper', 'Arctic Base', 'Volcanic Island',
    'Abandoned Subway', 'Space Station', 'Desert Canyon', 'Stormy Ocean',
    'Ancient Temple Ruins', 'High-Tech Lab', 'Dystopian Slums', 'Nuclear Power Plant',
    'Medieval Castle', 'Asteroid Field', 'Underwater Base', 'Cybernetic Hive',
    'War-Torn City', 'Secret Bunker', 'Moving Convoy', 'Frozen Wasteland',
    'Floating City', 'Jungle Canopy', 'Lunar Colony', 'Sunken Shipwreck',
    'Digital Void', 'Radioactive Wasteland', 'Crystal Cave', 'Magma Chamber',
    'Haunted Cathedral', 'Clockwork Tower', 'Alien Mothership', 'Bio-Lab'
];

const elements = [
    'At Night', 'In Heavy Rain', 'During Sandstorm', 'Under Red Alert',
    'With Time Ticking', 'In Zero Gravity', 'Amidst Explosions', 'In Thick Fog',
    'During Eclipse', 'With Failing Gear', 'Outnumbered', 'In Stealth Mode',
    'While Injured', 'Against The Clock', 'In Burning Heat', 'During Earthquake',
    'In Slow Motion', 'With Low Gravity', 'Under Heavy Fire', 'While Blinded',
    'In Toxic Gas', 'During EMP Blast', 'In Freefall', 'Underwater'
];

const theoryTemplates = {
    kinetic: {
        tempo: '140-160 BPM',
        rhythm: 'Driving 16th notes, 3+3+2 accents',
        harmony: 'Power Chords, Pedal Tones',
        scales: { primary: 'Aeolian', secondary: 'Phrygian' },
        moodKeywords: ['Fast', 'Driving', 'Relentless', 'Adrenaline']
    },
    heavy: {
        tempo: '100-130 BPM',
        rhythm: 'Heavy stomping downbeats, triplets',
        harmony: 'Low intervals, Tritones, Clusters',
        scales: { primary: 'Phrygian Dominant', secondary: 'Diminished' },
        moodKeywords: ['Heavy', 'Brutal', 'Aggressive', 'Dark']
    },
    heroic: {
        tempo: '120-150 BPM',
        rhythm: 'Galloping (triplets), Marching snare',
        harmony: 'Minor to Major shifts (i - VI - III - VII)',
        scales: { primary: 'Dorian', secondary: 'Aeolian' },
        moodKeywords: ['Heroic', 'Epic', 'Brave', 'Determined']
    },
    tech: {
        tempo: '130-170 BPM',
        rhythm: 'Breakbeats, Glitchy percussion',
        harmony: 'Synth bass drones, Chromatic passing tones',
        scales: { primary: 'Minor Pentatonic', secondary: 'Chromatic' },
        moodKeywords: ['Tech', 'Glitchy', 'Futuristic', 'Precise']
    },
    tense: {
        tempo: '110-140 BPM',
        rhythm: 'Syncopated, uneven meters (5/4, 7/8)',
        harmony: 'Dissonant strings, Suspensions',
        scales: { primary: 'Octatonic', secondary: 'Locrian' },
        moodKeywords: ['Tense', 'Uneasy', 'Suspenseful', 'Sharp']
    }
};

const getCategoryDetails = (style, context) => {
    let type = 'kinetic'; // default assumption

    if (['Cyberpunk', 'Industrial', 'Retro Synthwave'].includes(style)) {
        type = 'tech';
    } else if (['Epic Choral', 'Tribal Percussion'].includes(style) || ['Last Stand', 'Gladiator Arena'].includes(context)) {
        type = 'heroic';
    } else if (['Underground Fight Club', 'Zombie Horde', 'Alien Invasion'].includes(context) || style === 'Heavy Rock-Orchestral') {
        type = 'heavy';
    } else if (['Sniper Duel', 'Spy Thriller/Jazz'].includes(style) || ['Prison Break'].includes(context)) {
        type = 'tense';
    }

    return { type, template: theoryTemplates[type] };
};

export const generateActionSubcategories3 = (count) => {
    const generated = [];
    const usedTitles = new Set();
    const actualCount = Math.min(count, 8000); // Target 8000

    for (let i = 0; i < actualCount; i++) {
        let style, context, location, element;
        let title;

        // Retry logic for uniqueness
        let attempts = 0;
        do {
            style = getRandomItem(styles);
            context = getRandomItem(contexts);
            location = getRandomItem(locations);
            element = getRandomItem(elements);

            const r = random();
            if (r < 0.33) {
                title = `${style} ${context} In ${location}`;
            } else if (r < 0.66) {
                title = `${context} ${element} At ${location}`;
            } else {
                title = `${style} ${location} ${context}`;
            }
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const details = getCategoryDetails(style, context);
        const { template, type } = details;
        const moodKeywords = template.moodKeywords;
        const scales = template.scales;

        // Dynamic Orchestration based on style
        let orchestration = 'Hybrid Orchestra (Strings + Synths)';
        if (style === 'Cyberpunk') orchestration = 'Distorted Synths, Heavy Bass, Electronic Drums';
        if (style === 'Epic Choral') orchestration = 'Full Orchestra, Large Choir, Taiko Drums';
        if (style === 'Tribal Percussion') orchestration = 'Djembe, Taiko, Woodwinds, Shakers';
        if (style === 'Spy Thriller/Jazz') orchestration = 'Bass Guitar, Bongos, Brass Stabs, Flute';

        const moodText = `High stakes action featuring ${style} elements during a ${context} in ${location}. Condition: ${element}.`;

        const prompt = `Compose an Action track. Title: "${title}". Tempo: ${template.template ? template.template.tempo : template.tempo}. Mood: ${moodKeywords.join(', ')}. 
        Style: ${style}. Scale: ${scales.primary} (${scales.secondary} nuances).
        Instrumentation: ${orchestration}. 
        Rhythm: ${template.rhythm}. 
        Harmony: ${template.harmony}. 
        Scenario: ${context} in ${location}, ${element}. 
        Focus on: Forward momentum, high energy, and clear structural build-ups and drops.`;

        generated.push({
            id: `action-gen-3-${i}-${title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`,
            title: title,
            moodUseCase: moodText,
            tags: [moodKeywords[0], style, 'Action', 'High Energy'],
            coreTheory: {
                tempo: template.tempo,
                rhythm: template.rhythm,
                harmony: template.harmony,
                melody: 'Rhythmic motifs, Ostinatos',
                orchestration: orchestration
            },
            variations: [
                {
                    id: `var-1`,
                    name: 'Main Theme',
                    scales: scales,
                    chords: {
                        types: 'Power Chords, Suspended, Clusters',
                        progressions: [
                            'i - VI - VII - i',
                            'i - bII - i (Phrygian)',
                            'Octatonic Riffs'
                        ]
                    },
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

export const generatedActionSubcategories3 = generateActionSubcategories3(8000);
