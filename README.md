# Aayush Rai — Portfolio

A responsive personal portfolio built with **React + Vite** and a custom CSS design system. It includes a CSS-drawn technical hero graphic, animated accents, project-category filters, education, achievements, campus roles, contact links, and a résumé PDF.

## Run it locally

You’ll need Node.js 20.19+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build / preview

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Vercel

### Option A — GitHub (recommended)

1. Create a new GitHub repository, e.g. `aayush-rai-portfolio`.
2. Upload the contents of this folder to the repository and push the commit.
3. In [Vercel](https://vercel.com/new), choose **Add New → Project** and import that repository.
4. Vercel should detect **Vite** automatically. Keep the defaults: build command `npm run build`, output directory `dist`.
5. Press **Deploy**. Vercel will give you a public URL; future pushes to the connected branch redeploy automatically.

### Option B — Vercel CLI

```bash
npm install
npm run build
npx vercel
```

Follow the CLI prompts. For a production deployment, run `npx vercel --prod`.

## Personalize it before publishing

- **Project URLs:** open `src/data.js` and fill the `github` and `demo` fields for each project with verified public URLs. The site intentionally doesn’t invent repository links that weren’t in the résumé.
- **Résumé:** replace `public/aayush-rai-resume.pdf` with an updated PDF using the same filename, or update the link in `src/App.jsx`.
- **Contact details:** edit `EMAIL` and `PHONE` near the top of `src/App.jsx`.
- **Social links:** the Codeforces and CodeChef URLs are in the `ContactSection` component in `src/App.jsx`.
- **Content:** projects, highlights, and campus roles are maintained in `src/data.js`.
- **Domain:** after deployment, open your Vercel project → Settings → Domains to attach a custom domain.

## CSS notes / references

The visual styling is original project CSS, using techniques such as layered radial/conic gradients, masks, pseudo-element grid textures, keyframe animation, focus-visible states, and `prefers-reduced-motion`. A progressive scroll-reveal enhancement is included behind `@supports (animation-timeline: view())`.

- [MDN — CSS gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/gradient)
- [MDN — CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Vercel — Vite deployment](https://vercel.com/docs/frameworks/frontend/vite)
- [Vite guide](https://vite.dev/guide/)

## Facts and links

Portfolio details are based on the provided résumé. GitHub and DocuNova demo URLs were not supplied there, so those buttons are not exposed until you add real URLs to `src/data.js`.
