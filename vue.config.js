module.exports = {
  devServer: {
    port: 9123,
    open: true,
    proxy: 'http://localhost:7001'
  }
}
