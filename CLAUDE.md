# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Short News is a Next.js 15 web application promoting an AI-powered news app that provides intelligent summaries, custom visuals, and smart categorization for busy professionals. The website serves as a landing page with information about the mobile app's features.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build production version with Turbopack
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

This is a Next.js App Router application with the following structure:

- **app/**: Contains all routes and components using App Router
  - `layout.tsx`: Root layout with metadata, fonts (Geist), and global styling
  - `page.tsx`: Home page with hero section, features, how-it-works, and CTA
  - `components/`: Reusable components
    - `Navigation.tsx`: Top navigation bar with logo and page links
    - `Footer.tsx`: Footer with links and branding
  - Static pages: `privacy/`, `support/`, `terms/`

- **public/**: Static assets including logos and icons

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist and Geist Mono from Google Fonts
- **TypeScript**: Strict mode enabled
- **Build Tool**: Turbopack (used in both dev and build)

## Key Features

- SEO optimized with comprehensive metadata (OpenGraph, Twitter cards)
- Responsive design with mobile-first approach
- Red (#EF4444) brand color scheme
- Logo branding for "AI Short News" and "Eshalore"
- Static pages for legal/support content

## Code Conventions

- Uses TypeScript strict mode
- Component interfaces defined for props
- Tailwind classes for all styling
- currentPath prop pattern for active navigation states
- Image optimization with Next.js Image component