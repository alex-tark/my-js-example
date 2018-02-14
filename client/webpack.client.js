"use strict";

const webpack = require("webpack");
const path = require("path");

let entryPoint = './src/app.js';
let outputPath = path.resolve(__dirname, './build');
let fileName   = 'app.js'

let plugins = [];
let env     = process.env.WEBPACK_ENV;

if (env === 'production') {
  var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

  plugins.push(new UglifyJsPlugin({ minimize: true }));
  plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }
  ));

  fileName = fileName.replace(/js/g, 'min.js');
}

module.exports = {
  entry: {
    app: [ entryPoint ]
  },
  output: {
    path: outputPath,
    filename: fileName
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { "modules": false }]]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      "vue$": 'vue/dist/vue.esm.js'
    }
  },
  plugins
};
