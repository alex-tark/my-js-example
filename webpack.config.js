const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');
const path              = require('path');

const IS_DIST = (process.argv.indexOf('--dist') !== -1) ? true : false;

const config = {
  devServer: {
    port: 1987
  },
  entry: {
    app: './client/app.js',
    vendor: [ 'lodash' ]
  },
  output: {
    path: __dirname + '/client/public',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: /(client\/services)/,
        query: {
          presets: [
            'es2015'
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: /(client)\/(components)/
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.vue' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/templates/index.html',
      filename: 'dashboard.html',
      chunks  : [ 'vendor', 'app' ]
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    (IS_DIST) ? new webpack.optimize.UglifyJsPlugin() : function () {}
  ]
};

module.exports = config;
