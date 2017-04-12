module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/ngRichtext.min.js'
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: 'html-loader'}
    ]
  }
};