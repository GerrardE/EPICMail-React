const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'app_bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/
    },
    host: 'localhost',
    port: 5000,
    proxy: {
      '/api/v1/*': {
        target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx|js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      path: path.join(__dirname, './dist'),
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin({}),
    new Dotenv()
  ]
}
