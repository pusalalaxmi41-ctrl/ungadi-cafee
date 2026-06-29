# UGAADI CAFE Static Website

Production-ready static website for UGAADI CAFE, a 100% vegetarian Telugu restaurant in Nizampet, Hyderabad.

Open the preview at:

http://127.0.0.1:8000/

Start the demo server from this folder with:

```powershell
npm run dev
```

On this laptop, if `npm` is not available in PowerShell, use:

```powershell
.\start-demo.ps1
```

Create the production build with:

```powershell
npm run build
```

The production output is generated in:

```text
dist/
```

Files:

- `index.html` - page structure
- `styles.css` - responsive brown-gold Telugu heritage styling
- `script.js` - gallery, menu rendering, cart, and WhatsApp checkout
- `server.mjs` - local static demo server with no hot reload or auto-refresh
- `start-demo.ps1` - Windows-friendly local start script for this laptop
- `scripts/build.mjs` - static production build generator
- `assets/images/` - real restaurant, food, decor, and menu images
- `assets/video/ugaadi-hero-3.mp4` - hero video

WhatsApp checkout uses:

`+91 96496 47535`

## Hostinger Deployment

Recommended settings when connecting this repository in Hostinger:

- Framework/preset: Static site or Other
- Install command: `npm install` or leave empty if Hostinger allows it
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required

The site uses relative paths for local assets, so images and video deploy with the build output.

If the preview server is stopped, restart it from this folder with:

```powershell
.\start-demo.ps1
```
