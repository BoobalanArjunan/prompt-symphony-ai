import {
    Music, Film, Mountain, Sun, Radio, Heart, Hexagon, Cloud, Zap, Drum, Mic2, Star,
    Flower2, Layout, Mic, Speaker
} from 'lucide-react';

export const indianGenres = [
    // 🌿 BRANCH 2 — GENRES (TRUE GENRES)
    {
        id: 'indian-classical',
        title: 'Indian Classical',
        icon: Music,
        description: 'The ancient, continuous musical tradition of the Indian subcontinent, rooted in Raga and Tala.',
        subcategories: [
            {
                id: 'hindustani',
                title: 'Hindustani Classical',
                moodUseCase: 'North Indian tradition. Meditative, improvisational, vast.',
                coreTheory: {
                    tempo: 'Slow start (Vilambit) to Fast (Drut)',
                    rhythm: 'Tala system (Teen Taal, Ek Taal)',
                    harmony: 'Drone-based (Tanpura), No chord changes',
                    melody: 'Raga-based (Scale + Rules)',
                    orchestration: 'Sitar, Sarod, Tabla, Bansuri, Vocal'
                },
                variations: [
                    {
                        id: 'dhrupad',
                        name: 'Dhrupad',
                        scales: { primary: 'Raga Bhairav', secondary: 'Pure Diatonic' },
                        chords: { types: 'Drone', progressions: ['Sa - Pa Drone'] },
                        prompt: 'Generate a Dhrupad style track. The atmosphere should be ancient, austere, and deeply spiritual. Use a heavy Tanpura drone in C#. The vocal style is slow, rhythmic, and uses syllables like "Nom Tom". No percussion initially, purely melodic exploration (Alap). Later introduce a Pakhawaj drum with a deep, open resonance.'
                    },
                    {
                        id: 'khayal',
                        name: 'Khayal',
                        scales: { primary: 'Raga Yaman', secondary: 'Lydian Mode' },
                        chords: { types: 'Drone', progressions: ['Sa - Pa Drone'] },
                        prompt: 'Create a Khayal vocal performance in Raga Yaman. The mood is romantic and devotional. Start with a slow, ornate vocal improvisation (Vilambit) accompanied by a Harmonium shadowing the melody. Introduce a Tabla in Teen Taal (16 beats). The composition should be intricate, with fast runs (Taans) towards the end.'
                    },
                    {
                        id: 'thumri',
                        name: 'Thumri',
                        scales: { primary: 'Raga Khamaj', secondary: 'Mixolydian' },
                        chords: { types: 'Drone', progressions: ['Light Harmony'] },
                        prompt: 'Compose a Thumri in Raga Khamaj. The mood is romantic, expressing longing and separation. Use a lighter, more emotive vocal style. Accompaniment includes Sarangi and Tabla in a lilted rhythm (Deepchandi Taal). The melody should be lyrical and expressive.'
                    }
                ]
            },
            {
                id: 'carnatic',
                title: 'Carnatic Classical',
                moodUseCase: 'South Indian tradition. Mathematical, devotional, composition-heavy.',
                coreTheory: {
                    tempo: 'Medium to Fast',
                    rhythm: 'Complex Tala (Adi Tala, Chapu)',
                    harmony: 'Drone-based, Mathematical Resolution',
                    melody: 'Raga-based (Melakarta System)',
                    orchestration: 'Veena, Violin, Mridangam, Ghatam'
                },
                variations: [
                    {
                        id: 'kriti',
                        name: 'Kriti',
                        scales: { primary: 'Raga Sankarabharanam', secondary: 'Ionian' },
                        chords: { types: 'Drone', progressions: ['Sa - Pa'] },
                        prompt: 'Generate a Carnatic Kriti in Raga Sankarabharanam. The track should focus on specific pre-composed lyrics and melody. Use a Violin to shadow the main melody. The rhythm is Adi Tala (8 beats), played on the Mridangam with sharp, intricate strokes. The structure includes Pallavi, Anupallavi, and Charanam.'
                    },
                    {
                        id: 'ragam-tanam-pallavi',
                        name: 'Ragam Tanam Pallavi',
                        scales: { primary: 'Raga Todi', secondary: 'Phrygian' },
                        chords: { types: 'Drone', progressions: ['Drone'] },
                        prompt: 'Create a Ragam-Tanam-Pallavi improvisation. Start with "Ragam" (free-flowing melodic improvisation on Veena). Move to "Tanam" (pulsating, rhythmic melody without drums). Finally "Pallavi", a complex rhythmic line with Mridangam accompaniment, showcasing mathematical precision.'
                    }
                ]
            }
        ]
    },
    {
        id: 'indian-film',
        title: 'Indian Film Music',
        icon: Film,
        description: 'The heartbeat of India. From massive Bollywood orchestras to regional cinema.',
        subcategories: [
            {
                id: 'bollywood',
                title: 'Bollywood',
                moodUseCase: 'Cinematic, grand, romantic, danceable.',
                coreTheory: {
                    tempo: 'Variable (Romantic Ballad to High Energy Dance)',
                    rhythm: 'Dholak loops + Modern Drums',
                    harmony: 'Western String Sections + Indian Melody',
                    melody: 'Catchy hooks, high-pitched female vocals',
                    orchestration: 'Large String Section, Dhol, Synthesizers'
                },
                variations: [
                    {
                        id: 'romantic-ballad',
                        name: 'Romantic Ballad',
                        scales: { primary: 'Major / Bilawal', secondary: 'Minor / Asavari' },
                        chords: { types: 'Maj7, Min7', progressions: ['I - vi - IV - V'] },
                        prompt: 'Compose a romantic Bollywood ballad. 90 BPM. Use a grand string orchestra and acoustic guitar. The vocals should be a duet (male and female) singing a soaring, emotional melody. Include a flute interlude. The vibe is love, longing, and epic romance.'
                    },
                    {
                        id: 'item-song',
                        name: 'Dance / Item Song',
                        scales: { primary: 'Phrygian / Bhairavi', secondary: 'Harmonic Minor' },
                        chords: { types: 'Power Chords', progressions: ['i - VII - VI - V'] },
                        prompt: 'Create a high-energy Bollywood dance track (Item Song). 140 BPM. Use a driving Dholak rhythm layered with electronic kick drums. The melody should be catchy, somewhat varying, and festive. Include vocal shouts and aggressive synth bass lines.'
                    }
                ]
            },
            {
                id: 'regional-film',
                title: 'Tollywood / Kollywood',
                moodUseCase: 'High energy, percussion-heavy, mass appeal.',
                coreTheory: {
                    tempo: 'Fast (140+ BPM)',
                    rhythm: 'Kuthu Beats, Tapang',
                    harmony: 'Simple, energetic',
                    melody: 'Folk-influenced',
                    orchestration: 'Nadaswaram, Thavil, Distortion Guitars'
                },
                variations: [
                    {
                        id: 'dappankuthu',
                        name: 'Dappankuthu',
                        scales: { primary: 'Major', secondary: 'Mixolydian' },
                        chords: { types: 'Power Chords', progressions: ['I - IV - V'] },
                        prompt: 'Generate a high-energy Dappankuthu track (South Indian Folk Dance). 150 BPM. The core is the Thavil and Parai drum rhythm—loud, raw, and infectious. Use a Nadaswaram (loud reed instrument) for the main riff. Include whistles and vocal chants. Pure energy.'
                    }
                ]
            }
        ]
    },
    {
        id: 'indian-folk',
        title: 'Indian Folk',
        icon: Mountain,
        description: 'Raw, earthy, and rhythmic music from the heartland.',
        subcategories: [
            {
                id: 'north-folk',
                title: 'North Indian Folk',
                moodUseCase: 'Festive, harvest, storytelling.',
                coreTheory: {
                    tempo: 'Upbeat',
                    rhythm: 'Dhol, Dholak (Keherwa)',
                    harmony: 'Drone-based',
                    melody: 'Simple, repetitive, high range',
                    orchestration: 'Tumbi, Harmonium, Dhol'
                },
                variations: [
                    {
                        id: 'bhangra',
                        name: 'Bhangra',
                        scales: { primary: 'Major', secondary: 'Mixolydian' },
                        chords: { types: 'I - V', progressions: ['Basic Folk'] },
                        prompt: 'Create a festive Bhangra track. 140 BPM. The Dhol drum beat is essential (Chaal rhythm). Use a Tumbi (one-string instrument) playing a repetitive high-pitched riff. Vocals should be loud and energetic with "Hoi Hoi" shouts. Celebratory and energetic.'
                    }
                ]
            },
            {
                id: 'south-folk',
                title: 'South Indian Folk',
                moodUseCase: 'Tribal, ritualistic, raw.',
                coreTheory: {
                    tempo: 'Driving',
                    rhythm: 'Parai, Urumi',
                    harmony: 'Drone',
                    melody: 'Limited range, chant-like',
                    orchestration: 'Urumi melam, Parai'
                },
                variations: [
                    {
                        id: 'urumi-melam',
                        name: 'Urumi Melam',
                        scales: { primary: 'Minor', secondary: 'Phrygian' },
                        chords: { types: 'None', progressions: ['Rhythmic'] },
                        prompt: 'Generate a raw South Indian Urumi Melam track. Focus on the Urumi drum (friction drum) which makes a distinctive "wub" sound. Layer with fast Parai frame drums. The mood is trance-inducing and intense. Minimal melody, maximum rhythm.'
                    }
                ]
            }
        ]
    },
    {
        id: 'devotional',
        title: 'Devotional / Spiritual',
        icon: Sun,
        description: 'Music for the soul. Sufi, Bhakti, and Vedic traditions.',
        subcategories: [
            {
                id: 'hindu-devotional',
                title: 'Hindu Devotional',
                moodUseCase: 'Prayer, temple atmosphere, surrender.',
                coreTheory: {
                    tempo: 'Medium',
                    rhythm: 'Manjira (Cymbals), Dholak',
                    harmony: 'Simple, Major/Minor',
                    melody: 'Chant-based, Call and Response',
                    orchestration: 'Harmonium, Tabla, Bells'
                },
                variations: [
                    {
                        id: 'bhajan',
                        name: 'Bhajan',
                        scales: { primary: 'Bilawal / Major', secondary: 'Kalyan' },
                        chords: { types: 'Major', progressions: ['I - IV - V'] },
                        prompt: 'Compose a devotional Bhajan. 100 BPM. Use a Harmonium, Tabla, and Manjira (hand cymbals). The structure should be a lead singer followed by a chorus response. The melody is simple, repetitive, and uplifting. The atmosphere is distinctively spiritual and community-focused.'
                    },
                    {
                        id: 'kirtan',
                        name: 'Kirtan / Mantra',
                        scales: { primary: 'Major', secondary: 'Pentatonic' },
                        chords: { types: 'Simple', progressions: ['I - V'] },
                        prompt: 'Create a Kirtan track calling the name "Krishna". It starts slow and meditative with just Harmonium and vocals. Gradually speed up the tempo (drut) as the fervor increases, adding Tabla and handclaps. The end should be ecstatic and fast.'
                    }
                ]
            },
            {
                id: 'sufi',
                title: 'Sufi / Qawwali',
                moodUseCase: 'Mystical, trance, divine love.',
                coreTheory: {
                    tempo: 'Accelerating',
                    rhythm: 'Keherwa (Clap heavy)',
                    harmony: 'Harmonium Drone',
                    melody: 'High pitched, improvisational',
                    orchestration: 'Table, Dholak, Handclaps'
                },
                variations: [
                    {
                        id: 'qawwali',
                        name: 'Qawwali',
                        scales: { primary: 'Phrygian', secondary: 'Dorian' },
                        chords: { types: 'Drone', progressions: ['None'] },
                        prompt: 'Generate a Sufi Qawwali track. Start with a soulful Alap by the lead singer. Then introduce a rhythmic groove with Dholak and prominent, synchronized handclaps. The lyrics should be about divine love. The track builds in intensity and energy, reaching a trance-like state.'
                    }
                ]
            }
        ]
    },
    {
        id: 'indian-fusion',
        title: 'Contemporary / Fusion',
        icon: Radio,
        description: 'Modern India. Pop, Electronic, and Rock collisions.',
        subcategories: [
            {
                id: 'indi-pop',
                title: 'Indipop / Fusion',
                moodUseCase: 'Radio usage, nostalgia, easy listening.',
                coreTheory: {
                    tempo: '90-120 BPM',
                    rhythm: 'Pop beats + Tabla',
                    harmony: 'Western Pop',
                    melody: 'Indian inflection',
                    orchestration: 'Synths, Guitars, Indian Percussion'
                },
                variations: [
                    {
                        id: 'fusion-soft',
                        name: 'Soft Fusion',
                        scales: { primary: 'Major', secondary: 'Pentatonic' },
                        chords: { types: 'Pop Chords', progressions: ['ii - V - I'] },
                        prompt: 'Compose a 90s style Indipop track. 95 BPM. Blend Western soft-rock instrumentation (drums, bass, guitar) with an Indian Flute (Bansuri) solo. The vocals should be melodic and pop-styled but with Indian ornamental inputs (Harkat).'
                    }
                ]
            }
        ]
    },

    // 🌿 BRANCH 4 — ADVANCED STYLES (PROMPT-BASED)
    {
        id: 'cinematic-indian',
        title: 'Cinematic Indian',
        icon: Film,
        description: 'Epic scores blending Hollywood orchestration with Indian soul.',
        subcategories: [
            {
                id: 'epic-orchestral',
                title: 'Epic Indian Orchestral',
                moodUseCase: 'War, grandeur, history, Bahubali style.',
                coreTheory: {
                    tempo: 'Variable',
                    rhythm: 'Orchestral Percussion + Dhol',
                    harmony: 'Cinematic Minor',
                    melody: 'Brass + Chorus',
                    orchestration: 'Full Symphony, Sitar, Dhol'
                },
                variations: [
                    {
                        id: 'royal-palace',
                        name: 'Royal Palace Theme',
                        scales: { primary: 'Marwa', secondary: 'Lydian' },
                        chords: { types: 'Maj7 #11', progressions: ['Cinematic'] },
                        prompt: 'Compose a Royal Palace theme. Use a grand symphony orchestra. The melody should be played by a Shehnai or large string section, evoking grandeur and history. Use wide, majestic chords. Suitable for an entry scene of a King in a historical epic.'
                    }
                ]
            },
            {
                id: 'dark-thriller',
                title: 'Indian Thriller',
                moodUseCase: 'Mystery, suspense, ancient secrets.',
                coreTheory: {
                    tempo: 'Slow, tense',
                    rhythm: 'Heartbeat, Tabla rolls',
                    harmony: 'Dissonant, Chromatic',
                    melody: 'Low octave Sitar',
                    orchestration: 'Strings tremolo, Tabla'
                },
                variations: [
                    {
                        id: 'mythological-dark',
                        name: 'Mythological Cinematics',
                        scales: { primary: 'Bhairav', secondary: 'Chromatic' },
                        chords: { types: 'Diminished', progressions: ['Tension'] },
                        prompt: 'Create a dark, suspenseful score for an Indian mythological thriller. Use deep, ominous throat singing and low strings. A solo Cello plays a Raga-based melody. In the background, use distant, reverberant Tabla rolls to create tension.'
                    }
                ]
            }
        ]
    },
    {
        id: 'indian-spiritual-adv',
        title: 'Spiritual / Meditative',
        icon: Flower2, // Lotus
        description: 'Deep healing, chakra frequencies, and temple ambiance.',
        subcategories: [
            {
                id: 'meditation-raga',
                title: 'Deep Meditation Raga',
                moodUseCase: 'Yoga, sleep, deep relaxation.',
                coreTheory: {
                    tempo: 'Very Slow / Free',
                    rhythm: 'None / Breath',
                    harmony: 'Drone',
                    melody: 'Slow Alap',
                    orchestration: 'Tanpura, Bansuri'
                },
                variations: [
                    {
                        id: 'chakra-healing',
                        name: 'Chakra Healing',
                        scales: { primary: 'Major', secondary: 'Specific Frequencies' },
                        chords: { types: 'Drone', progressions: ['None'] },
                        prompt: 'Generate continuous Chakra Healing music. Based on the Root Chakra (C Note). Use a constant, warm drone. Overlay very slow, breathing pads and a distant Bansuri flute playing long notes. No rhythm. Pure vibration.'
                    },
                    {
                        id: 'temple-ambient',
                        name: 'Temple Ambient',
                        scales: { primary: 'Bhairavi', secondary: 'Major' },
                        chords: { types: 'Drone', progressions: ['None'] },
                        prompt: 'Create a Temple Ambient soundscape. Include the sounds of distant temple bells, chanting monks, and birds. A soft Sitar plays a morning Raga (Bhairav) in the background. Peaceful, divine, and spacious.'
                    }
                ]
            }
        ]
    },
    {
        id: 'indian-experimental',
        title: 'Experimental / Modern',
        icon: Hexagon,
        description: 'Pushing boundaries. Raga fusion, Microtonal, ai-inspired.',
        subcategories: [
            {
                id: 'raga-fusion',
                title: 'Raga Fusion',
                moodUseCase: 'Jazz clubs, intellectual listening.',
                coreTheory: {
                    tempo: 'Complex',
                    rhythm: 'Odd time signatures (7/8, 5/4)',
                    harmony: 'Jazz Harmony',
                    melody: 'Raga improvisation',
                    orchestration: 'Saxophone, Guitar, Tabla'
                },
                variations: [
                    {
                        id: 'microtonal-jazz',
                        name: 'Microtonal Jazz',
                        scales: { primary: 'Blues + Raga', secondary: 'Chromatic' },
                        chords: { types: 'Altered Dominants', progressions: ['ii-V-I'] },
                        prompt: 'Compose a Raga Jazz Fusion track. Use a Saxophone playing a Raga scale with microtonal bends, over a Jazz drum kit and Upright Bass. The Piano comps complex jazz chords. The rhythm should be in 7/4 time signature (Rupak Taal adaptation).'
                    }
                ]
            }
        ]
    },
    {
        id: 'indian-rhythm',
        title: 'Rhythm Focused',
        icon: Drum,
        description: 'Percussion-only masterpieces. The art of Konnakol and Tabla.',
        subcategories: [
            {
                id: 'tabla-solo',
                title: 'Tabla / Percussion',
                moodUseCase: 'High energy, rhythmic complexity.',
                coreTheory: {
                    tempo: 'Fast',
                    rhythm: 'Solo performance',
                    harmony: 'None',
                    melody: 'Lehra (Timekeeping)',
                    orchestration: 'Tabla, Mridangam, Sarangi loop'
                },
                variations: [
                    {
                        id: 'tabla-tech',
                        name: 'Tabla Tech',
                        scales: { primary: 'Rhythm', secondary: 'None' },
                        chords: { types: 'None', progressions: ['None'] },
                        prompt: 'Generate a Tabla Tech track. It focuses purely on high-speed Tabla compositions (Kayda/Rela). Underneath, put a deep, electronic sub-bass kick to give it a modern feel. No melody, just intricate, math-based percussion grooves.'
                    }
                ]
            }
        ]
    }
];
