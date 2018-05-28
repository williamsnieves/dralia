const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    modules: [
      'lodash'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '../[name]-manifest.json')
    })
  ]
}
