```markdown
# Vessels Dashboard

Modern vessel management dashboard built with **Angular**.

A clean, responsive web interface for monitoring, managing, and visualizing vessel-related data — designed for maritime operations, fleet management, or port authorities.

![Dashboard Preview](https://via.placeholder.com/1280x720/1e293b/ffffff?text=Vessels+Dashboard+Preview)  
![dashboard Angular Admin Vessels Dashboard](./vesseals-dashboard.png)


## ✨ Features

- Responsive sidebar navigation
- Clean modern UI with Tailwind-inspired styling
- Vessel list / overview dashboard
- Quick search functionality
- Modular component architecture
- Angular standalone components (v17+ style)
- Router-based navigation with active state highlighting
- SVG icons (Lucide style)

## 🛠️ Tech Stack

- **Framework**: Angular 17+
- **Language**: TypeScript
- **Styling**: CSS + PostCSS
- **Icons**: Inline Lucide SVG icons
- **Routing**: Angular Router
- **Package Manager**: pnpm
- **Build Tool**: Angular CLI

## Project Structure (important folders)

```
vessels-dashboard/
├── src/
│   ├── app/
│   │   ├── shared/
│   │   │   └── layout/
│   │   │       ├── app-sidebar/
│   │   │       └── app-layout/
│   │   ├── core/
│   │   ├── features/
│   │   │   └── (vessels, dashboard, reports, etc.)
│   │   └── app.component.ts
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   └── styles/
├── angular.json
├── tsconfig.json
├── tsconfig.app.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- pnpm ≥ 8

```bash
# 1. Clone the repository
git clone https://github.com/your-username/vessels-dashboard.git
cd vessels-dashboard

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm start
# or
pnpm dev

# Open http://localhost:4200
```

### Available Scripts

```bash
pnpm start       # development server
pnpm build       # production build → dist/
pnpm watch       # build + watch mode
pnpm lint        # run ESLint
pnpm test        # run unit tests (when added)
```



## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

