# Deployment Checklist

## Verification Status

- Homepage local HTTP check: passed
- CSS local HTTP check: passed
- JavaScript local HTTP check: passed
- Hero video local HTTP check: passed
- Representative image local HTTP checks: passed
- Source local asset references: passed
- Production `dist/` local asset references: passed
- Anchor navigation targets: passed
- Refresh / hot-reload / redirect scan: passed
- WhatsApp link HTTP check: passed
- Google Maps search link HTTP check: passed
- Google Maps embed HTTP check: passed
- Google Fonts HTTP check: passed
- JavaScript syntax check: passed
- Local server syntax check: passed
- Production build: passed

## Hostinger Settings

- Framework/preset: Static site or Other
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required
- Routing: static single-page sections using hash anchors
- Assets: relative paths under `assets/`

## Notes

- This is a static frontend website. There is no backend service or database.
- WhatsApp checkout opens `wa.me` with the cart contents, customer details, and total.
- The local preview server is for demonstration only and is not required in Hostinger production.
