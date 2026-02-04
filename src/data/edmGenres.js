import { generateEDMSubcategories } from './edm_generator';
import { legacyRareStyles, expandedEdmGenres } from './edm_rare_expansion';
import {
    Zap, Activity, Sun, Speaker, Rocket, Flame, Cloud, Star, Eye, Music, Disc, Radio,
    Headphones, Speaker as SpeakerIcon, Layers, Hexagon, Component, Shield, Ghost
} from 'lucide-react';

// Enhance the 60 new genres with Icons and Descriptions for the Grid/Sidebar
const enhancedExpandedGenres = expandedEdmGenres.map(g => ({
    ...g,
    icon: Hexagon, // Distinct icon for generated genres
    description: `Explore 10,000+ generated variations of ${g.title}, powered by the advanced Anti-Gravity engine.`
}));

export const edmGenres = [
    {
        id: 'house',
        title: 'House',
        icon: Disc,
        description: 'The foundation of EDM. Groovy, soulful, and rhythmic 4/4 beats.',
        subcategories: [
            {
                id: 'deep-house',
                title: 'Deep House',
                moodUseCase: 'Lounge, sunset, warm club opener. Soulful and hypnotic.',
                coreTheory: {
                    tempo: '120-124 BPM',
                    rhythm: 'Swing 16ths, loose percussion',
                    harmony: 'Minor, Septimal chords (7ths, 9ths), Jazz influence',
                    melody: 'Warm pads, chopped vocals, electric piano',
                    orchestration: 'Sub bass, shaker loops, Rhodes, diva vocals'
                },
                variations: [
                    {
                        id: 'soulful',
                        name: 'Soulful',
                        scales: { primary: 'A Minor', secondary: 'Dorian Mode' },
                        chords: { types: 'Minor 9, Major 7', progressions: ['i7 - v7 - VImaj7'] },
                        prompt: 'Create a soulful, hypnotic Deep House track at 122 BPM in A Minor. Use a punchy four-on-the-floor kick, warm Reese bass, and lush electric piano chords playing jazzy Minor 9ths. Focus on extended chord voicings and a groovy, syncopated bassline. Maintain a relaxing late-night lounge atmosphere suitable for a sunset session.'
                    }
                ]
            },
            {
                id: 'tech-house',
                title: 'Tech House',
                moodUseCase: 'Peak time club, driving energy. Funk meets technology.',
                coreTheory: {
                    tempo: '124-128 BPM',
                    rhythm: 'Driving hi-hats, funky bass loops',
                    harmony: 'Minimal, dissonant stabs, rhythmic focus',
                    melody: 'Short vocal snippets, FX risers',
                    orchestration: 'Punchy kick, clap on 2/4, synth stabs'
                },
                variations: [
                    {
                        id: 'groovy',
                        name: 'Groovy',
                        prompt: 'Compose a driving Tech House track at 126 BPM. The groove is paramount, with a tight, punchy kick and a rolling bassline. Use short, percussive synth stabs and chopped vocal samples to add rhythm. The breakdown should build tension with white noise risers before dropping back into the funky, minimal beat.'
                    }
                ]
            },
            {
                id: 'progressive-house',
                title: 'Progressive House',
                moodUseCase: 'Emotional journey, festivals, melodic buildup.',
                coreTheory: {
                    tempo: '126-128 BPM',
                    rhythm: 'Steady, driving, long builds',
                    harmony: 'Major/Minor, emotional chord progressions',
                    melody: 'Plucked synths, soaring leads',
                    orchestration: 'Layers of synths, white noise, reverb'
                },
                variations: [
                    {
                        id: 'festival',
                        name: 'Festival Anthem',
                        prompt: 'Create an emotional, anthemic Progressive House track at 128 BPM. Start with a plucked melody that slowly opens up the cutoff filter. Introduce a euphoric chord progression on saw-wave synthesizers. The build-up should be long and dramatic, leading to a massive drop that is melodically rich and uplifting. Perfect for a main stage festival sunset.'
                    }
                ]
            },
            // Generate 10,000 additional House variations
            ...generateEDMSubcategories('house', 'House', 'standard', 10000)
        ]
    },
    {
        id: 'techno',
        title: 'Techno',
        icon: SpeakerIcon,
        description: 'Repetitive, driving, and futuristic industrial rhythms.',
        subcategories: [
            {
                id: 'industrial-techno',
                title: 'Industrial Techno',
                moodUseCase: 'Dark warehouses, intense energy, mechanical.',
                coreTheory: {
                    tempo: '135-145 BPM',
                    rhythm: 'Relentless, distorted percussion',
                    harmony: 'Atonal, drone-based',
                    melody: 'Metallic textures, noise',
                    orchestration: 'Distorted 909 kick, metallic clanks, feedback'
                },
                variations: [
                    {
                        id: 'warehouse',
                        name: 'Warehouse',
                        prompt: 'Generate a hard-hitting Industrial Techno track at 140 BPM. The kick drum significantly distorted and dominates the mix. Use metallic percussion and foundry sounds for the rhythm. Create a dark, oppressive atmosphere with cavernous reverb and industrial drones. No melodic loops, just pure rhythmic texture and power.'
                    }
                ]
            },
            {
                id: 'melodic-techno',
                title: 'Melodic Techno',
                moodUseCase: 'Emotional but driving. Deep and spacey.',
                coreTheory: {
                    tempo: '122-126 BPM',
                    rhythm: 'Steady kick, rolling 16th bass',
                    harmony: 'Minor, Arpeggiated',
                    melody: 'Synth arpeggios, evolving pads',
                    orchestration: 'Moog bass, prophet pads, clean kick'
                },
                variations: [
                    {
                        id: 'ethereal',
                        name: 'Ethereal',
                        prompt: 'Compose a Melodic Techno track at 124 BPM. Center the track around a rolling 16th-note bassline (Arp). Add a slowly evolving, emotional synthesizer lead with plenty of delay. The atmosphere should be spacey and futuristic, blending the driving beat of techno with the emotion of trance.'
                    }
                ]
            },
            // Generate 10,000 additional Techno variations
            ...generateEDMSubcategories('techno', 'Techno', 'standard', 10000)
        ]
    },
    {
        id: 'trance',
        title: 'Trance',
        icon: Sun,
        description: 'Euphoric, melodic, and high-tempo emotional journeys.',
        subcategories: [
            {
                id: 'uplifting-trance',
                title: 'Uplifting Trance',
                moodUseCase: 'Peak emotional release, flying, euphoria.',
                coreTheory: {
                    tempo: '138-140 BPM',
                    rhythm: 'Rolling bass (off-beat), energetic',
                    harmony: 'Major/Minor, emotional modulation',
                    melody: 'Super-saw leads, arpeggios',
                    orchestration: 'Supersaw stacks, acids (TB-303), choir pads'
                },
                variations: [
                    {
                        id: 'hands-in-air',
                        name: 'Hands in the Air',
                        prompt: 'Create a classic Uplifting Trance track at 138 BPM. Use a driving off-beat bassline and a massive supersaw lead melody. The breakdown should be orchestral and emotional, featuring strings or a piano, before building up to a high-energy climax. The feeling is pure euphoria.'
                    }
                ]
            },
            {
                id: 'psytrance',
                title: 'Psytrance',
                moodUseCase: 'Mind-bending, trippy, high energy dance.',
                coreTheory: {
                    tempo: '140-150 BPM',
                    rhythm: 'Galloping bass (K-B-B-B)',
                    harmony: 'Phrygian, exotic scales',
                    melody: 'Squuelchy FM synthesis, alien fx',
                    orchestration: 'tight kick, rolling bass, acid lines'
                },
                variations: [
                    {
                        id: 'goa',
                        name: 'Goa Spirit',
                        prompt: 'Generate a Psytrance track at 145 BPM. The foundation is a galloping "K-B-B-B" bassline. Layer in squelchy acid lines and alien sound effects that pan rapidly. The melody should use Eastern scales like Phrygian Dominant to create a mystical, trippy vibe. High energy and hypnotic.'
                    }
                ]
            },
            // Generate 10,000 additional Trance variations
            ...generateEDMSubcategories('trance', 'Trance', 'standard', 10000)
        ]
    },
    {
        id: 'bass-music',
        title: 'Bass Music (Dubstep/Trap)',
        icon: Speaker,
        description: 'Heavy bass, drops, and aggressive sound design.',
        subcategories: [
            {
                id: 'dubstep',
                title: 'Dubstep',
                moodUseCase: 'Aggressive energy, headbanging, slow-motion impact.',
                coreTheory: {
                    tempo: '140 (70) BPM',
                    rhythm: 'Half-time feel, heavy snare on 3',
                    harmony: 'Minor, dissonant',
                    melody: 'Wobble bass, growls (Yaw-Yaw)',
                    orchestration: 'Sub bass, FM synthesis growls, punchy drums'
                },
                variations: [
                    {
                        id: 'tearout',
                        name: 'Tearout',
                        prompt: 'Compose an aggressive Dubstep track at 140 BPM (Half-time at 70). The drop should feature metallic, gun-like bass sounds and heavy growls. The snare needs to be huge and punchy. Focus on rhythmic variation in the bass design and call-and-response patterns.'
                    }
                ]
            },
            {
                id: 'future-bass',
                title: 'Future Bass',
                moodUseCase: 'Euphoric, pop-influenced, bouncy.',
                coreTheory: {
                    tempo: '140-160 BPM',
                    rhythm: 'Trap beats, heavy hi-hat rolls',
                    harmony: 'Major 7ths, lush super-chords',
                    melody: 'Vocal chops, pitch-bent saws',
                    orchestration: 'Saw waves w/ LFO (Wub-wub chords), snap snare'
                },
                variations: [
                    {
                        id: 'kawaii',
                        name: 'Kawaii / Happy',
                        prompt: 'Create a happy, bouncy Future Bass track at 150 BPM. Use lush, detuned saw chords that "wub" with the sidechain compression. The melody should be a high-pitched vocal chop or lead. Include trap hi-hat rolls and a sharp snare. The mood is uplifting, colorful, and anime-inspired.'
                    }
                ]
            },
            // Generate 10,000 additional Bass Music variations
            ...generateEDMSubcategories('bass-music', 'Bass Music', 'standard', 10000)
        ]
    },
    {
        id: 'dnb',
        title: 'Drum & Bass',
        icon: Activity,
        description: 'Fast breakbeats and heavy basslines.',
        subcategories: [
            {
                id: 'liquid-dnb',
                title: 'Liquid DnB',
                moodUseCase: 'Soulful, flowing, high speed but relaxing.',
                coreTheory: {
                    tempo: '170-175 BPM',
                    rhythm: 'Fast breakbeat (General Levy)',
                    harmony: 'Jazz chords, Major 7ths',
                    melody: 'Piano, vocal chops, smooth synth',
                    orchestration: 'Reese bass (smooth), Amen break'
                },
                variations: [
                    {
                        id: 'soulful-liquid',
                        name: 'Soulful Liquid',
                        prompt: 'Compose a smooth Liquid Drum & Bass track at 174 BPM. Use a flowing, soulful piano sample and vocal chops. The drums should be a light, fast rolling breakbeat. Underneath, a warm Reese bass provides depth. The vibe is emotional, fast-paced, yet relaxing.'
                    }
                ]
            },
            {
                id: 'neurofunk',
                title: 'Neurofunk',
                moodUseCase: 'Dark, techy, sci-fi speed.',
                coreTheory: {
                    tempo: '172-175 BPM',
                    rhythm: 'Tight, compressed drums',
                    harmony: 'Dark, techy, minor',
                    melody: 'Distorted bass movement',
                    orchestration: 'Resampled bass, punchy snare'
                },
                variations: [
                    {
                        id: 'tech',
                        name: 'Tech',
                        prompt: 'Create a dark, technical Neurofunk track at 172 BPM. The drums should be extremely tight and punchy. The main element is a distorted, filtering bassline that morphs and moves. Use sci-fi FX and dark atmospheres. High energy and precise.'
                    }
                ]
            },
            // Generate 10,000 additional DnB variations
            ...generateEDMSubcategories('dnb', 'Drum & Bass', 'standard', 10000)
        ]
    },
    {
        id: 'synthwave',
        title: 'Synthwave / Retrowave',
        icon: Zap,
        description: '80s nostalgia, neon lights, and analog synths.',
        subcategories: [
            {
                id: 'outrun',
                title: 'Outrun',
                moodUseCase: 'Night driving, neon cities, fast cars.',
                coreTheory: {
                    tempo: '100-120 BPM',
                    rhythm: 'Straight 4/4, gated reverb snare',
                    harmony: 'Minor, power chords',
                    melody: 'Analog arpeggios, lead solos',
                    orchestration: 'Analog synths (Juno, Jupiter), drum machines (Linndrum)'
                },
                variations: [
                    {
                        id: 'night-drive',
                        name: 'Night Drive',
                        prompt: 'Generate a Synthwave track fitting for a night drive in a neon city. Tempo 110 BPM. Use a thumping Linndrum kick and a massive gated reverb snare. The bass should be a rolling analog 8th-note arp. Add a heroic, nostalgia-filled melody on a bright analog lead synth.'
                    }
                ]
            },
            // Generate 10,000 additional Synthwave variations
            ...generateEDMSubcategories('synthwave', 'Synthwave', 'standard', 10000)
        ]
    },
    {
        id: 'ambient-edm',
        title: 'Ambient / Chillout',
        icon: Cloud,
        description: 'Relaxing, atmospheric, and downtempo.',
        subcategories: [
            {
                id: 'psychill',
                title: 'Psybient / Psychill',
                moodUseCase: 'Trippy relaxation, meditation, space.',
                coreTheory: {
                    tempo: '80-100 BPM',
                    rhythm: 'Slow, dubby, or nonexistent',
                    harmony: 'Modal, exotic',
                    melody: 'Echoing flutes, gentle synths',
                    orchestration: 'Pads, delays, organic percussion'
                },
                variations: [
                    {
                        id: 'floating',
                        name: 'Floating',
                        prompt: 'Create a Psybient track for deep relaxation. 90 BPM. Use a slow, dubby bassline and lots of delay effects on percussion. The pads should be lush and evolving. Incorporate organic sounds like water or wind. The mood is trippy and spiritual.'
                    }
                ]
            },
            // Generate 10,000 additional Ambient variations
            ...generateEDMSubcategories('ambient-edm', 'Ambient', 'standard', 10000)
        ]
    },
    {
        id: 'rare',
        title: 'Rare & Underground',
        icon: Eye,
        description: 'Experimental, niche, and crate-digger styles.',
        subcategories: [
            {
                id: 'idm',
                title: 'IDM (Intelligent Dance Music)',
                moodUseCase: 'Brainy listening, complex glitches, abstract.',
                coreTheory: {
                    tempo: 'Variable',
                    rhythm: 'Complex, erratic, glitchy',
                    harmony: 'Ambiguous, beautiful pads vs harsh noise',
                    melody: 'Algorithmic sequences',
                    orchestration: 'Digital glitches, sine waves, broken beats'
                },
                variations: [
                    {
                        id: 'braindance',
                        name: 'Braindance',
                        prompt: 'Compose an IDM track inspired by Aphex Twin. Use a complex, glitchy drum beat that stutters creates irregular rhythms. Overlay this with a beautiful, melancholic ambient pad. The contrast between the harsh digital drums and lush melody is key. 130 BPM.'
                    }
                ]
            },
            {
                id: 'vaporwave',
                title: 'Vaporwave',
                moodUseCase: 'Nostalgia, surrealism, mallsoft.',
                coreTheory: {
                    tempo: '60-90 BPM',
                    rhythm: 'Slowed down funk/R&B samples',
                    harmony: 'Jazz loops, slowing pitch',
                    melody: 'Saxophone loops, cheesy synths',
                    orchestration: 'Sampled 80s pop, heavy reverb, slowing tape effect'
                },
                variations: [
                    {
                        id: 'mallsoft',
                        name: 'Mallsoft',
                        prompt: 'Create a Vaporwave track at 85 BPM. It should sound like a slowed-down 1980s pop or elevator music track. Use heavy reverb and a low-pass filter to simulate listening from another room or a degraded cassette tape. The drums are slow and gated. The mood is surreal, nostalgic, and slightly ironic.'
                    }
                ]
            },
            ...legacyRareStyles,
            // Generate 10,000 additional Rare variations
            ...generateEDMSubcategories('rare', 'Rare', 'experimental', 10000)
        ]
    },
    ...enhancedExpandedGenres
];
