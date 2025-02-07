// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import Vue from '@astrojs/vue';


// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    Vue(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});