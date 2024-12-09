const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 7000,
  },
  chainWebpack: config => {
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .end();
  }
})

const path = {
  development: {
    API_BASE_URL: 'http://localhost:8090'
  },
  production: {
    API_BASE_URL: ' http://192.168.112.167:8090'
  }
}