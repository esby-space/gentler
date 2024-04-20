import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import math from "remark-math";
import katex from "rehype-katex";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  markdown: {
    remarkPlugins: [math],
    rehypePlugins: [katex]
  }
});