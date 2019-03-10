const path = require('path');
const webpack = require('webpack');

const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const TerserPlugin = require('terser-webpack-plugin');
const cssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { cssPaths, host, port, postcssPaths } = require('./base-params');


module.exports = {
  entry: {
    main: path.resolve(__dirname, '..', 'src/index.js'),
    BookReviews: path.resolve(__dirname, '..', 'src/components/BookReviews'),
    BookList: path.resolve(__dirname, '..', 'src/components/BookList'),
    vendor: [
      '@babel/polyfill', '@hot-loader/react-dom', 'react-hot-loader',
      'react', 'react-redux', 'redux-saga', 'react-loader-spinner'
    ]
  },

  recordsPath: path.resolve(__dirname, '..', './records.json'),

  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        include: cssPaths,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              import: false,
              url: false,
              modules: true,
              // localIdentName: '[folder]__[local]--[hash:base64:4]',
              localIdentName: '[hash:base64:4]',
              sourceMap: true,
              camelCase: false,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: loader => [
                cssImport({
                  root: postcssPaths,
                  path: ['assets', 'components'],
                  skipDuplicates: true
                }),
                postcssPresetEnv({
                  stage: 2,
                  features: {
                    'nesting-rules': true
                  }
                }),
                require('precss') // SASS-like markup,
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin('build', {
      root: path.resolve(__dirname, '..'),
      verbose:  true,
      dry:      false
    }),

    new webpack.DefinePlugin({
      'process.env': {
        TBP_API: JSON.stringify('https://api.thebookpundit.app'),
        NODE_ENV: JSON.stringify('production'),
        SCHEME: JSON.stringify('http'),
        HOST: JSON.stringify(host),
        PORT: port
      }
    }),

    new ExtractCssChunks({
      filename: '[name].[contenthash:4].css',
      chunkFilename: '[name].[contenthash:4].[id].css',
      orderWarning: true, // Disable to remove warnings about conflicting order between imports
      hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
      // reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
      cssModules: true // if you use cssModules, this can help.
    }),

    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        },
        // Run cssnano in safe mode to avoid
        // potentially unsafe transformations.
        safe: true
      },
      canPrint: true // set 'false' for stats analysis
    }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],

  optimization: {
    concatenateModules: true,
    namedModules: true,
    namedChunks: true,

    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          ie8: false,
          keep_classnames: false,
          keep_fnames: false,
          safari10: false,
        },
        extractComments: true
      })
    ],

    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minChunks: 1,
      maxSize: 0,
      name: true,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },

  performance: {
    hints: 'warning',         // "error" or false are valid too
    maxEntrypointSize: 50000, // in bytes, default 250k
    maxAssetSize: 450000,     // in bytes
  }
};
