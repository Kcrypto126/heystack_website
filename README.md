# 🧭 Hey-Stack (P-142)

A feedback data platform to get a 360° view of customer perception of your products. Understand the **why** behind the **what** and get actionable insights.



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
git clone https://github.com/yourusername/heystack_website.git

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

Add demo images, GIFs, or UI preview screenshots here.

_Example: Home hero, blog listing, or feature sections._



## 📜 API Documentation

| Method | Route | Description |
|--------|--------|-------------|
| GET    | `/api/email`   | Health/hello response |
| POST   | `/api/email`   | Send blog-publish notification (title, slug) to external email service |
| —      | `/api/update`  | Update-related endpoint (see `src/app/api/update/route.js`) |

Blog content is fetched via GraphQL from GraphCMS (queries in `src/services/queries.js`), not via REST API routes.



## 📬 Contact

- **Project:** Hey-Stack
- **Author:** Your Name
- **Email:** your.email@example.com
- **GitHub:** @yourgithub
- **Website/Portfolio:** yourwebsite.com



## 🌟 Acknowledgements

- Inspiration or resources used
- Libraries, icons, or tutorials referenced
- Collaborators or contributors
