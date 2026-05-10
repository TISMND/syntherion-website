# SYNTHERION Devlog Site — Claude Briefing

## Working with Tim

- **Tim usually has the dev server running himself.** Don't offer to start it, and don't start it speculatively to "verify" a change. If you genuinely need it running for a specific check, ask first.
- **Always use full absolute paths when referencing files.** Tim copy-pastes them into Windows Explorer; relative paths add friction. e.g. write `C:\coding\syntherion-website\content\intake\foo.md`, not `content/intake/foo.md`.
- **Improvise LANGUAGE, never FACTS.** This is the single most important rule on the project. You can rephrase, restructure, polish tone, pick punchier wording. You CANNOT invent, embellish, or guess at any factual claim about the game, the project, the people, or the infrastructure — even when it sounds plausible, even when it makes the copy better, even when the surrounding paragraph "needs" another bullet. If a fact isn't in Tim's notes, the spec, the codebase, or something Tim told you in this conversation, **you do not have it**. Stop and ask, or leave an `ASK TIM` marker. Examples of facts you must not invent:
  - **Game features and mechanics** (e.g. weapon systems, multiplayer modes, soundtrack genre/scope, number of factions, what's "fully implemented" vs. planned, art style descriptors). If Tim hasn't said it, it doesn't go on the site.
  - **Infrastructure**: contact emails, social handles, URLs, form endpoints, analytics tokens, mailing-list addresses, Discord/Steam links, etc.
  - **Blog post content**: never draft or publish a post in Tim's voice without his raw material and his approval.
  - **Project status claims**: dates, milestones, "coming soon," release windows, who is working on what.
  - **People, collaborators, guest artists, influences**: don't list names, scenes, or credits Tim hasn't given you.

  When a section needs filler and you don't have facts: ask Tim, or write a placeholder he can see (e.g. `<!-- ASK TIM: features list -->`). A blank section is infinitely better than a fabricated one. Fabricated content on the live site is the worst possible failure mode for this project — treat any uncertainty as a hard stop.

## Git / deploy policy

The GitHub Actions workflow at `C:\coding\syntherion-website\.github\workflows\deploy.yml` deploys to GitHub Pages on every push to `main`. No other branch deploys.

- **Local commits**: fine to do without asking when a logical chunk of work is done.
- **Pushing to a non-`main` branch**: fine, but mention what was pushed. Useful for backup or review without going live.
- **Pushing or merging to `main`**: always ask Tim first — this triggers the live deploy to syntheriongame.com.
- **Destructive remote operations** (force-push, branch deletion, history rewrites): always ask Tim first.
- **Reminder duty**: Tim sometimes forgets that locally-committed changes haven't gone live yet. When a meaningful chunk of user-facing work has accumulated on `main` locally and isn't pushed, gently remind him he might want to push. Don't nag after every commit; do it when a coherent unit (a finished feature, a content update, a polish pass) is sitting unpushed.
- **Fixes for things that are straight-up wrong on the live site** (broken link, wrong info, embarrassing typo, fabricated content, etc.) deserve a more pointed reminder — Tim will usually want those pushed immediately. Still remind rather than auto-push; the rule is "ask first on `main`," not "decide for him."

## Tim's writing voice (rules from him, not negotiable)

These apply when drafting *in Tim's voice* (post bodies, anything reader-facing). They do not apply to my own meta-docs (outlines, specs, briefings).

- **No em-dashes.** Ever. Use commas, parentheses, periods, ellipses. Tim does not write with em-dashes and asked me not to add them.
- **Loose grammar stays.** Trim things that are obviously wrong; leave casual sentence shapes, run-ons, and parentheticals. Tim's voice is "casual, parenthetical, willing to be uncertain mid-sentence."
- **No bolding inside his prose.** He doesn't bold things; I shouldn't either when ghostwriting him.
- **Brackets `[ ]` in Tim's raw text are addressed to me, Claude.** They are notes/instructions, not part of the post — treat them as comments to act on (or ignore where he says use judgment), not as text to publish. **Parentheses `( )` are part of the actual post** — Tim's voice is parenthesis-heavy, preserve them.
- **His raw writing is "ingredients for the word blender."** I can rearrange, cut, reshape. The order of his thoughts isn't the order of the post. But the *content* of his thoughts is sacred — don't paraphrase his anecdotes, names, references, jokes. Use his phrasing where he gave it.
- **Don't sanitize the self-deprecation.** He'll write things like "labor of love, but really it was a sign of me being stupid." Keep them. They're voice, not bugs.

## Media terminology (use these exact terms in editorial docs)

When discussing assets in editorial / planning / wishlist contexts, use these terms — never the ambiguous "shot":

- **screenshot** — static PNG, single frame.
- **clip** — short .mp4 video, 5–30s. Always specify silent or with-audio.
- **silent loop** — very short (5–10s) auto-playing muted .mp4, Steam-store style. Used for hero loops and inline post auto-plays.
- **screen recording** — longer .mp4 (15–60s) of someone using a tool, typically silent.
- **GIF** — don't use. Modern browsers handle low-bitrate muted .mp4 better. If a tiny looping visual is needed, call it a silent loop.

## Where things go

- `C:\coding\syntherion-website\content\intake\` — **raw dump zone for Tim.** PNGs and unsorted notes Tim drops here. Claude reads from this folder, but should not write *new* working docs into it. Assets get moved out (into `assets/posts/<slug>/`) as they're processed.
- `C:\coding\syntherion-website\docs\editorial\` — editorial planning docs (post outlines, idea reports, content strategy). New planning docs go here.
- `C:\coding\syntherion-website\docs\superpowers\specs\` — design specs.
- `C:\coding\syntherion-website\docs\superpowers\plans\` — implementation plans.
- `C:\coding\syntherion-website\content\posts\` — actual blog posts (markdown with frontmatter).

## Project context

This repo is the dev blog site for SYNTHERION (the game). For full project, game, and tooling context, see `C:\coding\syntherion-website\devlog-site-context.md`.

For the site's design/architecture spec, see `C:\coding\syntherion-website\docs\superpowers\specs\2026-05-08-syntherion-devlog-site-design.md`.

## Devblog workflow

**Read this when starting a fresh session that involves drafting or editing posts:** `C:\coding\syntherion-website\docs\editorial\devblog-workflow.md`. It captures the intake → outline → raw writing → draft → published lifecycle, the CSS toolkit available for posts, dev preview commands, and a snapshot of current state. Pair with this CLAUDE.md (rules) — that doc is the workflow.
