// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/app.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Kernstra PDF Web SDK · Nuxt example',
      meta: [{ name: 'description', content: 'Nuxt 4 example for the Kernstra PDF Web SDK: view, annotate, edit and fill PDFs in the browser.' }],
    },
  },
  runtimeConfig: {
    // Filled from NUXT_PUBLIC_KERNSTRA_LICENSE: in .env for `nuxt dev`,
    // in the server's environment in production.
    public: { kernstraLicense: '' },
  },
});
