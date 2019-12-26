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
      },
      '/cart': {
        target: 'http://10.2.157.49:3000',
        changeOrigin: true
        // pathRewrite: {
        //    '^/cart': 'cart'
        // }
      }
    }
  }
}
