export const romanceSubcategories1 = [
    {
        id: 'epic-reunion',
        title: 'Epic Reunion',
        moodUseCase: 'Running towards each other in the rain. Cinematic and huge.',
        coreTheory: {
            tempo: '70-80 BPM',
            rhythm: 'Driving but emotional 8ths',
            harmony: 'Major, Sus4 builds, Key Change',
            melody: 'Soaring Strings, French Horn counter',
            orchestration: 'Full Hollywood Orchestra, Piano'
        },
        variations: [
            {
                id: 'homecoming',
                name: 'Homecoming',
                scales: {
                    primary: 'Eb Major',
                    secondary: 'Eb Lydian (Bright)'
                },
                chords: {
                    types: 'Add9, Sus4, Slash chords',
                    progressions: ['Eb - Bb/D - Cm7 - Ab', 'Fm7 - Ab/Bb - Eb', 'Modulation up a step']
                },
                prompt: 'Compose an "Epic Reunion" theme at 75 BPM. Start with a solo piano building intensity. The full orchestra swells with lush strings playing a soaring melody in Eb Major. Drums enter with a driving, heartbeat-like rhythm. Use a suspended chord (Absus2) resolving to the Tonic to create a "release" of tension. Lead into a key change for the final climax. Emotional, tear-jerking, and powerful.'
            }
        ]
    },
    {
        id: 'paris-cafe',
        title: 'Paris Cafe',
        moodUseCase: 'Romantic stroll in Europe. Accordion and charm.',
        coreTheory: {
            tempo: '110 BPM (Waltz)',
            rhythm: 'Gymnopedie style or Waltz (3/4)',
            harmony: 'Jazz Waltz, Minor/Major interplay',
            melody: 'Accordion, Violin, Clarinet',
            orchestration: 'Accordion, Upright Bass, Acoustic Guitar'
        },
        variations: [
            {
                id: 'amour',
                name: 'Amour',
                scales: {
                    primary: 'G Major',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Minor 6, Dominant 7b9',
                    progressions: ['G - Am7 - D7 - G', 'Em - B7 - Em', 'G - G#dim - Am7 - D7']
                },
                prompt: 'Create a "Parisian Romance" track in 3/4 waltz time at 110 BPM. The lead instrument is an Accordion playing a charming, strolling melody. An upright bass provides a simple "root-fifth" accompaniment. Use "Manouche" style acoustic guitar strumming. The harmony should change frequently between G Major and E Minor, feeling nostalgic and classy.'
            }
        ]
    },
    {
        id: 'fantasy-prom',
        title: 'Fantasy Prom',
        moodUseCase: 'Dancing in a ball gown. Magical and swirling.',
        coreTheory: {
            tempo: '60 BPM (Slow Waltz)',
            rhythm: 'One-two-three, graceful',
            harmony: 'Lydian, sparkly',
            melody: 'Flute runs, sweeping strings',
            orchestration: 'Harp, Strings, Triangle, Woodwinds'
        },
        variations: [
            {
                id: 'waltz',
                name: 'Starlight Waltz',
                scales: {
                    primary: 'D Major',
                    secondary: 'D Lydian'
                },
                chords: {
                    types: 'Major 9, Lydian #4',
                    progressions: ['D - F#m - G - A', 'Dmaj9 - Gmaj7#11 - D', 'Swirling arpeggios']
                },
                prompt: 'Compose a magical "Fantasy Waltz" at 60 BPM. Use a prominent Harp playing sweeping glissandos and arpeggios. The string section plays a lush, legato melody in 3/4 time. Use the Lydian mode (D Lydian) to give it a fairytale quality. Light percussion (triangle, finger cymbals) adds sparkle. The mood is dreamy and elegant.'
            }
        ]
    },
    {
        id: 'bedroom-rnb',
        title: 'Bedroom R&B',
        moodUseCase: 'Modern intimacy. Sensual and smooth.',
        coreTheory: {
            tempo: '60-70 BPM',
            rhythm: 'Snap track, deep sub kick',
            harmony: 'Minor 9, Major 9, Neo-Soul',
            melody: 'Vocal chops, smooth synth lead',
            orchestration: 'Rhodes, Sub-bass, Drum Machine, Vocals'
        },
        variations: [
            {
                id: 'sensual',
                name: 'Sensual',
                scales: {
                    primary: 'Bb Minor',
                    secondary: 'Bb Dorian'
                },
                chords: {
                    types: 'Minor 9, Major 9',
                    progressions: ['Bbm9 - Ebm9 - F7alt', 'Gbmaj9 - Fm7 - Bbm9', 'Side-chaining']
                },
                prompt: 'Generate a sensuous R&B track at 65 BPM. Use a Fender Rhodes keyboard playing warm, extended chords (Minor 9s). The drum beat is minimal—just a deep kick and a crisp finger snap with heavy reverb. Add a deep sine-wave sub-bass. Pitch-shifted vocal chops provide the melodic hooks. The groove is laid back, sexy, and modern.'
            }
        ]
    },
    {
        id: 'indie-folk-love',
        title: 'Indie Folk Love',
        moodUseCase: 'Road trip with a partner. wholesome and acoustic.',
        coreTheory: {
            tempo: '100 BPM',
            rhythm: 'Train beat, tambourine',
            harmony: 'Open Major chords, Capo sound',
            melody: 'Whistling, "Hey-Ho" vocals, Banjo',
            orchestration: 'Acoustic Guitar, Kick Drum, Handclaps'
        },
        variations: [
            {
                id: 'sunset',
                name: 'Sunset Drive',
                scales: {
                    primary: 'C Major',
                    secondary: 'C Mixolydian'
                },
                chords: {
                    types: 'Major, Add9',
                    progressions: ['C - Fmaj7 - Am - G', 'F - C - G - Am', 'C - C/B - Am - G']
                },
                prompt: 'Compose an upbeat Indie Folk track at 100 BPM. Feature a bright acoustic guitar strumming open chords. A steady "four-on-the-floor" kick drum drives the beat, accompanied by tambourines. Include gang vocals singing "Oohs" and "Aahs" in the background. The melody is simple and happy, perhaps played on a glockenspiel or whistled. Wholesome and organic.'
            }
        ]
    },
    {
        id: 'tragic-lover-death',
        title: 'Tragic Lover Death',
        moodUseCase: 'Holding a dying loved one. Devastating and final.',
        coreTheory: {
            tempo: '50 BPM',
            rhythm: 'Slow, heavy, pauses',
            harmony: 'Minor, slow harmonic rhythm, Plagal cadences',
            melody: 'Solo Cello, breaking up (silence)',
            orchestration: 'Solo Cello, Low Strings, Timpani roll'
        },
        variations: [
            {
                id: 'goodbye',
                name: 'Final Goodbye',
                scales: {
                    primary: 'G Minor',
                    secondary: 'G Natural Minor'
                },
                chords: {
                    types: 'Minor, Minor iv',
                    progressions: ['Gm - Eb - Cm - D7', 'Gm - Cm/G - Gm (Plagal)', 'Silence']
                },
                prompt: 'Create a devastatingly sad track at 50 BPM. A solo cello plays a slow, weeping melody in the high register. The accompaniment is minimal—just low, sustained Double Bass notes. Use silence effectively; let the notes ring out and fade before the next phrase. The harmony ends on an unresolved or weak cadence, signifying the end of life. Dark, intimate, and tearful.'
            }
        ]
    },
    {
        id: 'vintage-hollywood',
        title: 'Vintage Hollywood',
        moodUseCase: 'Golden Age cinema romance. Black and white film.',
        coreTheory: {
            tempo: '70 BPM',
            rhythm: 'Rubato, swooning',
            harmony: 'Lush strings, rapid vibrato, portamento',
            melody: 'High Violin section, very expressive',
            orchestration: 'Large String Section, Harp'
        },
        variations: [
            {
                id: 'golden-age',
                name: 'Golden Age',
                scales: {
                    primary: 'Db Major',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Major 6, Diminished passing',
                    progressions: ['Db6 - Edim7 - Ebm7 - Ab7', 'Db - Gb - Db', 'Swoops']
                },
                prompt: 'Compose a 1940s Hollywood Romance theme. Use a large string section playing with heavy vibrato and "portamento" (sliding between notes). The key is a warm Db Major. The melody is lush and swooning. Include harp glissandos at every chord change. The harmony uses "Major 6th" chords and diminished passing chords for that classic vintage sound.'
            }
        ]
    },
    {
        id: '80s-power-ballad',
        title: '80s Power Ballad',
        moodUseCase: 'Slow dance at prom, 1985. Retro and gated.',
        coreTheory: {
            tempo: '65 BPM',
            rhythm: 'Gated Reverb Snare, steady',
            harmony: 'Major, Synth pads',
            melody: 'Saxophone Solo or Electric Guitar',
            orchestration: 'DX7 Piano, Gated Drums, Saxophone'
        },
        variations: [
            {
                id: 'neon-love',
                name: 'Neon Love',
                scales: {
                    primary: 'F Major',
                    secondary: 'Pentatonic'
                },
                chords: {
                    types: 'Suspended, Power Chords',
                    progressions: ['F - Bb - C - Bb', 'Dm - Bb - C - F', 'Key Change +2']
                },
                prompt: 'Generate an 80s Power Ballad at 65 BPM. The drums must feature a massive snare with "Gated Reverb". Use a Yamaha DX7 electric piano sound for the chords. A cheesy, passionate Saxophone solo plays the main melody. The bass is a steady synth pulse. The chorus should feel huge and anthem-like. Nostalgic and cheesy.'
            }
        ]
    },
    {
        id: 'forbidden-love',
        title: 'Forbidden Love',
        moodUseCase: 'Two people who cannot be together. Tense and longing.',
        coreTheory: {
            tempo: '80 BPM',
            rhythm: 'Unsettled, fluid',
            harmony: 'Minor, deceptive cadences, tension',
            melody: 'Oboe, English Horn, yearning',
            orchestration: 'Woodwinds, Strings, Harp'
        },
        variations: [
            {
                id: 'secret',
                name: 'Secret',
                scales: {
                    primary: 'C# Minor',
                    secondary: 'Harmonic Minor'
                },
                chords: {
                    types: 'Minor maj7, Diminished',
                    progressions: ['C#m - G#7 - A - G#', 'C#m - F#m - G#7', 'Unresolved cadences']
                },
                prompt: 'Compose a "Forbidden Love" theme at 80 BPM. The mood is tense but passionate. Use an English Horn playing a yearning melody in C# Minor. The harmony features "Minor Major 7th" chords to create a feeling of unease and mystery. The strings swell and recede like heavy breathing. The track should never fully resolve to a stable tonic, representing the impossibility of the relationship.'
            }
        ]
    },
    {
        id: 'wedding-march',
        title: 'Wedding March',
        moodUseCase: 'Walking down the aisle. Traditional and ceremonial.',
        coreTheory: {
            tempo: '60-70 BPM',
            rhythm: 'Stately Step (1-2-3-4)',
            harmony: 'Pachelbel styles, Baroque',
            melody: 'String Quartet or Organ',
            orchestration: 'String Quartet, Church Organ, Trumpet'
        },
        variations: [
            {
                id: 'ceremony',
                name: 'Ceremony',
                scales: {
                    primary: 'D Major',
                    secondary: 'D Ionian'
                },
                chords: {
                    types: 'Major, Inversions',
                    progressions: ['D - A - Bm - F#m (Canon)', 'G - D - G - A', 'V7 - I cadences']
                },
                prompt: 'Create a traditional Wedding processional at 65 BPM. Use a String Quartet arrangement (2 Violins, Viola, Cello). The rhythm is Stately and slow. The harmony follows Pachelbel-style sequences (Canon in D vibes). The melody is elegant, poised, and beautiful. A solo trumpet can add a regal touch for the bride\'s entrance. Pure, white usage, and formal.'
            }
        ]
    }
];
