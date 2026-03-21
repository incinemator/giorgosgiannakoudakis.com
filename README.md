# giorgosgiannakoudakis.com

Portfolio website for Georgios Giannakoudakis, 3D Artist / Designer.

## Tech Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — styling
- [MDX](https://mdxjs.com) — project pages with mixed content (text, images, video)
- [Sharp](https://sharp.pixelplumbing.com) — image optimization
- [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — automatic sitemap generation

## Getting Started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to ./dist
npm run preview    # preview production build
```

## Deployment

The site is deployed to GitHub Pages via a GitHub Actions workflow. It is configured with:

- **Site:** `https://giorgosgiannakoudakis.com`

## Project Structure

```
src/
  pages/             — routes (index, about, services, 404, projects/[slug])
  layouts/           — BaseLayout, ProjectLayout
  components/        — Header, Footer, ProjectCard, ImageGrid, Lightbox,
                       FullWidthImage, VideoEmbed, BaseHead
  content/projects/  — MDX files (one per project)
  lib/               — utilities (base path helper)
  styles/            — global CSS
public/
  projects/          — images and videos per project
```

## Adding a Project

1. Create a new `.mdx` file in `src/content/projects/`.
2. Place images/videos in `public/projects/my-project/`.

```mdx
---
title: "Project Name"
description: "Short description for the card."
date: "2024-01"
cover: "/projects/my-project/cover.jpg"
tags: ["Tag1", "Tag2"]
software: ["Blender"]
role: "3D Artist"
---

import ImageGrid from '../../components/ImageGrid.astro';
import FullWidthImage from '../../components/FullWidthImage.astro';

Your text here.

<FullWidthImage src="/projects/my-project/image.jpg" alt="Description" />
```