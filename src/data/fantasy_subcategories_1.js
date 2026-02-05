export const fantasySubcategories1 = [
    {
        id: 'elven-citadel',
        title: 'Elven Citadel',
        moodUseCase: 'Ancient, elegant high-fantasy city. Divine and beautiful.',
        coreTheory: {
            tempo: '80-100 BPM',
            rhythm: 'Flowing arpeggios, no heavy beats',
            harmony: 'Lydian, Major 7ths, lush',
            melody: 'Harp, Flute, Soprano Voice',
            orchestration: 'Harp, Choir, Strings, Woodwinds'
        },
        variations: [
            {
                id: 'rivendell',
                name: 'High Elves',
                scales: {
                    primary: 'A Lydian',
                    secondary: 'E Major'
                },
                chords: {
                    types: 'Maj9, Add9, Slash Chords',
                    progressions: ['A - B/A - E/G# - A', 'C#m - F#m - B7', 'Harp glisses']
                },
                prompt: 'Compose an ethereal "High Elf" theme at 90 BPM. The music should be elegant and ancient. Use a harp playing continuous, flowing arpeggios in A Lydian. A solo flute and a soprano singer (singing "oohs") trade phrases of a soaring melody. The string section provides a warm, lush background. Absolutely no heavy percussion—maybe just a wind chime. Magical and divine.'
            }
        ]
    },
    {
        id: 'dwarven-forge',
        title: 'Dwarven Forge',
        moodUseCase: 'Underground industry, fire, and craftsmanship. Heavy and rhythmic.',
        coreTheory: {
            tempo: '90-110 BPM',
            rhythm: 'Heavy anvil hits, 4/4 or 5/4',
            harmony: 'Minor, Open 5ths, modal',
            melody: 'Deep Male Choir, Low Brass',
            orchestration: 'Anvils, Hammers, Tuba, Male Choir'
        },
        variations: [
            {
                id: 'iron-hall',
                name: 'Iron Hall',
                scales: {
                    primary: 'D Dorian (#4 sometimes)',
                    secondary: 'D Minor'
                },
                chords: {
                    types: 'Power Chords',
                    progressions: ['Dm - C - Dm', 'Dm - G/B - Dm', 'Chromatic descent']
                },
                prompt: 'Create a "Dwarven Forge" track at 100 BPM. The percussion is the most important element: use the sound of anvils and hammers hitting metal as the main beat. A deep male choir chants a rhythmic, guttural song. The low brass plays a sturdy, simple melody in D Minor. The feeling is industrious, heavy, and hot.'
            }
        ]
    },
    {
        id: 'dark-lord-rise',
        title: 'Dark Lord Rise',
        moodUseCase: 'The ultimate evil gathering power. Terrifying and massive.',
        coreTheory: {
            tempo: 'Slow March (60-70 BPM)',
            rhythm: 'Massive downbeats, triplets',
            harmony: 'Minor, Chromatic, Diminished',
            melody: 'Brass/Choir unison, angular',
            orchestration: 'Full Orchestra, Massive Percussion, Choir'
        },
        variations: [
            {
                id: 'dark-tower',
                name: 'Dark Tower',
                scales: {
                    primary: 'C Minor (Harmonic)',
                    secondary: 'Octatonic'
                },
                chords: {
                    types: 'Minor, Diminished, Aug',
                    progressions: ['Cm - Ab - G', 'Cm - F#dim - G', 'Cluster stabs']
                },
                prompt: 'Compose a "Dark Lord" theme at 65 BPM. It should sound massive and terrifying. Use the full orchestra and choir at fortissimo dynamics. The melody is angular and chromatic, played by the brass. Use massive percussion hits (taiko/timpani) to punctuate the rhythm. The harmony uses the Harmonic Minor scale with diminished passing chords. Epic evil.'
            }
        ]
    },
    {
        id: 'flying-mount',
        title: 'Flying Mount',
        moodUseCase: 'Riding a dragon or griffon. Freedom and speed.',
        coreTheory: {
            tempo: '130+ BPM',
            rhythm: 'Galloping 6/8 or driving 4/4',
            harmony: 'Major, Mixolydian, soaring',
            melody: 'French Horns, Violins, expansive',
            orchestration: 'Full Orchestra, sweeping'
        },
        variations: [
            {
                id: 'soaring',
                name: 'Soaring',
                scales: {
                    primary: 'F Major',
                    secondary: 'F Mixolydian'
                },
                chords: {
                    types: 'Major, Sus4',
                    progressions: ['F - Bb - C - F', 'Dm - Bb - C - F', 'Ab - Bb - C (Epic lift)']
                },
                prompt: 'Generate an exhilarating "Dragon Flight" track at 135 BPM. The rhythm should be a driving 6/8 feel. The strings play fast, sweeping runs. The French Horns play a heroic, soaring melody. Use shifts to flat-major keys (like moving from F to Ab) to create a sense of lifting and altitude. The mood is adventurous, fast, and free.'
            }
        ]
    },
    {
        id: 'avern-tavern',
        title: 'Tavern Brawl',
        moodUseCase: 'Rowdy drinking song in an RPG inn. Fun and folk.',
        coreTheory: {
            tempo: '120-140 BPM',
            rhythm: 'Stomp-clap, jig (6/8)',
            harmony: 'Dorian/Myxolydian folk',
            melody: 'Fiddle, Flute, Lute',
            orchestration: 'Lute/Guitar, Fiddle, Hand Drums, Crowd'
        },
        variations: [
            {
                id: 'innkeeper',
                name: 'The Innkeeper',
                scales: {
                    primary: 'G Key (Dorian/Mixolydian)',
                    secondary: 'Pentatonic'
                },
                chords: {
                    types: 'Triads',
                    progressions: ['Am - G - F - G', 'Dm - C - G - Am', 'I-VII-IV']
                },
                prompt: 'Compose a Medieval Tavern song at 130 BPM. Use a stomp-clap rhythm appropriate for a rowdy crowd. Instruments include a lute (or acoustic guitar) strumming vigorously, a tin whistle, and a fiddle playing a fast jig. Include the sound of people cheering and clinking glasses. The melody is catchy, repetitive, and danceable in a folk style.'
            }
        ]
    },
    {
        id: 'haunted-ruins',
        title: 'Haunted Ruins',
        moodUseCase: 'Exploring a cursed dungeon. Eerie and quiet.',
        coreTheory: {
            tempo: 'Free / Slow',
            rhythm: 'Sporadic, skittering',
            harmony: 'Atonal, Tritones',
            melody: 'Solo Violin (Harmonics), FX',
            orchestration: 'Violin, Waterphone, Ambient winds'
        },
        variations: [
            {
                id: 'cursed',
                name: 'Cursed',
                scales: {
                    primary: 'Locrian',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Diminished',
                    progressions: ['Tritone movement', 'Static dissonance']
                },
                prompt: 'Create a creepy "Dungeon Ambience" track. No steady beat. Use the sound of a Waterphone or dry ice on metal to create screeching, ghostly textures. A solo violin plays high, scratchy harmonics (sul ponticello). Occasional deep impact booms reverberate in the distance. The harmony is non-existent, focusing on dissonance and texture. Scary and cold.'
            }
        ]
    },
    {
        id: 'fairy-fountain',
        title: 'Fairy Fountain',
        moodUseCase: 'Health restoration, safe haven. Magical and light.',
        coreTheory: {
            tempo: '80 BPM',
            rhythm: 'Flowing arpeggios (16th notes)',
            harmony: 'Major, extended chords',
            melody: 'Harp, Celeste in upper register',
            orchestration: 'Harp, Celeste, Synth Pad'
        },
        variations: [
            {
                id: 'healing',
                name: 'Healing Waters',
                scales: {
                    primary: 'Gb Major',
                    secondary: 'Pentatonic'
                },
                chords: {
                    types: 'Maj7, Maj9, 13ths',
                    progressions: ['Gbmaj7 - Cbmaj7', 'Circle of 5ths (descending)', 'Ethereal']
                },
                prompt: 'Compose a "Fairy Fountain" theme at 80 BPM. The core element is a harp playing continuous, cascading arpeggios up and down the scale. A celeste plays a simple, bell-like melody. Use rich, warm synth pads to fill out the sound. The harmony should be strictly Major and very comforting, creating a sense of safety and healing.'
            }
        ]
    },
    {
        id: 'battle-preparations',
        title: 'Battle Preparations',
        moodUseCase: 'Sharpening swords, armoring up. Tense determination.',
        coreTheory: {
            tempo: '90 BPM',
            rhythm: 'Steady, marching snare rolling',
            harmony: 'Minor, building',
            melody: 'Low Strings, rising',
            orchestration: 'Snare Drum, Strings, Brass swells'
        },
        variations: [
            {
                id: 'gathering-storm',
                name: 'Gathering Storm',
                scales: {
                    primary: 'D Minor',
                    secondary: 'D Dorian'
                },
                chords: {
                    types: 'Minor, Sus4',
                    progressions: ['Dm - Bb - C - Dm', 'Dm pedal point', 'Gradual crescendo']
                },
                prompt: 'Create a "Battle Prep" track at 90 BPM. Start with a lonely military snare drum playing a steady, rolling march rhythm. Gradually introduce the cellos and basses playing a driving ostinato. Then, add the French Horns. The music should essentially be one long crescendo/build-up. It feels determined, serious, and inevitable.'
            }
        ]
    },
    {
        id: 'desert-kingdom',
        title: 'Desert Kingdom',
        moodUseCase: 'Vast sands, ancient pyramids. Exotic and hot.',
        coreTheory: {
            tempo: '100 BPM',
            rhythm: 'Syncopated hand percussion',
            harmony: 'Phrygian Dominant (Hijaz)',
            melody: 'Oud, Ney Flute, Violin',
            orchestration: 'Oud, Doumbek, Strings'
        },
        variations: [
            {
                id: 'sands',
                name: 'Sands of Time',
                scales: {
                    primary: 'E Phrygian Dominant',
                    secondary: 'Double Harmonic'
                },
                chords: {
                    types: 'Major chords in Phrygian context',
                    progressions: ['E - F - E', 'E - Dm - E', 'Drone on E']
                },
                prompt: 'Compose a "Desert Fantasy" track at 100 BPM. Use the Phrygian Dominant scale (Exotic scale) for the melody. The lead instrument is an Oud or a Ney Flute. Percussion consists of hand drums like Doumbeks and frame drums playing complex, syncopated rhythms. The string section plays sweeping, monophonic lines with ornaments/trills. The atmosphere is hot, ancient, and mysterious.'
            }
        ]
    },
    {
        id: 'wizard-tower',
        title: 'Wizard Tower',
        moodUseCase: 'Academic magic, libraries, spell research. Curious.',
        coreTheory: {
            tempo: '110 BPM',
            rhythm: 'Clockwork, ticking',
            harmony: 'Sequences, chromaticism (Harry Potter style)',
            melody: 'Celeste, Pizzicato strings',
            orchestration: 'Celeste, Woodwinds, Pizzicato'
        },
        variations: [
            {
                id: 'arcane',
                name: 'Arcane Study',
                scales: {
                    primary: 'E Minor',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Minor, Diminished',
                    progressions: ['Em - C - Am - B7', 'Chromatic sidestepping', 'Wandering']
                },
                prompt: 'Generate a "Wizard\'s Study" theme at 110 BPM. Use a pizzicato string section and woodblocks to create a ticking, clockwork rhythm. A Celeste plays a mysterious, chromatic melody that sounds inquisitive and magical. The harmony should shift unexpectedly, suggesting a complex magical formula. Whimsical but intelligent.'
            }
        ]
    }
];
