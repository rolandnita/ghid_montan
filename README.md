# drumdecreasta - Ghid de Munte Profesionist

Un site modern și responsiv pentru un ghid de munte profesionist cu experiență militară în Carpații Români.

## 🏔️ Caracteristici

- **Design Modern Cinematic**: Estetică dark mountain cu glassmorphism și animații subtle
- **Content Collections**: Tururi și articole editate ușor din fișiere Markdown
- **Responsive Design**: Mobile-first, optimizat pentru toate dispozitivele
- **TypeScript**: Type safety și autocompletion
- **Tailwind CSS**: Styling utility-first cu configurație personalizată
- **SSG (Static Site Generation)**: Performance maximă și SEO-friendly
- **Formulare de Contact**: Integrare Netlify Forms pentru mesaje
- **Production Ready**: Optimizat pentru Vercel/Netlify deployment

## 📁 Structura Proiectului

```
src/
├── components/          # Componente Astro refolosabile
│   ├── Navbar.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── TourCard.astro
│   ├── ArticleCard.astro
│   └── ... alte componente
├── content/
│   ├── tours/          # Tururi Markdown/MDX
│   ├── articles/       # Articole Markdown/MDX
│   └── config.ts       # Schema colecțiilor de conținut
├── pages/              # Rute (o pagină = un fișier)
│   ├── index.astro
│   ├── about.astro
│   ├── tours.astro
│   ├── tours/[slug].astro
│   ├── academy.astro
│   ├── academy/[slug].astro
│   ├── contact.astro
│   └── success.astro
├── layouts/
│   └── BaseLayout.astro # Layout principal
├── styles/
│   └── global.css      # Stiluri globale și custom
├── types/
│   └── index.ts        # TypeScript types
└── utils/
    └── config.ts       # Configurații și funcții utilitar

astro.config.mjs        # Configurare Astro
tailwind.config.cjs     # Configurare Tailwind CSS
tsconfig.json           # Configurare TypeScript
```

## 🚀 Instrucțiuni de Instalare

### Cerințe:
- Node.js 18+ (verifică cu `node --version`)
- npm sau yarn

### Pasii:

1. **Instalare dependențe**:
```bash
npm install
```

2. **Rulare în development**:
```bash
npm run dev
```
Site-ul va fi disponibil la `http://localhost:3000`

3. **Build pentru producție**:
```bash
npm run build
```

4. **Preview build-ului**:
```bash
npm run preview
```

## ✏️ Cum să Editezi Conținutul

### Adăugare Tuuri Noi

Creează un fișier `.md` în `src/content/tours/`:

```markdown
---
title: "Nume Turul"
slug: "slug-turul"
location: "Locație"
difficulty: "Moderat"
duration: "2 zile"
distance: "20 km"
elevationGain: "1200 m"
groupSize: "2-6 persoane"
season:
  - "Iulie"
  - "August"
status: "disponibil"
description: "Descriere lungă a turului..."
equipment:
  - "Rucsac"
  - "Cizme"
image: "https://image-url.com/image.jpg"
---

Conținut Markdown opțional...
```

### Adăugare Articole Noi

Creează un fișier `.md` în `src/content/articles/`:

```markdown
---
title: "Titlu Articol"
slug: "slug-articol"
category: "Categorie"
excerpt: "Scurt rezumat (150 caractere)"
publishedAt: 2024-06-11
readingTime: 5
image: "https://image-url.com/image.jpg"
---

# Titlu

Conținut articol în Markdown...

Poți folosi:
- **Bold** și *italic*
- # Headings
- [Linkuri](url)
- `Inline code`
- ![Imagini](url)
```

### Editare Configurații

Editează `src/utils/config.ts` pentru:
- Informații contact
- Email și telefon
- Locația
- Texto branding

## 🎨 Personalizare Design

### Culori
Editează `tailwind.config.cjs` pentru a schimba paletă de culori. Culori predefinite:
- `amber-*`: Culori calde (principale)
- `cyan-*`: Culori cool (accente)
- `slate-*`: Gri pentru text

### Stiluri Globale
Editează `src/styles/global.css` pentru:
- Animații custom
- Efecte glassmorphism
- Variabile CSS personalizate

## 📝 Formular Contact

Formularul e configurat cu **Netlify Forms**. Pentru a activa:

1. Deploy pe Netlify
2. Formularul funcționează automat
3. Mesajele ajung în Netlify admin panel

**Alternativă**: Schimbă `action="/contact"` cu endpoint propriu.

## 📱 Responsive Design

Site-ul e optimizat pentru:
- **Mobile** (320px+): Full responsive
- **Tablet** (768px+): Layout 2-3 coloane
- **Desktop** (1024px+): Layout complet

## 🚢 Deployment

### Vercel (Recomandat)

1. Push cod pe GitHub
2. Conectează repo pe Vercel
3. Vercel build automat
4. Ready în câteva minute

```bash
# Build local
npm run build

# Conținut static e în dist/
```

### Netlify

1. Conectează GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy imediat

### Alte Hoturi

- GitHub Pages
- Cloudflare Pages
- Fly.io
- Orice host cu suport static files

## 📊 Performance

- **Astro SSG**: 0 JavaScript runtime
- **Optimizare imagini**: Automatic via Astro
- **CSS Minification**: Automatic build
- **Lighthouse Score**: 95+

## 🔧 Comenzi npm

```bash
npm run dev       # Start development server
npm run build     # Build pentru producție
npm run preview   # Preview build-ului local
```

## 📦 Tech Stack

- **Astro 4+**: Framework static site generation
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Markdown/MDX**: Content
- **Astro Content Collections**: CMS fără backend

## 🆘 Troubleshooting

### Formularul contact nu merge
- Verify că e pe Netlify SAU configurează endpoint custom
- Check console pentru erori

### Imagini nu se afișează
- Verify URLs sunt complete (http:// sau https://)
- Check că image URLs sunt publice

### Build fails
- Delete `node_modules` și `.astro`
- Run `npm install` și `npm run build` din nou

## 📝 Licență

Concept demo - personalizează pentru uz propriu.

## 🤝 Suport

Pentru ajutor cu Astro, vizitează:
- [Astro Docs](https://docs.astro.build)
- [Astro Discord Community](https://discord.gg/astro)

---

**Creat cu ❤️ pentru aventurieri și iubitori de munți.**

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
