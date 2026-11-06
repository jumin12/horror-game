# Horror Game

A first-person procedural dreamcore horror game: a deserted neighborhood, doors into enormous dimensions, 27 distinct world jobs, one released key per world, hunting creatures, hiding places, and a 1990s VHS camcorder.

**[Play on GitHub Pages](https://jumin12.github.io/horror-game/)** · [Render hosting instructions](HOSTING.md)

## Play

Open the link and let the preparation bar reach 100%, then select **Enter the recording**. A desktop browser with WebGL2 and hardware acceleration works best. The full game, models, textures and sounds are embedded in `index.html`; it also runs offline when downloaded. The standalone file is approximately 98 MiB, so the first visit downloads a large file.

The loading bar counts actual world, surface, object, sound, atmosphere and shader preparation. All 334 audio clips and a nearby destination prepare before entry. Later areas stream through a bounded background queue.

Dimensions now use distinct architectural grammars inspired by the supplied concept references: furnished domestic shafts, enclosed suburbs, terraced villages, amber baths, yellow tube mazes, white aqueducts, glass reservoirs, apartment canyons, stocked markets, indoor snowfields, roller rinks, carpet rivers, pastel atria, glazed shopping galleries, conservatories, sleeper concourses, flooded record halls, rainy hotel courts, basement planetaria, industrial laundries, deserted cinemas, telephone exchanges, freight cathedrals, mirrored offices, storm reservoirs, clock libraries and salt mines. Every dimension has a footprint of at least 480 × 660 metres. Larger families extend to roughly a kilometre across, with distinct heights, galleries, districts and route structures. Ceiling height, gallery count, bay spacing, maze layout and building arrangements vary with the seed; tall worlds also extend below their arrival floor. These are procedural architectural families, not a claim that every room is a separately authored level.

Floors share canonical boundary vertices, including curved shores and stair openings. Stairs have treads, landings, headroom and connected walking surfaces. Raised basins have supports and coping; village terraces use continuous ring floors. Closed gables, porch columns, framed doors and windows, built-in shelving, upholstered window seats, stocked package labels and real playground slides provide closer detail. Static architecture remains present at distance without tree or building LOD swaps. Regional instancing and queued local details bound repeated exploration work.

Ordinary catalog props support **E** examination, small furniture movements or machine switches; saved object states and existing mechanical curios retain their responses. Written clues can point to actual nearby scraps. Acoustic treatment follows the type and scale of space, with spatial environmental recordings and surface-dependent footsteps. The 237-asset library, including all 56 inhabitants, remains embedded.

Eighteen close-range props now use authored Poly Haven meshes and their original PBR maps, including the lounge chair, sofa, school furniture, wooden cabinets, clock, luggage, bench, wheelchair and maintenance equipment. A cloth-covered car adds another neighborhood vehicle. The uncovered estate car and desk telephone were rebuilt in Blender with physical proportions, fitted glass and panels, real wheel arches, thin molding radii, individual keys and a connected handset cord. A manufacturing-normal pass gives 141 other props flat panels and deliberate creases without inflating their edges. The library remains shared and embedded; [asset credits](THIRD_PARTY_NOTICES.md) identify the sources.

Furniture receives the architectural light volume of its own world, with soft ground contact shading on supported movable objects. All 81 task stations have fitted controls, calibrated faces and animated knobs, needles or indicators tied to the working puzzle. Neighborhood mailboxes and bin lids have hinged responses; parked-car controls affect their radio and lamps. Existing grab, throw, collision, save and positional material-impact sounds continue to work.

Large water slides have opening intake hatches and guided descents through their actual curved tubes. Press **E** at an intake. Glass currents include a pressure-lift ascent and a spiral descent; the playground slide has a shorter seated animation. The camcorder leans into turns, wind and water recordings follow the ride, and the exit returns control on a connected landing. **Escape** pauses a ride.

**Ultra detail** in Sound & settings starts at native or supersampled resolution, capped at an 8,192-pixel drawing-buffer dimension. All quality modes now adapt their internal resolution under sustained frame-time pressure and recover gradually when there is headroom. This is a rendering option, not a claim of 8K source textures or Unreal Engine graphics. Surface maps use anisotropic mip filtering, fixed world scale and filtered procedural relief; the VHS layer remains adjustable through Recovered detail and Tape damage.


Press **I**, **J** or **Tab** to open your field notebook. Its first spread starts with six inventory pockets. One canvas backpack, reserved in exactly one world per campaign, permanently expands this to twelve pockets and doubles battery/tape-player carrying limits. It never respawns after collection. Double-click a battery pack to replace the installed pack, or press **R**. You begin with one full installed pack and two spares. A pack powers either the flashlight or night vision for 15 minutes of active use; it does not recharge. A low-power warning appears with one minute left. Replacement takes 2.6 seconds, briefly disables powered vision and lowers the flashlight below the frame for the change, then returns it to a forward grip. The knurled flashlight, hand and actual spotlight share one moving origin and aim, so looking around keeps them aligned. The first-person view shows the right flashlight hand and arm, with corrected palm-facing finger flexion, rear thumb placement and a bodyward wrist, using an anatomical model from the MIT-licensed WebXR asset library, refined in Blender with UV-fitted leather/textile panels, inset stitching, separate roughness and relief maps, and a folded jacket sleeve. The fitted four-finger grip and opposing thumb wrap a slimmer handle, with an inward-facing right palm and a shaped wrist/cuff. The flashlight sits toward the right edge of the screen; running produces stronger arm bob and angular beam movement than walking, with subtle turn inertia. Find additional packs and pocket tape players in the worlds; double-click a tape player to leave a distraction for nearby listeners. The final pocket opens your key ring. Inventory pauses the game and power drain; items persist in saves. Starting or reloading the game and retrying after death restores the installed pack to 100%; pausing and entering another world keep the current charge.

You carry a cassette recorder. Rare cassettes now contain damaged environmental impressions belonging to their world, with impersonal, ambiguous written fragments. Recover them with **E**, then double-click **Cassette recorder** and select **PLAY / REWIND**. Playback continues while you explore and can attract nearby creatures; **T** stops it. The collection prevents repeated definitions and retains its heard state. The camcorder footage viewer remains on **V**.

Supplies are scarce: guaranteed entrance batteries and tape players are removed. Consumable caches and cassettes appear farther into each dimension, often beside or behind scenery. You still start with two spare battery packs.

The opening walk/fall is automatic and lands outside the locked mansion gate. Older saves trapped within its fence are moved to the safe approach. After landing, use WASD and mouse to explore. Ordinary neighborhood houses require no key: press **E** to open or close their front door, then walk through its live view. Lots without an unused destination remain empty, including in repaired older saves. The mansion gate remains chained. Each dimension has an authored, three-stage job tied to its setting: dispatch a train, restore an aqueduct, screen a lost film, reconnect an exchange, or complete another world-specific task. Notes explain controls and give clues. Complete the job to release its sealed brass key, then open the return door and bring the key home. Tasks and receiving stations are distributed across the world, sometimes on another connected floor. **Q** gives the next task's distance, compass bearing, elevation and whether to take stairs up or down.

The campaign assigns at most **one house to each of 27 architectural families**. Once a family is entered, neither another house nor a hidden passage can offer it again. Its authored job program is also retired: there is no reroll after failure. Hidden passages draw from the same unused roster and may therefore consume a house's destination. Completed outer houses collapse into a glowing atom and leave an empty lot. This is a finite campaign of 27 distinct world/job families with procedural layouts and settings, rather than unlimited nonrepeating authored puzzle mechanics. New campaigns generate different seeds. Known visits from older saves migrate into the retirement ledger. A large mansion occupies the center behind an iron perimeter with one chained gate.

Creatures respond to sight, movement noise, light and radio lures. Quietly breaking line of sight gives you a chance to escape a search; a locker only protects you if the hunter did not see you enter. Charges have audible warnings, committed trajectories and recovery time. Creature voices and ground footsteps are positional, with walls muffling their sound. Hunters retain observations longer, commit more strongly at close range, and use bounded background path searches with safe local steering and recovery around obstructions. Breaking sight and using cover still matters.

Door interiors prepare in the background. E starts the leaf moving immediately; prepared open doorways retain a distant view even when their full world leaves the nearby cache. Open house doors fold wide against the facade; their solid panels have separated surfaces to avoid texture interference. Doorway views clip against the camera near plane to remain stable at steep angles. Nearby open doors show the actual live destination out to 180 metres, twice the previous range. Walking through retains that world, its inhabitants, positions and simulation state. Populations are seeded: many arrivals are empty, and opening a door never stages an encounter. Your held flashlight shines across the threshold with the same aim, hotspot and soft spill. Door leaves, walls and creatures cast shadows into the beam; illuminated dust and depth-bounded haze make its volume visible. Creatures can notice the flashlight through an open doorway and physically follow the observed player into the hub. Close house doors when you leave: inhabitants can cross an open threshold and remain in the neighborhood. The hub can become dangerous. Closing the entrance from inside also closes its neighborhood side; opening the return door reconnects both sides.

Nearby world fixtures light actual surfaces and cast shadows. Some faulty fittings flicker intermittently, with the visible bulb and emitted light dimming together.

Some indoor worlds have power failures and sparse surviving fixtures; night vision reveals surfaces and bright light sources. Tall worlds have guarded galleries, connected stairs and storeys above and below the arrival level. Printed inventory plates, barcode labels, fasteners and finer surface wear supplement the item detail. Prop templates share cached geometry across dimensions. Ten additional prop families add mortuary drawers, service carts, security desks, mail cubbies, recording equipment and maintenance clutter.

The recording has stronger walking/running bob and side sway, depth-aware shutter blur, persistent VHS grain and tape drift, with independent random black tears and colored signal lines. Their positions, widths, timing, color and lifetimes change rather than looping a fixed pattern. Gentle effects reduce camera motion and moving tape damage. Additional interference is reserved for seven signal-associated encounters. Ordinary hunters cause fear and breathing changes without adding static. L operates a brighter flashlight against darker ambient light. Seeded skies vary between the familiar moon, ringed giants, binary suns, eclipses and planetary conjunctions. The opening sidewalk collapses beneath your feet with a voiced fall and physical landing.


Six additional Blender models supply fitted beds, concave porcelain basins with taps and mirrors, reel recorders, ventilated server racks, welded school desks and empty cots. Furnished writing and listening stations combine the new models with chairs, telephones, paper and small objects. Existing photographic tile, plaster, timber, carpet and cloth maps supply their surface detail. Geometry and model templates are shared; detailed objects still stream within a bounded neighborhood.



Thirty-two additional Blender fixtures include glass-front washers, ticket dispensers, pneumatic tubes, payphones, public scales, mushroom pool fountains, toy ducks, lifeguard chairs, food-court furniture, projector banks, marble runs, miniature suburbs and rain shelters. New room profiles include coin-laundry cathedrals, unassigned departure lounges, telephone gardens, dead mall courtyards, optometry rooms, indoor weather stations, missing-people cinemas and an ocean inside a guest-room suitcase.

Use **E** at the new fixtures. Twenty-one curiosity types have saved controls: turn washers, fans, reels and globes; open specimen drawers and suitcase lids; start contained rain and pool fountains; open daylight shutters; release a captive marble; or switch on a monitor showing your actual camera feed. Tiny fish swim beneath the suitcase water and stay inside its walls. The first discovery of each type is recorded in the notebook. Some loud machines attract nearby listeners.

Ticket dispensers each issue one paper ticket. Pneumatic tubes exchange tickets for a bearing toward an actual unread scrap. A vending machine can deliver one additional battery per dimension; it will wait if your pockets are full. Payphones and clocks also give local paper-trail clues. Tickets and machine states persist; these activities supplement the main key and missing-door-parts puzzles.

Visual research used photographs of [abandoned mall fountains and galleries](https://www.cbsnews.com/pictures/erie-photos-abandoned-malls-and-stores/), [foggy indoor swimming spaces](https://cuddlyland.com/liminalspace_kowai/), and [warm hotel lobbies and stairs](https://www.locationshub.com/blog/2014/9/30/the-magnificent-locations-of-the-grand-budapest-hotel). These informed the spaces and lighting; the new fixtures are original Blender models, and none of those photographs are embedded in the game.

Each dimension has only one of each freestanding prop type, including types inside furniture arrangements. Ownership persists when districts unload and when a save reloads. Equivalent duplicate meshes have been consolidated. Structural fixtures and working door mechanisms remain available wherever the building requires them. Each dimension can supply at most one additional battery, tape-player lure and cassette. The neighborhood keeps its architectural dressing.

The current detail pass adds rounded construction edges, recessed fasteners, sewn upholstery, anatomical hands and connected limb joints. Fish have tapered bodies, gill edges and articulated translucent fins. Furniture uses continuous veneer rather than floorboard textures; steel and enamel retain their own finishes. The 237 active assets comprise 56 creature models and 181 other props, architectural models and the player body. Shared geometry, local detail filtering and compact mesh storage keep the standalone build below 100 MiB. Anatomical source and hand credits are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

The latest physical-model pass covers the complete active library. Twenty-five props have rebuilt manufactured assemblies, including an inset washer drum and gasket, a rotary handset and dial, caster-supported gurneys, fan guards and shaped blades, pressure regulators, CRT equipment, water bottles and curved plant leaves. New props keep their proportions inside their reserved placement space. Material finishes distinguish enamel, steel, rubber, leather, plastic, upholstery and skin; curvature and cavity masks control localized surface variation. Existing photographic maps retain their resolution. A high-quality WebP encoding of the canvas map makes room for new geometry and sound in the standalone file.

All 56 creature bodies now use weighted continuous anatomy. Twenty-eight humanlike bodies use complete CC0 MakeHuman topology and anatomical joint placement, with individual proportions and full tissue beneath fitted garments. Twenty-two nonhuman bodies have a single connected organic skin surface, smoothly weighted across their joints. Four serpent inhabitants use complete flexible snake strands instead of rigid humanoid limb pieces; two annelids have uninterrupted body-to-mouth tissue. Wings, sensory structures, claws and teeth attach at their anatomical roots. Planted animal feet, actual limb lengths, toe-aware soles and bounded foot corrections keep animation from pulling joints apart. Creature materials add a generated skin, scale, chitin and wing atlas with local detail filtering.

All 56 named inhabitants have separate Blender meshes, individual surface patterns, personal hunting profiles and four dedicated ElevenLabs recordings each: idle breath, warning, attack and movement. The cast spans tiny 32 cm creatures and giants up to 11 metres tall, shadow people, humanoids woven from snakes, living luggage, a tile-backed centipede, three-legged animals, moths, wall listeners and ceiling crawlers. Humanoids vary in age, build, facial proportions, skin and clothing. Animal legs join continuous bodies through recessed shoulders and hips, with tapered limbs and articulated feet. Giants spawn in spaces that accommodate their bodies, and bend their spines and knees for lower passages they can physically traverse. Each dimension remembers spawned creature identities, preventing another copy of a retired identity from being generated there.

Hunters still use sight, noise, light, remembered positions, navigation and real attack contact. Individual profiles change perception, pursuit speed, warnings, patience, stride and cooldowns. Some freeze under observation, flee a beam, circle, retreat into an ambush, imitate a guide or pursue in bursts. Shadow entities fade away, move through reachable space and audibly reveal themselves before they can attack again. Clinging creatures approach actual walls, climb onto supported ceilings and give a warning before dropping; their movement stays tied to the rendered surfaces. The 224 new dry creature performances join the 98 existing environment, player and cassette recordings.

Some hunters hide their bodies behind corners and lean their heads out to watch before rushing. Others stare and smile before closing the distance. Grabbing predators can seize and drag you away: repeatedly press **Space**, or tap the on-screen escape button, to break free. Holding the key does not count as repeated presses. Escaping briefly staggers the predator, then it resumes the chase; failing the struggle is fatal.

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

Balanced rendering is now the default, with adaptive internal resolution, bounded detail cells, shared archive-book atlas rows, and scheduled shadow updates. Distant materials remain opaque instead of using noisy distance dithering. In an earlier local 1,280 × 960 hardware-rendered comparison with three active hunters, median rendering cost improved from 23.1 to 10.5 ms in Domestic Void, 16.9 to 8.3 ms in the Market, and 14.0 to 11.9 ms in Tide Hotel. These are scene-specific measurements, not a guaranteed frame rate; loading, hardware, resolution and camera view affect results. The standalone retains all 237 models and 334 recordings.

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
