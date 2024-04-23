// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: "Lexcob",
      htmlAttrs: {
        lang: "es",
      },

      
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Especialistas Contabilidad Ecuador" },
        { name: "format-detection", content: "telephone=no" },
        { name: "keywords", content: "Lexcob, Contadores Ecuador, Sistema CRM en Ecuador" },
      ],
      
    },
  },
  devtools: { enabled: true },


  runtimeConfig: {
    public: {
      
      MAILTO: process.env.MAILTO || "websecuador.net@gmail.com",
  
    
    },
  },



  css: ['~/assets/css/main.css', "~/assets/scss/_swiper.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


  plugins: [
  
    "~/plugins/toastification.client.ts", 
    // "~/plugins/pinia-persist.client.ts", 
    // "@/plugins/vue-google-map.client.ts",


  ],

  components: true,
  modules: ["nuxt-swiper"],

  svgo: {
    autoImportPath: '~/assets/icons/'
  },


  swiper: {
    
  },
  build: {
    transpile: ["defu"],
  },


  nitro: {
    prerender: {
      // Workaround for "Error: [404] Page not found: /manifest.json"
      failOnError: false,
    },
  },

  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Products page generated on demand, revalidates in background, cached until API response changes
    '/pages': { swr: true },
    // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
    '/components': { swr: true},
    // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    '/assets': { swr: true },
    // Redirects legacy urls
    '/pages/nosotros': { redirect: '/nosotros' }
  },

  sourcemap: {
    server: true,
    client: true,
  }



})

