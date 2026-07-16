# 🚀 Shivam Jaiswal — Portfolio

A modern, interactive personal portfolio website built with **Next.js**, showcasing my projects, skills, education, and certifications. Designed with smooth animations, a 3D hero section, and a clean, responsive UI.

🔗 **Live Site:** [shivam-portfolio.vercel.app](https://shivamjaiswal-portfolio.vercel.app)

---

## ✨ Features

- 🎨 Modern, animated UI with custom loading screen and cursor effects
- 🧊 Interactive 3D hero section (built with a `.glb` 3D model)
- 💼 Dynamic **Projects** showcase with detailed project pages
- 🏆 **Certificates** section with verified credentials
- 🎓 **Education** timeline
- 🛠️ **Skills** section
- 📩 Working **Contact form** with rate-limiting and API route
- 📄 Auto-generated downloadable **Resume (PDF)**
- 🌗 Light/Dark theme support
- 📱 Fully responsive across devices
- ⚡ SEO optimized (dynamic sitemap, robots.txt, custom icons)

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D/Animation:** Three.js / React Three Fiber (for hero section)
- **Deployment:** [Vercel](https://vercel.com/)
- **Linting:** ESLint

---

## 📂 Project Structure

```
├── public/              # Static assets (images, certificates, projects, models, resume)
├── scripts/             # Resume PDF generation scripts
├── src/
│   ├── app/             # Next.js App Router pages (Home, About, Projects, Contact)
│   ├── components/      # Reusable UI components
│   ├── data/            # Static data (projects, certificates, education, site config)
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions (rate limiting, etc.)
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/shivamjais058/Shivam-Portfolio.git

# Navigate into the project
cd Shivam-Portfolio

# Install dependencies
npm install
```

### Environment Variables
Create a `.env.local` file in the root directory and add the required keys (e.g., for the contact form email service):

```env
RESEND_API_KEY=your_api_key_here
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Build for Production

```bash
npm run build
npm start
```

---

## 📸 Adding/Updating Content

- **Projects:** Add images to `public/projects/` and update `src/data/projects.ts`
- **Certificates:** Add images/PDFs to `public/certificates/` and update `src/data/certificates.ts`
- **Education:** Update `src/data/education.ts`
- **Site Info:** Update `src/data/site.ts`

---

## 📄 Resume

The resume is auto-generated as a PDF using the script in `scripts/generate-resume-pdf.ts` and is available for download directly from the site.

---

## 🤝 Contact

Feel free to reach out via the contact form on the site, or connect with me directly:

- **Portfolio:** [shivam-portfolio.vercel.app](https://shivamjaiswal-portfolio.vercel.app)
- **GitHub:** [@shivamjais058](https://github.com/shivamjais058)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by Shivam Jaiswal</p>
