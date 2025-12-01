# Cinematic Romantic Website for Soumya

A fully dynamic, single-page romantic storytelling website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Cinematic Design**: Romantic backgrounds, soft pastels, floating particles
- **Smooth Animations**: Framer Motion powered scroll animations, hover effects
- **Interactive Elements**: Voice-over buttons, expandable sections, memory gallery
- **Responsive**: Mobile-first design, works on all devices
- **Modern Stack**: React + Vite + Tailwind CSS + Framer Motion

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   ```
   http://localhost:5173
   ```

## Project Structure

```
/src
  /components
    Header.jsx          # Navigation header
    Hero.jsx            # Opening scene with floating particles
    SectionTextImage.jsx # Reusable text+image sections
    MemoryGallery.jsx   # Interactive photo gallery
    Poem.jsx            # Animated poem reveal
    Letter.jsx          # Expandable personal letter
    CTA.jsx             # Call-to-action with floating hearts
    Footer.jsx          # Contact footer
  /assets
    /images             # Add your photos here
    /audio              # Add voice-over files here
  App.jsx               # Main app component
  main.jsx              # React entry point
  index.css             # Global styles
```

## Sections

1. **Hero** - "If This Reaches Your Heart..." with floating particles
2. **Where We Began** - Split layout with romantic sunrise
3. **Things I Never Said** - Alternating text and images
4. **Memory Gallery** - Interactive hover captions (Bali, Mysore, Singapore, etc.)
5. **Poem** - Line-by-line animated reveal
6. **Letter** - Expandable personal letter
7. **CTA** - Gentle ask with floating hearts
8. **Footer** - Contact information

## Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  'soft-pink': '#FFC4C4',
  'warm-pastel': '#FFD6A5',
  'soft-teal': '#A0E7E5',
  'deep-purple': '#6A4C93',
  'deep-blue': '#355070',
}
```

### Content
Edit component files in `/src/components/` to update text, images, and voice-overs.

### Images
Replace placeholder URLs in components with your own images:
- Add images to `/src/assets/images/`
- Update `imageUrl` props in `App.jsx`

### Audio
Add voice-over files to `/src/assets/audio/` and integrate with HTML5 audio player.

## Build for Production

```bash
npm run build
```

Output will be in `/dist` folder, ready for deployment.

## Deployment

Deploy to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `/dist` folder
- **GitHub Pages**: Push to gh-pages branch

## Technologies

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 10
- Modern ES6+ JavaScript

---

*Made with love, hope, and sincerity*
