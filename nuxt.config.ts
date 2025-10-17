// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'starter-basic',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Starter Nuxt 4 boilerplate with Tailwind CSS 4 and Nuxt UI 4.' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },

  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-svgo'],

  ui: {
    global: true,
  },

  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: '.',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    compilation: {
      strictMessage: false,
    },
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      '@tailwindcss/nesting': {},
    },
  },
})
