# Portfolio — Théo Brad Ivan EYEGHE NYOUNDOU

Nom affiché : « Théo Brad Ivan EYEGHE NYOUNDOU » (`site.name`). Sur petit mobile, l'en-tête affiche `site.shortName` (« EYEGHE NYOUNDOU ») pour tenir sur une ligne.

Portfolio d'une seule page. Développeur back-end, QA/UAT et data analyst transactions (dev, tests, monitoring), expérience FinTech, basé à Libreville (Gabon). Français uniquement. Les infos viennent du CV mais la page doit rester un PORTFOLIO (projets en vedette, visuels), jamais la forme d'un CV : pas de frise d'expérience ni de formation.

## Règles de fond
- Ne jamais présenter la personne comme designer ou spécialiste UX.
- Ne pas réduire le positionnement aux seuls paiements : développement, tests/UAT, données SQL et monitoring.
- Aucun tiret cadratin (—) ni demi-cadratin (–) dans les textes visibles : utiliser le trait d'union.
- Par défaut, aucune vraie donnée de transaction ni vrai écran client : données fictives ou placeholders identifiés. Exception validée par le propriétaire : la capture du dashboard (`public/projects/dashboard.webp`), à remplacer si Paynala ne l'autorise pas (`[À COMPLÉTER]`, `[Visuel à fournir]`, `[photo]`, `[URL]`, `[LinkedIn]`, `[GitHub]`).
- Ne jamais inventer de chiffres de résultats.

## Stack
Astro + Tailwind CSS v4 (plugin Vite). Un seul script JS dans `src/layouts/Base.astro` : apparition au scroll, projecteur des cartes, fermeture du menu mobile. Logos via `simple-icons`, icônes via `@tabler/icons` (composant `Icon.astro`, ne pas dessiner d'icônes à la main).
Commandes : `npm run dev` · `npm run build` · `npm run preview`. Déploiement Vercel ou Netlify (`dist/`). Penser à remplacer `site` dans `astro.config.mjs`.

## Palette (définie UNIQUEMENT dans `src/styles/tokens.css`, bloc `@theme`)
| Token | Valeur |
|---|---|
| bg | #0a101c |
| bg-raised | #0f1829 |
| card | rgba(148,163,184,.06) |
| line | rgba(148,163,184,.16) |
| text | #e8eef7 |
| muted | #9aa8bc |
| accent (unique) | #34d399, survol #6ee7b7 |
| on-accent | #04130d |

Un seul accent : l'émeraude. Ne pas ajouter d'autre couleur vive.

## Thèmes clair / sombre
- Sombre par défaut ; le clair est défini par `:root[data-theme="light"]` dans `tokens.css` (accent `#047857`, texte sur accent blanc, pour garder un contraste AA).
- Le thème vient du choix mémorisé (`localStorage`, clé `theme`), sinon de `prefers-color-scheme`. Un script inline dans `<head>` de `Base.astro` l'applique avant l'affichage. Bouton de bascule dans `Header.astro`.
- Toute nouvelle couleur doit passer par une variable de `tokens.css` avec sa version claire, jamais en dur.

## Polices (auto-hébergées via Fontsource, déclarées dans `tokens.css`)
- Titres : Sora (`font-display`)
- Texte : Geist (`font-sans`)
- Chiffres, étiquettes, technologies : Geist Mono (`font-mono`)

## Conventions
- Pas de couleur ni de police en dur dans les composants : utiliser les classes Tailwind issues des tokens (`text-accent`, `bg-bg`, `border-line`, `font-mono`…).
- Contenu (projets, compétences, email) dans `src/data/site.ts`. Les valeurs à confirmer y sont marquées `// À COMPLÉTER` ou `// À CONFIRMER`.
- Classes partagées dans `tokens.css` : `.card` (+ `.card-accent`, `.card-dots`), `.chip`, `.btn`, `.btn-primary`, `.btn-ghost`, `.reveal`, `.hero-in`, `.marquee`.
- Rayons : cartes 1rem, boutons 0.75rem, pastilles en pilule. Un seul défilement (marquee) sur la page.
- Sections, dans l'ordre : Hero (collage de couvertures de projets + logos), Projets (couvertures `.cover`), Ce que je fais (bento), À propos (photo + texte court), Contact. Pas d'eyebrows ni de numérotation.
- `.card` impose `position: relative` : pour positionner une carte en absolu, utiliser `style="position:absolute"`.
- Une capture s'ajoute via le champ `image` d'un projet dans `site.ts` (fichier webp dans `public/projects/`, ~1800 px de large).
- Les couvertures `.cover` sont abstraites (dégradé + icône) : les remplacer par de vraies captures anonymisées quand elles existent.
- Animations : entrée du hero, apparition au scroll, projecteur au survol des cartes, barre de progression, bandeau de logos. Toutes désactivées sous `prefers-reduced-motion`.
- Mobile-first ; navigation clavier (focus visible émeraude, lien d'évitement) ; contrastes AA ; meta et Open Graph dans `Base.astro`.
- Vérification visuelle : Chrome headless en captures 390 px (via iframe, la fenêtre headless est limitée à ~500 px, ajouter `--force-prefers-reduced-motion` pour éviter les états d'animation intermédiaires) et 1440 px.

## À compléter
Technologies exactes de chaque projet (marquées `À CONFIRMER` dans `site.ts`), capture du projet « Interface Paynala » à confirmer, `formEndpoint` du formulaire de contact (sinon repli par mailto), vraie `og-image` (PNG 1200×630 recommandé), domaine dans `astro.config.mjs`.
