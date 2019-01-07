const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

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
        // contentBase: resolve('dist'),
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: '10.7.51.29',
        disableHostCheck: true,
        port: 9527,
        open: true,
        inline: true,
        // lazy: true,
        // publicPath: './',
        watchOptions: {
            pool: true
        },
        proxy: {
            // 代理到YApi的Mock地址
            //'/': 'http://10.7.51.25:3000/mock/11'
            // 代理到联调地址
             '/': 'http://106.74.36.17:81/FullScreen'
        }
    },
    // output: {
    //     path: resolve('dist'),
    //     filename: 'js/[name]-[hash:8].bundle.js',
    //     chunkFilename: 'js/[name].[hash:8].chunk.js',
    //     publicPath: './'
    // },
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
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                include: /(src)/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        conservativeCollapse: false
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'assets/images/[name]-[hash:5].[ext]',
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
            },
            {
                test: /\.(eot|svg|ttf|woff2?)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'assets/fonts/[name]-[hash:5].[ext]',
                            publicPath: '../'
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
            // title: '大屏',
            // minify: {
            //     removeComments: true, // 删除注释
            //     collapseWhitespace: true, // 删除空格
            // },
        })
    ]
}