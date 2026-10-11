// Rebuild the reusable transparent PNGs from the website's SVG mark.
const fs = require('node:fs');
const path = require('node:path');
const sharp = require(process.env.KAPY_SHARP_PATH || 'sharp');
const directory = path.resolve(__dirname, '../dist/assets/brand');
fs.mkdirSync(directory, { recursive: true });
const source = fs.readFileSync(path.resolve(__dirname, '../dist/mark.svg'), 'utf8');
const palette = { '': '#bd9b70', '-light': '#e5e8de', '-dark': '#263323' };
(async () => {
  for (const [suffix, colour] of Object.entries(palette)) {
    const mark = source.replaceAll('#bd9b70', colour);
    fs.writeFileSync(path.join(directory, `kapy-mark${suffix}.svg`), mark);
    for (const size of [256, 512, 1024]) {
      await sharp(Buffer.from(mark), { density: 1200 }).resize(size, size).png().toFile(path.join(directory, `kapy-mark${suffix}-${size}.png`));
    }
    const lockup = `<svg xmlns="http://www.w3.org/2000/svg" width="540" height="160" viewBox="0 0 540 160"><g transform="translate(12 16) scale(2)">${mark.replace(/<svg[^>]*>|<\/svg>/g, '')}</g><text x="172" y="103" fill="${colour}" font-family="Arial, Helvetica, sans-serif" font-size="68" letter-spacing="-2">Kapy <tspan font-weight="400">Labs</tspan></text></svg>`;
    fs.writeFileSync(path.join(directory, `kapy-logo${suffix}.svg`), lockup);
    await sharp(Buffer.from(lockup), { density: 300 }).resize(1080, 320).png().toFile(path.join(directory, `kapy-logo${suffix}.png`));
  }
  const metadata = await sharp(path.join(directory, 'kapy-mark-1024.png')).metadata();
  if (!metadata.hasAlpha || metadata.width !== 1024) throw new Error('Invalid PNG export');
  console.log('Exported three transparent logo colourways; PNG alpha and dimensions verified.');
})().catch(error => { console.error(error.message); process.exitCode = 1; });


