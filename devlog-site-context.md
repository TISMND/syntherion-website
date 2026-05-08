# SYNTHERION — Dev Log Site Context

This doc is for an AI agent building the dev log website at **syntheriongame.com**. It exists so the agent has full context on the game, the dev process, and the tools without having to spelunk the game repo. Treat it as a briefing — not a content plan, not a blog outline. The dev log's editorial direction is decided elsewhere.

---

## 1. The Game

**SYNTHERION** is a top-down vertical-scrolling shooter with an 80s synth identity and a musical core mechanic. Built solo by Tim Attewell in Godot 4.6 (GDScript). Steam co-op for 1–4 players, host-authoritative networking via Steam Networking Sockets.

### The hook
Every weapon is bound to an audio loop. All loops play simultaneously from bar 1 of the level — the player **mutes and unmutes** them by toggling weapons (1–7 keys). Equipping a loadout is composing a track; firing in combat is mixing it. Audio never restarts, so phrase alignment is perfect no matter what you do.

### Run shape
- **Roguelike.** Procgen-arranged authored content, permadeath within a run, persistent progression across runs.
- **Verses** are themed worlds (Neon Void, Bioluminescent Reef, Monolith…). Orthogonal to **levels** (1–10 difficulty). Each `(verse, level)` tuple has multiple authored **stages**; one is picked at random.
- **Portals** drift down the playfield painted with `(verse, level)` destinations. Player flies into one to take it. No menu, no map.
- **Multiplayer branches.** Each player picks portals independently. Same tuple = shared world, visible to each other. Different tuples = parallel sims on the host, invisible until someone portals back. Players fork and reunite freely.
- **Bosses.** Multi-segment, shared health pool, core immune until limbs destroyed. Milestone bosses are the "campaign complete" beat; play continues at higher difficulty.

### Combat resources
Two damage bars: **shield** (regenerates) and **hull** (does not). Two resource bars: **electric** (consumed by weapons firing on the beat and by emitter fields per-second) and **thermal** (heat from beams and power cores; sheds passively). Overflow punishes mismanagement — thermal bleeds hull at 1.5x bypassing shields, electric bleeds shields at 1.5x. Emergency cooldown (V) sheds heat fast at the cost of engines + shields offline.

### Pickups & economy
Pickups drop from destructible cargo containers and allied ship visits. Private to the collector in MP. Currency is shared across the run. Discovered components feed a codex; favoriting biases future drop rolls.

---

## 2. The Developer & The Process

**Tim Attewell** — solo developer, novice, "vibe coding." Not a career engineer. The entire game and toolchain are built collaboratively with Claude (Claude Code in particular). This is the central editorial angle of the dev log: a non-engineer building an ambitious networked Godot game by treating the AI as a peer, with most of the leverage coming from purpose-built dev tools rather than raw coding velocity.

### How development actually works
- **Claude Code is the primary development partner.** Tim drives intent, design, and feel; Claude writes most of the code.
- **CLAUDE.md is load-bearing.** The repo's `CLAUDE.md` is a design briefing, not an inventory — it tells future Claude sessions what the game is supposed to be, the vocabulary, the architecture, the rules. It evolves as understanding does.
- **Auto-memory.** A persistent file-based memory system at `~/.claude/projects/.../memory/` captures user preferences, project decisions, and feedback so Claude doesn't relitigate the same lessons across sessions.
- **Log-driven debugging.** Data travels from the running game back to Claude through `godot.log` — Claude reads it directly with `tail` / `grep`, never asks Tim to paste console output. Tagged prints (`[NetSession] peer %d connected`) are the convention.
- **Cross-machine workflow.** Desktop is the primary dev box; a Surfacebook 2 (Intel UHD 620) is the perf stress-test client. `git sync` is the bridge.
- **Solo-dev shipping.** "Shipping" = save state to git. No external users yet. Polish is in scope only when Tim explicitly mentions an external audience.
- **Verification.** Smoke test runner is broken (`bash scripts/test/run_smoke.sh` hangs). Standard verification is `godot --check-only --script <path>` for parse, then manual gameplay by Tim.

### Architectural shape
- **Godot 4.6**, GDScript, no C#.
- **Autoloads** (singletons): `GameState`, `AudioBusSetup`, `AudioManager`, `LoopMixer`, `ShipRegistry`, `SfxPlayer`, `KeyBindingManager`, `ThemeManager`, `SceneLoader`, `NetRole`, `SimEventBus`.
- **Per-verse simulation** lives on `VerseInstance` nodes. Solo = one instance. MP host = many in parallel via `InstanceHost`. MP client = one driven by snapshots.
- **Networking.** Host-authoritative, deterministic-where-possible, `SimRng` instead of `randf()`, gameplay events through `SimEventBus`, RPCs scoped per-instance via `instance_id` arg. Verses are **time-based treadmills** — encounters fire on a host clock; backgrounds and autoscroll objects drift locally and never sync per-frame.
- **Rendering.** Single bloom source on the root `WorldEnvironment`. SubViewports get ACES tonemapping but no glow. "Glow is HDR or nothing" — fake halos (translucent discs, gradients) are banned.
- **Dev/runtime split.** `scripts/dev/*` and `scenes/dev/*` are excluded from release exports. Game-runtime code must never reference them. One-way dependency: dev → ui is fine; ui → dev is forbidden.

### Data model
- **Dev-authored content** → `res://data/` (git-tracked). One subfolder per content type: `weapons/`, `bosses/`, `clusters/`, `stages/`, `verses/`, `field_emitters/`, `power_cores/`, `nebula_definitions/`, `key_changes/`, `boss_sketches/`, `marketing/`, etc.
- **Player runtime state** → `user://` (per-machine). `save_data.json` for GameState, `settings/` for preferences.

---

## 3. The Tools

The toolchain is the secret weapon. Most of the dev log's "AI was used to build…" angle lives here. Tools are organized into buckets under `scripts/dev/` and `scenes/dev/`.

### Editors (`scripts/dev/editors/`)
Authoring surfaces for the structured content that drives a run.
- **`stage_builder`** — composes a stage as an ordered list of cluster-bag rows over a verse + level. Has a PLAYTEST STAGE button.
- **`cluster_editor`** — authors a cluster: a small enemy group with danger + durability ratings.
- **`component_editor`** — tabbed editor for Weapons, Beams, Fields, Projectiles, Power Cores, etc. The biggest editor; most ship-mounted gear flows through here.
- **`sfx_editor`** — sfx config + per-event sound assignment.
- **`vfx_editor`** — VFX config and Effect Profile v2 authoring.
- **`style_editor`** — tabbed: Boss Bar audition, Headers, Menu BG, Icons, Buttons. Currently trimmed to VHS/CRT only; other theme values bake from defaults + saved JSON.

### Auditions (`scripts/dev/auditions/`)
Live-tuning surfaces with sliders. The "audition pattern" is a Tim convention: sliders write to the *exact* file the game loads from, through the *exact* function the game calls — no in-memory-only previews, no separate loaders. Output goes through one of three channels: save button, auto-save on change, or tagged `godot.log` lines (e.g. `[AUDITION:bloom_tuning] strength=0.42`) that Claude reads to edit a target file. Examples:
- Background auditions: `lv1_bg`, `lv2_bg`, `lv3_bg`, `starfield_bg`, `warp_bg`, `tbd_bg`, `ancient_megastructure_bg`.
- Skin / paint: `skin_auditions`, `alien_skin_auditions`, `chrome_gleam_auditions`, `paint_auditions`.
- HUD / game feel: `cargo_counter_auditions`, `headsup_auditions`, `engine_auditions`, `title_auditions`, `misc_portal_auditions`, `cluster_audition_launcher`.

### Screens (`scripts/dev/screens/`)
Browse + manage views over content collections.
- **`boss_sketcher`** — Tim sketches a boss in-tool: rough silhouette + segments + hinges + hardpoint pins. Outputs a paired `sketch.png` (shape & vibe) and `sketch.json` (metadata + exact numbers — hinge pivots, path waypoints, hardpoint facing). Deliberate two-channel handoff: art is in the PNG, geometry-of-record is in the JSON.
- **`boss_editor`** — authors `BossData`: segments, parent/child relations, hinge motion (sine-on-elapsed-time), hardpoints, enrage core overrides.
- **`environments_screen`** — Nebulas, Key Changes.
- **`npc_ships_screen`** — NPC ship config/preview. Player ships are configured in the in-game Hangar.
- **`mothership_audition`** — large carrier-NPC visuals.
- **`encounters_screen`, `pickups_screen`, `portals_screen`, `loadout_screen`, `buildings_screen`, `ship_cosmetics_screen`, `music_screen`, `marketing_screen`, `stage_list`, `component_manager`, `bg_auditions_screen`.**

### Tabs (`scripts/dev/tabs/`)
Reused tab widgets — Weapons, Beams, Fields, Field Emitters, Power Cores, Projectile Animator, Kinetic Weapons/Bodies, Drop Containers, Powerups, Currency, Building Destruction, Nebulas, Key Change, Portal Manager (Cadence + Visual).

### Marketing (`scripts/dev/marketing/`)
Content production for trailers, splash, social.
- **`coop_arrival_launcher` / `coop_arrival_runtime`** — choreographed scenes of allied ships warping in (used for trailer footage).
- **`title_effects_studio`** — tunes the SYNTHERION title-card effects.
- **`trailer_studio` / `trailer_intro_studio`** — composes trailer beats.
- **`cinematic_event_handler`** — drives scripted moments inside otherwise live gameplay.

### Utilities (`scripts/dev/utilities/`)
Smaller specialist tools.
- **`waveform_editor`** — authors per-weapon visual waveforms (used for projectile motion / beam paint).
- **`music_timeline_editor`, `intro_music_editor`, `loop_balancer`, `loop_browser`** — music + loop authoring.
- **`paint_patterns`, `lightning_patterns`** — pattern libraries used by VFX.
- **`skin_tuner`, `glow_test`, `loadout_hitbox_overlay`, `ship_bake_size_overlay`, `bar_effect_lane`, `power_loss_timeline`.**

### Why this many tools
The bet is that authoring leverage > coding leverage when working with an AI: Tim builds *the tool* with Claude once, then authors a hundred weapons or twenty bosses without writing more code. The audition pattern in particular keeps Tim and Claude on the same single source of truth (`res://data/...`) — no diverging preview state, no values that exist only on-screen, no manual re-typing of numbers.

---

## 4. Vocabulary cheat-sheet

- **Verse** — visual theme. No `kind`. (`res://data/verses/`)
- **Level** — difficulty 1..~10. Orthogonal to verse.
- **Stage** — unit of play. Declares `kind` ("combat" | "haven" | "boss") and `verse_id`. Envelope + content shape. (`res://data/stages/<verse_id>/`)
- **Verse Instance** — one running `(verse, level)` simulation node.
- **Cluster** — small authored enemy group with danger/durability. (`res://data/clusters/<verse_id>/`)
- **Lobby** — only the MP menu screen. Use "haven" everywhere else.
- **Hangar** — ship + loadout config screen.
- **Active slots** — 1..7 quick-fire HUD slots. Universal — any installable component fits.
- **Hold** — per-ship cargo bay; stowed-but-not-wired components.
- **System Console** — right-side macro panel (M to toggle), live-sim, never pauses.
- **System Bars** — shield / hull / thermal / electric, segmented.
- **LocalPlayer / RemotePlayer / AnyPlayer** — explicit; never ambiguous "the player."

---

## 5. Source-of-truth pointers (in the game repo, not this site)

- `CLAUDE.md` — design briefing.
- `SCHEMAS.md` — WeaponData / Effect Profile v2 / waveform editor / hardpoint trigger logic.
- `GODOT_GOTCHAS.md` — language and engine pitfalls accumulated over the project.
- `TO-CLEAN.md` — deferred cleanups.
- `docs/superpowers/specs/` — design specs (e.g. `2026-04-17-tier-3-multiplayer-networking-design.md`, `2026-05-02-boss-hinge-motion-design.md`).
- `docs/superpowers/plans/` — implementation plans (e.g. `mp-step-*.md`).

The dev-log site itself does not need any of these files — they're noted so the site's AI can request specific excerpts from Tim if a post needs them.
