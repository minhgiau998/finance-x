export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'finance-x',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Font Rubik
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap',
      },
      // Font Satoshi
      {
        rel: 'stylesheet',
        href: 'https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901,1,2&display=swap',
      },
    ],
    script: [
      // Font Awesome 6
      {
        src: 'https://kit.fontawesome.com/bba802c302.js',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Main
    '@/assets/css/main.css',
    // Colors
    '@/assets/css/colors.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Vue awesome swiper: https://www.npmjs.com/package/vue-awesome-swiper
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    // vue-scroll-reveal: https://www.npmjs.com/package/vue-scroll-reveal
    { src: '@/plugins/vue-scroll-reveal', ssr: false },
    // vue2-transitions: https://www.npmjs.com/package/vue2-transitions
    { src: '@/plugins/vue2-transitions', ssr: false },
    // vee-validate: https://www.npmjs.com/package/vee-validate
    { src: '@/plugins/vee-validate', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/base/',
      prefix: 'base',
    },
    {
      path: '~/components/home/',
      prefix: 'home',
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
