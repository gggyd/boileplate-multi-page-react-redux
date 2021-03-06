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

const chunks = ['index', 'about', 'bank', 'paysdk'];

const common = {
  entry: {
    index: PATHS.app + '/Index',
    about: PATHS.app + '/About',
    bank: PATHS.app + '/Bank',
    paysdk: PATHS.app + '/PaySDK'
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
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      chunks: chunks,
      minChunks: chunks.length
    }),
    new ExtractTextPlugin('css/[name].css')
  ]
}

chunks.forEach((chunk, index) => {
  let htmlWebpackPlugin = new HtmlWebpackPlugin({
    inject: false,
      template: require('html-webpack-template'),
      filename: chunk + '.html',
      appMountId: 'root',
      hash: true,
      chunks: ['vendors', ...[chunk]],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
  })

  common.plugins.push(htmlWebpackPlugin);
})


if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.public,
      historyApiFallback: true,
      hot: true,
      inline: true,
      proxy: {
        '/api/*': {
            target: 'http://127.0.0.1:9999',
            secure: false
        }
      },
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
