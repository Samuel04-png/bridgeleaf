# Bridge Leaf Equity Holdings Ltd

Premium responsive website for Bridge Leaf Equity Holdings Ltd, built with React, Tailwind CSS, and Framer Motion.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml` to build and deploy `dist` to GitHub Pages from the `main` branch. The Vite base path is relative, so the build can work on GitHub Pages and on a custom domain.

The `public/CNAME` file is set to:

```text
bridgeleafequity.com
```

Update that file if the final custom domain changes.

## Image Placeholders

The site uses locally stored, optimized placeholder photography sourced from Unsplash to keep the GitHub Pages build fast and reliable. Replace these files in `public/assets` with commissioned or client-owned photography when available.
