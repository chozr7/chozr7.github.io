# Chozr7 Documentation Site

This project uses **Next.js + Nextra** to build a static documentation website that can be hosted on **GitHub Pages** at `https://chozr7.github.io`.

## Local Development

```bash
npm install       # install dependencies
npm run dev       # start dev server on http://localhost:3000
```

## Build & Export

```bash
npm run build     # build Next.js app
npm run export    # export static site to `out/`
```

## Deploy to GitHub Pages

Upload the contents of the `out/` directory to the `gh-pages` branch **or** enable GitHub Pages for the `main` branch with `/root` directory.

You can automate this with GitHub Actions; see the official Nextra docs for an example workflow.
