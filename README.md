# Kapy Labs

A dependency-free, responsive landing page. Static hosting serves `dist/` directly.

Run `node preview.mjs` and open http://127.0.0.1:4173 for local preview.

Add applications to the `apps` array in `dist/apps.js`. Icons and product previews are placeholders. Contact details and app destination links await real release information; no email address or availability is assumed.

Publish only `dist/`, which includes the landing page, RIVI page at `/apps/rivi/`, and current Kapy Labs assets. Configure the host to serve directory `index.html` files. The local preview requires Node.js and no installed dependencies.

Current branding is documented in `dist/assets/brand/README.md`. Previous brand artwork is kept in `archive/brand/` for reference and is excluded from the published site.
