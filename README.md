<div align="center">

# Simple Landing Page (React + Tailwind CSS)

A responsive marketing/agency style landing page built with React 19 and Tailwind CSS 3. Includes a hero banner, services highlight, about section, FAQ accordion, and footer — structured as accessible, composable components.

</div>

## ✨ Features

- Responsive layout (mobile‑first) using Tailwind utility classes.
- Hero banner with marketing headline and CTA.
- Services section with media + content layout.
- About Us section (component scaffold present).
- FAQ accordion with accessible toggle buttons (ARIA attributes, keyboard friendly state).
- Reusable Card / Element component primitives (see `src/components`).
- Semantic HTML + basic accessibility considerations (landmarks, aria-labels, roles, focus states preserved via native elements).
- Clean component folder structure for easy extension.

## 🛠 Tech Stack

- React 19
- Create React App (react-scripts 5)
- Tailwind CSS 3 + PostCSS + Autoprefixer
- Optional animation utilities: `tailwindcss-animate`
- Testing libraries: `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`

## 📁 Project Structure

```
public/
	index.html            # HTML template
src/
	index.js              # Entry point
	App.js                # Root layout / section composition
	assets/images/        # Image assets (hero, illustrations, logo)
	components/
		Card.js             # Reusable card
		Element.js          # (Utility / styling element)
		sections/           # Page sections
			HeroBannerSection.js
			ServicesSection.js
			AboutUsSection.js
			FrequentlyAskedQuestionsSection.js
			NavigationBarSection.js
			FooterSection.js
tailwind.config.js      # Tailwind configuration
postcss.config.js       # PostCSS pipeline
package.json
```

## 🚀 Getting Started

Prerequisites:
- Node.js >= 16 (CRA 5 is compatible; 18+ recommended)
- npm (bundled with Node) or Yarn (optional)

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm start
```

Then open http://localhost:3000 in your browser. Hot reloading is enabled.

Create a production build:

```powershell
npm run build
```

Run tests (watch mode):

```powershell
npm test
```

Optionally eject (NOT recommended unless you need full config control):

```powershell
npm run eject
```

## 🧩 Customization

- Tailwind theme: edit `tailwind.config.js` (extend colors, spacing, fonts).
- Global styles: `src/index.css` & `src/App.css`.
- Add new sections: create a component in `src/components/sections` and import it in `App.js`.
- Images: drop into `src/assets/images` and import with relative path.

## ♿ Accessibility Notes

- FAQ uses buttons with `aria-expanded` and `aria-controls` for screen reader clarity.
- Sections use semantic elements (`section`, `header`, `footer`) and roles where extra clarity is helpful.
- Ensure new interactive elements remain reachable (native elements or add proper keyboard handlers).

## 🔍 Potential Improvements / Roadmap

- Navigation bar active link highlighting + smooth scroll.
- Expand FAQ answers with real content & add animation.
- Dark mode toggle via Tailwind class strategy.
- Add SEO metadata (Open Graph, meta description) in `public/index.html`.
- Convert repeated button styles into a shared component.
- Add unit tests for the FAQ toggle logic.

## ✅ Testing Strategy (Suggested)

Basic examples you can add in `src/__tests__/`:
- Render Hero and assert CTA button is present.
- FAQ expand/collapse toggles `aria-expanded` state.

## 🧪 Scripts Summary

| Script | Purpose |
| ------ | ------- |
| `npm start` | Run dev server (port 3000) |
| `npm test` | Jest watch mode via react-scripts |
| `npm run build` | Production build to `build/` |
| `npm run eject` | Copy config locally (irreversible) |

## 📦 Deployment

After `npm run build`, deploy contents of `build/` to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.).

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push: `git push origin feat/your-feature`
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2025 R-Tharanka

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

If you contribute, you agree that your contributions will be licensed under the same MIT License.

