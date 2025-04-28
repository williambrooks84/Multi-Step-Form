// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static', // Assurez-vous que la cible est 'static'
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  css: ['@/assets/css/main.css'],
  router: {
    base: '/Multi-Step-Form/'
  }
});