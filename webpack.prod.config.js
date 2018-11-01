const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const extractTextWebpackPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    mode: 'production',
    entry: {
        app: './src/app.js'
    },
    output: {
        path: resolve('dist'),
        filename: 'js/[name]-[chunkhash:8].bundle.js',
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
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
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: {
                        loader: 'style-loader'
                    },
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
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
                            limit: 20000,
                            name: 'assets/images/[name]-[hash:5].[ext]',
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                            // mozjpeg: {
                            //     progressive: true,
                            //     quality: 65
                            // },
                            // // optipng.enabled: false will disable optipng
                            // optipng: {
                            //     enabled: false,
                            // },
                            // pngquant: {
                            //     quality: '65-90',
                            //     speed: 4
                            // },
                            // gifsicle: {
                            //     interlaced: false,
                            // },
                            // // the webp option will enable WEBP
                            // webp: {
                            //     quality: 75
                            // }
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
            'process.env': require('./config/prod.env')
        }),
        new cleanWebpackPlugin(['dist']),
        // new webpack.NamedModulesPlugin(),
        new htmlWebpackPlugin({
            // filename: 'index-[hash].html',
            template: 'index.html',
            // inject: 'head',
            // title: '大屏',
            minify: {
                removeComments: true, // 删除注释
                collapseWhitespace: true, // 删除空格
            }
        }),
        new extractTextWebpackPlugin({
            filename: 'css/[name].[chunkhash:8].bundle.css'
        })
    ]
}