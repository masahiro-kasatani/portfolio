export default {
  target: 'static',

  router: {
    base: '/portfolio/',
  },

  head: {
    title: 'ポートフォリオ | MASAHIRO KASATANI',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }],
  },

  css: ['~/static/css/reset.css', '~/static/css/style.css'],

  components: [
    {
      path: '@/components/',
      pathPrefix: false,
    },
  ],

  plugins: ['~/plugins/vue-scrollto'],

  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },

  generate: {
    dir: 'docs',
  },
};
