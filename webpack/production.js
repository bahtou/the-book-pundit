const path = require('path');
const webpack = require('webpack');

const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
// const GitRevisionPlugin = require('git-revision-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const UglifyWebpackPlugin = require('terser-webpack-plugin');
const cssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { cssPaths, host, port, postcssPaths } = require('./base-params');


module.exports = {
  entry: {
    vendor: [
      'react-hot-loader', 'react', '@hot-loader/react-dom', '@babel/polyfill'
    ]
  },

  recordsPath: path.resolve(__dirname, '..', '..', './records.json'),

  module: {
    rules: [
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
              localIdentName: '[folder]__[local]--[hash:base64:4]',
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

  optimization: {
    concatenateModules: true,
    namedModules: true,
    namedChunks: true,

    minimizer: [
      // new UglifyWebpackPlugin({ sourceMap: true })
      // new UglifyWebpackPlugin({
      //   parallel: true,
      //   sourceMap: true,
      //   extractComments: false,
      //   uglifyOptions: {
      //     ecma: 8,
      //     mangle: false,
      //     output: {
      //       comments: false,
      //       beautify: true
      //     },
      //     compress: {
      //       warnings: false,
      //       drop_console: false,
      //       drop_debugger: true,
      //       dead_code: true
      //     },
      //     warnings: true
      //   }
      // })
    ],

    runtimeChunk: {
      name: 'manifest'
    },

    splitChunks: {
      // chunks: "initial",
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    }
  },

  performance: {
    hints: 'warning',         // "error" or false are valid too
    maxEntrypointSize: 50000, // in bytes, default 250k
    maxAssetSize: 450000,     // in bytes
  },

  plugins: [
    new CleanWebpackPlugin('build', {}),

    new webpack.DefinePlugin({
      'process.env': {
        TBP_API: JSON.stringify('http://api.thebookpundit.app'),
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

    // new webpack.BannerPlugin({
      // banner: new GitRevisionPlugin().version()
    // }),

    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: false
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

    // new webpack.optimize.AggressiveSplittingPlugin({
    //   minSize: 10000,
    //   maxSize: 30000,
    // }),
  ]
};
