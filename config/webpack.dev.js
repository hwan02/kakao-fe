const webpack = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')
const paths = require('./paths')

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    liveReload: false
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: true },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
