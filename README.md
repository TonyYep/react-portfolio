# Tony Chan — Portfolio (v2)

Personal portfolio site rebuilt on a modern stack.

## Stack

- **Next.js 15** (App Router, React 19, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config)
- **Motion** (formerly Framer Motion) — animations
- **lucide-react** — icons

## Design system

Dark + gold (`#ffd700`) on near-black. Three custom fonts:

- **Coolvetica** — display headings (legacy, distinctive)
- **La Belle Aurore** — cursive HTML-tag accents (legacy)
- **system-ui** — body text

The `<body>` and `<h1>` cursive HTML-tag decorations from the original site are preserved as a brand signature.

## Legacy elements kept

- Letter-by-letter bounce-in entrance (now powered by Motion springs instead of a custom rAF loop)
- 3D spinning skills cube (now interactive: click a face to pin, hover to slow rotation, skill detail panel)
- Cursive `<h1>` / `</h1>` / `<body>` / `</body>` HTML-tag accents
- Slim left sidebar with icon nav and social links
- Gold-on-dark color theme

## Architecture

```
app/
├── layout.tsx           # Root layout, fonts, sidebar, metadata
├── page.tsx             # Home — hero + bento grid
├── about/page.tsx       # Bio, education, skills
├── work/page.tsx        # Experience timeline
├── projects/page.tsx    # Project gallery — full content per card, external links
├── contact/page.tsx     # Form + direct contact
├── not-found.tsx        # Styled 404
└── globals.css          # Tailwind v4 theme + base styles

components/
├── Sidebar.tsx          # Persistent left nav
├── PageFrame.tsx        # Per-route wrapper + body tags
├── AnimatedLetters.tsx  # Motion-driven letter bounce
├── HtmlTag.tsx          # Cursive <h1> / </h1> decoration
├── SkillCube.tsx        # Interactive 3D cube (click-to-pin)
└── BentoCard.tsx        # Bento card primitive + BentoLabel

lib/
├── content.ts           # Resume content — single source of truth
└── cn.ts                # className merger utility
```

## Setup

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy (Vercel — recommended)

```bash
# install once
npm i -g vercel

# from project root
vercel
```

The site has no backend dependencies, so it deploys as a fully static + SSR'd Next.js app on Vercel's free tier with zero configuration. Custom domain (`tonyyep.dev` or similar) can be added in the Vercel dashboard.

### Alternative: GitHub Pages

GitHub Pages requires static export. To deploy there instead of Vercel:

1. Add to `next.config.ts`: `output: "export"`
2. `npm run build` produces `out/`
3. Push `out/` to a `gh-pages` branch (or use `gh-pages` npm package)

Note: dynamic features (route handlers, server actions) won't work on static export. The contact form needs an external service (EmailJS, Resend, etc.) regardless of host.

## Content updates

**All content lives in `lib/content.ts`**. Update there, not in JSX.

When the resume changes:
1. Edit `lib/content.ts`
2. `npm run dev` to verify
3. Commit, push, Vercel auto-deploys

## Contact form

The form in `app/contact/page.tsx` uses a server action stub. Wire it up to your provider of choice:

- **EmailJS** — same as the legacy site; works from client. Store IDs in `.env.local` with `NEXT_PUBLIC_` prefix (they're public anyway) but **never `console.log` them** as the legacy site did.
- **Resend** — recommended. Server-side, generous free tier. Store `RESEND_API_KEY` server-side only.
- **Next.js route handler** — `app/api/contact/route.ts` is the modern pattern.

## Adding a new project

Add an entry to `lib/content.ts` under `projects`. The card renders automatically. Fields:

```ts
{
  slug: "kebab-case-id",        // used for anchor links: /projects#kebab-case-id
  title: "Project name",
  subtitle: "Short tagline",
  award: "Award name" | null,   // shows award badge if present
  stack: ["Tech", "Tech"],
  summary: "Paragraph description.",
  metric: { value: "42", label: "things done" },
  links: [                       // any number of external artifact links
    { label: "View paper", url: "https://..." },
    { label: "View slides", url: "https://..." },
  ],
}
```

That's it — no per-project page to create, no viz component to build. As you accumulate artifacts (PDFs, GitHub repos, blog posts), just point the `link` field at them.

## What's next

- Optional: per-project deeper pages can be added back later if you want to write up case studies
- Custom favicon and OG image
- Contact form wired to a real provider (EmailJS / Resend / Next.js route handler)
