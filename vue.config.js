module.exports = {
    devServer: {
        proxy: {
            '/proxy_api': {
                target: 'http://localhost:4040/',
                changeOrigin: true,
                pathRewrite: {
                    '^/proxy_api': ''
                }
            }
        }
    }
}