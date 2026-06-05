const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const BASE = path.join(__dirname, "../public/images");

// Map: old DSC path → new descriptive name (in same folder)
const renames = [
  // consultation — filling gaps 01, 04, 06, 08, 09
  ["chambers/consultation/DSC02644.JPG", "chambers/consultation/consultation-room-01.jpg"],
  ["chambers/consultation/DSC02648.JPG", "chambers/consultation/consultation-room-04.jpg"],
  ["chambers/consultation/DSC02650.JPG", "chambers/consultation/consultation-room-06.jpg"],
  ["chambers/consultation/DSC02652.JPG", "chambers/consultation/consultation-room-08.jpg"],
  ["chambers/consultation/DSC02654.JPG", "chambers/consultation/consultation-room-09.jpg"],

  // kids — filling gaps 02, 03, 04, 05
  ["chambers/kids/DSC02662.JPG", "chambers/kids/kids-chamber-02.jpg"],
  ["chambers/kids/DSC02663.JPG", "chambers/kids/kids-chamber-03.jpg"],
  ["chambers/kids/DSC02666.JPG", "chambers/kids/kids-chamber-04.jpg"],
  ["chambers/kids/DSC02675.JPG", "chambers/kids/kids-chamber-05.jpg"],

  // reception — new folder
  ["receptions/DSC02656.JPG", "receptions/reception-01.jpg"],
  ["receptions/DSC02658.JPG", "receptions/reception-02.jpg"],
];

async function processImage(srcRel, destRel) {
  const src = path.join(BASE, srcRel);
  const dest = path.join(BASE, destRel);

  if (!fs.existsSync(src)) {
    console.error(`MISSING: ${srcRel}`);
    return;
  }

  const before = fs.statSync(src).size;

  await sharp(src)
    .rotate()              // fix EXIF orientation
    .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dest);

  fs.unlinkSync(src);

  const after = fs.statSync(dest).size;
  const saved = Math.round((1 - after / before) * 100);
  console.log(`OK  ${path.basename(dest)}  ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB  (${saved}% smaller)`);
}

async function main() {
  for (const [src, dest] of renames) {
    await processImage(src, dest);
  }
  console.log("\nDone.");
}

main().catch(console.error);
