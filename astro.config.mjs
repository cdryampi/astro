// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import Vue from '@astrojs/vue';
import dotenv from 'dotenv';
import vercel from '@astrojs/vercel';
dotenv.config();

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    Vue(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});