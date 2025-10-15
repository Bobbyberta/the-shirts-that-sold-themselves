# The Cotton Ghost: A Machine's Dream in Fabric and Code

An experimental, web-based interactive story experience about AI, automated commerce, and the haunting realization that machines can launder money through themselves.

## 🎯 Overview

This project is a minimal, beautiful, interactive narrative web experience that tells a short story about an automated t-shirt laundering scheme. Built with Next.js, Framer Motion, and Howler.js, it offers smooth transitions, cinematic pacing, and subtle AI theming.

## ✨ Features

- **10 Immersive Story Sections**: Each section has unique visuals, animations, and ambient sounds
- **Smooth Transitions**: Cinematic fade and scroll effects between sections
- **Interactive Visuals**: Section-specific animations (weaving threads, multiplying boxes, ghost trails, etc.)
- **Machine Log Overlay**: AI system messages that appear and fade between sections
- **Ambient Audio**: Optional background sounds with smooth transitions
- **Multiple Navigation Methods**: 
  - Click/tap anywhere to advance
  - Scroll up/down to navigate
  - Arrow keys (← →) for navigation
  - Spacebar to advance
  - Auto-advance mode (press `a`)
- **Cursor Effects**: Special cursor trails in sections 4 and 9
- **Sound Control**: Toggle audio on/off (press `m` or use button)
- **Credits Screen**: Final fade to white with restart option

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone or download this repository**

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📁 Project Structure

```
/
├── components/
│   ├── visuals/               # Animation components for each section
│   │   ├── WeaveAnimation.jsx
│   │   ├── PulseAnimation.jsx
│   │   ├── StackingBoxes.jsx
│   │   ├── GhostTrails.jsx
│   │   ├── ConfettiGlitch.jsx
│   │   ├── WhiteFade.jsx
│   │   ├── FlickerLight.jsx
│   │   ├── GlowPulse.jsx
│   │   ├── SlowPan.jsx
│   │   ├── FadeToWhite.jsx
│   │   └── index.js
│   ├── StoryScene.jsx         # Main story component
│   ├── SoundControl.jsx       # Audio toggle button
│   ├── CursorTrail.jsx        # Cursor trail effect
│   └── Credits.jsx            # End credits screen
├── data/
│   └── storyData.js           # Story content and metadata
├── pages/
│   ├── _app.js                # Next.js app wrapper with fonts
│   ├── _document.js           # HTML document structure
│   └── index.js               # Main entry point
├── public/
│   └── audio/                 # Audio files (optional)
├── styles/
│   └── globals.css            # Global styles and animations
├── documentation/
│   ├── initial-prompt.md      # Original creative brief
│   └── checklist.md           # Implementation checklist
├── package.json
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md
```

## 🎨 Customization

### Editing Story Content

All story content is stored in `/data/storyData.js`. Each section is an object with the following structure:

```javascript
{
  id: 1,
  title: "Section Title",
  text: "The story text for this section...",
  visuals: ["animation-name"],
  audio: "sound_file.mp3",
  machineLogs: [
    "[LOG_001]: system message",
    "[BOT]: another message"
  ],
  themeColor: "#EDEBE9"
}
```

To add or modify sections:
1. Open `/data/storyData.js`
2. Edit existing sections or add new ones to the `storySections` array
3. Save and the changes will appear immediately in development mode

### Adding New Visual Effects

1. Create a new component in `/components/visuals/YourAnimation.jsx`
2. Export it from `/components/visuals/index.js`
3. Add it to the `visualComponents` object with a kebab-case key
4. Reference it in your story section's `visuals` array

Example:
```javascript
// In /components/visuals/YourAnimation.jsx
export default function YourAnimation() {
  return (
    <div className="absolute inset-0">
      {/* Your animation here */}
    </div>
  );
}

// In /components/visuals/index.js
import YourAnimation from "./YourAnimation";
export const visualComponents = {
  // ... other animations
  "your-animation": YourAnimation,
};

// In /data/storyData.js
{
  id: 11,
  visuals: ["your-animation"],
  // ... other properties
}
```

### Adding Audio Files

1. Create a `/public/audio/` directory if it doesn't exist
2. Add your audio files (MP3 format recommended)
3. Reference them in your story sections:
   ```javascript
   audio: "your-sound.mp3"
   ```

**Note:** Audio files are optional. The app will gracefully handle missing audio files.

### Customizing Colors and Styles

- **Theme Colors**: Edit the `themeColor` property in each story section
- **Global Styles**: Modify `/styles/globals.css`
- **Tailwind Config**: Adjust `/tailwind.config.js` for colors, fonts, and animations
- **Typography**: Change fonts in `/pages/_app.js` (currently using EB Garamond and IBM Plex Mono)

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` or `Space` | Advance to next section |
| `←` | Go to previous section |
| `a` | Toggle auto-advance mode |
| `m` | Toggle sound mute/unmute |

## 🌐 Deployment

### Deploy to GitHub Pages (Automated)

**This project is configured for automatic deployment via GitHub Actions!**

The deployment is fully automated:
- **Automatic builds** on every push to `main` branch
- **Automatic deployment** to GitHub Pages using `peaceiris/actions-gh-pages`
- **No manual steps required** - just push to `main` and your site updates

**Configuration already set up:**
- `next.config.js` configured with correct `basePath` and `assetPrefix`
- `.github/workflows/ci.yml` handles building and deployment
- `.nojekyll` file ensures proper GitHub Pages serving

**To deploy:**
1. Make your changes
2. Push to `main` branch
3. GitHub Actions automatically builds and deploys
4. Your site updates at: `https://bobbieallsop.github.io/the-shirts-that-sold-themselves`

### Manual Deployment (Alternative)

If you prefer manual deployment:
1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Deploy the `/out` folder to GitHub Pages** manually

### Deploy to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** to deploy your project

For other hosting platforms, build the project with `npm run build` and deploy the generated `/out` folder.

## 🎭 Design Philosophy

The experience is designed to feel:
- **Poetic, not technical** — Every element reflects the tension between soft human material (cotton) and cold synthetic logic (AI systems)
- **Calm and immersive** — Gentle transitions and ambient elements that don't distract
- **Interactive but cinematic** — The story can be consumed passively or actively explored

## 🧠 Technical Stack

- **Framework**: Next.js 15 (React 18)
- **Styling**: Tailwind CSS 3.4
- **Animation**: Framer Motion 11
- **Audio**: Howler.js 2.2
- **Fonts**: EB Garamond (serif), IBM Plex Mono (monospace)
- **Deployment**: GitHub Actions (automated) + GitHub Pages, Vercel compatible

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run export   # Build and export static site
```

### Performance Optimization

- All animations target 60fps
- Images and assets are lazy-loaded
- Audio files are loaded on-demand
- Optimized for Lighthouse scores ≥ 90

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## 📝 Future Enhancements

Ideas for extending the project:

- **Replay Mode**: Loop the story with slightly altered animations each time
- **Reader Trace**: Visitors can leave ghost trails for others to see
- **AI Commentary**: Optional sidebar with generated meta-narrative
- **Archive Mode**: Export as offline HTML + assets
- **Generative AI Integration**: Use GPT API to generate new machine logs
- **Custom Visuals**: Use DALL·E or Midjourney to generate section-specific backgrounds

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- **Concept & Design**: Inspired by the intersection of AI, commerce, and poetry
- **Built with**: Next.js, Framer Motion, Howler.js
- **Fonts**: EB Garamond by Georg Duffner, IBM Plex Mono by IBM

## 💬 Support

For questions, issues, or suggestions:
- Review the documentation files in `/documentation/`
- Check the code comments in `/components/StoryScene.jsx`
- Experiment with the story data in `/data/storyData.js`
- Open an issue on [GitHub](https://github.com/bobbieallsop/the-shirts-that-sold-themselves/issues)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to:
- Report bugs and suggest features
- Submit code changes
- Add new story sections or visual effects
- Improve accessibility and performance

---

*"The shirt was clean, even if the money wasn't."*

