const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  // Mode:
  mode: "development",
  
  // Entry:
  entry: path.resolve(__dirname, "src/index.js"),
  
  // Output:
  output: {
    pathName: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "dist",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  
  // devServer
  devServer: {
    port: 90000,
    open: true,
    hot:true,
    contentBase: path.resolve(__dirname, "dist")
  },

  //loaders:
  module: {

    // Reglas
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: "node_modules"
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/"
          }
        }
      }
    ]
  },

  // Plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    })
  ],

  // Resolve Extensions
  resolve: {
    extensions: [
      ".js", ".jsx", ".json"
    ]
  },
}

module.exports = config;