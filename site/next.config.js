const withTM = require('next-transpile-modules');
const { files } = require('./manifest.json');

module.exports = withTM({
  transpileModules: files,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config;
  }
})
