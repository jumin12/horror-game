# Horror Game

A first-person procedural dreamcore horror game: a deserted neighborhood, doors into enormous dimensions, one hidden key per world, hunting creatures, hiding places, and a 1990s VHS camcorder.

**[Play on GitHub Pages](https://jumin12.github.io/horror-game/)** · [Render hosting instructions](HOSTING.md)

## Play

Open the link and let the preparation bar reach 100%, then select **Enter the recording**. A desktop browser with WebGL2 and hardware acceleration works best. The full game, models, textures and sounds are embedded in `index.html`; it also runs offline when downloaded. The standalone file is approximately 71 MiB, so the first visit downloads a large file.

The loading bar counts actual world, surface, object, sound, atmosphere and shader preparation. All 98 audio clips and a nearby destination prepare before entry. Later areas stream through a bounded background queue.

Press **I**, **J** or **Tab** to open your field notebook. Its first spread holds the six inventory pockets. Double-click a battery pack to replace the installed pack, or press **R**. You begin with one full installed pack and two spares. A pack powers either the flashlight or night vision for 15 minutes of active use; it does not recharge. A low-power warning appears with one minute left. Replacement takes 2.6 seconds, briefly disables powered vision and lowers the flashlight below the frame for the change, then returns it to a forward grip. The knurled flashlight, hand and actual spotlight share one moving origin and aim, so looking around keeps them aligned. Only the right hand and arm are visible, with corrected palm-facing finger flexion, rear thumb placement and a bodyward wrist, using an anatomical model from the MIT-licensed WebXR asset library, refined in Blender with UV-fitted leather/textile panels, inset stitching, separate roughness and relief maps, and a folded jacket sleeve. The fitted four-finger grip and opposing thumb wrap a slimmer handle, with an inward-facing right palm and a shaped wrist/cuff. The flashlight sits toward the right edge of the screen; running produces stronger arm bob and angular beam movement than walking, with subtle turn inertia. Find additional packs and pocket tape players in the worlds; double-click a tape player to leave a distraction for nearby listeners. The final pocket opens your key ring. Inventory pauses the game and power drain; items persist in saves. Starting or reloading the game and retrying after death restores the installed pack to 100%; pausing and entering another world keep the current charge.

You carry a cassette recorder. Rare audio cassettes preserve damaged accounts from missing people, local key clues, lore, or strange sounds without speech. Recover them with **E**, then double-click the **Cassette recorder** in your pockets and select **PLAY / REWIND**. Playback continues while you explore and can attract nearby listeners; **T** stops it. Opening inventory pauses the tape at its current position. Recovered transcripts are optional, and the library and heard state persist in saves. Six clue recordings match the actual key cache in their originating world. Eighteen new ElevenLabs performances use four fictional speakers, with baked cassette hiss, pitch drift, dropouts and stutters. The existing camcorder footage viewer remains on **V**.

Supplies are scarce: guaranteed entrance batteries and tape players are removed. Consumable caches and cassettes appear farther into each dimension, often beside or behind scenery. You still start with two spare battery packs.

The opening walk/fall is automatic and lands outside the locked mansion gate. Older saves trapped within its fence are moved to the same safe approach. After landing, use WASD and mouse to explore. Press **E** to open or close a door, then walk through. Find the small brass world key, recover the return-door knob and lock cylinder, then fit the hardware at the return door with **E**. The key alone cannot release an incomplete latch. Open the repaired door and bring the key home. Successful returns trigger an automatic walk onto the street and a look back as that house contracts into a glowing atom and vanishes. Its lot stays empty in your save. Visited dimension seeds are remembered, including failed attempts, so the same world instance cannot be entered twice. The underlying 64 location programs generate different procedural instances. A large mansion occupies the center of the neighborhood behind an iron perimeter with one chained, locked gate.

Creatures respond to sight, movement noise, light and radio lures. Quietly breaking line of sight gives you a chance to escape a search; a locker only protects you if the hunter did not see you enter. Charges have audible warnings, committed trajectories and recovery time. Creature voices and ground footsteps are positional, with walls muffling their sound.

Door interiors prepare in the background. E starts the leaf moving immediately; prepared open doorways retain a distant view even when their full world leaves the nearby cache. Open house doors fold wide against the facade; their solid panels have separated surfaces to avoid texture interference. Doorway views clip against the camera near plane to remain stable at steep angles. Nearby open doors show the actual live destination out to 180 metres, twice the previous range. Walking through retains that world, its inhabitants, positions and simulation state. Populations are seeded: many arrivals are empty, and opening a door never stages an encounter. Your held flashlight shines across the threshold with the same aim, hotspot and soft spill. Door leaves, walls and creatures cast shadows into the beam; illuminated dust and depth-bounded haze make its volume visible. Creatures can notice the flashlight through an open doorway and physically follow the observed player into the hub. Close house doors when you leave: inhabitants can cross an open threshold and remain in the neighborhood. The hub can become dangerous. Closing the entrance from inside also closes its neighborhood side; opening the return door reconnects both sides.

Nearby world fixtures light actual surfaces and cast shadows. Some faulty fittings flicker intermittently, with the visible bulb and emitted light dimming together.

Some indoor worlds have power failures and sparse surviving fixtures; night vision reveals surfaces and bright light sources. Taller worlds include connected upper galleries with guarded stairs and three walkable elevations. Printed inventory plates, barcode labels, fasteners and finer surface wear supplement the item detail. Repeated static props share cached geometry. Ten additional prop families add mortuary drawers, service carts, security desks, mail cubbies, recording equipment and maintenance clutter.

The recording has stronger walking/running bob and side sway, depth-aware shutter blur, persistent VHS grain and tape drift, with independent random black tears and colored signal lines. Their positions, widths, timing, color and lifetimes change rather than looping a fixed pattern. Gentle effects reduce camera motion and moving tape damage. Additional interference is reserved for seven signal-associated encounters. Ordinary hunters cause fear and breathing changes without adding static. L operates a brighter flashlight against darker ambient light. Seeded skies vary between the familiar moon, ringed giants, binary suns, eclipses and planetary conjunctions. The opening sidewalk collapses beneath your feet with a voiced fall and physical landing.

Worlds now mix their enormous landmarks with dense networks of smaller places. Eight new layout families generate narrow mazes, branching suites, service passages, courtyard circuits, linked cloisters and larger halls with maze wings. Passages can be 2.4 metres wide. One hundred and eight family-specific room profiles include isolation wards, empty nurseries, guest bedrooms, shower rooms, specimen galleries, recording booths, server vaults, reading rooms, kitchens, glasshouses and caretaker sheds. Adjacent areas change purpose, flooring, wall finishes, ceiling height, fixture light and furniture. Entry, key, return and stair routes remain protected.

Six additional Blender models supply fitted beds, concave porcelain basins with taps and mirrors, reel recorders, ventilated server racks, welded school desks and empty cots. Furnished writing and listening stations combine the new models with chairs, telephones, paper and small objects. Existing photographic tile, plaster, timber, carpet and cloth maps supply their surface detail. Geometry and model templates are shared; detailed objects still stream within a bounded neighborhood.

The embedded library now includes 98 Blender assets. The furniture library includes worn sofas and lounge chairs, wardrobes, drawer chests, reception desks, kitchen ranges, examination chairs, X-ray stands, prams, card catalogues, deposit vaults, projectors, switchboards, pressure vessels and grandfather clocks. Seventeen fitted arrangements combine furniture with supported tabletop objects and seating. The new room profiles include radiography suites, boarding rooms, boiler houses, baggage security, analogue projection rooms and memorial gardens.

Fifty-six encounter types include patient stalkers, blind listeners, sprinters, flankers, pouncers and deceptive human-looking guides. Two additional articulated creatures have jointed limbs, recessed faces and skin or stitched cloth surfaces. Some hunters hold still while watched, creep closer when you turn away, seek concealed approaches, imitate footsteps or intercept your observed movement. Nearby encounters use reachable loaded passages. Attacks have visible and audible anticipation, committed lethal contact and recovery; you can dodge a strike, break line of sight or hide before being seen. Blind listeners search the last sound they heard. Quiet arrivals and entirely quiet world instances remain possible.

Model data is losslessly compressed inside the standalone HTML and decoded locally before preparation. Geometry, normals, UVs and articulation remain intact. Shared object templates, a maximum of 25 detailed streamed cells and five local hunters bound active detail; retired hunters release their individual materials.

Each dimension now has three sealed side annexes beside its long service route. Two contain the missing return-door hardware; the third is an optional supply cache. Their locks vary between a stamped room key, three lockpick pins, and a damaged spring-and-cam latch. Required keys, tools and handwritten solution slips are outside the rooms, so their own locks cannot trap them. Pins and cams retain their settings; solved rooms can be opened and closed normally. Shelves, parts trays, tool cases, letters, writing stations and 16 additional Blender hardware/paper props add detail and clues.

The notebook has an aged paper spread, an embedded handwritten typeface, inventory, a key ring, writable pages and an archive of found scraps. Press **K** to go straight to the ring. Select a key to name its paper tag; **Rewrite this tag** clears the label for a new name. Renaming never changes the lock a key fits. Key labels, notes, solved locks and fitted hardware persist in saves. Lost keys remain recorded as lost; returned keys stay on the ring.

Write on either facing page, add blank spreads, or tear out a written page and leave it as a physical note at your feet. Read it with **E** and optionally put it back in the notebook. Pages persist in their originating world and can guide you through its corridors. Read environmental scraps with **E**: they include repair clues and a bearing toward the actual nearest unread scrap. **Q** helps locate one. There is no map. The notebook pauses gameplay while open. Text highlighting and dragging are disabled throughout the game, including writing fields; ordinary typing and caret movement work normally.

| Control | Action |
| --- | --- |
| WASD / mouse | Move / look (2.85 m/s walk, up to 6.85 m/s run) |
| Shift / C / Space | Run / crouch / jump |
| E | Doors, keys, supplies, objects and hiding lockers |
| I / J / Tab / K / R | Notebook / notebook / notebook / key ring / replace battery |
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
