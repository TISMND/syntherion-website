# SYNTHERION Dev Blog — Story & Post Ideas Report

**Audience for this doc:** "marketing Claude" — a separate Claude session that's helping Tim shape voice, sequencing, and headlines for the dev blog. That session has *not* seen the in-tool screenshots and doesn't have the under-the-hood project context. This doc summarizes both so it can riff on ideas with full information.

**Author:** dev-side Claude, working from `devlog-site-context.md`, the site design spec at `docs/superpowers/specs/2026-05-08-syntherion-devlog-site-design.md`, and the 28 screenshots Tim dropped into `content/intake/`.

**Status:** brainstorm dump. Not a content plan. Pick what's interesting, throw out what isn't, send back counter-pitches.

---

## 1. The 30-second project recap

SYNTHERION is a top-down vertical-scrolling shooter with an 80s synth identity. Solo dev (Tim Attewell) building it in Godot 4.6, GDScript, with Steam co-op for 1–4 players.

The hook: **every weapon is bound to an audio loop.** All loops play simultaneously from bar 1; the player mutes/unmutes them by toggling weapons (1–7 keys). Equipping a loadout is composing a track. Firing is mixing. Audio never restarts, so phrase alignment is perfect no matter what you do.

Other shape: roguelike runs across themed "verses" (Neon Void, Bioluminescent Reef, Monolith…) at difficulty levels 1–10. Drift-down portals send you to the next stage. Multiplayer is parallel-sim with players able to fork into different verses and reunite. Bosses are multi-segment with shared health pools.

**Editorial angle, in one sentence:** a non-engineer (former filmmaker, current engineering student) has spent 250+ hours building an ambitious networked Godot game by treating Claude as a peer, where most of the leverage comes from an absurdly deep set of in-game dev tools rather than raw coding velocity.

---

## 2. The three pillars of the dev blog (per existing spec)

The site already has a defined post taxonomy:

- **`origins`** (4–6 posts) — looking-back stories that establish voice
- **`tools`** (15–25+) — one post per in-game dev tool. **The differentiator. Nobody else has this content at volume.**
- **`devlog`** (ongoing) — forward-facing updates as work happens

Goals in priority order: build a Discord/mailing-list audience that feels like they're shaping the game → demonstrate the project is alive → convert to Steam wishlists.

---

## 3. Voice notes (load-bearing, do not lose)

Pulled directly from the spec's appendix:

- **Tim's own ramble is the model for the writing voice.** Casual, parenthetical self-corrections, willing to be uncertain mid-sentence. Not a marketing blog. Drafts should sound like Tim talking, not like a brand.
- **Honest framing, not defensive.** Tim caught himself trending toward "if anyone thinks this is easy and I'm lazy" and pulled back. The voice is self-aware and curious, not combative.
- **The 250-hour fact is true, not a flex.** AI doesn't ship a game like this without massive iteration and course-correction. State it once, calmly, when relevant. Don't lean on it.
- **"Dev tools don't have to be pretty" is recurring voice, not just trivia.** Tools repurposed from earlier game shapes still wear their old bones. Lean into this — it humanizes.
- **Naming-as-history.** Things in the codebase are named after the people, games, and moments that inspired them. Surface this kind of detail. It signals a person, not a brand.

---

## 4. The `origins` slate (already loosely scoped)

These four are pre-identified in the spec, plus the mandatory intro. Order TBD.

### O-1 — "Hi, I'm Tim" (mandatory first post)
The about-me post. Filmmaker → writer → engineering student → bot builder → board games → calculus YouTube channel → *"nothing hit"* → still ghostwriting → now apparently a game developer. Loves sci-fi and synthwave. Storytelling + system-building turn out to be exactly the right pair for this kind of project. **Honest, not defensive.**

### O-2 — "The earlier game made you make the music. It was bad."
Player-makes-the-music phase, ugly placeholder ships. Both git-recoverable. Sets up *why* the current music-loops-are-weapons design is the inversion that finally worked. Strong follow to the intro because it shows the thing was wrong before it was right.

### O-3 — "Meeting Claude"
How the AI-as-peer workflow took shape. The realization that **CLAUDE.md is a design briefing, not an inventory.** The realization that auto-memory matters. The shift from "AI as autocomplete" to "AI as collaborator who needs context."

Sub-thread worth its own short post (could be split out): **the model matters.** Noticeable quality jump when Opus 4.7 shipped. Plus the lost-day Sonnet story — Tim switched one window to Sonnet to save tokens, didn't realize new Claude Code instances were *also* defaulting to Sonnet for the rest of the day, spent the day fighting work that was 90× harder than it should have been before clocking it. Best war story for the "AI as peer" framing landing honestly: it's not magic, the model matters, the wiring matters.

### O-4 — "HDR, bloom, ACES, and the days I lost to all three"
The seed story for the audition pattern philosophy. Heavy reliance on previews of in-game items, but rendered out-of-game. Blooms most likely to break. Lost days figuring out what HDR/bloom/ACES even were and why dev tools and the game looked so different — sometimes missing, sometimes tripled and blown out. The fix becomes a design rule: **sliders write to the exact file the game loads from, through the exact function the game calls.** No diverging preview state, ever again.

### O-5 — "The pink grid that won't die"
Earliest version of the game. First time Tim saw ships scrolling on a background. Persisted throughout dev because there was never enough motivation to replace it. Now a debug-by-default visual: anything broken in an intended background falls through to it. Aesthetically barf-worthy by now; Tim is basically blind to it. *(The screenshots confirm the pink grid is still everywhere — it's the visible identity of half the dev tools.)*

---

## 5. The `tools` slate — concrete posts the screenshots support

This is the meat. Each entry below corresponds to a real screenshot Tim has already dumped. The differentiator isn't the tools individually — it's the *volume* of them and the consistent "Claude built this with me, here's what it does" framing. **Probably the most marketable single section of the site.**

### T-1 — The dev menu (the index post)
**Screenshot:** the synthwave-grid main dev menu with buttons for NPC SHIPS / SHIP COSMETICS / UI / COMPONENT CREATOR / COMPONENT MANAGER / ENCOUNTERS / PICKUPS / CLUSTERS / STAGES / HAVEN SHIPS / BOSS SKETCHER / BOSS EDITOR / SFX / VFX / ENVIRONMENTS / BACKGROUNDS / MUSIC / BUILDINGS / PLAYER SHIPS / PORTALS / MARKETING.

This screenshot alone is the pitch. Twenty-plus authoring surfaces in a synthwave hub. The post: *"This is everything Claude and I built before I built the game. Here's why."* The "authoring leverage > coding leverage" thesis lives here.

### T-2 — Music-sync in the weapons creator ⭐ (flagged by Tim as the post outsiders will be most curious about — publish early in the drip)
**Screenshot:** the COMPONENTS editor with "Laser Turret" loaded. Visible: a waveform display, "MUTE" toggle, snap controls (1/4, 1/8, 1/16, 1/32), audio transition fade-in/fade-out, beam duration, transition time. The waveform is annotated with red trigger markers — this is where weapon firing locks to musical phrasing.

The post writes itself: **the musical core of the game is configured here.** Sliders set how a weapon's behavior maps to the loop's beat grid. Worth showing the second screenshot too — the same weapon with all its damage/effects/heat/electric numbers, demonstrating how authoring spans audio AND combat in one tool.

### T-3 — The boss sketcher → boss editor pipeline
**Screenshots:** two-step. First, the BOSS SKETCHER showing a hand-drawn-style "neon spike grabber" — angular spikes, hinged arms, hardpoint pins, with annotation text like "Second (left) arm and hinge goes here. Just mirror what I have on the right" and "Four total tracking physically rotating turrets here." Second, the BOSS EDITOR showing the same boss but rendered for real with glowing segments, hinges visible, hardpoint slots numbered 1–6.

This is **the deliberate two-channel handoff in action.** Tim sketches in-tool: rough silhouette + segments + hinges + hardpoint pins. Outputs paired `sketch.png` (shape & vibe) and `sketch.json` (metadata + exact numbers — hinge pivots, path waypoints, hardpoint facing). Art is in the PNG. Geometry-of-record is in the JSON. Then the boss editor is where Claude reads the JSON and Tim authors the actual `BossData`. The post sells the *idea* of this pipeline, which is genuinely novel.

### T-4 — Stage builder
**Screenshot:** PLAYTEST STAGE view showing "Welcome Void" with rows of authored cluster picks (Sentinel Slow Straight, SentinelXColumn, Lattice Money, Shard Tri Straight) each with Unlock %, Lock %, Weight, HP, faction (Bronze/Silver/Coral/Circuit), skin assignments. PLAYTEST button at the top.

Companion to the cluster editor. The post: *"A stage is a list of cluster bags. Here's how I compose one in 30 seconds."* The PLAYTEST button is the punchline — instant feedback loop.

### T-5 — Cluster editor / encounters / paths ⭐ (contains the "tyrian" naming-as-history detail)
**Screenshots:** two relevant. The first shows the Cluster Editor with verse "Neon Void", named clusters listed (CalfInterlace, HelioZag, Lattice Money, **ob_tyrian**, PentChaseShoot, PentZigShoot, SeekingCaltrops, SentinelSColumn). The second shows the FORMATIONS / PATHS editor with a path called "**Tyrian Circle**" selected, showing a curved looping path on a grid.

**The naming-as-history hook is right there in two places.** First path Tim ever made, named after Tyrian — his favorite game in the genre — inspired by the first formation in Tyrian's level 1. The cluster `ob_tyrian` carries the same homage. Worth pointing out that this name is *load-bearing* in the data files. It's not going anywhere. The post lands on: *"Every path in this game has a name and a reason. The first one is a love letter."*

### T-6 — Component editor (the everything-tool)
**Screenshot:** the COMPONENTS editor with tabs for Weapons / Projectiles / Beams / Power Cores / Field Emitters / Fields / Kinetic Bodies / Kinetic Weapons. Currently showing Laser Turret stats — beam DPS, fasthrough, beam effects, splash damage, enemy damage test, etc.

The biggest editor; most ship-mounted gear flows through here. Could be the post that *explains* how data-driven everything is. **Pair with the Component Manager post (T-7) for a one-two punch about data scale.**

### T-7 — Component Manager
**Screenshot:** the COMPONENT MANAGER spreadsheet view. Rows: BlueFish, Bolt Caster, Bridal Shower, Broadside Pulse, Bursting Trident, Disruptor Spread, Eko Pulse Turret, Everything Gun, Fire Pick, Flicker Lance, Heart-B, Hoop-N8. Columns: TIER (n-A), DAMAGE, SHD, HUL, THM, ELEC, SHIELD, MUZZLE, THM, PROD, BURN, PROFICIENCY, TIPS, VOL, OPS, mounting type (FIXED / GIMBAL / TURRET), spread (SINGLE / SPREAD / DUAL).

This is the bird's-eye view. **The weapon names alone are content** — "Bridal Shower," "Everything Gun," "Hoop-N8," "Flicker Lance." Tim has been having fun in here. The post can be a tour of the silly names with the data table behind them.

### T-8 — Ship cosmetics / skin debug
**Screenshot:** the SHIP COSMETICS audition screen with a primitive ship rendered in pure debug colors — Red=Hull, Blue=Structure, Green=Trim, Yellow=Canopy, Orange=Engine, Magenta=Unknown. Tabs for Human Skins / Alien Skins / Paint / Lightning / Skin Tuner.

**Perfect "dev tools don't have to be pretty" post.** That ship looks like a Tetris piece in primary colors because the underlying skin shader needs labelled regions to map onto. The post: *"Ships don't look like this. But this is what I see."*

### T-9 — Loadout / ship balance ⭐ (the "still wearing its old bones" tool)
**Screenshots:** two views. First, the LOADOUT screen with simulator (Run/Mute/Reset), MANTIS ship 3/9, Power Cores / Weapons / Field Emitter slots, ship effects readout (shield/hull/thermal/electric N/A). Second, the [DEV] SHIP BALANCE view of the same ship — Points, Shield, Hull, Thermal, Electric, Speed, Accel, Slots (Weapons/Cores/Fields/Particles/Hold), Hitbox, Aura, Shape, Recover, Render: CHROME.

Spec calls this out by name: **repurposed from when equipment was set before play, before drop-based economy.** Still wearing its old bones. The post is the spec's recurring "dev tools don't have to be pretty" thread, made literal. Could be the *first* tools post if the editorial goal is to set the voice early.

### T-10 — SFX editor
**Screenshot:** SFX EDITOR with tabs (Combat / Ship / Alarms / Pickups / Travel / Boss / Power / Ambient). Combat tab open: HIT SOUNDS (enemy shield/hull, player shield/hull, immune hit), EXPLOSIONS (1, 2, 3), DROPS (crate destroy). Each row has a wav file dropdown, volume slider in dB, clip, fade-in, fade-out columns.

Mundane on its face. Interesting because of the audition-pattern framing: every tweak here writes directly to the same JSON the game loads. Could anchor a post about **the audition pattern as design philosophy.**

### T-11 — VFX editor
**Screenshot:** VFX EDITOR showing player/enemy shield + hull hit effect configs (basic_shield, standard_shield, etc.) with rate, duration, color sliders, intensity, flashes. REPLAY/SAVE buttons.

Pair with T-10 for an "audio + visual feedback are configured exactly the same way" post.

### T-12 — Field emitters / projectile shaders (shader-driven art)
**Screenshots:** two. First, a "purple_stretch_ring" projectile shader with HDR Brightness, Time Scale, Thickness, pulse_speed, edge_width, inner_darkness, COLOR (purple bar), SCALE width/height, FLIP, COLLISION width/height, MUZZLE FLASH. Second, an "orange_out_force" field emitter with HDR Brightness, halo settings, ripple_speed/strength/visibility, edge_visibility, chromatic_spin, PULSE bright/fast/scale, ACTIVE HDR, PULSE HDR.

These are **shader-driven, not sprite-driven.** Tim authors visual effects parametrically. The post: *"Why I don't ship a single .png for this stuff."* Pairs nicely with the HDR/bloom/ACES origins post.

### T-13 — Music editor / arrangements
**Screenshot:** MUSIC editor with menu/in-game music tabs, ARRANGEMENTS list (Menu 2, Menu 3, Menu 4, Menu 1), a multi-track timeline showing 4 tracks over 64 bars at 120 BPM. ADD TRACK / AUDITION / FIT / NEW / DUPE / DEL. Selected track: "Track 1" with loop start/end bar, fade-in/out, infinite loop, in-rotation toggle, volume.

Short post: *"Where the music actually goes."* Pairs with the music-sync weapons post (T-2) by showing the other end of the pipeline.

### T-14 — Co-op arrival / cinematics ("MARKETING" menu)
**Screenshot:** the synthwave MARKETING submenu — POSTER / CINEMATIC SANDBOX / TRAILER INTRO / TITLE EFFECTS / COOP ARRIVAL / BACK.

Worth its own short post: *"I built a video studio inside the game."* The trailer footage you've seen was shot here. **This is a great post for the "tools nobody else has" angle.** Could be the bridge post between origins and tools.

### T-15 — Coop arrival timeline editor
**Screenshot:** a multi-track timeline with channels for `fire_pick`, `Switchblade`, `flicker_lan`, `Phantom`, etc. — each ship gets a colored arrival lane with time-of-arrival markers. Just Arrive preset. SAVE / SAVE AS / DELETE / BACK / PLAY.

Tied to T-14 — this is *the* tool that produces the choreographed allied-ship-warp-in moments seen in trailers.

### T-16 — Mothership audition
**Screenshot:** MOTHERSHIP AUDITION — a black carrier-NPC viewed from above with hull windows, running lights, prow beacons, side disc lights, dock lights, sensor dish, prow chevron toggles, plus curvature/3D sliders (dome_tilt_strength, dome_tilt_width, dome_center_lift, dir_shadow_strength, dir_light_angle), motion (sway_x_amplitude, sway_x_speed), and detail toggling. Engine glow + 6 numbered dock pads visible.

A tools-don't-have-to-be-pretty *contradiction* — this one **is** pretty. Could anchor a post titled *"The carrier that taught me to overengineer one thing."*

### T-17 — Portal manager (the "where do I go next" config)
**Screenshots:** two. First, the VISUAL tab with a glowing teal-blue spiral portal preview, verse list (Neon Void, Fluid, Ancient Megastructure, Haven mothership, Monolith legacy, Boss NSG Grabber), HDR/style/aurora controls. Second, the CADENCE tab with COMBAT timing (first delay, interval, drift speed, spawn-x jitter, weight to haven), HAVEN params, COMMON spawn-x offset, and a verse allowlist.

*"How does the game decide where you go next? Sliders."* Good post for the procgen-curiosity audience.

### T-18 — Environments / nebulas / key changes
**Screenshot:** OBJECTS editor under NEBULAS with a "Blue Storm" lightning-strike nebula — appearance sliders (color, brightness, arm count, density, seed, spread), STORM toggle (frequency, strike size, duration, glow size), warning. Plus a list (Shield Recharger, Cooler, Hull Heater, Electrical Charge, Blue Storm, Blue Plain).

Nebulas are *both* visual environments and gameplay objects (they recharge shields, cool heat, etc.). Worth a post about how the game blends visual world-building with mechanical effects in the same authoring surface.

### T-19 — Background auditions
**Screenshot:** the VERSE 1 BG auditions screen with synthwave grid params (grid color, horizon color A/B, line width, core intensity, grid white, etchers/streaks, pulse waves, HDR sliders) over a glowing pink-and-white grid background. Tabs for VERSE 1/2/3 BG / MONOLITH BG / TBD VERSE BG / STARFIELD / WARP.

Each verse's signature look is configured here. Possibly the most visually striking screenshot in the pile — could be the one at the top of an "all the verses" post.

### T-20 — Pickups: powerups & crates
**Screenshots:** two. First, the PICKUPS screen with POWERUP SPAWNING params (interval, jitter, no-drop weight, drop weights for shield/hull/electric/thermal) and POWERUPS (Shield, Hull, Electricity, Thermal — strength, duration, brightness). Second, the CRATES tab with crate spawning intervals + per-pickup-type dropdowns and a crate config showing visual_id, paint_color, light_pattern, light_color, drift_speed, collision_width/height, explosion_color, explosion_size, num_chunks. Live preview of a chrome crate sprite.

Mundane but functional. Could be a quick-hit post on **economy tuning** — how dropped pickups and crates are balanced.

### T-21 — NPC ships editor
**Screenshot:** an editor with verse selector (GEOMETRIC), tabs (ALLIES / NPC SHIPS / ENEMIES), faction list (Sentinel, Caltrop, Conduit, Helion, Lattice, Pentorbiter, Monolith, Obelisk, Tiny Triangle, Pylon). Right panel: ENEMY ATTRIBUTES with Stats / Effects / Engines tabs, identity (name, desc, faction), health (shield/hull), hitbox, weapon (enemy_3_burst), detonation (trigger, damage, splash). HULL: 25 HP | SHIELD: 0 HP. SAVE / DELETE.

The enemy authoring surface. Post: *"Every shape that flies at you was tuned in this screen."* Naming list itself is interesting (Pentorbiter, Caltrop, Pylon — geometric Platonic-solid theme).

---

## 6. Possible `devlog` ideas (forward-facing, lower urgency)

These are speculative; a `devlog` post writes itself when it's ready. Listed only as triggers to watch for:

- **The `[AUDITION:bloom_tuning]` log line** — first time Tim and Claude collaborated through `godot.log`. Show the actual log lines, the conversation, the file change Claude made afterwards. **This is the audition pattern made tangible.**
- **A multiplayer fork-and-reunite session** — players splitting into different verses and coming back. Capture the moment with a screen recording. Lots of room to talk about parallel sims, host-authoritative networking, why backgrounds drift locally and don't sync per-frame.
- **Cross-machine workflow** — desktop dev box ↔ Surfacebook 2 perf stress-test client ↔ `git sync`. Smaller post but real.
- **Smoke test runner is broken.** Someday, the post about fixing it. Until then, the post about "verification is `godot --check-only --script <path>` for parse, then me playing the game."

---

## 7. Recurring editorial threads (what to weave through everything)

These aren't posts. They're *flavors* — each one should appear in multiple posts so the site develops a personality.

1. **"Authoring leverage > coding leverage when working with an AI."** Build the tool with Claude once. Author 100 weapons or 20 bosses without writing more code. The thesis statement of the entire dev blog.

2. **The audition pattern as design philosophy.** Sliders write to the *exact* file the game loads from, through the *exact* function the game calls. No diverging preview state. Claude reads tagged `[AUDITION:...]` lines from `godot.log`. **This is genuinely novel as a workflow and is the post most likely to get linked outside the gamedev bubble.**

3. **"Dev tools don't have to be pretty."** Show the ugly debug ship. Show the loadout screen still wearing its old bones. Show the pink grid. Make this a running gag.

4. **Naming-as-history.** Tyrian, Tyrian Circle, ob_tyrian. Whatever else Tim has tucked in there. Surface it.

5. **AI as peer, not autocomplete.** CLAUDE.md is a design briefing. Auto-memory captures preferences. The model matters (Opus 4.7 quality jump, the lost-day Sonnet story). Honest, not magic.

6. **The 250-hour fact.** State it once, calmly, in the right post. Probably the intro or the "Meeting Claude" post. Don't lean on it.

---

## 8. Suggested early drip ordering (rough — for marketing Claude to push back on)

The spec says: one-shot a backlog, drip-release weekly to keep the site visibly alive. Draft order proposal:

1. O-1 Hi I'm Tim
2. T-9 The loadout screen still wearing its old bones — *establishes the "ugly tools" voice immediately*
3. O-2 The earlier game made you make the music
4. **T-2 Music-sync in the weapons creator** ⭐ — flagged-by-Tim post that outsiders will be most curious about; lands while audience is small but hungry
5. T-1 The dev menu (the index post) — *now they understand why there are this many tools*
6. O-3 Meeting Claude (or split: O-3a Meeting Claude / O-3b The lost-day Sonnet story)
7. T-5 Cluster editor / paths — *the "tyrian" detail*
8. O-4 HDR, bloom, ACES, lost days — *seeds the audition pattern*
9. T-3 The boss sketcher → boss editor pipeline
10. T-19 Background auditions — *a visually striking one to keep the feed photogenic*

After that, alternate `tools` and `devlog` as they're ready, with `origins` (O-5 pink grid) as a palate cleanser.

---

## 9. Open questions for marketing Claude

Things to bounce around:

- **Is the music-sync post (T-2) better positioned at #4 (early, while audience is small but engaged) or held longer for a bigger announcement moment?** Tim already flagged "publish early in the drip." Confirm.
- **Should "Meeting Claude" (O-3) be split into two posts** — one about CLAUDE.md / auto-memory / the workflow, one about "the model matters" / lost-day Sonnet? They're tonally different.
- **How aggressive should the "AI as peer" framing be on the homepage** vs. buried inside individual posts? Risk: homepage too AI-heavy reads as gimmick. Risk: homepage not AI-heavy enough leaves the differentiator on the table.
- **Is the Discord CTA framing — "help shape the game" — strong enough as-is**, or should it be punchier? The current spec keeps it editorial; some early-access pitches get more concrete ("vote on the next verse," etc.). Concrete is more enticing but harder to deliver on.
- **Steam wishlist CTA timing.** Spec defers it as the launch CTA matures. Should there be an earlier "wishlist for context, even if launch is far" framing, or wait until trailer-ready?
- **Trailer placement.** Hero is a muted auto-loop; full audio version is in a "Watch trailer" section. Is that the right split, or should the homepage *lead* with audio-on the moment a user clicks?
- **The "originally built [month]" honesty note** on backdated posts — visible in the post header per spec. Marketing Claude: is that placement and phrasing right, or should it be footnoted/de-emphasized so the feed reads fresher?

---

## 10. What this report deliberately doesn't decide

- **Final titles.** All the post names above are working titles only. Marketing Claude is better at this than I am.
- **Exact post counts.** Spec says 4–6 origins, 15–25+ tools. The screenshots support 18+ tools posts on their own. Probably more once Tim dumps the rest.
- **Cadence.** Spec says "likely weekly." Could be biweekly during the backlog drip if the backlog runs thin.
- **Visual language for post cards.** Existing synthwave/CRT aesthetic stays per spec. Card design TBD.
- **Whether any of this should be reordered for maximum wishlist conversion vs. maximum audience-quality.** Different goals, different sequencing. Marketing Claude's call.

---

*End of report. Ready to bounce around.*
