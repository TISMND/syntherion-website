# Devblog Workflow Runbook

**Audience:** future-Claude (and Tim, when he forgets where something lives). This doc captures the working pattern Tim and Claude developed across the first wave of post drafting. Read this *before* doing anything in `src/posts/` or `docs/editorial/`.

**Pair with:** `C:\coding\syntherion-website\CLAUDE.md` (the project briefing — voice rules, paths, no-fact-fabrication, git policy). This doc is the *workflow*; CLAUDE.md is the *rules of engagement*.

---

## 1. The post lifecycle

A post moves through five phases. Each phase has a specific home on disk.

```
INTAKE          → OUTLINE         → RAW WRITING     → DRAFT           → PUBLISHED
content/intake/   docs/editorial/    docs/tims-         src/posts/         src/posts/
*.png,*.docx      first-20-posts-    raw-blogging/      <slug>.md          <slug>.md
                  outline.md         *.docx             published: false   published: true
                                                        + assets/posts/
                                                          <slug>/
```

**Phase 1 — Intake.** Tim drops raw assets (PNGs, .docx files, notes) into `C:\coding\syntherion-website\content\intake\` or `C:\coding\syntherion-website\docs\tims-raw-blogging\`. Filenames don't matter. He may not caption them. Claude is expected to read context from existing docs (`devlog-site-context.md`, the spec, the outline) and propose what's what. **Don't write new working docs into `content/intake/`** — that folder is Tim's dump zone. Working docs go in `docs/editorial/`.

**Phase 2 — Outline.** The slate of planned posts lives in `C:\coding\syntherion-website\docs\editorial\first-20-posts-outline.md`. It's the source of truth for ordering, themes, and per-post wishlists/questions. Update it when a post moves, splits, or merges. Currently has full outlines for posts 1–10 and sketches for 11–20.

**Phase 3 — Raw writing.** When Tim writes raw material (typically in Word), he saves the .docx into `C:\coding\syntherion-website\docs\tims-raw-blogging\`. Convert to .txt for token efficiency:

```
python C:\coding\syntherion-website\scripts\docx_to_txt.py "<path-to-docx>"
```

The script is stdlib-only. Read the .txt, never the .docx.

For each post Tim has touched, create a per-post working doc in `C:\coding\syntherion-website\docs\editorial\drafts\post-NN-<slug>.md`. **Preserve Tim's raw writing verbatim** in a quoted block (his text is "ingredients for the word blender" but the *content* is sacred). Add my structural notes, open questions, media wishlist underneath. These per-post docs are the bridge between raw material and the actual draft.

**Phase 4 — Draft.** When Tim greenlights drafting (per the no-ad-lib-posts rule, **never draft without explicit greenlight**), the actual blog post goes to `C:\coding\syntherion-website\src\posts\YYYY-MM-DD-<slug>.md`. Always with `published: false` so it only renders in dev mode. Per-post assets go to `C:\coding\syntherion-website\src\assets\posts\YYYY-MM-DD-<slug>\` and are referenced by absolute path (`/assets/posts/<slug>/...`). Keep the per-post draft doc in `docs/editorial/drafts/` updated as the post evolves; it's the audit trail.

**Phase 5 — Published.** Tim flips `published: true`, the post appears on `/devlog/`. Pushing to `main` triggers GitHub Pages deploy via `C:\coding\syntherion-website\.github\workflows\deploy.yml`. **Always ask Tim before pushing to main** (per CLAUDE.md git policy).

---

## 2. Frontmatter contract

Every post in `src/posts/` needs:

```yaml
---
title: "Quoted title"
postType: origins | tools | devlog
date: YYYY-MM-DD
order: <integer>          # tiebreaker when posts share a date
published: false          # never true without Tim's greenlight
cover: /assets/posts/<slug>/cover.png    # optional
coverAlt: "alt text..."                  # required if cover present
originallyBuilt: "March 2026"            # optional, for backdated material
---
```

**`order` field.** Lower = earlier in reading sequence. Used by `.eleventy.js` as a tiebreaker when posts share a date (e.g. when several drafts are dated the same day during a one-shot session). Once posts get drip-released with distinct dates, `order` becomes irrelevant.

**Filename format:** `YYYY-MM-DD-slug.md`. The date prefix is preserved in the URL (`/devlog/2026-05-09-slug/`) by the permalink rule in `C:\coding\syntherion-website\src\posts\posts.11tydata.js`.

**Draft visibility.** Same `posts.11tydata.js` checks `ELEVENTY_RUN_MODE`. Drafts render only in `serve`/`watch` modes or when `ELEVENTY_INCLUDE_DRAFTS=true`. **Drafts cannot accidentally deploy.**

---

## 3. CSS toolkit for post bodies

These classes already exist in `C:\coding\syntherion-website\src\styles\style.css`. Use them when relevant; don't reinvent.

| Class | Purpose | Markup |
|---|---|---|
| `ask-tim` | Inline question to Tim, bright yellow pill, hot-pink "ASK TIM ▸" prefix. Visible only because drafts don't deploy. | `<span class="ask-tim">your question.</span>` |
| `media-placeholder` | Dashed pink box where a missing asset will go. | `<div class="media-placeholder">description of needed asset</div>` |
| `pullquote` | Standard pull quote, magenta border, italic. Use sparingly to break up walls of text. | `<blockquote class="pullquote">...</blockquote>` |
| `pullquote--thesis` | Stronger variant for the post's actual thesis line. Larger, cyan border, not italic. **Max one per post.** | `<blockquote class="pullquote pullquote--thesis">...</blockquote>` |
| `embed-yt` | Wraps a YouTube iframe with a 16:9 aspect ratio container. | See pattern below. |
| `embed-spotify` | Wraps a Spotify iframe with rounded corners. | See pattern below. |

**YouTube embed pattern:**
```html
<div class="embed-yt">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="..." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
```

**Spotify embed pattern:**
```html
<div class="embed-spotify">
  <iframe src="https://open.spotify.com/embed/track/TRACK_ID?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>
```

**Inline screenshots with caption:**
```html
<figure>
  <img src="/assets/posts/<slug>/...png" alt="...">
  <figcaption>Caption text.</figcaption>
</figure>
```

### 3.1 `ask-tim` conventions (do this right; easy to get wrong)

`ask-tim` is the most-used custom class in this project. Use it whenever:
- A factual decision hasn't been made (per CLAUDE.md "improvise language, never facts" — when you'd otherwise be tempted to invent something, use this instead).
- Tim picked an option but the wording isn't locked.
- A line in his raw writing has a self-flagged uncertainty he asked you to flag back.
- You're proposing wording and want him to confirm/replace.

**Markup conventions:**

✅ **Right:**
```html
I never thought I'd be <span class="ask-tim">self-deprecating term — "delusional," "self-important," "extroverted," "well-adjusted"? Your pick.</span> enough to launch my own public Discord server.
```

❌ **Wrong — never write "ASK TIM:" inside the span. The CSS adds the "ASK TIM ▸" prefix automatically. Doing this gets you a double prefix.**
```html
<span class="ask-tim">ASK TIM: self-deprecating term?</span>
```

❌ **Wrong — don't quote the question.** The pill is already visually distinct.
```html
<span class="ask-tim">"What's the actor's name?"</span>
```

✅ **Right — sentence form, end with appropriate punctuation, second person ("your," "you"). Talk to Tim directly.**
```html
<span class="ask-tim">confirm GOG link target.</span>
<span class="ask-tim">specific track or album you'd point at? Adds texture.</span>
<span class="ask-tim">name specific generators (Suno, Udio) or stay generic?</span>
```

**Placement conventions:**

- **Inline, at the exact spot the question is about.** Tim reacts faster to a question next to its anchor than to a list at the bottom.
- One per decision. Don't stack multiple `ask-tim` spans on the same uncertainty — write one span that captures the whole question.
- It's fine to put one in the middle of a sentence; the pill flows inline.
- For larger asks that don't fit inline (e.g. "we need a whole new section here about X"), drop a `media-placeholder`-style block below the relevant paragraph rather than crowbar it into prose.

**The closing-the-loop pattern:**

When Tim answers an `ask-tim` question, **delete the span entirely** and replace it with the resolved content. Don't leave the question hanging with a strikethrough. The dev preview should always show only *currently-open* questions.

If Tim's answer points to a *new* uncertainty (e.g. he says "use option B but check with so-and-so"), replace with a fresh `ask-tim` span describing the new question. Don't compound them.

**`media-placeholder` is the asset version of the same idea:**

Same conventions, different class. Use for assets Tim hasn't captured yet. The text inside describes what's needed (e.g. "screenshot of the Splice mobile app, Stacks view"). When Tim drops the asset, replace the placeholder div with a `<figure>` or `<img>`.

---

## 4. Dev preview workflow

```
cd C:\coding\syntherion-website
npm run dev
```

Eleventy serves at `http://localhost:8080`. Hot reload on save. Drafts auto-visible.

**Where to look:**
- `/devlog/` — published feed (drafts also visible in dev mode).
- `/drafts/` — drafts-only index, dev mode only.
- `/devlog/<slug>/` — individual post.
- `/` — homepage (no site header; full-bleed hero).

**Force a clean build:**
```
npm run clean && ELEVENTY_INCLUDE_DRAFTS=true npx @11ty/eleventy
```

The `_site/` output dir gets nuked and rebuilt. Useful when something looks stale.

---

## 5. Common situations

### Tim drops a new .docx in `docs/tims-raw-blogging/`
1. Convert with the script.
2. Read the .txt.
3. For each post he touched, update or create the per-post draft doc in `docs/editorial/drafts/post-NN-*.md` — preserve his text verbatim in a quoted block.
4. Update `docs/editorial/first-20-posts-outline.md` if his notes shifted ordering, themes, or post boundaries.
5. **Don't draft into `src/posts/` yet** unless he explicitly greenlights.
6. Summarize what changed and ask whatever blocking questions remain.

### Tim greenlights a draft
1. Write the post markdown to `C:\coding\syntherion-website\src\posts\YYYY-MM-DD-<slug>.md` with `published: false`.
2. Move existing screenshots from `content/intake/` to `src/assets/posts/<slug>/`. Rename meaningfully (`dev-menu.png`, not `Screenshot 2026-05-08 152217.png`).
3. Use `ask-tim` spans inline for any decision Tim hasn't made; he'll see them while reading the dev preview.
4. Use `media-placeholder` divs for assets he hasn't captured yet. Describe what's needed inside.
5. Run `ELEVENTY_INCLUDE_DRAFTS=true npx @11ty/eleventy --quiet` and confirm clean build.
6. Tell Tim the URL (`http://localhost:8080/devlog/<slug>/`).

### Tim asks for a content fix
1. Read the current post markdown.
2. Surgical Edit (not Write) where possible. Larger reshapes use Write.
3. Voice rules apply, always: no em-dashes, loose grammar stays, no bolding, parentheticals in his messages are notes to me.
4. **Don't invent facts.** If he asks for a section that needs material I don't have, leave an `ask-tim` span and ask in the response.
5. Rebuild and confirm clean.

### Tim is doing a big revision and wants the previous version preserved
**Don't keep both versions in `src/posts/`.** The dev preview will show two cards for the same post and Eleventy hot-reload makes them flicker as edits land. If two Claudes are running concurrently, both touching `src/posts/` is also a collision risk.

Instead, when Tim wants to compare a revision against the prior version:
1. Move the prior version to `docs/editorial/drafts/` (renamed to make the role obvious, e.g. `post-NN-<slug>-PRE-REVISION.md`). That folder doesn't render — it's the audit trail.
2. The revision stays in `src/posts/` under the original filename.
3. If Tim explicitly wants to diff in-browser (rare), keep both in `src/posts/` only as long as the comparison is active, then delete the prior one as soon as he's done.

### Tim adds an asset to `content/intake/`
1. Move it to the relevant `src/assets/posts/<slug>/` folder.
2. Rename meaningfully.
3. Reference in the post via absolute URL (`/assets/posts/<slug>/whatever.png`).
4. Update the per-post draft doc to mark the asset captured (cross off from wishlist).

### Build fails
- Check the Eleventy error output. Most common: a frontmatter typo, a Nunjucks syntax issue inside markdown (e.g., raw `{{` in code samples), or a missing partial.
- Markdown is processed through Nunjucks (`markdownTemplateEngine: "njk"`), so `{{ site.social.discordInvite }}` resolves in post bodies. Conversely, literal `{{ }}` in post bodies needs `{% raw %}...{% endraw %}` wrappers.

### Tim wants something pushed live
- Per CLAUDE.md: ask before pushing to `main`.
- Confirm `published: true` on any post that should appear publicly.
- Confirm `published: false` on anything that shouldn't.
- Then push and confirm the GitHub Pages workflow ran.

---

## 6. Current state (snapshot — update as we go)

**Last updated:** the draft session that produced this doc.

**Posts in `src/posts/`:**

| File | Order | Type | Status |
|---|---|---|---|
| `2026-05-09-just-one-post-about-the-developer.md` | 1 | origins | drafted, awaiting cover image + a couple ASK TIM resolutions |
| `2026-05-09-did-you-use-ai.md` | 2 | origins | drafted, all ASK TIMs resolved |
| `2026-05-09-splice-saved-the-game.md` | 3 | origins | drafted, all ASK TIMs resolved, real Splice screenshots in place |
| `2026-05-09-music-sync-weapons-creator.md` | 4 | tools | drafted, all ASK TIMs resolved, awaiting music-sync clip with audio |

All four are `published: false`.

**Per-post working docs:** in `C:\coding\syntherion-website\docs\editorial\drafts\post-0[1-4]-*.md`. Contain Tim's raw writing verbatim + structural notes. Don't delete; they're the audit trail and reference for future revisions.

**Outstanding media for current drafts:**
- Post 1 cover: a good in-game screenshot (not the pink grid).
- Post 4: 15–30s clip with audio of weapons toggling musically. Highest-leverage missing asset.

**Outstanding decisions / questions:** see `C:\coding\syntherion-website\docs\editorial\first-20-posts-outline.md` Part 4.

**Site infrastructure status:**
- 11ty scaffold is real and working. `npm run dev` serves the preview.
- Site header partial (`src/_includes/partials/site-header.njk`) included on `/devlog/`, `/drafts/`, and individual posts. Provides "← SYNTHERION" back-to-game-site link. Not on the homepage by design.
- Prev/next post nav at the bottom of every post.
- "Start at the beginning →" pointer on `/devlog/` resolves to the lowest-`order` post.
- Cloudflare R2 hosts the hero video. Not yet wired for the "Hear some weapons" CTA (post-v1, see spec §3.1.1).
- Buttondown form action and Cloudflare Analytics token are still empty in `src/_data/site.js` — these are ASK TIM items.

---

## 7. The "good thing we have going" (process notes for future-Claude)

These are pattern observations from the productive sessions, not strict rules. Worth knowing:

- **Tim's raw writing in his own voice always trumps my structural cleanup.** When in doubt, keep his phrasing.
- **Specific anecdotes beat abstract claims.** When Tim mentions a specific weapon, person, project, or moment, find a way to keep it in the post.
- **One thesis per post.** The `pullquote--thesis` class exists for exactly one line per post. Resist the temptation to use it twice.
- **Media gaps are explicit, not hidden.** `media-placeholder` divs are visible in the dev preview specifically so Tim can see what he still needs to capture.
- **Inline questions beat question lists.** Tim reacts to drafts faster than to question batches. Use `ask-tim` spans inline near the relevant text.
- **The voice rules are hard, not soft.** Em-dashes, bolding, sanitized self-deprecation — these are non-negotiable, not "consider also." See the AI antics log entry about treating "no bolding" as a soft rule.
- **Don't draft without greenlight.** Per CLAUDE.md. Outlines, per-post draft docs, structural notes — those don't need greenlight. Actual `src/posts/*.md` files do.
- **Tim's parentheticals in his raw text are notes to me.** Brackets too, sometimes. Strip from final published prose; act on as instructions.

---

## 8. Where to look first when context is fresh

In order:

1. `C:\coding\syntherion-website\CLAUDE.md` — rules of engagement.
2. This file — workflow.
3. `C:\coding\syntherion-website\docs\editorial\first-20-posts-outline.md` — what posts exist and what's planned.
4. `C:\coding\syntherion-website\docs\superpowers\specs\2026-05-08-syntherion-devlog-site-design.md` — site spec.
5. `C:\coding\syntherion-website\devlog-site-context.md` — game and project context.
6. `C:\coding\syntherion-website\docs\ai-antics.md` — Tim phrases + Claude quirks worth knowing.
7. `C:\Users\timat\.claude\projects\C--coding-syntherion-website\memory\MEMORY.md` — auto-memory index.
8. `src/posts/` — current drafts.
9. `docs/editorial/drafts/` — per-post raw-writing audit trail.

That's the full picture. After those, ask Tim what's next.
