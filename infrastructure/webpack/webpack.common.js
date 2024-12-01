// infrastructure/webpack/webpack.common.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

module.exports = {
  entry: path.resolve(PROJECT_ROOT, 'application', 'index.js'), // Entry point
  output: {
    filename: 'bundle.js', // Output file name
    publicPath: '/', // Public URL
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // For .js and .jsx files
        exclude: /node_modules/,
        use: 'babel-loader', // Transpile with Babel
      },
      {
        test: /\.module\.css$/, // For CSS Modules
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]', // Naming convention
              },
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/, // For global CSS
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'], // Use standard loaders
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // For images and assets
        type: 'asset/resource', // Webpack 5 asset module
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_ROOT, 'infrastructure', 'index.html'), // HTML template
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(PROJECT_ROOT, 'infrastructure', 'public'),
          to: 'public', // Copies to dist/public
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
