'use strict';

const path = require('path');

module.exports = {
  target: 'node',
  externals: /^(?![.]+\/)/,
  context: path.join(__dirname, 'lib'),
  entry: './Index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [{
      use: [{
        loader: 'ts-loader'
      }]
    }]
  }
};
