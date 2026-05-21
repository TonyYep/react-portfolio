# Tony Chan — Portfolio

Personal portfolio. Next.js 15, TypeScript, Tailwind v4.

## Setup

```bash
npm install
npm run dev    # http://localhost:3000
```

## Build

```bash
npm run build
```

## Adding a project

Edit `lib/content.ts` and add an entry under `projects`:

```ts
{
  slug: "kebab-case-id",
  title: "Project name",
  subtitle: "Short tagline",
  award: "Award name" | null,
  stack: ["Tech", "Tech"],
  summary: "Paragraph description.",
  metric: { value: "42", label: "things done" },
  links: [
    { label: "View paper", url: "https://..." },
  ],
}
```

The card renders automatically.

## Content

All site content lives in `lib/content.ts` — edit there, not in JSX.