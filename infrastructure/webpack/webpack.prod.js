// infrastructure/webpack/webpack.prod.js

const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack'); // For DefinePlugin
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

module.exports = merge(common, {
  mode: 'production', // Production mode
  devtool: false, // No source maps in production
  output: {
    path: path.resolve(PROJECT_ROOT, 'build'), // Output directory
    filename: '[name].[contenthash].js', // Hashed filename for production
    chunkFilename: '[name].[contenthash].js', // Hashed chunk filenames
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans the dist folder before building
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.NAME': JSON.stringify('production'),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // Use multi-process parallel running
        terserOptions: {
          compress: {
            drop_console: true, // Remove console logs
          },
          output: {
            comments: false, // Remove comments
          },
        },
        extractComments: false, // Do not extract comments to separate files
      }),
    ],
    splitChunks: {
      chunks: 'all', // Split vendor and commons
    },
  },
});
