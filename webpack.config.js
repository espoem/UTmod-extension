const ChromeExtensionReloader = require('webpack-chrome-extension-reloader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  config = {
    devtool: 'source-map',
    entry: {
      popup: path.resolve(__dirname, 'src', 'js', 'popup.js'),
      background: path.resolve(__dirname, 'src', 'js', 'background.js'),
      // options: path.resolve(__dirname, 'src', 'js', 'options.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        node: 'current',
                      },
                    },
                  ],
                ],
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: /node-modules/,
        },
        {
          test: /\.(png|jpeg|jpg|svg|gif)$/,
          use: ['file-loader'],
          exclude: /node-modules/,
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
          exclude: /node-modules/,
        },
      ],
    },
    plugins: [
      new ChromeExtensionReloader(),
      new CleanWebpackPlugin(['dist']),
      new CopyWebpackPlugin([
        {
          from: path.resolve(
            __dirname,
            'src',
            argv.mode === 'production' ? 'manifest.json' : 'manifest.dev.json',
          ),
          flatten: true,
          to: 'manifest.json',
        },
        { from: path.resolve(__dirname, 'src', 'img'), to: 'img' },
        { from: path.resolve(__dirname, 'src', 'post_templates'), to: 'post_templates' },
      ]),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'html', 'popup.html'),
        filename: 'popup.html',
        chunks: ['popup'],
      }),
      // new HtmlWebpackPlugin({
      //   template: path.resolve(__dirname, 'src', 'html', 'background.html'),
      //   filename: 'background.html',
      //   chunks: ['background'],
      // }),
      // new HtmlWebpackPlugin({
      //   template: path.resolve(__dirname, 'src', 'html', 'options.html'),
      //   filename: 'options.html',
      //   chunks: ['options'],
      // }),
    ],
  };
  return config;
};
