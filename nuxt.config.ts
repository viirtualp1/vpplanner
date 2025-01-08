import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    define: {
      'process.env.SUPABASE_URL': `'${process.env.SUPABASE_URL}'`,
      'process.env.SUPABASE_KEY': `'${process.env.SUPABASE_KEY}'`,
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
