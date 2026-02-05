export const adventureSubcategories1 = [
    {
        id: 'epic-mountain-ascent',
        title: 'Epic Mountain Ascent',
        moodUseCase: 'Climbing to the peak of a massive mountain. Struggle turning into triumph.',
        coreTheory: {
            tempo: '100-120 BPM',
            rhythm: 'Heavy steady percussion (hiking), triplets at summit',
            harmony: 'Lydian for height, ascending modulations',
            melody: 'Rising brass lines, soaring french horns',
            orchestration: 'Full Orchestra, Wind/Storm FX, Anvil clanks'
        },
        variations: [
            {
                id: 'summit',
                name: 'Summit Push',
                scales: {
                    primary: 'D Lydian',
                    secondary: 'D Major Pentatonic'
                },
                chords: {
                    types: 'Maj7, Sus4, Add9',
                    progressions: ['D - E/D - D - A', 'Bm - G - D - A', 'Rising chromatically']
                },
                prompt: 'Compose a triumphant Mountain Ascent track at 110 BPM. Use a steady "hiking" rhythm on timpani and deep snares. The harmony should feature the Lydian mode (raised 4th) to represent altitude and majesty. As the track progresses, modulate the key upwards (e.g., C to D to E) to simulate climbing. The climax features a soaring French Horn melody over lush strings, signifying the view from the summit.'
            }
        ]
    },
    {
        id: 'underwater-ruins-discovery',
        title: 'Underwater Ruins Discovery',
        moodUseCase: 'Swimming through an ancient sunken city. Majestic but muffled/aquatic.',
        coreTheory: {
            tempo: '70-90 BPM',
            rhythm: 'Fluid, flowing arpeggios, no sharp transients',
            harmony: 'Modal (Dorian), extended tertian harmony',
            melody: 'Harp glissandos, flute or female choir',
            orchestration: 'Harp, Celesta, Swelling Strings, Bubble FX'
        },
        variations: [
            {
                id: 'atlantis',
                name: 'Atlantis',
                scales: {
                    primary: 'B Dorian',
                    secondary: 'Whole Tone'
                },
                chords: {
                    types: 'Minor 9, Major 7#11',
                    progressions: ['Bm9 - E7/B - Bm', 'Bm - Gmaj7 - A - Bm', 'Whole-tone drifts']
                },
                prompt: 'Create an Underwater Discovery theme at 80 BPM. The texture should be wet and reverberant. Use rolling harp arpeggios and celesta sparkles to mimic light filtering through water. The harmony leans on B Dorian for a mysterious but noble ancient feel. Avoid sharp drums; use swelling cymbal rolls and soft bass pulses instead. A wordless female choir adds an ethereal, siren-like quality to the melody.'
            }
        ]
    },
    {
        id: 'desert-caravan-trek',
        title: 'Desert Caravan Trek',
        moodUseCase: 'Crossing endless sand dunes. Heat, vastness, and exotic endurance.',
        coreTheory: {
            tempo: '100 BPM',
            rhythm: 'Hypnotic, syncopated Middle-Eastern percussion',
            harmony: 'Phrygian Dominant, Double Harmonic Major',
            melody: 'Ornamented Duduk or Ney improvisation',
            orchestration: 'Oud, Darbuka, String drones, Tambourine'
        },
        variations: [
            {
                id: 'dunes',
                name: 'Dunes',
                scales: {
                    primary: 'E Phrygian Dominant',
                    secondary: 'E Double Harmonic major'
                },
                chords: {
                    types: 'Major/Minor shifts over pedal',
                    progressions: ['E - F - E', 'E - Dm - E', 'Am - G - F - E']
                },
                prompt: 'Generate a Desert Caravan track at 100 BPM. Establish a hypnotic groove with Darbuka and frame drums. The primary instrument is an Oud strumming rhythmic chords in E Phrygian Dominant. A Duduk plays a lonely, ornamented melody with quarter-tone bends, evoking the heat and vast emptiness. Keep a constant "drone" note in the bass. The mood is enduring and exotic.'
            }
        ]
    },
    {
        id: 'dense-jungle-expedition',
        title: 'Dense Jungle Expedition',
        moodUseCase: 'Hacking through vines in a rainforest. Alive, humid, and busy.',
        coreTheory: {
            tempo: '110-130 BPM',
            rhythm: 'Polyrhythmic, shakers, woodblocks',
            harmony: 'Chromatic, Whole-Tone segments',
            melody: 'Short flute calls, mimicking birds',
            orchestration: 'Wooden percussion, Flutes, Xylophone, Tribal drums'
        },
        variations: [
            {
                id: 'wild',
                name: 'Wild',
                scales: {
                    primary: 'G Mixolydian b6',
                    secondary: 'Pentatonic'
                },
                chords: {
                    types: 'Dominant 7, Aug',
                    progressions: ['G - F - Eb - D', 'G7 vamp', 'Chromatic descents']
                },
                prompt: 'Compose a Jungle Expedition track at 120 BPM. The percussion should be a thick layer of shakers, guiros, and woodblocks creating a busy "insect" backdrop. Use a wooden flute to play short, bird-like calls rather than a long melody. The harmony should feel slightly ungrounded, perhaps using the Mixolydian b6 scale or Whole Tone runs to suggest the danger and untamed nature of the rainforest.'
            }
        ]
    },
    {
        id: 'pirate-high-seas',
        title: 'Pirate High Seas',
        moodUseCase: 'Sailing over rough waters. Swashbuckling and bold.',
        coreTheory: {
            tempo: '140 BPM (6/8 or 12/8)',
            rhythm: 'Swinging triplets, "Sea Shanty" feel',
            harmony: 'Dorian/Aeolian, robust power chords',
            melody: 'Accordion or Fiddle, catchy anthem',
            orchestration: 'Orchestra + Accordion, Concertina, Heavy Brass'
        },
        variations: [
            {
                id: 'swashbuckler',
                name: 'Swashbuckler',
                scales: {
                    primary: 'D Minor',
                    secondary: 'D Dorian'
                },
                chords: {
                    types: 'Minor, Major flat-VII',
                    progressions: ['Dm - C - Bb - A', 'Dm - C - Dm', 'F - C - Dm - A7']
                },
                prompt: 'Create a Swashbuckling Pirate theme at 140 BPM in 12/8 time (triplet feel). The rhythm should be bouncy and energetic, like a sea shanty. Use an accordion and solo violin to carry the main jaunty melody. The lower brass plays a heavy "oom-pah" rhythm. Include sound effects of waves crashing and ship bells. The harmony cycles between D Minor and C Major, feeling adventurous and rogue-like.'
            }
        ]
    },
    {
        id: 'ancient-temple-puzzle',
        title: 'Ancient Temple Puzzle',
        moodUseCase: 'Solving a mechanism in a forgotten ruin. Cerebral and mysterious.',
        coreTheory: {
            tempo: '60-80 BPM',
            rhythm: 'Clockwork, clicking percussion, precise',
            harmony: 'Diminished, minor add9, sparse',
            melody: 'Fragmented marimba or pizzicato motifs',
            orchestration: 'Marimba, Pizzicato Strings, Stone SFX, Harp'
        },
        variations: [
            {
                id: 'mechanism',
                name: 'Mechanism',
                scales: {
                    primary: 'A Harmonic Minor',
                    secondary: 'A Dorian #4'
                },
                chords: {
                    types: 'Minor 9, Dim 7',
                    progressions: ['Am - E/G# - Am/G - D/F#', 'Am - Bdim - E', 'Static cycling']
                },
                prompt: 'Compose a "Temple Puzzle" track at 70 BPM. Use a prominent Marimba and pizzicato strings playing interlocking, clockwork patterns. The rhythm should feel precise and mechanical, mimicking ancient gears turning. The harmony explores A Harmonic Minor with mysterious suspended chords. Keep the texture open and cerebral, waiting for a solution. Add stone grinding sounds as percussion.'
            }
        ]
    },
    {
        id: 'flying-city-soar',
        title: 'Flying City Soar',
        moodUseCase: 'Flying over a steampunk or magical city in the clouds.',
        coreTheory: {
            tempo: '130 BPM',
            rhythm: 'Driving waltz or soaring 4/4',
            harmony: 'Major, frequent key changes, soaring',
            melody: 'Sweeping string lines, optimistic',
            orchestration: 'Full Orchestra, Wind chimes, Propeller SFX'
        },
        variations: [
            {
                id: 'skies',
                name: 'Skies',
                scales: {
                    primary: 'F Major',
                    secondary: 'F Lydian'
                },
                chords: {
                    types: 'Maj7, Add9, Slash chords',
                    progressions: ['F - Bb/F - C/F - F', 'F - A7 - Dm - Bb', 'Modulation up a step']
                },
                prompt: 'Generate a "Flying City" theme at 130 BPM. The music should feel incredibly airy and optimistic. Use high-pitched string runs and glockenspiel to simulate wind and light. A sweeping French Horn or Cello melody provides the emotional core, playing wide intervals. Use the Lydian mode (F Lydian) for that "taking flight" wondrous feeling. The rhythm is propulsive but light, pushing forward effortlessly.'
            }
        ]
    },
    {
        id: 'escape-collapsing-tomb',
        title: 'Escape Collapsing Tomb',
        moodUseCase: 'The trap is triggered, run for your life! Indiana Jones style.',
        coreTheory: {
            tempo: '160+ BPM',
            rhythm: 'Frantic, running 16th notes',
            harmony: 'Diminished, chromatic sliding',
            melody: 'Short, urgent brass stabs',
            orchestration: 'Orchestral tutti, Percussion hits, Brass'
        },
        variations: [
            {
                id: 'run',
                name: 'Run!',
                scales: {
                    primary: 'Octatonic',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Dim7, Tritone dominant',
                    progressions: ['Chromatically ascending basses', 'Cdim - C#dim - Ddim', 'Stabs']
                },
                prompt: 'Create a frantic "Boulders & Traps" escape theme at 165 BPM. The entire orchestra plays fast, chromatic runs. The brass section plays urgent, dissonant stabs on off-beats. Use the Octatonic scale to create a sense of spiraling danger with no safe tonal center. Heavy percussion hits accent the "traps" going off. The energy is breathless and panicked.'
            }
        ]
    },
    {
        id: 'enchanted-forest-night',
        title: 'Enchanted Forest Night',
        moodUseCase: 'Bioluminescent plants and magical creatures at night. Beautiful but wary.',
        coreTheory: {
            tempo: '60-80 BPM',
            rhythm: 'Free time or gentle sway',
            harmony: 'Minor 7, Dorian, mysterious',
            melody: 'Solo English Horn or Flute, wandering',
            orchestration: 'Celesta, Harp, Woodwinds, Choir pads'
        },
        variations: [
            {
                id: 'bioluminescence',
                name: 'Bioluminescence',
                scales: {
                    primary: 'C# Dorian',
                    secondary: 'C# Aeolian'
                },
                chords: {
                    types: 'Minor 9, Major 7#11',
                    progressions: ['C#m9 - F#add9 - C#m', 'C#m - A - B - C#m', 'Cluster pads']
                },
                prompt: 'Compose a magical night forest theme at 70 BPM. The instrumentation should be delicate: Celesta, Harp, and high-pitched string harmonics. A solo English Horn plays a mournful but beautiful melody in C# Dorian. Use "shimmering" textures like wind chimes or bowed metallophones. The harmony is lush and mysterious, using Minor 9 chords to create depth and shadow.'
            }
        ]
    },
    {
        id: 'wild-west-ride',
        title: 'Wild West Ride',
        moodUseCase: 'Riding horses across the grand canyon. Americana and dust.',
        coreTheory: {
            tempo: '110-130 BPM',
            rhythm: 'Galloping (da-da-dum, da-da-dum)',
            harmony: 'Pentatonic Major, Copland-esque open harmony',
            melody: 'Trumpet or Harmonica, folky',
            orchestration: 'Acoustic Guitar, Strings, Trumpet, Snare'
        },
        variations: [
            {
                id: 'frontier',
                name: 'Frontier',
                scales: {
                    primary: 'Eb Major Pentatonic',
                    secondary: 'Mixolydian'
                },
                chords: {
                    types: 'Major, Sus2, Open 5ths',
                    progressions: ['Eb - Ab - Eb - Bb', 'Eb - Cm - Ab - Bb', 'Open strings']
                },
                prompt: 'Create a Wild West Frontier theme at 120 BPM. Use a classic "galloping" rhythm on snare and woodblocks. An acoustic guitar strums open chords. A solo trumpet plays a noble, wide-interval melody capturing the grandeur of the landscape (Copland style). The harmony relies on Major Pentatonic scales and "open" voicings to simulate the vast horizon.'
            }
        ]
    }
];
