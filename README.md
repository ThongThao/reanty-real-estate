# Reanty. — Luxury Real Estate Landing Page

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

A pixel-perfect, modern luxury real estate landing page built from the ground up using **pure Vanilla HTML5, CSS3, and JavaScript** according to official Figma design guidelines for the Fastcoding VN assessment. Features comprehensive multi-device responsiveness (Desktop, Tablet, and Mobile SP down to 360px), local vector asset management, and native Vercel Serverless Functions paired with a zero-dependency Node.js local test server.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [API Endpoints](#api-endpoints)
- [Demo URL](#demo-url)
- [Deployment](#deployment)
- [Notes](#notes)

---

## Overview

**Reanty** is a high-converting web landing page designed for premium luxury real estate agencies. Every component—from hero navigation to dynamic listing cards, interactive testimonial carousels, contact collage geometry, and consultation forms—has been strictly engineered to mirror the Figma visual design with mathematical precision, typography accuracy, and smooth micro-interactions.

---

## Features

- **100% Vanilla Codebase:** No heavy frameworks (no React/Vue), no CSS preprocessors, and no utility libraries (Tailwind/Bootstrap). Ultra-fast load times and zero build steps required.
- **Pixel-Perfect Figma Compliance:** Exact spacing, typography scaling, drop shadows, and border radii matching reference designs.
- **Comprehensive Multi-Device Responsiveness:**
  - **Desktop (1200px – 1920px+):** Rich multi-column layouts, floating stats cards, interactive hover states.
  - **Tablet (768px – 1024px):** Adaptive 2-column grids and proportional container scaling.
  - **Mobile / Smartphone (360px – 768px):** Off-canvas drawer navigation with animated hamburger toggle, single-column touch-friendly layouts, scaled collage geometry, and zero horizontal scrolling.
- **Curated Vector Iconography:** Over 36 local SVG assets (`./assets/icons/`), including the official Iconly and Outline vector collections, with zero reliance on external CDNs.
- **Interactive UI Components:**
  - Dynamic testimonial review slider with synchronized directional navigation controls.
  - Property type category filter tabs (Apartment, Villa, Land).
  - Quick-inquiry modal and contact forms with live JSON response processing.
  - Newsletter subscription integration in both projects banner and footer.
- **Dual Runtime Support:** Built-in zero-dependency Node.js HTTP server for local development and native Serverless Functions for Vercel deployment.

---

## Technologies

- **HTML5:** Semantic markup, accessibility labels, heading hierarchy (`h1`-`h4`), SEO metadata.
- **CSS3:** Custom properties (design tokens), Flexbox, CSS Grid, media queries, smooth animations.
- **JavaScript (ES6+):** Pure Vanilla JS for DOM manipulation, slider transitions, and asynchronous `fetch` requests.
- **Node.js:** Native HTTP server (`server.js`) with zero third-party npm runtime dependencies.
- **Vercel Serverless Functions:** Serverless endpoints located in `/api/*` for cloud deployment.

---

## Project Structure

```text
CV/
├── api/                       # Vercel Serverless Functions (REST API)
│   ├── blog.js                # GET /api/blog
│   ├── contact.js             # POST /api/contact
│   ├── newsletter.js          # POST /api/newsletter
│   ├── properties.js          # GET /api/properties
│   ├── services.js            # GET /api/services
│   └── testimonials.js        # GET /api/testimonials
├── assets/
│   └── icons/                 # Curated local vector assets (SVG)
│       ├── Iconly/Bulk/       # Official Iconly arrow & navigation vectors
│       ├── Outline/           # Official Outline navigation icons
│       └── *.svg              # Badges, rating stars, services, and feature icons
├── css/
│   ├── style.css              # Core design system, variables, layouts, and components
│   └── responsive.css         # Breakpoint rules for Tablet and Mobile (SP)
├── data/
│   └── properties.json        # Mock property dataset for APIs
├── images/                    # Local high-resolution photography assets
├── js/
│   └── main.js                # UI interactivity, mobile menu, slider, and API handlers
├── .gitignore                 # Git ignore rules
├── index.html                 # Main landing page markup (HTML5)
├── package.json               # NPM run scripts and metadata
├── server.js                  # Standalone Node.js HTTP & REST API server
├── vercel.json                # Vercel deployment configuration
└── README.md                  # Project documentation (English)
```

---

## How to Run

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher) installed on your system.

### Local Development

1. **Clone or navigate to the project directory:**
   ```bash
   cd d:/CV
   ```

2. **Start the local server:**

   Using npm:
   ```bash
   npm start
   ```

   Or using npm dev script:
   ```bash
   npm run dev
   ```

   Or directly using Node.js:
   ```bash
   node server.js
   ```

3. **Access the application:**
   Open your browser and navigate to:
   👉 **`http://localhost:3000`**

---

## API Endpoints

The project provides RESTful API endpoints compatible with both local Node.js and Vercel Serverless execution:

| Method | Endpoint | Description | Query / Body Parameters |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/properties` | Returns featured property listings | `?category=appartment\|vila\|land` |
| `GET` | `/api/services` | Returns services catalog | None |
| `GET` | `/api/testimonials` | Returns customer reviews and ratings | None |
| `GET` | `/api/blog` | Returns real estate articles | None |
| `POST` | `/api/contact` | Processes consultation inquiries | `{ name, email, message }` |
| `POST` | `/api/newsletter` | Handles email newsletter subscriptions | `{ email, source }` |

---

## Demo URL

- **Local Web UI:** [http://localhost:3000](http://localhost:3000)
- **Local API Endpoint:** [http://localhost:3000/api/properties](http://localhost:3000/api/properties)
- **Production Demo (Vercel):** `https://<your-project>.vercel.app` *(Replace with deployed URL)*
- **Production API:** `https://<your-project>.vercel.app/api/properties`

---

## Deployment

The project is fully pre-configured for instant zero-configuration deployment to **Vercel**:

### Option 1: Via Vercel CLI (Fastest)

1. Authenticate with Vercel:
   ```bash
   npx vercel login
   ```
2. Deploy to Production:
   ```bash
   npx vercel --prod
   ```

### Option 2: Via GitHub Integration

1. Create a new repository on GitHub.
2. Push the local commits:
   ```bash
   git remote add origin https://github.com/<username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. Import the repository at [vercel.com/new](https://vercel.com/new) and click **Deploy**.

---

## Notes

- **Figma Design Adherence:** The design adheres strictly to the reference screenshots with custom layered accent badges, exact button geometries (`Group 5439.svg` / `Group 5439-1.svg`), and proper icon orientations.
- **Zero External Dependencies:** No `node_modules` required for running `server.js` or deploying to Vercel.
- **Asset Portability:** All images and SVG references use strict relative paths (`./assets/icons/...`, `./images/...`), ensuring seamless operation across any host, reverse proxy, or sub-path.
- **SEO & Performance:** Semantic HTML5 outline, `loading="lazy"` on all below-the-fold assets, asynchronous font rendering, and `scroll-padding-top` offset for sticky navigation header.

---

## 📄 License

This project is open-source and available under the [ISC License](https://opensource.org/licenses/ISC).
