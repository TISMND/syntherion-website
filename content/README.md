# Content workflow

This folder holds raw input material that hasn't been processed into posts yet.
Published posts live in `src/posts/*.md`. Their assets live in `src/assets/posts/<slug>/`.

## Intake → draft pipeline

1. **Tim drops PNGs** into `content/intake/`. Filenames don't matter, no captions required.
2. **Tim optionally adds bullets** to `content/intake/notes.md`. Empty is fine — Claude can infer from screenshots + `devlog-site-context.md`.
3. **Claude proposes a grouping**: which screenshots become which post.
4. **Tim approves** the grouping (with corrections / extra story nuggets if needed).
5. **Claude drafts** the post:
   - Writes `src/posts/YYYY-MM-DD-<slug>.md` with frontmatter (`published: false` initially).
   - Moves PNGs from `content/intake/` to `src/assets/posts/<slug>/`.
6. **Tim reviews** the draft in `npm run dev` (visible at `/drafts/`).
7. **Tim sets `published: true`** in the frontmatter when ready, commits, pushes — post goes live.

## Frontmatter reference

```yaml
---
title: "Stage Builder"
postType: tools             # one of: origins, tools, devlog
date: 2026-05-22            # publication date — see spec §5.4
published: false            # set true when ready to ship
cover: /assets/posts/stage-builder/cover.png
coverAlt: "The stage builder UI showing a list of cluster bag rows"
excerpt: "How Claude and I designed the editor that composes a level out of cluster bags."
originallyBuilt: "March 2026"   # optional, for backdated tool/origins posts
---
```
