const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  public: path.join(__dirname, 'public')
}

const chunks = ['index', 'about'];

module.exports = {
  entry: {
    index: PATHS.app + '/Index',
    about: PATHS.app + '/About'
  },
  output: {
    path: PATHS.public,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.public,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT || 5000
  },
  resolves: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract( "style-loader", 'css-loader?sourceMap!less-loader!autoprefixer-loader')
      },
      {
        test: /\.js?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        },
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      chunks: chunks,
      minChunks: chunks.length
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      filename: 'index.html',
      appMountId: 'root',
      hash: true,
      chunks: ['vendors', 'index'],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      filename: 'about.html',
      appMountId: 'root',
      hash: true,
      chunks: ['vendors', 'about'],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}