# SYNTHERION — syntheriongame.com

Static landing page. Plain HTML/CSS/JS. Hosted on GitHub Pages.

## Structure

```
.
├── index.html
├── style.css
├── script.js
├── CNAME              # syntheriongame.com — required by GitHub Pages
├── .nojekyll          # skip Jekyll processing
└── assets/
    ├── hero.mp4       # ~5–10s muted loop, H.264, ~1080p, <4 MB
    ├── hero.webm      # VP9 alternative (smaller, modern browsers pick this first)
    ├── hero-poster.jpg# first-frame fallback before video loads
    ├── title.png      # chrome SYNTHERION wordmark, transparent BG
    ├── favicon.svg
    ├── og.jpg         # 1200×630 social card
    └── shot1..4.jpg   # gameplay stills (16:9)
```

## Deploy

1. Create a new GitHub repo, e.g. `syntherion-website`.
2. `git init && git add . && git commit -m "init" && git push`.
3. GitHub → repo → **Settings → Pages** → Source: `main` / root.
4. Pages will read `CNAME` and serve at `syntheriongame.com` once DNS resolves.

## DNS (Squarespace domain → GitHub Pages)

In **Squarespace → Domains → syntheriongame.com → DNS Settings**:

**Apex (`syntheriongame.com`) — four A records pointing at GitHub:**

| Type | Host | Value            |
|------|------|------------------|
| A    | @    | 185.199.108.153  |
| A    | @    | 185.199.109.153  |
| A    | @    | 185.199.110.153  |
| A    | @    | 185.199.111.153  |

**(Optional, IPv6) four AAAA records:**

| Type | Host | Value                    |
|------|------|--------------------------|
| AAAA | @    | 2606:50c0:8000::153      |
| AAAA | @    | 2606:50c0:8001::153      |
| AAAA | @    | 2606:50c0:8002::153      |
| AAAA | @    | 2606:50c0:8003::153      |

**`www` subdomain — CNAME to your Pages host:**

| Type  | Host | Value                        |
|-------|------|------------------------------|
| CNAME | www  | <your-github-username>.github.io |

Delete any conflicting Squarespace parking A/CNAME records first.

After DNS propagates (minutes to a few hours):

- GitHub → **Settings → Pages → Custom domain** — confirm `syntheriongame.com` shows a green check.
- Tick **Enforce HTTPS** once the cert issues (can take up to ~15 min after verification).

## Local preview

Any static server works:

```
python -m http.server 8000
# or
npx serve .
```

## Assets checklist

- [ ] `hero.mp4` / `hero.webm` — muted loop, silent audio track stripped
- [ ] `hero-poster.jpg` — matches first video frame
- [ ] `title.png` — chrome wordmark, transparent
- [ ] `favicon.svg`
- [ ] `og.jpg` — 1200×630
- [ ] `shot1.jpg`..`shot4.jpg`

Placeholders will 404 until added — page still renders.
