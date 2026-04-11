# Portfolio

A minimal developer portfolio built with Next.js 16 (App Router), Tailwind CSS, and MDX.

## Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS + CSS custom properties
- **Content**: File-based (JSON + Markdown/MDX)
- **Fonts**: Lora (display) + DM Sans (body) via next/font
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Content

### Projects

Create a new `.json` file in `content/projects/`:

```json
{
  "slug": "my-project",
  "title": "My Project",
  "description": "A short description.",
  "tech": ["Next.js", "TypeScript"],
  "tags": ["developer-tools", "open-source"],
  "github": "https://github.com/you/project",
  "demo": "https://project.com",
  "featured": true,
  "year": 2025,
  "status": "active"
}
```

### Blog Posts

Create a new `.md` or `.mdx` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A short description."
date: "2025-04-10"
tags: ["engineering"]
---

Your content here.
```

### Updates

Edit `content/updates/updates.json` and add an entry:

```json
{
  "id": "u8",
  "date": "2025-04-10",
  "content": "Your short update.",
  "tags": ["tag"],
  "link": "https://optional-link.com"
}
```

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com).

## Customization

- **Personal info**: `src/components/sections/HeroSection.tsx`
- **Colors**: CSS variables in `src/app/globals.css`
- **SEO**: `src/app/layout.tsx`
