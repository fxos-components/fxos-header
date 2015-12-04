# &lt;fxos-header&gt; [![](https://travis-ci.org/fxos-components/fxos-header.svg)](https://travis-ci.org/fxos-components/fxos-header)

## Installation

```bash
$ npm install fxos-header
```

## Examples

- [Example](http://fxos-components.github.io/fxos-header/)

## Usage

### Optimizing with `title-start` & `title-end`

If your header contains custom buttons you can optimize setup time by providing the title's start and end offsets. This avoids the component having to read dimensions from the DOM, which can be costly.

```html
<fxos-header action="back" title-start="50" title-end="100">
  <h1>title</h1>
  <button data-icon="add"></button>
  <button data-icon="settings"></button>
</fxos-header>
```

### `not-flush`

```html
<fxos-header action="back" not-flush>
  <h1>title</h1>
</fxos-header>
```

By default the fxos-header component assumes that it is flush with the `window` edge when fitting text and centering the title. When the component is not flush with the window edge, the `not-flush` attribute should be used.

### `no-font-fit`

```html
<fxos-header action="back" no-font-fit>
  <h1>title</h1>
</fxos-header>
```

Prevents font-fit logic from running. Will run when the attribute is removed. You may choose to use this for app specific performance optimizations.

### `ignore-dir`

```html
<fxos-header action="back" ignore-dir>
  <h1>title</h1>
</fxos-header>
```

Force the older behavior of fxos-header, where the whole header is always displayed in LTR mode.

### Localization

If choosing to use the built in action-button you may wish to localize the content within. You can do this by providing a special `l10n-action` child node. This node will be 'distributed' inside the action-button acting as `textContent` for screen-readers.

```html
<fxos-header action="back">
  <span l10n-action aria-label="Back">Localized text</span>
  <h1>title</h1>
</fxos-header>
```

## Developing locally

1. `git clone https://github.com/fxos-components/fxos-header.git`
2. `cd fxos-header`
3. `npm install` (NPM3)
4. `npm start`

## Readiness

- [x] Accessibility ([@yzen](https://github.com/yzen))
- [ ] Test Coverage
- [ ] Performance
- [ ] Visual/UX
- [x] RTL ([@fabi1cazenave](https://github.com/fabi1cazenave))

## Tests

1. Ensure Firefox Nightly is installed on your machine.
2. To run unit tests you need npm >= 3 installed.
3. `$ npm install`
4. `$ npm run test-unit`

If your would like tests to run on file change use:

`$ npm run test-unit-dev`

If your would like run integration tests, use:

`$ export FIREFOX_NIGHTLY_BIN=/absolute/path/to/nightly/firefox-bin`
`$ npm run test-integration`

## Lint check

Run lint check with command:

`$ npm run test-lint`
