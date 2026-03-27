import fs from 'fs';
import https from 'https';

const url = 'https://drive.google.com/u/0/uc?id=144dQDKN_Vqj1SaNhoV44wAqAVmZuDSkd&export=download';
const dest = './public/videos/hero.mp4';

if (!fs.existsSync('./public/videos')) {
    fs.mkdirSync('./public/videos', { recursive: true });
}

https.get(url, (response) => {
    // Follow redirect
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res) => {
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => { file.close(); console.log('Download completed'); });
        });
    } else {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => { file.close(); console.log('Download completed'); });
    }
}).on('error', (err) => {
    console.error('Error:', err.message);
});
