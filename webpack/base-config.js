const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');


const {
  appEntry, contextPath, fontPathEntry,
  imagePathEntry, jsPaths, outputPath,
  resolveAliasPaths, resolveAliasModules
} = require('./base-params');


const baseConfig = {
  context: contextPath,

  entry: {
    app: [ appEntry ]
  },

  output: {
    path: outputPath,
    publicPath: './',
    filename: 'file.[name].[hash:4].js',
    chunkFilename: 'chunk.[name].[chunkhash:4].js',
    globalObject: 'this'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: jsPaths,
        use: [{
          loader: 'babel-loader',
          options: {
            // This is a feature of `babel-loader` for Webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true
          }
        }]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '..', `src/assets/vendors`),
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: `${contextPath}/assets`
          }
        }]
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)$/,
        include: fontPathEntry,
        use: [{
          loader: 'url-loader',
          options: {
            // Limit at 50Kb. Above that it emits separate files
            limit: 50000,
            name: './fonts/[name].[hash:4].[ext]'
          }
        }]
      },
      {
        test: /\.(png|svg|jpg)$/,
        include: imagePathEntry,
        use: [{
          loader: 'url-loader',
          options: {
            // Limit at 25Kb. Above that it emits separate files
            limit: 25000,
            name: './images/[name].[hash:4].[ext]'
          }
        }]
      }
    ]
  },

  plugins: [
    new ErrorOverlayPlugin(),

    new CaseSensitivePathsPlugin({
      debug: false
    }),

    new HtmlWebpackPlugin({
      template: 'index.html',
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1'
      },
      inject: true,
      hash: true,
      cache: true,
      showErrors: true,
      chunksSortMode: 'dependency'
    }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],

  optimization: {
    noEmitOnErrors: true,
    namedModules: true,
    namedChunks: true
  },

  resolve: {
    alias: resolveAliasPaths,
    extensions: ['.js'],
    enforceExtension: false,
    modules: resolveAliasModules
  }
};


module.exports = baseConfig;
