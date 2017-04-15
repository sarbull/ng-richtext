var webpackConfig = require('./webpack.config.js');

// Karma configuration
// Generated on Sat Apr 15 2017 14:37:29 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basePath: './',
    frameworks: [
      'jasmine'
    ],
    files: [
      'src/index.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/**/*.spec.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'src/index.js': ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
};
