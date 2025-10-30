// webpack.config.js
module.exports = {
  // …your existing config…
  output: {
    // keep other output settings
    hashFunction: 'xxhash64' // or 'sha256'
  }
};
