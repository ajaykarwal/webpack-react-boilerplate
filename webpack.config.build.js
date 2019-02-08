const webpack = require('webpack');
const path = require("path");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
    mode: "production",

    devtool: "source-map",

    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[hash].js",
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
    ],
});
