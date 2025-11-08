# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

src/
assets/ # Images, icons, fonts, etc.
components/ # Reusable UI components (buttons, forms, modals, etc.)
ui/ # Components from Shadcn or custom UI components
common/ # Shared components (e.g., Loader, Navbar, Footer)
layouts/ # Layouts for different sections (e.g., MainLayout, DashboardLayout)
MainLayout.tsx # Default layout for most pages
DashboardLayout.tsx
pages/ # Page components (Home, About, etc.)
Home.tsx
About.tsx
Dashboard.tsx
hooks/ # Custom hooks
useAuth.ts # Example: custom authentication hook
useFetch.ts # Example: API call hook
store/ # Global state management (using Zustand or Redux)
services/ # API services or external calls (e.g., axios configuration)
lib/ # Utility functions (e.g., cn for classnames)
types/ # TypeScript types and interfaces
App.tsx # Main app component
main.tsx # App entry point
index.css # Global styles (tailwind setup)
routes.ts # Routing configuration

# My React Template 🚀

A modern React + TypeScript + Vite starter with Tailwind, ESLint, Prettier, Husky, and GitHub Actions CI/CD.

## Features

✅ React + TypeScript  
✅ TailwindCSS  
✅ ESLint + Prettier  
✅ Husky + lint-staged  
✅ Vitest + React Testing Library  
✅ GitHub Actions (CI/CD)

## Scripts

- `npm run dev` — Start development
- `npm run build` — Build for production
- `npm run test` — Run tests

![CI](https://github.com/Eulean/reactTemplate_1/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/Eulean/reactTemplate_1/actions/workflows/deploy.yml/badge.svg)
