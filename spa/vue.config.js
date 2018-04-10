const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
module.exports = {
    configureWebpack: {
/*         output: {
            path: path.resolve(__dirname, 'dist')
        }, */
        plugins: [
            new FaviconsWebpackPlugin({
                logo: './src/assets/multimedia/icon.jpg',
                prefix: 'i_cons/',
                persistentCache: true,
                inject: true,
                background: '#fff',
                title: 'Coretabs Academy',
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    opengraph: true,
                    twitter: true,
                    yandex: true,
                    windows: true
                }
            })
        ]
      }
}
