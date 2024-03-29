// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/all";

// https://astro.build/config
export default defineConfig({
  site: "https://uokcs-19.github.io/",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: false
  },
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap()]
});