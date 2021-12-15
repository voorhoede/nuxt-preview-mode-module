const { resolve } = require('path');

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [
    // eslint-disable-next-line global-require
    { handler: require('..') },
  ],
};
