
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    browsers: ['firefox_latest'],
    reporters: ['dots'],
    urlRoot: '/karma/',
    client: {
      mocha: { 'ui': 'tdd' }
    },

    customLaunchers: {
      firefox_latest: {
        base: 'FirefoxNightly',
        prefs: {
          'dom.webcomponents.enabled': true
        }
      }
    },

    files: [
      'bower_components/gaia-icons/gaia-icons.js',
      'bower_components/pressed/pressed.js',
      'lib/font-fit.js',
      'gaia-header.js',
      'test/unit/mocks/mock_font_fit.js',
      'test/unit/test.js',
      'test/unit/font_fit_test.js',
      {
        pattern: 'bower_components/gaia-icons/style.css',
        included: false
      },
      {
        pattern: 'bower_components/gaia-icons/fonts/gaia-icons.ttf',
        included: false
      }
    ],

    proxies: {
      '/bower_components/': 'http://localhost:9876/base/bower_components/' },
  });
};
