# SYNTHERION Devlog Site — Design Spec

**Date:** 2026-05-08
**Author:** Tim Attewell + Claude (brainstorming session)
**Status:** Draft awaiting user review
**Domain:** syntheriongame.com
**Repo:** `C:\coding\syntherion-website` (currently a single-page promo, GH Pages, CNAME present)

---

## 1. Purpose

Pivot `syntheriongame.com` from a single-page promo into a **devlog-driven site** whose primary job is to build audience for SYNTHERION's eventual launch. The editorial hook is the genuinely interesting story behind the project: a solo non-engineer (former writer, current engineering student) building an ambitious networked Godot game by treating Claude as a peer, where most of the leverage comes from purpose-built in-game dev tools rather than raw coding velocity.

The site has three working goals, in priority order:

1. **Build a Discord-and-mailing-list audience** of players who feel like they're shaping the game. Editorial voice across the site is "this is being built in public, your input lands."
2. **Demonstrate the project is alive** — a steady cadence of posts so a returning visitor always sees something new.
3. **Convert to Steam wishlists** as the eventual launch CTA matures.

## 2. Architecture

### 2.1 Stack
- **Static site generator:** Eleventy (11ty). Markdown posts → HTML through templates. Outputs plain static files.
- **Hosting:** GitHub Pages (existing CNAME stays).
- **Deploy:** `git push` triggers GH Pages build.
- **Local dev:** `npx @11ty/eleventy --serve` — live-reload dev server.
- **No backend, no Firebase.** Mailing list and any future dynamic features go through hosted services (Buttondown, etc.). Build infra only when a feature actually demands it.

### 2.2 Content workflow
- Posts are markdown files in `content/posts/*.md` with frontmatter.
- **Publish gate:** every post requires explicit `published: true` in frontmatter to ship to live. Drafts are visible only in local dev. No flag = no publish. This is the user's confidence guarantee.
- A local-only `/drafts` index lists everything currently unpublished, so the user can see queued work at a glance.

### 2.3 Asset strategy
- **Hero video** (full-bleed muted auto-loop of the trailer): self-hosted on **Cloudflare R2**. Free tier (10 GB storage, zero egress through Cloudflare CDN). Full aesthetic control, no YouTube ad risk, no GH Pages bandwidth pressure.
- **Per-post image assets** (PNG screenshots): in-repo, organized by post slug.
- **Per-post small loop clips** (1–4 MB low-fps Steam-style): in-repo for now. Externalize to R2 if they accumulate beyond ~10–15.
- **Full trailer with audio:** YouTube embed in a dedicated "Watch trailer" section/modal. Users opt-in to that one.

### 2.4 Directory layout

```
content/
  posts/
    2026-05-15-intro.md
    2026-05-22-stage-builder.md
    ...
  intake/                   <- raw dump zone, git-tracked (stays small in practice — assets get moved into assets/posts/<slug>/ as posts are drafted)
    *.png                   <- unsorted screenshots from Tim
    notes.md                <- optional raw thoughts; can be empty
assets/
  posts/
    <post-slug>/
      cover.png
      screen-01.png
      ...
  hero/                     <- hero video poster + small inline assets
src/
  _includes/                <- 11ty templates (layouts, partials)
    layouts/
      base.njk
      post.njk
      home.njk
    partials/
      hero.njk
      sticky-cta.njk
      footer.njk
  styles/
    style.css               <- adapted from current style.css
docs/
  superpowers/specs/        <- this file lives here
.eleventy.js                <- Eleventy config
package.json
```

Existing files (`index.html`, `style.css`, `script.js`) are reference material — current synthwave aesthetic is the foundation new templates inherit from. They get re-homed during implementation.

## 3. Site shape

### 3.1 Landing page (hybrid)
Single URL doing both jobs while traffic is low:

1. **Hero** — full-bleed self-hosted muted-loop trailer. Title image, tagline, CTAs (see §3.3). Includes a **"Hear some weapons"** call-out near the hero (see §3.1.1).
2. **Trimmed pitch** — 1 short paragraph + features (cut down from current page).
3. **Latest Transmissions** — 3 most-recent published devlog cards.
4. **"→ All posts"** link to `/devlog`.
5. **"Watch trailer"** section or modal — YouTube embed of the full trailer with audio.
6. **"Stay in the loop" callout** — Buttondown email signup (real, wired) + Discord invite, side by side.
7. **Footer** — Steam, Discord, mailing list, contact email.

#### 3.1.1 "Hear some weapons" CTA *(post-v1; out of scope for initial build)*

A third hero-area video CTA, distinct from #5 above. Clicking opens a 15–30s clip with audio focused tightly on the music-as-weapons hook (player toggling weapons; loops audibly muting/unmuting).

Rationale:
- More specific and more clickable than a generic "Watch trailer." Promises the one thing that's actually novel about the game.
- Lower commitment than the full trailer; a skeptical visitor who won't watch 90s will watch 20s.
- Direct answer to the question synthwave fans care about most: *what does this game sound like?*
- Doubles as the in-post hero clip for the music-sync weapons creator post (Post 4 in the editorial slate).

Hosting: **Cloudflare R2**, same as the muted hero loop. Reasons: free tier (10 GB storage, zero egress through Cloudflare CDN); no YouTube "watch next" suggestions pulling visitors off-site; no ad / content-ID risk on Splice-licensed audio; full aesthetic control of the player UI to match the synthwave/CRT vibe. YouTube remains the home of the *full* trailer (#5).

Status: deferred until the music-sync clip exists as a captured asset. Implementation when added is a small modal + R2 video tag. No backend.

### 3.2 Devlog
- `/devlog` — full archive feed, paginated, filterable by post type (`origins` / `tools` / `devlog`).
- `/devlog/<slug>` — individual post page.
- `/feed.xml` — RSS feed.
- Local-only `/drafts` — index of unpublished posts (visible only in dev builds).

### 3.3 Persistent CTAs
**Slim sticky bar** (top or bottom of viewport, every page) carrying **two coequal CTAs**:

- **"Wishlist on Steam →"**
- **"Join the Discord →"**

The Discord CTA is editorially framed around "help shape the game" — players showing up early have real input. This isn't a generic community link; it's the engagement mechanism that makes the devlog's "building in public" voice land.

### 3.4 Migration trigger (single-page → devlog-first home)
Originally tied to "~10 posts." Replaced with **data-driven trigger**: once Cloudflare Web Analytics (see §4) shows that visitors land directly on or click through to the devlog feed at meaningful volume, the home page collapses the hero to a slim banner and becomes the devlog feed. No fixed date — driven by observed behavior.

## 4. Analytics

**Cloudflare Web Analytics** (free, privacy-friendly, no cookie banner, no consent UI required). Wired in v1. Justification: the migration trigger above depends on having data; this is the lowest-friction way to get it. Single `<script>` snippet, no SDK.

## 5. Post taxonomy

Three types, distinguished by a small badge in the feed:

### 5.1 `origins` (4–6 posts total)
Looking-back posts about the early months. Set voice and narrative. Examples (titles deferred):
- The intro / "who I am" post (post #1, mandatory).
- The earlier-version-of-the-game story (player-makes-the-music phase, ugly ships — git-recoverable from history).
- "Meeting Claude" / how the AI-as-peer workflow took shape.
- The HDR/bloom/ACES lost-days story → seeds the audition-pattern philosophy.
- The pink grid story (first scroll, persisted, debug-fallback, eyesore).

### 5.2 `tools` (15–25+ over time)
One post per in-game dev tool. The differentiator — nobody else has "I built an in-game stage editor with Claude, here's the design dialog" content at volume.

Each post broadly contains: a screenshot or short loop, what the tool does, why it exists, how Claude helped build it, and what authoring leverage it unlocks. **Recurring editorial threads** to lean into:

- **"Dev tools don't have to be pretty."** Tools repurposed from earlier game shapes (the loadout/ship-balance screen still wearing its pre-drop-economy bones). Tools that look ugly because there's no reason for them not to. This is voice, not just trivia — it humanizes the work.
- **The audition pattern as design philosophy.** Sliders write to the exact file the game loads from. No diverging preview state. Claude reads tagged `[AUDITION:...]` lines from `godot.log`. Worth its own meta-post; also a thread woven through individual tool posts.
- **Naming-as-history.** The "tyrian" path in the encounters editor named after the inspiration game. The kind of detail that signals a person, not a brand.

### 5.3 `devlog` (ongoing)
Forward-facing updates as work happens. Lower volume than `tools`, higher recency value.

### 5.4 Date strategy
**All posts use publication date.** Backdated material (origins, tool posts written from older work) gets a small "originally built [month]" honesty note in the post header. This keeps the feed reading as fresh content while staying truthful about chronology.

## 6. Content workflow (intake → draft)

The "minimum viable dump" — designed to be frictionless so the intake step doesn't become a thing the user avoids.

1. **User drops PNGs** into `content/intake/`. Filenames don't matter. No mandatory captions.
2. **User optionally writes raw bullets** in `content/intake/notes.md`. Can be empty. Older material with reconstructed context is fine — Claude will infer from the screenshot + the existing `devlog-site-context.md` (which already has tool descriptions) and pitch a draft as "this is what I see — fix what I got wrong." Lower bar than asking the user to write notes from months ago.
3. **Claude proposes a grouping** — which screenshots go in which post, what the post outline is.
4. **User approves** the grouping, possibly with corrections / extra story nuggets.
5. **Claude drafts** the post(s), moves assets from `content/intake/` into `assets/posts/<slug>/`. Intake clears as it's processed.

For the initial backlog (see §7), `devlog-site-context.md` plus the story nuggets captured in §10 are enough source material to draft most `tools` posts even before the user dumps anything per-post.

## 7. Initial content plan

The user has 4 months of fresh material that will never be this fresh again. Plan:

1. **One-shot a backlog** of `origins` + `tools` posts now, drafted from screenshots, the existing context doc, and the story nuggets in §10.
2. **Drip-release** on a slow cadence (likely weekly) to keep the site visibly alive for months.
3. **Music-sync in weapons creator likely publishes early in the drip, not buried** — flagged by the user as the post outsiders will be most curious about.
4. **Future `devlog` posts** are written as work happens.

Specific titles, exact ordering, and per-tool topic decisions are deferred until the user has dumped the full screenshot pile.

## 8. Open items resolved

- **Mailing list:** wire Buttondown at v1, not placeholder. ~20 min add. No "would-have-signed-up" leaks.
- **Analytics:** Cloudflare Web Analytics in v1 (was previously deferred — reversed because the migration trigger depends on it).
- **Comments:** none. Discussion lives on Discord.
- **Search:** none in v1. Small archive doesn't justify it.
- **Aesthetic:** keep current synthwave / CRT scanline foundation. New templates inherit from existing `style.css`.

## 9. Out of scope (explicitly deferred)

- Firebase auth, Firestore, Cloud Functions, in-browser post editor.
- Unlock-code redemption mechanic for mailing-list signups.
- In-site comments, in-site search, full-text indexing.
- Automated post scheduling beyond `published: true` flag.
- Analytics beyond pageview-level (no event tracking, no funnels).
- Migration to a JS framework (React/Astro/etc.). Not needed at this scope.

## 10. Appendix — Story nuggets captured during brainstorming

Preserved verbatim for the drafting phase. These are seeds for `origins` and `tools` posts.

- **Earlier game shape.** Players were supposed to kinda make their own music — it was bad. Ships looked awful. Both git-recoverable. Gold for the first `origins` post after the intro.
- **Music-sync in weapons creator** — flagged by Tim as the tool outsiders will be most curious about. Publish early in the drip.
- **Loadout / ship-balance screen** — repurposed from when equipment was set before play, before drop-based economy. Still wearing its old bones. Recurring "dev tools don't have to be pretty" thread.
- **Pink grid background** — earliest version of the game, first time Tim ever saw ships on a scrolling background. Persisted throughout dev because there was never enough motivation to replace it. Functional value: anything broken in an intended background falls through to it (debug-by-default visual). Aesthetically barf-worthy by now; Tim is basically blind to it.
- **HDR / bloom / ACES lost days.** Early problem: heavy reliance on previews and auditions for in-game items, but rendering them out of game. Blooms most likely to break. Lost days figuring out what HDR / bloom / ACES were and why dev tools and game looked so different — either missing entirely, or tripled and blown out. This is the seed story for "the audition pattern" philosophy: sliders must write to the exact file the game loads from, through the exact function the game calls.
- **Encounters screen / paths tab.** First path Tim made was named **"tyrian"** after his favorite game in the genre, inspired by the first formation in level 1 of Tyrian. Naming-as-history — a tool detail that signals a person, not a brand.
- **Tim's intro framing.** Solo dev, former writer, current engineering student, now apparently a game developer. Loves sci-fi and synthwave. The intro post leads with this voice, honestly.

- **Tool of choice: Claude Code specifically.** Noticeable quality jump when Opus 4.7 shipped. Worth its own short post about model choice mattering, not just "I use AI."
- **The lost-day Sonnet story.** Tim switched one window to Sonnet to save tokens; didn't realize new Claude Code instances were *also* defaulting to Sonnet for the rest of the day. Spent the day fighting work that was 90x harder than it should have been before clocking it. Great war story for an AI-workflow post — the kind of detail that makes the "AI as peer" framing land honestly (it's not magic, the model matters, the wiring matters).
- **About-me thread (first person, on the site somewhere).** Filmmaker → writer → engineering student → bot builder → board games → calculus YouTube channel — *"nothing hit."* Still ghostwriting. Storytelling and system-building skills have ended up being exactly the right pair for this kind of project. Voice should stay self-aware and not combative — Tim caught himself trending that direction ("if anyone thinks this is easy and I'm lazy") and pulled back. **Honest framing, not defensive.**
- **The 250-hour fact.** At time of writing, over 250 hours into SYNTHERION. Not something AI can ship without insane iteration and course-correction. Worth surfacing somewhere — not as a defensive flex, just as a true statement that frames what the project is.
- **Voice sample.** Tim's own ramble in this message — casual, parenthetical self-corrections, willing to be uncertain mid-sentence — is itself the model for the site's writing voice. Drafts should sound like *this*, not like a marketing blog.

More story material from Tim is expected during drafting; this list is a starting kernel, not the totality.

## 11. Implementation handoff

After user review and approval of this spec, the next step is invoking the `superpowers:writing-plans` skill to produce a detailed, step-by-step implementation plan. That plan will sequence the actual work (Eleventy scaffold → templates → content migration → R2 setup → Buttondown wire → analytics snippet → first post drafts → deploy).
