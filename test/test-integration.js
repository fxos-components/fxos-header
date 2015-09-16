/* global marionette, setup, test */

'use strict';

var assert = require('chai').assert;
marionette.plugin('helper', require('marionette-helper'));

marionette('gaia-header', function() {
  var client = marionette.client({
    profile: {
      prefs: {
        // Disable first time run UI
        'browser.feeds.showFirstRunUI': false,
        // Disable default browser check
        'browser.shell.checkDefaultBrowser': false,
        // Disable UI tutorial
        'browser.uitour.enabled': false,
        // Enable chrome debugging
        'devtools.chrome.enabled': true,
        'devtools.debugger.remote-enabled': true,

        // Load integration test page on startup
        'startup.homepage_welcome_url': __dirname + '/test-integration.html',

        // Allow loading test resources oudside of test/ directory
        // (e.g. bower-components)
        'security.fileuri.strict_origin_policy': false,

        // Enable web components
        'dom.webcomponents.enabled': true,
        // Enable touch events
        'dom.w3c_touch_events.enabled': 1
      }
    },
    desiredCapabilities: { raisesAccessibilityExceptions: true }
  });

  var headers = [
    { selector: '#header-0' },
    { selector: '#header-1' },
    { selector: '#header-2' },
    { selector: '#header-3' },
    { selector: '#header-4' }
  ];

  setup(function() {
    headers.forEach(function(header) {
      header.element = client.findElement(header.selector);
    });
  });

  test('gaia-header is present and visible to the assistive technology',
    function() {
      headers.forEach(function(header) {
        // Element was found
        assert.ok(header.element, header.selector);
        // Element is visible to all (inlcuding assistive technology)
        assert.isTrue(header.element.displayed());
      });
    });

  test('gaia-header action buttons are accessible (no error thrown when ' +
    'clicking and tapping)', function() {
    ['click', 'tap'].forEach(function(action) {
      headers.forEach(function(header) {
        // Action button is part of the gaia-header's shadow tree
        client.switchToShadowRoot(header.element);
        // The following checks for action button element will be performed on
        // tap/click:
        // * visible to the assistive technology
        // * enabled to the assistive technology
        // * not obstructed via pointer-events set to none
        // * focusable by the assistive technology
        // * named/labelled for the assistive technology
        // * support user actions (click/tap/etc) performed via assistive
        //   technology
        var actionButton = client.helper.waitForElement('.action-button');
        try {
          actionButton[action]();
        } catch (err) {
          // If gaia-header action button does not satisfy any of the above
          // listed conditions, marionette will raise an
          // ElementNotAccessibleError exception when
          // raisesAccessibilityExceptions is set to true.
          assert(false, 'gaia-header action button should be clickable and ' +
            'tappable including via the assistive technology: ' +
            header.selector);
        }
        // Step out of the shadow tree
        client.switchToShadowRoot();
      });
    });
  });

  test('gaia-header additional and custom buttons and links are accessible ' +
    '(no error thrown when clicking and tapping)', function() {
    ['click', 'tap'].forEach(function(action) {
      // Test additional and custom (non-action header buttons) buttons and
      // anchors
      ['#setting', '#custom'].forEach(function(selector) {
        var control = client.helper.waitForElement(selector);
        try {
          // The following checks for control element will be performed on
          // tap/click:
          // * visible to the assistive technology
          // * enabled to the assistive technology
          // * not obstructed via pointer-events set to none
          // * focusable by the assistive technology
          // * named/labelled for the assistive technology
          // * support user actions (click/tap/etc) performed via assistive
          //   technology
          control[action]();
        } catch (err) {
          // If gaia-header additonal button or anchor does not satisfy any of
          // the above listed conditions, marionette will raise an
          // ElementNotAccessibleError exception when
          // raisesAccessibilityExceptions is set to true.
          assert(false, 'gaia-header additional button or anchor should be ' +
            'clickable and tappable including via the assistive ' +
            'technology: ' + selector);
        }
      });
    });
  });
});
