module.exports = {
  devServer: {
    port: 9123,
    open: true,
    proxy: 'http://localhost:7001'
  },
  chainWebpack (config) {
    config
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
  }
}
