module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/main.scss";`
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader'
        },
        {
          test: /\.yaml$/,
          use: 'js-yaml-loader',
        }
      ]
    }
  }
}
