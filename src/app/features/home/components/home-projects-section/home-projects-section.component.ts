import { Component, ElementRef, inject, signal, viewChild, viewChildren } from '@angular/core';
import { AnimateService } from '../../../../core/services/animate/animate.service';
import { IProject } from '../../interfaces/project.interface';

@Component({
  selector: 'app-home-projects-section',
  imports: [],
  templateUrl: './home-projects-section.component.html',
  styleUrl: './home-projects-section.component.css',
})
export class HomeProjectsSectionComponent {
  private readonly animateService = inject(AnimateService);

  projects: IProject[] = [
    // e-commerce
    {
      badge: ' ENTERPRISE SSR',
      // https://images.unsplash.com/photo-1523473827539-2a64d0d36724?auto=format&fit=crop&w=900&q=80
      image: '/assets/images/e-commerce.png',
      liveLink: 'https://freshcart-e-commerce-app.netlify.app/',
      gitHubLink: 'https://github.com/mohammed-kandeel/e-commerces',
      liveText: 'Live Store',
      techStack: [
        { name: 'Angular 21', color: 'bg-red-500/10 text-red-300 border-red-500/20' },
        { name: 'SSR', color: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
        { name: 'Tailwind', color: 'border-cyan-500/20 text-cyan-300 bg-cyan-500/10' },
        { name: 'RxJS', color: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
      ],
      title: '  FreshCart — E-commerce Platform',
      description:
        'Production-grade Angular 21 SSR e-commerce system with authentication layers, feature-based architecture, cart engine, Stripe checkout, order tracking, and scalable modular design.',
      keySystems: [
        {
          icon: 'fa-solid fa-server  text-emerald-400',
          description: 'Server-Side Rendering (SSR) for SEO & performance',
        },
        {
          icon: 'fa-solid fa-layer-group  text-emerald-400',
          description: 'Enterprise architecture (core / shared / features)',
        },
        {
          icon: 'fa-solid fa-cart-shopping  text-emerald-400',
          description: 'Full e-commerce pipeline (cart → checkout → orders)',
        },
        {
          icon: 'fa-solid fa-shield  text-emerald-400',
          description: 'Auth guards, interceptors, and protected routing layers',
        },
      ],
      footerTags: 'Angular SSR • Netlify • Scalable E-commerce',
      colors: {
        card: 'hover:border-emerald-500/40 hover:shadow-[0_0_80px_rgba(16,185,129,0.15)]',
        badge: 'border-emerald-500/30 bg-emerald-800/60 text-emerald-300',
        live: 'bg-emerald-500 hover:bg-emerald-400',
        title: 'group-hover:text-emerald-300',
        footerTags: {
          live: 'hover:text-emerald-300',
        },
      },
    },

    // social media
    {
      badge: 'ANGULAR PLATFORM',
      // https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=80
      image: '/assets/images/social_media.png',
      liveLink: 'https://angular-social-media-app-dun.vercel.app/',
      liveText: ' Live App',
      gitHubLink: 'https://github.com/mohammed-kandeel/angular-social-media-app',
      techStack: [
        { name: 'Angular 20', color: 'bg-red-500/10 text-red-300 border-red-500/20' },
        { name: 'RxJS', color: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
        { name: 'Tailwind', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
      ],
      title: ' Social Media Web Application',
      description:
        'Full-scale Angular 20 social platform featuring authentication system, posts engine, real-time-like UX, infinite scrolling, notifications, and scalable feature-based architecture.',
      keySystems: [
        {
          icon: 'fa-solid fa-shield-halved  text-purple-400',
          description: 'Authentication system with guards & protected routes',
        },
        {
          icon: 'fa-solid fa-layer-group  text-purple-400',
          description: 'Feature-based architecture (core / shared / features)',
        },
        {
          icon: 'fa-solid fa-rotate  text-purple-400',
          description: 'RxJS-powered state & infinite scroll system',
        },
        {
          icon: 'fa-solid fa-bell  text-purple-400',
          description: 'Notifications, comments, likes & social interactions engine',
        },
      ],
      footerTags: 'Angular • RxJS • Scalable Architecture',
      colors: {
        card: 'hover:border-purple-500/40 hover:shadow-[0_0_80px_rgba(168,85,247,0.18)]',
        badge: 'border-purple-200/30 bg-purple-800/70 text-purple-200',
        live: 'bg-purple-500 hover:bg-purple-700',
        title: 'group-hover:text-purple-400',
        footerTags: {
          live: 'hover:text-purple-400',
        },
      },
    },

    // Adasa — Arabic Photography Blog
    {
      badge: ' ANGULAR BLOG',
      // https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80
      image: '/assets/images/Adasa_Arabic_Photography_Blog.png',
      liveLink: 'https://mohammed-kandeel.github.io/15-Adasa-build',
      liveText: 'Live Demo',
      gitHubLink: 'https://github.com/mohammed-kandeel/15-Adasa-source-code',
      techStack: [
        { name: ' Angular 17', color: 'bg-red-500/10 text-red-300 border-red-500/20' },
        { name: 'TypeScript', color: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
        { name: 'Bootstrap', color: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
        { name: 'RTL UI', color: 'bg-pink-500/10 text-pink-300 border-pink-500/20' },
      ],
      title: 'Adasa (عدسة) — Arabic Photography Blog',
      description:
        'Angular 17 photography blog with full SPA architecture, RTL Arabic UI, reusable components, live search, category filtering, pagination, and glassmorphism design system.',
      keySystems: [
        {
          icon: 'fa-solid fa-sitemap text-orange-400',
          description: 'Component-based Angular architecture (layout + reusable split)',
        },
        {
          icon: 'fa-solid fa-route text-orange-400',
          description: 'Multi-page SPA routing with custom 404 page',
        },
        {
          icon: 'fa-solid fa-magnifying-glass text-orange-400',
          description: 'Live search + category filter + pagination system',
        },
        {
          icon: 'fa-solid fa-language text-orange-400',
          description: 'Full Arabic RTL design system (photography blog UX)',
        },
        {
          icon: 'fa-solid fa-layer-group text-orange-400',
          description: 'Reusable Angular components + strict TypeScript models',
        },
      ],
      footerTags: 'Angular • TypeScript • Bootstrap • RTL UI',
      colors: {
        card: 'hover:border-orange-500/40 hover:shadow-[0_0_80px_rgba(249,115,22,0.15)]',
        badge: 'border-orange-200/30 bg-orange-800/30 text-orange-200',
        live: 'bg-orange-500 hover:bg-orange-700',
        title: 'group-hover:text-orange-400',
        footerTags: {
          live: 'hover:text-orange-400',
        },
      },
    },

    // Kanban Board — Task Manager
    {
      badge: 'TASK MANAGER',
      // https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=80
      image: '/assets/images/Kanban_Board_Task_Manager.png',
      liveLink: 'https://mohammed-kandeel.github.io/14-Kanban-Board/',
      liveText: 'Live Demo',
      gitHubLink: 'https://github.com/mohammed-kandeel/14-Kanban-Board',
      techStack: [
        { name: 'TypeScript', color: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20' },
        { name: 'Bootstrap', color: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
        { name: 'OOP', color: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' },
        { name: 'LocalStorage', color: 'bg-green-500/10 text-green-300 border-green-500/20' },
      ],
      title: 'Kanban Board — Task Manager',
      description:
        'Trello-style task manager built with TypeScript featuring full CRUD, smart due-date logic, real-time time-ago display, and persistent localStorage state — all without external libraries.',
      keySystems: [
        {
          icon: 'fa-solid fa-columns text-indigo-400',
          description: '3-column board (To Do · In Progress · Completed)',
        },
        {
          icon: 'fa-solid fa-pen-to-square text-indigo-400',
          description: 'Full CRUD with shared modal (Add / Edit)',
        },
        {
          icon: 'fa-solid fa-calendar-check  text-indigo-400',
          description: 'Smart due-date badges (Overdue · Due Soon · Done)',
        },
        {
          icon: 'fa-solid fa-clock text-indigo-400',
          description: 'Real-time "time ago" tracking',
        },
        {
          icon: 'fa-solid fa-database text-indigo-400',
          description: 'localStorage persistence (no backend)',
        },
      ],
      footerTags: 'TypeScript • OOP • LocalStorage',
      colors: {
        card: 'hover:border-indigo-500/40 hover:shadow-[0_0_80px_rgba(99,102,241,0.15)]',
        badge: 'border-indigo-200/30 bg-indigo-800/70  text-indigo-200',
        live: 'bg-indigo-500 hover:bg-indigo-700',
        title: 'group-hover:text-indigo-400',
        footerTags: {
          live: 'hover:text-indigo-400',
        },
      },
    },

    // NutriPlan — Nutrition Tracking App
    {
      badge: 'NUTRITION APP',
      // https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80
      image: '/assets/images/NutriPlan_Nutrition_Tracking.png',
      liveLink: 'https://mohammed-kandeel.github.io/13-Nutriplan-Design',
      liveText: 'Live Demo',
      gitHubLink: 'https://github.com/mohammed-kandeel/13-Nutriplan-Design/tree/main',
      techStack: [
        { name: 'HTML5', color: 'bg-orange-500/10 text-orange-300 border-orange-500/20' },
        { name: 'CSS3', color: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
        { name: 'JavaScript', color: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20' },
        { name: 'APIs', color: 'bg-green-500/10 text-green-300 border-green-500/20' },
      ],
      title: 'NutriPlan — Advanced Nutrition Tracker',
      description:
        'Full SPA nutrition tracking app built with ES6 modules & OOP, featuring meal browsing, product scanning, macro tracking, and History API navigation with a scalable architecture.',
      keySystems: [
        {
          icon: 'fa-solid fa-layer-group text-emerald-400',
          description: 'SPA architecture with ES6 modules & class-based design',
        },
        {
          icon: 'fa-solid fa-database text-emerald-400',
          description: 'Daily nutrition tracking with localStorage persistence',
        },
        {
          icon: 'fa-solid fa-barcode text-emerald-400',
          description: ' Product scanner with barcode & Nutri-Score filtering',
        },
        {
          icon: 'fa-solid fa-chart-line text-emerald-400',
          description: 'Macro tracking + weekly calorie chart visualization',
        },
        {
          icon: 'fa-solid fa-rocket text-emerald-400',
          description: 'Advanced async logic (debounce, retry, Promise.all)',
        },
      ],
      footerTags: ' OOP • SPA • APIs • Advanced JS ',
      colors: {
        card: 'hover:border-emerald-500/40 hover:shadow-[0_0_80px_rgba(16,185,129,0.15)]',
        badge: 'border-emerald-200/30 bg-emerald-800/70 text-emerald-200',
        live: 'bg-emerald-500 hover:bg-emerald-700',
        title: 'group-hover:text-emerald-400',
        footerTags: {
          live: 'hover:text-emerald-400',
        },
      },
    },

    // Personal Portfolio
    {
      badge: 'PORTFOLIO WEBSITE',
      // https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80
      image: '/assets/images/Personal_Portfolio.png',
      liveLink: 'https://mohammed-kandeel.github.io/12-Personal-Portfolio/',
      liveText: 'Live Demo',
      gitHubLink: 'https://github.com/mohammed-kandeel/12-Personal-Portfolio',
      techStack: [
        { name: 'HTML5', color: 'bg-orange-500/10 text-orange-300 border-orange-500/20' },
        { name: 'CSS3', color: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
        { name: 'JavaScript', color: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20' },
        { name: 'Tailwind', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
      ],
      title: 'Personal Portfolio — Interactive UI',
      description:
        'Fully interactive portfolio website with dynamic filtering, custom-built carousel, theme customization panel, and smooth scroll behavior — built with pure JavaScript and Tailwind CSS.',
      keySystems: [
        {
          icon: 'fa-solid fa-moon text-pink-400',
          description: 'Dark / Light mode with Tailwind dark variants',
        },
        {
          icon: 'fa-solid fa-filter text-pink-400',
          description: 'Animated portfolio filtering system (no libraries)',
        },
        {
          icon: 'fa-solid fa-sliders text-pink-400',
          description: 'Theme & font customization via CSS variables',
        },
        {
          icon: 'fa-solid fa-comments text-pink-400',
          description: 'Custom testimonials carousel (vanilla JS)',
        },
        {
          icon: 'fa-solid fa-arrow-up text-pink-400',
          description: 'Scroll tracking + active navbar + scroll-to-top button',
        },
      ],
      footerTags: 'Tailwind • Vanilla JS • UI Logic ',
      colors: {
        card: 'hover:border-pink-500/40 hover:shadow-[0_0_80px_rgba(236,72,153,0.15)]',
        badge: 'border-pink-200/30 bg-pink-800/70 text-pink-200',
        live: 'bg-pink-500 hover:bg-pink-700',
        title: 'group-hover:text-pink-400',
        footerTags: {
          live: 'hover:text-pink-400',
        },
      },
    },

    // COSMOS — Space Dashboard
    {
      badge: 'API DASHBOARD',
      // https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80
      image: '/assets/images/COSMOS_Space_Dashboard.png',
      liveLink: 'https://mohammed-kandeel.github.io/11-COSMOS-Space-Dashboard',
      liveText: 'Live Demo',
      gitHubLink: 'https://github.com/mohammed-kandeel/11-COSMOS-Space-Dashboard',
      techStack: [
        { name: 'HTML5', color: 'bg-orange-500/10 text-orange-300 border-orange-500/20' },
        { name: 'CSS3', color: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
        { name: 'JavaScript', color: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20' },
      ],
      title: 'COSMOS — Space Dashboard',
      description:
        'Interactive dashboard powered by real-world APIs (NASA, SpaceDevs, Solar System Data), featuring async data fetching, dynamic rendering, and multi-source data orchestration in a unified UI experience.',
      keySystems: [
        {
          icon: 'fa-solid fa-satellite text-purple-400',
          description: 'Multi-API integration (NASA APOD, launches, planets)',
        },
        {
          icon: 'fa-solid fa-code text-purple-400',
          description: 'Async/Await + sequential API loading',
        },
        {
          icon: 'fa-solid fa-layer-group text-purple-400',
          description: 'Fully dynamic UI (no hardcoded content)',
        },
        {
          icon: 'fa-solid fa-calendar text-purple-400',
          description: 'Smart date handling for real-time API accuracy',
        },
        {
          icon: 'fa-solid fa-table text-purple-400',
          description: 'Complex data visualization (planet comparison table)',
        },
      ],
      footerTags: 'APIs • Async JS • Data Fetching • System Design',
      colors: {
        card: 'hover:border-purple-500/40 hover:shadow-[0_0_80px_rgba(168,85,247,0.25)]',
        badge: 'border-purple-200/30 bg-purple-800/70 text-purple-200',
        live: 'bg-purple-500 hover:bg-purple-700',
        title: 'group-hover:text-purple-400',
        footerTags: {
          live: 'hover:text-purple-400',
        },
      },
    },

    // ContactHub — Smart Contact Manager
    {
      badge: ' CRUD APP',
      // https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80
      image: '/assets/images/ContactHub_Smart_Contact_Manager.png',
      liveLink: 'https://mohammed-kandeel.github.io/10-ContactHub',
      liveText: 'Live Demo',
      gitHubLink: 'https://github.com/mohammed-kandeel/10-ContactHub',
      techStack: [
        { name: 'HTML5', color: 'bg-orange-500/10 text-orange-300 border-orange-500/20' },
        { name: 'CSS3', color: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
        { name: 'Bootstrap', color: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
        { name: 'JavaScript', color: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20' },
      ],
      title: 'ContactHub — Smart Contact Manager',
      description:
        'Full-featured contact manager with complete CRUD operations, localStorage persistence, real-time search, and advanced validation system using Regex and dynamic UI rendering.',
      keySystems: [
        {
          icon: 'fa-solid fa-database text-emerald-400',
          description: 'Full CRUD system (Add / Edit / Delete / Search)',
        },
        {
          icon: 'fa-solid fa-hard-drive text-emerald-400',
          description: 'localStorage persistence + Base64 image handling',
        },
        {
          icon: 'fa-solid fa-shield-halved text-emerald-400',
          description: 'Advanced validation (Regex + duplicate detection)',
        },
        {
          icon: 'fa-solid fa-star text-emerald-400',
          description: 'Favorites & Emergency contact system',
        },
        {
          icon: 'fa-solid fa-bolt text-emerald-400',
          description: 'SweetAlert2 modals + real-time UI updates',
        },
      ],
      footerTags: 'CRUD • localStorage • Regex • UX Logic',
      colors: {
        card: 'hover:border-emerald-500/40 hover:shadow-[0_0_80px_rgba(16,185,129,0.15)]',
        badge: 'border-emerald-200/30 bg-emerald-800/70 text-emerald-200',
        live: 'bg-emerald-500 hover:bg-emerald-700',
        title: 'group-hover:text-emerald-400',
        footerTags: {
          live: 'hover:text-emerald-400',
        },
      },
    },

    // What's For Dinner
    {
      badge: 'FOOD APP',
      // https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80
      image: "/assets/images/What's_For_Dinner.png",
      liveLink: 'https://mohammed-kandeel.github.io/09-What-s-For-Dinner',
      liveText: 'Live Demo',
      gitHubLink: 'https://github.com/mohammed-kandeel/09-What-s-For-Dinner',
      techStack: [
        { name: 'HTML5', color: 'bg-orange-500/10 text-orange-300 border-orange-500/20' },
        { name: 'CSS3', color: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
        { name: 'Bootstrap', color: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
        { name: 'JavaScript', color: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20' },
      ],
      title: "What's For Dinner",
      description:
        'Smart meal suggestion app that randomly picks recipes using Fisher-Yates shuffle — no repeats until all meals are shown. Built with pure JavaScript and dynamic UI rendering.',
      keySystems: [
        {
          icon: 'fa-solid fa-dice  text-yellow-400',
          description: 'Random meal generator (no repeats logic)',
        },
        {
          icon: 'fa-solid fa-clock text-yellow-400',
          description: 'Cooking time alert system (&gt; 45 mins)',
        },
        {
          icon: 'fa-solid fa-list text-yellow-400',
          description: 'Ingredients & instructions tabs',
        },
        {
          icon: 'fa-solid fa-heart-pulse text-yellow-400',
          description: ' Nutrition breakdown (calories, protein, carbs)',
        },
        {
          icon: 'fa-solid fa-lightbulb text-yellow-400',
          description: 'Chef tips + dynamic content rendering',
        },
      ],
      footerTags: 'JavaScript • Dynamic UI • Algorithms',
      colors: {
        card: 'hover:border-yellow-500/40 hover:shadow-[0_0_80px_rgba(255,255,0,0.15)]',
        badge: 'border-yellow-200/30 bg-yellow-800/70 text-yellow-200',
        live: 'bg-yellow-500 hover:bg-yellow-700',
        title: 'group-hover:text-yellow-400',
        footerTags: {
          live: 'hover:text-yellow-400',
        },
      },
    },

    // Clarity — Digital Solutions Platform
    {
      badge: 'FEATURED PROJECT',
      // https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80
      image: '/assets/images/Clarity_Digital_Solutions_Platform.png',
      liveLink: '/assets/images/Clarity_Digital_Solutions_Platform.png',
      liveText: 'Live Demo',
      gitHubLink: 'https://github.com/mohammed-kandeel/07-clarity-seven-drab-',
      techStack: [
        { name: 'HTML5', color: 'bg-orange-500/10 text-orange-300 border-orange-500/20' },
        { name: 'CSS3', color: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
        { name: 'Bootstrap', color: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
        { name: ' OKLCH System', color: 'bg-pink-500/10 text-pink-300 border-pink-500/20' },
      ],
      title: 'Clarity — Digital Solutions Platform',
      description:
        'A fully responsive digital agency landing page built as a Bootstrap exam project with a custom utility system, OKLCH color architecture, and pixel-perfect UI implementation.',
      keySystems: [
        {
          icon: 'fa-solid fa-bolt text-orange-400',
          description: 'OKLCH-based scalable color system',
        },
        {
          icon: 'fa-solid fa-layer-group text-orange-400',
          description: 'Custom utility-first architecture (no Tailwind)',
        },
        {
          icon: 'fa-solid fa-cubes text-orange-400',
          description: 'Bootstrap components (Tabs, Carousel, Modal, Accordion)',
        },
      ],
      footerTags: 'Bootstrap • Custom System • UI Engineering',
      colors: {
        card: 'hover:border-orange-500/40 hover:shadow-[0_0_80px_rgba(255, 165,0, 0.15)]',
        badge: 'border-orange-200/30 bg-orange-800/70 text-orange-200',
        live: 'bg-orange-500 hover:bg-orange-700',
        title: 'group-hover:text-orange-400',
        footerTags: {
          live: 'hover:text-orange-400',
        },
      },
    },

    // GameArena — Gaming Landing Page
    {
      badge: 'GAMING UI',
      // https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80
      image: '/assets/images/GameArena.png',
      liveLink: 'https://mohammed-kandeel.github.io/06-Games-Arena',
      liveText: 'Play Demo',
      gitHubLink: 'https://github.com/mohammed-kandeel/06-Games-Arena',
      techStack: [
        { name: 'HTML5', color: 'bg-orange-500/10 text-orange-300 border-orange-500/20' },
        { name: 'CSS3', color: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
        { name: 'Bootstrap', color: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
        { name: 'Animations', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
      ],
      title: 'GameArena — Gaming Landing Page',
      description:
        'High-energy gaming landing page built with Bootstrap 5, featuring neon UI style, parallax hero, animated carousels, and CSS-only micro-interactions.',
      keySystems: [
        {
          icon: 'fa-solid fa-gamepad text-lime-400',
          description: 'Gaming UI system with neon accent (#cbfe1c)',
        },
        {
          icon: 'fa-solid fa-film text-lime-400',
          description: 'Multi-breakpoint Bootstrap carousel (1/2/3 cards)',
        },
        {
          icon: 'fa-solid fa-wand-magic-sparkles text-lime-400',
          description: ' Parallax hero + infinite scrolling animations',
        },
        {
          icon: 'fa-solid fa-users text-lime-400',
          description: 'Team section with grayscale reveal hover effect',
        },
      ],
      footerTags: 'Bootstrap • CSS Animations • UI Engineering',
      colors: {
        card: 'hover:border-lime-500/40 hover:shadow-[0_0_80px_rgba(203,254,28,0.15)]',
        badge: 'border-lime-200/30 bg-lime-800/70 text-lime-200',
        live: 'bg-lime-500 hover:bg-lime-700',
        title: 'group-hover:text-lime-400',
        footerTags: {
          live: 'hover:text-lime-400',
        },
      },
    },

    // Mudabbir — Smart Finance Dashboard
    {
      badge: 'FINTECH DASHBOARD',
      // https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80
      image: '/assets/images/Mudabbir.png',
      liveLink: 'https://mohammed-kandeel.github.io/5-Mudabbir-Vercel',
      liveText: 'Live Dashboard',
      gitHubLink: 'https://github.com/mohammed-kandeel/5-Mudabbir-Vercel',
      techStack: [
        { name: 'HTML5', color: 'bg-orange-500/10 text-orange-300  border-orange-500/20' },
        { name: 'CSS3', color: 'bg-blue-500/10 text-blue-300  border-blue-500/20' },
        { name: 'CSS Grid', color: 'bg-cyan-500/10 text-cyan-300  border-cyan-500/20' },
        { name: 'RTL UI', color: 'bg-green-500/10 text-green-300  border-green-500/20' },
      ],
      title: 'Mudabbir — Smart Finance Dashboard',
      description:
        'RTL financial dashboard built with CSS Grid systems, featuring balance tracking, transactions, budgeting system, and fully CSS-based 3D credit card interactions.',
      keySystems: [
        {
          icon: 'fa-solid fa-grid-2 text-blue-400',
          description: 'Advanced CSS Grid layout with named template areas',
        },
        {
          icon: 'fa-solid fa-credit-card text-blue-400',
          description: 'CSS-only 3D credit card flip interactions',
        },
        {
          icon: 'fa-solid fa-globe text-blue-400',
          description: 'Full RTL architecture with Arabic-first UX design',
        },
        {
          icon: 'fa-solid fa-chart-line text-blue-400',
          description: 'Financial analytics UI (budget, income, expenses, bills)',
        },
      ],
      footerTags: 'CSS Grid • RTL UI • No JavaScript',
      colors: {
        card: 'hover:border-blue-500/40 hover:shadow-[0_0_80px_rgba(59,130,246,0.15)]',
        badge: 'border-blue-200/30 bg-blue-800/70 text-blue-200',
        live: 'bg-blue-500 hover:bg-blue-700',
        title: 'group-hover:text-blue-400',
        footerTags: {
          live: 'hover:text-blue-400',
        },
      },
    },

    // The UX Review Blog
    {
      badge: 'UX BLOG',
      image: '/assets/images/The_UX_Review.png',
      liveLink: 'https://mohammed-kandeel.github.io/4-The-UX-Review-Blog',
      liveText: 'Read Blog',
      gitHubLink: 'https://github.com/mohammed-kandeel/4-The-UX-Review-Blog',
      techStack: [
        { name: 'HTML5', color: 'bg-orange-500/10 text-orange-300  border-orange-500/20' },
        { name: 'CSS3', color: 'bg-blue-500/10 text-blue-300  border-blue-500/20' },
        { name: 'UI Design', color: 'bg-green-500/10 text-green-300  border-green-500/20' },
      ],
      title: 'The UX Review Blog',
      description:
        ' Bold Neubrutalist blog landing page exploring tech, design, and digital culture with raw visual identity, heavy shadows, and experimental UI patterns.',
      keySystems: [
        {
          icon: 'mt-0.5 h-2 w-2 bg-cyan-600',
          description: 'Neubrutalism design system (borders + shadows + rotation)',
        },
        {
          icon: 'mt-0.5 h-2 w-2 bg-red-500',
          description: 'CSS-only mobile menu using :target (no JavaScript)',
        },
        {
          icon: 'mt-0.5 h-2 w-2 bg-blue-600',
          description: 'Sticky sidebar + advanced layout structure',
        },
        {
          icon: 'mt-0.5 h-2 w-2 bg-purple-600',
          description: 'Heavy use of transforms, shadows, and pseudo-elements',
        },
      ],
      footerTags: 'HTML5 • CSS3 • Pure UI Engineering',
      colors: {
        card: 'hover:border-yellow-500/40 hover:shadow-[0_0_80px_rgba(255, 255, 255,0.15)]',
        badge: 'border-yellow-200/30 bg-yellow-800/70 text-yellow-200',
        live: 'bg-yellow-500 hover:bg-yellow-700',
        title: 'group-hover:text-yellow-400',
        footerTags: {
          live: 'hover:text-yellow-400',
        },
      },
    },

    // DJI Mavic 4 Pro — Product Page
    {
      badge: ' DRONE PRODUCT',
      image: '/assets/images/DJI_Mavic_4_Pro.png',
      liveLink: 'https://mohammed-kandeel.github.io/3-Dji-Product-Page',
      liveText: 'View Product',
      gitHubLink: 'https://github.com/mohammed-kandeel/3-Dji-Product-Page',
      techStack: [
        { name: 'HTML5', color: 'bg-orange-500/10 text-orange-300  border-orange-500/20' },
        { name: 'CSS3', color: 'bg-blue-500/10 text-blue-300  border-blue-500/20' },
        { name: 'UI Design', color: 'bg-green-500/10 text-green-300  border-green-500/20' },
      ],
      title: 'DJI Mavic 4 Pro — Product Page',
      description:
        'Professional drone product landing page showcasing specs comparison, reviews system, and e-commerce-style UX with sticky navigation and structured product hierarchy.',
      keySystems: [
        {
          icon: 'fa-solid fa-plane text-purple-400',
          description: 'Hero section with pricing, discount & CTA actions',
        },
        {
          icon: 'fa-solid fa-table text-purple-400',
          description: 'Advanced specs comparison table (multi-product)',
        },
        {
          icon: 'fa-solid fa-star text-purple-400',
          description: 'Reviews system with rating breakdown & social proof',
        },
        {
          icon: 'fa-solid fa-cart-shopping text-purple-400',
          description: 'Related products cross-selling section',
        },
      ],
      footerTags: 'HTML5 • CSS3 • UI Engineering',
      colors: {
        card: 'hover:border-purple-500/40 hover:shadow-[0_0_80px_rgba(128, 0, 128,,0.15)]',
        badge: 'border-purple-200/30 bg-purple-800/70 text-purple-200',
        live: 'bg-purple-500 hover:bg-purple-700',
        title: 'group-hover:text-purple-400',
        footerTags: {
          live: 'hover:text-purple-400',
        },
      },
    },

    /* {
      badge: '',
      image: '',
      liveLink: '',
      gitHubLink: '',
      liveText: '',
      techStack: [
        { name: '', color: '' },
        { name: '', color: '' },
        { name: '', color: '' },
      ],
      title: '',
      description: '',
      keySystems: [
        { icon: '', description: '' },
        { icon: '', description: '' },
        { icon: '', description: '' },
        { icon: '', description: '' },
      ],
      footerTags: '',
      colors: {
        card: 'hover:border-orange-500/40 hover:shadow-[0_0_80px_rgba(249,115,22,0.15)]',
        badge: 'border-orange-200/30 bg-orange-800/70 text-orange-200',
        live: 'bg-orange-500 hover:bg-orange-700',
        title: 'group-hover:text-orange-400',
        footerTags: {
          live: 'hover:text-orange-400',
        },
      },
    },
    */
  ];
  headRef = viewChild<ElementRef>('headRef');
  projectItemsRef = viewChildren<ElementRef>('projectItemsRef');
  viewMoreBtnRef = viewChild<ElementRef>('viewMoreBtnRef');

  index = signal(1);
  onViewMore() {
    this.index.update((value) => value + 1);
    const cardsCssAnimation = [
      'animate-[fadeUp_1s_ease-out_forwards]',
      'animate-[fadeUp_1.1s_ease-out_0.2s_forwards]',
      'animate-[fadeUp_1.2s_ease-out_0.4s_forwards]',
    ];

    setTimeout(() => {
      this.projectItemsRef()
        .slice(3 * (this.index() - 1), 3 * this.index())
        .forEach((projectCard, index) => {
          projectCard.nativeElement.classList.add(cardsCssAnimation[index]);
        });
    }, 0);
  }

  ngAfterContentChecked(): void {
    this.animation();
  }
  animation() {
    this.animateService
      .animation(this.headRef(), 'animate-[fadeUp_1s_ease-out_0.2s_forwards]')
      ?.observe(this.headRef()?.nativeElement);

    const cardsCssAnimation = [
      'animate-[fadeUp_1.2s_ease-out_0.5s_forwards]',
      'animate-[fadeUp_1.3s_ease-out_0.7s_forwards]',
      'animate-[fadeUp_1.4s_ease-out_0.9s_forwards]',
    ];
    this.projectItemsRef()
      .slice(0, 3)
      .forEach((projectCard, index) => {
        this.animateService
          .animation(projectCard, cardsCssAnimation[index])
          ?.observe(projectCard?.nativeElement);
      });

    this.animateService
      .animation(this.viewMoreBtnRef(), 'animate-[fadeUp_1s_ease-out_forwards]')
      ?.observe(this.viewMoreBtnRef()?.nativeElement);
  }
}
