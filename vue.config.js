const PROXY_TARGETS = {
  SERVICE_ONE: 'http://localhost:3000/',
  SERVICE_TWO: 'http://1.2.3.4:8989/'
}

module.exports = {
  assetsDir: 'static',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '^/api/one': {
        target: PROXY_TARGETS.SERVICE_ONE,
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/api/one': '' }
      },
      '^/api/two/': {
        target: PROXY_TARGETS.SERVICE_TWO,
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/api/two': '' }
      }
    }
  },
  lintOnSave: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Kumar Gaurav'
    }
  }
}
