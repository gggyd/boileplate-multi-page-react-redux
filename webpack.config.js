const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  public: path.join(__dirname, 'public')
}

const chunks = ['index', 'about', 'bank'];

const common = {
  entry: {
    index: PATHS.app + '/Index',
    about: PATHS.app + '/About',
    bank: PATHS.app + '/Bank'
  },
  output: {
    path: PATHS.public,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
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
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      filename: 'bank.html',
      appMountId: 'root',
      hash: true,
      chunks: ['vendors', 'bank'],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new ExtractTextPlugin('css/[name].css')
  ]
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
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
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      new CleanPlugin(['public'], {
        // verbose: false
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
