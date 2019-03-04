const webpack = require('webpack');

const {
  contentBasePath, cssPaths, host, port, postcssPaths
} = require('./base-params');

const cssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');


module.exports = {
  devtool: 'eval-source-map',

  devServer: {
    https: false,
    host,
    port,

    open: false,                  // Open the page in browser
    contentBase: contentBasePath, // Content not from webpack is served from here

    historyApiFallback: true,
    compress: true,

    hot: true,

    // Don't refresh if hot loading fails. Good while
    // implementing the client interface.
    hotOnly: true,
    inline: true,

    //capturing compilation related warnings and errors
    overlay: true,

    publicPath: '/',
    // --progress - [assets, children, chunks, colors, errors, hash, timings, version, warnings]
    stats: {
      assets: true,

      // Add build date and time information
      builtAt: true,

      // Add information about cached (not built) modules
      cached: true,

      // Show cached assets (setting this to `false` only shows emitted files)
      cachedAssets: true,

      children: true,
      chunks: false,
      colors: true,

      // Display the distance from the entry point for each module
      depth: false,
      // Display the entry points with the corresponding bundles
      entrypoints: false,

      errors: true,
      errorDetails: true, //depends on {errors: true}
      hash: true,
      modules: false,
      moduleTrace: true,
      performance: true,
      providedExports: true,
      publicPath: true,
      reasons: true,
      source: true,
      usedExports: false,
      timings: true,
      version: true,
      warnings: true
    }
  },

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
              // localIdentName: '[folder]__[local]--[hash:base64:4]',
              localIdentName: '[folder]__[local]',
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
                //   // features: {
                //   //   'alpha-hex-colors': true,
                //   //   'custom-environment-variables': true,
                //   //   'custom-media-queries': true,
                //   //   'custom-properties': true,
                //   //   'custom-selectors': true,
                //   //   'font-variant-property ': true,
                //   //   'gap-properties ': true,
                //   //   'nesting-rules': true,
                //   //   'media-query-ranges': true,
                //   //   ':focus-visible-pseudo-class': true,
                //   //   ':focus-within-pseudo-class': true,
                //   // }
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
    namedModules: true,
    namedChunks: true
  },

  plugins: [
    // see webpack.EnvironmentPlugin(["NODE_ENV"])
    new webpack.DefinePlugin({
      'process.env': {
        HOLA: JSON.stringify('hola desde el base-config'),
        NODE_ENV: JSON.stringify('development'),
        SCHEME: JSON.stringify('http'),
        HOST: JSON.stringify(host),
        PORT: port
      }
    }),

    // Enable the plugin to let webpack communicate changes
    // to WDS. --hot sets this automatically!
    // Enable multi-pass compilation for enhanced performance
    // in larger projects. Good default.
    new webpack.HotModuleReplacementPlugin({
      multiStep: false
    }),

    new ExtractCssChunks({
      filename: '[name].[contenthash:4].css',
      chunkFilename: '[name].[contenthash:4].[id].css',
      orderWarning: true
    }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 2, // Must be greater than or equal to one
      minChunkSize: 1000
    })
  ]
};



