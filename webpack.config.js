// webpack.config.js
const path = require('path');
module.exports = {
  mode: 'production',
  entry: './client/index.js',             // adjust if your client entry differs
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    hashFunction: 'xxhash64'              // fixes Node 22 md4 removal
  }
};
