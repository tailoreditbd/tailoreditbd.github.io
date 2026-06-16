# Tailored IT BD — Static Homepage

Premium, SEO-optimized homepage built with **HTML5, CSS3, Bootstrap 5.3, and vanilla JavaScript**. Ready to deploy on **GitHub Pages**.

## 📁 Structure
```
tailoreditbd-site/
├── index.html          # Main homepage (semantic HTML5 + SEO)
├── 404.html            # Custom 404 page
├── robots.txt          # Crawl rules
├── sitemap.xml         # XML sitemap
└── assets/
    ├── css/style.css   # Custom brand styles
    ├── js/main.js      # Smooth nav + contact form
    └── img/logo.svg    # SVG brand logo
```

## 🚀 Deploy to GitHub Pages
1. Create a public repo (e.g. `tailoreditbd.github.io` or any repo with Pages enabled).
2. Upload all files in this folder to the repo root.
3. Settings → Pages → Source: `main` branch → `/ (root)` → Save.
4. Your site will go live at `https://<username>.github.io/<repo>/`.

## 🔍 Analytics & Search Console Setup
Open `index.html` and find the comment blocks marked **`<!-- ANALYTICS -->`** in the `<head>`. Paste your IDs:

- **Google Search Console** — verification meta tag
- **Google Tag Manager (GTM)** — `GTM-XXXXXXX`
- **Google Analytics 4 (GA4)** — `G-XXXXXXXXXX`
- **Microsoft Clarity** — Clarity project ID

## ✅ SEO Features
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Single `<h1>`, proper heading hierarchy `<h2>`–`<h4>`
- Open Graph + Twitter Card meta tags
- Canonical URL, robots, viewport
- JSON-LD: `Organization`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`
- Descriptive `<a>`, `<strong>`, `<em>`, `<cite>`, `alt` attributes
- Mobile-first responsive (Bootstrap grid)
- Fast: CDN Bootstrap, no heavy JS, SVG logo

## ✏️ Customize
- Update domain everywhere from `tailoreditbd.com` to your final URL.
- Replace placeholder content in service / FAQ sections.
- Add OG image at `assets/img/og-image.jpg` (1200×630).
