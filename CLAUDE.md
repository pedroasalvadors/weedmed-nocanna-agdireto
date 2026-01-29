# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start Astro dev server
npm run build    # Build for production (generates static HTML)
npm run preview  # Preview production build locally
```

## Tech Stack

- **Astro 5** - Static site generator with islands architecture
- **React 19** with TypeScript - For interactive components
- **Tailwind CSS 3** for styling (utility-first)
- **Framer Motion** for animations

## Brand Colors

- **Primary Purple Gradient**: `#a78bfa` → `#7c3aed` → `#6d28d9`
- **Primary Green Gradient**: `#4ade80` → `#22c55e` → `#16a34a`
- **Background**: `bg-gray-50`

## Typography

- **Font Family**: Inter (applied via inline styles)

## Architecture

```
src/
├── layouts/
│   └── Layout.astro      # Base HTML layout with GTM, Leadster
├── pages/                # File-based routing (generates static HTML)
│   ├── index.astro       # Home page (/)
│   ├── forms.astro       # Forms page (/forms)
│   └── quiz.astro        # Quiz page (/quiz)
└── components/           # React components (interactive islands)
    ├── Header.tsx        # Navigation with mobile menu
    ├── Hero.tsx          # Hero section with animations
    ├── Benefits.tsx      # Benefits carousel
    ├── Steps.tsx         # 3-step process
    ├── FAQ.tsx           # Accordion FAQ
    ├── Footer.tsx        # Static footer
    ├── Quiz.tsx          # Interactive quiz
    └── ...               # Other section components
public/                   # Static assets (images served from root)
```

## Patterns

- **Astro Pages**: Compose React components with hydration directives
- **React Components**: Interactive islands with `client:load` or `client:visible`
- **Animation Pattern**: Framer Motion with `initial`, `animate`, and `transition` props
- **Styling**: Tailwind utilities + inline styles for gradients
- **Chat Integration**: Elements with `open-chat` class trigger Leadster chat widget

## Hydration Directives

- `client:load` - Hydrate on page load (Header, Quiz)
- `client:visible` - Hydrate when visible in viewport (most sections)
- No directive - Render as static HTML (Footer)
