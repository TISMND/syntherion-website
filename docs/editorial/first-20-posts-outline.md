# SYNTHERION Dev Blog — First 20 Posts: Outlines + Media Wishlist

**Purpose.** Concrete plan for the first 10 posts (full outlines) and the next 10 (sketches). Each post lists the media we already have, the media we need Tim to go capture, and the spots where Tim should layer in his own voice.

**Status:** revised after Tim's raw writing pass (`C:\coding\syntherion-website\docs\tims-raw-blogging\Tims_writing-first.docx`). Major reordering in slots 2 and 5–7, plus one new post added (Post 6 — Claude's inconsistencies). Individual draft files for posts 1–4 now live in `C:\coding\syntherion-website\docs\editorial\drafts\` and contain Tim's raw writing verbatim.

**Conventions used below:**
- 🎯 = the post's editorial job (what it has to accomplish)
- 📸 = media we already have in `C:\coding\syntherion-website\content\intake\`
- 📭 = media wishlist (Tim needs to capture / dig up)
- 🎤 = a place where Tim's voice should land in the draft
- ⭐ = post Tim flagged as high-priority
- 📄 = link to the per-post draft file with Tim's raw writing

---

## PART 1 — The First 10 Posts (full outlines)

Roughly weekly drip. The new order trades on Tim's instinct: address the AI question early (Post 2), tell the music-origin → music-tool story as a connected pair (3 → 4), pay off the bloom-frustration tease quickly (Post 5), then break the philosophy posts up with personal beats so it doesn't read like a manifesto.

---

### Post 1 — "Just ONE post about the developer" (`origins`)

📄 `C:\coding\syntherion-website\docs\editorial\drafts\post-01-about-tim.md`

🎯 **Job:** Set voice. Establish that the writer is a real person with a long, tangential history that converged on this project. Earn the right to be heard.

**Outline (revised from Tim's raw writing):**
- Cold open: love letter framing. SYNTHERION is a love letter to a music genre, a game from his childhood (Tyrian), and co-op with friends.
- The career arc: ghostwriter / electrical engineering → management masters / calculus YouTube (since removed) / board games / self-published books / short film / two folded startups / $0 off-grid attempt / Minecraft multiverse with sister.
- Family anchor: wife Angel (derby), step-daughter Sophie.
- Tyrian + Elite Dangerous + co-op gap → SYNTHERION as the blend.
- Synthwave discovery via embedded systems hobby. Big Black Delta as gateway.
- Discord pitch as invitation, not CTA — Tim values playtest/feedback culture from board games and writing.
- Closer: "**Deep down, I'm still a writer at heart. Hence... dev log.**"

**Hard rule from Tim:** this post does not ship without a technical post immediately after. Post 2 fills that role.

📸 None directly.
📭 A good in-game screenshot, not the pink grid. Optional: a human-anchor still (desk, monitors). Optional: trailer loop. Links: Big Black Delta, Tyrian (GOG), Discord.
🎤 The self-deprecating term he wants ("never thought I'd be ___ enough to launch a Discord"). The Big Black Delta gateway track. JT Free either parked or one line.

---

### Post 2 — "Did you use AI?" (`origins`)

📄 `C:\coding\syntherion-website\docs\editorial\drafts\post-02-did-you-use-ai.md`

🎯 **Job:** Answer the question every reader has, in the first paragraph, no waffling. Then introduce the dev menu screenshot as setup for the next 15 tool posts.

**Outline:**
- "Did you use AI?" — exact quote, opening line.
- Thesis: *"Syntherion could not possibly have been directly vibe coded. It also could not possibly have been made without vibe coding."*
- Specific breakdown: music = Splice (paid human artists). SFX = Splice. Visuals = code, not image models. Code = Claude Code, heavily.
- The "disembodied grey shapes" admission. (Honest about Claude's limits.)
- Halt and Catch Fire pull-quote: "Computers aren't the thing. They're the thing that gets you to the thing."
- Why this blog exists: pride in tools / help to other indies / hope someone teaches Tim better ways.
- **Pivot section: "...and did Tim even write this?"** Tim's writing background (a lot of books, 2015–2022, still ghostwrites). The typing-speed flex. Yes, Claude does editing passes. Closer: *"if you're reading these posts, you're reading my words."*
- The dev menu screenshot as visual closer. *"Here's how many tools we've built directly into the game."*

📸 Dev menu screenshot (`Screenshot 2026-05-08 152217.png` — already captured).
📭 Short screen-recording flicking between tools. Real Claude Code transcript snippet. Halt & Catch Fire YouTube link. Splice screenshot (saved for Post 3 but might inline here).
🎤 The "math/coordinates/vectors" line needs a correctness pass. The Halt & Catch Fire actor confirmation. Whether to name specific AI image generators.

---

### Post 3 — "Splice saved the game" (`origins`)

📄 `C:\coding\syntherion-website\docs\editorial\drafts\post-03-splice-saved-the-game.md`

🎯 **Job:** The night the game almost died and what brought it back. Pays off the "AI didn't generate the music" line from Post 2 with the actual story.

**Outline:**
- Mario Paint inspiration: "everyone will want to do this for their ships."
- Building the tool. The night it worked.
- The crash: realizing players would generate "discordant garbage."
- AI music generators considered, dismissed.
- Splice. First impression: "I wish this site didn't suck so bad."
- Mobile app + Stacks feature discovery — unified BPM, unified key.
- The "120 BPM, D# minor" confession.
- Tease forward: in-game environments triggering key/tempo changes (parked feature).
- Self-aware closer about staying focused.

📸 None directly. *(The Stacks screenshot is the post's pivot moment; it's the highest-leverage capture.)*
📭 ⭐ Splice mobile Stacks screenshot. ⭐ Old player-makes-music build artifact (audio if at all possible). Current combat clip with audio. Mario Paint composer link.
🎤 Confirm 120 BPM / D# minor are real values. DAW phrasing. Whether to name AI music generators.

---

### Post 4 — Music-sync in the weapons creator ⭐ (`tools`)

📄 `C:\coding\syntherion-website\docs\editorial\drafts\post-04-music-sync-weapons-creator.md`

🎯 **Job:** **The post outsiders will care most about.** Tim flagged it. Lands the music-as-weapons hook with a real tool screen and audio.

**Outline:**
- "The first real tool I made that still gets used. A lot of junk preceded it."
- The vibe of authoring a weapon: "pure vibes guide the process." Visuals + stats are downstream of the music.
- The screenshot. Annotated.
- How it works: drop loop, set snap, place triggers, tune fade.
- The beam-vs-burst lesson — sustained notes don't always become beams.
- Claude one-shot the waveform generator. QoL came later: ruler, autopopulate, the month of placing triggers by hand.
- "Labor of love, but really it was a sign of me being stupid."
- The ironic-laziness reflection. Clothes-in-the-drawer metaphor.
- Forward tease to Post 5: the bloom/audition lost days.

📸 Components / Laser Turret waveform tab + stats tab (both already captured).
📭 ⭐ A 15–30s gameplay clip with audio of weapons toggling musically. A screen-recording of Tim authoring a weapon in the tool. Optional sketch diagram of "all loops play simultaneously, player mutes/unmutes."
🎤 Title pick. Specific weapon for the beam-vs-burst story. Pull-quote candidate confirmation. Whether to keep the clothes-in-the-drawer metaphor.

---

### Post 5 — "HDR, bloom, ACES, and the days I lost to all three" (`origins`)

🎯 **Job:** Cash in the tease at the end of Post 4. Tim explicitly forward-references this. Don't make readers wait. Sets up the audition pattern in Post 7.

**Outline:**
- The problem: dev tools and the game looked completely different. Same shader, same values, different output.
- The detective work: learning HDR / bloom / ACES tonemapping from scratch. Days lost.
- The cause: two render contexts (dev tool's `WorldEnvironment` ≠ game's `WorldEnvironment`).
- The trap: tune in dev tool, ship to game, looks nothing like preview.
- The fix wasn't matching settings; it was eliminating the second context. **One bloom source on the root `WorldEnvironment`. SubViewports get tonemapping but no glow. "Glow is HDR or nothing."**
- Tease forward to Post 7 (audition pattern).

📸 None directly.
📭 ⭐ Side-by-side of buggy preview vs in-game (dramatic image). A "we got it right eventually" combat shot. CLAUDE.md snippet showing the rule.
🎤 The 2am moment of realization. A specific weapon casualty of the lost days.

---

### Post 6 — "Claude is inconsistent in the same way I'm inconsistent" (`origins` or `tools`)

🎯 **Job:** ⭐ **NEW POST.** Surfaced from Tim's raw Post 4 writing. The saving-mechanism story is too big to live inside Post 4 and too good to lose. It also sets up future tool posts honestly: not every tool is built the same way.

**Outline (proposed; needs Tim's input):**
- The one thing Claude has been inconsistent about across all tool creations: how they save.
- Some auto-save on change. Some require a click. For a while, the weapons creator only saved *new* ones, no rename. (Low-priority fix; Tim didn't bother.)
- The print-to-debug-paste-back era: in the level backdrop creator, Tim was clicking to print parameters to a debug log, then pasting them into chat so Claude could make the change. *"I cannot explain why I went along with that for as long as I did, but I'm happy to say that's dead now."*
- The audition pattern (Post 7) is partially the answer. But this post is honest about what was *before* the pattern was a rule.
- The deeper observation: Claude's inconsistencies map to Tim's own inconsistency. A "lazy prompt" produces a tool with weird saving behavior. Better prompt, better tool. **The tool is the prompt's reflection.**

📸 Possibly a screenshot of the level backdrop audition that needed paste-back, if Tim still has access. Otherwise, none.
📭 *(Optional)* A `[AUDITION:...]` log line from a tool that *does* follow the pattern, side by side with a description of what the bad version looked like. Sells the contrast.
🎤 Other examples of Claude inconsistencies across tools (positive or negative). The most absurd workflow Tim tolerated for too long.

---

### Post 7 — "The audition pattern" (`tools`, philosophy)

🎯 **Job:** State the design philosophy that runs through every audition tool on the site. **Most likely post to get linked outside the gamedev bubble.**

**Outline:** (unchanged from prior version)
- Frame: "audition" tools have sliders that tune live values.
- The rule: **Sliders write to the *exact* file the game loads from, through the *exact* function the game calls.**
- Three output channels: save button / auto-save / tagged log lines (`[AUDITION:bloom_tuning] strength=0.42`).
- Walk through the bloom audition specifically. End-to-end loop.
- Deeper claim: most preview tools lie. The audition pattern collapses preview-vs-ship divergence.
- Closer: this rule made everything else on the dev menu possible.

📸 Background audition screenshot (Verse 1 BG, already captured).
📭 ⭐ Real `[AUDITION:...]` line from `godot.log`. Real Claude transcript reading a log line and writing a file edit. Screen-recording of an audition mid-tune.
🎤 First time the pattern *clicked*. A tool where Tim cheated on the rule.

---

### Post 8 — "Meeting Claude" (`origins`)

🎯 **Job:** The "AI as peer" thesis. Land it after the philosophy posts (5 and 7) so it reads as workflow truth, not sales pitch.

**Outline:** (unchanged)
- The shift from autocomplete to peer.
- `CLAUDE.md` as design briefing, not inventory.
- Auto-memory.
- Log-driven debugging via `godot.log`.
- The honest part: this is collaboration, not magic. Tease the Sonnet story (Post 9).

📸 None directly.
📭 `CLAUDE.md` opener screenshot. Auto-memory directory listing. Real Claude Code transcript snippet (Tim asks → Claude greps → Claude decides).
🎤 The first Claude session that felt different. One thing Claude got wrong recently. The way Tim talks to it.

---

### Post 9 — "The day I was paying for Opus and getting Sonnet" (`origins`)

🎯 **Job:** Best war story in the pile. Earns the "AI as peer" framing by showing what happens when the wiring breaks.

**Outline:** (unchanged)
- Used to Opus 4.7. Switched one window to Sonnet to save tokens.
- Didn't notice every new Claude Code instance was *also* defaulting to Sonnet.
- The full lost day fighting work that should have been easy.
- Late-afternoon realization.
- The lesson: the model matters. Stated as a working condition, not a marketing claim.
- Auto-memory entry: "always check the model in the status line."

📸 None.
📭 Status-line screenshot showing model name. *(Stretch: a git diff from that day showing weaker work product.)* Auto-memory entry screenshot.
🎤 Specific task that was failing. The moment of realization. Where, when, how it felt.

---

### Post 10 — "The loadout screen still wearing its old bones" (`tools`)

🎯 **Job:** First "ugly tools" voice post — palate cleanser after the philosophy run. Establishes the running gag for the next 10 tool posts.

**Outline:** (unchanged from prior version)
- The loadout / ship-balance screen, repurposed from when equipment was set before play.
- Brief history of the old design (pre drop-based economy).
- The vestigial bones: tabs that don't make sense, save-as-stock from a "stock" era, fields nobody touches.
- "None of it bothers me because nobody's looking but me and Claude."
- Thesis: dev tools are functional artifacts. They don't get the polish budget. *That's how I get to ship 20 of them solo.*

📸 LOADOUT screen + [DEV] SHIP BALANCE tab (both already captured).
📭 An old commit / screenshot of the screen as it was when player-facing. Before/after pair.
🎤 The honest "I was going to replace it for six months" line. A specific vestigial element.

---

## PART 2 — Posts 11–20 (sketches, slot numbers approximate)

Same as before, mostly. The major change is that the prior Post 10 (audition pattern) moved up to slot 7, and the prior Post 9 (HDR/bloom) moved up to slot 5. Everything else slid down a slot.

---

### Post 11 — "Tyrian Circle, ob_tyrian, and naming as history" (`tools`)

🎯 The naming-as-history post. Personal detail. Signals "this game was made by a person who loves this genre."

📸 FORMATIONS / PATHS screen with Tyrian Circle. Cluster Editor with `ob_tyrian` visible.
📭 Clip of `ob_tyrian` *playing* in-game. Tyrian level 1 reference image.
🎤 ⭐ The Tyrian story itself — when, where, which port, which formation specifically. The Tim-iest Tim-ism on the list.

---

### Post 12 — "The boss sketcher → boss editor pipeline" (`tools`)

🎯 The two-channel handoff: PNG (vibe) + JSON (numbers of record). Sketch in-tool with annotations. Boss editor handles the live build.

📸 BOSS SKETCHER (neon spike grabber). BOSS EDITOR (rendered).
📭 Clip of the boss in-game. Side-by-side of three different bosses' sketches.
🎤 The boss Tim most enjoyed sketching. One that fought him.

---

### Post 13 — "I built a video studio inside the game" (`tools`)

🎯 The MARKETING submenu — POSTER / CINEMATIC SANDBOX / TRAILER INTRO / TITLE EFFECTS / COOP ARRIVAL. Trailer captured *inside the game itself.*

📸 Marketing menu. Coop arrival timeline.
📭 ⭐ The trailer / current cut, embedded.
🎤 What making a trailer was actually like for a non-engineer dev.

---

### Post 14 — "Stage builder + the cluster bag" (`tools`)

🎯 How a stage gets composed. Cluster bag rows + density curves + faction skins. The PLAYTEST button as the philosophical center.

📸 PLAYTEST STAGE screen.
📭 Clip of stage builder → playtest button → instant gameplay.
🎤 A stage that worked first try and one that's been re-tuning for weeks.

---

### Post 15 — "Ship cosmetics and the ugliest ship I'll ever show you" (`tools`)

🎯 The debug-color ship. Continues the "tools don't have to be pretty" voice.

📸 SHIP COSMETICS audition with rainbow ship.
📭 The same ship after skinning. *(Stretch: side-by-side of three ships, debug vs shipped.)*
🎤 The moment Tim stopped wincing.

---

### Post 16 — "Shader-driven projectiles" (`tools`)

🎯 The projectile / field-emitter editors. Authored parametrically, not as PNGs. Integrates with the bloom rule from Post 5.

📸 `purple_stretch_ring` projectile shader. `orange_out_force` field emitter.
📭 ⭐ Clip of projectiles in flight (beam, kinetic, field). Optional shader code excerpt.
🎤 The projectile Tim tuned the longest.

---

### Post 17 — "Background auditions: every verse has a personality" (`tools`)

🎯 Tour of the per-verse backgrounds. Visually striking; high screenshot density.

📸 Verse 1 BG audition.
📭 ⭐ Audition shots for Verse 2 / Verse 3 / Monolith / etc. 5-second clips of each scrolling.
🎤 The verse Tim most enjoyed designing the look for.

---

### Post 18 — "Portal Manager: how the game decides where you go" (`tools`)

🎯 Portals as the procgen routing mechanism. Mechanical tuning + visual identity in one tool.

📸 PORTAL MANAGER VISUAL + CADENCE.
📭 Clip of portals drifting, player taking one, verse change. *(Stretch: 2–3 portal styles side by side.)*
🎤 The "no menu, no map, just fly into the thing" decision moment.

---

### Post 19 — "Component Manager: 50+ weapons in one spreadsheet" (`tools`)

🎯 The bird's-eye spreadsheet. Half-tour, half-naming-celebration (Bridal Shower, Everything Gun, Hoop-N8, Heaven's Orb).

📸 COMPONENT MANAGER table.
📭 Scroll-recording of the entire weapon list. *(Stretch: a chart pulled from data showing DPS distributions or similar.)*
🎤 A weapon name Tim regrets. One he's proudest of.

---

### Post 20 — "SFX + VFX: the audition pattern, again" (`tools`)

🎯 SFX and VFX editors as a paired post. Both follow the audition pattern (callback to Post 7). The mundane *also* deserves good tools.

📸 SFX EDITOR. VFX EDITOR.
📭 Combat clip with audio.
🎤 The SFX Tim spent way too long on. The VFX he ripped out completely.

---

## PART 3 — Capture priority list

**P0 — capture before drafting the first 4 posts:**
- ⭐ A 15–30s gameplay clip with audio for Post 4 (weapons toggling, loops mute/unmute audibly).
- ⭐ Splice mobile Stacks screenshot for Post 3.
- ⭐ Old player-makes-music build artifact, even 3 seconds of audio, for Post 3.
- A good in-game screenshot for Post 1 that isn't the pink grid.

**P1 — capture before drafting Posts 5–10:**
- A real `[AUDITION:...]` line in `godot.log` (Post 7).
- A real Claude Code transcript snippet — Tim asks, Claude greps the log, Claude decides (Posts 7 and 8).
- `CLAUDE.md` opener screenshot + auto-memory directory listing (Post 8).
- Status-line screenshot with model name (Post 9).
- Old player-facing loadout-screen capture (Post 10).
- Side-by-side of buggy bloom preview vs in-game (Post 5).

**P2 — nice to have, lower urgency:**
- Clip of the dev menu being navigated (Post 2).
- Halt and Catch Fire YouTube link (Post 2).
- Tyrian level 1 reference image (Post 11).
- Background auditions for additional verses (Post 17).
- Trailer / current cut (Post 13).

---

## PART 4 — Outstanding decisions for Tim

These are the questions that have piled up across the four draft files. Pulled together so Tim can answer in one pass:

**Post 1 questions:**
1. Self-deprecating term for "never thought I'd be ___ enough to launch a Discord."
2. Big Black Delta — specific track / album for the gateway moment?
3. Tyrian link target (GOG)?
4. JT Free — fully parked or one-line mention?
5. Angel and Sophie OK to name on a public site? (Default yes, confirming.)

**Post 2 questions:**
1. "Math, coordinates, and vectors" correctness pass — what's the right phrasing?
2. Halt and Catch Fire actor name (I think Joe MacMillan / Lee Pace; not certain).
3. "Disembodied grey shapes" line — confirmed in?
4. Dev menu screenshot caption — keep "they don't ship with public builds" parenthetical, or footnote it?
5. Splice — separate dedicated post, or fully folded into Post 3?
6. Title — keep clean ("Did you use AI?") or expand to a two-part title?
7. Section placement of the "...and did Tim even write this?" beat — last prose beat before the dev menu, or earlier in the post?
8. ~~The 2015–2022 detail~~ — resolved: lose the years, phrase as "for years" / "for a long stretch."

**Post 3 questions:**
1. DAW phrasing — keep the slight inaccuracy as voice, or footnote it?
2. "Beat changes" — confirm "tempo / BPM changes"?
3. Name specific AI music generators (Suno, Udio) or stay generic?
4. Confirm 120 BPM / D# minor are the actual values?
5. Splice deeper post — separate or folded?
6. Mario Paint reference — got a specific YouTube link in mind?

**Post 4 questions:**
1. ⭐ Split the saving-mechanism stuff into its own Post 6? (Strong recommend yes.)
2. "Pure vibes guide the process" — pull quote or section header?
3. Specific weapon for the beam-vs-burst surprise.
4. Forward tease wording — keep "fist-pounding-on-desk frustration"?
5. Clothes-in-the-drawer metaphor — keep or swap?
6. Title for the post.

**Post 6 questions (new):**
1. Confirm the post idea: split out from Post 4's raw writing?
2. Other Claude inconsistency examples (positive or negative)?
3. Most absurd workflow you tolerated for too long, beyond the print-to-debug-paste-back?

---

## PART 5 — How to use this doc

1. **Read the four draft files** in `C:\coding\syntherion-website\docs\editorial\drafts\` — those have your raw writing preserved verbatim plus my structural notes.
2. **Answer the questions in Part 4** (above) at whatever level of detail feels right. Even partial answers unblock drafting.
3. **Capture P0 media** for posts 1–4 when you have time. The music-sync clip is the single highest-value asset.
4. **Ping me to draft any post.** I'll combine the raw writing + your answers + media plan into a finished markdown post and put it in `content/posts/` with `published: false`.

When you write more raw material, drop another `.docx` in `C:\coding\syntherion-website\docs\tims-raw-blogging\` — I'll convert and incorporate.
