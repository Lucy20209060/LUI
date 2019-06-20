// 'use strict'
// const path = require('path')
// const utils = require('./utils')
// const webpack = require('webpack')
// const config = require('../config')
// const merge = require('webpack-merge')
// // const baseWebpackConfig = require('./webpack.base.conf')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// const env = require('../config/prod.env')

// const vueLoaderConfig = require('./vue-loader.conf')

// function resolve (dir) {
//   return path.join(__dirname, '..', dir)
// }



// const baseWebpackConfig =  {
//   context: path.resolve(__dirname, '../'),
//   entry: {
//     lui: './src/components/index.js'
//   },
//   output: {
//     path: config.build.assetsRoot,
//     filename: '[name].js',
//     publicPath: process.env.NODE_ENV === 'production'
//       ? config.build.assetsPublicPath
//       : config.dev.assetsPublicPath
//   },
//   resolve: {
//     extensions: ['.js', '.vue', '.json'],
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js',
//       '@': resolve('src'),
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         options: vueLoaderConfig
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: utils.assetsPath('img/[name].[hash:7].[ext]')
//         }
//       },
//       {
//         test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: utils.assetsPath('media/[name].[hash:7].[ext]')
//         }
//       },
//       {
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
//         }
//       }
//     ]
//   },
//   node: {
//     // prevent webpack from injecting useless setImmediate polyfill because Vue
//     // source contains it (although only uses it if it's native).
//     setImmediate: false,
//     // prevent webpack from injecting mocks to Node native modules
//     // that does not make sense for the client
//     dgram: 'empty',
//     fs: 'empty',
//     net: 'empty',
//     tls: 'empty',
//     child_process: 'empty'
//   }
// }


// var webpackConfig = merge(baseWebpackConfig, {
//   module: {
//     rules: utils.styleLoaders({
//       sourceMap: config.build.productionSourceMap,
//       extract: true
//     })
//   },
//   devtool: config.build.productionSourceMap ? '#source-map' : false,
//   output: {
//     path: config.build.assetsRoot,
//     filename: utils.assetsPath('[name].min.js'),
//     // chunkFilename: utils.assetsPath('[id].js')
//   },
//   plugins: [
//     // http://vuejs.github.io/vue-loader/en/workflow/production.html
//     new webpack.DefinePlugin({
//       'process.env': env
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false,
//         drop_debugger: true,
//         drop_console: true
//       },
//       sourceMap: true
//     }),
//     // extract css into its own file
//     new ExtractTextPlugin({
//       filename: utils.assetsPath('[name].min.css')
//     }),
//     // Compress extracted CSS. We are using this plugin so that possible
//     // duplicated CSS from different components can be deduped.
//     new OptimizeCSSPlugin({
//       cssProcessorOptions: {
//         safe: true
//       }
//     }),
//     // generate dist index.html with correct asset hash for caching.
//     // you can customize output by editing /index.html
//     // see https://github.com/ampedandwired/html-webpack-plugin
//     // new HtmlWebpackPlugin({
//     //   filename: config.build.index,
//     //   template: 'index.html',
//     //   inject: true,
//     //   minify: {
//     //     removeComments: true,
//     //     collapseWhitespace: true,
//     //     removeAttributeQuotes: true
//     //     // more options:
//     //     // https://github.com/kangax/html-minifier#options-quick-reference
//     //   },
//     //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
//     //   chunksSortMode: 'dependency'
//     // }),
//     // split vendor js into its own file
//     // new webpack.optimize.CommonsChunkPlugin({
//     //   name: 'vendor',
//     //   minChunks: function (module, count) {
//     //     // any required modules inside node_modules are extracted to vendor
//     //     return (
//     //       module.resource &&
//     //       /\.js$/.test(module.resource) &&
//     //       module.resource.indexOf(
//     //         path.join(__dirname, '../node_modules')
//     //       ) === 0
//     //     )
//     //   }
//     // }),
//     // extract webpack runtime and module manifest to its own file in order to
//     // prevent vendor hash from being updated whenever app bundle is updated
//     // new webpack.optimize.CommonsChunkPlugin({
//     //   name: 'manifest',
//     //   chunks: ['vendor']
//     // }),
//     // copy custom static assets
//     new CopyWebpackPlugin([
//       {
//         from: path.resolve(__dirname, '../static'),
//         to: config.build.assetsSubDirectory,
//         ignore: ['.*']
//       }
//     ])
//   ]
// })

// if (config.build.productionGzip) {
//   var CompressionWebpackPlugin = require('compression-webpack-plugin')

//   webpackConfig.plugins.push(
//     new CompressionWebpackPlugin({
//       asset: '[path].gz[query]',
//       algorithm: 'gzip',
//       test: new RegExp(
//         '\\.(' +
//         config.build.productionGzipExtensions.join('|') +
//         ')$'
//       ),
//       threshold: 10240,
//       minRatio: 0.8
//     })
//   )
// }

// if (config.build.bundleAnalyzerReport) {
//   var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//   webpackConfig.plugins.push(new BundleAnalyzerPlugin())
// }

// module.exports = webpackConfig


var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

process.env.NODE_ENV = 'production';

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

const webpackBaseConfig = {
    // 加载器
    module: {
        // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
        rules: [
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?sourceMap'
                ]
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    }
};


module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './src/components/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'lui.min.js',
        library: 'dist',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new UglifyJsPlugin()
    ]
});
