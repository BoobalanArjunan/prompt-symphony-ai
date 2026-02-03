export const actionSubcategories = [
    {
        id: 'high-intensity-chase',
        title: 'High Intensity Chase',
        moodUseCase: 'A fast-paced pursuit where the protagonist is fleeing or hunting. convey urgency and relentless momentum.',
        coreTheory: {
            tempo: '140-170 BPM',
            rhythm: 'Driving 16th note ostinatos, odd meters (7/8)',
            harmony: 'Minor, chromatic mediants, tritone substitution',
            melody: 'Fragmented motifs, fast spiccato runs',
            orchestration: 'Hybrid: Heavy percussion, distorted synths, brass stabs'
        },
        variations: [
            {
                id: 'standard',
                name: 'Standard',
                scales: {
                    primary: 'E Phrygian',
                    secondary: 'E Diminished'
                },
                chords: {
                    types: 'Minor triads with b2, Power chords',
                    progressions: ['Em - F - Em - Db', 'Em - Bb - F - Em', 'Em - Eb - D - C#dim']
                },
                prompt: 'Create a High-Intensity Chase track at 150 BPM. Use driving 16th note string ostinatos and heavy hybrid percussion (taikos, kick). The harmony should be in E Phrygian with frequent tritone substitutions for tension. Add aggressive brass stabs on off-beats. The melody should be fragmented and urgent. Include distorted synth bass layers for modern impact.'
            }
        ]
    },
    {
        id: 'rooftop-parkour-run',
        title: 'Rooftop Parkour Run',
        moodUseCase: 'Agile, fluid movement across urban heights. Danger mixed with exhilaration.',
        coreTheory: {
            tempo: '160 BPM',
            rhythm: 'Breakbeat or D&B influence, syncopated',
            harmony: 'Modal mixture, extended chords (m9, m11)',
            melody: 'Rising, sweeping lines matching jumps',
            orchestration: 'Electronic beats, soaring strings, synth leads'
        },
        variations: [
            {
                id: 'fluid',
                name: 'Fluid',
                scales: {
                    primary: 'A Dorian',
                    secondary: 'A Minor Pentatonic'
                },
                chords: {
                    types: 'Minor 7ths, Suspended 4ths',
                    progressions: ['Am7 - G - Fmaj7 - G', 'Am - C - D - F', 'Dm9 - Am - Em - F']
                },
                prompt: 'Generate a Rooftop Parkour track at 160 BPM with a Drum & Bass rhythm. Use atmospheric pads and soaring string lines to represent height and wind. The harmony should focus on A Dorian for a cool, fluid feel. Feature a synthesizer lead playing rising arpeggios that mimic the physical jumps. Keep the percussion typically breakbeat-style with a heavy focus on the snare.'
            }
        ]
    },
    {
        id: 'hand-to-hand-combat',
        title: 'Hand-to-Hand Combat',
        moodUseCase: 'Close quarters fighting. Visceral, physical, and punchy.',
        coreTheory: {
            tempo: '130-150 BPM',
            rhythm: 'Heavy downbeats, stop-start accents',
            harmony: 'Static bass peals, dissonant clusters',
            melody: 'Rhythmic chanting or percussive hits, no long lines',
            orchestration: 'Dry percussion, impacts, distorted bass, grating strings'
        },
        variations: [
            {
                id: 'gritty',
                name: 'Gritty',
                scales: {
                    primary: 'C Locrian',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Cluster chords, Tritones',
                    progressions: ['C5 (Pedal) - Gb5 - C5', 'Clusters on strong beats', 'Chromatically descending power chords']
                },
                prompt: 'Compose a gritty Hand-to-Hand Combat track at 135 BPM. Focus on "impact" sounds—heavy kicks and distorted snares. Use a static C Locrian bass line that pulses aggressively. Avoid melodic lines; instead, use orchestral stabs and metallic sound design to accent punches and kicks. The atmosphere should be dry, raw, and violent, with sudden silences for dramatic effect.'
            }
        ]
    },
    {
        id: 'sword-duel-showdown',
        title: 'Sword Duel Showdown',
        moodUseCase: 'A focused, disciplined fight between skilled warriors. Elegant but deadly.',
        coreTheory: {
            tempo: '140 BPM',
            rhythm: '3/4 or 6/8 waltz-like precise attacks',
            harmony: 'Harmonic Minor, Neapolitan chords',
            melody: 'Virtuosic solo violin or cello runs',
            orchestration: 'Strings, timpani, metallic percussion (swords)'
        },
        variations: [
            {
                id: 'duel',
                name: 'Duel',
                scales: {
                    primary: 'G Harmonic Minor',
                    secondary: 'G Hungarian Minor'
                },
                chords: {
                    types: 'Diminished 7ths, Minor i - V7',
                    progressions: ['Gm - D7 - Eb - D7', 'Cm - Gm - Aø7 - D7', 'Gm - F#dim - Gm']
                },
                prompt: 'Create a Sword Duel theme at 140 BPM in 6/8 time. The rhythm should feel like a deadly dance. distinct solo violin playing rapid, virtuosic runs relates to the swordplay. Use G Harmonic Minor for a classical, serious tone. The percussion should be sharp—clacking woodblocks or metallic hits. Use strong V7 (D7) chords to create resolution and tension typical of a duel to the death.'
            }
        ]
    },
    {
        id: 'massive-battlefield-clash',
        title: 'Massive Battlefield Clash',
        moodUseCase: 'Armies colliding. Chaos, scale, and noise.',
        coreTheory: {
            tempo: '110-130 BPM',
            rhythm: 'Heavy War Drums (Taiko), triplets',
            harmony: 'Simple minor triads, power chords',
            melody: 'Low Brass fanfares, Choir shouting',
            orchestration: 'Full Orchestra, Choir, Heavy Percussion'
        },
        variations: [
            {
                id: 'epic',
                name: 'Epic',
                scales: {
                    primary: 'C Minor',
                    secondary: 'C Phrygian Dominant'
                },
                chords: {
                    types: 'Minor, Major flat-VI, Major flat-VII',
                    progressions: ['Cm - Ab - Bb - Cm', 'Cm - G - Cm - Fm', 'Cm - Ab - G7 - Cm']
                },
                prompt: 'Generate a Massive Battlefield track at 120 BPM. Use a huge choir chanting aggressive staccato syllables. The percussion is the focus: massive Taiko ensembles playing triplets. Low brass (tubas, trombones) play a menacing, heavy motif in C Minor. The harmony should shift between Cm and Ab for a sense of scale. Include anvil hits and metallic clashes to simulate armor and weapons.'
            }
        ]
    },
    {
        id: 'boss-fight-phase-one',
        title: 'Boss Fight Phase One',
        moodUseCase: 'The antagonist reveals themselves. Intimidating and controlled.',
        coreTheory: {
            tempo: '130 BPM',
            rhythm: 'Steady, plodding, unstoppable',
            harmony: 'Diminished, Chromatic descent',
            melody: 'Recurring leitmotif, lower register',
            orchestration: 'Low strings, brass swells, timpani'
        },
        variations: [
            {
                id: 'intimidating',
                name: 'Intimidating',
                scales: {
                    primary: 'D Phrygian',
                    secondary: 'Octatonic'
                },
                chords: {
                    types: 'Suspended, Tritone-based',
                    progressions: ['D5 - Eb5 - D5', 'D - G#/D - D - F/D', 'Dm - C#dim - Dm']
                },
                prompt: 'Compose a Boss Fight Phase One track at 130 BPM. The music should feel heavy and confident, representing a powerful foe. Use a repeating, low D Phrygian bass riff. Brass instruments play a slow, rising theme that implies impending doom. Keep the drums steady and marching. Orchestral swells and suspended chords create a "waiting to strike" atmosphere.'
            }
        ]
    },
    {
        id: 'boss-fight-final-phase',
        title: 'Boss Fight Final Phase',
        moodUseCase: 'The boss is desperate and unleashes full power. Chaotic and fast.',
        coreTheory: {
            tempo: '170+ BPM',
            rhythm: 'Double-time, chaotic fills',
            harmony: 'Atonal leanings, rapid key changes',
            melody: 'Screaming high register, choir vocalizing',
            orchestration: 'Full Orchestra + Synth + Choir (tutti)'
        },
        variations: [
            {
                id: 'desperate',
                name: 'Desperate',
                scales: {
                    primary: 'F Minor (Fast)',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Diminished, Aug, Cluster',
                    progressions: ['Fm - E - Eb - D (Chromatic line)', 'Random modulations', 'Fm - Gb - G - Ab']
                },
                prompt: 'Create a Final Boss Phase track at 175 BPM. The music should be frantic and overwhelming. Use a full choir singing fortissimo. The string section plays rapid, frantic arpeggios in F Minor. Add a "Shepard Tone" rising effect to create endless tension. The drums should be playing a fast, double-time metal-style beat. Harmony moves chromatically downwards to signify the boss\'s collapsing stability.'
            }
        ]
    },
    {
        id: 'stealth-takedown-sequence',
        title: 'Stealth Takedown Sequence',
        moodUseCase: 'Quietly eliminating enemies. Precise, tense, and sudden.',
        coreTheory: {
            tempo: '100 BPM',
            rhythm: 'Heartbeat kick, silence gaps',
            harmony: 'Minor 2nd intervals, sparse',
            melody: 'Sudden stingers (sforzando)',
            orchestration: 'Plucked strings, sub bass, sound design'
        },
        variations: [
            {
                id: 'silent',
                name: 'Silent',
                scales: {
                    primary: 'C Minor (Sparse)',
                    secondary: 'Whole Tone'
                },
                chords: {
                    types: 'Minor add9, dissonant dyads',
                    progressions: ['Cm (held) ... Db stab', 'Low drone C ... G/C', 'Sparse clusters']
                },
                prompt: 'Compose a Stealth Takedown track at 100 BPM. The track should be mostly silence and low sub-bass pulses. Use prepared piano or pizzicato strings to create quiet, "creeping" sounds. Every 4 bars, include a sudden, loud orchestral "stinger" or distorted percussion hit to represent a takedown. The harmony is minimal, focusing on tension using minor 2nd intervals (e.g., C against Db).'
            }
        ]
    },
    {
        id: 'sniper-standoff',
        title: 'Sniper Standoff',
        moodUseCase: 'Waiting for the shot. Extreme tension and breath-holding.',
        coreTheory: {
            tempo: '60 BPM (feels slower)',
            rhythm: 'None or extremely slow pulse',
            harmony: 'High pitched clusters, sustained',
            melody: 'None',
            orchestration: 'High strings (harmonics), wind sounds, heartbeat'
        },
        variations: [
            {
                id: 'focus',
                name: 'Focus',
                scales: {
                    primary: 'E Phrygian',
                    secondary: 'Microtonal'
                },
                chords: {
                    types: 'Suspended, Open 5ths',
                    progressions: ['E5 drone', 'E - F (very slow)', 'High cluster E-F-G']
                },
                prompt: 'Create a Sniper Standoff ambience. No distinct BPM, but a felt pulse of around 60. Use high-pitched string harmonics holding a single dissonant cluster (E, F, G). Include the sound of a slow, deep heartbeat. The atmosphere is cold, calculated, and deadly. A slight pitch bend or "glissando" in the strings can increase tension. Minimalist and holding its breath.'
            }
        ]
    },
    {
        id: 'urban-riot-escape',
        title: 'Urban Riot Escape',
        moodUseCase: 'Running through a chaotic city mob. Panic and confusion.',
        coreTheory: {
            tempo: '145 BPM',
            rhythm: 'Polyrhythms, chaotic percussion layers',
            harmony: 'Dissonant clusters, no tonal center',
            melody: 'Sirens, shouting-like synth leads',
            orchestration: 'Industrial percussion, sirens, distorted guitar'
        },
        variations: [
            {
                id: 'chaos',
                name: 'Chaos',
                scales: {
                    primary: 'Diminished Scale',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Tritones, Augmented',
                    progressions: ['Dim7 ascending', 'Random tritone shifts', 'Drone with noise']
                },
                prompt: 'Generate an Urban Riot Escape track at 145 BPM. The sound should be noisy and industrial. Use samples of sirens, shouting, and smashing glass integrated into the rhythm. The percussion is chaotic, using metallic trash-can sounds. Dissonant guitar feedback and synth scrapes create a wall of noise. Use the Diminished scale to keep the musicality feeling trapped and panicked.'
            }
        ]
    },
    {
        id: 'explosive-car-chase',
        title: 'Explosive Car Chase',
        moodUseCase: 'High speed vehicles, crashes, and explosions.',
        coreTheory: {
            tempo: '160 BPM',
            rhythm: 'Motor-rhythm (chugging), straight 8ths',
            harmony: 'Blues/Rock influence, Power Chords',
            melody: 'Guitar riffs, brass swells',
            orchestration: 'Electric Guitar, Rock Drums, Orchestra'
        },
        variations: [
            {
                id: 'nitro',
                name: 'Nitro',
                scales: {
                    primary: 'E Minor Pentatonic',
                    secondary: 'E Dorian'
                },
                chords: {
                    types: 'Power Chords (1-5)',
                    progressions: ['Em - G - A - C', 'Em - D - Em - G', 'E5 - G5 - A5']
                },
                prompt: 'Create a Hollywood-style Car Chase track at 160 BPM. Use chugging electric guitars playing 8th notes to simulate an engine. A rock drum kit should play a driving beat with heavy cymbals. The orchestra provides "hits" on the chord changes (Power Chords in E Minor). Add brass swells (crescendos) that lead into sudden stops or impacts. Exciting, fast, and adrenaline-fueled.'
            }
        ]
    },
    {
        id: 'motorcycle-highway-pursuit',
        title: 'Motorcycle Highway Pursuit',
        moodUseCase: 'Weaving through traffic at high speeds. Sleek and risky.',
        coreTheory: {
            tempo: '170 BPM',
            rhythm: 'Fast continuous 16th notes (arpeggiators)',
            harmony: 'Aeolian, constant motion',
            melody: 'Modulating synth lines, wind effects',
            orchestration: 'Analog Synths, Drum Machines, FX'
        },
        variations: [
            {
                id: 'speed',
                name: 'Speed',
                scales: {
                    primary: 'A Aeolian',
                    secondary: 'A Phrygian'
                },
                chords: {
                    types: 'Minor, Sus2',
                    progressions: ['Am - F - G - Am', 'Am - G/B - C - Dm', 'Bass Pedal A']
                },
                prompt: 'Compose a Motorcycle Pursuit track at 170 BPM. Heavily utilize retro-synth arpeggiators (16th notes) to create the feeling of speed and wind. The bass line should be a "rolling" Moog-style bass. Drums are punchy and electronic (TR-909 style). The harmony is A Aeolian, moving smoothly but quickly. Occasional white-noise sweeps simulate passing cars.'
            }
        ]
    },
    {
        id: 'helicopter-aerial-assault',
        title: 'Helicopter Aerial Assault',
        moodUseCase: 'Attack from the sky. Mechanical and rhythmic.',
        coreTheory: {
            tempo: '130 BPM',
            rhythm: 'Propeller-like triplet pulse',
            harmony: 'Wagnerian (Epic Major/Minor)',
            melody: 'Ride of Valkyries style brass',
            orchestration: 'French Horns, Rotor FX, Snare'
        },
        variations: [
            {
                id: 'airborne',
                name: 'Airborne',
                scales: {
                    primary: 'B Minor',
                    secondary: 'B Harmonic Minor'
                },
                chords: {
                    types: 'Major V, Minor i, Diminished',
                    progressions: ['Bm - F# - Bm - G', 'Bm - A - G - F#', 'Bm - Em - F#7']
                },
                prompt: 'Generate a Helicopter Assault theme at 130 BPM. Use a rhythmic synthesizer or percussion element that mimics the "thwop-thwop" of rotor blades in triplets. Over this, layer a grandiose French Horn melody in B Minor, similar to "Ride of the Valkyries". The snare drum plays a military rolling cadence. The mood is dominant and militaristic.'
            }
        ]
    },
    {
        id: 'space-dogfight',
        title: 'Space Dogfight',
        moodUseCase: 'Starfighters battling in zero-G. Disorienting and fast.',
        coreTheory: {
            tempo: '150 BPM',
            rhythm: 'Floaty but fast, hemiolas',
            harmony: 'Lydian Dominant, Whole Tone',
            melody: 'Wide leaps, synthesizer glides',
            orchestration: 'Orchestra + Sci-fi Synths, Theremin-ish leads'
        },
        variations: [
            {
                id: 'galactic',
                name: 'Galactic',
                scales: {
                    primary: 'C Lydian',
                    secondary: 'Whole Tone'
                },
                chords: {
                    types: 'Major #4, Augmented',
                    progressions: ['C - D - C - Bb', 'Caug - Daug - Eaug', 'C - F# - G - C']
                },
                prompt: 'Create a Space Dogfight track at 150 BPM. Use the Lydian mode (augmented 4th) to capture the grandeur of space. The rhythm should be fast but fluid, escaping standard gravity. Use laser-zap sound effects as percussion. A heroic trumpet melody plays over swirling string arpeggios. Include whole-tone scale runs to represent the disorientation of zero-gravity combat.'
            }
        ]
    },
    {
        id: 'cyberpunk-gunfight',
        title: 'Cyberpunk Gunfight',
        moodUseCase: 'Neon-lit shootouts with high-tech weapons.',
        coreTheory: {
            tempo: '140 BPM',
            rhythm: 'Industrial breakbeat, distorted',
            harmony: 'Minor, dark synthwave',
            melody: 'Vangelis-style synth brass, gritty leads',
            orchestration: 'Distorted Bass, Cybernetic FX, Synth'
        },
        variations: [
            {
                id: 'neon',
                name: 'Neon',
                scales: {
                    primary: 'D Dorian',
                    secondary: 'D Blues'
                },
                chords: {
                    types: 'Minor 7, 11th intervals',
                    progressions: ['Dm7 - G/B - Dm7', 'Dm - C - Bb - C', 'Dm - Dm/C - Bm7b5']
                },
                prompt: 'Compose a Cyberpunk Gunfight track at 140 BPM. The kick drum needs to be massive and distorted. Use a "Cybernetic" bass line—sawtooth waves with heavy filter modulation. The harmony is D Dorian, dark but with a cool edge. Add "gunshot" snare hits. The melody is played by a distorted lead synth, mimicking a guitar solo but digital. The atmosphere is neon, rain-soaked, and violent.'
            }
        ]
    },
    {
        id: 'mech-vs-mech-combat',
        title: 'Mech vs Mech Combat',
        moodUseCase: 'Giant robots clashing. Heavy, hydraulic, metallic.',
        coreTheory: {
            tempo: '90 BPM (Half-time feel)',
            rhythm: 'Stomping, heavy downbeats',
            harmony: 'Low power chords, industrial noise',
            melody: 'Slow, powerful brass lines',
            orchestration: 'Dubstep basses, Metallic percussion, Low Brass'
        },
        variations: [
            {
                id: 'titan',
                name: 'Titan',
                scales: {
                    primary: 'F# Minor',
                    secondary: 'F# Phrygian'
                },
                chords: {
                    types: 'Power Chords, Tritones',
                    progressions: ['F#5 - G5 - F#5', 'F#5 - C5 (Tritone)', 'Low rhythmic pedal']
                },
                prompt: 'Create a Mech Combat track at 90 BPM with a heavy half-time feel. The drums should sound like colliding metal—huge snares and metallic clanks. Use Dubstep-style "wub" basses to simulate hydraulic engines revving. The brass section plays slow, massive chords in F# Minor. The whole track should feel incredibly heavy and weighty, emphasizing the sheer size of the machines.'
            }
        ]
    },
    {
        id: 'monster-hunt-pursuit',
        title: 'Monster Hunt Pursuit',
        moodUseCase: 'Tracking a beast in the wild. Primal and dangerous.',
        coreTheory: {
            tempo: '140 BPM',
            rhythm: 'Tribal drums, polyrhythms',
            harmony: 'Dissonant, natural minor',
            melody: 'Primitive, horn calls, shouts',
            orchestration: 'Large Taiko, Log Drums, Brass, Ethnic flutes'
        },
        variations: [
            {
                id: 'primal',
                name: 'Primal',
                scales: {
                    primary: 'E Natural Minor',
                    secondary: 'E Locrian'
                },
                chords: {
                    types: 'Open 5ths, Minor 2nds',
                    progressions: ['Em - G - A - C', 'Em - F - Em', 'Em - Bb - Em']
                },
                prompt: 'Generate a Monster Hunt track at 140 BPM. Focus on Tribal Percussion—taiko drums, log drums, and shakers in a complex rhythm. Low brass plays "call and response" hunting horn motifs. The strings perform aggressive col legno (hitting with wood) effects. The harmony is primal and raw, sticking to E Minor with dissonance. The mood is wild, ancient, and dangerous.'
            }
        ]
    },
    {
        id: 'jungle-survival-attack',
        title: 'Jungle Survival Attack',
        moodUseCase: 'Ambushed in dense foliage. Claustrophobic and humid.',
        coreTheory: {
            tempo: '150 BPM',
            rhythm: 'Fast, anxious shakers, syncopated',
            harmony: 'Chromatic, dense textures',
            melody: 'Flute flutters, insect-like sounds',
            orchestration: 'Woodwinds, Ethnic Percussion, Strings'
        },
        variations: [
            {
                id: 'ambush',
                name: 'Ambush',
                scales: {
                    primary: 'G Locrian',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Diminished, Cluster',
                    progressions: ['Gm - F#dim - Gm', 'Chromatic movement', 'G - Ab - G']
                },
                prompt: 'Compose a Jungle Ambush track at 150 BPM. Use intense, fast shaker rhythms to mimic insects and rustling leaves. Woodwinds (flutes, clarinets) play dissonant, fluttering runs. Low strings play a stalking rhythm. Suddenly, loud brass blasts signify the attack. Keep the texture dense and claustrophobic. Use G Locrian for an unsettled, dangerous exotic feel.'
            }
        ]
    },
    {
        id: 'desert-ambush-battle',
        title: 'Desert Ambush Battle',
        moodUseCase: 'Fighting in the dunes. Heat, sand, and exhaustion.',
        coreTheory: {
            tempo: '130 BPM',
            rhythm: 'Middle-Eastern percussion (Doumbek)',
            harmony: 'Double Harmonic Major (Arabic scale)',
            melody: 'Ornamented, quarter-tone bends',
            orchestration: 'Oud, Duduk, Strings, Percussion'
        },
        variations: [
            {
                id: 'sandstorm',
                name: 'Sandstorm',
                scales: {
                    primary: 'D Double Harmonic Major',
                    secondary: 'D Phrygian Dominant'
                },
                chords: {
                    types: 'Major with flat 2, flat 6',
                    progressions: ['D - Eb - D', 'D - Cm - D', 'D - Gm - D']
                },
                prompt: 'Create a Desert Battle track at 130 BPM using the D Phrygian Dominant or Double Harmonic scale. The rhythm is driven by Doumbek and Frame Drums. A solo Oud or Duduk plays a fast, ornamented melody with quarter-tone bends. The string section provides a swirling, tremolo backdrop like a sandstorm. The mood is hot, intense, and exotic.'
            }
        ]
    },
    {
        id: 'arctic-survival-fight',
        title: 'Arctic Survival Fight',
        moodUseCase: 'Battle in a blizzard. Cold, biting, and harsh.',
        coreTheory: {
            tempo: '120 BPM',
            rhythm: 'Sharp, icy transients, glass-like',
            harmony: 'Open chords, high-frequency dissonance',
            melody: 'Cold, detached, high pitch',
            orchestration: 'Sleigh bells (aggressive), High Strings, Piano'
        },
        variations: [
            {
                id: 'blizzard',
                name: 'Blizzard',
                scales: {
                    primary: 'A Minor',
                    secondary: 'A Dorian #4'
                },
                chords: {
                    types: 'Minor 9, Sus2',
                    progressions: ['Am9 - F#dim - Am', 'Am - G6 - Fmaj7', 'Suspended drones']
                },
                prompt: 'Compose an Arctic Fight track at 120 BPM. The sound should be "cold"—use high-pitched piano strikes and glockenspiel. The strings play sul ponticello (near the bridge) for an icy, scratchy sound. The wind is an instrument itself, howling in the background. Rhythms are sharp and brittle. Harmony is bleak A Minor with open voicings.'
            }
        ]
    }
];
