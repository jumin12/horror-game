# Horror Game

A first-person procedural dreamcore horror game: a deserted neighborhood, doors into enormous dimensions, 27 distinct world jobs, one released key per world, hunting creatures, hiding places, and a 1990s VHS camcorder.

**[Play on GitHub Pages](https://jumin12.github.io/horror-game/)** · [Render hosting instructions](HOSTING.md)

## Play

Open the link and let the preparation bar reach 100%, then select **Enter the recording**. A desktop browser with WebGL2 and hardware acceleration works best. The full game, models, textures and sounds are embedded in `index.html`; it also runs offline when downloaded. The standalone file is approximately 100 MiB, so the first visit downloads a large file.

Press **H** or **F1** for a four-page field guide covering movement, vision, physical objects, danger and the notebook. It is also available from the pause menu. Short optional field hints explain the next unfamiliar control during safe moments. Guide pages support keyboard navigation and narrow screens. Jump input has a brief landing buffer and ledge grace period.

The loading bar counts actual world, surface, object, sound, atmosphere and shader preparation. The complete 346-clip library remains embedded. Core Foley, the actual falling destination and one complete house nearest the landing prepare before entry; other worlds and their exclusive creature recordings prepare as you approach. Repeated shader layouts and already uploaded geometry reuse their prepared data. Later areas stream through a bounded background queue that uses measured frame headroom, with a small capped work slice during play.

Dimensions now use distinct architectural grammars inspired by the supplied concept references: furnished domestic shafts, enclosed suburbs, terraced villages, amber baths, yellow tube mazes, white aqueducts, glass reservoirs, apartment canyons, stocked markets, indoor snowfields, roller rinks, carpet rivers, pastel atria, glazed shopping galleries, conservatories, sleeper concourses, flooded record halls, rainy hotel courts, basement planetaria, industrial laundries, deserted cinemas, telephone exchanges, freight cathedrals, mirrored offices, storm reservoirs, clock libraries and salt mines. Every dimension has a footprint of at least 480 × 660 metres. Larger families extend to roughly a kilometre across, with distinct heights, galleries, districts and route structures. Ceiling height, gallery count, bay spacing, maze layout and building arrangements vary with the seed; tall worlds also extend below their arrival floor. These are procedural architectural families, not a claim that every room is a separately authored level.

The after-hours atmosphere uses lower ambient and sky illumination, darker indirect bounce and restrained exposure adaptation, while practical fittings and the flashlight remain readable. Regional sound now settles on one location-appropriate recording with a bounded crossfade; crossing a boundary briefly does not stack ambience, and leaving a world clears its old positional sound tails. Occasional spatial mechanical, timber, glass and water cues follow the actual local setting.

The six main regions in each world now include additional fitted destinations such as screened chambers, filter vaults, window courts, deposit stacks, glass nurseries, acoustic passages and raised inspection walks. Their sizes, heights, openings, finishes and wall details follow the local district and available supported space. Colonnades provide cross access, and existing interactive mechanisms are distributed into these destinations with a seed-specific order. The large outer footprints and world-specific three-stage jobs are preserved.

Three inhabitants also change their surroundings: the Orchard Widow leaves a slowly growing, textured mushroom trail; the Unseen extinguishes nearby visible-light circuits; the Lamplighter causes irregular interference in nearby fittings. Walls block the light effects, which alter real lamps and visible fixture emission. Lights recover after the creature moves on, and the same simulation continues through an open doorway and after entering it. Ordinary faulty fittings also have occasional individual dips. Fungal growth is rooted to supported floor, uses two instanced draws and is capped at 96 patches per active world.

Floors share canonical boundary vertices, including curved shores and stair openings. Stairs have treads, landings, headroom and connected walking surfaces. Raised basins have supports and coping; village terraces use continuous ring floors. Closed gables, porch columns, framed doors and windows, built-in shelving, upholstered window seats, stocked package labels and real playground slides provide closer detail. Static architecture remains present at distance without tree or building LOD swaps. Regional instancing and queued local details bound repeated exploration work.

Ordinary catalog props support **E** examination, small furniture movements or machine switches; saved object states and existing mechanical curios retain their responses. Written clues can point to actual nearby scraps. Acoustic treatment follows the type and scale of space, with spatial environmental recordings and surface-dependent footsteps. The 249-asset library, including all 56 inhabitants, remains embedded.

Eighteen close-range props now use authored Poly Haven meshes and their original PBR maps, including the lounge chair, sofa, school furniture, wooden cabinets, clock, luggage, bench, wheelchair and maintenance equipment. A cloth-covered car adds another neighborhood vehicle. The uncovered estate car and desk telephone were rebuilt in Blender with physical proportions, fitted glass and panels, real wheel arches, thin molding radii, individual keys and a connected handset cord. A manufacturing-normal pass gives 141 other props flat panels and deliberate creases without inflating their edges. The library remains shared and embedded; [asset credits](THIRD_PARTY_NOTICES.md) identify the sources.

Furniture receives the architectural light volume of its own world, with soft ground contact shading on supported movable objects. All 81 task stations have fitted controls, calibrated faces and animated knobs, needles or indicators tied to the working puzzle. Neighborhood mailboxes and bin lids have hinged responses; parked-car controls affect their radio and lamps. Existing grab, throw, collision, save and positional material-impact sounds continue to work.

Large water slides have opening intake hatches and guided descents through their actual curved tubes. Press **E** at an intake. Glass currents include a pressure-lift ascent and a spiral descent; the playground slide has a shorter seated animation. The camcorder leans into turns, wind and water recordings follow the ride, and the exit returns control on a connected landing. **Escape** pauses a ride.

**Ultra detail** in Sound & settings starts at native or supersampled resolution, capped at an 8,192-pixel drawing-buffer dimension. All quality modes now adapt their internal resolution under sustained frame-time pressure and recover gradually when there is headroom. This is a rendering option, not a claim of 8K source textures or Unreal Engine graphics. Surface maps use anisotropic mip filtering, fixed world scale and filtered procedural relief; the VHS layer remains adjustable through Recovered detail and Tape damage.


Press **I**, **J** or **Tab** to open your field notebook. Its first spread starts with six inventory pockets. One canvas backpack, reserved in exactly one world per campaign, permanently expands this to twelve pockets and doubles battery/tape-player carrying limits. It never respawns after collection. Double-click a battery pack to replace the installed pack, or press **R**. You begin with one full installed pack and two spares. A pack powers either the flashlight or night vision for 15 minutes of active use; it does not recharge. A low-power warning appears with one minute left. Replacement takes 2.6 seconds, briefly disables powered vision and lowers the flashlight below the frame for the change, then returns it to a forward grip. The knurled flashlight, hand and actual spotlight share one moving origin and aim, so looking around keeps them aligned. The first-person view shows the right flashlight hand and arm, with corrected palm-facing finger flexion, rear thumb placement and a bodyward wrist, using an anatomical model from the MIT-licensed WebXR asset library, refined in Blender with UV-fitted leather/textile panels, inset stitching, separate roughness and relief maps, and a folded jacket sleeve. The fitted four-finger grip and opposing thumb wrap a slimmer handle, with an inward-facing right palm and a shaped wrist/cuff. The flashlight sits toward the right edge of the screen; running produces stronger arm bob and angular beam movement than walking, with subtle turn inertia. Find additional packs and pocket tape players in the worlds; double-click a tape player to leave a distraction for nearby listeners. The final pocket opens your key ring. Inventory pauses the game and power drain; items persist in saves. Starting or reloading the game and landing after a capture restores the installed pack to 100%; pausing and entering another world keep the current charge.

You carry a cassette recorder. Rare cassettes now contain damaged environmental impressions belonging to their world, with impersonal, ambiguous written fragments. Recover them with **E**, then double-click **Cassette recorder** and select **PLAY / REWIND**. Playback continues while you explore and can attract nearby creatures; **T** stops it. The collection prevents repeated definitions and retains its heard state. The camcorder footage viewer remains on **V**.

Supplies are scarce: guaranteed entrance batteries and tape players are removed. Consumable caches and cassettes appear farther into each dimension, often beside or behind scenery. You still start with two spare battery packs.

The opening walk/fall is automatic and lands outside the locked mansion gate. Older saves trapped within its fence are moved to the safe approach. After landing, use WASD and mouse to explore. Ordinary neighborhood houses require no key: press **E** to open or close their front door, then walk through its live view. Lots without an unused destination remain empty, including in repaired older saves. The mansion gate remains chained. Each dimension has an authored, three-stage job tied to its setting: dispatch a train, restore an aqueduct, screen a lost film, reconnect an exchange, or complete another world-specific task. Notes explain controls and give clues. Complete the job to release its sealed brass key, then open the return door and bring the key home. Tasks and receiving stations are distributed across the world, sometimes on another connected floor. **Q** gives the next task's distance, compass bearing, elevation and whether to take stairs up or down.

The campaign assigns at most **one house to each of 27 architectural families**. Once a family is entered, neither another house nor a hidden passage can offer it again. Its authored job program is also retired: there is no reroll after failure. Hidden passages draw from the same unused roster and may therefore consume a house's destination. Completed outer houses collapse into a glowing atom and leave an empty lot. This is a finite campaign of 27 distinct world/job families with procedural layouts and settings, rather than unlimited nonrepeating authored puzzle mechanics. New campaigns generate different seeds. Known visits from older saves migrate into the retirement ledger. A large mansion occupies the center behind an iron perimeter with one chained gate.

Creatures respond to sight, movement noise, light and radio lures. Quietly breaking line of sight gives you a chance to escape a search; a locker only protects you if the hunter did not see you enter. Charges have audible warnings, committed trajectories and recovery time. Creature voices and ground footsteps are positional, with walls muffling their sound. Hunters retain observations longer, commit more strongly at close range, and use bounded background path searches with safe local steering and recovery around obstructions. Breaking sight and using cover still matters.

Door interiors prepare on approach and retain a consistent destination seed. E starts a prepared leaf moving immediately. A genuinely cold door keeps its solid leaf closed until its exact view is ready, then finishes the requested opening; it never exposes an empty placeholder. Other prepared neighborhood doors survive a world crossing within a four-preview cache. The return route also prepares in the background. Prepared open doorways retain a distant view even when their full world leaves the nearby cache. Open house doors fold wide against the facade; their solid panels have separated surfaces to avoid texture interference. Doorway views clip against the camera near plane to remain stable at steep angles. Nearby open doors show the actual live destination out to 180 metres, twice the previous range. Walking through retains that world, its inhabitants, positions and simulation state. Populations are seeded: many arrivals are empty, and opening a door never stages an encounter. Your held flashlight shines across the threshold with the same aim, hotspot and soft spill. Door leaves, walls and creatures cast shadows into the beam; illuminated dust and depth-bounded haze make its volume visible. Creatures can notice the flashlight through an open doorway and physically follow the observed player into the hub. Close house doors when you leave: inhabitants can cross an open threshold and remain in the neighborhood. The hub can become dangerous. Closing the entrance from inside also closes its neighborhood side; opening the return door reconnects both sides.

Being caught or falling out of a dimension opens the same opaque, crumbling shaft beneath your feet. The camera follows the fall, you drop back into the prepared neighborhood outside the mansion gate, and the hole seals behind you. Play resumes automatically with brief protection from another capture. The unfinished house and its carried key are lost; returned keys, notebook, collected supplies and the backpack persist. Recovery cancels held objects, dragging, hiding, reloads and movement input, restores the installed battery, and reuses the neighborhood rather than rebuilding it during the fall. Saving or refreshing during recovery resumes safely in the neighborhood.

The 56 creature identities are partitioned among the 27 world families: two identities in each of the first 26 families and four in the salt mine. A creature's model, sounds and personal hunting profile belong to that world. They may follow through its house into the central neighborhood, but cannot migrate into another world's roster. Existing saved preview populations are filtered to their assigned identities.

Jumping uses swept head and foot collision against architecture and movable furniture, including circular supports. Furniture tops can support a landing. Standing height follows the actual crouch amount; releasing crouch below a low obstacle keeps the player tucked until there is headroom. The initial rupture retains its deliberate open fall path and retires the old sidewalk scene through the background queue.

Wet worlds and damp regions gain bounded, supported water films with soft edges, surface reflections, gradual spread and footstep ripples. Crossing them selects the existing water footstep recordings. These share one instanced draw and do not add reflection-camera passes. Duplicate architectural members are consolidated, deliberate floor overlays use separated depth, and the camera near plane improves distant depth precision.

Nearby world fixtures light actual surfaces and cast shadows. Some faulty fittings flicker intermittently, with the visible bulb and emitted light dimming together. Flashlight and nearby fixture spot shadows refresh with moving geometry. Bounded spot shadow passes replace repeated point-light cubemap updates; the beam remains bounded by real scene depth and shadow maps.

Some indoor worlds have power failures and sparse surviving fixtures; night vision reveals surfaces and bright light sources. Tall worlds have guarded galleries, connected stairs and storeys above and below the arrival level. Printed inventory plates, barcode labels, fasteners and finer surface wear supplement the item detail. Prop templates share cached geometry across dimensions. Ten additional prop families add mortuary drawers, service carts, security desks, mail cubbies, recording equipment and maintenance clutter.

The recording has stronger walking/running bob and side sway, depth-aware shutter blur, persistent VHS grain and tape drift, with independent random black tears and colored signal lines. Their positions, widths, timing, color and lifetimes change rather than looping a fixed pattern. Gentle effects reduce camera motion and moving tape damage. Additional interference is reserved for seven signal-associated encounters. Ordinary hunters cause fear and breathing changes without adding static. L operates a brighter flashlight against darker ambient light. Seeded skies vary between the familiar moon, ringed giants, binary suns, eclipses and planetary conjunctions. The opening sidewalk collapses beneath your feet with a voiced fall and physical landing.


Six additional Blender models supply fitted beds, concave porcelain basins with taps and mirrors, reel recorders, ventilated server racks, welded school desks and empty cots. Furnished writing and listening stations combine the new models with chairs, telephones, paper and small objects. Existing photographic tile, plaster, timber, carpet and cloth maps supply their surface detail. Geometry and model templates are shared; detailed objects still stream within a bounded neighborhood.



Thirty-two additional Blender fixtures include glass-front washers, ticket dispensers, pneumatic tubes, payphones, public scales, mushroom pool fountains, toy ducks, lifeguard chairs, food-court furniture, projector banks, marble runs, miniature suburbs and rain shelters. New room profiles include coin-laundry cathedrals, unassigned departure lounges, telephone gardens, dead mall courtyards, optometry rooms, indoor weather stations, missing-people cinemas and an ocean inside a guest-room suitcase.

Use **E** at the new fixtures. Twenty-one curiosity types have saved controls: turn washers, fans, reels and globes; open specimen drawers and suitcase lids; start contained rain and pool fountains; open daylight shutters; release a captive marble; or switch on a monitor showing your actual camera feed. Tiny fish swim beneath the suitcase water and stay inside its walls. The first discovery of each type is recorded in the notebook. Some loud machines attract nearby listeners.

Ticket dispensers each issue one paper ticket. Pneumatic tubes exchange tickets for a bearing toward an actual unread scrap. A vending machine can deliver one additional battery per dimension; it will wait if your pockets are full. Payphones and clocks also give local paper-trail clues. Tickets and machine states persist; these activities supplement the main key and missing-door-parts puzzles.

Visual research used photographs of [abandoned mall fountains and galleries](https://www.cbsnews.com/pictures/erie-photos-abandoned-malls-and-stores/), [foggy indoor swimming spaces](https://cuddlyland.com/liminalspace_kowai/), and [warm hotel lobbies and stairs](https://www.locationshub.com/blog/2014/9/30/the-magnificent-locations-of-the-grand-budapest-hotel). These informed the spaces and lighting; the new fixtures are original Blender models, and none of those photographs are embedded in the game.

Each dimension has only one of each freestanding prop type, including types inside furniture arrangements. Ownership persists when districts unload and when a save reloads. Equivalent duplicate meshes have been consolidated. Structural fixtures and working door mechanisms remain available wherever the building requires them. Each dimension can supply at most one additional battery, tape-player lure and cassette. The neighborhood keeps its architectural dressing.

The current detail pass adds rounded construction edges, recessed fasteners, sewn upholstery, anatomical hands and connected limb joints. Fish have tapered bodies, gill edges and articulated translucent fins. Furniture uses continuous veneer rather than floorboard textures; steel and enamel retain their own finishes. The 249 active assets comprise 56 creature models and 193 other props, architectural models and the player body. Shared geometry, local detail filtering and compact mesh storage keep the standalone build below 100 MiB. Anatomical source and hand credits are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

The latest physical-model pass covers the complete active library. Twenty-five props have rebuilt manufactured assemblies, including an inset washer drum and gasket, a rotary handset and dial, caster-supported gurneys, fan guards and shaped blades, pressure regulators, CRT equipment, water bottles and curved plant leaves. New props keep their proportions inside their reserved placement space. Material finishes distinguish enamel, steel, rubber, leather, plastic, upholstery and skin; curvature and cavity masks control localized surface variation. Existing photographic maps retain their resolution. A high-quality WebP encoding of the canvas map makes room for new geometry and sound in the standalone file.

All 56 creature bodies now use weighted continuous anatomy. Twenty-eight humanlike bodies use complete CC0 MakeHuman topology and anatomical joint placement, with individual proportions and full tissue beneath fitted garments. Twenty-two nonhuman bodies have a single connected organic skin surface, smoothly weighted across their joints. Four serpent inhabitants use complete flexible snake strands instead of rigid humanoid limb pieces; two annelids have uninterrupted body-to-mouth tissue. Wings, sensory structures, claws and teeth attach at their anatomical roots. Planted animal feet, actual limb lengths, toe-aware soles and bounded foot corrections keep animation from pulling joints apart. Creature materials add a generated skin, scale, chitin and wing atlas with local detail filtering.

The diversity pass reshapes sixteen inhabitants: eight continuous, rigged skulls with recessed mouths and eyes, weighted jaws, rooted teeth, stitched tissue, curled horns or hanging hair; and eight coherent serpent, annelid and tower-body silhouettes. Their skin and clothing finishes, head tracking, turning rates, finger movements and attack poses differ by identity. Existing extra-arm and tail attachments remain part of the continuous rigs.

Twelve new Blender-built physical objects add metronomes, cable reels, wash pitchers, handtrucks, surveyor levels, phonographs, balances, bellows, typewriters, air horns, folding stools and specimen cases. Six themed arrangements per dimension reserve unique companion furniture and clear operating approaches: 162 settings across the 27 world families. **E** operates or examines them; movable objects also use the existing grab and throw controls. Mechanisms animate fitted parts and retain their state and layout in saves. Metronomes and phonographs emit positional sound that listeners can investigate. This pass reuses the existing 346 ElevenLabs recordings.

All 56 named inhabitants have separate Blender meshes, individual surface patterns, personal hunting profiles and four dedicated ElevenLabs recordings each: idle breath, warning, attack and movement. The cast spans tiny 32 cm creatures and giants up to 11 metres tall, shadow people, humanoids woven from snakes, living luggage, a tile-backed centipede, three-legged animals, moths, wall listeners and ceiling crawlers. Humanoids vary in age, build, facial proportions, skin and clothing. Animal legs join continuous bodies through recessed shoulders and hips, with tapered limbs and articulated feet. Giants spawn in spaces that accommodate their bodies, and bend their spines and knees for lower passages they can physically traverse. Each dimension remembers spawned creature identities, preventing another copy of a retired identity from being generated there.

Hunters still use sight, noise, light, remembered positions, navigation and real attack contact. Individual profiles change perception, pursuit speed, warnings, patience, stride and cooldowns. Some freeze under observation, flee a beam, circle, retreat into an ambush, imitate a guide or pursue in bursts. Shadow entities fade away, move through reachable space and audibly reveal themselves before they can attack again. Clinging creatures approach actual walls, climb onto supported ceilings and give a warning before dropping; their movement stays tied to the rendered surfaces. The 224 new dry creature performances join the 98 existing environment, player and cassette recordings.

Some hunters hide their bodies behind corners and lean their heads out to watch before rushing. Others stare and smile before closing the distance. Grabbing predators can seize and drag you away: repeatedly press **Space**, or tap the on-screen escape button, to break free. Holding the key does not count as repeated presses. Escaping briefly staggers the predator, then it resumes the chase; failing the struggle opens the returning hole beneath you.

Dimensions also contain two concealed, unmarked service-door alcoves that can lead into unused full-size worlds. Press **E** and walk through as at a neighborhood house: the live view, flashlight and destination inhabitants belong to the exact world you enter. Each descendant has its own themed job and key. Completing it returns you to its parent and seals that branch. Partial device settings, notebook and object states remain intact through returns and save/reload. Only the immediate parent stays cached; older ancestors prepare in the background. When no unused family remains, a passage stays sealed.

Model data uses compact sub-millimetre position storage, encoded normals and precision-checked UVs, compressed inside the standalone HTML and decoded locally before preparation. Articulation and material assignments are preserved. Shared object templates, a maximum of 25 detailed streamed cells and five local hunters bound active detail; retired hunters release their individual materials.

The repeated knob/cylinder/three-annex expedition has been replaced by the world's themed job. Its ordered combination of instruments, clues, spatial travel and completion conditions differs in every family. Shared interactions include channel patching, valve balance, timing contacts, a nine-cell service grid, chronological records, carried deliveries and actual camcorder surveys. Each family has a different ordered three-stage program, with persistent settings and a gated key.

The notebook has an aged paper spread, an embedded handwritten typeface, inventory, a key ring, writable pages and an archive of found scraps. Press **K** to go straight to the ring. Select a key to name its paper tag; **Rewrite this tag** clears the label for a new name. Renaming never changes the lock a key fits. Key labels, notes, completed jobs and device settings persist in saves. Lost keys remain recorded as lost; returned keys stay on the ring.

Write on either facing page, add blank spreads, or tear out a written page and leave it on the floor, or choose **Pin page to wall / door ahead** while facing a surface within reach. Pinned pages remain upright, sit beyond raised door panels, follow swinging leaves and survive reloads. Found scraps, photographs and field observations are filed by world; personal writing retains its originating location. Read it with **E** and optionally put it back. Authored scraps describe impersonal architectural anomalies and indirect calibration clues. They do not tell stories about missing people. Up to 1,024 distinct impressions are retained.

**G** opens an explored map in the notebook. Unseen space stays unknown; maps record separate elevations, your trail, and nearby visible stairs and instruments. Pan, zoom, draw pencil routes, leave danger/door/clue labels, erase or undo marks, and switch between recorded locations and floors. **B** takes a photograph of the actual game scene and creates a geotagged field observation. Edit its creature/location title and notes, pin it to the map, or paste it onto a writing page. The first job and notebook guide these controls. Maps, drawings, photographs and entries survive saving and reloading. Storage is bounded to 24 photographs and 160 observations, with up to three photographs per page. The notebook pauses gameplay. Text highlighting is disabled throughout the game; ordinary typing and caret movement work normally.

| Control | Action |
| --- | --- |
| WASD / mouse | Move / look (2.85 m/s walk, up to 6.85 m/s run) |
| Shift / C / Space | Run / crouch / jump |
| LMB / RMB | Hold to carry or drag / throw held object |
| Wheel / Shift + wheel | Carrying reach / turn held object |
| E | Doors, slide intakes, keys, supplies, objects and hiding lockers |
| I / J / Tab / K / R | Notebook / notebook / notebook / key ring / replace battery |
| N / L / Z | Night vision / flashlight / hold zoom |
| Q | Next job, distance, compass direction, and elevation |
| B / G | Photograph scene / explored map and annotations |
| P / V | Keep footage / replay footage |
| T | Stop the audio cassette |
| F / M / Escape | Fullscreen / mute / pause |

Touch controls are included. Saves and captured footage stay in browser storage on the current device and website origin. The game does not request your real microphone or webcam.

## Physical interaction

Doors begin closed on a new play session, including doors previously saved open. During play they retain the position you leave them in. Use E to open/close, or hold the left mouse button and drag a door. Furniture can obstruct a moving door leaf; clearing it lets the door continue.

Hold **LMB** over a loose object to pick it up. Move the view to carry it, release to drop, and press **RMB** while holding it to throw. **Mouse wheel** adjusts reach; **Shift + wheel** rotates it. Heavy movable furniture drags along the floor, and walking against it pushes it. Objects collide with the world, tumble, settle on floors and supports, and produce positional material impacts that creatures can hear. Moving a support releases the loose objects resting on it. Moved positions and rotations are saved; collecting an item removes its physical obstruction. Mounted equipment and hiding lockers keep their working controls.

Every one of the 27 dimensions has its own physical clue object tied to its local job, including the aqueduct pressure gauge, disconnected telephone trunk plug, cinema film canister, clock escapement and salt-encrusted lamp. **E** inspects the object and keeps its calibration clue in the notebook. These complement the distinct three-stage themed jobs listed below.

Movable furniture can block the player or brace a doorway, but hunters knock it aside and continue their pursuit. Only displaced, awake props enter the physics solver; ordinary scene dressing stays asleep. Streamed chunks retain moved objects and their controls. Registration itself runs in small loading jobs, and physics also runs beyond open doorways. In the final local 1280 × 960 Balanced check with the replacement props, median streaming frame costs were 8.9 / 6.0 / 9.4 ms for the suburb, market and storm reservoir; p95 was 13.6 / 10.2 / 20.8 ms. Their largest background preparation slices were 17.1 / 14.9 / 25.7 ms. These are scene-specific measurements on this machine; hardware, loading and view affect frame times.

## Dimension families

The campaign contains **27 architectural families and 27 distinct themed job programs**. Each family is available once per campaign, including hidden descendants. Seeds vary geometry, size and device settings; some control mechanics are shared across different jobs.

| Dimension | Themed job |
| --- | --- |
| Domestic Void | Recall the missing floor. |
| Indoor Suburb | Deliver the undeliverable post. |
| Terraced Village | Give the lake back its tide. |
| Amber Baths | Reheat the lower baths. |
| Tube Warren | Find the breathing tube. |
| White Aqueduct | Restart the aqueduct. |
| Glass Estuary | Trace the borrowed current. |
| Apartment Canyon | Answer the absent tenants. |
| Endless Market | Close the store properly. |
| Indoor Winter | Thaw a path through winter. |
| Last Roller Rink | Play the final side. |
| Carpet River | Divert the river under the carpet. |
| Pastel Atrium | Wake the color wells. |
| Sunken Galleria | Make the galleria announce closing. |
| Glass Conservatory | Keep the conservatory alive. |
| Sleeper Concourse | Dispatch the train that never came. |
| Flooded Record Hall | Refile the drowned archive. |
| Tide Hotel | Lower the tide inside the hotel. |
| Basement Planetarium | Return the false sky to its orbit. |
| After-hours Laundry | Finish the ownerless wash. |
| Red Picturehouse | Screen the lost reel. |
| Telephone Exchange | Connect the last caller. |
| Freight Cathedral | Release the wrong freight. |
| Mirror Office | Undo the mirrored office. |
| Storm Reservoir | Survive the reservoir surge. |
| Clock Library | File the hour that was removed. |
| Salt Mine | Vent the salt below the city. |

The audit adds static indirect-light volumes traced from actual fixtures and structural occluders, alongside the nearby shadow-casting lights. Fittings sit outside solid walls; stairs have aligned landings and visible stringers, and deep floors remain usable below 100 metres. Gardens, masonry, joinery, paintings, snowbanks, ducts and environmental props follow the location. Freestanding prop types still occur once per dimension.

Six new Blender instruments and four original ElevenLabs room tones are embedded. Conservatory irrigation, galleria ventilation, terminal air and rain-on-glass have their own recordings; the archive and planetarium combine these with existing ambience. Source models, recordings and generation provenance remain in the local development workspace.

Balanced rendering is now the default, with adaptive internal resolution, bounded detail cells, shared archive-book atlas rows, and scheduled shadow updates. Distant materials remain opaque instead of using noisy distance dithering. In an earlier local 1,280 × 960 hardware-rendered comparison with three active hunters, median rendering cost improved from 23.1 to 10.5 ms in Domestic Void, 16.9 to 8.3 ms in the Market, and 14.0 to 11.9 ms in Tide Hotel. These are scene-specific measurements, not a guaranteed frame rate; loading, hardware, resolution and camera view affect results. The standalone retains all 249 models and 346 recordings.

The streaming pass divides floor buffers, street materials, edge construction, collision indexing, indirect-light baking and nearby encounter routes into smaller background jobs. Nearby detail finishes before it becomes visible; interrupted work releases its staged groups and resources. Loaded detail stays bounded to 25 cells. A stable approach prefetches one closed doorway, while open-door views retain their 180-metre live range and explicit interactions take priority. Interactive curios have one persistent location owner per model, including across unload/reload.

In the local 1,280 × 960 Balanced test, the largest destination-preparation work slice fell from 467.1 to 15.4 ms for Indoor Suburb, 89.0 to 8.8 ms for the Market, and 115.0 to 6.4 ms for Storm Reservoir. During repeated cell changes, their 95th-percentile measured frame costs fell from 33.5 / 9.8 / 31.2 ms to 11.7 / 8.0 / 7.3 ms. These are measurements of the tested scenes on this machine, rather than a universal frame-rate guarantee. The resource regression interrupted streaming 18 times without leaving unfinished groups; interactive-machine state survived save/reload.


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

## Living-world and player-body pass

All 27 dimensions add six distinct searchable containers with persistent hinged lids. Some contain a scarce supply; others reveal only material details or an unsettling response. Additional supported furnishings are selected by theme without duplicating a prop type within a world. Impact sounds distinguish wood, metal, glass, ceramic and cloth; physical door closure and pinned-paper handling have their own recordings. Eight additional ElevenLabs recordings are embedded with no account key.

The complete player body uses continuous anatomical skin and a shared skeleton beneath fitted clothing, with modeled low shoes and walking/crouching poses. Its right shoulder and elbow reach the actual flashlight cuff. Reflections use the same wrist, grip and flashlight motion as the first-person arm. The camera hides its own head and duplicate arms; reflections retain the complete body.

Twenty-seven humanoids received individual anatomical proportions in Blender, followed by a second pass on eighteen identities. Connected coat hems share the waist skin weights and follow the thighs; concealed inner trouser fabric is excluded from rendering to prevent cloth crossing during attacks. Altered sensory structures, masked heads, and individual bark, chitin, wax and reflective surfaces provide more distinct silhouettes. Stride length, pace, arm swing, asymmetry and attention motions vary by identity.


## Connected regions within every dimension

Each of the 27 dimensions now contains six persistent, seeded regions (162 individually named regions across the world roster). These stay within the existing large world footprint. Their architectural itineraries mix furnished passages, archive/depot aisles, greenhouse courts, bath wings, service plants, exhibition colonnades, performance spaces, winter areas and dark utility wings, selected to suit the parent dimension. Narrow gallery worlds receive fitted smaller sections; the complete worlds remain large.

Regions change the actual floor material, architectural surfaces, fixture color and intensity, supported room construction, local furnishing preferences and acoustics. Interior piers support the ceilings; planters, shelves and machinery sit beside a continuous central passage. Existing floor triangles are assigned materials directly, preserving the original joined vertices, UVs, water openings and stair holes. Region structures are reserved before the main architectural grammar, then fitted around existing load-bearing elements. Mission routes and stair reservations retain clearance.

Ambient recordings crossfade after a short boundary dwell, and reverb follows the local region. Surface footsteps follow the rendered floor. Region names appear as discovered areas in the notebook survey. This adds internal variety without adding loading screens, splitting a dimension into separate maps, or reusing a completed world.


## Creature anatomy and route discoveries

The 56-creature roster now uses more varied continuous body proportions, directly sculpted anatomical faces, shadow and timber surfaces, horned forms and asymmetric sensory structures. The Bent Surveyor, Curtain Man and Folded Nurse have additional articulated arms with continuous skinned elbows and rooted hands. Proximal arm roots are fitted inside each sculpted thorax and blend into its torso weights, including folded poses. Eight creatures have six-bone tapered tails; the mantis has six legs. The Water Guest has a lobed bell, an attached inner membrane and oral tendrils. Most added head shells were removed after visual review in favor of the original connected anatomy.

Humanoid attacks use individual arm and torso poses. Some predators hold still under observation before unfolding into pursuit; running bursts differ by identity. Jumping forms compress before launch, follow a ceiling-limited arc and recover on landing. Tail motion follows movement with a phase delay. Peeking preserves the torso's breathing without accumulating spinal rotation.

Each dimension includes 12 distinct persistent mechanisms along exploration routes: inspection shutters, specimen drawers, pressure hatches, winding mechanisms, ceramic keys, counterweights and related exhibits. Their material and setting follow the dimension. Narrow galleries receive compact fixtures. Footprint, support and approach checks protect existing circulation. Fixed frames are batched; moving components remain articulated. Vaulted district sections, ribs, skirting and fitted services add architectural detail.

Twelve further ElevenLabs recordings cover object operation, organic joint movement, ceiling contact and quiet structural ambience (346 recordings total). New generated organic material sources supply skin, hide, chitin, membrane, wax, bark and cartilage detail. Models, textures and recordings remain embedded in the single HTML file; no service key is shipped.

Validation includes the complete 27-world route and 81-stage puzzle audit, 324 supported nonduplicate mechanisms, all 56 idle/attack rigs, shared-vertex skin weights, grabbing/escape/pursuit, corner peeking, low-ceiling folds, wall-to-ceiling transitions, jumping and landing. All 12 new mechanisms were exercised with actual E input, and the new recordings were decoded and checked for peak level, RMS and duration. This remains a browser game; these changes do not claim parity with a full AAA production.


## Bodycam rendering and loading

The mesh archive now expands on demand without changing its geometry, UVs or skin weights. Only resident creature templates and surface sets stay active; unused templates release GPU resources and reconstruct from the immutable archive when needed. Regional sound buffers have a separate resident cache, with destination ambience and all four voice/footstep recordings per owned creature ready before a doorway can open. Encoded recordings remain available for later areas. Vertical footstep contacts use a prebuilt spatial triangle index with the original floor geometry, UVs and material groups; they avoid rescanning the entire level. Door picking rejects distant leaves before checking their detailed meshes.

The camera has a wider lens, damped vertical movement and clearer recovered detail while retaining adjustable VHS grain, chromatic faults and tape movement. HDR highlight extraction and separable bloom preserve fixture color. Flashlight air integrates real scene depth and shadow visibility at reduced resolution, then uses depth-aware reconstruction to retain wall edges. Static shadow maps are reused; camera movement, doors, physics, nearby creatures and working mechanisms invalidate them immediately. Water uses world-anchored ripples, grazing-angle reflections and a roughness filter, with reflection resolution and refresh rate following the quality setting.

The after-hours pass was checked across all 27 families, their 162 primary region traversals and 81 task stages, plus the added destination approaches and raised walkways. The live-input suite also covers regional audio, actual mushroom growth, real fixture extinction/interference and recovery, night vision, door transfer and automatic capture recovery. A same-machine startup check measured 31.0 seconds versus 30.7 seconds for the immediately preceding build; both retained 269 GPU textures at ready. Cold shader and upload stalls remain inside preparation.

The earlier cache and rendering optimization pass, tested locally at a fixed 1,280 × 960, Balanced quality and seed 4919, measured:

| Measurement | Previous build | Updated build |
| --- | ---: | ---: |
| Startup to ready, local file | 46.4 s | 24.4 s |
| GPU textures at ready | 800 | 269 |
| Decoded audio at ready | 383 MiB | 193 MiB |
| Neighborhood GPU frame, median | 4.14 ms | 1.35 ms |
| White Aqueduct GPU frame, median | 9.39 ms | 6.67 ms |
| Endless Market GPU frame, median | 12.19 ms | 6.25 ms |

In a separate two-creature White Aqueduct CPU profile, the 95th-percentile simulation update fell from 13.7 to 2.4 ms after indexing floor contacts; rendering remained a separate cost.

These are scene-specific measurements on this machine with the same resolution and view, rather than a guaranteed frame rate. Network transfer of the approximately 100 MB standalone, cold shader compilation, new-world preparation, hardware and quality settings still affect loading and frame times. The changes improve the existing embedded materials and rendering; they do not claim new 8K source textures or parity with Unreal Engine.

The downward first-person view retains the opaque jacket, trousers and boots. Head and facial visibility follows anatomical weights instead of a horizontal cut through the body, including while crouching or running. The lens stays ahead of the chest; reflections retain the complete head and body.


## Rare environmental creatures and distinct encounters

Environmental abilities belong to **seven of the 56 identities**, spread across seven of the 27 world families. The other 20 families have none. These are available encounters, not guaranteed spawns in each visit.

| Creature | Environmental behavior |
| --- | --- |
| Orchard Widow | Slowly grows attached mushrooms along its route |
| Unseen | Extinguishes nearby visible light fittings; they recover after it leaves |
| Lamplighter | Causes irregular interference in nearby visible fittings |
| Stair Animal | Pulls loose ordinary props with collision physics, leaving protected supplies and objective items alone |
| Window Guest | Leaves condensation on physical walls with drifting local mist |
| Water Guest | Leaves supported wet patches and falling droplets; footsteps recognize the wet ground |
| Last Escort | Creates drafts that close ordinary interior doors, with their normal animation and latch sound |

The rest of the cast gains contrast through pursuit and anatomy. Serpentine hunters pause and approach laterally; auditory hunters stop to locate noise; heavy creatures plant their weight and accelerate slowly; runners change their approach; false guides reveal themselves at different distances. Attack anticipation, strike speed, commitment and recovery differ by anatomy and identity. Crawlers, segmented bodies, insects, antlered creatures and membrane forms have additional attached attack poses. Their existing exclusive models, surface sets and individual recordings remain intact.

Deposits and particles live in the actual destination scene, including when viewed through an open house. Entering adopts the same state and prepared fixture shadow maps. Floor and wall support checks prevent floating deposits. Growth uses capped instancing; ecological particles use one capped 256-particle batch per relevant world. Ordinary worlds allocate no new ecological geometry. Door drafts exclude the return exit, neighborhood transport doors, nested-world gates and doors immediately beside the player.

Powered fittings provide a larger share of light through pooled real-time shadowed spotlights. Shafts use depth testing and the actual fitting shadow map, so walls occlude them. Directional sconces aim into their rooms, emissive fixtures and architectural bounce respond to power faults, and bloom preserves a sharper highlight core. Static damp roughness adds local material response without moving texture coordinates or adding bitmap downloads.

Validation covers all 27 layouts, 162 district traversals, 81 puzzle stages, the seven environmental identities, all 56 animated rigs, actual prop physics, open-door scene adoption, lighting, sound, interaction and capture recovery. Effects use bounded pools and existing recordings; no new service key or external asset request is required. Browser hardware, preparation and quality settings still determine frame times.


A same-session comparison of the rare-ecology build against its immediate predecessor used Balanced quality, seed 4919 and an unchanged 1,280 x 960 buffer. Startup measured 22.14 s versus 21.91 s, with 269 GPU textures in both. CPU frame medians were 3.2/7.5/16.2/8.8 ms for the neighborhood, aqueduct, two-creature aqueduct and market, versus 3.3/7.4/16.3/8.3 ms before. GPU medians were 1.50/5.85/9.73/6.72 ms, versus 1.34/6.22/9.87/5.84 ms. Texture counts at every measured scene matched the predecessor. The added rendering has a measurable cost in some views; these samples are not a frame-rate guarantee.


## Stranger places within every world

Each of the 27 dimension families now has its own constructed focal scene in a connected side hall. These include a descending domestic cross-section, a porch aquarium, a sealed rain column, a buried seesaw, a paper lung, an eccentric orrery, a freight balance, an office with the wrong vanishing point, and a small city exposed inside salt. Every family has a different model recipe and response, with scale and placement fitted to its generated architecture. Larger halls can contain larger installations; low service corridors keep appropriate headroom. These are optional discoveries, separate from the dimension's escape puzzle.

Each scene has a working E interaction, attached pivots and guides, persistent state, a recorded positional sound and a quiet first-approach response. Operating a scene makes audible noise that existing creature senses can investigate. Pendulums, the orrery, the sound cabinet and selected mechanisms continue moving while active; their nearby shadows update with them. The same objects and state are simulated in prepared doorway worlds and adopted when entering.

The existing six regions also gain more specific built-in construction: paneled domestic walls, tiled drain fittings, cable conduits, folded acoustic curtains, trellises, frost deposits, archive drawers, masonry joints and recessed frames. Stationary mottled floor wear uses one instanced draw per world, with fixed coordinates and depth separation. Enclosed focal rooms have a gradual reduction in suspended haze so their surfaces remain readable.

Up to 18 additional unused catalog props are fitted along routes and within the six regions of a newly generated world. Their full footprints require support, clear approaches and separation from architecture, mission routes, slides, notes and important items. Each catalog prop type still occurs only once per dimension. These additions use the existing detailed model and material archive, retain grabbing/throwing/physical impacts, and do not introduce more environmental creatures: the seven-identity limit remains.

Fixed construction and fixed parts of installations are batched. Only attached moving assemblies stay articulated. World size, six-region circulation, exclusive creature rosters, scarce supplies, the one-time backpack and the unique world progression remain intact. All geometry, material sources and recordings remain inside the standalone HTML.

The all-world browser audit exercised all 27 new scene controls and recordings, 162 district traversals and 81 escape-puzzle stages. Its final seed produced 480 additional supported catalog props and 6,244 batched construction members, with zero duplicate catalog props and no JavaScript or WebGL errors. Articulation checks also covered 4,860 poses across the 27 new model recipes. Prepared destination scenes share the campaign state before opening so their controls save correctly after entry.

A Balanced-quality profile at 1,280 x 960 measured 21.75 seconds to cold readiness, with 269 GPU textures at startup. Texture counts in the neighborhood, aqueduct and market matched the predecessor. CPU frame medians were 3.2/7.6/15.6/8.4 ms for the neighborhood, aqueduct, two-creature aqueduct and market, with GPU medians of 1.74/6.34/9.57/6.07 ms. The adjacent predecessor run varied considerably in frame timing, so these samples do not establish a speedup or guarantee a frame rate. The new geometry shares existing surface textures and recordings; no additional image or sound downloads are introduced.

The final local release suite passed 55 browser checks, including shared doorway scene identity, saved mechanism state, reversible E controls, continuous mechanical animation, recorded sound, actual mouse grabbing/throwing of added props, all creature rigs and the capture-hole return. Four further movement runs and a complete capture/landing/sealing sequence passed with no JavaScript or WebGL errors. The Render output is byte-identical to the standalone game.


## Varied light and discoveries throughout each world

The 27 large dimension families retain their six connected regions and escape puzzles. Each now has an authored lighting profile: twelve use brighter daylight or practical illumination, including clinical skylights, overcast suburbia, indoor winter and bleached retail light. Other locations use amber steam, warm library recesses, projection darkness or cold blue water. Local blackout areas fade into the surrounding illumination instead of applying one dark filter to the whole map. Bright locations retain the camcorder recording effect with less luminance noise and less flashlight haze, making surfaces and sharp light cores easier to read.

Stationary surface wear now reaches the actual architectural and regional walls, alongside the scanned surface maps. A single shared, seamless wear mask replaces repeated shader arithmetic. Large main floors and ceilings retain their scanned surfaces, with regional floor wear supplied by the existing fitted patches. Redundant procedural grain is reduced on those surfaces. The market shelving has actual metal trays, narrow backs and structural uprights, with products resting on the trays rather than intersecting opaque shelf bodies.

Each region gains one fitted, optional interactive mechanism: a miniature room with a watching chair, a contained growth regulator, a dry-water gauge, a paper index, a phase selector or an inspection louvre. The six mechanisms use different moving assemblies, physical supports, clear operating space, saved state and positional recordings. They are separate from the escape objectives. Fitting first uses real walls, with supported freestanding cases as a fallback. Up to 24 additional unique catalog props are distributed among separate pockets and discovery halls across the six regions. The existing world-specific focal scenes remain intact. No additional environmental creature identities are introduced.

Door preparation now keeps the intended destination stable and gives it priority over older speculative jobs. Material warming distinguishes complete shader features, uploads instanced buffers with minimal rasterization and includes the actual architectural shader combinations. Three arrival destinations finish preparing under the loading bar. Nearby destinations continue preparing in bounded background work while approaching. Static fitting shadows can be reused; moving objects and creatures invalidate them, and the moving flashlight remains responsive. Small distant stock cylinders use simpler geometry while buildings, large objects and surface textures remain present.

Hidden passages cannot take a prepared house's reserved world. Evicting an unseen house preview releases its temporary reservation so exploring the neighborhood does not exhaust the hidden-world pool. Returning to the retained neighborhood reconciles hidden-world reservations and removes unavailable lots, preventing ordinary house doors from opening onto an invalid destination. A successfully completed house remains visible until its walk-out and implosion cinematic finishes.


The all-world audit passed all 27 focal controls, 162 regional mechanisms, 162 district traversals and 81 escape-puzzle stages. All 648 fitted route props had clear approaches and support, with zero duplicate catalog prop types per world. The 62-check local suite covered shared portal identity, saved mechanism state, physical props, individual creature rigs, environmental effects, sound, capture recovery and the completed-house cinematic. Four further input runs and a complete capture/landing/sealing sequence passed without JavaScript or WebGL errors.

A genuine 371.31-metre W-key route to a previously unprepared house completed without getting stuck. Its destination was ready 157 metres before arrival. At the door, input handling took 1.3 ms and the leaves began moving on the next simulation frame; no preparation jobs were cancelled. The three preloaded arrival doors also moved on their next frame, with 0.2–0.8 ms input handlers. This verifies those approaches, rather than promising that every unprepared or teleported-to destination is instant.

At Balanced quality and an unchanged 1,280 x 960 buffer, the final cold readiness sample was 42.09 seconds, versus 30.40 seconds in the adjacent predecessor run, while preparing three destinations instead of one. Decoded startup audio remained bounded at 239.5 MB. Final CPU medians for the neighborhood, aqueduct, moving-creature aqueduct and market were 8.8/19.2/32.4/19.6 ms, versus 6.2/16.7/31.9/18.2 ms before; the neighborhood sample included background preparation. GPU medians were 3.53/13.37/15.67/12.63 ms, versus 7.31/10.17/19.50/12.17 ms. Moving-shadow cost improved in this sample; added detail still has a cost, and these results do not establish a universal frame-rate improvement. Adaptive rendering remains available during normal play.

The animated plant display also passes a geometry clearance check: its fully grown, turned foliage remains between the actual backing and glass pane. Leaves join their stems, and the miniature furniture, plant shelf, gauge shafts and louvre axles have physical attachment points.


## Faster preparation and creature rendering

Initial preparation now overlaps construction of the three arrival destinations with GPU shader compilation. A shared readiness barrier protects reused shader variants, and the loading screen can use more CPU time between paints. All three destinations still finish before the recording starts. The same 249-model archive, surface maps, 346 recordings, geometry, lighting, shadow sizes, reflection settings and animation rates remain present.

Fixed-light shadows cache the exact static color and depth buffers, then render moving casters against that depth. Caches invalidate for changed geometry, visibility, transforms or projection, reuse their allocation when recentered, follow adopted doorway shadows and release with the original shadow map. Flashlight shadows conservatively exclude architectural instances entirely outside the light frustum. Surviving instances retain every original vertex and transform; small batches use the ordinary renderer. The main view and reflections continue drawing their original scene geometry.

Creature meshes share a skeleton only when their bone objects, order and inverse bind matrices are identical. They retain separate bind transforms and complete animation rigs. Identical materials are shared within an actor, and temporary warming rigs release their GPU bone textures. Repeated ceiling queries use exact coordinates and reset with the simulation step or collision changes. On frames with less than 3 ms of headroom, speculative preparation waits while creature navigation and explicitly requested doors retain priority.

This optimization pass caches shader parameter derivation and built-in uniform sequences by the complete rendering context while preserving Three.js program selection, lighting updates and drawing. Identical rigid assembly details share instanced draws, with every vertex, surface coordinate and authored transform retained. Imported rigid mesh leaves keep their local matrices; creature bones, weighted bodies and moving pivots continue updating normally. Physics caches exact rotated collision shapes and unchanged support relationships, and navigation work yields between smaller collision queries.

Creature surfaces and model parts now prepare cooperatively before an encounter can use them. Full vertex and index buffers upload in 256 KiB pieces, with a shared 2 MiB upload allowance per interactive background pump. Index buffers retain their required WebGL binding type. Reused geometry, skeletons and material variants skip completed work; cancelled preparation releases partial geometry and unused surfaces. A nonblocking GPU fence keeps a destination pending until its preparation commands have finished. Obsolete startup-only shader variants are omitted, while the shaders required by an entered world still prepare normally.

Animated creature culling uses conservative bounds derived from every positively weighted vertex and its current bones, including nonuniform scale, shear and living-strand motion. Collision hull sampling is prepared ahead of time and its existing periodic checks are staggered across actors. Texture resolutions, model geometry, world size, lighting, shadow resolution, reflection settings and animation rates are unchanged; all 249 models and 346 recordings remain embedded.

Architecture uses larger spatial batches without changing the authored objects. The dense mine comparison falls from 264 to 125 batches while preserving all 32,158 instances, their geometry, surface maps, colors and world transforms. Original microdetail grouping remains intact. Floor geometry and baked light-volume hashes match, with the same 2,275 fixtures. Gallery rails yield every 32 posts, floor triangulation every 64 cells and bounced-light construction every 16 samples, spreading construction over smaller background steps.

Validation rejects empty or failed GPU readbacks. Twenty-three main-view and reflection comparisons match exactly with the shader caches and animated culling enabled or disabled; 95 shadow-map comparisons match full redraws. Indexed and unindexed GPU buffers match their complete source bytes after incremental preparation and an early draw; cancelled buffers release correctly. Eighteen generated color, relief and roughness images match the original Canvas bytes. Unit checks cover 12,000 collision poses, 7,680 rigid assembly vertices, 114,390 posed weighted vertices and ten identical navigation routes. Four floor layouts retain all 246,252 vertices, UVs, normals, clipped boundaries and collision cells exactly. The 62-check browser suite passes, including all 56 creature rigs.

The November 7 release was measured on an RTX 4080 through ANGLE D3D11 at Balanced quality, with a fixed 1,280 x 960 buffer and adaptive resolution disabled. Two final native-loop runs reached cold readiness in 30.94 and 29.25 seconds, versus 38.66 seconds in the frozen predecessor, while still preparing three arrival destinations. Four active world-owned creatures averaged 50.34 and 60.00 FPS in those runs; CPU medians were 18.0 and 9.9 ms, with 99th percentiles of 28.8 and 13.5 ms. The predecessor sample averaged 53.32 FPS. This variation does not establish a locked-60 result. Repeated same-pose redraw comparisons favored the retained caches and culling, but that narrower comparison does not replace native gameplay measurements.

A real 371.31-metre W-key route reached a destination that was ready 157 metres before arrival. E took 1.2 ms and the door began moving on the next simulation frame. Four further input bursts and automatic capture/landing/sealing recovery passed. Artificially requesting the dense mine from cold took 4.80–5.27 seconds versus 4.17 seconds in the predecessor; cooperative preparation spreads work rather than guaranteeing shorter cold wall-clock time. The largest recorded interactive preparation steps were 103.6–148.5 ms, versus 400.5 ms before. These remaining spikes and variable crowded-scene performance remain optimization work.
