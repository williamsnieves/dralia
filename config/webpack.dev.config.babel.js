const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config.babel')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = merge(baseConfig, {
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:9000/',
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: path.resolve(__dirname, '/dist') + '/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    port: 9000,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/[name].css')
  ]
})
