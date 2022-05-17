const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/styles.sass";'
        // prependData: '@import "@/assets/styles.sass";'
      }
    }
  }
})
