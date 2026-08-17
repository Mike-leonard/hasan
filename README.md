# Md Mahmudul Hasan — Portfolio & Engineering Showcase

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-mike--leonard.github.io%2Fhasan-10b981?style=for-the-badge&logo=githubpages&logoColor=white)](https://mike-leonard.github.io/hasan/)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Framer_Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <b>Full-Stack Software Engineer & Android Developer based in Mestre (Venice), Italy.</b><br/>
  Specializing in React, Next.js, Node.js, native Android (Java), and PostgreSQL query optimization.
</p>

[**Explore Live Demo →**](https://mike-leonard.github.io/hasan/)

</div>

---

## 🌟 Key Features

### 📄 Dual-Mode Viewport Experience
- **Interactive Paper Viewport (`Paper Mode`)**: Physical 3D paper stack simulation with spring physics, rotation offsets, and swipe/sheet animations.
- **Continuous Document Mode (`Full Doc`)**: Seamless, scrollable executive document view rendering all portfolio sections in a single unified flow.

### ⚡ 100% Static HTML Export
- Optimized with Next.js App Router static pre-rendering (`output: 'export'`).
- Subpath routing configured for GitHub Pages (`/hasan/`).
- Zero server cold-starts, sub-50ms Time-to-First-Byte (TTFB) on Edge CDN.

### 📄 Inline Resume PDF Previewer
- Built-in interactive CV modal with fit-to-width PDF rendering.
- Quick toolbar for **Printing**, **Downloading**, and **Opening in New Tab**.

### ⌨️ Power-User Keyboard Navigation
- Keys `1` - `5`: Instant navigation between portfolio sheets.
- Keys `←` / `→` or `h` / `l`: Flip to previous / next paper sheet.

### 🔍 Production-Grade SEO & Structured Data
- OpenGraph & Twitter `summary_large_image` share cards.
- Automated `sitemap.xml` & `robots.txt` generator (`force-static`).
- Semantic `schema.org/Person` JSON-LD structured data for Google Knowledge Graph.

### 🌓 Seamless Dark / Light Mode
- Tailored dark palette (`#09090b` / `#121215`) with ambient mesh glow and high-contrast light mode.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Core Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Animations** | [Motion (Framer Motion)](https://motion.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **CI / CD** | [GitHub Actions](https://github.com/features/actions) → [GitHub Pages](https://pages.github.com/) |

---

## 📂 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── .nojekyll               # Ensures _next assets are served on GitHub Pages
│   ├── hsn.jpg                 # Profile avatar & metadata thumbnail
│   └── resume.pdf              # Curriculum Vitae PDF document
├── src/
│   ├── app/
│   │   ├── _components/        # Layout shells, Logo, Paper Viewport, Modals
│   │   ├── skills/             # Skills radar sheet & metadata
│   │   ├── projects/           # Projects grid, category filters & animations
│   │   ├── experience/         # Vertical career timeline & milestones
│   │   ├── contact/            # Contact channels & interactive form
│   │   ├── layout.jsx          # Root layout with OpenGraph, JSON-LD & Theme
│   │   ├── sitemap.js          # Static XML sitemap generator
│   │   └── robots.js           # Static robots.txt generator
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for personal data & stats
│   └── hooks/
│       └── useTheme.js         # Dark / Light theme persistence hook
├── next.config.js              # Static export, subpath & image config
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 20+ installed
- npm / bun / pnpm

### 1. Clone the Repository
```bash
git clone https://github.com/Mike-leonard/hasan.git
cd hasan
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio locally.

### 4. Build Static Production Export
```bash
npm run build
```
The static HTML output will be exported into the `out/` folder.

---

## 🚢 Deployment (GitHub Pages)

The repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`).

To deploy:
1. Navigate to **Settings** → **Pages** in your GitHub repository.
2. Set **Source** to **GitHub Actions**.
3. Push changes to `main`:
   ```bash
   git add .
   git commit -m "feat: updates"
   git push origin main
   ```
4. GitHub Actions will build and deploy the site automatically to `https://mike-leonard.github.io/hasan/`.

---

## 📬 Contact & Connect

- **Portfolio**: [https://mike-leonard.github.io/hasan/](https://mike-leonard.github.io/hasan/)
- **GitHub**: [@Mike-leonard](https://github.com/Mike-leonard)
- **LinkedIn**: [Md Mahmudul Hasan](https://www.linkedin.com/in/mr-hasan)
- **Location**: Mestre (Venice), Italy

---

<div align="center">
  <sub>Built with ❤️ by Md Mahmudul Hasan</sub>
</div>
