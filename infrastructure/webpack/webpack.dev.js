// infrastructure/webpack/webpack.dev.js

const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack'); // For DefinePlugin
const common = require('./webpack.common.js');

const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

module.exports = merge(common, {
  mode: 'development', // Development mode
  devtool: 'cheap-module-source-map', // Source maps
  devServer: {
    static: {
      directory: path.resolve(PROJECT_ROOT, 'dist'), // Serve from dist
    },
    compress: true,
    port: 3000,
    historyApiFallback: true, // Support for SPA routing
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement
  },
  output: {
    path: path.resolve(PROJECT_ROOT, 'dist'), // Output directory
    filename: 'bundle.js', // Static filename for development
    chunkFilename: '[name].bundle.js', // Optional: Add chunk filenames for better debugging
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.NAME': JSON.stringify('development'),
    }),
  ],
});
