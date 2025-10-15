# Quick Start Guide

Get "The Cotton Ghost" running in 3 steps!

## 🚀 3-Step Launch

### Step 1: Install
```bash
npm install --legacy-peer-deps
```

*Note: Using `--legacy-peer-deps` to avoid dependency warnings with the latest versions.*

### Step 2: Run
```bash
npm run dev
```

### Step 3: Open
Open [http://localhost:3000](http://localhost:3000) in your browser

That's it! The story will start playing immediately.

## ⌨️ Controls

| Action | Method |
|--------|--------|
| Next section | Click, scroll down, press → or Space |
| Previous section | Scroll up, press ← |
| Toggle auto-advance | Press `a` or click "auto: off/on" |
| Mute/unmute sound | Press `m` or click speaker icon |

## 📝 Edit the Story

Open `/data/storyData.js` and edit any section:

```javascript
{
  id: 1,
  title: "Your Custom Title",
  text: "Your custom story text here...",
  themeColor: "#EDEBE9"
}
```

Save the file and see your changes instantly!

## 🎨 Customization Shortcuts

- **Story content**: `/data/storyData.js`
- **Colors**: `/tailwind.config.js`
- **Animations**: `/components/visuals/`
- **Fonts**: `/pages/_app.js`

## 🌐 Deploy

### Fastest: Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Deploy the /out folder to GitHub Pages
```

## 📚 Need More Help?

- **Full Documentation**: See `README.md`
- **Setup Details**: See `SETUP.md`
- **Story Structure**: See `/documentation/checklist.md`

## 🎵 Audio (Optional)

The app works without audio files. To add audio:
1. Place MP3 files in `/public/audio/`
2. Files should match names in story data (e.g., `machine_hum.mp3`)
3. See `/public/audio/README.md` for details

---

**Enjoy creating!** 🎭

