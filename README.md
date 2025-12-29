# Portfolio (Example)

An example personal projects portfolio using assets from the web (Google Fonts, Feather Icons, Unsplash images) to stay portable and copyright-safe.

## Preview Locally

From the Portfolio folder:

```powershell
Push-Location "C:\Users\tinas\OneDrive\Desktop\TM\Projects\Python\Website\Portfolio"
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

If Python isn't available, you can also double-click `index.html` to open directly, but some browsers restrict local scripts.

## Asset Sources

- Fonts: Google Fonts (Inter) — free to use
- Icons: Feather Icons (MIT license)
- Images: Unsplash photos — free to use (no attribution required, but recommended)

Image credits (examples):
- Tech background: https://unsplash.com/photos/9eb780fc7f66
- Robotics chip: https://unsplash.com/photos/4636190af475
- Developer setup: https://unsplash.com/photos/dccba630e2f6

## Structure

- `index.html` — page scaffold
- `styles.css` — responsive, modern styling
- `script.js` — dynamic project cards, search & filters

## Customize

Edit `script.js` to change projects (title, desc, image, tags, links). Replace Unsplash image URLs with your own, or keep them for demo.
