const postcssImport = require('postcss-import');
const postcssMediaMinmax = require('postcss-media-minmax');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const postcssSimpleVars = require('postcss-simple-vars');

module.exports = {
  syntax: 'postcss-scss',
  plugins: [postcssImport, postcssSimpleVars, postcssMediaMinmax, postcssNested, postcssPresetEnv],
};
