// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      darkMode: 'class'
    }
  },
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      title: 'Apex Road Marking Ltd. | Leading Thermoplastic Road Marking Contractor in Bangladesh',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Premier Government (RHD, LGED) & Commercial Road Marking Contractor in Bangladesh. Specializing in Thermoplastic Highway Markings, Factory Epoxies, Retro-Reflective Glass Beads & Airport Striping.'
        },
        {
          name: 'keywords',
          content: 'Road marking company in Bangladesh, Thermoplastic road marking contractor Bangladesh, RHD road marking contractor, LGED road striping, Parking lot marking contractor Bangladesh, Highway lane markings Dhaka Chittagong'
        }
      ]
    }
  }
})
