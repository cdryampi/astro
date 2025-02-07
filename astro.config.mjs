import { defineConfig } from "astro/config";
import Vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/server"; // ✅ Importar correctamente con "/server"

export default defineConfig({
  output: "server", // ✅ Importante para Vercel Serverless
  adapter: vercel(),
  integrations: [
    Vue(),
    tailwind(),
  ],
});
