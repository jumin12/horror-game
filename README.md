# Horror Game

A first-person procedural dreamcore horror game: a deserted neighborhood, doors into enormous dimensions, one hidden key per world, hunting creatures, hiding places, and a 1990s VHS camcorder.

**[Play on GitHub Pages](https://jumin12.github.io/horror-game/)** · [Render hosting instructions](HOSTING.md)

## Play

Open the link and let the preparation bar reach 100%, then select **Enter the recording**. A desktop browser with WebGL2 and hardware acceleration works best. The full game, models, textures and sounds are embedded in `index.html`; it also runs offline when downloaded. The standalone file is approximately 96 MiB, so the first visit downloads a large file.

The loading bar counts actual world, surface, object, sound, atmosphere and shader preparation. All 80 audio clips and a nearby destination prepare before entry. Later areas stream through a bounded background queue.

The opening walk/fall is automatic. After landing, use WASD and mouse to explore. Press **E** to open or close a door, then walk through. Find the small brass key in each dimension, open its return door, and bring the key home. Each new expedition has another seed.

Creatures respond to sight, movement noise, light and radio lures. Quietly breaking line of sight gives you a chance to escape a search; a locker only protects you if the hunter did not see you enter. Charges have audible warnings, committed trajectories and recovery time. Creature voices and ground footsteps are positional, with walls muffling their sound.

Door interiors prepare in the background. E starts the leaf moving immediately; prepared open doorways retain a distant view even when their full world leaves the nearby cache. Nearby open doors show the actual live destination. Walking through retains that world, its inhabitants, positions and simulation state. Populations are seeded: many arrivals are empty, and opening a door never stages an encounter. Your held flashlight shines across the threshold with the same aim, hotspot and soft spill. Door leaves, walls and creatures cast shadows into the beam; illuminated dust and depth-bounded haze make its volume visible. Creatures can notice the flashlight through an open doorway and physically follow the observed player into the hub. Close house doors when you leave: inhabitants can cross an open threshold and remain in the neighborhood. The hub can become dangerous. Closing the entrance from inside also closes its neighborhood side; opening the return door reconnects both sides.

Nearby world fixtures light actual surfaces and cast shadows. Some faulty fittings flicker intermittently, with the visible bulb and emitted light dimming together.

Some indoor worlds have power failures and sparse surviving fixtures; night vision reveals surfaces and bright light sources. Taller worlds include connected upper galleries with guarded stairs and three walkable elevations. Printed inventory plates, barcode labels, fasteners and finer surface wear supplement the item detail. Repeated static props share cached geometry. Ten additional prop families add mortuary drawers, service carts, security desks, mail cubbies, recording equipment and maintenance clutter.

The recording has stronger walking/running bob and side sway, depth-aware shutter blur, persistent VHS grain and tape drift, with occasional green, cyan and magenta signal lines. Gentle effects reduce camera motion and moving tape damage. Additional interference is reserved for seven signal-associated encounters. Ordinary hunters cause fear and breathing changes without adding static. L operates a brighter flashlight against darker ambient light. Seeded skies vary between the familiar moon, ringed giants, binary suns, eclipses and planetary conjunctions. The opening sidewalk collapses beneath your feet with a voiced fall and physical landing.

The embedded cast includes 49 Blender assets, including an articulated emaciated pursuer, with skin and cloth bump/roughness detail. Forty-eight encounter types include patient stalkers, blind listeners, sprinters, flankers, pouncers and deceptive human-looking guides. Some imitate footsteps or beckon you toward danger; attacks telegraph and flow through anticipation, a committed strike and recovery.

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
