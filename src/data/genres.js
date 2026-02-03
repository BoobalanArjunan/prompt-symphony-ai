import { Zap, Sword, Ghost, Skull, Smile, Heart, CloudRain, Wand2, Sun, Search, Music, Activity, Anchor, Gamepad2, Rocket, Trophy, HelpCircle, Cloud, Flame, Factory, Shield, Clock, AlertTriangle, Star } from 'lucide-react';
import { actionSubcategories } from './action_subcategories_1';
import { actionSubcategories2 } from './action_subcategories_2';
import { actionSubcategories3 } from './action_subcategories_3';
import { actionSubcategories4 } from './action_subcategories_4';
import { actionSubcategories5 } from './action_subcategories_5';
import { actionSubcategories6 } from './action_subcategories_6';
import { actionSubcategories7 } from './action_subcategories_7';
import { actionSubcategories8 } from './action_subcategories_8';
import { generatedActionSubcategories } from './action_generator';
import { generatedActionSubcategories2 } from './action_generator_2';
import { generatedActionSubcategories3 } from './action_generator_3';
import { generatedAdventureSubcategories } from './adventure_generator';
import { generatedAdventureSubcategories2 } from './adventure_generator_2';
import {
    moodExpansionAction, moodExpansionAdventure, moodExpansionSuspense, moodExpansionHorror,
    moodExpansionComedy, moodExpansionRomance, moodExpansionSadness, moodExpansionFantasy,
    moodExpansionInspirational, moodExpansionGaming, moodExpansionSciFi, moodExpansionEpic,
    moodExpansionMystery, moodExpansionSurreal, moodExpansionRitual, moodExpansionIndustrial,
    moodExpansionMythic, moodExpansionMinimalist, moodExpansionGlitch, moodExpansionCelestial,
    moodExpansionEDM
} from './mood_expansion';

import { generatedSuspenseSubcategories } from './suspense_generator';
import { generatedHorrorSubcategories } from './horror_generator';
import { generatedComedySubcategories } from './comedy_generator';
import { generatedRomanceSubcategories } from './romance_generator';
import { generatedSadnessSubcategories } from './sadness_generator';
import { generatedFantasySubcategories } from './fantasy_generator';
import { generatedInspirationalSubcategories } from './inspirational_generator';
import { generatedGamingSubcategories } from './gaming_generator';
import { generatedSciFiSubcategories } from './scifi_generator';
import { generatedEpicSubcategories } from './epic_generator';
import { generatedMysterySubcategories } from './mystery_generator';
import { generatedSurrealSubcategories } from './surreal_generator';
import { generatedRitualSubcategories } from './ritual_generator';
import { generatedIndustrialSubcategories } from './industrial_generator';
import { generatedMythicSubcategories } from './mythic_generator';
import { generatedMinimalistSubcategories } from './minimalist_generator';
import { generatedGlitchSubcategories } from './glitch_generator';
import { generatedCelestialSubcategories } from './celestial_generator';
import { generatedEDMSubcategories } from './edm_generator';
const allActionSubcategories = [
    ...actionSubcategories,
    ...actionSubcategories2,
    ...actionSubcategories3,
    ...actionSubcategories4,
    ...actionSubcategories5,
    ...actionSubcategories6,
    ...actionSubcategories7,
    ...actionSubcategories8,
    ...generatedActionSubcategories,
    ...generatedActionSubcategories2,
    ...generatedActionSubcategories3,
    ...moodExpansionAction
];

export const genres = [
    {
        id: 'action',
        title: 'Action',
        icon: Zap,
        description: 'High-octane energetic tracks for combat and chases.',
        subcategories: allActionSubcategories
    },
    {
        id: 'adventure',
        title: 'Adventure',
        icon: Sword,
        description: 'Journeys, quests, and sweeping landscapes.',
        subcategories: [
            {
                id: 'hero-theme',
                title: 'Hero Theme',
                moodUseCase: 'The main character setting off on a journey or achieving a personal victory. Uplifting and brave.',
                coreTheory: {
                    tempo: '90-110 BPM',
                    rhythm: 'Galloping triplets (12/8) or steady 4/4',
                    harmony: 'Major key, Lydian mode (#4) for wonder',
                    melody: 'Soaring, large intervals (perfect 5ths, octaves)',
                    orchestration: 'Horns carrying melody, lush strings, chimes'
                },
                variations: [
                    {
                        id: 'standard',
                        name: 'Standard',
                        scales: {
                            primary: 'Bb Major',
                            secondary: 'Bb Lydian'
                        },
                        chords: {
                            types: 'Major Triads, Add9, Sus4',
                            progressions: [
                                'Bb – Eb – Bb – F',
                                'Bb – Gm – Eb – F',
                                'Eb – F – Gm – Bb'
                            ]
                        },
                        prompt: 'Create a sweeping heroic adventure theme at 105 BPM in a bright Major key. Begin with a noble French Horn melody that represents courage and determination, supported by a warm, rolling string section playing arpeggios. Use the Lydian mode (raised 4th) to add a sense of wonder and magic. Incorporate orchestral chimes and a suspended symbol swell to highlight the climax of the phrase. The rhythm should have a slight galloping feel to suggest journey and movement.'
                    }
                ]
            },
            {
                id: 'villain-theme',
                title: 'Villain Theme',
                moodUseCase: 'The antagonist enters. Heavy, imposing, and threatening.',
                coreTheory: {
                    tempo: '70-90 BPM',
                    rhythm: 'Heavy, plodding, deliberate downbeats',
                    harmony: 'Minor, Phrygian Dominant, Diminished',
                    melody: 'Chromatic, angular, low register',
                    orchestration: 'Low brass (Tubas, Trombones), Contrabassoon, Dark Choir'
                },
                variations: [
                    {
                        id: 'dark',
                        name: 'Dark',
                        scales: {
                            primary: 'C Phrygian Dominant',
                            secondary: 'C Octatonic (diminished)'
                        },
                        chords: {
                            types: 'Minor, Diminished 7th, Tritones',
                            progressions: [
                                'Fm – E – Fm – Db',
                                'Cm – Gb – Fm – G',
                                'Cm – Bdim – Cm'
                            ]
                        },
                        prompt: 'Produce a menacing villain theme at 80 BPM. Utilize the lower register of the orchestra, specifically tubas, trombones, and double basses, to create a heavy, imposing sound. The melody should be chromatic and angular, perhaps using the Phrygian Dominant scale to suggest ancient evil or power. Include low, rumbly percussion like timpani rolls and bass drums. Add subtle, dissonant clusters in the high strings to create unease. The atmosphere should be oppressive and dark, with a slow, purposeful march rhythm.'
                    }
                ]
            },
            {
                id: 'exploration-journey',
                title: 'Exploration Journey',
                moodUseCase: 'Traveling through vast, beautiful landscapes. Curious and flowing.',
                coreTheory: {
                    tempo: '100-120 BPM',
                    rhythm: 'Flowing, continuous 8th notes',
                    harmony: 'Modulating often, widespread voicings',
                    melody: 'Wandering, scalar runs, woodwind solos',
                    orchestration: 'Woodwind solos, acoustic guitar, light strings'
                },
                variations: [
                    {
                        id: 'scenic',
                        name: 'Scenic',
                        scales: {
                            primary: 'G Major / Mixolydian',
                            secondary: 'E Minor'
                        },
                        chords: {
                            types: 'Slash chords, Major 7ths',
                            progressions: [
                                'G – D/F# – Em – C',
                                'Cmaj7 – D – Gadd9',
                                'G – Am – G/B – C'
                            ]
                        },
                        prompt: 'Generate an orchestral track for exploration and discovery at 115 BPM. The music should feel flowing and constantly moving forward, like traveling across a vast map. Use acoustic guitar or harp strumming to set a steady, walking pace. Feature a flute or oboe solo playing a wandering, curious melody that interacts with pizzicato strings. Harmonically, use "walking" chord progressions that modulate smoothly to different keys, simulating changing scenery.'
                    }
                ]
            },
            ...generatedAdventureSubcategories,
            ...generatedAdventureSubcategories2,
            ...moodExpansionAdventure
        ]
    },
    {
        id: 'suspense',
        title: 'Suspense',
        icon: Search,
        description: 'Tension, mystery, and the unknown.',
        subcategories: [
            {
                id: 'slow-tension-build',
                title: 'Slow Tension Build',
                moodUseCase: 'Anticipation of something bad happening. Rising anxiety.',
                coreTheory: {
                    tempo: '60 BPM or Free Time',
                    rhythm: 'Undefined, felt pulse, swarming',
                    harmony: 'Clusters, unresolved suspensions, pedal points',
                    melody: 'Non-melodic, sound design based, textural',
                    orchestration: 'Tremolo strings, sul ponticello, breathy woodwinds'
                },
                variations: [
                    {
                        id: 'anxious',
                        name: 'Anxious',
                        scales: {
                            primary: 'Chromatic Scale',
                            secondary: 'Whole Tone'
                        },
                        chords: {
                            types: 'Clusters (minor 2nds), Augmented',
                            progressions: [
                                'Static Drones',
                                'Cluster builds',
                                'Caug – C#dim – Dm'
                            ]
                        },
                        prompt: 'Create a slow-burning suspense track at 60 BPM. Start with a barely audible low drone/pad that persists throughout. Layer in high-pitched string tremolos playing dissonant clusters (minor seconds). Occasionally introduce a deep, distant bass pulse or heartbeat sound. Avoid any clear melody; instead, use sound design elements like metallic scrapes or breathy woodwind flutters. The harmony should feel completely static and unresolved. Gradually increase the volume and density of the layers to create a sense of impending doom.'
                    }
                ]
            },
            {
                id: 'dark-investigation',
                title: 'Dark Investigation',
                moodUseCase: 'A detective looking for clues in a dangerous environment. Cerebral but tense.',
                coreTheory: {
                    tempo: '110 BPM',
                    rhythm: 'Tick-tock steady rhythms, syncopated bass',
                    harmony: 'Minor, chromatic passing tones, sparse',
                    melody: 'Low register, short motifs, silence',
                    orchestration: 'Piano, marimba, subtle synth pulse, muted trumpet'
                },
                variations: [
                    {
                        id: 'noir',
                        name: 'Noir',
                        scales: {
                            primary: 'A Harmonic Minor',
                            secondary: 'A Blues, A Locrian'
                        },
                        chords: {
                            types: 'Minor-Major 7th, Diminished 7th',
                            progressions: [
                                'Am – Am(maj7) – Am7 – Am6',
                                'Am – F#dim7 – F – E7',
                                'Dm – Am – E7 – Am'
                            ]
                        },
                        prompt: 'Compose a noir-style dark investigation track at 110 BPM. Use a steady "tick-tock" rhythm on a rimshot or woodblock to simulate a clock ticking. A delay-heavy piano should play a sparse, mysterious motif in A Minor. Add a subtle, pulsing synth bass arpeggio in the background for modern texture. Use muted trumpet for a lonely, noir-ish counter-line. The mood should be intellectual yet dangerous.'
                    }
                ]
            },
            {
                id: 'pulsing-thriller',
                title: 'Pulsing Thriller',
                moodUseCase: 'High-tech surveillance or a ticking clock scenario. Modern and propulsive.',
                coreTheory: {
                    tempo: '130 BPM',
                    rhythm: 'Driving bass pulse, industrial percussion',
                    harmony: 'Minimal, focus on texture and sound design',
                    melody: 'Glitchy, short synthesizer stabs',
                    orchestration: 'Synths, edgy strings, heart-beat kick'
                },
                variations: [
                    {
                        id: 'modern',
                        name: 'Modern',
                        scales: {
                            primary: 'D Minor Pentatonic',
                            secondary: 'D Aeolian'
                        },
                        chords: {
                            types: 'Power Chords, Octaves',
                            progressions: [
                                'Dm (Pedal Point)',
                                'Dm – Bb/D – C/D',
                                'Bass Riffs'
                            ]
                        },
                        prompt: 'Generate a modern thriller chase track at 135 BPM. The core should be a relentless, filtered 16th-note bass synthesizer pulse. Overlay gritty, bowing string effects that sound aggressive and scratchy. Use "ticks" and industrial percussion sounds for the rhythm section rather than a standard drum kit. Incorporate sudden stops (silence) followed by loud impacts. The harmony should change very slowly, mostly sticking to a single pedal point to maintain anxiety. Key elements are the driving low end and sharp, high-frequency sound design glitches.'
                    }
                ]
            },
            ...generatedSuspenseSubcategories,
            ...moodExpansionSuspense
        ]
    },
    {
        id: 'horror',
        title: 'Horror',
        icon: Skull,
        description: 'Fear, terror, and unsettling atmospheres.',
        subcategories: [
            {
                id: 'psychological-horror',
                title: 'Psychological Horror',
                moodUseCase: 'Mental instability, hallucination, or unease. Not necessarily violent, but disturbing.',
                coreTheory: {
                    tempo: 'Free / Irregular',
                    rhythm: 'Non-metric, random stabs',
                    harmony: 'Atonal, Microtonal, Clusters',
                    melody: 'Impossible to hum, huge leaps, angular',
                    orchestration: 'Prepared piano, detuned strings, reverse FX'
                },
                variations: [
                    {
                        id: 'disturbed',
                        name: 'Disturbed',
                        scales: {
                            primary: 'Whole Tone',
                            secondary: 'Chromatic'
                        },
                        chords: {
                            types: 'Tone Clusters, Microtonal bends',
                            progressions: [
                                'No functional harmony',
                                'Random intervals',
                                'Extreme dynamics'
                            ]
                        },
                        prompt: 'Create a psychological horror soundscape that feels unstable and "wrong". Refrain from using a steady beat. Use a prepared piano with a detuned, honky-tonk sound playing sporadic, non-rhythmic notes. Layer this with reverse cymbal swells and whispering voices in the background. The harmony should be non-existent or microtonal, creating a sense of nausea or disorientation. Add sudden, sharp violin screeches (glissandos) to jolt the listener. The focus is on texture and psychological discomfort rather than jump scares.'
                    }
                ]
            },
            {
                id: 'chase-terror',
                title: 'Chase Terror',
                moodUseCase: 'Being hunted by a monster. Panic and chaos.',
                coreTheory: {
                    tempo: '160+ BPM',
                    rhythm: 'Chaotic, aleatoric (random) runs',
                    harmony: 'Dissonant clusters, Stravinsky-esque stabs',
                    melody: 'Screeching glissandos, no tonal center',
                    orchestration: 'Loud brass, screeching woodwinds, tribal percussion'
                },
                variations: [
                    {
                        id: 'panic',
                        name: 'Panic',
                        scales: {
                            primary: 'Octatonic',
                            secondary: 'Chromatic'
                        },
                        chords: {
                            types: 'Polychords, Clusters',
                            progressions: [
                                'Stabs of random extensive chords',
                                'Aleatoric rising runs',
                                'Slamming percussion'
                            ]
                        },
                        prompt: 'Produce a chaotic horror chase music at 170 BPM. Use chaotic, aleatoric string runs where players play random notes within a scale rapidly. Deep, distorted brass blasts should act as the "monster" approaching. The percussion should be heavy, tribal, and unsyncopated to feel primal and uncontrolled. Use "Stingers" (loud, dissonant orchestral hits) frequently. Woodwinds should be overblown to create a shrieking effect. The music should offer no safety or resolution, just pure panic and adrenaline.'
                    }
                ]
            },
            {
                id: 'creepy-dollhouse',
                title: 'Creepy Dollhouse',
                moodUseCase: 'Innocence corrupted. A haunted nursery or possessed toy.',
                coreTheory: {
                    tempo: 'Slow Waltz (3/4)',
                    rhythm: 'Simple, mechanical, but possibly stumbling',
                    harmony: 'Major but detuned, bi-tonal overlap',
                    melody: 'Nursery rhyme style, simple intervals',
                    orchestration: 'Music box, celesta, child vocal, detuned piano'
                },
                variations: [
                    {
                        id: 'eerie',
                        name: 'Eerie',
                        scales: {
                            primary: 'C Major (with detuning)',
                            secondary: 'Chromatic clusters'
                        },
                        chords: {
                            types: 'Major Triads against Tritone Bass',
                            progressions: [
                                'C – F# (Tritone oscillating)',
                                'C – C#dim – Dm – G#',
                                'Music box melody in C over drone in F#'
                            ]
                        },
                        prompt: 'Compose a "creepy dollhouse" theme in a slow 3/4 waltz time. Use a celesta or music box sound that is slightly detuned. The melody should be simple, childlike, and lullaby-like in a Major key, but the underlying bass/pad should be a dissonant drone (tritone away) to ruin the innocence. Add a ghostly, reverberant child\'s vocal humming the melody. The atmosphere is eerie, fragile, and unsettling.'
                    }
                ]
            },
            ...generatedHorrorSubcategories,
            ...moodExpansionHorror
        ]
    },
    {
        id: 'comedy',
        title: 'Comedy',
        icon: Smile,
        description: 'Lighthearted, quirky, and funny.',
        subcategories: [
            {
                id: 'sneaky-mischief',
                title: 'Sneaky Mischief',
                moodUseCase: 'A character sneaking around or playing a prank. Light tension.',
                coreTheory: {
                    tempo: '100-115 BPM',
                    rhythm: 'Pizzicato "walking" bass lines, staccato',
                    harmony: 'Minor but playful, chromatic runs',
                    melody: 'Short, plucky, grace notes',
                    orchestration: 'Pizzicato strings, bassoon, xylophone, clarinet'
                },
                variations: [
                    {
                        id: 'playful',
                        name: 'Playful',
                        scales: {
                            primary: 'A Harmonic Minor',
                            secondary: 'Chromatic Scale'
                        },
                        chords: {
                            types: 'Diminished 7ths, Augmented',
                            progressions: [
                                'Am – E7 – Am – E7',
                                'Am – F#dim – G#dim – A',
                                'Chromatic descending lines'
                            ]
                        },
                        prompt: 'Generate a "sneaky" comedy track at 110 BPM. Highlight a pizzicato string section playing a walking bass line accompanied by short, plucky chords. Feature a bassoon or bass clarinet playing a staccato, jumping melody with grace notes. Use a xylophone for playful accents on the off-beats. Harmonically, use chromatic "tiptoeing" lines and diminished chords that resolve unexpectedly. Include sudden stops where the music cuts out completely for a second (for comedic timing). The vibe is mischievous, light, and secretive.'
                    }
                ]
            },
            {
                id: 'upbeat-sitcom',
                title: 'Upbeat Sitcom',
                moodUseCase: 'Opening credits or happy resolution. Friendly and inviting.',
                coreTheory: {
                    tempo: '120-140 BPM',
                    rhythm: 'Swing or straight pop beat',
                    harmony: 'Simple Major loop (I-IV-V)',
                    melody: 'Catchy, whistlable, repetitive',
                    orchestration: 'Drums, electric bass, brass section, piano'
                },
                variations: [
                    {
                        id: 'happy',
                        name: 'Happy',
                        scales: {
                            primary: 'C Major Pentatonic',
                            secondary: 'C Mixolydian'
                        },
                        chords: {
                            types: 'Major Triads, Dominant 7ths',
                            progressions: [
                                'C – F – G – C',
                                'C – Am – F – G',
                                'C – Bb – F – C'
                            ]
                        },
                        prompt: 'Create an upbeat, generic sitcom-style opening track at 130 BPM. Use a standard rock drum kit, clean electric guitar strumming bright major chords, and an active bass line. A brass section (trumpet, sax, trombone) should play catchy, punchy riffs between phrases. The melody should be whistled or played on a synth organ, feeling very sunny and optimistic. Keep the structure simple and repetitive. The energy is high, friendly, and inviting.'
                    }
                ]
            },
            {
                id: 'slapstick-chaos',
                title: 'Slapstick Chaos',
                moodUseCase: 'Total chaos, running around, falling down. Cartoon violence.',
                coreTheory: {
                    tempo: '150+ BPM',
                    rhythm: 'Galop rhythm (dum-da-da)',
                    harmony: 'Circus style, rapid modulation',
                    melody: 'Fast runs, trills, chromatic',
                    orchestration: 'Woodwinds, slide whistle, trumpet, tuba'
                },
                variations: [
                    {
                        id: 'chaotic',
                        name: 'Chaotic',
                        scales: {
                            primary: 'Major Scale (Fast)',
                            secondary: 'Chromatic'
                        },
                        chords: {
                            types: 'Major, Diminished passing chords',
                            progressions: [
                                'I – V (Rapid toggling)',
                                'Circle of Fifths sequences',
                                'Unexpected modulations'
                            ]
                        },
                        prompt: 'Compose a fast-paced slapstick comedy track at 160 BPM. Use a "circus galop" rhythm (dum-da-da, dum-da-da) with snare drum and tuba. The melody should be played by a trumpet or clarinet and involve fast runs and trills. Incorporate funny sound effects musically: trumpet wa-wa mutes, slide whistles, and woodblock hits. The dynamics should be loud and chaotic, shifting directions constantly. Suitable for a chase scene involving clowns or a chaotic mess in a kitchen.'
                    }
                ]
            },
            ...generatedComedySubcategories,
            ...moodExpansionComedy
        ]
    },
    {
        id: 'romance',
        title: 'Love / Romance',
        icon: Heart,
        description: 'Intimacy, passion, and emotional connection.',
        subcategories: [
            {
                id: 'first-date',
                title: 'First Date',
                moodUseCase: 'Awkward but sweet initial attraction. Butterflies in the stomach.',
                coreTheory: {
                    tempo: '90 BPM',
                    rhythm: 'Gentle, light brush drums or shaker',
                    harmony: 'Major 7ths, Add9 chords (avoid heavy dominance)',
                    melody: 'Hesitant, sweet, flirty',
                    orchestration: 'Piano, acoustic guitar, light strings, flute'
                },
                variations: [
                    {
                        id: 'sweet',
                        name: 'Sweet',
                        scales: {
                            primary: 'D Major',
                            secondary: 'D Lydian'
                        },
                        chords: {
                            types: 'Maj7, Add9, Sus2',
                            progressions: [
                                'D – Gmaj7 – D – Asus4',
                                'Bm7 – Gadd9 – D – A',
                                'G – D/F# – Em7 – A7'
                            ]
                        },
                        prompt: 'Create a gentle, romantic track for a "first date" scenario at 90 BPM. Use a soft acoustic piano playing warm Major 7th and Add9 chords. A light acoustic guitar strumming in the background adds texture. Introduce a sweet, hesitant melody on a violin or flute. The rhythm should be gentle, perhaps just a shaker or light brush drums. The feeling is awkward but hopeful, sweet, and intimate. Avoid heavy drama; keep it light and airy.'
                    }
                ]
            },
            {
                id: 'passionate-climax',
                title: 'Passionate Climax',
                moodUseCase: 'The big kiss or declaration of love. Overwhelming emotion.',
                coreTheory: {
                    tempo: '60-70 BPM',
                    rhythm: 'Rubato, swelling cymbals',
                    harmony: 'Rich, lush orchestration, suspensions',
                    melody: 'Sweeping, high strings, expressive vibrato',
                    orchestration: 'Full strings, french horns, harp, timpani swells'
                },
                variations: [
                    {
                        id: 'passionate',
                        name: 'Passionate',
                        scales: {
                            primary: 'Eb Major',
                            secondary: 'Eb Major Pentatonic'
                        },
                        chords: {
                            types: 'Major, Minor 7ths, Sus4 resolutions',
                            progressions: [
                                'Eb – Ab – Eb – Bb',
                                'Cm – Ab – Eb/G – Bb7',
                                'Ab – Bb – Cm – Db (Epic lift)'
                            ]
                        },
                        prompt: 'Produce a sweeping, passionate orchestral love theme at 65 BPM. The focus is on a lush, full string section playing rich harmonies with much vibrato. A solo cello should carry the emotional main melody initially, then passed to the violent section an octave higher. Use harp glissandos to transition between phrases. French horns should provide a warm, sustaining pad in the midrange. Build the dynamics to a powerful, tear-jerking climax (Hollywood Kiss moment) before fading out to a tender close.'
                    }
                ]
            },
            {
                id: 'bittersweet-parting',
                title: 'Bittersweet Parting',
                moodUseCase: 'Saying goodbye. Love exists, but circumstance separates them.',
                coreTheory: {
                    tempo: '70 BPM',
                    rhythm: 'Slow, steady, melancholic',
                    harmony: 'Major to Minor shifts (IV to iv)',
                    melody: 'Nostalgic, descending contours',
                    orchestration: 'Solo Piano, cello, oboe'
                },
                variations: [
                    {
                        id: 'sad',
                        name: 'Sad',
                        scales: {
                            primary: 'F Major / Minor mixed',
                            secondary: 'F Dorian'
                        },
                        chords: {
                            types: 'Major, Minor iv, Diminished',
                            progressions: [
                                'F – Bb – Bbm – F (Classic bittersweet)',
                                'Dm – Am – Bb – C',
                                'F – A7 – Dm – Bbm'
                            ]
                        },
                        prompt: 'Compose a bittersweet romantic track at 70 BPM. Focus on a solo piano with plenty of reverb. The chord progression should oscillate between a hopeful Major chord and a melancholic Minor iv chord (e.g., C Major to F Minor). A solo cello can enter later with a counter-melody that sits in the lower register. The mood is nostalgic – happy for the memories, but sad that it is ending. Keep the instrumentation sparse and intimate.'
                    }
                ]
            },
            ...generatedRomanceSubcategories,
            ...moodExpansionRomance
        ]
    },
    {
        id: 'sadness',
        title: 'Sadness',
        icon: CloudRain,
        description: 'Grief, loss, and somber reflection.',
        subcategories: [
            {
                id: 'emotional-piano-theme',
                title: 'Emotional Piano Theme',
                moodUseCase: 'Personal loss, reflection, or a bittersweet ending. Intimate and vulnerable.',
                coreTheory: {
                    tempo: '60-70 BPM',
                    rhythm: 'Slow, potentially free time (rubato)',
                    harmony: 'Minor, slow harmonic rhythm, suspensions',
                    melody: 'Simple, stepwise motion, expressive leaps',
                    orchestration: 'Solo Piano, optional solo cello or subtle string pad'
                },
                variations: [
                    {
                        id: 'emotional',
                        name: 'Emotional',
                        scales: {
                            primary: 'A Natural Minor',
                            secondary: 'A Harmonic Minor, A Dorian'
                        },
                        chords: {
                            types: 'Minor triads, Add6, Minor 7th',
                            progressions: [
                                'Am – F – C – G',
                                'Am – G – F – E',
                                'Am – Dm/F – E7sus4 – E7'
                            ]
                        },
                        prompt: 'Compose an intimate emotional piano piece at 65 BPM. The left hand should play broken chords or arpeggios while the right hand carries a simple, touching melody in A Minor. Focus on the use of "appoggiaturas" (leaning notes) to create tension and release. A solo cello can enter later with a counter-melody in the lower register. The mood is nostalgic – happy for the memories, but sad that it is ending.'
                    },
                    {
                        id: 'tragic',
                        name: 'Tragic',
                        scales: {
                            primary: 'G Minor',
                            secondary: 'G Phrygian'
                        },
                        chords: {
                            types: 'Minor, Diminished, Suspended',
                            progressions: [
                                'Gm – Eb – Cm – D',
                                'Gm – D/F# – Gm/F – Cm/Eb (Line Cliché)',
                                'Eb – D – Gm'
                            ]
                        },
                        prompt: 'Generate a tragic, sorrowful piano and string track. Use a slow tempo of 55 BPM. The harmony should focus on the relationship between the minor tonic and the minor subdominant (i - iv), creating a sense of hopelessness. Use a line cliché (descending chromatic bass line) to emphasize falling and loss. The dynamics should remain soft (piano to mezzo-piano), suggesting exhaustion and defeat.'
                    }
                ]
            },
            {
                id: 'grieving-process',
                title: 'Grieving Process',
                moodUseCase: 'Deep, heavy depression or mourning. A feeling of weight and emptiness.',
                coreTheory: {
                    tempo: '50-60 BPM',
                    rhythm: 'Very slow, sparse, heavy pauses',
                    harmony: 'Minor, drone-based, slow harmonic rhythm',
                    melody: 'Rare, low register, moaning',
                    orchestration: 'Solo Cello, dark ambient pad, low bass'
                },
                variations: [
                    {
                        id: 'heavy',
                        name: 'Heavy',
                        scales: {
                            primary: 'C Minor',
                            secondary: 'C Locrian'
                        },
                        chords: {
                            types: 'Minor, Suspended 2, Open 5ths',
                            progressions: [
                                'Cm (Held for long duration)',
                                'Cm – Ab/C – Cm',
                                'Cm – G5 – Cm'
                            ]
                        },
                        prompt: 'Create a deep, sorrowful track for grieving at 50 BPM. The centerpiece is a solo cello playing a slow, mourning melody in a minor key. Underneath, use a dark, ambient drone that adds weight and emptiness. The harmonic pacing should be extremely slow, lingering on chords for a long time. Silence implies hesitation and pain. Keep the production dry and close for the cello to maximize intimacy. The mood is heavy, isolated, and tearful.'
                    }
                ]
            },
            {
                id: 'tragic-loss',
                title: 'Tragic Loss',
                moodUseCase: 'A massive, nation-wide or life-altering tragedy. Noble and devastating.',
                coreTheory: {
                    tempo: '60 BPM',
                    rhythm: 'Steady, slow march of chords',
                    harmony: 'Minor with suspensions resolving downward',
                    melody: 'Rising intensity, collective section sound',
                    orchestration: 'Full String Adagio (Barber style)'
                },
                variations: [
                    {
                        id: 'noble',
                        name: 'Noble',
                        scales: {
                            primary: 'B Minor',
                            secondary: 'B Natural Minor'
                        },
                        chords: {
                            types: 'Sus4 resolving to Minor, Inversions',
                            progressions: [
                                'Bm – Em/B – Bm',
                                'G – F#sus4 – F# – Bm',
                                'Em – Bm/D – C#dim – F#'
                            ]
                        },
                        prompt: 'Compose a tragic "Adagio for Strings" style track at 60 BPM. Use a full string orchestra but start softly. The harmony involves suspension chords (sus4) resolving slowly downward into minor triads. The melody is a collective effort of the violin section, rising slowly in pitch and intensity. As the track builds, add double basses and timpani rolls for gravitas. The feeling is one of collective national tragedy or the death of a major character. Noble, yet devastating.'
                    }
                ]
            },
            ...generatedSadnessSubcategories,
            ...moodExpansionSadness
        ]
    },
    {
        id: 'fantasy',
        title: 'Fantasy / Magic',
        icon: Wand2,
        description: 'Wondrous, magical, and ethereal sounds.',
        subcategories: [
            {
                id: 'magical-discovery',
                title: 'Magical Discovery',
                moodUseCase: 'Finding a magical artifact or entering an enchanted forest. Full of sparkle and wonder.',
                coreTheory: {
                    tempo: '100 BPM',
                    rhythm: 'Flowing, rubato sections, light 3/4 or 4/4',
                    harmony: 'Lydian mode, chromatic mediants',
                    melody: 'Fluttering, trills, high register',
                    orchestration: 'Celesta, Harp, Flutes, Glockenspiel'
                },
                variations: [
                    {
                        id: 'mystical',
                        name: 'Mystical',
                        scales: {
                            primary: 'C Lydian',
                            secondary: 'C Harmonic Major, Whole Tone'
                        },
                        chords: {
                            types: 'Parallel Major chords, Sus2, Add9',
                            progressions: [
                                'C – D – E – D (Lydian lifts)',
                                'Cadd9 – G – D – F',
                                'C – Ab – Bb – C (Chromatic Mediants)'
                            ]
                        },
                        prompt: 'Create a magical discovery track at 100 BPM using the C Lydian mode. The instrumentation should sparkle: use celesta, glockenspiel, and harps playing rapid arpeggios. A flute or piccolo plays a playful, fluttering melody. The strings should play high-pitched, sustained harmonics. Use harmonic shifts between major chords that are a major third apart (e.g., C to E) to create a sense of other-worldly wonder.'
                    }
                ]
            },
            {
                id: 'supernatural-grandeur',
                title: 'Supernatural Grandeur',
                moodUseCase: 'Ancient rituals, massive summons, or divine intervention. Powerful and overwhelming.',
                coreTheory: {
                    tempo: '110 BPM',
                    rhythm: 'Tribal 6/8 or driving triplets',
                    harmony: 'Open 5ths, modal interchange, Phrygian',
                    melody: 'Chanting, long sustained calls',
                    orchestration: 'Heavy Percussion (Taiko), Choir, Ethnic Bowed Strings'
                },
                variations: [
                    {
                        id: 'ritual',
                        name: 'Ritual',
                        scales: {
                            primary: 'D Minor / Phrygian',
                            secondary: 'D Harmonic Minor'
                        },
                        chords: {
                            types: 'Open Power Chords (1-5), Suspended',
                            progressions: [
                                'Dm – Bb/D – C/D – Dm',
                                'Dm – Eb – Dm (Phrygian)',
                                'Choir Chants on D5'
                            ]
                        },
                        prompt: 'Generate a powerful supernatural ritual track at 110 BPM in 6/8 time. The drums (taiko or frame drums) play a hypnotic, driving triplet rhythm. A choir chants in a made-up language or open vowels (Ah, Oh) with increasing intensity. Use ethnic bowed instruments like an Erhu or Cello for a raw, guttural melody line. The harmony stays grounded in a single key drone. The energy builds to a trance-like state, suitable for a summoning scene.'
                    }
                ]
            },
            {
                id: 'mystical-forest',
                title: 'Mystical Forest',
                moodUseCase: 'Ancient woods, glowing flora, peaceful but mysterious.',
                coreTheory: {
                    tempo: '70 BPM',
                    rhythm: 'Fluid, unhurried, nature-like',
                    harmony: 'Dorian mode, nature sounds',
                    melody: 'Haunting, breathy, lower register flute',
                    orchestration: 'Woodwinds (Duduk/Flute), Ambient pads, Nature SFX'
                },
                variations: [
                    {
                        id: 'ancient',
                        name: 'Ancient',
                        scales: {
                            primary: 'A Dorian',
                            secondary: 'A Aeolian'
                        },
                        chords: {
                            types: 'Minor 7ths, Add11, Quartal Harmony',
                            progressions: [
                                'Am7 – D/A – Am7',
                                'Am – Em – G – D',
                                'Am – C – D – Am (Dorian feel)'
                            ]
                        },
                        prompt: 'Compose a mystical forest theme at 70 BPM. Use the Dorian mode for an ancient, folk-like feel. The main instrument is a wooden flute or duduk playing a haunting melody. Ambient pads and recorded nature sounds (birds, rustling leaves) fill the background. Percussion is light and wooden (log drums). The strings swell gently like the wind. The atmosphere is ancient, calm, and slightly secretive.'
                    }
                ]
            },
            ...generatedFantasySubcategories,
            ...moodExpansionFantasy
        ]
    },
    {
        id: 'inspirational',
        title: 'Inspirational',
        icon: Sun,
        description: 'Uplifting, motivating, and triumphant.',
        subcategories: [
            {
                id: 'corporate-success',
                title: 'Corporate Success / Tech',
                moodUseCase: 'Commercials, showcases, and modern achievement.',
                coreTheory: {
                    tempo: '120 BPM',
                    rhythm: 'Straight beat, driving kick',
                    harmony: 'Uplifting Pop chords (I-V-vi-IV)',
                    melody: 'Repetitive, delayed guitar, piano',
                    orchestration: 'Muted Electric Guitar, Piano, Strings, Synth'
                },
                variations: [
                    {
                        id: 'productive',
                        name: 'Productive',
                        scales: {
                            primary: 'E Major',
                            secondary: 'E Major Pentatonic'
                        },
                        chords: {
                            types: 'Major Triads, Add9',
                            progressions: [
                                'E – B – C#m – A',
                                'E – A – E – B',
                                'C#m – A – E – B'
                            ]
                        },
                        prompt: 'Create a modern inspirational corporate track at 120 BPM. Start with a delayed electric guitar riff (dotted 8th notes) and a simple piano melody. The chord progression should be the classic "uplifting" Pop progression (Major I-V-vi-IV). Add a driving kick drum and clap beat. As it builds, add a string section playing long, soaring notes. The vibe is productive, optimistic, and forward-thinking, suitable for a tech commercial or success montage.'
                    }
                ]
            },
            {
                id: 'overcoming-odds',
                title: 'Overcoming Odds',
                moodUseCase: 'Sports, personal struggle, and final victory. Builds from small to huge.',
                coreTheory: {
                    tempo: 'Slow build to 100 BPM',
                    rhythm: 'Steady crescendo, cinematic drums',
                    harmony: 'Major, rising bass lines',
                    melody: 'Simple start, soaring climax',
                    orchestration: 'Piano intro -> Full Orchestra'
                },
                variations: [
                    {
                        id: 'triumphant',
                        name: 'Triumphant',
                        scales: {
                            primary: 'Eb Major',
                            secondary: 'Eb Lydian (at climax)'
                        },
                        chords: {
                            types: 'Major, Inversions (Ascending bass)',
                            progressions: [
                                'Eb – Eb/G – Ab – Bb',
                                'Cm – Ab – Eb – Bb',
                                'Ab – Bb – Cm – Db (Climax)'
                            ]
                        },
                        prompt: 'Compose an "overcoming the odds" track that builds from silence to triumph. Start at a slow tempo with a lonely piano melody. Gradually introduce a cello, then violins, and finally full brass and percussion. The tempo can accelerate slightly as the energy grows. The chords should move upwards, creating a sense of lifting. By the climax, the music should be massive and celebratory, representing victory after struggle.'
                    }
                ]
            },
            {
                id: 'sunrise-hope',
                title: 'Sunrise Hope',
                moodUseCase: 'New beginnings, nature, and peace.',
                coreTheory: {
                    tempo: '70-80 BPM',
                    rhythm: 'Gentle, breathing dynamics',
                    harmony: 'Major, suspended chords, pedal points',
                    melody: 'Rising, leisurely',
                    orchestration: 'Horn solo, warm strings, synth pad'
                },
                variations: [
                    {
                        id: 'warm',
                        name: 'Warm',
                        scales: {
                            primary: 'F Major',
                            secondary: 'F Major Pentatonic'
                        },
                        chords: {
                            types: 'Major, Sus2, Major 7',
                            progressions: [
                                'F – Csus4 – C – F',
                                'F – Dm7 – Bbadd9 – C',
                                'Bb – F/A – Gm7 – C'
                            ]
                        },
                        prompt: 'Generate a warm, hopeful sunrise theme at 75 BPM. Feature a noble French Horn solo playing a rising melody. The accompaniment is lush, warm string pads and a subtle synth drone for depth. Use an acoustic guitar to gently strum major chords. The feeling is calm, serene, and full of promise, like seeing the sun come up over a horizon. Dynamic swells should be gentle and breathing.'
                    }
                ]
            },
            ...generatedInspirationalSubcategories,
            ...moodExpansionInspirational
        ]
    },
    {
        id: 'gaming',
        title: 'Gaming',
        icon: Gamepad2,
        description: 'Interactive, loop-friendly tracks for video games.',
        subcategories: [
            {
                id: 'boss-battle-phase-1',
                title: 'Boss Battle (Phase 1)',
                moodUseCase: 'Strategic, tense, building energy. The fight has just begun.',
                coreTheory: {
                    tempo: '140-160 BPM',
                    rhythm: 'Driving but steady, clear loop points',
                    harmony: 'Minor, Phrygian mode, repetitive riffs',
                    melody: 'Menacing, low brass or synth bass',
                    orchestration: 'Hybrid Orchestra, Heavy Percussion, Synths'
                },
                variations: [
                    {
                        id: 'strategic',
                        name: 'Strategic',
                        scales: {
                            primary: 'D Phrygian',
                            secondary: 'D Aeolian'
                        },
                        chords: {
                            types: 'Power Chords, Minor Triads',
                            progressions: [
                                'Dm - Bb - C - Dm',
                                'Dm - Eb - Dm (Phrygian toggle)',
                                'Ostinato Riffs'
                            ]
                        },
                        prompt: 'Compose a Phase 1 boss battle theme at 150 BPM. The energy should be high but controlled, encouraging focus. Use a driving rhythmic string section playing spiccato. The melody should be carried by a bold brass section or heavy synthesizer lead. Keep the harmony looping (e.g., i-VI-VII-i) to maintain momentum without resolving too early. Ensure the track loops seamlessly.'
                    }
                ]
            },
            ...generatedGamingSubcategories,
            ...moodExpansionGaming
        ]
    },
    {
        id: 'scifi',
        title: 'Sci-Fi / Futuristic',
        icon: Rocket,
        description: 'Space, technology, and futuristic soundscapes.',
        subcategories: [
            {
                id: 'space-exploration',
                title: 'Space Exploration',
                moodUseCase: 'Drifting through the cosmos. Wonder and vastness.',
                coreTheory: {
                    tempo: '60-80 BPM',
                    rhythm: 'Floating, free time, delay pulses',
                    harmony: 'Lydian, Quartal harmony (4ths)',
                    melody: 'Wide intervals, slow attack',
                    orchestration: 'Synthesizers, lush pads, metallic textures'
                },
                variations: [
                    {
                        id: 'vast',
                        name: 'Vast',
                        scales: { primary: 'C Lydian', secondary: 'Whole Tone' },
                        chords: {
                            types: 'Sus2, Major 7#11',
                            progressions: ['C - D/C - Cmaj7 - F#dim']
                        },
                        prompt: 'Create a vast space exploration track at 70 BPM. Use lush, wide synth pads (Jupiter-8 style) to create a bed of sound. A bell-like lead plays a slow melody using the Lydian mode. Add subtle, glitchy electronic percussion in the background. The feeling should be of awe and isolation in the deep universe.'
                    }
                ]
            },
            ...generatedSciFiSubcategories,
            ...moodExpansionSciFi
        ]
    },
    {
        id: 'epic',
        title: 'Epic / Trailer',
        icon: Trophy,
        description: 'Massive, cinematic, and larger-than-life.',
        subcategories: [
            {
                id: 'heroic-trailer',
                title: 'Heroic Trailer',
                moodUseCase: 'The main hero rises. Huge impact and emotional power.',
                coreTheory: {
                    tempo: '100 BPM (Slow Build)',
                    rhythm: 'Massive percussion hits, triplet ostinatos',
                    harmony: 'Power chords, rising bass lines',
                    melody: 'Simple, powerful, brass-led',
                    orchestration: 'Full Orchestra, Hybrid Percussion, Choir'
                },
                variations: [
                    {
                        id: 'blockbuster',
                        name: 'Blockbuster',
                        scales: { primary: 'D Minor', secondary: 'D Dorian' },
                        chords: {
                            types: 'Power Chords, Sus4',
                            progressions: ['Dm - Bb - C - Dm (Epic loop)']
                        },
                        prompt: 'Compose a massive Hollywood trailer track. Start with a low rhythmic pulse and a single piano note. Gradually build by adding staccato strings doing a spiccato ostinato. Then, bring in huge "Trailer Braaams" (low brass blasts) and massive percussion hits on every downbeat. The climax should feature a full choir and soaring french horns playing a simple, heroic melody. End with a sudden silence and a final deep boom.'
                    }
                ]
            },
            ...generatedEpicSubcategories,
            ...moodExpansionEpic
        ]
    },
    {
        id: 'mystery',
        title: 'Mystery / Investigation',
        icon: HelpCircle,
        description: 'Curiosity, clues, and uncovering secrets.',
        subcategories: [
            {
                id: 'noir-detective',
                title: 'Noir Detective',
                moodUseCase: 'A rainy street, a private eye, and a clue.',
                coreTheory: {
                    tempo: '80 BPM (Swing)',
                    rhythm: 'Brush drums, walking bass',
                    harmony: 'Minor 7th, Diminished, Jazz extensions',
                    melody: 'Muted Trumpet, low Saxophone',
                    orchestration: 'Jazz Quartet + Strings'
                },
                variations: [
                    {
                        id: 'classic',
                        name: 'Classic',
                        scales: { primary: 'A Harmonic Minor', secondary: 'Blues Scale' },
                        chords: {
                            types: 'Min7, Dim7, Alt Dom',
                            progressions: ['Am - Dm - E7 - Am']
                        },
                        prompt: 'Generate a classic Film Noir detective theme at 80 BPM with a light swing feel. Use a double bass playing a walking line and brush drums. A muted trumpet plays a smoky, melancholic melody. The harmony should be dark and jazzy, using minor 7th and diminished chords. Background string swells add a layer of cinematic tension. The mood is lonely, cool, and mysterious.'
                    }
                ]
            },
            ...generatedMysterySubcategories,
            ...moodExpansionMystery
        ]
    },
    {
        id: 'surreal',
        title: 'Surreal / Dreamscape',
        icon: Cloud,
        description: 'Abstract, floating, and dream-like experiences.',
        subcategories: [
            {
                id: 'lucid-dream',
                title: 'Lucid Dream',
                moodUseCase: 'Realizing you are dreaming. Control mixed with wonder.',
                coreTheory: {
                    tempo: 'Free Time / Flowing',
                    rhythm: 'Undefined, washed out, gentle pulse',
                    harmony: 'Lydian, Major 7ths, quartal voicing',
                    melody: 'Fragmented, echoing',
                    orchestration: 'Synth Pads, Piano, Reverse FX'
                },
                variations: [
                    {
                        id: 'floating',
                        name: 'Floating',
                        scales: { primary: 'Db Lydian', secondary: 'Whole Tone' },
                        chords: {
                            types: 'Maj7#11, Sus2',
                            progressions: ['Db - Eb - F - Eb/G (Planing)']
                        },
                        prompt: 'Create a surreal lucid dream track. Use a wash of lush synthesizer pads that constantly shift in timbre. A piano plays a fragmented, echoing melody that feels like a distant memory. Use the Lydian mode to create a sense of brightness and wonder, but avoid resolving to a tonic chord to maintain the floating feeling. Add reverse cymbal sounds and light wind chimes.'
                    }
                ]
            },
            ...generatedSurrealSubcategories,
            ...moodExpansionSurreal
        ]
    },
    {
        id: 'ritual',
        title: 'Ritual / Occult',
        icon: Flame,
        description: 'Dark, ancient, and ceremonial atmospheres.',
        subcategories: [
            {
                id: 'summoning',
                title: 'Summoning Ritual',
                moodUseCase: 'Calling forth an ancient entity. Dread and power.',
                coreTheory: {
                    tempo: '60 BPM (Heavy)',
                    rhythm: 'Repetitive deep drums, slow march',
                    harmony: 'Pedal point drone, Phrygian dominant',
                    melody: 'Chanted vocals, low brass',
                    orchestration: 'Choir, Taiko Drums, Low Strings'
                },
                variations: [
                    {
                        id: 'ancient',
                        name: 'Ancient',
                        scales: { primary: 'E Phrygian Dominant', secondary: 'Double Harmonic' },
                        chords: {
                            types: 'Power chords, Minor/Major clashes',
                            progressions: ['E5 (Drone) - F/E - G#dim - E']
                        },
                        prompt: 'Compose a dark ritual summoning track at 60 BPM. Center it around a deep, continuous bass drone on E. A male choir chants a repetitive, low melody in unison. Heavy percussion (taiko or frame drums) plays a slow, hypnotic heartbeat rhythm. Use the Phrygian Dominant scale to give it an ancient, Middle Eastern feel. As the track builds, add dissonant string clusters and growing intensity.'
                    }
                ]
            },
            ...generatedRitualSubcategories,
            ...moodExpansionRitual
        ]
    },
    {
        id: 'industrial',
        title: 'Industrial / Mechanical',
        icon: Factory,
        description: 'Cold, machine-driven, and metallic tension.',
        subcategories: [
            {
                id: 'factory-floor',
                title: 'Factory Floor',
                moodUseCase: 'Endless production, automatons, heavy machinery.',
                coreTheory: {
                    tempo: '120 BPM',
                    rhythm: 'Strict, quantized, metallic clanks',
                    harmony: 'Atonal, chromatic riffs, no functional harmony',
                    melody: ' rhythmic motifs, synthesizer sequences',
                    orchestration: 'Sampler (Metal hits), Distortion, Synths'
                },
                variations: [
                    {
                        id: 'assembly',
                        name: 'Assembly',
                        scales: { primary: 'Chromatic', secondary: 'Diminished' },
                        chords: {
                            types: 'No chords, just riffs and intervals',
                            progressions: ['Riff based: E - F - E - Bb']
                        },
                        prompt: 'Generate a mechanical industrial track at 120 BPM. The rhythm should be grid-perfect and relentless, using samples of metal clinging, steam hisses, and heavy pistons. A distorted bass synthesizer plays a repetitive, chromatic riff. There is no emotional melody; the focus is entirely on the "groove" of the machines. The atmosphere is cold, precise, and powerful.'
                    }
                ]
            },
            ...generatedIndustrialSubcategories,
            ...moodExpansionIndustrial
        ]
    },
    {
        id: 'mythic',
        title: 'Mythic / Legendary',
        icon: Shield,
        description: 'Ancient, heroic, and larger than history.',
        subcategories: [
            {
                id: 'ancient-prophecy',
                title: 'Ancient Prophecy',
                moodUseCase: 'The foretelling of a great event. Solemn and weighty.',
                coreTheory: {
                    tempo: '60-90 BPM (Slow)',
                    rhythm: 'Heavy accents, war drums',
                    harmony: 'Open 5ths, Aeolian mode, Drone',
                    melody: 'Low brass, simple and noble',
                    orchestration: 'Full Orchestra, Deep Percussion, Male Choir'
                },
                variations: [
                    {
                        id: 'origin',
                        name: 'Origin Story',
                        scales: { primary: 'D Aeolian', secondary: 'Dorian' },
                        chords: {
                            types: 'Power Chords (No 3rds)',
                            progressions: ['Dm - C - Bb - Am (Descending)']
                        },
                        prompt: 'Compose a mythic origin story track. Use a slow, heavy tempo (70 BPM) with massive percussion hits on the downbeats. A low brass section plays a simple, noble melody using the Aeolian mode. The harmony should feel ancient, relying on open fifths and octaves rather than major/minor chords. A deep male choir hums a drone in the background. The feeling is one of history, weight, and destiny.'
                    }
                ]
            },
            ...generatedMythicSubcategories,
            ...moodExpansionMythic
        ]
    },
    {
        id: 'minimalist',
        title: 'Minimalist Pulse',
        icon: Clock,
        description: 'Hypnotic, repeating patterns that slowly evolve.',
        subcategories: [
            {
                id: 'time-lapse',
                title: 'Time Lapse',
                moodUseCase: 'Passage of time, busy city, changing seasons.',
                coreTheory: {
                    tempo: '110 BPM (Steady)',
                    rhythm: 'Constant 8th notes, arpeggios',
                    harmony: 'Static, very slow harmonic rhythm',
                    melody: 'Layered ostinatos',
                    orchestration: 'Piano, Mallets, Plucked Strings'
                },
                variations: [
                    {
                        id: 'evolution',
                        name: 'Evolution',
                        scales: { primary: 'G Major', secondary: 'Mixolydian' },
                        chords: {
                            types: 'Triads, Sus2',
                            progressions: ['G - C/G (Pedal Point)']
                        },
                        prompt: 'Create a minimalist pulse track suitable for a time-lapse. Start with a single piano playing a steady stream of 8th notes. Gradually add a marimba playing a counter-pattern in a different rhythmic grouping (e.g., groups of 3). The harmony should stay on a G Major chord for a long time, shifting only the bass note. Keep the dynamics building very slowly over time. The mood is neutral but forward-moving.'
                    }
                ]
            },
            ...generatedMinimalistSubcategories,
            ...moodExpansionMinimalist
        ]
    },
    {
        id: 'glitch',
        title: 'Glitch / Fractured',
        icon: AlertTriangle,
        description: 'Broken, digital, and unstable sound worlds.',
        subcategories: [
            {
                id: 'system-crash',
                title: 'System Crash',
                moodUseCase: 'Simulation breaking down, digital chaos.',
                coreTheory: {
                    tempo: '140 BPM (Erratic)',
                    rhythm: 'Stutters, skips, random pauses',
                    harmony: 'Atonal clusters, bitcrushed noise',
                    melody: 'Fragmented samples',
                    orchestration: 'Glitch Synths, Distorted Drums, Noise'
                },
                variations: [
                    {
                        id: 'error',
                        name: 'Fatal Error',
                        scales: { primary: 'Chromatic', secondary: 'Whole Tone' },
                        chords: {
                            types: 'Clusters, Random Intervals',
                            progressions: ['No functional harmony']
                        },
                        prompt: 'Generate a glitchy, fractured track representing a system crash. Use a high tempo (140 BPM) but interrupt the beat frequently with silence and "skipping CD" effects. The sounds should be bitcrushed and distorted. Use random bursts of white noise and sine wave beeps. There is no melody, only texture and rhythm. The feeling is anxiety-inducing and chaotic, like a computer virus taking over.'
                    }
                ]
            },
            ...generatedGlitchSubcategories,
            ...moodExpansionGlitch
        ]
    },
    {
        id: 'edm',
        title: 'EDM / Experimental',
        icon: Activity,
        description: 'High-energy, rhythm-driven electronic music. Rare, experimental, and cinematic sub-genres.',
        subcategories: [
            {
                id: 'dark-experimental',
                title: 'Dark Experimental',
                moodUseCase: 'Underground, ritualistic, driven by dark atmosphere.',
                coreTheory: {
                    tempo: '90-120 BPM',
                    rhythm: 'Hypnotic, broken beat',
                    harmony: 'Phrygian, Dissonant',
                    melody: 'Minimal, repetitive',
                    orchestration: 'Distorted Kicks, Drone Layers'
                },
                variations: [
                    {
                        id: 'ritual-techno',
                        name: 'Ritual Techno',
                        scales: { primary: 'Phrygian', secondary: 'Locrian' },
                        chords: {
                            types: 'Power Chords',
                            progressions: ['i - bII - i']
                        },
                        prompt: 'Create a dark ritual techno track at 110 BPM. The kick should be massive and distorted, creating a hypnotic pulse. Use broken, syncopated rhythms on metal percussion. A low, droning bass texture provides the foundation. There is no traditional melody, only evolving textural layers and occasional chanting samples. The mood is oppressive and trance-like.'
                    }
                ]
            },
            ...generatedEDMSubcategories,
            ...moodExpansionEDM
        ]
    },
    {
        id: 'celestial',
        title: 'Celestial / Cosmic',
        icon: Star,
        description: 'Peaceful, vast, and infinite space atmospheres.',
        subcategories: [
            {
                id: 'deep-space',
                title: 'Deep Space',
                moodUseCase: 'Floating in the void. Beauty and isolation.',
                coreTheory: {
                    tempo: 'Free Time / 60 BPM',
                    rhythm: 'Swelling pads, no percussion',
                    harmony: 'Lydian, Major 7#11, luscious chords',
                    melody: 'Slow rising lines, huge reverb',
                    orchestration: 'Synthesizers, Choir, Strings'
                },
                variations: [
                    {
                        id: 'starlight',
                        name: 'Starlight',
                        scales: { primary: 'Eb Lydian', secondary: 'Major Pentatonic' },
                        chords: {
                            types: 'Maj9, Maj7#11',
                            progressions: ['Eb - F/Eb - Bb/D']
                        },
                        prompt: 'Compose a celestial track for deep space exploration. Use a massive, shimmering reverb on all instruments. The main element is a slow-attack synthesizer pad playing a Lydian progression (I - II). A distant female choir sings high, wordless notes. Occasional wind chimes or bell sounds sparkle in the background. The music should feel infinite, peaceful, and awe-inspiring, with no sharp attacks or percussive beats.'
                    }
                ]
            },
            ...generatedCelestialSubcategories,
            ...moodExpansionCelestial
        ]
    }
];
