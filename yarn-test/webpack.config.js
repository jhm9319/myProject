const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath:'/dist/',
        filename: "js/app.js"
    },
    module: {
        rules: [
            {//react语法处理
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", 'react']
                    }
                }
            },
            {//css文件处理
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {//scss文件处理
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {//图片文件处理
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
            {//字体文件处理
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //处理html插件
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        //生成独立css模块
        new ExtractTextPlugin('css/[name].css'),
        //提取公用模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        })
    ],
    devServer:{
        port:8013
    }
}