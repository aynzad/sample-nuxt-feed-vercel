export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sample-nuxt-feed-vercel',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  feed: [
    {
      path: '/feed.xml',
      type: 'rss2',
      create(feed) {
        feed.options = {
          title: 'My blog',
          link: 'https://esfahani.dev/feed.xml',
          description: 'This is my personal feed!',
        }

        feed.addCategory('Nuxt.js')

        feed.addContributor({
          name: 'Alireza Esfahani',
          email: 'alireza@esfahani.dev',
          link: 'https://esfahani.dev/',
        })
      },
    },
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/feed'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
