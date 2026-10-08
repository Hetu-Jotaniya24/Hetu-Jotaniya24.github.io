# Hiral Jotaniya - Portfolio

A single-page portfolio for a senior software consultant. The design follows a calm palette: warm off-white, navy text, sky-blue accents, and a dark contrast band.

## Stack

- **Vite** for a fast static build
- **React 19** and **TypeScript** for the UI
- **Custom CSS** using the attached color palette
- **GitHub Pages** via GitHub Actions

No backend is required. Email and LinkedIn live in the footer; WhatsApp is a floating button.

## Local development

```bash
npm install
npm run dev
```

Then open the printed local URL, usually `http://localhost:5173`.

```bash
npm run build
npm run preview
```

## Host on GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. The included workflow builds and publishes the site on every push to `main`.

If the repository is named `yourname.github.io`, the site will be at `https://yourname.github.io`.

If the repository has any other name, the site will be at `https://yourname.github.io/repo-name/`. The Vite config sets that base path automatically during the GitHub Actions build.

## Update contact details

Edit `src/data.ts` for name, email, WhatsApp, LinkedIn, GitHub, copy, and project links.
