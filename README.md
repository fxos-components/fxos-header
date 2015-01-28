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

## Optimizing with `title-start` & `title-end`

If your header contains custom buttons you can optimize setup time by providing the title's start and end offsets. This avoids the component having to read dimensions from the DOM, which can be costly.

```html
<gaia-header action="back" title-start="50" title-end="100">
  <h1>title</h1>
  <button data-icon="add"></button>
  <button data-icon="settings"></button>
</gaia-header>
```

## `not-flush`

```html
<gaia-header action="back" not-flush>
  <h1>title</h1>
</gaia-header>
```

By default the gaia-header component assumes that it is flush with the `window` edge when fitting text and centering the title. When the component is not flush with the window edge, the `not-flush` attribute should be used.

### `no-font-fit`

```html
<gaia-header action="back" no-font-fit>
  <h1>title</h1>
</gaia-header>
```

Prevents font-fit logic from running. Will run when the attribute is removed. You may choose to use this for app specific performance optimizations.

## Localization

If choosing to use the built in action-button you may wish to localize the content within. You can do this by providing a specicial `.l10n-action` child node.

```html
<gaia-header action="back">
  <span class="l10n-action" aria-label="Back">Localized text</span>
  <h1>title</h1>
</gaia-header>
```
