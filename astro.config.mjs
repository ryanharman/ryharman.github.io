import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import { defineConfig, envField } from "astro/config";
import { parseArgs } from "node:util";
import { loadEnv } from "vite";

const {
  values: { mode },
} = parseArgs({
  options: { mode: { type: "string", default: process.env.NODE_ENV } },
  strict: false,
});

const { SITE_URL } = loadEnv(mode, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  env: {
    schema: {
      SITE_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
        url: true,
      }),
    },
  },
  site: SITE_URL ?? "http://localhost:4321",
  output: "server",
  integrations: [mdx(), sitemap(), tailwind()],
});
