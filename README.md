# 🧭 Hey-Stack (P-142)

This is a task to convert a simple blog website from HTML-based to Next.js and Node.js-based.


## 📚 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)



## 🧩 About

Hey-Stack is a marketing/landing website for a feedback data platform. It provides an intuitive interface for showcasing product value, customer testimonials, retail partners, and a blog powered by GraphCMS. The site is built with Next.js 13 (App Router), Tailwind CSS, and Apollo Client for headless CMS content.



## ✨ Features

- **Landing sections** – Hero, brands, work showcase, testimonials, features, and retail partner
- **Blog** – CMS-driven blog with posts, categories/tags, author info, and rich content
- **Static pages** – Careers, Privacy Policy, Terms & Conditions
- **Content pages** – e.g. minimize returns and other content routes
- **Contact & forms** – Contact form, job applications, book-demo, newsletter
- **API routes** – Email notification (blog publish), update endpoint
- **Responsive UI** – Mobile-first layout with sticky mobile navbar and Toast notifications



## 🧠 Tech Stack

| Category   | Technologies |
| ---------- | ------------ |
| **Framework** | Next.js 13.5 (App Router) |
| **Language**  | JavaScript (React 18) |
| **Styling**   | Tailwind CSS, Framer Motion |
| **CMS / Data**| GraphCMS (Apollo Client, GraphQL) |
| **UI**        | Headless UI, Heroicons, React Icons, Swiper, react-slick |
| **Other**     | react-toastify, @graphcms/rich-text-react-renderer, Rive (react-canvas) |
| **Tools**     | ESLint, PostCSS, Autoprefixer |



## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/Kcrypto126/heystack_website.git

# Navigate to the project directory
cd heystack_website

# Install dependencies
npm install
```



## 🚀 Usage

```bash
# Start the development server
npm run dev
```

Then open your browser at: **http://localhost:3000**

**Other scripts:**

- `npm run build` – Production build
- `npm start` – Start production server (after `npm run build`)
- `npm run lint` – Run ESLint



## 🧾 Configuration

Create a `.env.local` (or `.env`) in the project root with:

```env
NEXT_PUBLIC_GRAPHCMS_ENDPOINT=https://your-project.graphcdn.app
```

Replace with your actual GraphCMS project API endpoint. The app uses this for blog posts and content; images are served from `media.graphassets.com` (allowed in `next.config.js`).



## 🖼 Screenshots

![Hey-Stack home page screenshot](https://raw.githubusercontent.com/Kcrypto126/heystack_website/refs/heads/main/public/screencapture-file-E-my-projects-4-Next-to-HTML-convert-project-Navin-Heystack-HTML-index-html-2026-02-07-17_46_14.png)



## 📜 API Documentation

| Method | Route | Description |
|--------|--------|-------------|
| GET    | `/api/email`   | Health/hello response |
| POST   | `/api/email`   | Send blog-publish notification (title, slug) to external email service |
| —      | `/api/update`  | Update-related endpoint (see `src/app/api/update/route.js`) |

Blog content is fetched via GraphQL from GraphCMS (queries in `src/services/queries.js`), not via REST API routes.



## 📬 Contact

- **Author:** Kaori Fujio
- **Email:** superdev19782@gmail.com
- **GitHub:** @kcrypto126
- **Website/Portfolio:** https://kaorifujio19782.vercel.app/



## 🌟 Acknowledgements

- Inspiration or resources used
- Libraries, icons, or tutorials referenced
- Collaborators or contributors
