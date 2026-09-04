# Open Source World (OSW) 🌍

![Open Source World Banner](./public/osw-banner.png)

> Connecting developers worldwide through open source collaboration


<a href="https://github.com/theopensourceworld/open-source-world/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=theopensourceworld/open-source-world" />
</a>

A modern, responsive landing page for Open Source World, built with React.js, TypeScript, Tailwind CSS, and Framer Motion. This project showcases our global community initiative and the Open Source Kashmir (OSK) regional branch.

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.12-0055FF.svg)](https://www.framer.com/motion/)
[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2025-brightgreen?style=flat)](https://hacktoberfest.com/)
[![Contributing](https://img.shields.io/badge/Contribute-Welcome-blueviolet?style=flat)](./CONTRIBUTING.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## ✨ Features

- **🎨 Modern Design**: Clean, minimal, and attractive UI/UX with smooth animations
- **📱 Responsive Layout**: Mobile-first design that works perfectly on all devices
- **⚡ Interactive Components**: Smooth scrolling navigation, hover effects, and micro-animations
- **📝 Contact Form**: Functional contact form with real-time validation
- **👥 Team Showcase**: Dynamic team member cards with social links
- **🌏 Global & Local Focus**: Information about OSW and Open Source Kashmir (OSK)
- **🔗 Social Integration**: Links to GitHub, LinkedIn, Twitter, and YouTube
- **📧 Newsletter**: Stay updated with the latest community news
- **♿ Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 with TypeScript 4.9.5
- **Styling**: Tailwind CSS 3.4.17 with custom design system
- **Animations**: Framer Motion 12.23.12
- **Icons**: React Icons 5.5.0
- **Build Tool**: Create React App with PostCSS
- **Development**: ESLint, Prettier, VS Code integration

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/theopensourceworld/open-source-world.git
   cd open-source-world
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx      # Landing hero with animations
│   │   ├── AboutSection.tsx     # OSW & OSK information
│   │   ├── TeamSection.tsx      # Team member showcase
│   │   ├── ContactSection.tsx   # Contact form & info
│   │   └── CTABanner.tsx        # Call-to-action banner
│   ├── Navigation.tsx           # Responsive navigation
│   └── Footer.tsx              # Footer with links & newsletter
├── utils/
│   └── animations.ts           # Framer Motion variants
├── types/
│   └── react-icons.d.ts        # TypeScript declarations
├── App.tsx                     # Main app component
├── index.tsx                   # App entry point
└── index.css                   # Global styles & Tailwind
```

## 🎨 Design System

### Color Palette
- **Primary**: Green tones (#22c55e to #16a34a) - representing growth and nature
- **Secondary**: Slate tones (#0f172a to #f8fafc) - professional and modern
- **Accents**: White, gradients, and transparency effects

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 100-900 (variable font)
- **Hierarchy**: Clear heading and body text scales

### Components
- **Buttons**: Primary, secondary, and ghost variants
- **Cards**: Elevated with hover effects
- **Forms**: Clean inputs with validation states
- **Navigation**: Responsive with smooth scrolling

## 🎭 Animations

- **Page Transitions**: Smooth fade-ins and slide-ups
- **Hover Effects**: Scale, shadow, and color transitions
- **Loading States**: Spinner and progress indicators
- **Scroll Animations**: Elements animate into view
- **Micro-interactions**: Button presses and form feedback

## 🔧 Customization

### Tailwind Configuration
Customize colors, fonts, and animations in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* Your custom colors */ },
      secondary: { /* Your custom colors */ }
    },
    fontFamily: {
      'sans': ['Inter', 'system-ui', 'sans-serif']
    }
  }
}
```

### Content Updates
- **Team Members**: Edit `TeamSection.tsx`
- **Contact Info**: Update `ContactSection.tsx`
- **Social Links**: Modify throughout components
- **Branding**: Update logos and colors

## 🛠️ Development

### VS Code Setup

1. **Install Tailwind CSS IntelliSense extension**
2. **Copy VS Code settings** (optional):
   ```bash
   cp .vscode/settings.json.example .vscode/settings.json
   cp .vscode/css_custom_data.json.example .vscode/css_custom_data.json
   ```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

### Code Quality

- **ESLint**: Configured for React and TypeScript
- **Prettier**: Code formatting (if configured)
- **TypeScript**: Strict type checking enabled
- **Accessibility**: ARIA labels and semantic HTML

## 🌍 About Open Source World

Open Source World (OSW) is a global initiative connecting developers, designers, and tech enthusiasts through open source collaboration. Our mission is to democratize technology education and create sustainable opportunities for developers worldwide.

### Open Source Kashmir (OSK)
Our regional branch focused on nurturing open source talent and creating opportunities in the Kashmir valley and surrounding regions.

## 🤝 Contributing

We welcome contributions — please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) for our contribution guidelines, branch naming, PR checklist, and how to request `hacktoberfest-accepted` labeling.

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure accessibility standards
- Test on multiple devices/browsers

## 💡 Ideas for Contributors

Looking for a place to start? Here are **15 project ideas** — pick one, open an issue to claim it, and get your first PR merged. Most are beginner-friendly and eligible for `hacktoberfest-accepted` (see [`CONTRIBUTING.md`](./CONTRIBUTING.md)).

### 🟢 Beginner

1. **Fix "good first issue" bugs** — Squash small bugs tagged `good-first-issue` (broken images, spacing issues on small screens, typos). Great for your first PR.
   - *Files*: any component; check Issues tab.
2. **Add a 404 page** — Design an on-brand "page not found" screen that matches the OSW design system (cream background, brand orange, Fraunces headings) and hook it up as a fallback route.
   - *Files*: `src/pages/`, `src/App.tsx`.
3. **Improve dark mode** — Audit every page in dark theme and fix any hard-coded light colors or low-contrast text. Ensure nothing looks broken when `darkMode: 'class'` is active.
   - *Files*: all components; check `src/context/ThemeContext.tsx`.
4. **Polish the design system** — Extract repeated markup (buttons, inputs, tags) into reusable `Button`, `Card`, and `Input` components, extending the classes already defined in `src/index.css`.
   - *Files*: `src/components/`, `src/index.css`, `tailwind.config.js`.
5. **Add a language switcher (i18n)** — Set up `react-i18next` and translate the site into one new language (Hindi, Urdu, Arabic...). Keep the English default.
   - *Files*: `src/` entry, `src/components/`.

### 🟡 Intermediate

6. **Add a Projects community section** — New `ProjectsSection` that showcases community repos as cards. Bonus: fetch live repo data from the GitHub API (`/orgs/theopensourceworld/repos`).
   - *Files*: `src/components/sections/`, `src/pages/HomePage.tsx`.
7. **Write component tests** — Add React Testing Library + Jest test suites for Navigation, Footer, ContactSection (validation + EmailJS mock), and HeroSection.
   - *Files*: `src/components/**`, `src/App.test.tsx`.
8. **SEO & structured data** — Add JSON-LD (Org/Website schema), richer Open Graph tags, a `sitemap.xml`, and `robots.txt` for better search visibility.
   - *Files*: `public/index.html`, `public/`.
9. **Performance pass** — Lazy-load below-the-fold sections with `React.lazy`, add `loading="lazy"` to images, and inspect the production bundle for size wins.
   - *Files*: `src/`, `public/`.
10. **Newsletter & contact form upgrades** — Add a honeypot field, a GDPR-friendly consent checkbox, rate limiting, and a friendly success redirect for both the form and the footer newsletter.
    - *Files*: `src/components/sections/ContactSection.tsx`, `src/components/Footer.tsx`.
11. **Accessibility audit** — Run axe/Lighthouse, then implement fixes: skip-to-content link, `aria-live` form status, focus-visible styles, and keyboard-only navigation checks.
    - *Files*: `src/index.css`, `src/components/`.

### 🔴 Advanced

12. **Live community stats** — Build a stats bar that reads real numbers (contributors, stars, open PRs) from the GitHub API instead of hard-coded counts.
    - *Files*: `src/pages/HomePage.tsx`, new hook under `src/utils/`.
13. **Motion & page transitions** — Add direction-aware entrance animations, scroll-triggered reveals (already partly in `src/index.css` via `.stagger`), and route transitions with Framer Motion.
    - *Files*: `src/`, `src/utils/animations.ts`.
14. **CI/CD pipeline** — Add GitHub Actions: lint + typecheck + test on every PR, auto-build previews on Vercel/Netlify, and Dependabot for dependency updates.
    - *Files*: `.github/workflows/`.
15. **Team page features** — Add search/filter by skill (already started with category filters), mentor-availability badges, or drive members from a `contributors.json` data file.
    - *Files*: `src/pages/TeamPage.tsx`, `src/components/sections/TeamSection.tsx`.

> **How to claim an idea**: open an issue with the idea title, mention you're working on it, and reference the issue in your PR. Unsure how to pick? Reach out on [Discord](https://discord.gg/hgnUsqAmMT) — maintainers are happy to mentor your first contribution.

## 📞 Contact & Community

- **Email**: opensourceworld.fyi@gmail.com
- **GitHub**: [open-source-world](https://github.com/theopensourceworld)
- **LinkedIn**: [Open Source World](https://linkedin.com/company/open-source-world)
- **Twitter**: [@opensourceworld](https://twitter.com/opensourceworld)
- **YouTube**: [Open Source World](https://youtube.com/@opensourceworld)
- **Discord**: [Join our community](https://discord.gg/hgnUsqAmMT)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ by the Open Source World community
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

**Open Source World** - Building the future of technology together, one commit at a time. 🌍✨

*Made with ❤️ by developers, for developers*
