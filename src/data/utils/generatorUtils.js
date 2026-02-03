export const MOODS = [
    "Dark", "Heroic", "Tense", "Chaotic", "Epic", "Wonder", "Mysterious", "Magical", "Calm",
    "Paranoid", "Urgent", "Stealth", "Supernatural", "Psychological", "Occult", "Monster",
    "Cosmic", "Uneasy", "Dread", "Terror", "Panic", "Goofy", "Playful", "Sneaky", "Whimsical",
    "Energetic", "Sweet", "Passionate", "Bittersweet", "Dreamy", "Sensual", "Lonely", "Nostalgic",
    "Grieving", "Hopeful", "Ethereal", "Sacred", "Mystical", "Grand", "Determined",
    "Triumphant", "Emotional", "Victorious", "Aggressive", "Melancholy", "Euphoric", "Hypnotic",
    "Fragile", "Industrial", "Metallic", "Cybernetic", "Ancient", "Primal", "Hollow", "Vibrant",
    "Desolate", "Frenzied", "Tranquil", "Stoic", "Manic", "Groovy", "Funk", "Soulful", "Gritty",
    "Raw", "Polished", "Elegant", "Sophisticated", "Childlike", "Innocent", "Sinister", "Macabre"
];

const TEMPOS = [
    "Very Slow (40-60 BPM)", "Slow (60-80 BPM)", "Moderately Slow (80-100 BPM)",
    "Medium (100-120 BPM)", "Aggressive (120-140 BPM)", "Fast (140-160 BPM)",
    "Very Fast (160-180 BPM)", "Extreme (180+ BPM)", "Rubato (Free Time)",
    "Epic March (90 BPM)", "Driving (130 BPM)", "Meditative (50 BPM)"
];

const KEYS = [
    "C Minor", "C Major", "C# Minor", "Db Major", "D Dorian", "D Minor", "D Major",
    "Eb Minor", "Eb Lydian", "Eb Major", "E Phrygian", "E Minor", "E Major",
    "F Lydian", "F Minor", "F Major", "F# Locrian", "F# Minor", "F# Major",
    "G Mixolydian", "G Minor", "G Major", "Ab Major", "G# Minor", "A Aeolian",
    "A Minor", "A Major", "Bb Mixolydian", "Bb Major", "Bb Minor", "B Locrian",
    "B Minor", "B Major", "Chromatic / Atonal", "Whole Tone Scale"
];

const GENRE_DESCRIPTORS = {
    action: {
        instruments: ["Orchestral Brass", "Driving Synths", "Percussion Ensembles", "Electric Guitars", "Distorted Bass", "Hybrid FX", "Taiko Drums", "Staccato Strings", "Braaams", "Industrial Hits"],
        adjectives: ["Explosive", "Relentless", "Adrenaline-fueled", "Punchy", "Kinetic", "Combative", "Violent", "High-Octane", "Thundering", "Ballistic", "Fierce", "Unstoppable"]
    },
    adventure: {
        instruments: ["Soaring Strings", "French Horns", "Flutes", "Acoustic Guitar", "Penny Whistle", "Bagpipes", "Harp", "Orchestral Chimes", "Rolling Timpani", "Solo Violin"],
        adjectives: ["Sweeping", "Grand", "Journeying", "Courageous", "Noble", "Discovering", "Majestic", "Breathtaking", "Wondrous", "Exploring", "Galloping", "Scenic"]
    },
    suspense: {
        instruments: ["Ticking Clocks", "Low Drones", "Tremolo Strings", "Sub Bass", "Muted Piano", "Waterphone", "Bowed Cymbals", "Heartbeat Kick", "Breath FX", "Prepared Piano"],
        adjectives: ["Nail-biting", "Uneasy", "Anticipatory", "Shadowy", "Tense", "Creeping", "Lurking", "Uncertain", "Watchful", "Paranoid", "Stalking", "Silent"]
    },
    horror: {
        instruments: ["Detuned Piano", "Screeching Violins", "Guttural Choir", "Industrial Scrapes", "Music Box", "Reverse Cymbals", "Infrasound", "Bone Percussion", "Shepard Tone", "Distorted Screams"],
        adjectives: ["Terrifying", "Nightmarish", "Unsettling", "Blood-curdling", "Macabre", "Haunted", "Demonic", "Possessed", "Gruesome", "Chilling", "Eerie", "Psychotic"]
    },
    comedy: {
        instruments: ["Pizzicato Strings", "Tuba", "Slide Whistle", "Upbeat Piano", "Xylophone", "Bassoon", "Banjo", "Kazoo", "Woodblock", "Muted Trumpet", "Flexatone", "Accordion"],
        adjectives: ["Quirky", "Bouncy", "Silly", "Lighthearted", "Wacky", "Clumsy", "Slapstick", "Goofy", "Mischievous", "Absurd", "Playful", "Cartoonish"]
    },
    romance: {
        instruments: ["Solo Cello", "Piano", "Warm Strings", "Soft Harp", "Acoustic Guitar", "Oboe", "French Horns", "Rhodes Piano", "Female Vocals", "Violin Solo"],
        adjectives: ["Passionate", "Tender", "Intimate", "Heartfelt", "Loving", "Sentimental", "Dreamy", "Affectionate", "Warm", "Bittersweet", "Yearning", "Devoted"]
    },
    sadness: {
        instruments: ["Lonely Piano", "Weeping Violin", "Rain Sounds", "Minor Pads", "Solo Cello", "Duduk", "Glass Harmonica", "Low Whistle", "Ambient Drone", "Soft Choir"],
        adjectives: ["Melancholic", "Tear-jerking", "Sorrowful", "Empty", "Grieving", "Tragic", "Lonely", "Desolate", "Heartbreaking", "Somber", "Bleak", "Fragile"]
    },
    fantasy: {
        instruments: ["Celesta", "Chimes", "Ethereal Choir", "Harp", "Lute", "Ocarina", "Wind Chimes", "Crystal Bowls", "Violin Harmonics", "Pan Flute"],
        adjectives: ["Magical", "Otherworldly", "Enchanted", "Mystical", "Fairy-tale", "Sparkling", "Mythical", "Wondrous", "Spellbinding", "Ancient", "Dreamlike", "Arcane"]
    },
    inspirational: {
        instruments: ["Building Strings", "Piano Arpeggios", "Epic Drums", "Electric Guitar Swells", "Full Orchestra", "Pop Drums", "Uplifting Synth", "Acoustic Strumming", "Choir Ahhs", "Brass Swells"],
        adjectives: ["Uplifting", "Motivating", "Hopeful", "Rising", "Triumphant", "Determined", "Positive", "Empowering", "Successful", "Bright", "Soaring", "Optimistic"]
    },
    gaming: {
        instruments: ["Chiptune Leads", "Heavy Synths", "Orchestral Hybrid", "Retro SFX", "8-bit Bass", "Saw Waves", "Arpeggiators", "Bitcrushed Drums", "FM Synthesis", "Orchestral Hits"],
        adjectives: ["Immersive", "Competitive", "Digital", "Interactive", "Retro", "Futuristic", "Pixelated", "High-Score", "Level-Up", "Boss-Like", "Cyber", "Glitchy"]
    },
    scifi: {
        instruments: ["Futuristic Synths", "Glitch Effects", "Space Drones", "Theremin", "Granular Pads", "Arpeggiated Bass", "Tech Beats", "Robot Voices", "Modulated Filters", "Laser FX"],
        adjectives: ["High-tech", "Alien", "Space-age", "Cosmic", "Interstellar", "Advanced", "Cybernetic", "Dystopian", "Neon", "Holographic", "Quantum", "Synthetic"]
    },
    epic: {
        instruments: ["Massive Choir", "Thunderous Percussion", "Full Orchestra", "Trailer Hits", "Timpani Rolls", "Brass Fanfare", "Battle Drums", "Huge Sub Hits", "Screaming Solos", "Hybrid Textures"],
        adjectives: ["Colossal", "Legendary", "Monumental", "Cinematic", "Glorious", "Huge", "Powerful", "Earth-shattering", "Biblical", "Heroic", "Grand", "Titanic"]
    },
    mystery: {
        instruments: ["Vibraphone", "Walking Bass", "Muted Trumpet", "Foggy Pads", "Theremin", "Bass Clarinet", "Finger Snaps", "Brush Drums", "Rhodes", "Tremolo Guitar"],
        adjectives: ["Enigmatic", "Puzzling", "Noir", "Secretive", "Investigative", "Shadowy", "Curious", "Unsolved", "Hidden", "Cloaked", "Suspicious", "Foggy"]
    },
    surreal: {
        instruments: ["Reverse Audio", "Granular Synths", "Random Percussion", "Dreamy Vocals", "Tape loops", "Detuned Harpsichord", "Water Sounds", "Echoing Flutes", "Glitchy Piano", "Feedback loops"],
        adjectives: ["Bizarre", "Dreamlike", "Abstract", "Distorted", "Trippy", "Hallucinogenic", "Warped", "Floating", "Unreal", "Subconscious", "Psychedelic", "Melting"]
    },
    ritual: {
        instruments: ["Tribal Drums", "Chanting Monks", "Bone Flutes", "Gongs", "Didgeridoo", "Shakers", "Throat Singing", "Bullroarer", "Log Drums", "Hand Percussion"],
        adjectives: ["Ancient", "Primal", "Ceremonial", "Trancelike", "Spiritual", "Shamanic", "Cultic", "Hypnotic", "Rhythmic", "Sacred", "Earthy", "Raw"]
    },
    industrial: {
        instruments: ["Metallic Hits", "Distorted Bass", "Machinery Sounds", "Power Noise", "Anvil hits", "Drills", "Static", "Siren", "Grinding FX", "Heavy Kick"],
        adjectives: ["Gritty", "Mechanical", "Harsh", "Cold", "Brutal", "Rusty", "Relentless", "Aggressive", "Factory-like", "Dehumanized", "Steel", "Slamming"]
    },
    mythic: {
        instruments: ["Lyre", "Ancient Horns", "Deep Male Choir", "Frame Drums", "Duduk", "Koto", "War Horns", "Finger Cymbals", "Lute", "Epic Strings"],
        adjectives: ["Legendary", "Godlike", "Folklore", "Timeless", "Ancient", "Heroic", "Fabled", "Epic", "Saga-like", "Olympian", "Norse", "Dynastic"]
    },
    minimalist: {
        instruments: ["Repetitive Piano", "Marimba", "Pulse Waves", "Silence", "Glass Harp", "Glockenspiel", "Analog Sequencer", "Clean Electric Guitar", "Violin Pizz", "Sine Waves"],
        adjectives: ["Simple", "Hypnotic", "Sparse", "Clean", "Repetitive", "Focusing", "Pure", "Organic", "Subtle", "Understated", "Calm", "Patterned"]
    },
    glitch: {
        instruments: ["Data Moshing", "Stutter Edits", "Bitcrushed Drums", "Noise Bursts", "Circuit Bending", "CD Skips", "Digital Artifacts", "Square Waves", "Broken Synths", "Feedback"],
        adjectives: ["Broken", "Chaotic", "Digital", "Erratic", "Corrupted", "Fragmented", "Malfunctioning", "Cyber", "Processed", "Destroyed", "Twitching", "Unstable"]
    },
    celestial: {
        instruments: ["Glass Pads", "Shimmer Reverb", "Angel Choir", "Crystal Bowls", "Wind Chimes", "Harp Swells", "E-Bow Guitar", "Synth Drones", "Orchestral Strings", "Tibetan Bowls"],
        adjectives: ["Heavenly", "Floating", "Infinite", "Divine", "Ethereal", "Stellar", "Cosmic", "Weightless", "Serene", "Blissful", "Radiant", "Transcendent"]
    },
    edm: {
        instruments: ['Serum Wavetables', 'Roland TR-808', 'TB-303 Acid', 'Supersaw Stacks', 'Granular Sampler', 'Modular Rack'],
        adjectives: ['Euphoric', 'Pumping', 'Hypnotic', 'Glitchy', 'Radioactive', 'Cybernetic', 'Neon']
    }
};

export const generateSubcategories = (genreId, count) => {
    const data = GENRE_DESCRIPTORS[genreId] || GENRE_DESCRIPTORS.action; // Default to action if unknown
    const results = [];

    // Ensure we cover all moods at least cyclically
    for (let i = 0; i < count; i++) {
        const mood = MOODS[i % MOODS.length];
        const tempo = TEMPOS[i % TEMPOS.length];
        const key = KEYS[i % KEYS.length];
        const instrument = data.instruments[i % data.instruments.length];
        const adjective = data.adjectives[i % data.adjectives.length];

        const title = `${mood} ${adjective} ${genreId.charAt(0).toUpperCase() + genreId.slice(1)}`;

        results.push({
            id: `${genreId}-gen-${i}-${Math.random().toString(36).substr(2, 5)}`,
            title: title,
            moodUseCase: `A ${mood.toLowerCase()} scene defined by ${adjective.toLowerCase()} energy. Suitable for moments requiring ${mood.toLowerCase()} undertones.`,
            tags: [mood, adjective, genreId, "Generated"],
            coreTheory: {
                tempo: tempo,
                rhythm: `Steady ${adjective} pulse`,
                harmony: `${key} exploring ${mood.toLowerCase()} tonalities`,
                melody: `Focused on ${instrument} motifs`,
                orchestration: `${instrument}, ${data.instruments[(i + 1) % data.instruments.length]}, and atmospheric pads`
            },
            variations: [
                {
                    id: `var-1-${i}`,
                    name: "Standard",
                    scales: {
                        primary: key,
                        secondary: "Relative Mode"
                    },
                    chords: {
                        types: "Triads and Seventh Chords",
                        progressions: [
                            "I - IV - V - I",
                            "i - VI - III - VII",
                            "Experimental Modal Shifts"
                        ]
                    },
                    prompt: `Create a ${mood.toLowerCase()} ${genreId} track at ${tempo}. The atmosphere should be ${adjective.toLowerCase()}. Feature a ${instrument} playing the main motif. The harmony should be rooted in ${key}, using ${data.instruments[(i + 1) % data.instruments.length]} for texture. Aim for a ${mood.toLowerCase()} feeling that captures the essence of ${adjective} storytelling.`
                }
            ]
        });
    }
    return results;
};
