# syntheriongame.com

Devlog site for SYNTHERION. Static site, built with [Eleventy](https://www.11ty.dev/), hosted on GitHub Pages.

## Quick start

```bash
npm install
npm run dev    # http://localhost:8080, live-reload
npm run build  # outputs to _site/
```

## Adding a post

1. Drop screenshots into `content/intake/`.
2. (Optional) bullet your thoughts in `content/intake/notes.md`.
3. Ask Claude to draft the post. (See `content/README.md` for the full workflow.)
4. Review at `npm run dev` → `/drafts/`.
5. Set `published: true` in the post frontmatter.
6. `git push`.

## Project docs

- `devlog-site-context.md` — context briefing for the agent (game, tools, voice).
- `docs/superpowers/specs/` — design specs.
- `docs/superpowers/plans/` — implementation plans.

## License

All rights reserved. Game and content © Tim Attewell.
