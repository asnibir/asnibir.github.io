# Abu Shaikh Nibir &mdash; Academic & Developer Portfolio

Minimal, high-performance, CS-themed single-page portfolio for **Abu Shaikh Nibir**, software engineer and machine learning researcher applying for PhD programs in Computer Science.

Built with **Astro**, **Tailwind CSS**, and **Astro Content Collections**, optimized for GitHub Pages deployment with self-hosted typography and a target Lighthouse score of 95+ across all categories.

---

## ⚡ Tech Stack

- **Framework:** [Astro 4](https://astro.build/) (Static Site Generation / SSG)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Data Architecture:** Astro Content Collections (Markdown + Zod schema validation)
- **Typography:** Self-hosted [Inter](https://fontsource.org/fonts/inter) and [JetBrains Mono](https://fontsource.org/fonts/jetbrains-mono) via Fontsource
- **SEO & Social:** Open Graph, Twitter Cards, Semantic HTML5, RSS/Sitemap, Schema.org `Person` JSON-LD
- **CI/CD:** Automated GitHub Actions deployment to GitHub Pages

---

## 📂 Project Structure

```
asnibir.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages deployment workflow
├── public/
│   ├── images/
│   │   └── profile.jpg          # Profile photo placeholder (128x128 / 400x400)
│   ├── cv.pdf                   # Curriculum Vitae PDF placeholder
│   ├── favicon.svg              # Minimalist terminal prompt SVG favicon
│   └── robots.txt               # Web crawler rules & sitemap reference
├── src/
│   ├── components/
│   │   ├── ExperienceItem.astro # Work experience timeline card
│   │   ├── Footer.astro         # Minimal copyright & back-to-top component
│   │   ├── Hero.astro           # Hero banner with profile photo, name & icons
│   │   ├── Nav.astro            # Sticky slim navigation bar & mobile drawer
│   │   ├── ProjectCard.astro    # Academic & software engineering project card
│   │   ├── PublicationCard.astro# Paper citation card with BibTeX copy & abstract toggle
│   │   ├── Section.astro        # Monospace CS section wrapper (`01 // about`)
│   │   ├── TagList.astro        # Monospace tech tags & chip list
│   │   └── ThemeToggle.astro    # Dark/Light theme toggle (localStorage + system sync)
│   ├── content/
│   │   ├── config.ts            # Content collections schema definitions (Zod)
│   │   ├── certifications/      # Markdown collection for certifications
│   │   ├── experience/          # Markdown collection for work history
│   │   ├── projects/            # Markdown collection for academic & software projects
│   │   └── publications/        # Markdown collection for peer-reviewed publications
│   ├── layouts/
│   │   └── BaseLayout.astro     # Core layout, SEO, theme script, and JSON-LD
│   ├── pages/
│   │   └── index.astro          # Single-page portfolio entry point
│   └── styles/
│       └── global.css           # Typography imports, dot-grid background & animations
├── astro.config.mjs             # Astro configuration (site: 'https://asnibir.github.io')
├── tailwind.config.mjs          # Tailwind theme & color extensions
└── package.json
```

---

## 🚀 Quick Start

Ensure you have **Node.js 20+** installed.

```bash
# Clone the repository
git clone https://github.com/asnibir/asnibir.github.io.git
cd asnibir.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Available Scripts

- `npm run dev` &mdash; Starts the local dev server at `localhost:4321`.
- `npm run build` &mdash; Generates the static production build into `dist/`.
- `npm run preview` &mdash; Serves the production build locally for verification.
- `npm run check` &mdash; Runs Astro's diagnostic type checker across all components and content collections.

---

## 📝 How to Edit Content

All structured data is managed through Markdown files inside `src/content/`:

### 1. Publications (`src/content/publications/`)
Add or edit Markdown files with frontmatter:
```yaml
---
title: "Paper title"
authors:
  - "Author One"
  - "Abu Shaikh Nibir" # Your name is automatically bolded and accented
venue: "Journal Name"
publisher: "Elsevier"
volume: "293"
pages: "130398"
year: 2024
doi: "https://doi.org/..."
bibtex: |
  @article{...}
abstract: "Paper abstract..."
order: 1
---
```

### 2. Projects (`src/content/projects/`)
Add project cards:
```yaml
---
title: "Project Name"
subtitle: "Project Type or Course Name"
year: "2022"
description: "Brief summary of problem and methodology..."
tags: ["Python", "Deep RL"]
githubUrl: "https://github.com/..."
publicationUrl: "https://doi.org/..." # Optional
order: 1
---
```

### 3. Work Experience (`src/content/experience/`)
Update work history:
```yaml
---
company: "Dohatec New Media"
role: "Software Engineer (Frontend)"
location: "Dhaka, Bangladesh"
startDate: "March 2023"
endDate: "Present"
isCurrent: true
bullets:
  - "First impact bullet..."
  - "Second impact bullet..."
tags: ["Angular", "TypeScript", "NgRx"]
order: 1
---
```

### 4. Certifications (`src/content/certifications/`)
```yaml
---
title: "Machine Learning Specialization"
provider: "DeepLearning.AI & Stanford Online"
year: "2023"
verifyUrl: "https://coursera.org/verify/..."
order: 1
---
```

### 5. About Copy & Skills
- **About text:** Edit draft paragraphs directly in `src/pages/index.astro` inside `<Section id="about">`.
- **Skills:** Edit the grouped `skillGroups` array near the top of `src/pages/index.astro`.

---

## 🖼️ Swapping Your Photo and CV

1. **Profile Photo:** Replace `public/images/profile.jpg` with your own square portrait image.
2. **Curriculum Vitae:** Replace `public/cv.pdf` with your actual compiled PDF CV. The "Download CV" button automatically links to this file.

---

## 📌 Checklist of Items to Update (`TODO:`)

The codebase contains clear `TODO:` comments for personal links and details:

- [ ] **Google Scholar Link:** In `src/components/Hero.astro` and `src/pages/index.astro`, replace `https://scholar.google.com/` with your Google Scholar profile URL.
- [ ] **ORCID Link:** In `src/components/Hero.astro`, replace `https://orcid.org/` with your ORCID profile URL.
- [ ] **Profile Photo:** Replace `public/images/profile.jpg` with your headshot.
- [ ] **CV PDF:** Replace `public/cv.pdf` with your real CV PDF.
- [ ] **LightOJ Profile:** In `src/pages/index.astro`, confirm your profile URL (`https://lightoj.com/user/nibir-24csed`).
- [ ] **Publication Abstract:** In `src/content/publications/weighted-fair-energy-transfer-uav.md`, swap in the exact final publisher abstract if desired.
- [ ] **IELTS Sub-scores:** In `src/pages/index.astro` under `#certifications`, fill in test date and sub-scores (L/R/W/S).
- [ ] **Certification Years & Verification URLs:** In `src/content/certifications/`, update the year and Coursera verification URLs.
- [ ] **Certificates Google Drive Link:** In `src/pages/index.astro` under `#certifications`, replace `https://drive.google.com/` with your public Google Drive certificates folder link.
- [ ] **Jarvis GitHub URL:** In `src/content/projects/jarvis.md`, verify the GitHub repository link.

---

## 🌐 Deploying to GitHub Pages

This repository is designed to be hosted directly at `https://asnibir.github.io/`.

1. Push your code to the `main` branch of `https://github.com/asnibir/asnibir.github.io`.
2. On GitHub, navigate to **Settings** &rarr; **Pages**.
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. The `.github/workflows/deploy.yml` workflow will automatically trigger on each push to `main`, compile your static Astro site, and publish it live!

---

## 🔮 Phase 2 Roadmap (Adding Blog / Writing)

Phase 1 is strictly a single-page portfolio with no blog routes or writing nav links. To add a blog in Phase 2:
1. Add a `blog` collection schema in `src/content/config.ts`.
2. Add Markdown blog posts to `src/content/blog/`.
3. Create `src/pages/blog/index.astro` (listing) and `src/pages/blog/[slug].astro` (post viewer).
4. Add the `Writing` item to the `navItems` array in `src/components/Nav.astro`.

---

## 📄 License

MIT &copy; 2026 Abu Shaikh Nibir

