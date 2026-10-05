# Reanty. — Luxury Real Estate Landing Page

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

A pixel-perfect, modern luxury real estate landing page built from the ground up using **pure Vanilla HTML5, CSS3, and JavaScript** according to official Figma design guidelines. Features comprehensive multi-device responsiveness (Desktop, Tablet, and Mobile), local vector asset management, and a lightweight, zero-dependency Node.js HTTP & REST API server for testing.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design System & Palette](#-design-system--palette)
- [Technical Architecture](#-technical-architecture)
- [REST API Endpoints](#-rest-api-endpoints)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
- [Page Sections](#-page-sections)
- [Browser Compatibility](#-browser-compatibility)
- [License](#-license)

---

## 🌟 Overview

**Reanty** is a high-converting web presence for premium real estate agencies. Every component—from hero navigation to dynamic listing cards, interactive testimonial sliders, and consultation forms—has been strictly engineered to mirror the Figma visual design with mathematical precision, typography accuracy, and smooth micro-interactions.

---

## ✨ Key Features

- **100% Vanilla Codebase:** No heavy frameworks (no React/Vue), no CSS preprocessors, and no utility libraries (Tailwind/Bootstrap). Fast load times and zero build steps required.
- **Pixel-Perfect Figma Compliance:** Exact spacing, typography scaling, drop shadows, and border radii matching reference designs.
- **Full Responsive Design:**
  - **Desktop (1200px – 1440px+):** Rich multi-column layouts, floating stats cards, interactive hover states.
  - **Tablet (768px – 1024px):** Adaptive 2-column grids and proportional container scaling.
  - **Mobile / SP (≤ 768px & < 480px):** Off-canvas drawer navigation with animated hamburger toggle, single-column touch-friendly layouts, and horizontal swipe-friendly cards.
- **Curated Vector Iconography:** Over 36 local SVG assets (`./assets/icons/`), including the official Iconly and Outline vector collections, without relying on external CDNs.
- **Interactive UI Components:**
  - Dynamic testimonial review slider with synchronized directional navigation controls.
  - Property type category filter tabs (Apartment, Villa, Land).
  - Quick-inquiry modal / contact forms with live JSON response processing.
  - Newsletter subscription integration.
- **Zero-Dependency Backend:** Built-in Node.js HTTP server delivering mock RESTful APIs for real estate data and contact submissions.

---

## 🎨 Design System & Palette

### Color Palette

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Primary Coral** | `#FF5A3C` | CTAs, active indicators, accents, brand dot |
| **Secondary Teal** | `#009688` | Trust badges, secondary accents |
| **Deep Charcoal** | `#071C1F` | Primary headings, brand typography, dark cards |
| **Body Slate** | `#5C727D` | Paragraph text, metadata, secondary labels |
| **Background Light** | `#F7F8F9` | Section backgrounds, card containers |
| **Border Gray** | `#E5E7EB` | Dividers, subtle borders, input outlines |

### Typography

- **Headings & Accents:** `Josefin Sans` (SemiBold 600, Bold 700)
- **Body & Interface:** `Poppins` (Regular 400, Medium 500, SemiBold 600)

---

## ⚙️ Technical Architecture

1. **Semantic HTML5:** Built using appropriate semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`) to ensure strong SEO, readability, and accessibility.
2. **Modern CSS3:**
   - Modular CSS variables defined in `:root`.
   - CSS Grid and Flexbox for fluid layouts.
   - Separate `responsive.css` sheet dedicated to breakpoint overrides.
3. **Vanilla JavaScript (ES6+):**
   - Event-driven mobile drawer toggle.
   - Client-side filtering logic for featured listings.
   - Asynchronous `fetch()` requests for form submissions and newsletter signups.
4. **Local Asset Architecture:**
   - All assets reference relative paths (`./assets/icons/...`, `./images/...`), guaranteeing portability across local and production environments.

---

## 🔌 REST API Endpoints

The native Node.js mock server (`server.js`) exposes the following endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/properties` | Returns a list of properties with price, specs, and location |
| `GET` | `/api/services` | Returns the services catalog |
| `GET` | `/api/testimonials` | Returns customer reviews and ratings |
| `GET` | `/api/blog` | Returns the latest real estate articles |
| `POST` | `/api/contact` | Handles inquiry submissions with JSON validation |
| `POST` | `/api/newsletter` | Processes newsletter email subscriptions |

---

## 📂 Project Directory Structure

```
d:/CV/
├── assets/
│   └── icons/                 # Curated local vector assets (SVG)
│       ├── Iconly/Bulk/       # Official Iconly arrow & navigation vectors
│       ├── Outline/           # Official Outline navigation icons
│       └── *.svg              # Badges, rating stars, services, and feature icons
├── css/
│   ├── style.css              # Core design system, variables, layouts, and components
│   └── responsive.css         # Breakpoint rules for Tablet and Mobile (SP)
├── data/
│   └── properties.json        # Mock property dataset for local API
├── images/                    # Local high-resolution property and avatar photography
├── js/
│   └── main.js                # UI interactivity, mobile menu, slider, and API handlers
├── index.html                 # Main landing page markup (HTML5)
├── server.js                  # Standalone Node.js HTTP & REST API server
├── package.json               # Project metadata and run scripts
└── README.md                  # Project documentation (English)
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher recommended)
- A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari)

### Local Installation & Startup

1. **Clone or open the project directory:**
   ```bash
   cd d:/CV
   ```

2. **Start the local server:**

   Using npm:
   ```bash
   npm start
   ```

   Or directly using Node.js:
   ```bash
   node server.js
   ```

3. **View the application:**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📑 Page Sections

1. **Top Bar & Navigation Header:** Contact info, social media handles, `Reanty.` brand logo with vector dot accent, main navigation menu, and user authentication action triggers.
2. **Hero Section:** High-impact heading with directional vector curve, membership badge, thumbnail slider preview with active indicators, floating revenue growth statistics card, and "How it works" badge.
3. **Guide Cards:** Three specialized real estate guides (Buyer Guide, Renter Guide, Seller Guide) with interactive hover elevations.
4. **Dream Living Spaces:** Split montage showcase with property rating badges and agency milestones.
5. **Today Sells Properties:** Curated property showcase with checklist advantages and slider controls.
6. **Services Catalog:** 6 centered service cards featuring enlarged Figma vector icons and link actions.
7. **Featured Property:** Dynamic tabbed filters (`Apartment`, `Villa`, `Land`) with floating price/action cards using custom action button vectors (`Group 5439.svg` / `Group 5439-1.svg`).
8. **Unit Highlight Banner:** Immersive background visual with circular unit badge and floating amenity specification card.
9. **Testimonials Carousel:** Customer review carousel with circular navigation buttons (`Arrow - Right.svg`), quote mark, 5-star rating, and client details.
10. **Projects & Cities:** Geographic overview of properties across major metropolitan hubs with integrated newsletter subscription form.
11. **Blog & News:** Expert property advice articles with category tags, author metadata, and read-more actions.
12. **Contact Section:** Consultation benefits checklist, stepped collage with layered accent squares, and clean contact submission form.
13. **Footer:** Brand identity, quick navigation links, customer support details, and copyright notice.

---

## 🌐 Browser Compatibility

Tested and fully supported across all modern evergreen browsers:

- Google Chrome (latest)
- Microsoft Edge (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Mobile Safari & Chrome for Android

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
