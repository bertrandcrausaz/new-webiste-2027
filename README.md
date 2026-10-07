# Rhodes Wind Center — Next.js project

A Next.js 14 (App Router) + React rebuild of your windsurf / wing foil
center site, broken into components with real image files instead of
one big HTML file.

## Project structure

```
app/
  layout.js        root HTML shell, page <title> / metadata
  page.js           assembles all sections on the homepage
  globals.css       all styling (design tokens live at the top as CSS vars)
components/
  Nav.jsx
  Hero.jsx
  Stats.jsx
  About.jsx
  Discipline.jsx    reusable block, used once for Windsurf, once for Wing Foil
  Equipment.jsx
  Stay.jsx
  Lessons.jsx
  Gallery.jsx
  Conditions.jsx
  Contact.jsx        the only "use client" component (has form state)
  Footer.jsx
public/images/       all photos, as plain files (no base64)
```

## Running it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. Next.js hot-reloads
automatically whenever you save a file — no extensions needed.

To build a production version:

```bash
npm run build
npm start
```

## Where to edit things

- **Text content** — each section's words live directly inside its
  component file in `components/`, usually as plain JSX or in a small
  array at the top of the file (e.g. `STATS`, `BRANDS`, `PATHS`, `PHOTOS`).
- **Colors / fonts / spacing** — all in `app/globals.css`, under the
  `:root { ... }` block at the top (`--navy`, `--coral`, `--sand`, etc.).
  Change one value there and it updates everywhere it's used.
- **Images** — swap any file in `public/images/` for your own (keep the
  same filename, or update the `src="/images/..."` path in the matching
  component).
- **Contact form** — `components/Contact.jsx` currently just shows a
  confirmation message on submit. To actually receive messages, wire
  `handleSubmit` up to an email service (e.g. Resend, Formspree) or a
  Next.js [API route](https://nextjs.org/docs/app/building-your-application/routing/route-handlers).

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the Next.js
team): push this folder to a GitHub repo, import it on vercel.com, and
it deploys automatically. Any standard Node host works too.
