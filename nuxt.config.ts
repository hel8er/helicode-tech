// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/color-mode', '@nuxt/image-edge'],

  colorMode: {
    classSuffix: "",
  },
  app: {
    head: {
      charset: "utf-16",
      // viewport: 'width=400, initial-scale=1',
      title: "HeliCode",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
    },
  },
  content: {
    documentDriven: true
  },
  
})
