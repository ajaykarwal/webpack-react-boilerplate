const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    mode: "development",

    devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    output: {
        pathinfo: true,
        publicPath: '/',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].map'
    },

    devServer: {
        // Options: https://webpack.js.org/configuration/dev-server/
        publicPath: '/',
        host: 'localhost',
        port: 9000,
        open: true, // Open the default web browser
        hot: true,  // hot module replacement. Depends on HotModuleReplacementPlugin
        contentBase: path.join(process.cwd(), 'dist'), // static file location
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        stats: 'normal',
    }

});
