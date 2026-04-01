# Akshaya Robotics - Premium One-Page Website Plan

This plan details the implementation of a futuristic, high-end one-page website for "Akshaya Robotics" based on your requirements document. We will build an ultra-modern, glassmorphism-styled UI using React (Vite), Tailwind CSS, and Framer Motion.

## User Review Required

> [!WARNING]
> **Important Note about the Gallery Images**: Modern web browsers do not allow web pages to load images directly from an external folder on your computer (like `C:/Users/kakan/Desktop/photo-...`) due to security restrictions.
>
> **Proposed Solution**: I will create a script during the build process to copy these images over to our project's `public/gallery` folder automatically, allowing Vite to serve them dynamically. Is this approach acceptable to you?

## Proposed Changes

We will execute this project entirely inside the `Akshayarobotics` repository folder.

### Project Initialization & Configuration
- Initialize a brand new **React + Vite** app.
- Install necessary dependencies: `tailwindcss`, `framer-motion` (for animations), `lucide-react` (for icons).
- Configure `tailwind.config.js` to strictly enforce the **3-color palette**:
  - Primary: `#0F172A` (Navy)
  - Accent: `#6366F1` (Indigo)
  - Highlight: `#22C55E` (Neon Green)

### CSS & Global Styles
#### [MODIFY] `src/index.css`
- Apply the dark theme globally.
- Create reusable custom utility classes for:
  - `.glass-card`: glassmorphism blur and transparency.
  - `.neon-glow`: accent and highlight glow effects.
- Set up custom Google Fonts (e.g., Space Grotesk or Inter).

### Dynamic Image Loading
#### [NEW] Importer Script (e.g., `copy-images.js` or via Vite public folder)
- We will copy the files from your provided Desktop folder to the local repository, and use Vite's `import.meta.glob` to load them automatically into the Gallery component.

### Components Structure
I will create the following semantic, responsive, and animated React components:

#### [NEW] `src/components/Navbar.jsx`
- Sticky header with a frosted glass effect.
- Smooth scrolling link navigation.

#### [NEW] `src/components/Hero.jsx`
- Bold heading matching the brand.
- Floating 3D/robotic particles background using Framer Motion.
- Glow-effect call-to-action buttons.

#### [NEW] `src/components/About.jsx`
- 3 animated glass cards with icons detailing AI Solutions, Automation, and Robotics.

#### [NEW] `src/components/Services.jsx`
- Responsive grid mapping out robotic services.
- Implementing 3D tilt interaction to make cards responsive to mouse hovers.

#### [NEW] `src/components/Gallery.jsx`
- Responsive masonry/grid layout.
- Dynamically grabs the images.
- Hover zoom animations and glow effects.

#### [NEW] `src/components/Contact.jsx` & `src/components/Map.jsx`
- Layout for the contact info (+91 9014466133) and glowing buttons.
- The supplied Google Maps iframe.

#### [NEW] `src/components/Footer.jsx`
- Minimalist footer layout.

### Main Application
#### [MODIFY] `src/App.jsx`
- Assemble all components into a cohesive one-page layout.
- Wrap main sections in scroll-tracking animations (fade + slide-up) for a cinematic experience.

## Open Questions

1. **Font Choice**: Are there any specific futuristic fonts you prefer (e.g., *Rajdhani*, *Orbitron*, or *Space Grotesk*)? Or should I use an elegant modern sans-serif like *Inter*?
2. **Icons**: I plan to use `lucide-react` for beautifully clean and consistent icons. Please let me know if you prefer a different icon library.
3. **Gallery Images Copy**: Do you approve of my plan to copy the images from your Desktop folder into the website's `public` directory so they can be processed and displayed correctly?

## Verification Plan

### Automated Tests
- Run `npm run dev` to ensure the project runs seamlessly.
- Inspect the visual output locally.

### Manual Verification
- Verify the responsive layouts (Mobile vs. Desktop).
- Confirm all 3-color strict rules are applied in the UI.
- Ensure the gallery loads the images directly and animations feel premium.
- Make sure that there are no CSS overlapping or scrolling glitches.
