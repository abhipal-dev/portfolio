# 🚀 Abhishek's Developer Portfolio

A sleek, modern, and high-performance developer portfolio built with **React 19**, **Vite**, and **Tailwind CSS**. Designed specifically for software engineers and full-stack developers.

---

## ✨ Features

- ⚡ **Ultra-Fast & Lightweight:** Built on Vite with near-instant hot module replacement and lightning build times.
- 🎨 **Modern Aesthetics:** Glassmorphic navigation, animated glow accents, gradient typography, and responsive layout.
- 💻 **Interactive Code Sandbox:** Live code preview card showcasing your core stack and status.
- 🎯 **Filterable Project Showcase:** Categorized projects (Full Stack, Frontend, Backend) with detailed modal popups, demo links, and GitHub links.
- 🛠️ **Categorized Skills Grid:** Organized tabs for Frontend, Backend, Databases, and DevOps with proficiency indicators.
- 📈 **Stats & Highlights:** Career milestones, key achievements, and academic background.
- 📬 **Interactive Contact Section:** One-click copy email button, direct message form, and social links.
- 🚀 **Free Hosting Ready:** Pre-configured for GitHub Pages (via GitHub Actions and `gh-pages`), Vercel, or Netlify.

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React & Custom Brand SVGs
- **Deployment:** GitHub Pages (Pre-configured GitHub Actions CI/CD)

---

## 🏃 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## ✏️ How to Customize Your Details (in 2 Minutes)

All personal info, skills, projects, and links are organized inside a single file:
👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

Simply open that file and update:
- `personal.name`: Your name
- `personal.email`: Your email address
- `personal.socials`: Your GitHub, LinkedIn, and Twitter links
- `personal.resumeUrl`: Link to your resume PDF (or Google Drive link)
- `projects`: Add or edit your own project titles, descriptions, demo links, and GitHub repositories
- `skills`: Add or customize your tech stack skills

---

## 🌐 How to Host on GitHub Pages (100% Free)

You have two simple options to deploy your portfolio:

### Option A: Automatic GitHub Actions (Recommended)

1. Create a new repository on [GitHub](https://github.com/new) (e.g., `portfolio` or `<your-username>.github.io`).
2. Run these commands in your project folder:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages** (on the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site to `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`.

### Option B: 1-Command Deploy via `gh-pages`

1. Add your repository remote (if not already done):
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
   ```
2. Run:
   ```bash
   npm run deploy
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **Deploy from a branch** and choose the `gh-pages` branch.

---

## ☁️ Alternative Free Hosting Options

- **Vercel:** Import your GitHub repository into [Vercel](https://vercel.com) — it detects Vite automatically with zero configuration.
- **Netlify:** Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop) or connect your GitHub repository.
