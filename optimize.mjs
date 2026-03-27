import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');

const files = fs.readdirSync(imagesDir);
const pngFiles = files.filter(f => f.endsWith('.png') && f.startsWith('image'));

for (const file of pngFiles) {
  const inputPath = path.join(imagesDir, file);
  const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));
  
  sharp(inputPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(info => {
      console.log(`Optimized ${file}:`, info.size, 'bytes');
    })
    .catch(err => {
      console.error(`Error optimizing ${file}:`, err);
    });
}
