# Kapy Labs brand assets

The warm pine-cone mark and Kapy Labs wordmark are the current identity.

- `kapy-mark.svg` and `kapy-mark-{256,512,1024}.png`: transparent square cone mark.
- `kapy-logo.svg` and `kapy-logo.png`: horizontal Kapy Labs wordmark; PNG size 1080 × 320.
- `-light` exports: off-white ink for dark backgrounds.
- `-dark` exports: dark green ink for light backgrounds.

The website uses `/mark.svg`, the source for these exports. Regenerate with `node scripts/export-logo.cjs` with Sharp installed or `KAPY_SHARP_PATH` pointing to a Sharp package.

Historical artwork is preserved outside the published folder in `archive/brand/`.
