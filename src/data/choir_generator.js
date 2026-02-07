// Seeded random number generator for stability
let seed = 987654321;
function random() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
}

function getRandomItem(arr) {
    return arr[Math.floor(random() * arr.length)];
}

// === GENERATOR BANKS BY GENRE ===

const GENRE_BANKS = {
    classical: {
        ensemble: ['Royal Chapel Choir', 'Madrigal Ensemble', 'Chamber Choir', 'Oratorio Chorus', 'Polyphonic Group'],
        texture: ['Imitative Counterpoint', 'Homophonic Hymn', 'Fugal Entries', 'Antiphonal', 'A Cappella'],
        language: ['Latin', 'German', 'Italian', 'French'],
        concept: ['Missa Brevis', 'Royal Wedding', 'Requiem Mass', 'Spring Madrigal', 'Vespers Service'],
        accompaniment: ['Pipe Organ', 'Harpsichord', 'Chamber Strings', 'Lute', 'Unaccompanied'],
        theoryType: 'sacred' // Maps to template
    },
    sacred: {
        ensemble: ['Monastic Order', 'Gospel Mass Choir', 'Cathedral Choir', 'Gregorian Chanters', 'Revival Choir'],
        texture: ['Unison Chant', 'Four-Part Harmony', 'Call and Response', 'Drone and Melody', 'Hymnody'],
        language: ['Latin', 'Hebrew', 'Old Church Slavonic', 'English'],
        concept: ['Easter Sunday', 'Midnight Vigil', 'High Mass', 'Spiritual Awakening', 'Sacred Procession'],
        accompaniment: ['Grand Organ', 'Handbells', 'Tambourine & Clap', 'Pure Acoustics', 'Brass Quartet'],
        theoryType: 'sacred'
    },
    cinematic: {
        ensemble: ['Doomsday Choir', 'Heroic Chorus', 'Whispering Legion', 'Battle Choir', 'Ethereal Sopranos'],
        texture: ['Staccato Chants', 'Glissando Swells', 'Wall of Sound', 'Whisper to Scream', 'Cluster Builds'],
        language: ['Pseudo-Latin', 'Deep Russian', 'Elvish', 'Alien Dialect'],
        concept: ['Final Battle', 'Hero\'s Return', 'Horror Reveal', 'Space Station', 'Ancient Evil Awakening'],
        accompaniment: ['Orchestral Percussion', 'Hybrid Synths', 'Massive Brass', 'Sub-Bass Drops', 'Sound Design'],
        theoryType: 'epic' // Maps to template
    },
    folk: {
        ensemble: ['Village Voices', 'Mountain Chanters', 'Tribal Circle', 'Nomadic Shepherds', 'Island Singers'],
        texture: ['Throat Singing', 'Ululation', 'Open Fifths', 'Yodeling', 'Group Unison'],
        language: ['Old Norse', 'Swahili', 'Gaelic', 'Bulgarian', 'Native Vocables'],
        concept: ['Harvest Festival', 'Rain Dance', 'War Preparation', 'Ancestral Story', 'Winter Solstice'],
        accompaniment: ['Frame Drum', 'Djembe', 'Flutes', 'Acoustic Guitar', 'Body Percussion'],
        theoryType: 'ethereal'
    },
    contemporary: {
        ensemble: ['Vocal Jazz Group', 'Pop A Cappella Crew', 'Show Choir', 'Beatbox Collective', 'Soul Ensemble'],
        texture: ['Close Harmony', 'Scat Singing', 'Vocal Percussion', 'Jazz Chords', 'Pop Belting'],
        language: ['English', 'Scat Syllables', 'Spanish', 'French'],
        concept: ['City Night', 'Summer Hit', 'Heartbreak Ballad', 'Street Performance', 'Club Anthem'],
        accompaniment: ['Finger Snaps', 'Upright Bass', 'Synth Pads', 'Drum Kit', 'Human Beatbox'],
        theoryType: 'ethereal'
    },
    advanced: {
        ensemble: ['Glitch Choir', 'Drone Ensemble', 'ASMR Whisperers', 'Spectral Singers', 'AI Vocaloid Army'],
        texture: ['Granular Synthesis', 'Reverse Audio', 'Microtonal Clusters', 'Shepard Tone', 'Formant Shifting'],
        language: ['Binary', 'Mouth Clicks', 'Phonemes', 'Glitch Stutter'],
        concept: ['System Failure', 'Lucid Dream', 'Digital Void', 'Neural Network', 'Time Dilation'],
        accompaniment: ['Modular Synth', 'Noise Walls', 'Field Recordings', 'Feedback Loops', 'Silence'],
        theoryType: 'scifi'
    }
};

const theoryTemplates = {
    sacred: {
        harmony: 'Triadic, Plagal Cadences, Modal (Dorian)',
        tempo: 'Largo (40-60 BPM)',
        rhythm: 'Free-flowing, Breath-based',
        melody: 'Stepwise, Chant-like',
        scales: { primary: 'Dorian', secondary: 'Mixolydian' },
        chords: { types: 'Triads, Suspensions', progressions: ['i - VII - i', 'i - IV - i'] },
        moodKeywords: ['Holy', 'Divine', 'Peaceful']
    },
    epic: {
        harmony: 'Open Fifths, Minor/Major shifts, Power Chords',
        tempo: 'Driving (110-140 BPM)',
        rhythm: 'Driving Staccato, Triplets',
        melody: 'Anthemic, Soaring',
        scales: { primary: 'Natural Minor', secondary: 'Phrygian' },
        chords: { types: 'Power Chords, Sus4', progressions: ['i - VI - VII', 'i - bII - i'] },
        moodKeywords: ['Powerful', 'Heroic', 'Massive']
    },
    ethereal: {
        harmony: 'Lydian Mode, Major 7ths, Suspensions',
        tempo: 'Floaty (60-80 BPM)',
        rhythm: 'Undefined, Ambient',
        melody: 'Legato, Arcing',
        scales: { primary: 'Lydian', secondary: 'Major Pentatonic' },
        chords: { types: 'Maj7, Add9', progressions: ['I - II - I', 'Major 3rd Moves'] },
        moodKeywords: ['Dreamy', 'Floating', 'Magical']
    },
    scifi: {
        harmony: 'Whole Tone, Quartal Harmony',
        tempo: 'Mechanical (120 BPM)',
        rhythm: 'Grid-locked, Glitchy',
        melody: 'Robotic, Arpeggiated',
        scales: { primary: 'Whole Tone', secondary: 'Diminished' },
        chords: { types: 'Augmented, Quartal', progressions: ['Static Color', 'Modulation'] },
        moodKeywords: ['Futuristic', 'Cold', 'Alien']
    }
};

// Generic generator function that takes a genre key
const generateGenreSpecificChoir = (count, genreKey, prefixId) => {
    const banks = GENRE_BANKS[genreKey];
    if (!banks) return [];

    const generated = [];
    const usedTitles = new Set();
    const template = theoryTemplates[banks.theoryType];

    for (let i = 0; i < count; i++) {
        let ensemble, texture, language, concept, accompany;
        let title;

        let attempts = 0;
        do {
            ensemble = getRandomItem(banks.ensemble);
            texture = getRandomItem(banks.texture);
            language = getRandomItem(banks.language);
            concept = getRandomItem(banks.concept);
            accompany = getRandomItem(banks.accompaniment);
            // Append a random number to title if needed to ensure uniqueness for 10k items
            const variantNumber = Math.floor(random() * 1000);

            title = `${concept} ${variantNumber}: ${ensemble}`;
            attempts++;
        } while (usedTitles.has(title) && attempts < 100);

        usedTitles.add(title);

        const prompt = `Compose a ${genreKey} choral piece titled "${title}". 
        Ensemble: ${ensemble}. 
        Texture: ${texture}. 
        Language: ${language}. 
        Accompaniment: ${accompany}. 
        Mood: ${template.moodKeywords.join(', ')}. 
        Harmony: ${template.harmony}. 
        Scenario: ${concept}. 
        The sound should be valid for the ${genreKey} style.`;

        generated.push({
            id: `gen-${prefixId}-${i}`,
            title: title,
            moodUseCase: `A ${genreKey} choral piece featuring ${ensemble}.`,
            coreTheory: {
                tempo: template.tempo,
                range: 'Varied',
                harmony: template.harmony,
                rhythm: template.rhythm,
                melody: template.melody,
                orchestration: accompany,
                language: language
            },
            variations: [
                {
                    id: `var-${prefixId}-${i}`,
                    name: 'Main Variation',
                    scales: template.scales,
                    chords: template.chords,
                    prompt: prompt
                }
            ]
        });
    }
    return generated;
};

// EXPORT SPECIFIC LISTS
// User requested 10,000 for EACH.
export const classicalChoirGen = generateGenreSpecificChoir(10000, 'classical', 'cls');
export const sacredChoirGen = generateGenreSpecificChoir(10000, 'sacred', 'scr');
export const cinematicChoirGen = generateGenreSpecificChoir(10000, 'cinematic', 'cin');
export const folkChoirGen = generateGenreSpecificChoir(10000, 'folk', 'flk');
export const contemporaryChoirGen = generateGenreSpecificChoir(10000, 'contemporary', 'cnt');
export const advancedChoirGen = generateGenreSpecificChoir(10000, 'advanced', 'adv');

// Infinite library can be a mix of all, or just cinematic. Let's make it a mix.
export const generatedChoirSubcategories = [
    ...classicalChoirGen.slice(0, 1600),
    ...sacredChoirGen.slice(0, 1600),
    ...cinematicChoirGen.slice(0, 1600),
    ...folkChoirGen.slice(0, 1600),
    ...contemporaryChoirGen.slice(0, 1600),
    ...advancedChoirGen.slice(0, 2000)
]; 
