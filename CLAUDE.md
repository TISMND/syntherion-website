# SYNTHERION Devlog Site — Claude Briefing

## Working with Tim

- **Always use full absolute paths when referencing files.** Tim copy-pastes them into Windows Explorer; relative paths add friction. e.g. write `C:\coding\syntherion-website\content\intake\foo.md`, not `content/intake/foo.md`.
- **Don't ad-lib real infrastructure or posts.** Never invent contact emails, social handles, URLs, form endpoints, analytics tokens, mailing-list addresses, or other live infrastructure — and don't draft/publish blog posts — without discussing and getting Tim's approval first. If a value is missing, ask or leave it blank with a clear `ASK TIM` marker rather than fabricating something plausible.

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
- **Parentheticals and brackets in Tim's raw text are addressed to me, Claude.** They are notes/instructions, not part of the post. Treat them as comments to act on (or ignore where he says use judgment), not as text to publish.
- **His raw writing is "ingredients for the word blender."** I can rearrange, cut, reshape. The order of his thoughts isn't the order of the post. But the *content* of his thoughts is sacred — don't paraphrase his anecdotes, names, references, jokes. Use his phrasing where he gave it.
- **Don't sanitize the self-deprecation.** He'll write things like "labor of love, but really it was a sign of me being stupid." Keep them. They're voice, not bugs.

## Where things go

- `C:\coding\syntherion-website\content\intake\` — **raw dump zone for Tim.** PNGs and unsorted notes Tim drops here. Claude reads from this folder, but should not write *new* working docs into it. Assets get moved out (into `assets/posts/<slug>/`) as they're processed.
- `C:\coding\syntherion-website\docs\editorial\` — editorial planning docs (post outlines, idea reports, content strategy). New planning docs go here.
- `C:\coding\syntherion-website\docs\superpowers\specs\` — design specs.
- `C:\coding\syntherion-website\docs\superpowers\plans\` — implementation plans.
- `C:\coding\syntherion-website\content\posts\` — actual blog posts (markdown with frontmatter).

## Project context

This repo is the dev blog site for SYNTHERION (the game). For full project, game, and tooling context, see `C:\coding\syntherion-website\devlog-site-context.md`.

For the site's design/architecture spec, see `C:\coding\syntherion-website\docs\superpowers\specs\2026-05-08-syntherion-devlog-site-design.md`.
