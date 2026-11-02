# Horror Game

A first-person procedural dreamcore horror game: a deserted neighborhood, doors into enormous dimensions, one hidden key per world, hunting creatures, hiding places, and a 1990s VHS camcorder.

**[Play on GitHub Pages](https://jumin12.github.io/horror-game/)** · [Render hosting instructions](HOSTING.md)

## Play

Open the link and let the preparation bar reach 100%, then select **Enter the recording**. A desktop browser with WebGL2 and hardware acceleration works best. The full game, models, textures and sounds are embedded in `index.html`; it also runs offline when downloaded. The standalone file is approximately 99 MiB, so the first visit downloads a large file.

The loading bar counts actual world, surface, object, sound, atmosphere and shader preparation. All 98 audio clips and a nearby destination prepare before entry. Later areas stream through a bounded background queue.

Press **I** or **Tab** to check six inventory pockets. Double-click a battery pack to replace the installed pack, or press **R**. You begin with one full installed pack and two spares. A pack powers either the flashlight or night vision for five minutes of active use; it does not recharge. A low-power warning appears with one minute left. Replacement takes 2.6 seconds, briefly disables powered vision and lowers the flashlight below the frame for the change, then returns it to a forward grip. The knurled flashlight, hand and actual spotlight share one moving origin and aim, so looking around keeps them aligned. Only the right hand and arm are visible, with corrected palm-facing finger flexion, rear thumb placement and a bodyward wrist, using an anatomical model from the MIT-licensed WebXR asset library, refined in Blender with UV-fitted leather/textile panels, inset stitching, separate roughness and relief maps, and a folded jacket sleeve. The fitted four-finger grip and opposing thumb wrap a slimmer handle, with an inward-facing right palm and a shaped wrist/cuff. The flashlight sits toward the right edge of the screen; running produces stronger arm bob and angular beam movement than walking, with subtle turn inertia. Find additional packs and pocket tape players in the worlds; double-click a tape player to leave a distraction for nearby listeners. The final pocket holds the current world key. Inventory pauses the game and power drain; items and charge persist in saves.

You carry a cassette recorder. Rare audio cassettes preserve damaged accounts from missing people, local key clues, lore, or strange sounds without speech. Recover them with **E**, then double-click the **Cassette recorder** in your pockets and select **PLAY / REWIND**. Playback continues while you explore and can attract nearby listeners; **T** stops it. Opening inventory pauses the tape at its current position. Recovered transcripts are optional, and the library and heard state persist in saves. Six clue recordings match the actual key cache in their originating world. Eighteen new ElevenLabs performances use four fictional speakers, with baked cassette hiss, pitch drift, dropouts and stutters. The existing camcorder footage viewer remains on **V**.

Supplies are scarce: guaranteed entrance batteries and tape players are removed. Consumable caches and cassettes appear farther into each dimension, often beside or behind scenery. You still start with two spare battery packs.

The opening walk/fall is automatic. After landing, use WASD and mouse to explore. Press **E** to open or close a door, then walk through. Find the small brass key in each dimension, open its return door, and bring the key home. Each new expedition has another seed.

Creatures respond to sight, movement noise, light and radio lures. Quietly breaking line of sight gives you a chance to escape a search; a locker only protects you if the hunter did not see you enter. Charges have audible warnings, committed trajectories and recovery time. Creature voices and ground footsteps are positional, with walls muffling their sound.

Door interiors prepare in the background. E starts the leaf moving immediately; prepared open doorways retain a distant view even when their full world leaves the nearby cache. Nearby open doors show the actual live destination. Walking through retains that world, its inhabitants, positions and simulation state. Populations are seeded: many arrivals are empty, and opening a door never stages an encounter. Your held flashlight shines across the threshold with the same aim, hotspot and soft spill. Door leaves, walls and creatures cast shadows into the beam; illuminated dust and depth-bounded haze make its volume visible. Creatures can notice the flashlight through an open doorway and physically follow the observed player into the hub. Close house doors when you leave: inhabitants can cross an open threshold and remain in the neighborhood. The hub can become dangerous. Closing the entrance from inside also closes its neighborhood side; opening the return door reconnects both sides.

Nearby world fixtures light actual surfaces and cast shadows. Some faulty fittings flicker intermittently, with the visible bulb and emitted light dimming together.

Some indoor worlds have power failures and sparse surviving fixtures; night vision reveals surfaces and bright light sources. Taller worlds include connected upper galleries with guarded stairs and three walkable elevations. Printed inventory plates, barcode labels, fasteners and finer surface wear supplement the item detail. Repeated static props share cached geometry. Ten additional prop families add mortuary drawers, service carts, security desks, mail cubbies, recording equipment and maintenance clutter.

The recording has stronger walking/running bob and side sway, depth-aware shutter blur, persistent VHS grain and tape drift, with independent random black tears and colored signal lines. Their positions, widths, timing, color and lifetimes change rather than looping a fixed pattern. Gentle effects reduce camera motion and moving tape damage. Additional interference is reserved for seven signal-associated encounters. Ordinary hunters cause fear and breathing changes without adding static. L operates a brighter flashlight against darker ambient light. Seeded skies vary between the familiar moon, ringed giants, binary suns, eclipses and planetary conjunctions. The opening sidewalk collapses beneath your feet with a voiced fall and physical landing.

The embedded cast includes 49 Blender assets, including an articulated emaciated pursuer, with skin and cloth bump/roughness detail. Forty-eight encounter types include patient stalkers, blind listeners, sprinters, flankers, pouncers and deceptive human-looking guides. Some imitate footsteps or beckon you toward danger; attacks telegraph and flow through anticipation, a committed strike and recovery.

| Control | Action |
| --- | --- |
| WASD / mouse | Move / look (2.85 m/s walk, up to 6.85 m/s run) |
| Shift / C / Space | Run / crouch / jump |
| E | Doors, keys, supplies, objects and hiding lockers |
| I / Tab / R | Inventory / inventory / replace battery |
| N / L / Z | Night vision / flashlight / hold zoom |
| Q | Contextual clue |
| P / V | Keep footage / replay footage |
| T | Stop the audio cassette |
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
