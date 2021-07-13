const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'kakao pay',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
}
