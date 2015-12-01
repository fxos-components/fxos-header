'use strict';

var fs = require('fs');

console.log(fs.readdirSync('node_modules'));
console.log(fs.readdirSync('node_modules/test-utils/node_modules'));

module.exports = function(config) {
  config.set({
    basePath: '../',
    browsers: ['firefox_latest'],
    client: {
      captureConsole: true,
      mocha: {'ui': 'tdd'}
    },

    frameworks: [
      'mocha',
      'chai-sinon'
    ],

    customLaunchers: {
      firefox_latest: {
        base: 'FirefoxNightly',
        prefs: {
          'dom.webcomponents.enabled': true,
          'dom.w3c_touch_events.enabled': 1
        }
      }
    },

    files: [
      'bower_components/gaia-component/gaia-component.js',
      'bower_components/gaia-icons/gaia-icons.js',
      'bower_components/font-fit/font-fit.js',
      'gaia-header.js',
      'node_modules/test-utils/node_modules/axe-core/axe.min.js',
      'node_modules/test-utils/src/utils.js',
      'node_modules/test-utils/src/accessibility.js',
      'test/test-unit.js',
      {
        pattern: 'bower_components/gaia-icons/gaia-icons.css',
        included: false
      },
      {
        pattern: 'bower_components/gaia-icons/fonts/gaia-icons.ttf',
        included: false
      }
    ],

    proxies: {
      '/bower_components/': 'http://localhost:9876/base/bower_components/',
      '/node_modules/': 'http://localhost:9876/base/node_modules/'
    }
  });
};
