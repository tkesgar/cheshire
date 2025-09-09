import vueMarkdown from 'unplugin-vue-markdown/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: "cheshire"
      },
    },
  },
  vite: {
    vue: {
      include: [/\.vue$/, /\.md$/],
    },
    plugins: [
      vueMarkdown({
        include: /\.md(\?.+)?$/
      })
    ],
  },
  extensions: ['.md'],
})