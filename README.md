## Local development

Run the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## GitHub Pages deployment

This project is configured for static export so it can be hosted on GitHub Pages.

### Automatic deployment

1. Push the repository to GitHub.
2. In GitHub, open Settings > Pages.
3. Under Build and deployment, set Source to GitHub Actions.
4. Push to the `main` branch. The workflow will build the app and publish the `out` directory to Pages.

The workflow sets `BASE_PATH` from the repository name, so a repository like `playmaker-presentation` is published at `/playmaker-presentation`.

### Local Pages build

To test the GitHub Pages build locally:

```bash
npm run build:pages
```

That produces a static export in `out/` using the package name as the GitHub Pages base path.
