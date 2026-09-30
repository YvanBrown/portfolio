import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://example.com", // À remplacer par l'URL de déploiement
  vite: { plugins: [tailwindcss()] },
});
