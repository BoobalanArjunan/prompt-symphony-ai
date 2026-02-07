import { Mic2, Scroll, Church, Skull, Users, Zap } from 'lucide-react';
import { rareCinematicChoirStyles } from './rare_cinematic_choir_styles';
import {
    generatedChoirSubcategories,
    classicalChoirGen,
    sacredChoirGen,
    cinematicChoirGen,
    folkChoirGen,
    contemporaryChoirGen,
    advancedChoirGen
} from './choir_generator';

export const choirGenres = [
    {
        id: 'classical-choir',
        title: 'Classical Choir',
        icon: Scroll,
        description: 'Traditional choral music from Renaissance to Modern Classical.',
        subcategories: [
            {
                id: 'renaissance',
                title: 'Renaissance Polyphony',
                moodUseCase: 'Sacred, pure, complex interweaving voices.',
                coreTheory: {
                    tempo: '60-80 BPM (Tactus)',
                    range: 'SATB (Soprano, Alto, Tenor, Bass)',
                    harmony: 'Strict counterpoint, modal harmony',
                    rhythm: 'Free-flowing, tactus (pulse), no strict meter',
                    melody: 'Stepwise, arch-shaped lines',
                    orchestration: 'A Cappella (Voices only)',
                    language: 'Latin'
                },
                variations: [
                    {
                        id: 'motet',
                        name: 'Sacred Motet',
                        scales: {
                            primary: 'Dorian Mode',
                            secondary: 'Mixolydian'
                        },
                        chords: {
                            types: 'Triads (Root position), Suspensions',
                            progressions: ['i - VII - i', 'i - v - i', 'Plagal Cadences']
                        },
                        prompt: 'Compose a Renaissance motet for an SATB a cappella choir. The texture should be polyphonic with imitative entries (one voice starts, others follow). Use modal harmony (Dorian or Mixolydian) with pure, perfect intervals. The rhythm is smooth and flowing, governed by the natural stress of the Latin text. The mood is divine, introspective, and spatially resonant like a cathedral.'
                    }
                ]
            },
            {
                id: 'baroque',
                title: 'Baroque Chorale',
                moodUseCase: 'Structured, ornamental, grand.',
                coreTheory: {
                    tempo: '80-100 BPM',
                    range: 'SATB + Organ/Orchestra',
                    harmony: 'Functional Tonal Harmony (Major/Minor)',
                    rhythm: 'Driving, steady meter, ornamented',
                    melody: 'Hymn-like but ornamented',
                    orchestration: 'Pipe Organ / Chamber Strings',
                    language: 'German or Latin'
                },
                variations: [
                    {
                        id: 'chorale-cantata',
                        name: 'Chorale Cantata',
                        scales: {
                            primary: 'Major Scale',
                            secondary: 'Melodic Minor'
                        },
                        chords: {
                            types: 'Traditional Triads & 7ths',
                            progressions: ['I - IV - V - I', 'ii - V - I', 'Circle of Fifths']
                        },
                        prompt: 'Generate a Baroque chorale in the style of Bach. The choir sings a sturdy, homophonic hymn tune in four distinct parts (SATB). The harmony is rich with passing notes and suspensions. Accompany with a pipe organ or small baroque orchestra playing active, running counterpoint lines. The tempo is steady and majestic. Express religious fervor and order.'
                    }
                ]
            },
            {
                id: 'romantic',
                title: 'Romantic Choral',
                moodUseCase: 'Emotional, lush, dramatic dynamic swells.',
                coreTheory: {
                    tempo: '60-80 BPM (Rubato)',
                    range: 'Large SSAATTBB Chorus',
                    harmony: 'Chromatic, rich 7ths and 9ths',
                    rhythm: 'Rubato, flexible tempo',
                    melody: 'Lyrical, soaring, wide range',
                    orchestration: 'Full Romantic Orchestra',
                    language: 'German, French, or Russian'
                },
                variations: [
                    {
                        id: 'romantic-part-song',
                        name: 'Lush Part Song',
                        scales: { primary: 'Major', secondary: 'Chromatic Mediant' },
                        chords: { types: 'Maj9, Dom13, Dim7', progressions: ['I - biii - I', 'I - V7 - I'] },
                        prompt: 'Create a deeply emotional Romantic choral work for a large mixed choir (SSAATTBB). The harmony is lush and thick, with frequent modulations and chromatic chords. Use extreme dynamic contrast—swelling from a whisper to a fortissimo climax. The melody should be lyrical and soaring, carried by the sopranos. Use rubato to ebb and flow with the emotion. The mood is longing and passionate.'
                    }
                ]
            },
            {
                id: 'modern-classical',
                title: 'Modern Classical',
                moodUseCase: ' dissonant, complex, avant-garde.',
                coreTheory: {
                    tempo: 'Free / Complex',
                    range: 'Extreme ranges, extended techniques',
                    harmony: 'Atonal, Pandiatonic, or Dissonant Clusters',
                    rhythm: 'Complex, changing meters',
                    melody: 'Angular, disjunct',
                    orchestration: 'Acappella / Avant-garde',
                    language: 'Nonsense syllables or Abstract text'
                },
                variations: [
                    {
                        id: 'tone-cluster',
                        name: 'Tone Cluster Study',
                        scales: { primary: 'Chromatic', secondary: 'Quarter-Tone' },
                        chords: { types: 'Tone Clusters', progressions: ['Static', 'Glissando'] },
                        prompt: 'Compose a Modern Classical choral piece focusing on "Tone Clusters". The choir sings extremely close harmonies (seconds and microtones) creating a shimmering, wall-of-sound texture. There is no traditional melody; the focus is on the evolving color of the chord clusters. Use dynamic swells to move the sound around the room. The mood is eerie, suspended, and intellectual.'
                    }
                ]
            },
            {
                id: 'polyphonic',
                title: 'Complex Polyphony',
                moodUseCase: 'Independent movement of many voices.',
                coreTheory: {
                    tempo: '50-80 BPM',
                    range: 'Split Choirs (Double Choir)',
                    harmony: 'Dense, independent lines',
                    rhythm: 'Polyrhythmic overlap',
                    melody: 'Interweaving, layered',
                    orchestration: 'Acappella / Minimal Organ',
                    language: 'Latin'
                },
                variations: [
                    {
                        id: 'spem-in-alium',
                        name: 'Massive Polyphony',
                        scales: { primary: 'Mixolydian', secondary: 'Ionian' },
                        chords: { types: 'Major Triads', progressions: ['I - IV - I', 'Dense Voice Leading'] },
                        prompt: 'Generate a massive polyphonic work for 40 distinct voices (8 choirs of 5). The texture is incredibly dense, with waves of sound washing over the listener. Use traditional consonance (major/minor chords) but achieved through the complex layering of many simple lines. The effect should be overwhelming and angelic, like a host of angels singing.'
                    }
                ]
            },
            ...classicalChoirGen
        ]
    },
    {
        id: 'sacred-choir',
        title: 'Sacred / Religious',
        icon: Church,
        description: 'Chants, hymns, and spiritual choral traditions.',
        subcategories: [
            {
                id: 'gregorian',
                title: 'Gregorian Chant',
                moodUseCase: 'Monastic, meditative, unison.',
                coreTheory: {
                    tempo: 'Free (Speech Rhythm)',
                    range: 'Unison Male Voices (Monks)',
                    harmony: 'None (Monophonic) / Drone',
                    rhythm: 'Free speech-rhythm',
                    melody: 'Stepwise, chant contours',
                    orchestration: 'None (or Drone)',
                    language: 'Latin'
                },
                variations: [
                    {
                        id: 'monastic-chant',
                        name: 'Monastic Chant',
                        scales: { primary: 'Dorian', secondary: 'Phrygian' },
                        chords: { types: 'Unison', progressions: ['Melodic Contour Only'] },
                        prompt: 'Create a pure Gregorian Chant. A unison male choir (monks) sings a single, flowing melodic line in the Dorian mode. There is no harmony and no steady beat; the rhythm follows the natural flow of the Latin prayer text. Use a large, stone cathedral reverb to create a sense of vast, holy space. Simple, ancient, and meditative.'
                    }
                ]
            },
            {
                id: 'latin-mass',
                title: 'Latin Mass',
                moodUseCase: 'High ceremony, Kyrie, Sanctus, Agnus Dei.',
                coreTheory: {
                    tempo: 'Largo (40-60 BPM)',
                    range: 'SATB Choir + Organ',
                    harmony: 'Traditional Triads',
                    rhythm: 'Slow, processional',
                    melody: 'Simple, chant-like',
                    orchestration: 'Organ accompaniment',
                    language: 'Latin'
                },
                variations: [
                    {
                        id: 'kyrie-eleison',
                        name: 'Kyrie Eleison',
                        scales: {
                            primary: 'Aeolian (Natural Minor)',
                            secondary: 'Harmonic Minor'
                        },
                        chords: {
                            types: 'Minor Triads, Picardy Thirds',
                            progressions: ['i - iv - V - i', 'i - VII - III']
                        },
                        prompt: 'Compose a "Kyrie Eleison" for a church choir. The tempo is slow and pleading. The choir sings in homophony (moving together chords) with occasional simple counterpoint. The organ provides a deep, sustaining bass foundation. The harmony is minor and solemn, resolving to a major "Picardy Third" at the end. The mood is one of repentance and mercy.'
                    }
                ]
            },
            {
                id: 'orthodox',
                title: 'Orthodox Choir',
                moodUseCase: 'Deep bass, rich harmony, Slavic tradition.',
                coreTheory: {
                    tempo: 'Largo (40-60 BPM)',
                    range: 'SATB with Basso Profundo (Low Bass)',
                    harmony: 'Rich, close, massive triads',
                    rhythm: 'Slow, majestic',
                    melody: 'Simple, heavy',
                    orchestration: 'A Cappella',
                    language: 'Old Church Slavonic'
                },
                variations: [
                    {
                        id: 'basso-profundo',
                        name: 'Orthodox Great Doxology',
                        scales: { primary: 'Harmonic Minor', secondary: 'Phrygian' },
                        chords: { types: 'Triads (Low Inversions)', progressions: ['i - VI - VII - i', 'Plagal Cadences'] },
                        prompt: 'Generate a Russian Orthodox choral piece. The most critical element is the "Basso Profundo"—basses singing incredibly low notes (A1 or lower) to ground the harmony. The upper voices move in parallel thirds and sixths. The tempo is extremely slow and reverent. The texture is thick and warm. No instruments are used. The mood is heavy, holy, and immensely powerful.'
                    }
                ]
            },
            {
                id: 'gospel',
                title: 'Gospel Choir',
                moodUseCase: 'Joyful, energetic, soul-stirring.',
                coreTheory: {
                    tempo: 'Upbeat (120-140 BPM)',
                    range: 'Belting, Call and Response',
                    harmony: 'Blues scales, Dominant 7ths, Suspensions',
                    rhythm: 'Syncopated, heavy backbeat (clapping)',
                    melody: 'Soulful, improvised runs',
                    orchestration: 'Hammond Organ, Drums',
                    language: 'English'
                },
                variations: [
                    {
                        id: 'joyful-praise',
                        name: 'Joyful Praise',
                        scales: { primary: 'Major Blues', secondary: 'Mixolydian' },
                        chords: { types: 'Dom7, Sus4', progressions: ['I7 - IV7 - V7', 'Turnarounds'] },
                        prompt: 'Create an energetic Gospel Choir track. The choir sings with full-throated power and vibrato. Use a "Call and Response" structure between a solo vocalist and the full group. The harmony draws on Blues and Soul, featuring Dominant 7th chords and sliding pitch bends. Include hand claps on beats 2 and 4. The mood is ecstatic, celebratory, and high-energy.'
                    }
                ]
            },
            {
                id: 'anglican',
                title: 'Anglican Choir',
                moodUseCase: 'Traditional English cathedral service.',
                coreTheory: {
                    tempo: 'Moderate (80-100 BPM)',
                    range: 'SATB (Boy Trebles)',
                    harmony: 'Clean, vertical chords',
                    rhythm: 'Hymn-like meter',
                    melody: 'Syllabic, clear',
                    orchestration: 'Pipe Organ',
                    language: 'English'
                },
                variations: [
                    {
                        id: 'cathedral-anthem',
                        name: 'Cathedral Anthem',
                        scales: { primary: 'Major', secondary: 'Mixolydian' },
                        chords: { types: 'Major Triads, Add2', progressions: ['I - V - vi - IV', 'English Cadences'] },
                        prompt: 'Compose an Anglican Cathedral anthem. Use the specific sound of boy sopranos (trebles) for the top line—pure, vibrato-less, and piercing. The organ plays a gentle, supporting role. The harmony is diatonic and very clean ("English Pastoral" style). The text setting is syllabic and clear. The atmosphere is formal, bright, and polished.'
                    }
                ]
            },
            ...sacredChoirGen
        ]
    },
    {
        id: 'cinematic-choir',
        title: 'Cinematic Choir',
        icon: Skull,
        description: 'Epic, trailer, and film score choral styles.',
        subcategories: [
            {
                id: 'epic-trailer',
                title: 'Epic Trailer Choir',
                moodUseCase: 'Battle scenes, massive climaxes.',
                coreTheory: {
                    tempo: 'Fast / Aggressive (140+ BPM)',
                    range: 'Full SATB + 8vb Bass',
                    harmony: 'Power Chords, Minor key staccato',
                    rhythm: 'Aggressive staccato chanting',
                    melody: 'Short, repetitive motifs',
                    orchestration: 'Epic Percussion, Brass, Strings',
                    language: 'Pseudo-Latin (Epic Sounding)'
                },
                variations: [
                    {
                        id: 'battle-chant',
                        name: 'Staccato Battle Chant',
                        scales: {
                            primary: 'Aeolian / Phrygian',
                            secondary: 'Harmonic Minor'
                        },
                        chords: {
                            types: 'Power Chords (open 5ths), Minor',
                            progressions: ['i - VI - i', 'i - bII - i', 'Staccato stabs']
                        },
                        prompt: 'Generate a massive "Trailer Music" choir. The choir chants aggressive, staccato syllables in pseudo-Latin on top of a driving orchestral percussion beat. The harmony emphasizes minor chords and open fifths for power. The dynamics are consistently Fortissimo (ff). Vocalists should shout/chant rather than sing lyrical lines. The mood is war-like, energetic, and huge.'
                    }
                ]
            },
            {
                id: 'dark-cinematic',
                title: 'Dark Cinematic',
                moodUseCase: 'Gothic, brooding, villains.',
                coreTheory: {
                    tempo: 'Slow (50-70 BPM)',
                    range: 'Low Male Choir / Whispering',
                    harmony: 'Minor, Chromatic mediants',
                    rhythm: 'Slow swells',
                    melody: 'Ominous, slow-moving',
                    orchestration: 'Low Strings, FX',
                    language: 'Latin / English'
                },
                variations: [
                    {
                        id: 'gothic-brood',
                        name: 'Gothic Underscore',
                        scales: { primary: 'Harmonic Minor', secondary: 'Locrian' },
                        chords: { types: 'Min(maj7), Dim7', progressions: ['i - VI - i', 'Drone - Chromatic'] },
                        prompt: 'Compose a dark cinematic choral underscore. Use a low male choir humming or singing "Ooh" vowels in the bass register. Overlay this with high, dissonant clusters from the sopranos. The harmony is slow-moving and ominous, using minor keys and chromatic shifts. Add subtle vocal effects like whispers or breaths. The mood is foreboding, gothic, and shadowing.'
                    }
                ]
            },
            {
                id: 'heroic',
                title: 'Heroic Choir',
                moodUseCase: 'Victory, superheroes, soaring flights.',
                coreTheory: {
                    tempo: 'Driving (110-130 BPM)',
                    range: 'High Soprano/Tenor Melodies',
                    harmony: 'Major, Lydian mode',
                    rhythm: 'Driving but legato',
                    melody: 'Soaring, wide intervals',
                    orchestration: 'French Horns, Strings',
                    language: 'Non-lexical (Ah, Ooh)'
                },
                variations: [
                    {
                        id: 'hero-theme',
                        name: 'Superhero Theme',
                        scales: { primary: 'Lydian', secondary: 'Major' },
                        chords: { types: 'Maj7, Sus2', progressions: ['I - II - I', 'I - V - IV - I'] },
                        prompt: 'Create a heroic choral theme. The choir sings a soaring, wordless melody ("Ah") in unison with the French Horns. The key is clearly Major or Lydian mode to convey optimism and power. The rhythm is driving and propulsive (triplets). The texture is thick but bright. The mood is triumphant, inspiring, and larger-than-life.'
                    }
                ]
            },
            {
                id: 'horror-choir',
                title: 'Horror Choir',
                moodUseCase: 'Scary, unholy, terrifying.',
                coreTheory: {
                    tempo: 'Unpredictable',
                    range: 'Extended techniques (Shrieks, clusters)',
                    harmony: 'Atonal, Tritones',
                    rhythm: 'Unpredictable, chaotic',
                    melody: 'None (Texture focus)',
                    orchestration: 'Sound Design, Drones',
                    language: 'Screams / Whispers'
                },
                variations: [
                    {
                        id: 'nightmare-voices',
                        name: 'Nightmare Voices',
                        scales: { primary: 'Chromatic', secondary: 'Whole Tone' },
                        chords: { types: 'Clusters', progressions: ['Crescendo to Scream', 'Glissando'] },
                        prompt: 'Generate a terrifying horror choir track. Use extended vocal techniques: sudden shrieks, gasps, and frantic whispering. The choir creates "Ligeti-style" micropolyphonic clusters (many voices signing slightly different pitches). There is no melody, only texture. The sound should be dissonant, uncomfortable, and nightmare-inducing.'
                    }
                ]
            },
            {
                id: 'fantasy-choir',
                title: 'Fantasy Choir',
                moodUseCase: 'Elves, magic, wonder.',
                coreTheory: {
                    tempo: 'Walking / 3/4 (80-100 BPM)',
                    range: 'Soprano / Alto (Female/Child)',
                    harmony: 'Lydian, Major 7ths, Ethereal',
                    rhythm: 'Flowing, triplet feel',
                    melody: 'Light, lyrical, ancient',
                    orchestration: 'Harp, Flute, Strings',
                    language: 'Elvish / Fantasy Language'
                },
                variations: [
                    {
                        id: 'elven-song',
                        name: 'Elven Ethereal',
                        scales: { primary: 'Lydian', secondary: 'Aeolian' },
                        chords: { types: 'Maj7, Add9', progressions: ['I - II - I', 'vi - IV - I'] },
                        prompt: 'Compose a beautiful Fantasy choir piece. Use primarily female voices (Soprano/Alto) singing softly and purely. The harmony uses the Lydian mode and Major 7th chords to create a magical, floating feeling. Accompany with harp and light strings. The melody is lyrical and ancient. The mood is wondrous, mystical, and peaceful.'
                    }
                ]
            },
            ...rareCinematicChoirStyles,
            ...cinematicChoirGen
        ]
    },
    {
        id: 'folk-choir',
        title: 'Folk / Traditional',
        icon: Users,
        description: 'Indigenous and cultural vocal ensembles from around the world.',
        subcategories: [
            {
                id: 'african-tribal',
                title: 'African Tribal Choir',
                moodUseCase: 'Savanna, celebration, community.',
                coreTheory: {
                    tempo: '110-130 BPM',
                    range: 'Full Community',
                    harmony: 'Parallel intervals, Polyrhythm',
                    rhythm: 'Complex, percussion-driven',
                    melody: 'Call and Response, Pentatonic',
                    orchestration: 'Djembe, Shakers, Claps',
                    language: 'Zulu, Xhosa, or Swahili style'
                },
                variations: [
                    {
                        id: 'savanna-sun',
                        name: 'Savanna Celebration',
                        scales: { primary: 'Major Pentatonic', secondary: 'Mixolydian' },
                        chords: { types: 'I - IV - V', progressions: ['Cyclic loops', 'Parallel 3rds/5ths'] },
                        prompt: 'Create an African Tribal Choir track. The sound should include men, women, and children singing together. Use call-and-response lead vocals against a rhythmic choral backing. The harmony moves in parallel intervals. The rhythm is highly syncopated and danceable, driven by hand clapping and djembe drums. The mood is joyful, communal, and earthy.'
                    }
                ]
            },
            {
                id: 'nordic-folk',
                title: 'Nordic Folk Choir',
                moodUseCase: 'Viking, icy, harsh landscapes.',
                coreTheory: {
                    tempo: 'Slow / Heavy (60-80 BPM)',
                    range: 'Low Male / High Female (Kulning)',
                    harmony: 'Open 5ths, modal',
                    rhythm: 'Slow, heavy pulse',
                    melody: 'Kulning (High calls)',
                    orchestration: 'Frame Drums, Tagelharpa',
                    language: 'Old Norse'
                },
                variations: [
                    {
                        id: 'viking-dirge',
                        name: 'Viking Dirge',
                        scales: { primary: 'Dorian', secondary: 'Aeolian' },
                        chords: { types: 'Open 5ths (Power Chords)', progressions: ['i - VII - i', 'Drone-based'] },
                        prompt: 'Compose a Nordic Folk choir piece. The foundation is a deep, grumbling drone sung by male voices (throat singing style). Above this, female voices sing a haunting, high-pitched melody (Kulning). The harmony relies on open fifths and octaves, avoiding the third. The atmosphere is cold, ancient, and misty. Use heavy frame drums for a slow, ritualistic beat.'
                    }
                ]
            },
            {
                id: 'slavic-choir',
                title: 'Slavic Folk Choir',
                moodUseCase: 'Village life, piercing vocals.',
                coreTheory: {
                    tempo: 'Fast / Odd Meter',
                    range: 'Female "White Voice" (Belting)',
                    harmony: 'Dissonant seconds, close harmony',
                    rhythm: 'Irregular meters (7/8, 9/8)',
                    melody: 'Ornamented, sharp',
                    orchestration: 'A Cappella',
                    language: 'Russian / Bulgarian'
                },
                variations: [
                    {
                        id: 'bulgarian-voices',
                        name: 'Bulgarian Women\'s Choir',
                        scales: { primary: 'Phrygian Dominant', secondary: 'Lydian' },
                        chords: { types: 'Clusters (2nds)', progressions: ['Drone + Melody', 'Parallel 2nds'] },
                        prompt: 'Generate a Slavic Folk choir track in the style of "Le Mystère des Voix Bulgares". Use the "White Voice" technique—a piercing, bright, open-throated singing style. The harmony is famous for its "ringing" dissonances (major seconds) and close clusters. The rhythm is asymmetrical (7/8 time). The mood is powerful, shrill, and culturally specific.'
                    }
                ]
            },
            {
                id: 'asian-folk',
                title: 'Asian Folk Choir',
                moodUseCase: 'Temples, nature, ceremony.',
                coreTheory: {
                    tempo: 'Slow / Free',
                    range: 'Unison or Octaves',
                    harmony: 'Pentatonic',
                    rhythm: 'Flowing or Percussive',
                    melody: 'Pentatonic, Ornamented',
                    orchestration: 'Bells, Gongs',
                    language: 'Mandarin, Japanese, or Tibetan'
                },
                variations: [
                    {
                        id: 'temple-chant',
                        name: 'Tibetan Throat Singing',
                        scales: { primary: 'Major Pentatonic', secondary: 'Overtone Scale' },
                        chords: { types: 'Unison / Drone', progressions: ['Static', 'Slow shifts'] },
                        prompt: 'Create a Tibetan Monastic choir track. The focus is on multiphonic throat singing (overtone singing) producing a deep, buzzing drone. The choir chants in a low, rhythmic unison. Add the sound of temple bells and gongs. The atmosphere is trance-like, spiritual, and intense.'
                    }
                ]
            },
            {
                id: 'indigenous-vocal',
                title: 'Indigenous Ensemble',
                moodUseCase: 'Ancient rituals, connection to earth.',
                coreTheory: {
                    tempo: 'Steady Pulse (90-110 BPM)',
                    range: 'Chanting, Vocables',
                    harmony: 'Unison',
                    rhythm: 'Steady Drum Pulse',
                    melody: 'Descending Terraced',
                    orchestration: 'Pow-wow Drum',
                    language: 'Native Vocables (Hey-ya)'
                },
                variations: [
                    {
                        id: 'pow-wow',
                        name: 'Tribal Chant',
                        scales: { primary: 'Pentatonic', secondary: 'Mode' },
                        chords: { types: 'Unison', progressions: ['Strophic Form'] },
                        prompt: 'Compose a Native American style vocal chant. A group of men sings together in unison around a large drum (Pulse). Using vocables (non-lexical syllables like "Hey-ya, Ho-ya"). The vocal style includes vocal slides and pitch bends. The rhythm is a steady, heartbeat pulse. The mood is grounded, powerful, and ceremonial.'
                    }
                ]
            },
            ...folkChoirGen
        ]
    },
    {
        id: 'contemporary-choir',
        title: 'Contemporary Choir',
        icon: Mic2,
        description: 'Modern vocal styles including Pop, Jazz, and A Cappella.',
        subcategories: [
            {
                id: 'pop-choir',
                title: 'Pop Choir',
                moodUseCase: 'Backing vocals, anthemic choruses.',
                coreTheory: {
                    tempo: '100-128 BPM',
                    range: 'Mid-range, Belting',
                    harmony: 'Pop Triads, Sus4',
                    rhythm: 'Straight 4/4',
                    melody: 'Catchy, Repetitive Hooks',
                    orchestration: 'Synthesizers, Pop Drums',
                    language: 'English'
                },
                variations: [
                    {
                        id: 'anthem-chorus',
                        name: 'Pop Anthem',
                        scales: { primary: 'Major', secondary: 'Mixolydian' },
                        chords: { types: 'Triads, Sus4', progressions: ['I - V - vi - IV', 'vi - IV - I - V'] },
                        prompt: 'Generate a Pop Choir backing for an anthem. The choir sings "Oohs" and "Ahs" in a large, stadium-like reverb. The harmony follows standard II-V-I pop progressions. The tone is bright, airy, and pitch-corrected for a modern sheen. Use layer stacking to create a thick, commercial sound. Uplifting and catchy.'
                    }
                ]
            },
            {
                id: 'jazz-choir',
                title: 'Jazz Choir',
                moodUseCase: 'Sophisticated, swinging, intricate.',
                coreTheory: {
                    tempo: 'Wait / Swing (100-140 BPM)',
                    range: 'Close harmony SATB',
                    harmony: 'Extended (9ths, 11ths, 13ths)',
                    rhythm: 'Swing, Syncopated',
                    melody: 'Angular, Chromatic',
                    orchestration: 'Finger Snaps, Upright Bass',
                    language: 'Scat / English'
                },
                variations: [
                    {
                        id: 'vocal-jazz',
                        name: 'Vocal Jazz Ensemble',
                        scales: { primary: 'Blues Scale', secondary: 'Chromatic' },
                        chords: { types: 'Maj9, 13, Diminished', progressions: ['ii - V - I', 'i - VI - ii - V'] },
                        prompt: 'Compose a Vocal Jazz track (Manhattan Transfer style). The harmony is extremely close and dense, using complex chords like Major 9ths, 13ths, and diminished passing chords. The rhythm swings heavily. Include a section of "Scat Singing" (vocal improvisation). The mood is sophisticated, cool, and technically impressive.'
                    }
                ]
            },
            {
                id: 'a-cappella',
                title: 'A Cappella Group',
                moodUseCase: 'Voice-only pop covers, beatbox.',
                coreTheory: {
                    tempo: 'Variable (Pop)',
                    range: 'Solo + Harmony + Bass + Beatbox',
                    harmony: 'Tight Pop Harmony',
                    rhythm: 'Vocal Percussion (Beatbox)',
                    melody: 'Pop Lead',
                    orchestration: 'Voices Only',
                    language: 'English'
                },
                variations: [
                    {
                        id: 'pentatonix-style',
                        name: 'Modern A Cappella',
                        scales: { primary: 'Major / Minor', secondary: 'Chromatic' },
                        chords: { types: 'Pop Triads, 7ths', progressions: ['I - VI - IV - V', 'Circle of Fifths'] },
                        prompt: 'Create a modern A Cappella track. All sounds must be made by the human voice. Include a vocal bass line, a vocal percussionist (beatbox), background harmony pads, and a lead soloist. The arrangement is tight, rhythmic, and punchy. The style is modern pop. No instruments allowed.'
                    }
                ]
            },
            {
                id: 'experimental-choir',
                title: 'Experimental Choir',
                moodUseCase: 'Avant-garde, strange textures.',
                coreTheory: {
                    tempo: 'Free / Glitch',
                    range: 'All ranges',
                    harmony: 'Non-functional',
                    rhythm: 'Free / Glitchy',
                    melody: 'None / Fragmented',
                    orchestration: 'None',
                    language: 'Mouth Clicks, Breaths'
                },
                variations: [
                    {
                        id: 'mouth-sounds',
                        name: 'Vocal Textures',
                        scales: { primary: 'Atonal', secondary: 'Noise' },
                        chords: { types: 'Clusters', progressions: ['Random'] },
                        prompt: 'Compose an experimental vocal piece using only mouth sounds—clicks, pops, breaths, and hisses. Treat the voice as a percussive instrument. Layer these sounds to create a rhythmic groove. The result should sound organic yet alien, focusing on the timbre of the human mouth rather than traditional singing.'
                    }
                ]
            },
            {
                id: 'minimal-choir',
                title: 'Minimalist Choir',
                moodUseCase: 'Repetitive, hypnotic, Philip Glass style.',
                coreTheory: {
                    tempo: 'Fast / Steady',
                    range: 'Middle Range',
                    harmony: 'Static, slow changes',
                    rhythm: 'Repetitive arpeggios',
                    melody: 'Motivic, additive',
                    orchestration: 'Choir + Organ/Glass',
                    language: 'Numbers or Solfege'
                },
                variations: [
                    {
                        id: 'glass-pattern',
                        name: 'Minimalist Patterns',
                        scales: { primary: 'Major / Minor', secondary: 'Modal' },
                        chords: { types: 'Triads', progressions: ['Static for long periods', 'Additive Rhythm'] },
                        prompt: 'Generate a Minimalist choral work. The choir sings rapid, repetitive arpeggios of simple triads. The harmony changes very slowly (every 16 bars). The focus is on the hypnotic, trance-like effect of the repeating patterns. The dynamics swell and fade gradually. Mathematical, precise, and mesmerizing.'
                    }
                ]
            },
            ...contemporaryChoirGen
        ]
    },
    {
        id: 'advanced-choir',
        title: 'Advanced / Hybrid Styles',
        icon: Zap,
        description: 'Texture-based and hybrid choral prompts for specific effects.',
        subcategories: [
            {
                id: 'texture-technique',
                title: 'Texture & Technique',
                moodUseCase: 'Specific vocal effects for sound design.',
                coreTheory: {
                    tempo: 'Free / Drone',
                    range: 'Variable',
                    harmony: 'Cluster / Noise',
                    rhythm: 'Free / Textural',
                    melody: 'None (Timbre focus)',
                    orchestration: 'FX Processing',
                    language: 'N/A'
                },
                variations: [
                    {
                        id: 'whisper-choir',
                        name: 'Whisper Choir',
                        scales: { primary: 'N/A', secondary: 'N/A' },
                        chords: { types: 'Noise', progressions: ['Stereo Panning', 'Density Shifts'] },
                        prompt: 'Create a "Whisper Choir" texture. A large group of people whispering unintelligible text frantically. Use stereo panning to make voices move around the listener\'s head. The effect should be ASMR-like but unsettling and paranoid. No pitched singing, just the sound of breath and sibilance.'
                    },
                    {
                        id: 'drone-choir',
                        name: 'Drone Choir',
                        scales: { primary: 'Overtone Series', secondary: 'Just Intonation' },
                        chords: { types: 'Static Chord', progressions: ['Spectral Morphing', 'Vowel Shifts'] },
                        prompt: 'Generate an "Infinite Drone" choir. The choir holds a single, complex chord for the entire duration. Use circular breathing (seamless looping) so there are no breaks. As the track progresses, slowly morph the vowel sound from "Oh" to "Ah" to "Ee", changing the timbre without changing the notes.'
                    }
                ]
            },
            {
                id: 'mood-emotion',
                title: 'Mood & Emotion',
                moodUseCase: 'Pure emotional underscores.',
                coreTheory: {
                    tempo: 'Slow (60-80 BPM)',
                    range: 'Variable',
                    harmony: 'Emotive',
                    rhythm: 'Slow',
                    melody: 'Fluid, Expressive',
                    orchestration: 'Minimal',
                    language: 'Vowels'
                },
                variations: [
                    {
                        id: 'angelic-choir',
                        name: 'Angelic Presence',
                        scales: { primary: 'Major', secondary: 'Lydian' },
                        chords: { types: 'Major Triads', progressions: ['I - IV - I', 'I - V - I'] },
                        prompt: 'Compose the sound of an "Angelic Choir". Use high-pitched female or boy soprano voices singing in a massive, shimmering reverb. The harmony is pure Major chords. The attack is soft and glowing. The mood is blindingly bright, divine, and peaceful. It sounds like heaven opening.'
                    },
                    {
                        id: 'dark-ritual',
                        name: 'Dark Ritual',
                        scales: { primary: 'Phrygian', secondary: 'Locrian' },
                        chords: { types: 'Minor, Diminished', progressions: ['i - bII - i', 'Drone'] },
                        prompt: 'Create a "Dark Ritual" choir. Low, guttural male voices chant a rhythmic invocation. Accompanied by the sound of chains and deep drums. The harmony is stagnant and menacing. The mood is evil, occult, and heavy with dread.'
                    }
                ]
            },
            {
                id: 'modern-hybrid',
                title: 'Modern / Hybrid',
                moodUseCase: 'Choir mixed with electronic or heavy elements.',
                coreTheory: {
                    tempo: 'Grid-locked (120-140 BPM)',
                    range: 'Processed Vocals',
                    harmony: 'Hybrid',
                    rhythm: 'Grid-locked',
                    melody: 'Sampled, Rhythmic',
                    orchestration: 'Synths, FX',
                    language: 'Any'
                },
                variations: [
                    {
                        id: 'edm-choir',
                        name: 'EDM Vocal Chops',
                        scales: { primary: 'Minor Penatonic', secondary: 'Dorian' },
                        chords: { types: 'Extended', progressions: ['i - VI - VII', 'Sampled Chords'] },
                        prompt: 'Generate an EDM track featuring a choir. But instead of singing normally, the choir samples are chopped, pitched, and glitched to create a rhythmic lead melody. Combine this with a heavy dance beat and synthesizer bass. The choir becomes a digital instrument, high-energy and modern.'
                    },
                    {
                        id: 'industrial-choir',
                        name: 'Industrial Choir',
                        scales: { primary: 'Chromatic', secondary: 'Phrygian' },
                        chords: { types: 'Power Chords', progressions: ['Riffs', 'Distortion'] },
                        prompt: 'Compose an Industrial Choir track. The vocals are heavily processed with distortion and bit-crushing effects. They chant aggressive slogans over a metallic, mechanical beat. The sound is cold, abrasive, and futuristic. Cyberpunk dystopia atmosphere.'
                    }
                ]
            },
            ...advancedChoirGen
        ]
    },
    {
        id: 'infinite-choir',
        title: 'Infinite Choir Library',
        icon: Zap,
        description: 'Procedurally generated choral concepts for endless inspiration.',
        subcategories: [
            ...generatedChoirSubcategories
        ]
    }
];
