const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/styles.sass";'
      }
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/ghibli/'
    : '/'
})
