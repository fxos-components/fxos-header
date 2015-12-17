module.exports = {
  entry: './src/fxos-header.js',
  output: {
    filename: 'fxos-header.js',
    library: 'FXOSHeader',
    libraryTarget: 'umd'
  },

  externals: {
    'fxos-component': {
      root: 'fxosComponent',
      commonjs: 'fxos-component',
      commonjs2: 'fxos-component',
      amd: 'fxos-component'
    }
  }
};
