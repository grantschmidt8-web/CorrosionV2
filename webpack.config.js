// webpack.config.js
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  // If you have a client entry, set it here. Safe default keeps webpack happy.
  entry: './client/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    // Fix Node 22 + OpenSSL 3 md4 breakage
    hashFunction: 'xxhash64' // or 'sha256'
  }
};
