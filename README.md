## Camille Santiago — Portfolio Website

A fast, accessible, and modern static site built with HTML + Tailwind CSS (no frameworks) and minimal vanilla JavaScript. Designed to be both a professional portfolio and a thoughtful, personalized gift.

### Features
- Responsive layout with light/dark mode
- Accessible semantics, focus states, and color contrast
- Projects loaded from simple JSON (`src/data/projects.json`)
- Blog posts as Markdown files (`src/blog/posts/*.md`) rendered client-side
- Interactive resume timeline and copy-to-clipboard contact
- Contact form via Netlify Forms (or Formspree alternative)
- Optional private page with lightweight password gate
- Extras: gallery modal, Spotify embed, soft micro-interactions, animated counters

### Structure
```
src/
  index.html
  about.html
  projects.html
  contact.html
  private.html
  js/
    main.js
    projects.js
    blog.js
  data/
    projects.json
  blog/
    index.html
    posts.json
    posts/
      hello-world.md
      it-journey.md
  assets/
    Camille_Santiago_Resume.pdf (placeholder)
    profile.jpg (placeholder)
    gallery/
      1.jpg 2.jpg 3.jpg (placeholders)
```

### Quick start (no build needed)
Open `src/index.html` in a browser. Tailwind via CDN is used by default for immediate viewing and development.

### Production build (optional, recommended)
This repo also includes `tailwind.config.js` if you prefer to generate a minimal CSS bundle locally.

1. Install Node.js (>= 18)
2. Initialize and install Tailwind CLI and plugins:
```
npm init -y
npm i -D tailwindcss@^3 @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
// this project already includes example input/output css at src/input.css and src/output.css
npx tailwindcss -i ./src/input.css -o ./src/output.css --minify --watch
```
3. Replace the CDN `<script src="https://cdn.tailwindcss.com?...">` with `<link rel="stylesheet" href="/src/output.css">` in pages for production.

### Deploy
- Netlify: Drag-and-drop the `src/` folder or connect your repo. Set Publish directory to `src`.
- Vercel: Import project and set Output Directory to `src`.

### Updating projects
Edit `src/data/projects.json`. Each item supports:
```
{
  "title": "Project Name",
  "description": "Short summary...",
  "image": "assets/your-image.jpg",
  "tags": ["HTML", "CSS", "JS"],
  "liveUrl": "https://...",
  "repoUrl": "https://github.com/...",
  "featured": true
}
```

### Adding blog posts
1. Add a new Markdown file to `src/blog/posts/`, e.g. `my-post.md`.
2. Add an entry to `src/blog/posts.json`:
```
{
  "slug": "my-post",
  "title": "My Post",
  "excerpt": "One-liner intro...",
  "tags": ["career"],
  "date": "2025-08-12"
}
```
3. The blog page will render it automatically; no rebuild needed.

### Contact form options
- Netlify Forms: Enabled by default via `data-netlify="true"` and a honeypot field.
- Formspree: Replace the form `action` with your Formspree endpoint.

### Private page password
- Default passphrase is `ks-cs-2025` (client-side check, not for sensitive data). It works out of the box. For better obfuscation, change the `HASHED_PASSWORD` in `src/js/main.js` with your own SHA-256 hash and remove the plaintext fallback.

### Credits
- Icons: Heroicons (MIT)
- Markdown: Marked.js (MIT)
- Syntax highlight: Prism.js (MIT)


