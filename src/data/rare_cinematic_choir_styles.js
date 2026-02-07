
export const rareCinematicChoirStyles = [
    {
        id: 'rare-epic-heroic',
        title: 'Rare: Epic / Heroic',
        moodUseCase: 'Titan wars, ascensions, and final stands.',
        coreTheory: {
            tempo: '110-140 BPM',
            range: 'Full SATB + Power Belting',
            harmony: 'Epic Major/Minor, Power Chords',
            rhythm: 'Driving, Massive Percussion',
            melody: 'Anthemic, Soaring, Leitmotif',
            orchestration: 'Full Orchestra, Taiko Drums, Brass Wall',
            language: 'Proto-Language / Latin'
        },
        variations: [
            {
                id: 'titan-war',
                name: 'Titan War Choir',
                scales: { primary: 'D Minor', secondary: 'Phrygian Dominant' },
                chords: { types: 'Sus4, Power Chords', progressions: ['i - VI - III - VII', 'i - bII - i'] },
                prompt: 'Titan War Choir: Massive SATB choir with thunderous percussion. 110 BPM. Key of D Minor. Aggressive chanting. The texture is thick and heavy, simulating the footsteps of giants.'
            },
            {
                id: 'godslayer',
                name: 'Godslayer Choir',
                scales: { primary: 'Harmonic Minor', secondary: 'Diminished' },
                chords: { types: 'Dim7, Minor(maj7)', progressions: ['i - V7 - i', 'i - #ivdim - V'] },
                prompt: 'Godslayer Choir: Intense, staccato vocal stabs. 130 BPM. Harmonic Minor scales. Dark and powerful. Focus on the battle between mortal and divine.'
            },
            {
                id: 'empire-rise',
                name: 'Empire Rise Choir',
                scales: { primary: 'Mixolydian', secondary: 'Major' },
                chords: { types: 'Major Triads', progressions: ['I - bVII - IV - I', 'I - V - I'] },
                prompt: 'Empire Rise Choir: Majestic, soaring soprano lines over deep bass drones. 90 BPM. Triumphant mood. Evokes the building of a thousand-year kingdom.'
            },
            {
                id: 'eternal-victory',
                name: 'Eternal Victory Choir',
                scales: { primary: 'Major Scale', secondary: 'Lydian' },
                chords: { types: 'Major Add9', progressions: ['I - II - V - I', 'I - IV - I'] },
                prompt: 'Eternal Victory Choir: Uplifting, major key fanfare. 100 BPM. Bright brass accompaniment. Heroic resolution after a long battle.'
            },
            {
                id: 'ascension',
                name: 'Ascension Choir',
                scales: { primary: 'Lydian Mode', secondary: 'Major Pentatonic' },
                chords: { types: 'Suspended 2 & 4', progressions: ['I - II - I', 'I - V - IV - I'] },
                prompt: 'Ascension Choir: Rising melodic lines, building intensity. 120 BPM. Lydian mode. Divine power. The sound of a soul rising to a higher plane.'
            },
            {
                id: 'colossal-army',
                name: 'Colossal Army Choir',
                scales: { primary: 'Natural Minor', secondary: 'Dorian' },
                chords: { types: 'Open 5ths', progressions: ['i - VII - VI - V', 'Stomp - Clap Rhythm'] },
                prompt: 'Colossal Army Choir: Thousands of voices chanting in unison. 80 BPM. Heavy foot-stomp rhythm. Intimidating display of military might.'
            },
            {
                id: 'immortal-kings',
                name: 'Immortal Kings Choir',
                scales: { primary: 'Aeolian', secondary: 'Harmonic Minor' },
                chords: { types: 'Minor Triads', progressions: ['i - v - i', 'i - III - VII - i'] },
                prompt: 'Immortal Kings Choir: Noble, slow-moving chords. 70 BPM. Regal and ancient atmosphere. The sound of rulers who have lived forever.'
            },
            {
                id: 'celestial-battle',
                name: 'Celestial Battle Choir',
                scales: { primary: 'Melodic Minor', secondary: 'Whole Tone' },
                chords: { types: 'Augmented, Minor', progressions: ['i - V+ - i', 'Chromatic descents'] },
                prompt: 'Celestial Battle Choir: Fast-paced, flying vocal runs. 140 BPM. High energy, aerial combat feel. Angels fighting in the sky.'
            },
            {
                id: 'legendary-oath',
                name: 'Legendary Oath Choir',
                scales: { primary: 'Dorian', secondary: 'Aeolian' },
                chords: { types: 'Minor', progressions: ['i - IV - i', 'i - VII - i'] },
                prompt: 'Legendary Oath Choir: Solemn, sworn melody. 60 BPM. Deep male voices. Serious and binding. A pact made in blood and stone.'
            },
            {
                id: 'final-stand',
                name: 'Final Stand Choir',
                scales: { primary: 'Minor to Major', secondary: 'Harmonic Minor' },
                chords: { types: 'Minor, Picardy Third', progressions: ['i - VI - iv - V', 'Final Major Chord'] },
                prompt: 'Final Stand Choir: Desperate, emotional crescendo. 95 BPM. Minor key with major resolution. Bravery in the face of certain death.'
            }
        ]
    },
    {
        id: 'rare-dark-ritual',
        title: 'Rare: Dark / Ritual / Horror',
        moodUseCase: 'Forbidden rites, cults, and demons.',
        coreTheory: {
            tempo: 'Slow / Doom (50-80 BPM)',
            range: 'Basso Profundo / Shrieks',
            harmony: 'Atonal, Tritones, Clusters',
            rhythm: 'Slow, Doom-like, Irregular',
            melody: 'Fragmented, chanting, non-melodic',
            orchestration: 'Bone percussion, Drones, Low Strings',
            language: 'Cursed / Ancient Dialects'
        },
        variations: [
            {
                id: 'abyss-ritual',
                name: 'Abyss Ritual Choir',
                scales: { primary: 'Locrian', secondary: 'Chromatic' },
                chords: { types: 'Cluster, Tritone', progressions: ['Static Drone', 'Chromatics'] },
                prompt: 'Abyss Ritual Choir: Deep, guttural chanting from the void. 50 BPM. Drones and dissonance. The sound of summoning something from the deep.'
            },
            {
                id: 'blood-moon',
                name: 'Blood Moon Choir',
                scales: { primary: 'Wholetone', secondary: 'Diminished' },
                chords: { types: 'Augmented', progressions: ['Strange Modulations', 'Floating dissonance'] },
                prompt: 'Blood Moon Choir: Eerie female wailing. 60 BPM. Harmonics and unstable pitch. Unsettling screams under a red sky.'
            },
            {
                id: 'forbidden-temple',
                name: 'Forbidden Temple Choir',
                scales: { primary: 'Phrygian Dominant', secondary: 'Double Harmonic' },
                chords: { types: 'Major w/ b2', progressions: ['I - bII - I', 'I - vii - I'] },
                prompt: 'Forbidden Temple Choir: Echoing chants in a vast space. 70 BPM. Phrygian Dominant scale. Ancient evil lurking in the stone walls.'
            },
            {
                id: 'necromancer',
                name: 'Necromancer Choir',
                scales: { primary: 'Reverse Audio', secondary: 'Atonal' },
                chords: { types: 'N/A (Texture)', progressions: ['Glissando', 'Cluster Swell'] },
                prompt: 'Necromancer Choir: Whispers and reverse vocals. Free time. Manipulated textures. Raising the dead with forbidden syllables.'
            },
            {
                id: 'infernal-mass',
                name: 'Infernal Mass Choir',
                scales: { primary: 'Octatonic', secondary: 'Locrian' },
                chords: { types: 'Polychords', progressions: ['Cmaj / F#maj (Tritone)', 'Dissonant Stabs'] },
                prompt: 'Infernal Mass Choir: Anti-choir singing twisted hymns. 66 BPM. Distortion and heavy bass. Hellish distorted organ accompaniment.'
            },
            {
                id: 'shadow-cult',
                name: 'Shadow Cult Choir',
                scales: { primary: 'Minor Pentatonic', secondary: 'Chromatic' },
                chords: { types: 'Unison', progressions: ['Rhythmic Chanting', 'Breath Sounds'] },
                prompt: 'Shadow Cult Choir: Hushed, rhythmic breathing and chanting. 90 BPM. Minimalist and creepy. Stealthy ritual in the dark.'
            },
            {
                id: 'cursed-cathedral',
                name: 'Cursed Cathedral Choir',
                scales: { primary: 'Harmonic Minor', secondary: 'Dorian #4' },
                chords: { types: 'Minor Maj7', progressions: ['i - V - i', 'Walking Bass'] },
                prompt: 'Cursed Cathedral Choir: Distorted organ and dissonant choir. 55 BPM. Gothic horror atmosphere. A warped version of a sacred service.'
            },
            {
                id: 'demon-invocation',
                name: 'Demon Invocation Choir',
                scales: { primary: 'Chromatic', secondary: 'Whole Tone' },
                chords: { types: 'Cluster', progressions: ['Cluster Builds', 'Shouting'] },
                prompt: 'Demon Invocation Choir: Aggressive, shouting vocals. 110 BPM. Chaotic rhythm. Summoning force with pure aggression and noise.'
            },
            {
                id: 'occult-whisper',
                name: 'Occult Whisper Choir',
                scales: { primary: 'No Pitch', secondary: 'Texture' },
                chords: { types: 'Noise', progressions: ['Panning L-R', 'Volume Swells'] },
                prompt: 'Occult Whisper Choir: Layered whispers panning left and right. No pitch. 80 BPM pulse. Psychological terror. Voices inside the head.'
            },
            {
                id: 'apocalypse',
                name: 'Apocalypse Choir',
                scales: { primary: 'All Pitch', secondary: 'Aleatoric' },
                chords: { types: 'The Alarm Chord', progressions: ['Shepard Tone', 'Rising Tension'] },
                prompt: 'Apocalypse Choir: Massive, wall-of-sound screams and chords. 100 BPM. End of the world intensity. Fire and brimstone.'
            }
        ]
    },
    {
        id: 'rare-ethereal-angelic',
        title: 'Rare: Ethereal / Angelic',
        moodUseCase: 'Divine, astral, and luminous atmospheres.',
        coreTheory: {
            tempo: 'Free / Slow (60-90 BPM)',
            range: 'High Soprano / Boy Treble',
            harmony: 'Complete Major, Lydian, Suspended',
            rhythm: 'Free-flowing, no beat, floating',
            melody: 'Legato, Arcing, Slow',
            orchestration: 'Harp, Glass, Shimmer Reverb',
            language: 'Vowels / Light Language'
        },
        variations: [
            {
                id: 'seraphim-light',
                name: 'Seraphim Light Choir',
                scales: { primary: 'Major Scale', secondary: 'Lydian' },
                chords: { types: 'Major Triads', progressions: ['I - IV - V - I', 'I - Vsus4 - I'] },
                prompt: 'Seraphim Light Choir: Blindingly bright high harmonies. Free time. Major chords. Pure holiness. A choir of burning light.'
            },
            {
                id: 'astral-ascension',
                name: 'Astral Ascension Choir',
                scales: { primary: 'Lydian', secondary: 'Major Pentatonic' },
                chords: { types: 'Major 7, 9', progressions: ['I - II - I - II', 'Major 3rd movements'] },
                prompt: 'Astral Ascension Choir: Floating vocals with reverb. 80 BPM. Spacey and vast. Leaving earth to travel the stars.'
            },
            {
                id: 'heavenfall',
                name: 'Heavenfall Choir',
                scales: { primary: 'Major', secondary: 'Mixolydian' },
                chords: { types: 'Sus2, Sus4', progressions: ['Descending Bass', 'I - V/7 - vi - IV'] },
                prompt: 'Heavenfall Choir: Descending melodic lines. 70 BPM. Sad but beautiful. Graceful descent from the clouds.'
            },
            {
                id: 'crystal-halo',
                name: 'Crystal Halo Choir',
                scales: { primary: 'Ionian', secondary: 'Lydian' },
                chords: { types: 'Add9, Add11', progressions: ['Static Major', 'Shimmering Texture'] },
                prompt: 'Crystal Halo Choir: Shimmering, glass-like vocal tones. 90 BPM. High frequencies. Fragile beauty like spun glass.'
            },
            {
                id: 'celestial-veil',
                name: 'Celestial Veil Choir',
                scales: { primary: 'Major Pentatonic', secondary: 'Whole Tone' },
                chords: { types: 'Open 4ths', progressions: ['Mist-like Chords', 'Soft Pads'] },
                prompt: 'Celestial Veil Choir: Muted, soft choir behind a mist. 60 BPM. Mystery and divinity. Concealing a great power.'
            }
        ]
    }
];
