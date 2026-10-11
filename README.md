# Kapy Labs

A dependency-free, responsive landing page. Static hosting serves `dist/` directly.

Run `node preview.mjs` and open http://127.0.0.1:4173 for local preview.

Add applications to the `apps` array in `dist/apps.js`. Icons and product previews are placeholders. Contact details and app destination links await real release information; no email address or availability is assumed.

Publish only `dist/`, which includes the landing page, RIVI page at `/apps/rivi/`, and current Kapy Labs assets. Configure the host to serve directory `index.html` files. The local preview requires Node.js and no installed dependencies.

Current branding is documented in `dist/assets/brand/README.md`. Previous brand artwork is kept in `archive/brand/` for reference and is excluded from the published site.

All site links and assets use relative paths, so the same files work at a domain root or under the GitHub Pages project path `/kapylabs/`. App directory links include a trailing slash.

To preview the GitHub Pages path locally, run `node preview.mjs /kapylabs/` and open http://127.0.0.1:4173/kapylabs/.

For GitHub Actions, upload `dist/` as the Pages artifact (with `index.html` at the artifact root). No build or dependency installation is needed. Do not upload the entire repository. Enable GitHub Actions as the publishing source in Settings → Pages.
