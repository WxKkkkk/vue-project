module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/lct': {
        target: 'https://mobileway.lecuntao.com',
        // ws: true,
        changeOrigin: true
      }
    }
  }
}
