const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const IMAGES_DIR = path.join(__dirname, "../public/images");

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function fixOrientation(filePath) {
  const tmpPath = filePath + ".tmp";
  try {
    const metadata = await sharp(filePath).metadata();
    if (metadata.orientation && metadata.orientation !== 1) {
      await sharp(filePath).rotate().toFile(tmpPath);
      fs.renameSync(tmpPath, filePath);
      console.log(`Fixed: ${path.relative(IMAGES_DIR, filePath)} (orientation was ${metadata.orientation})`);
    }
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    console.error(`Error: ${filePath} — ${err.message}`);
  }
}

async function main() {
  const files = walkDir(IMAGES_DIR);
  console.log(`Scanning ${files.length} images...`);
  for (const file of files) {
    await fixOrientation(file);
  }
  console.log("Done.");
}

main();
