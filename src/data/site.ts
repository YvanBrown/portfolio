export const site = {
  givenNames: "Théo Brad Ivan",
  familyName: "EYEGHE NYOUNDOU",
  name: "Théo Brad Ivan EYEGHE NYOUNDOU",
  title: "Théo Brad Ivan EYEGHE NYOUNDOU | Développeur back-end, QA/UAT et data analyst transactions",
  description:
    "Développeur back-end, QA/UAT et data analyst transactions basé à Libreville (Gabon). Je développe, teste et supervise des solutions numériques, avec une expérience FinTech chez Paynala Gabon.",
  email: "nyoundoutheo@gmail.com",
  // Envoi direct du formulaire (ex. Formspree : "https://formspree.io/f/xxxxxxx").
  // Laissé vide : le formulaire ouvre la messagerie du visiteur avec le message pré-rempli.
  formEndpoint: "",
};

export const nav = [
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Ce que je fais" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export const about = {
  text: "Je suis développeur passionné par la création d'applications web et mobiles. Je m'intéresse particulièrement aux systèmes de paiement, aux solutions fintech et à l'automatisation des processus. J'aime concevoir des applications utiles, performantes et sécurisées qui répondent à des besoins réels.",
  details: [
    { label: "Localisation", lines: ["Gabon"] },
    // À CONFIRMER : formulation de l'objectif, rédigée à partir de votre présentation
    { label: "Objectif professionnel", lines: ["Concevoir des solutions de paiement et fintech fiables."] },
  ],
};

export type Skill = { icon: string; title: string; text: string; tags: string[]; variant: "accent" | "plain" | "dots"; span: string };

export const skills: Skill[] = [
  {
    icon: "code",
    title: "Développement",
    text: "Applications web et back-end, de la conception au déploiement.",
    tags: ["PHP / Laravel", "JavaScript", "HTML / CSS", "APIs REST", "Git", "Intelligence artificielle"],
    variant: "accent",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    icon: "database",
    title: "Données et SQL",
    text: "Requêtes, reporting et rapprochement de transactions.",
    tags: ["PostgreSQL", "MySQL", "Reporting"],
    variant: "plain",
    span: "md:col-span-5",
  },
  {
    icon: "shield-check",
    title: "Tests et recette UAT",
    text: "Validation des flux et des nouvelles fonctionnalités avant la mise en production.",
    tags: ["Tests UAT", "Contrôle qualité"],
    variant: "dots",
    span: "md:col-span-5",
  },
  {
    icon: "activity",
    title: "Monitoring et incidents",
    text: "Analyse de logs et investigation : timeouts, callbacks, transactions invalides.",
    tags: ["Analyse de logs", "Linux"],
    variant: "plain",
    span: "md:col-span-6",
  },
  {
    icon: "credit-card",
    title: "Solutions de paiement",
    text: "Mobile Money, plateformes d'assurance, parcours de cotisation et de paiement.",
    tags: ["Mobile Money", "FinTech"],
    variant: "plain",
    span: "md:col-span-6",
  },
];

export const techLogos = ["siPhp", "siLaravel", "siPostgresql", "siMysql", "siJavascript", "siHtml5", "siCss", "siGit", "siLinux"];

export type Project = {
  title: string;
  client?: string;
  role: string;
  summary: string;
  tech: string[];
  link?: string;
  result: string;
  icon: string;
  links?: { label: string; icon: string; href?: string }[];
  image?: { src: string; alt: string; w: number; h: number; kind?: "phone" };
};

export const projects: Project[] = [
  {
    title: "Dashboard « Suivi des transactions »",
    client: "Paynala",
    role: "Conception, développement, analyse",
    summary:
      "Tableau de bord pour suivre l'activité des transactions et en tirer des indicateurs exploitables.",
    tech: ["SQL", "JavaScript", "Reporting"], // À CONFIRMER
    link: "https://paynala-dashboard.paynala-dashboard-backend.workers.dev",
    result: "Une vue centralisée pour suivre les transactions et produire les rapports opérationnels.",
    icon: "chart-bar",
    wide: true,
    image: { src: "/projects/dashboard.webp", alt: "Capture du dashboard Suivi des transactions : filtres, indicateurs clés, courbe succès et échecs, réconciliation par wallet", w: 1800, h: 964 },
  },
  {
    title: "TONJI",
    client: "Paynala",
    role: "Développement",
    summary:
      "Parcours de cotisation et de paiement sur WhatsApp, avec audit et optimisation du chatbot.",
    tech: ["WhatsApp", "APIs REST", "Mobile"], // À CONFIRMER
    result: "Parcours de cotisation et de paiement audités et optimisés.",
    icon: "message-circle",
    links: [{ label: "WhatsApp +241 07 60 77 52", icon: "brand-whatsapp", href: "https://wa.me/24107607752?text=Bonjour" }],
    image: { src: "/projects/tonji-whatsapp.webp", alt: "Conversation WhatsApp avec le chatbot Tonji : menu pour cotiser, rejoindre, créer ou gérer une cagnotte", w: 720, h: 1560, kind: "phone" },
  },
  {
    title: "TONJI",
    role: "Proposition et réalisation",
    summary: "Application de cagnottes communautaires, imaginée et développée de bout en bout.",
    tech: ["Mobile", "Paiement"], // À CONFIRMER
    result: "Produit conçu et réalisé de l'idée jusqu'à l'application.",
    icon: "pig-money",
    links: [
      { label: "App Store", icon: "brand-apple", href: "https://apps.apple.com/us/app/tonji/id6772150068?l=fr-FR" },
      { label: "Google Play", icon: "brand-google-play", href: "https://play.google.com/store/apps/details?id=com.paynala.tonji" },
    ],
    image: { src: "/projects/tonji-app.webp", alt: "Écran d'accueil de l'application Tonji : total collecté et liste des cagnottes", w: 720, h: 1560, kind: "phone" },
  },
  {
    title: "Interface Paynala dans MyAirtel",
    client: "Paynala et Airtel",
    role: "Réalisation de l'interface graphique",
    summary: "Écran d'accueil et services de paiement de Paynala intégrés à l'application MyAirtel.",
    tech: ["HTML", "CSS", "JavaScript"], // À CONFIRMER
    result: "Interface graphique réalisée pour l'écran d'accueil et les services de paiement.",
    icon: "device-mobile",
    image: { src: "/projects/paynala-myairtel.webp", alt: "Interface Paynala : services de paiement classés par catégorie et recherche de marchand", w: 630, h: 1306, kind: "phone" },
  },
  {
    title: "Site vitrine TONJI",
    role: "Réalisation",
    summary:
      "Landing page de TONJI : présentation des cagnottes, des accès par application, WhatsApp et USSD, FAQ et contact.",
    tech: ["Landing page", "Cloudflare Workers"], // À CONFIRMER
    link: "https://tonji-landing.paynala-dashboard-backend.workers.dev/#produit",
    result: "Site en ligne qui présente TONJI et oriente vers l'application.",
    icon: "pig-money",
    wide: true,
    image: { src: "/projects/tonji-landing.webp", alt: "Page d'accueil du site TONJI : « La cagnotte, réinventée », avec le bouton Cotiser maintenant", w: 1440, h: 900 },
  },
];
