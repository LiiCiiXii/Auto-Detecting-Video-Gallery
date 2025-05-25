const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

app.get('/api/videos', async (req, res) => {
    const videoDir = path.join(__dirname, 'video');
    try {
        const files = await fs.readdir(videoDir);
        const videos = files.filter(file => 
            file.match(/\.(mp4|webm|ogg)$/i)
        );
        res.json(videos);
    } catch (error) {
        res.status(500).json([]);
    }
});

app.use('/video', express.static('video'));
app.use(express.static('.'));
app.listen(3000, () => console.log('Server running on port 3000'));