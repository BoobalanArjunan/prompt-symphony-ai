export const actionSubcategories3 = [
    {
        id: 'castle-siege-assault',
        title: 'Castle Siege Assault',
        moodUseCase: 'Storming the fortress. Battering rams and arrows.',
        coreTheory: {
            tempo: '110 BPM',
            rhythm: 'Heavy marching beat, steady',
            harmony: 'Modal (Dorian/Mixolydian)',
            melody: 'Fanfare-ish, call to arms',
            orchestration: 'Brass, Snare Rolls, Anvils'
        },
        variations: [
            {
                id: 'fortress',
                name: 'Fortress',
                scales: {
                    primary: 'D Dorian',
                    secondary: 'D Aeolian'
                },
                chords: {
                    types: 'Minor, Major IV, Power Chords',
                    progressions: ['Dm - G - Dm - C', 'Dm - Bb - C - Dm', 'Dm - Em - F - G (Cluster)']
                },
                prompt: 'Compose a Castle Siege track at 110 BPM. Needs a heavy "battering ram" rhythm—slow, powerful impacts. Low brass plays a gritty motif in D Dorian. Snare drums play continuous military rolls. Mix in medieval sounds like anvils or heavy chains. The musical arc is a slow, unstoppable advance towards the gates.'
            }
        ]
    },
    {
        id: 'final-stand-last-defense',
        title: 'Final Stand Last Defense',
        moodUseCase: 'The last few heroes holding the line. Tragic but defiant.',
        coreTheory: {
            tempo: '90 BPM',
            rhythm: 'Slow build, heavy backbeat',
            harmony: 'Sad Minor shifting to Heroic Major',
            melody: 'Soaring, emotional, long notes',
            orchestration: 'Solo Cello -> Full Orchestra'
        },
        variations: [
            {
                id: 'defiant',
                name: 'Defiant',
                scales: {
                    primary: 'A Minor',
                    secondary: 'A Major (Picardy/Modulation)'
                },
                chords: {
                    types: 'Minor, Major VI, Major III',
                    progressions: ['Am - F - C - G', 'Am - G/B - C - D', 'F - G - Asus4 - A']
                },
                prompt: 'Generate a Final Stand track at 90 BPM. Start with a solo cello playing a mournful theme. Gradually add drums and brass until it becomes a massive, defiant anthem. The chord progression should mix sadness (Am - F) with hope (C - G). The climax needs to be overwhelming and emotional—"fighting to the last breath".'
            }
        ]
    },
    {
        id: 'rescue-mission-extraction',
        title: 'Rescue Mission Extraction',
        moodUseCase: 'Getting the VIP out. Controlled urgency.',
        coreTheory: {
            tempo: '130 BPM',
            rhythm: 'Syncopated, tactical, steady',
            harmony: 'Sus4 chords, unresolved',
            melody: 'Short brass stabs, rising motifs',
            orchestration: 'Strings, Hybdrid Percussion, Synth'
        },
        variations: [
            {
                id: 'extract',
                name: 'Extract',
                scales: {
                    primary: 'G Minor Pentatonic',
                    secondary: 'G Dorian'
                },
                chords: {
                    types: 'Sus4, Minor 7',
                    progressions: ['Gsus4 - Gm', 'Gm - F - Eb - D', 'Bass pedaling on G']
                },
                prompt: 'Create a Rescue Mission track at 130 BPM. The vibe is "Professional Military Operation". Clean, tight percussion and staccato strings. The harmony often hangs on Suspended chords (Gsus4) to create a feeling of waiting/tension. When the extraction moves, the bass kicks in with a driving G Minor pattern. Focused, tactical, and clean.'
            }
        ]
    },
    {
        id: 'spy-extraction-under-fire',
        title: 'Spy Extraction Under Fire',
        moodUseCase: 'Cover blown, running to the chopper. Stylish danger.',
        coreTheory: {
            tempo: '140 BPM',
            rhythm: 'Bongos/Congas + Breakbeat',
            harmony: 'Jazz-fusion, chromaticism',
            melody: 'Fast flute or muted trumpet runs',
            orchestration: 'Big Band + Orchestra + Electronics'
        },
        variations: [
            {
                id: 'espionage',
                name: 'Espionage',
                scales: {
                    primary: 'E Blues scale',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Min(maj7), Dom7#9',
                    progressions: ['Em(maj7) - Em7 - Em6 - C7', 'Chromatically descending bass', 'Hits on "and" of 4']
                },
                prompt: 'Compose a Spy Action track at 140 BPM. Think "James Bond chase". Use a mix of orchestral strings and Big Band brass. The rhythm section features bongos and a fast hi-hat. The bass line walks chromatically (Em - Eb - D - Db). Muted trumpets play sharp, aggressive stabs. Stylish, retro-cool, but high stakes.'
            }
        ]
    },
    {
        id: 'train-top-running-fight',
        title: 'Train Top Running Fight',
        moodUseCase: 'Fighting on a moving train. Wind, speed, instability.',
        coreTheory: {
            tempo: '160 BPM',
            rhythm: 'Shuffle or Gallop (train chug)',
            harmony: 'Fast changing, modulating',
            melody: 'Rising and falling (Doppler effect)',
            orchestration: 'Snare brushes, heavy kick, wind FX'
        },
        variations: [
            {
                id: 'locomotive',
                name: 'Locomotive',
                scales: {
                    primary: 'F# Minor',
                    secondary: 'F# Dorian'
                },
                chords: {
                    types: 'Power Chords, Diminished',
                    progressions: ['F#m - A - B - F#m', 'F#m - C#7 - F#m', 'Rhythmic chugging F#5']
                },
                prompt: 'Generate a Train Fight track at 160 BPM. The rhythm MUST mimic a steam train (chug-a-chug-a). Snare drum playing "train beats" with brushes. Wind noise and Doppler-effect brass swells pass by. The harmony is F# Minor, driving and relentless. Sudden dynamic drops represent going through tunnels.'
            }
        ]
    },
    {
        id: 'factory-industrial-shootout',
        title: 'Factory Industrial Shootout',
        moodUseCase: 'Urban decay, machinery, steam, and bullets.',
        coreTheory: {
            tempo: '125 BPM',
            rhythm: 'Clanking metallic beats, industrial',
            harmony: 'Cold, mechanical, repetitive',
            melody: 'Synth leads, Metallic bell melodies',
            orchestration: 'Sampled Metal, Synths, Distortion'
        },
        variations: [
            {
                id: 'industrial',
                name: 'Industrial',
                scales: {
                    primary: 'E Locrian',
                    secondary: 'Mechanical Clusters'
                },
                chords: {
                    types: 'No 3rds, Tritones',
                    progressions: ['E5 - Bb5 - E5', 'Static machine drone', 'Random metallic hits']
                },
                prompt: 'Create an Industrial Shootout track at 125 BPM. Use percussion made from sampled confident: heavy clanks, steam hisses, and hammer hits. The bass is a gritty, distorted synth. No varying melody—just a repetitive, machine-like riff in E Locrian (Tritone focus). Cold, dehumanized, and rhythmic.'
            }
        ]
    },
    {
        id: 'highway-convoy-ambush',
        title: 'Highway Convoy Ambush',
        moodUseCase: 'Protecting or attacking a line of trucks. Constant motion.',
        coreTheory: {
            tempo: '145 BPM',
            rhythm: 'Rolling tom-toms, constant 8ths',
            harmony: 'Driving Rock/Orchestral',
            melody: 'Brass calls, Electric Guitar sustenance',
            orchestration: 'Hybrid: Rock Band + Horns'
        },
        variations: [
            {
                id: 'convoy',
                name: 'Convoy',
                scales: {
                    primary: 'B Minor',
                    secondary: 'B Aeolian'
                },
                chords: {
                    types: 'Power Chords, Minor 7',
                    progressions: ['Bm - G - D - A', 'Bm - E - G - F#', 'Bass pedal movements']
                },
                prompt: 'Compose a Highway Convoy track at 145 BPM. Rolling Tom-tom drums create a "wheels on the road" feel. Electric guitars chug a steady 8th note rhythm. Orchestral Horns play a wide, heroic theme over the top. The energy should be constant and forward-moving, never stopping. B Minor for a serious action tone.'
            }
        ]
    },
    {
        id: 'volcano-edge-survival-run',
        title: 'Volcano Edge Survival Run',
        moodUseCase: 'Escaping lava. Heat, earthquakes, destruction.',
        coreTheory: {
            tempo: '160 BPM',
            rhythm: 'Rumbling, chaotic low-end',
            harmony: 'Chromatic, rising pitch (panic)',
            melody: 'Screaming high woodwinds',
            orchestration: 'Massive Bass Drums, Low Brass, Choir'
        },
        variations: [
            {
                id: 'eruption',
                name: 'Eruption',
                scales: {
                    primary: 'F Minor',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Diminished, Cluster',
                    progressions: ['Fm - Gb - G - Ab (Rising)', 'Explosive hits', 'Rumbling textural sections']
                },
                prompt: 'Generate a Volcano Escape track at 160 BPM. Massive, rumbling bass drums/timpani simulate earthquakes. The choir chants in panic. The key element is "rising tension"—chromatically ascending chord progressions (Fm - F#m - Gm) that never resolve. Sound effects of fire and crumbling rocks integration. High-pitched woodwind trills sound like escaping steam.'
            }
        ]
    },
    {
        id: 'lab-facility-containment-breach',
        title: 'Lab Facility Containment Breach',
        moodUseCase: 'Specimen escaped. Alarms, flashing lights, slaughter.',
        coreTheory: {
            tempo: '150 BPM',
            rhythm: 'Electronic pulses, frantic',
            harmony: 'Synthetic, cold, dissonant',
            melody: 'Beeping sequences, warning motifs',
            orchestration: 'Synths, Sirens, Cold Strings'
        },
        variations: [
            {
                id: 'breach',
                name: 'Breach',
                scales: {
                    primary: 'C# Minor',
                    secondary: 'Whole Tone'
                },
                chords: {
                    types: 'Augmented, Minor Maj7',
                    progressions: ['C#m - Caug - E/B - A#dim', 'Rapid arpeggios', 'Strobe-light rhythm']
                },
                prompt: 'Create a Lab Breach track at 150 BPM. Electronic and cold. Use a synthesizer sequencer playing a fast, frantic "alarm-like" arpeggio in C# Minor. Bursts of white noise and heavy industrial drums. The harmony should feel claustrophobic. Occasional silence followed by a loud "jump scare" hit. Clinical but deadly.'
            }
        ]
    },
    {
        id: 'portal-dimension-battle',
        title: 'Portal Dimension Battle',
        moodUseCase: 'Fighting in a warped reality. Physics are wrong.',
        coreTheory: {
            tempo: '140 BPM',
            rhythm: 'Glitchy, changing time signatures',
            harmony: 'Bi-tonal (two keys at once)',
            melody: 'Reverse melody lines, warped',
            orchestration: 'Reverse FX, Orchestra, Glitch'
        },
        variations: [
            {
                id: 'dimension',
                name: 'Dimension',
                scales: {
                    primary: 'Octatonic',
                    secondary: 'Polytonal'
                },
                chords: {
                    types: 'Polychords (C over F#)',
                    progressions: ['C major + F# major clash', 'Random shifting', 'Swells']
                },
                prompt: 'Compose a Dimension Battle track at 140 BPM. The music needs to sound "wrong" or warped. Use bi-tonality (e.g., Bass playing in C, Melody in F#). Heavy use of reverse reverb and glitch effects on the drums. The rhythm should stumble or skip beats to represent unstable physics. Strange, alien, and mind-bending.'
            }
        ]
    },
    {
        id: 'magic-vs-technology-war',
        title: 'Magic vs Technology War',
        moodUseCase: 'Wizards vs Robots. Organic vs Synthetic.',
        coreTheory: {
            tempo: '135 BPM',
            rhythm: 'Clashing grooves (swing vs straight)',
            harmony: 'Lush vs Cold',
            melody: 'Lyrical strings vs Square wave',
            orchestration: 'Full Orchestra (Magic) vs Synths (Tech)'
        },
        variations: [
            {
                id: 'collision',
                name: 'Collision',
                scales: {
                    primary: 'D Mixolydian',
                    secondary: 'D Minor Pentatonic'
                },
                chords: {
                    types: 'Major 9 vs Power Chords',
                    progressions: ['D - C - G (Magic)', 'D5 - F5 (Tech)', 'Mashup sections']
                },
                prompt: 'Create a Magic vs Tech track at 135 BPM. Clearly separate the two forces: "Magic" is represented by swirling, lush orchestral strings and choir. "Tech" is represented by distorted aggressive bass synths and drum machines. Have them trade bars, fighting for dominance, before combining into a massive hybrid climax. Epic and contrasted.'
            }
        ]
    },
    {
        id: 'underground-tunnel-chase',
        title: 'Underground Tunnel Chase',
        moodUseCase: 'Subway or sewers. Dark, damp, fast.',
        coreTheory: {
            tempo: '160 BPM',
            rhythm: 'Echoing percussion, fast breakbeat',
            harmony: 'Deep minor, reverberant',
            melody: 'Low echoes, sparse',
            orchestration: 'Reverb-heavy drums, damp piano, bass'
        },
        variations: [
            {
                id: 'darkness',
                name: 'Darkness',
                scales: {
                    primary: 'Eb Minor',
                    secondary: 'Eb Dorian'
                },
                chords: {
                    types: 'Minor, sustained pads',
                    progressions: ['Ebm - Cb - Db', 'Drone Eb', 'Echoing hits']
                },
                prompt: 'Generate an Underground Chase track at 160 BPM. Heavy use of reverb to simulate a tunnel. Driving breakbeats and a deep, rolling bass line in Eb Minor. Sudden "whooshes" simulate passing pillars or trains. The instrumentation is dark and damp—low piano notes and filtered pads. claustrophobic but very fast.'
            }
        ]
    },
    {
        id: 'stormy-ocean-naval-battle',
        title: 'Stormy Ocean Naval Battle',
        moodUseCase: 'Ships fighting in a hurricane. Wet, massive, rocking.',
        coreTheory: {
            tempo: '120 BPM (6/8)',
            rhythm: 'Swaying, crashing 6/8',
            harmony: 'Minor, turbulent',
            melody: 'French Horn calls, rising/falling',
            orchestration: 'Orchestra, Rain/Thunder FX, Cymbals'
        },
        variations: [
            {
                id: 'hurricane',
                name: 'Hurricane',
                scales: {
                    primary: 'G Minor',
                    secondary: 'G Harmonic Minor'
                },
                chords: {
                    types: 'Minor, Diminished 7',
                    progressions: ['Gm - Eb - Cm - D7', 'Swells of volume', 'Gm - D - Gm']
                },
                prompt: 'Compose a Stormy Naval Battle track at 120 BPM in 6/8. The rhythm should feel like a heaving ship—swell and crash. Use massive cymbal rolls to simulate waves crashing. The Brass section plays a desperate, heroic fanfare in G Minor fighting against the chaos. Thunder sfx usage. Grand and wet.'
            }
        ]
    },
    {
        id: 'collapsing-city-escape',
        title: 'Collapsing City Escape',
        moodUseCase: 'Buildings falling around you. Dust, debris, sprint.',
        coreTheory: {
            tempo: '165 BPM',
            rhythm: 'Polyrhythmic, stumbling',
            harmony: 'Falling chromatic lines',
            melody: 'Frantic, downward spirals',
            orchestration: 'Orchestral hits, Debris SFX, Choir'
        },
        variations: [
            {
                id: 'collapse',
                name: 'Collapse',
                scales: {
                    primary: 'Chromatic',
                    secondary: 'Descending Scales'
                },
                chords: {
                    types: 'Cluster, minor',
                    progressions: ['Chromatically descending chords', 'Impacts', 'Panic build']
                },
                prompt: 'Create a City Collapse track at 165 BPM. The key musical motif is "falling"—descending chromatic string runs and piano glissandos. Massive orchestral hits coincide with "buildings falling". The rhythm is frantic and uneven. A choir screams/chants in the background. Pure destruction and panic.'
            }
        ]
    },
    {
        id: 'ultimate-final-boss-showdown',
        title: 'Ultimate Final Boss Showdown',
        moodUseCase: 'The end of the world. God-like power vs The Hero.',
        coreTheory: {
            tempo: '180 BPM to Half-time breakdown',
            rhythm: 'Epic, complex, excessive',
            harmony: 'Choir chords, Pipe Organ, Metal',
            melody: 'Latin Choir, soaring soprano',
            orchestration: ' EVERYTHING (Orch + Choir + Band)'
        },
        variations: [
            {
                id: 'godslayer',
                name: 'Godslayer',
                scales: {
                    primary: 'D Minor (Epic)',
                    secondary: 'Neapolitan Minor'
                },
                chords: {
                    types: 'Minor, Major VI, Neapolitan (Eb)',
                    progressions: ['Dm - Bb - C - Dm', 'Dm - Eb - A7 - Dm', 'Choir Cluster']
                },
                prompt: 'The Ultimate Final Boss Theme. 180 BPM. A massive choir singing Latin lyrics ("Dies Irae" style) is the lead instrument. Accompanied by double-kick metal drums and a full symphony orchestra. Breakdown into a slow, heavy "Doom" section before speeding up again. Use the Neapolitan chord (Eb in key of Dm) for epic tragedy. Maximalist, apocalyptic, and legendary.'
            }
        ]
    }
];
