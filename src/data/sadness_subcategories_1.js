export const sadnessSubcategories1 = [
    {
        id: 'funeral-procession',
        title: 'Funeral Procession',
        moodUseCase: 'Saying goodbye at a graveside. Collective mourning.',
        coreTheory: {
            tempo: '50-60 BPM',
            rhythm: 'Slow, steady march (Death March)',
            harmony: 'Minor, Plagal Cadences (Amen)',
            melody: 'Trumpet or Low Brass, noble',
            orchestration: 'Brass Section, Snare (muffled), Organ'
        },
        variations: [
            {
                id: 'requiem',
                name: 'Requiem',
                scales: {
                    primary: 'D Minor',
                    secondary: 'D Aeolian'
                },
                chords: {
                    types: 'Minor, Minor 7',
                    progressions: ['Dm - Gm - Dm', 'Dm - A7 - Dm', 'Bb - C - Dm']
                },
                prompt: 'Compose a solemn Funeral Procession theme at 55 BPM. Use a muffled snare drum playing a slow military march. The low brass (tubas, trombones) play a heavy, noble chord progression in D Minor. A solo trumpet plays a mournful "Last Post" style melody with lots of reverb. The harmony should feel traditional and respectful (Requiem style).'
            }
        ]
    },
    {
        id: 'rainy-window',
        title: 'Rainy Window',
        moodUseCase: 'Watching the rain, feeling lonely and isolated.',
        coreTheory: {
            tempo: '70-80 BPM',
            rhythm: 'Light, pitter-patter',
            harmony: 'Minor 9, Jazz influence',
            melody: 'Piano, wandering',
            orchestration: 'Solo Piano, Rain SFX, Light Strings'
        },
        variations: [
            {
                id: 'solitude',
                name: 'Solitude',
                scales: {
                    primary: 'C Minor',
                    secondary: 'C Dorian'
                },
                chords: {
                    types: 'Minor 9, Minor 11',
                    progressions: ['Cm9 - Fm9 - Cm9', 'Cm - Abmaj7 - G7alt', 'Drifting']
                },
                prompt: 'Create a "Rainy Day" jazz-piano track at 75 BPM. The piano should sound soft and felted (close mic). Play extended chords like Minor 9ths and 11ths to create a rich, contemplative mood. The melody is sparse and improvisational. Add the sound of rain against a window and distant thunder. The feeling is lonely but cozy.'
            }
        ]
    },
    {
        id: 'heartbreak-ballad',
        title: 'Heartbreak Ballad',
        moodUseCase: 'Post-breakup depression. Raw emotion.',
        coreTheory: {
            tempo: '65 BPM',
            rhythm: 'Slow 4/4 or 6/8',
            harmony: 'Pop Ballad style, IV-I progressions',
            melody: 'Belting, high intensity later',
            orchestration: 'Piano, Strings, Drums (later)'
        },
        variations: [
            {
                id: 'broken',
                name: 'Broken',
                scales: {
                    primary: 'F Major (Sad context)',
                    secondary: 'D Minor'
                },
                chords: {
                    types: 'Major, Sus4',
                    progressions: ['Bb - F - C - Dm', 'Dm - Bb - F - C', 'Slow build']
                },
                prompt: 'Compose a Heartbreak Ballad at 65 BPM. Start with just a piano playing a sad but catchy chord progression (Dm - Bb - F - C). A cello joins in for the second verse. The final chorus should be huge, with full drums and crashing cymbals, representing the release of pain. The mood is devastated but cathartic (Adele style).'
            }
        ]
    },
    {
        id: 'fallen-hero',
        title: 'Fallen Hero',
        moodUseCase: 'The main character dies to save others. Noble sacrifice.',
        coreTheory: {
            tempo: '60 BPM',
            rhythm: 'Orchestral swell',
            harmony: 'Major to Minor modulation',
            melody: 'French Horn, rising',
            orchestration: 'French Horns, Strings, Timpani'
        },
        variations: [
            {
                id: 'sacrifice',
                name: 'The Sacrifice',
                scales: {
                    primary: 'Eb Major',
                    secondary: 'C Minor'
                },
                chords: {
                    types: 'Maj7, Minor/Major shifts',
                    progressions: ['Eb - Cm - Ab - Bb', 'Ab - Bb - Cm - G7', 'Eb - Fm - Eb']
                },
                prompt: 'Generate a "Fallen Hero" theme at 60 BPM. Use a noble French Horn melody that starts brave but becomes tragic. The string section provides a warm, thick bed of harmony. Use a modulation from Major to the relative Minor (Eb Major to C Minor) to signify the loss. The track should end with a single, high violin note fading to silence.'
            }
        ]
    },
    {
        id: 'war-torn-village',
        title: 'War-Torn Village',
        moodUseCase: 'Walking through the aftermath of a battle. Desolation.',
        coreTheory: {
            tempo: 'Free Time',
            rhythm: 'None',
            harmony: 'Dissonant, glissandos',
            melody: 'Duduk, Solo Voice (wailing)',
            orchestration: 'Duduk, Drone, Wind'
        },
        variations: [
            {
                id: 'aftermath',
                name: 'Aftermath',
                scales: {
                    primary: 'Harmonic Minor',
                    secondary: 'Double Harmonic'
                },
                chords: {
                    types: 'Drone based',
                    progressions: ['Static bass', 'Microtonal shifts', 'A Harmonic Minor context']
                },
                prompt: 'Compose a desolated "War Aftermath" track. Use a Duduk or ethnic flute playing a sorrowful, crying melody with pitch bends. The background is a low, gritty drone. There is no rhythm, just the sound of wind blowing through ruins. Occasionally, a distant, reverberant metallic impact sounds. The mood is empty, hopeless, and tragic.'
            }
        ]
    },
    {
        id: 'lost-child',
        title: 'Lost Child',
        moodUseCase: 'Innocence lost or a child missing. Fragile and small.',
        coreTheory: {
            tempo: '80 BPM',
            rhythm: 'Simple, unsure',
            harmony: 'Simple Major/Minor',
            melody: 'Music box, Celesta, simple tune',
            orchestration: 'Music Box, Solo Violin, Silence'
        },
        variations: [
            {
                id: 'wanderer',
                name: 'Little Wanderer',
                scales: {
                    primary: 'C Major',
                    secondary: 'A Minor'
                },
                chords: {
                    types: 'Triads',
                    progressions: ['C - Am - F - G', 'C - Em - Am', 'Stops']
                },
                prompt: 'Create a "Lost Child" theme at 80 BPM. Use a Music Box sound playing a simple, innocent nursery rhyme melody. Underneath, a solo violin plays long, sad notes in the low register to provide context. The music should stop and start, sounding unsure and frightened. Intimate and heartbreaking.'
            }
        ]
    },
    {
        id: 'old-photographs',
        title: 'Old Photographs',
        moodUseCase: 'Nostalgia for better times. Sepia-toned memories.',
        coreTheory: {
            tempo: '90 BPM',
            rhythm: 'Waltz or gentle folk strum',
            harmony: 'Major, sweet',
            melody: 'Acoustic Guitar, Piano',
            orchestration: 'Acoustic Guitar, Piano, Strings'
        },
        variations: [
            {
                id: 'memories',
                name: 'Memories',
                scales: {
                    primary: 'G Major',
                    secondary: 'G Ionian'
                },
                chords: {
                    types: 'Major 7, Add9',
                    progressions: ['G - C - G - D', 'Em - C - G - D', 'Plagal endings']
                },
                prompt: 'Compose a nostalgic track called "Old Photographs" at 90 BPM. Use an acoustic guitar fingerpicking a gentle pattern in G Major. A piano plays a sweet, simple melody in the upper register. The mood isn\'t devastatingly sad, just wistful and longing for the past. Use warm, rich strings for the chorus.'
            }
        ]
    },
    {
        id: 'grey-sky-drone',
        title: 'Grey Sky Drone',
        moodUseCase: 'Depression, numbness, lack of feeling.',
        coreTheory: {
            tempo: 'N/A',
            rhythm: 'N/A',
            harmony: 'Static, Cluster',
            melody: 'None',
            orchestration: 'Ambient Pads, Tape loops'
        },
        variations: [
            {
                id: 'numb',
                name: 'Numb',
                scales: {
                    primary: 'Aeolian',
                    secondary: 'Locrian'
                },
                chords: {
                    types: 'Cluster chords',
                    progressions: ['Static']
                },
                prompt: 'Generate an ambient "Depression" drone. The sound should be thick, grey, and static. Use processed tape loops of orchestral instruments slowed down significantly. The harmony shouldn\'t move; it just sits in a minor/modal cluster comfortably. The goal is to convey a sense of numbness and time standing still.'
            }
        ]
    },
    {
        id: 'failed-dream',
        title: 'Failed Dream',
        moodUseCase: 'Realizing you will never achieve your goal. Disappointment.',
        coreTheory: {
            tempo: '60 BPM',
            rhythm: 'Slow, dragging',
            harmony: 'Minor, descending bass',
            melody: 'Oboe, melancholic',
            orchestration: 'Oboe, Strings, Piano'
        },
        variations: [
            {
                id: 'regret',
                name: 'Regret',
                scales: {
                    primary: 'B Minor',
                    secondary: 'B Harmonic Minor'
                },
                chords: {
                    types: 'Minor, Diminished',
                    progressions: ['Bm - F#/A# - D/A - E/G# (Lament bass)', 'Em - Bm - F#7']
                },
                prompt: 'Compose a "Regret" theme at 60 BPM. Use the classic "Lament Bass" progression (chromatically descending bass line from Tonic to Dominant). An Oboe plays a mournful, lyrical melody over the top. The piano comped simple chords. The feeling is one of bitter disappointment and resignation.'
            }
        ]
    },
    {
        id: 'pet-loss',
        title: 'Pet Loss',
        moodUseCase: 'Saying goodbye to a faithful companion. Pure, innocent grief.',
        coreTheory: {
            tempo: '70 BPM',
            rhythm: 'Gentle, heartbeat',
            harmony: 'Major (bittersweet)',
            melody: 'Clarinet or Flute, simple',
            orchestration: 'Clarinet, Acoustic Guitar, Light Strings'
        },
        variations: [
            {
                id: 'rainbow-bridge',
                name: 'Rainbow Bridge',
                scales: {
                    primary: 'D Major',
                    secondary: 'Mixolydian'
                },
                chords: {
                    types: 'Major, Add9',
                    progressions: ['D - A - G - D', 'Bm - G - D - A', 'D - G - D']
                },
                prompt: 'Create a touching tribute track for a lost pet at 70 BPM. Use acoustic instruments like guitar and clarinet for a warm, organic sound. The melody in D Major should be simple and loving, not overly dramatic. Think of it as a "thank you" to the animal. A soft, slow shaker rhythm mimics a heartbeat fading. Sweet, sad, and pure.'
            }
        ]
    }
];
