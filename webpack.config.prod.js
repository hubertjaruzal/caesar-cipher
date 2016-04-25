const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const apiUrl = process.env.API_URL || '"http://localhost:4000/api/v1"';
const sidekiqUrl = process.env.SIDEKIQ_URL || '"http://localhost:4000/sidekiq"';
const esUrl = process.env.ELASTICSEARCH_FOUND_URL || '"http://localhost:9200"';
const esKeywordsIndex = process.env.KEYWORDS_INDEX || '"sellektor-keywords-development"';
const esProductsIndex = process.env.PRODUCTS_INDEX || '"sellektor-products-development"';
const esManualUpdatedProductsIndex = process.env.MANUAL_UPDATED_PRODUCTS_INDEX || '"sellektor-manual-updated-products-development"';
const devel = process.env.NODE_ENV === 'development' ? true : false;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './views/js/application',
  ],
  resolve: {
    alias: {
      material: 'react-mdl/extra/material.js',
    },
    root: path.resolve(__dirname, './views'),
    modulesDirectories: ['node_modules', 'bower_components'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'application-[hash].js',
    publicPath: '/',
  },
  module: {
    noParse: [
      /node_modules\/react-mdl\/extra\//,
    ],
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel'],
        include: path.join(__dirname, 'views'),
        exclude: /node_modules|bower_components/,
      },
      {
        test: /\.html$/,
        loader: 'raw',
      },

      // CSS, SCSS
      { test: /\.scss$/, include: /app.scss/, loader: ExtractTextPlugin.extract('style', 'css!sass') },

      // fonts
      { test: /\.woff2?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file' },
      { test: /\.eot$/, loader: 'file' },
      { test: /\.svg$/, loader: 'file' },
      { test: /\.(png|gif|jp(e)?g)$/, loader: 'file' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: apiUrl,
      SIDEKIQ_URL: sidekiqUrl,
      ELASTICSEARCH_URL: esUrl,
      PRODUCTS_INDEX: esProductsIndex,
      KEYWORDS_INDEX: esKeywordsIndex,
      DEVEL: devel,
      MANUAL_UPDATED_PRODUCTS_INDEX: esManualUpdatedProductsIndex,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app-[hash].css'),
    new HtmlWebpackPlugin({
      template: './views/index.html',
      inject: 'body',
      hash: true,
    }),
  ],
};
