# Setup Guide

Complete setup instructions for "The Cotton Ghost" interactive story.

## 📦 Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Framer Motion (animation)
- Howler.js (audio)
- Tailwind CSS (styling)
- ESLint & Prettier (code quality)

### 2. Verify Installation

After installation, you should have a `node_modules` folder and `package-lock.json` file.

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## 🎵 Adding Audio (Optional)

Audio is optional but enhances the experience:

1. Create audio files or download royalty-free sounds
2. Place them in `/public/audio/` directory
3. Files should match the names in `/data/storyData.js`:
   - machine_hum.mp3
   - click_soft.mp3
   - low_hum.mp3
   - soft_wind.mp3
   - party_glitch.mp3
   - rain_soft.mp3
   - soft_static.mp3
   - whisper_loop.mp3
   - warehouse_echo.mp3
   - soft_end.mp3

See `/public/audio/README.md` for more details.

## 🚀 Deployment Options

### Option 1: GitHub Pages (Automated via GitHub Actions) ✅

**This project is already configured for automatic GitHub Pages deployment!**

The setup includes:
- **Automatic CI/CD pipeline** in `.github/workflows/ci.yml`
- **Automatic builds** on every push to `main`
- **Automatic deployment** using `peaceiris/actions-gh-pages`

**Configuration already complete:**
1. ✅ `next.config.js` configured with correct `basePath` and `assetPrefix`
2. ✅ GitHub Actions workflow handles building and deployment
3. ✅ `.nojekyll` file ensures proper GitHub Pages serving

**To deploy:**
1. Make your changes
2. Push to `main` branch
3. GitHub Actions automatically builds and deploys
4. Site updates at: `https://bobbieallsop.github.io/the-shirts-that-sold-themselves`

**Manual deployment (alternative):**
1. Build: `npm run export`
2. Deploy `/out` folder manually to GitHub Pages branch

### Option 2: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **For production:**
   ```bash
   vercel --prod
   ```

4. **Or use Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel will auto-detect Next.js and deploy

### Option 3: Netlify

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=out
   ```

3. **Or use Netlify Dashboard:**
   - Drag and drop the `/out` folder
   - Or connect your Git repository

## 🎨 Customization Quick Start

### Change Story Content

Edit `/data/storyData.js`:

```javascript
{
  id: 1,
  title: "Your Title",
  text: "Your story text...",
  visuals: ["weave-animation"],
  audio: "your-sound.mp3",
  machineLogs: ["[LOG]: Your message"],
  themeColor: "#EDEBE9"
}
```

### Add New Visual Effect

1. Create `/components/visuals/YourEffect.jsx`
2. Add to `/components/visuals/index.js`
3. Reference in story data

### Change Colors

Edit `/tailwind.config.js`:

```javascript
colors: {
  ivory: '#F8F6F2',
  yourcolor: '#123456',
}
```

### Change Fonts

Edit `/pages/_app.js` to import different Google Fonts.

## 🐛 Troubleshooting

### "Module not found" errors
```bash
npm install
# or delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Audio not playing
- Check browser console for errors
- Ensure audio files exist in `/public/audio/`
- Try clicking anywhere on page first (browsers require user interaction for audio)
- Audio is optional - app works without it

### Animations choppy
- Close other browser tabs
- Check browser DevTools performance tab
- Reduce number of animated elements in visual components

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Deployment issues with GitHub Pages
- Ensure `basePath` in `next.config.js` matches repository name
- Check that `/out` folder was generated
- Verify `.nojekyll` file exists in `/public`

## 📱 Testing

### Cross-browser Testing

Test in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing

```bash
npm run build
npm start
```

Then run Lighthouse in Chrome DevTools:
- Target: 90+ Performance
- Target: 90+ Accessibility
- Target: 100 Best Practices

## 🔄 Updating Content

### Hot Reload in Development

When running `npm run dev`:
- Edit story content in `/data/storyData.js` - saves automatically
- Edit components - hot reloads automatically
- Edit styles - updates automatically

### Production Updates

After making changes:
```bash
npm run build
# Then re-deploy using your chosen method
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [Howler.js Documentation](https://howlerjs.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## ✅ Verification Checklist

After setup, verify:
- [ ] Development server runs without errors
- [ ] Story sections appear correctly
- [ ] Animations are smooth (60fps)
- [ ] Navigation works (click, scroll, keyboard)
- [ ] Sound control button appears
- [ ] Credits screen shows after last section
- [ ] Responsive on mobile devices
- [ ] Build process completes successfully

## 🆘 Getting Help

If you encounter issues:
1. Check this guide and README.md
2. Review the documentation files
3. Check browser console for errors
4. Verify all files are in correct locations
5. Try fresh install: delete `node_modules`, run `npm install`

---

Ready to create? Run `npm run dev` and start editing `/data/storyData.js`!

