# &lt;gaia-header&gt; [![](https://travis-ci.org/gaia-components/gaia-header.svg)](https://travis-ci.org/gaia-components/gaia-header)

## Installation

```bash
$ bower install gaia-components/gaia-header
```

## Examples

- [Example](http://gaia-components.github.io/gaia-header/)

## Tests

1. Ensure Firefox Nightly is installed on your machine.
2. `$ npm install`
3. `$ npm test`

If your would like tests to run on file change use:

`$ npm run test-dev`

## Localization

If choosing to use the built in action-button you may wish to localize the content within. You can do this by providing a specicial `.l10n-action` child node.

```html
<gaia-header action="back">
  <span class="l10n-action" aria-label="Back">Localized text</span>
  <h1>title</h1>
</gaia-header>
```

## RTL

Header content will appear 'right-to-left' if the document states so (`<html dir="rtl">`). Things won't work correctly if the `dir` attribute is on any other node.