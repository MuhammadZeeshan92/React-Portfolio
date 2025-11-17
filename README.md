# WebAscend Portfolio

A professional, dark-themed React + Vite landing page that highlights personal skills, projects, and contact links. The UI is fully componentized, uses Tailwind CSS utility classes for styling, and includes subtle transitions so each section feels immersive on both mobile and desktop breakpoints.

## Features

- Fixed header with smooth in-page navigation
- Hero section with responsive typography and CTA buttons
- Detailed About area describing strengths, tooling, and professional development
- Projects grid with live demos and GitHub links
- Contact section with direct email and LinkedIn actions
- Fade-in on initial load plus hover elevation and shadow transitions

## Tech Stack

- React 18 (functional components + hooks)
- Vite for fast dev/build tooling
- Tailwind CSS utility classes (configured via `index.css`)
- Netlify-ready static output (or any static host)

## Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev

```

Open `http://localhost:5173` in your browser after running `npm run dev`.

## Project Structure

```
src/
├── App.jsx            # Root component: imports sections and shares data
├── App.css
├── main.jsx           # Vite entry (creates root React tree)
├── index.css          # Tailwind directives + global styles
└── components/
    ├── Header.jsx     # Fixed navigation bar
    ├── Hero.jsx       # Intro + CTA buttons
    ├── About.jsx      # Skills, tools, professional development
    ├── Projects.jsx   # Card grid fed by data from App.jsx
    ├── Contact.jsx    # CTA buttons for email/LinkedIn
    └── Footer.jsx     # Social links + copyright
```

## Component Data Flow

- `App.jsx` hosts shared state (fade-in animation) and content arrays (`navLinks`, `projects`).
- `Header`, `Projects`, etc. receive props (`navLinks`, `items`) to keep components stateless and reusable.
- Tailwind classes are defined inline to avoid separate CSS modules; adjust tokens in `index.css` if you’d like to extend the palette or typography defaults.

## Customization Tips

- **Branding:** Update the name, hero text, and footer label in `Header.jsx`, `Hero.jsx`, and `Footer.jsx`.
- **Projects:** Modify the `projects` array in `App.jsx` to add/remove cards or change links.
- **Contact:** Replace the `mailto:` address and LinkedIn URL in `Contact.jsx` with your own.
- **Animations:** The fade-in timing lives in the `useEffect` block of `App.jsx`; tweak the Tailwind classes (`duration-700`, `opacity-0`) for a different feel.

## Deployment

1. Run `npm run build` to create the production bundle in `dist/`.
2. Deploy the `dist` folder to Netlify, Vercel, GitHub Pages, or any static file host.
3. If using Netlify/Vercel, point the build command to `npm run build` and the output directory to `dist`.

## 🚀 Live Demo  
[zee-devportfolio.netlify.app](https://zee-devportfolio.netlify.app)

## License

MIT — feel free to reuse and adapt this layout for your own portfolio projects. A credit link is appreciated.
