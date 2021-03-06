// Karma configuration
// Generated on Tue Aug 25 2015 14:35:52 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'dist/js/ozpIwc-bus.js',
      'test/lib/*.js',
      'test/tests/unit/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'test/tests/unit/specs/clientSpec.js'
    ],

    proxies: {},
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'dist/js/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'], // Add 'coverage' for karma-coverage output


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    captureTimeout: 100000,

    // to avoid DISCONNECTED messages
    browserDisconnectTimeout : 10000, // default 2000
    browserNoActivityTimeout : 60000, //default 10000

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true     // If browser does not capture in given timeout [ms], kill it
  });
};
