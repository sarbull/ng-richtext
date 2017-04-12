const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
  filename: 'ngRichtext.css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'ngRichtext.min.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    extractLess
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          {loader: 'babel-loader'}
        ],
      },
      {
        test: /\.less$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: extractLess.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }],
          fallback: "style-loader"
        })
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader?$!expose-loader?jQuery'
      }
    ]
  }
};