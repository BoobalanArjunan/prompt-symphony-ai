export const comedySubcategories1 = [
    {
        id: 'quirky-detective',
        title: 'Quirky Detective',
        moodUseCase: 'A bumbling detective solving a low-stakes mystery. Light and plodding.',
        coreTheory: {
            tempo: '100-110 BPM',
            rhythm: 'Pizzicato walking bass, staccato off-beats',
            harmony: 'Minor/Diminished but non-threatening',
            melody: 'Bassoon or Bass Clarinet, playful',
            orchestration: 'Clarinet, Bassoon, Pizzicato Strings, Woodblocks'
        },
        variations: [
            {
                id: 'clumsy-sleuth',
                name: 'Clumsy Sleuth',
                scales: {
                    primary: 'A Harmonic Minor',
                    secondary: 'A Blues'
                },
                chords: {
                    types: 'Diminished 7, Minor 6',
                    progressions: ['Am - E7 - Am - E7', 'Am - F#dim - F - E', 'Chromatic tiptoeing']
                },
                prompt: 'Compose a quirky detective theme at 105 BPM. Use a prominent pizzicato bass line that "walks" through a mystery. A bassoon or bass clarinet plays a melody with grace notes and staccato jumps. Use woodblocks for a ticking, thinking effect. The harmony should use diminished chords for mystery but resolve playfully to keep it comedic and lighthearted.'
            }
        ]
    },
    {
        id: 'clown-carnival',
        title: 'Clown Carnival',
        moodUseCase: 'Circus absurdity, slipping on banana peels.',
        coreTheory: {
            tempo: '140-160 BPM',
            rhythm: 'Oom-pah, Oom-pah (2/4 time)',
            harmony: 'Major, circus chromaticism',
            melody: 'Calliope organ, Trumpet wails',
            orchestration: 'Tuba, Trumpet, Slide Whistle, Snare'
        },
        variations: [
            {
                id: 'big-top',
                name: 'Big Top',
                scales: {
                    primary: 'C Major',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Major, Dominant 7',
                    progressions: ['C - G - C - G', 'I - V7 (rapid)', 'Chromatic runs']
                },
                prompt: 'Create a circus-style comedy track at 150 BPM. Establish a strong "Oom-Pah" rhythm with Tuba and Snare drum. A bright trumpet plays a fast, acrobatic melody with trills. heavily feature "funny" sound effects like slide whistles, bike horns, and ratchet percussion. The harmony should be simple Major chords but with fast chromatic passing tones to simulate running around wildly.'
            }
        ]
    },
    {
        id: 'awkward-silence',
        title: 'Awkward Silence',
        moodUseCase: 'Someone said something wrong. Crickets chirping.',
        coreTheory: {
            tempo: 'Free / Slow',
            rhythm: 'Stops and starts',
            harmony: 'Unresolved, sparse',
            melody: 'Short, tentative plucks',
            orchestration: 'Pizzicato Violin, Cricket SFX, Timbale rimshot'
        },
        variations: [
            {
                id: 'cringe',
                name: 'Cringe Moment',
                scales: {
                    primary: 'G Lydian (Sparse)',
                    secondary: 'Whole Tone'
                },
                chords: {
                    types: 'Augmented, Suspended',
                    progressions: ['G... (silence)... G#dim', 'Random pluck', 'Cricket sound']
                },
                prompt: 'Generate an "Awkward Silence" cue. No steady beat. Play a single, short pizzicato string note followed by three seconds of silence. Add the sound of crickets chirping. Then, a single woodblock hit. The harmony should feel "stuck" or waiting for a resolution that never comes. Use dry, close-mic production to enhance the feeling of intimacy and embarrassment.'
            }
        ]
    },
    {
        id: 'cartoon-chase',
        title: 'Cartoon Chase',
        moodUseCase: 'Cat chasing mouse. Violent but funny.',
        coreTheory: {
            tempo: '160+ BPM',
            rhythm: 'Galop, frantic 16ths',
            harmony: 'Diminished, modulating rapidly',
            melody: 'Xylophone runs, fast strings',
            orchestration: 'Full Orchestra (Cartoon style), Xylophone'
        },
        variations: [
            {
                id: 'zany',
                name: 'Zany Pursuit',
                scales: {
                    primary: 'Octatonic',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Dim7, Aug',
                    progressions: ['Cdim - C#dim - Ddim', 'Circle of 5ths (Fast)', 'Stabs']
                },
                prompt: 'Compose a frantic cartoon chase at 170 BPM. Use a xylophone to play rapid, up-and-down scales. The brass section plays loud "hits" on off-beats. Use a "slide" effect on a trombone or violin to mimic falling. The music should change key every few bars (modulate) to keep up with the chaos on screen. High energy, zany, and un-serious.'
            }
        ]
    },
    {
        id: 'tropical-holiday-fail',
        title: 'Tropical Holiday Fail',
        moodUseCase: 'Relaxing vacation goes wrong. Too hot, bad hotel.',
        coreTheory: {
            tempo: '120 BPM',
            rhythm: 'Bossa Nova or Calypso (clumsy)',
            harmony: 'Major, slightly out of tune',
            melody: 'Steel drums, Ukulele',
            orchestration: 'Steel Pan, Ukulele, Shaker, Tuba'
        },
        variations: [
            {
                id: 'sunburn',
                name: 'Sunburn',
                scales: {
                    primary: 'F Major',
                    secondary: 'Mixolydian'
                },
                chords: {
                    types: 'Indeterminate/Sloppy',
                    progressions: ['F - C7 - F', 'Island Cliché (I-IV-V)', 'Wrong note end']
                },
                prompt: 'Create a clumsy tropical island theme at 120 BPM. Use a Bossa Nova rhythm but make it sound slightly "drunk" or stumbling. A steel drum plays a happy melody, but occasionally hits a wrong note. The ukulele strums cheerfully. The vibe is "trying to have fun but everything is falling apart". Ending with a "womp-womp" brass sound is effective.'
            }
        ]
    },
    {
        id: 'office-prank',
        title: 'Office Prank',
        moodUseCase: 'Mischief in a mundane setting. Boredom mixed with fun.',
        coreTheory: {
            tempo: '100 BPM',
            rhythm: 'Typewriter beats, clock ticks',
            harmony: 'Pentatonic, light',
            melody: 'Whistling, light synth',
            orchestration: 'Percussion (Office supplies), Marimba, Whistle'
        },
        variations: [
            {
                id: 'boredom',
                name: '9 to 5',
                scales: {
                    primary: 'C Major Pentatonic',
                    secondary: 'C Mixolydian'
                },
                chords: {
                    types: 'Major 6',
                    progressions: ['C6 - G7 - C6', 'C - F - C - G', 'Simple vamp']
                },
                prompt: 'Compose a light background track for an office setting at 100 BPM. Use sounds of typewriters, mouse clicks, and staplers as the percussion section. A marimba plays a simple, waiting-room style pattern. A cheerful whistling melody enters, representing the prankster. The music is repetitive, mundane, but secretly mischievous.'
            }
        ]
    },
    {
        id: 'drunken-stumble',
        title: 'Drunken Stumble',
        moodUseCase: 'Character is dizzy or intoxicated. World is spinning.',
        coreTheory: {
            tempo: 'Slow, rubato',
            rhythm: 'Swaying, dragging',
            harmony: 'Pitch bends, sliding chords',
            melody: 'Trombone glissandos, hiccups',
            orchestration: 'Trombone, Tuba, Accordion'
        },
        variations: [
            {
                id: 'tipsy',
                name: 'Tipsy',
                scales: {
                    primary: 'Whole Tone',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Augmented',
                    progressions: ['C - C# - D (Sliding)', 'falling 5ths', 'Unresolved']
                },
                prompt: 'Generate a "Drunken Stumble" track using a slow, swaying rhythm. Use a trombone with a plunger mute to create "wah-wah" vocal-like sounds. The accordion plays chords that slide in and out of tune (pitch bends). Occasional percussive "hiccup" sounds. The harmony should feel unstable, using the whole-tone scale to simulate dizziness.'
            }
        ]
    },
    {
        id: 'elevator-muzak',
        title: 'Elevator Muzak',
        moodUseCase: 'Intentionally bad/boring background music.',
        coreTheory: {
            tempo: '110 BPM',
            rhythm: 'Cheap Bossa Nova preset',
            harmony: 'Excessively cheesy Major 7ths',
            melody: 'Flute or Synth Organ (Cheesy)',
            orchestration: 'Low-quality General MIDI sounds'
        },
        variations: [
            {
                id: 'lobby',
                name: 'Lobby',
                scales: {
                    primary: 'Eb Major',
                    secondary: 'Eb Lydian'
                },
                chords: {
                    types: 'Maj7, 13th chords',
                    progressions: ['Ebmaj7 - Fm7 - Bb13 - Ebmaj7', 'Circle of 5ths (Standard)', 'Vamp']
                },
                prompt: 'Compose a piece of "Elevator Music" (Muzak) at 110 BPM. Use a cheesy, preset-sounding Bossa Nova drum beat. A synthesized flute plays a generic, overly pleasant melody. chords should be rich jazz chords (Major 7ths, 13ths) but played in a very stiff, robotic way. The goal is to verify the feeling of waiting in a hotel lobby or elevator.'
            }
        ]
    },
    {
        id: 'sneaking-home-late',
        title: 'Sneaking Home Late',
        moodUseCase: 'Trying not to wake the parents/spouse. Tiptoeing.',
        coreTheory: {
            tempo: '90 BPM',
            rhythm: 'Soft, short steps',
            harmony: 'Minor, staccato',
            melody: 'Pizzicato strings, silence',
            orchestration: 'Pizzicato Strings, Woodwinds, Floor Creaks'
        },
        variations: [
            {
                id: 'tiptoe',
                name: 'Tiptoe',
                scales: {
                    primary: 'E Minor',
                    secondary: 'Chromatic'
                },
                chords: {
                    types: 'Minor, Diminished',
                    progressions: ['Em - F#dim - Em', 'Em - dis... (stop)', 'Ascending semitones']
                },
                prompt: 'Create a "Sneaking" track at 90 BPM. Use pizzicato strings playing a "tiptoeing" scale pattern (short, detached notes). Every 4 bars, insert a sound effect of a floorboard creaking or a cat meowing, followed by a sudden stop in the music. The harmony is E Minor but light and playful, not scary. Use a bass clarinet for the low "sneaking" notes.'
            }
        ]
    },
    {
        id: 'chicken-chase',
        title: 'Chicken Chase',
        moodUseCase: 'Farmyard chaos. Bluegrass style comedy.',
        coreTheory: {
            tempo: '160 BPM',
            rhythm: 'Train beat, boom-chick',
            harmony: 'Major, Bluesy',
            melody: 'Banjo rolls, Fiddle runs',
            orchestration: 'Banjo, Fiddle, Spoons, Jaw Harp'
        },
        variations: [
            {
                id: 'barnyard',
                name: 'Barnyard',
                scales: {
                    primary: 'G Major Blues',
                    secondary: 'Mixolydian'
                },
                chords: {
                    types: 'Major, Dom 7',
                    progressions: ['G - C - G - D', 'G - G7 - C - Cm', 'I-IV-I-V']
                },
                prompt: 'Compose a fast "Barnyard Chase" at 160 BPM. Use a bluegrass style with fast banjo fingerpicking and a "train beat" on the snare. A fiddle plays a frantic, repeating melody. Add "Jaw Harp" boings and spoon rhythms for a rural comedic feel. The energy is high, chaotic, and rustic.'
            }
        ]
    }
];
