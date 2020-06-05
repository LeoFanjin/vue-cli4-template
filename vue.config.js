const webpack = require('webpack');

module.exports = {
  lintOnSave: true,
  devServer: {
    port: 3000
    /* overlay: {
      warnings: true,
      errors: true
    },
    disableHostCheck: true */
    // proxy: 'http://localhost:3000'
    /* proxy: {
      'http://111.33.152.130:10102/iiprp': {
        target: 'http://localhost:3000',
        // pathRewrite: {"^/api": ""} // 将/api重写为""空字符串
      }
    } */
  },
  /* configureWebpack: {
    devtool: 'source-map',
    resolve: {
      modules: ['node_modules', 'common_modules'],
      extensions: [ '.ts', '.tsx', '.js', '.json', '.vue']
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /node_modules/,
            name: 'vendor',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]js[\\/]/,
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true
          },
          runtimeChunk: {
            name: 'manifest'
          }
        }
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        _: 'underscore'
      }),
      // new webpack.DefinePlugin({
      //   _config_: JSON.stringify(config_),
      // })
    ]
  }, */
  configureWebpack: config => {
    config.resolve.modules.push('common_modules');
    // 初始配置里已有类型：'.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'
    config.resolve.extensions.push('.ts', '.tsx');
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        // Popper: ['popper.js', 'default'],
        _: 'underscore'
      })
    );
  }
};
