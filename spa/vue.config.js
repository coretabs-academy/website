const FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
   path = require('path');
module.exports = {
   configureWebpack: {
      output: {
         publicPath: '/static/',
         path: path.resolve(__dirname, '../static')
      },
      plugins: [
         new FaviconsWebpackPlugin({
            logo: './src/assets/multimedia/icons/icon.jpg',
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
