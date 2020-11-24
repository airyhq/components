const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => ({
  mode: 'production',
  target: 'web',
  bail: true, // stop compilation on first error
  output: {
    path: path.resolve('dist'),
    library: '@airyhq/components',
    globalObject: 'this',
    libraryTarget: 'umd',
    filename: 'index.js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    // Extract all styles into one sheet
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
        },
      },
    },
  },

  devtool: 'none',

  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
    '@crello/react-lottie': '@crello/react-lottie',
    'emoji-mart': 'emoji-mart',
    'react-autosize-textarea': 'react-autosize-textarea',
    'react-modal': 'react-modal',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(mjs|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: false,
          presets: [
            [
              '@babel/preset-env',
              {
                modules: 'auto',
              },
            ],
          ],
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]_[local]-[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              titleProp: true,
              svgoConfig: {
                plugins: {
                  removeViewBox: false,
                },
              },

              // adapted from the default template
              // https://github.com/gregberge/svgr/blob/master/packages/babel-plugin-transform-svg-component/src/index.js
              template: ({template}, opts, {imports, interfaces, componentName, props, jsx, exports}) => {
                const plugins = ['jsx'];
                if (opts.typescript) {
                  plugins.push('typescript');
                }
                const typeScriptTpl = template.smart({plugins});
                return typeScriptTpl.ast`
                                    ${imports}
                                    ${interfaces}
                                    function ${componentName}(${props}) {
                                      props = { title: '', ...props };
                                      return ${jsx};
                                    }
                                    ${exports}
                                    `;
              },
            },
          },
          // Use url-loader to be able to inject into img src
          // https://www.npmjs.com/package/@svgr/webpack#using-with-url-loader-or-file-loader
          'url-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'production'",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new OptimizeCSSAssetsPlugin(),
    new DtsBundlePlugin(),
  ],
});

function DtsBundlePlugin() {}
DtsBundlePlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    var dts = require('dts-bundle');

    dts.bundle({
      name: '@airyhq/components',
      main: 'src/index.d.ts',
      out: '../dist/index.d.ts',
      removeSource: true,
      outputAsModuleFolder: true, // to use npm in-package typings
    });
  });
};
