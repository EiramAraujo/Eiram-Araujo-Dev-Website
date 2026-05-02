# Eiram Araujo — Resume site (GitHub Pages build)

A clean, hand-editable version of the resume site, organized for GitHub Pages.

## Layout

```
gh-pages/
├── index.html              ← page shell (HTML + meta + script tags)
├── styles/
│   └── main.css            ← all CSS
├── scripts/
│   ├── data.js             ← resume content + i18n strings (EN/ES/DE)
│   ├── tweaks-panel.jsx    ← Tweaks UI components (panel, sliders, etc.)
│   ├── components-1.jsx    ← Themes, Reveal, Hero, QuickFacts, About
│   ├── components-2.jsx    ← Work, Projects, Voices, Skills, Contact, Footer
│   ├── nav.jsx             ← Nav, language switcher, ResumeApp shell
│   └── app.jsx             ← Entry point — mounts <App /> into #root
└── assets/                 ← photo + project images
```

## How it works

JSX is compiled in the browser by Babel-standalone. That keeps everything
human-readable on disk so you can edit any file in a text editor and just
refresh — no build step.

- **To change resume text** → edit `scripts/data.js`. Each language has its
  own block (`en`, `es`, `de`) with matching keys.
- **To change colors / fonts / spacing** → edit `styles/main.css`, or the
  `THEMES` object at the top of `scripts/components-1.jsx` (CSS variables).
- **To change which theme is active or the default language / accent** →
  edit the `DEFAULTS` block at the top of `scripts/app.jsx`.
- **To change layout of a section** → find it in `components-1.jsx` (hero,
  about, quick facts) or `components-2.jsx` (work, projects, voices, skills,
  contact, footer). Each section is a self-contained function.

## Running locally

Open `index.html` directly in a browser, OR serve the folder:

```bash
cd gh-pages
python3 -m http.server 8000
# → http://localhost:8000
```

A local server is recommended because some browsers restrict `<script src=>`
loads from `file://`.

## Deploying to GitHub Pages

1. Push this `gh-pages/` folder (or its contents) to a repo.
2. In the repo settings → **Pages**, point to the branch and folder.
3. Done — GitHub serves it statically. No build step needed.

If you put the folder contents at the **repo root**, the site is published
at `https://<user>.github.io/<repo>/`. If you want a user/org site
(`https://<user>.github.io/`), use a repo named `<user>.github.io` and
put `index.html` at its root.

## Notes

- The Tweaks panel only appears when toggled by a host — on a plain GitHub
  Pages deploy it stays hidden. You can delete that block from `app.jsx`
  if you don't need it.
- React + Babel are loaded from unpkg with integrity hashes. If unpkg is
  ever down, swap to another CDN (jsdelivr, cdnjs) — the integrity hashes
  will need to be updated to match the new files.
