
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'google-site-verification', content: 'AV6k9uxlDcEFufTdl0rM5Aetr5U9uvxCRcw0u3gYf8I' },
      { name: 'webgains-site-verification', content: 'ambcr9xy' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: '/bootstrap.min.css' },
      // { rel: 'stylesheet', href: '/font-awesome.min.css' },
      // { rel: 'stylesheet', href: '/custom.css' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-106211927-10',
        async: true
      },
      {
        src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        async: true
      },
      {
        innerHTML: `
        (adsbygoogle = window.adsbygoogle || []).push({ 
          google_ad_client: 'ca-pub-2669162039689132',
          enable_page_level_ads: true                 
        });`
      },
      {
        innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag() {                         
            dataLayer.push(arguments);            
        }                                         
        gtag('js', new Date());                   
                                                  
        gtag('config', 'UA-106211927-10');`
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'green' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/bootstrap.min.css',
    '~assets/font-awesome.min.css',
    '~assets/custom.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
