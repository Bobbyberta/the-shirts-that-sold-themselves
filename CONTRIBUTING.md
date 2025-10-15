# Contributing to The Cotton Ghost

Thank you for your interest in contributing to "The Cotton Ghost: A Machine's Dream in Fabric and Code"! This is an experimental interactive story experience, and we welcome contributions that enhance the narrative, visuals, or technical implementation.

## 🎯 How to Contribute

### Reporting Issues

If you find a bug or have a suggestion:
1. Check existing issues first
2. Create a new issue with a clear title and description
3. Include steps to reproduce for bugs
4. Add relevant labels (bug, enhancement, documentation, etc.)

### Suggesting Enhancements

We're particularly interested in:
- **Visual Effects**: New animations that fit the cotton/AI theme
- **Story Content**: Additional sections or improvements to existing narrative
- **Audio Design**: Ambient sounds or music that enhance immersion
- **Performance**: Optimizations for better loading and animation smoothness
- **Accessibility**: Improvements for screen readers and keyboard navigation

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**:
   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes locally
4. **Commit your changes**: Use clear, descriptive commit messages
5. **Push to your fork**: `git push origin feature/your-feature-name`
6. **Create a Pull Request** with:
   - Clear description of changes
   - Screenshots/videos for visual changes
   - Any relevant issue numbers

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Local Development
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/the-shirts-that-sold-themselves.git
cd the-shirts-that-sold-themselves

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Project Structure
- `/components/` - React components
- `/components/visuals/` - Animation components for each story section
- `/data/storyData.js` - Story content and metadata
- `/styles/` - Global styles and animations
- `/public/audio/` - Audio files (optional)

## 🎨 Adding New Story Sections

1. **Edit `/data/storyData.js`**:
   ```javascript
   {
     id: 11,
     title: "Your Section Title",
     text: "Your story text...",
     visuals: ["your-animation"],
     audio: "optional-sound.mp3",
     machineLogs: ["[LOG]: Optional system message"],
     themeColor: "#YOUR_COLOR"
   }
   ```

2. **Create visual component** in `/components/visuals/YourAnimation.jsx`
3. **Export from** `/components/visuals/index.js`
4. **Test locally** with `npm run dev`

## 🎵 Adding Audio

1. Add audio files to `/public/audio/`
2. Reference in story data: `audio: "filename.mp3"`
3. Ensure files are optimized (MP3, reasonable file size)

## 🎭 Visual Effects Guidelines

- **Performance**: Target 60fps, use CSS transforms when possible
- **Theme**: Maintain the cotton/AI aesthetic (soft textures, machine-like precision)
- **Responsive**: Ensure animations work on mobile devices
- **Accessibility**: Provide reduced motion alternatives when appropriate

## 📝 Code Style

- Use functional components with hooks
- Prefer Tailwind CSS classes for styling
- Add JSDoc comments for complex functions
- Use meaningful variable and function names
- Follow existing file organization patterns

## 🧪 Testing

Before submitting:
- [ ] Test on different screen sizes
- [ ] Verify audio controls work
- [ ] Check keyboard navigation
- [ ] Ensure animations are smooth
- [ ] Validate accessibility with screen reader

## 📋 Pull Request Checklist

- [ ] Code follows project style
- [ ] Changes are tested locally
- [ ] Documentation updated if needed
- [ ] No console errors or warnings
- [ ] Performance impact considered
- [ ] Accessibility maintained or improved

## 🤝 Community Guidelines

- Be respectful and constructive
- Focus on the creative and technical aspects
- Help others learn and grow
- Keep discussions relevant to the project

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 💬 Questions?

Feel free to open an issue for questions about contributing or the project in general.

---

*"Every thread tells a story, every line of code weaves a dream."*
