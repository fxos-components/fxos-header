module.exports = {
  entry: './src/fxos-header.js',
  output: {
    filename: 'fxos-header.js',
    library: 'FXOSHeader',
    libraryTarget: 'umd'
  },

  externals: {
    "fxos-component": "fxosComponent"
  }
}
