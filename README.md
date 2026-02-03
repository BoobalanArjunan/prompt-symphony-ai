# Cinematic Music Theory Explorer

A modern, responsive educational website for exploring cinematic music theory genres.

## Features

- **Genre-based Learning**: Explore theory by genres like Action, Horror, Romance, etc.
- **Interactive Interface**: Collapsible sections, sticky navigation, and a distraction-free Read Mode.
- **Responsive Design**: Works on desktop and mobile (with hamburger menu).
- **Cinematic Theme**: Dark mode aesthetic with gold and cyan accents.

## How to Add Content

The content for all genres is stored in `src/data/genres.js`. To add the content from your PDF:

1. Open `src/data/genres.js`.
2. Find the genre you want to edit (e.g., `action-high-intensity`).
3. Fill in the fields:
   - `definition`: General style description.
   - `tempo`: BPM ranges and rhythmic characteristics.
   - `harmony`: Key signatures, chord types, progressions.
   - `melody`: Melodic tendencies and instruments.
   - `orchestration`: Instrumentation details.
   - `guide`: An array of strings, where each string is a step in the composition process.
   - `tips`: Practical advice or warnings.

You can also add new genres by duplicating an existing genre object and changing the `id` and content.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Technologies

- React
- Tailwind CSS (with logical properties and dark mode)
- Framer Motion (animations)
- Lucide React (icons)
- React Router DOM (navigation)
