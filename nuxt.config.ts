import vueMarkdown from "unplugin-vue-markdown/vite";
import tailwindcss from "@tailwindcss/vite";
import markdownItPrism from "markdown-it-prism";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@bootstrap-vue-next/nuxt",
    "@vueuse/nuxt",
  ],
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: "cheshire",
      },
    },
  },
  vite: {
    vue: {
      include: [/\.vue$/, /\.md$/],
    },
    plugins: [
      vueMarkdown({
        include: /\.md(\?.+)?$/,
        markdownItSetup(md) {
          md.use(markdownItPrism);
        },
      }),
      tailwindcss(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            // Silence Bootstrap deprecations
            "color-functions",
            "global-builtin",
            "import",
          ],
        },
      },
    },
  },
  extensions: [".md"],
  experimental: {
    entryImportMap: true,
    inlineRouteRules: true,
  },
  css: ["~/assets/styles/main.scss", "~/assets/styles/tailwind.css"],
});
