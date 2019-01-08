module.exports = {
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
