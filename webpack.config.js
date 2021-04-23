const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',  
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, './src/assets/images/'),
    },
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { url: false, sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } },
            ],
        },
        {
        test: /\.(jpe?g|png|gif|svg|ico|gltf)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
            outputPath: './src/assets/images/'
        },
      },
        {
            test: /\.html$/i,
            loader: 'html-loader',
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
                }
            }
        },
    ],
    },

    plugins: [
        new HtmlWebpackPlugin({ 
            title: 'brameforge',
            template: './src/index.html',
            }),
        new MiniCssExtractPlugin({ 
            filename: '[name].css' 
            }),
    ],
};