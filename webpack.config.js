const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
        vendor: ['echarts']
    },
    output: {
        // publicPath: __dirname + 'dist/',
        path: resolve('dist'),
        // filename: 'js/[name]-[chunkhash].bundle.js',
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
                use: ExtractTextWebpackPlugin.extract({
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
                        'postcss-loader'
                    ]
                })
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
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('./config/dev.env')
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            // filename: 'index-[hash].html',
            template: 'index.html',
            // inject: 'head',
            title: '哈哈好的',
            // minify: {
            //     removeComments: true, // 删除注释
            //     collapseWhitespace: true, // 删除空格
            // }
        }),
        new ExtractTextWebpackPlugin({
            filename: 'css/[name].[hash:8].bundle.css'
        })
    ],
    optimization: {
        //打包 第三方库
        //打包 公共文件
        splitChunks: {
            cacheGroups: {
                vendor: {//node_modules内的依赖库
                    chunks: "all",
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    minChunks: 1, //被不同entry引用次数(import),1次的话没必要提取
                    maxInitialRequests: 5,
                    minSize: 0,
                    priority: 100,
                    // enforce: true?
                },
                common: {// ‘src/js’ 下的js文件
                    chunks: "all",
                    test: /[\\/]src[\\/]js[\\/]/,//也可以值文件/[\\/]src[\\/]js[\\/].*\.js/,  
                    name: "common", //生成文件名，依据output规则
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0,
                    priority: 1
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    }
}