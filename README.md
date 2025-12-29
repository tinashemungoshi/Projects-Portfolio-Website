# Personal Projects Portfolio Website

This repository hosts a simple, static portfolio website to showcase projects, certifications, and contact information. It uses vanilla HTML, CSS, and JavaScript, with Google Fonts and Feather Icons for a clean, responsive UI.

## Features

- Responsive layout and modern styling (Inter font, clean UI)
- Accessible navigation with active-section highlighting
- Dynamic project cards with search and tag filters
- Certifications gallery with PNG previews and linked PDFs
- Lightweight dependencies: Google Fonts + Feather Icons (no build step)

## Folder Structure

- `index.html` — main site entry
- `styles.css` — primary stylesheet used by `index.html`
- `script.js` — main JavaScript powering nav, search, filters, and project cards
- `assets/images/` — site images (e.g., hero portrait and project images)
- `assets/Certificates/` — certificate PNGs and PDFs used in the Certifications section
- `assets/` — contains `styles.css` and `script.js` not referenced by `index.html` (kept for optional use)
- `Portfolio/` — placeholder for a standalone portfolio variant (currently empty)

## Preview Locally (Windows)

Option 1 — open directly:
- Double‑click `index.html` to open in your browser.

Option 2 — local server (recommended for consistent script behavior):

```powershell
Push-Location "C:\Users\tinas\OneDrive\Documents\GitHub\PP-Website"
python -m http.server 8000
Start-Process "http://localhost:8000"
```

## Customize Content

- Projects: Edit the `projects` array in `script.js` (title, description, image path, tags, links).
- Certificates: Add PNG + PDF files into `assets/Certificates/` and reference them in `index.html`.
- Images: Place hero and project images in `assets/images/` and update paths in `index.html` / `script.js`.
- Branding: Update titles, headings, and social links directly in `index.html`.

## Deployment (GitHub Pages)

This is a static site and can be deployed via GitHub Pages:
- Push the repo to GitHub.
- In GitHub → Settings → Pages: set Source to `Deploy from a branch`, then choose `main` and `/ (root)`.
- The site will be available at your GitHub Pages URL after a short build.

## Asset Sources & Licenses

- Fonts: Google Fonts (Inter) — free to use
- Icons: Feather Icons — MIT license
- Images: Unsplash photos — free to use (attribution recommended)

## Notes

- `index.html` references the root `styles.css` and `script.js`. Files under `assets/` with the same names are currently not used.
- The `Portfolio/` directory is reserved for a standalone variant and may be populated later.

## Contact

- Email: tinashesean11@gmail.com
- LinkedIn: https://www.linkedin.com/in/tinasheseanmungoshi
- GitHub: https://github.com/GrantedV1rus
