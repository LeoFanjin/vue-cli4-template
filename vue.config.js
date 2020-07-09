const webpack = require('webpack');
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

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
  // publicPath: '/ap/web/',
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
    }
  }, */
  configureWebpack: (config) => {
    config.resolve.modules.push('common_modules');
    // 初始配置里已有类型：'.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'
    config.resolve.extensions.push('.ts', '.tsx');
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        // Popper: ['popper.js', 'default'],
        _: 'underscore',
        G: path.join(__dirname, './src/config/g.js')
      })
    );
    if (process.env.NODE_ENV === 'production') {
      config.devtool = 'cheap-module-source-map';
      const productionGzipExtensions = ['html', 'js', 'css'];
      config.plugins.push(
        // Gzip压缩
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      );
      // 打包分析工具
      if (process.env.npm_config_report) {
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
          .BundleAnalyzerPlugin;
        config.plugins.push(new BundleAnalyzerPlugin());
      }
    }
  }
  /* chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '平台';
      return args;
    });
  } */
};
