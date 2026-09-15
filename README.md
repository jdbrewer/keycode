# Keycode

A daily melody puzzle: four different notes, six guesses, and all twelve tones of the Western chromatic scale. Solve by ear, logic, or a little of both.

**[Play Keycode](https://notebrewer.com/play/keycode/)** · [notebrewer](https://notebrewer.com/)

## Run locally

Requires Node.js 22.19 or newer and npm.

```sh
npm ci
npm run dev
```

Open the local address printed by Astro.

```sh
npm test          # Puzzle generation and feedback checks
npm run build    # Static production output in dist/
npm run preview  # Preview that production build
```

## How it works

- One shared puzzle per UTC calendar day; reload after midnight for the next puzzle.
- Four distinct notes selected from C4 through B4, in 12-tone equal temperament with A4 = 440 Hz.
- Green / ✓: correct position. Yellow / ↔: correct note, another position. Gray / ×: not in the melody.
- Listen plays the target. Compare plays the target followed by your current guess.
- Optional clues reveal the melody direction and higher/lower guidance.
- Number labels can switch to note names. Keyboard shortcuts appear under How to play.
- Submitted guesses and clue use save in browser local storage; unfinished guesses do not.
- Share copies a spoiler-free result. The share link currently points to the live notebrewer game.

Audio uses the browser Web Audio API with triangle-wave synthesis. No recordings, backend, API keys, or accounts are required. Browser audio starts after a user interaction.

## Project structure

- `src/pages/index.astro`: game markup and responsive styles, including the primary-button hover fix.
- `src/scripts/keycode.ts`: interaction, audio, persistence, and sharing.
- `src/lib/keycode.ts`: deterministic daily puzzles and scoring.
- `src/layouts/Content.astro`: surrounding notebrewer layout.
- `tests/keycode.test.mjs`: puzzle and scoring tests.

## Hosting and website integration

This repository is the standalone version of the game, served at `/`. Upload the contents of `dist/` to a static web host after building. It includes no server credentials or deployment automation.

The current live copy is embedded in the separate notebrewer website at `/play/keycode/`. Pushing to this repository does **not** automatically update that website. Navigation intentionally links back to notebrewer.com. To port edits back, copy the game page into the website's `src/pages/play/keycode.astro` (adjust its imports one directory deeper), and copy the script and puzzle module into the corresponding source folders.

Daily puzzles are generated in the client, so this is a casual game rather than a tamper-proof competition. The melody pool and transpositions repeat after 144 days. Browser progress is specific to its origin and does not transfer between this app and another host.
