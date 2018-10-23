const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextWebpackPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: resolve('dist'),
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: 'localhost',
        port: 9527,
        open: true,
        inline: true,
        publicPath: './',
        watchOptions: {
            pool: true
        }
    },
    output: {
        path: resolve('dist'),
        filename: 'js/[name]-[hash:8].bundle.js',
        chunkFilename: 'js/[name].[hash:8].chunk.js',
        publicPath: './'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'assets/[name]-[hash:5].[ext]',
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('./config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            // filename: 'index-[hash].html',
            template: 'index.html',
            // inject: 'head',
            title: '哈哈好的',
            // minify: {
            //     removeComments: true, // 删除注释
            //     collapseWhitespace: true, // 删除空格
            // },
        }),
        new extractTextWebpackPlugin({
            filename: 'css/[name].[hash:8].bundle.css'
        })
    ]
}