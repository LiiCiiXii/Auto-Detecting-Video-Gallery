# GitHub Pages Video Gallery

A modern, responsive video gallery that works perfectly with GitHub Pages hosting.

## 🚀 Quick Setup for GitHub Pages

### Step 1: Repository Setup
1. Fork or clone this repository
2. Enable GitHub Pages in your repository settings
3. Choose "Deploy from a branch" and select `main` branch

### Step 2: Adding Videos

#### Option A: Direct Upload to Repository
1. Create a `videos/` folder in your repository
2. Upload your video files (MP4, WebM, etc.) to the `videos/` folder
3. Commit and push the changes
4. Your videos will automatically appear in the gallery

#### Option B: Using Git LFS (for large files)
\`\`\`bash
# Install Git LFS
git lfs install

# Track video files
git lfs track "videos/*.mp4"
git lfs track "videos/*.webm"

# Add and commit
git add .gitattributes
git add videos/
git commit -m "Add videos with Git LFS"
git push
\`\`\`

### Step 3: Customize Video List (Optional)
Edit the `GITHUB_VIDEOS` array in `index.html` to specify which videos to load:

\`\`\`javascript
const GITHUB_VIDEOS = [
    'your-video-1.mp4',
    'your-video-2.webm',
    'tutorial.mp4'
];
\`\`\`

## 📁 File Structure
\`\`\`
your-repository/
├── index.html          # Main gallery page
├── video-player.html   # Video player page
├── videos/             # Your video files
│   ├── video1.mp4
│   ├── video2.webm
│   └── ...
└── README.md
\`\`\`

## 🎬 Features

### ✅ GitHub Pages Compatible
- **Static hosting** - No server required
- **Automatic video detection** from `videos/` folder
- **Local upload support** for testing
- **Responsive design** for all devices

### ✅ Video Management
- **Drag & drop** video upload (local)
- **Multiple format support** (MP4, WebM, OGG, etc.)
- **Search and filter** videos
- **Sort by name or size**

### ✅ Advanced Player
- **Autoplay next video** with countdown
- **Keyboard shortcuts** for navigation
- **Volume control** and fullscreen
- **Progress tracking** and seeking
- **Previous/Next navigation**

## 🔧 GitHub Pages Limitations & Solutions

### File Size Limits
- **GitHub limit**: 100MB per file
- **Solution**: Use Git LFS for larger files
- **Alternative**: Host large videos externally (YouTube, Vimeo)

### Video Formats
- **Recommended**: MP4 (H.264) for best compatibility
- **Alternative**: WebM for smaller file sizes
- **Avoid**: Proprietary formats that browsers don't support

## 🎯 Usage Instructions

### For Repository Owners:
1. Add videos to the `videos/` folder
2. Commit and push to GitHub
3. Your gallery updates automatically

### For Visitors:
1. Browse videos in the gallery
2. Click any video to open the player
3. Use autoplay for continuous viewing
4. Upload local videos for temporary viewing

## 🛠️ Customization

### Adding Your Videos
\`\`\`javascript
// In index.html, update this array:
const GITHUB_VIDEOS = [
    'my-awesome-video.mp4',
    'tutorial-part-1.mp4',
    'demo-presentation.webm'
];
\`\`\`

### Styling
- Edit CSS variables in the `<style>` section
- Customize colors, gradients, and animations
- Modify responsive breakpoints

### Features
- Enable/disable autoplay
- Customize countdown duration
- Add custom video metadata

## 📱 Browser Support
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Progressive Web App features

## 🔗 Live Demo
Visit your GitHub Pages URL: `https://liiciixii.github.io/Auto-Detecting-Video-Gallery/index.html`

## 📄 License
MIT License - Feel free to use and modify!
