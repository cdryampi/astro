// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import Vue from '@astrojs/vue';
import dotenv from 'dotenv';
import vercel from '@astrojs/vercel';
dotenv.config();

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    Vue(),
    tailwind(),
  ],
  adapter: vercel(),
});