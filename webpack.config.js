'use strict';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: ["./src/index.js"],
        vendor: [
            "react",
            "react-dom",
            "classnames"
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist/'),
        path: path.join(__dirname, './dist/'),
        // compress: true,
        port: 3000,
        inline: true
    },
    output: {
        path: path.join(__dirname, './dist/'),
        publicPath: '/dist/',
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass")
            },
            {
                test: /\.(woff2|woff|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: [
                    "url-loader?name=assets/fonts/[name]_[hash].[ext]"
                ]
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'url-loader?name=assets/img/[name]_[hash].[ext]&limit=10000'
                ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new CopyWebpackPlugin([{
            from: './src/assets/tpl/index.html',
            to: './index.html'
        }]),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     "window.jQuery": 'jquery',
        //     _: 'underscore',
        //     i18next: 'i18next'
        // }),
        // new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        // new webpack.DefinePlugin({
        //     DEFAULT_STR: JSON.stringify('—'),
        //     VERSION: JSON.stringify(VERSION)
        // })
    ],
    resolve: {
        root: path.join(__dirname, './src')
    },
    resolveLoader: {
        root: path.join(__dirname, './node_modules')
    }
};