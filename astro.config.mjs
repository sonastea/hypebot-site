import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: { port: 3000, host: true },
  site: "https://hypebot.dev",
  integrations: [
    icon({
      include: {
        bx: ["*"],
      },
    }),
    sitemap(),
    tailwind(),
  ],
});
