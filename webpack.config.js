const ChromeExtensionReloader = require('webpack-chrome-extension-reloader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    popup: path.resolve(__dirname, 'src', 'js', 'popup.js'),
    background: path.resolve(__dirname, 'src', 'js', 'background.js'),
    options: path.resolve(__dirname, 'src', 'js', 'options.js'),
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
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'src', 'manifest.json'), flatten: true },
      { from: path.resolve(__dirname, 'src', 'img'), to: 'img' },
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'html', 'options.html'),
      filename: 'options.html',
      chunks: ['options'],
    }),
  ],
};
