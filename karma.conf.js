
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    browsers: ['firefox_web_components'],
    // basePath: '../..',

    files: [
      'bower_components/gaia-component-utils/index.js',
      'script.js',
      'test/*.js',
      { pattern: 'style.css', included: false },
      { pattern: 'examples/*', included: false },
      { pattern: 'bower_components/gaia-icons/style.css', included: false }
    ],

    proxies: {
      '/': 'http://localhost:9876/base/'
      // '/bower_components/': 'http://localhost:9876/base/bower_components/'
    },

    client: {
      mocha: { ui: 'tdd' }
    },

    customLaunchers: {
      firefox_web_components: {
        base: 'FirefoxNightly',
        prefs: {
          'dom.webcomponents.enabled': true
        }
      }
    }
  });
};
