# Horror Game

A first-person procedural dreamcore horror game: an empty neighborhood, doors into enormous dimensions, one hidden key per world, hunting creatures, hiding places, and a 1990s VHS camcorder.

**[Play on GitHub Pages](https://jumin12.github.io/horror-game/)** · [Render hosting instructions](HOSTING.md)

## Play

Open the link and wait for the initial assets and shaders to prepare, then select **Enter the recording**. A desktop browser with WebGL2 and hardware acceleration works best. The full game, models, textures and sounds are embedded in `index.html`; it also runs offline when downloaded. The standalone file is approximately 93 MiB, so the first visit downloads a large file.

The opening walk/fall is automatic. After landing, use WASD and mouse to explore. Press **E** to open or close a door, then walk through. Find the small brass key in each dimension, open its return door, and bring the key home. Each new expedition has another seed.

Creatures respond to sight, movement noise, light and radio lures. Quietly breaking line of sight gives you a chance to escape a search; a locker only protects you if the hunter did not see you enter. Charges have audible warnings, committed trajectories and recovery time. Creature voices and ground footsteps are positional, with walls muffling their sound.

Door interiors prepare in the background. E starts the leaf moving immediately; prepared open doorways retain a distant view even when their full world leaves the nearby cache. Close views use live camera perspective.

| Control | Action |
| --- | --- |
| WASD / mouse | Move / look |
| Shift / C / Space | Run / crouch / jump |
| E | Doors, keys, objects and hiding lockers |
| N / L / Z | Night vision / flashlight / hold zoom |
| Q | Contextual clue |
| P / V | Keep footage / replay footage |
| F / M / Escape | Fullscreen / mute / pause |

Touch controls are included. Saves and captured footage stay in browser storage on the current device and website origin. The game does not request your real microphone or webcam.

## Hosting

This is a distribution repository: the playable standalone build and hosting configuration. No installation or backend is needed to play.

- **GitHub Pages:** publish the `main` branch from `/` in Settings → Pages. `.nojekyll` keeps the file unchanged.
- **Render:** choose **Static Site**, connect this repository, set Build Command to `node deploy/build.mjs` and Publish Directory to `public`. Complete instructions and a Blueprint option are in [HOSTING.md](HOSTING.md).
- `render.yaml` contains the same configuration. No ElevenLabs or other API key is needed; audio is already embedded.

To prepare the static deployment directory locally, run:

```sh
node deploy/build.mjs
```

To update the hosted game, replace `index.html`, commit and push to `main`. Connected hosts deploy the new version automatically. The file must remain below GitHub's 100 MiB per-file limit; this build does not use Git LFS.

[Third-party notices](THIRD_PARTY_NOTICES.md)
