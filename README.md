# giorgosgiannakoudakis.com

Portfolio website for Georgios Giannakoudakis, 3D Artist / Designer.

## Tech Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — styling
- [MDX](https://mdxjs.com) — project pages with mixed content (text, images, video)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to ./dist
npm run preview    # preview production build
```

## Project Structure

```
src/
  pages/           — routes (index, about, services, 404, projects/[slug])
  layouts/         — BaseLayout, ProjectLayout
  components/      — Header, Footer, ProjectCard, ImageGrid, Lightbox, etc.
  content/projects — MDX files (one per project)
  styles/          — global CSS
public/
  projects/        — images and videos per project
```

## Adding a Project

Create a new `.mdx` file in `src/content/projects/`:

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

Place images/videos in `public/projects/my-project/`.

## Contact Form

The contact form on the About page uses [Formspree](https://formspree.io). Replace `YOUR_FORM_ID` in `src/pages/about.astro` with your Formspree form ID.
