require('dotenv').config();
const Path = require('path');
const Webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const Argv = require('yargs').argv;


/** Console output settings. */
const output_stats = {
  children: false,
  chunks: false,
  hash: false,
  version: false,
  modules: false,
  timings: false
}


module.exports = env => {
  return {    
    entry: {
      'bundle': [
        Path.resolve(__dirname, '..', '..', 'app', 'assets', 'javascripts', 'vhl', 'index.js')
      ]
    },

    output: {
      // Other outputs, e.g. CSS, are resolved based on the output path.
      path: Path.resolve(__dirname, '..', '..', 'app', 'assets'),
      filename: './javascripts/bundle.js',
      publicPath: Path.resolve(__dirname, '..', '..', 'app', 'assets')
    },

    mode: 'development',
    
    devtool: 'inline-source-map',

    // devServer: {
    //   contentBase: Path.resolve(__dirname, '..', 'dist'),
    //   port: 3000,
    //   hot: true,
    //   index: 'index.html',
    //   overlay: true,
    //   stats: output_stats,
    //   writeToDisk: true
    // },

    resolve: {
      extensions: [
        '.js', 
        '.jsx', 
        '.ts', 
        '.tsx', 
        '.css', 
        '.scss', 
        '.sass', 
        '.html', 
        '.hbs', 
        '.handlebars', 
        '.ejs',
        '.png',
        '.jpg',
        '.gif',
        '.svg',
        '.otf',
        '.ttf',
        '.woff'
      ],
      // alias: {
      //   // MUST be relative to this file.
      //   'scss-standards': Path.resolve(__dirname, '..', 'dev', 'app', 'config', 'scss', 'index.scss'),
      //   'Action_creators': Path.resolve(__dirname, '..', 'dev', 'app', 'action_creators'),
      //   'Config': Path.resolve(__dirname, '..', 'dev', 'app', 'config'),
      //   'Lib': Path.resolve(__dirname, '..', 'dev', 'app', 'lib'),
      //   'Store': Path.resolve(__dirname, '..', 'dev', 'app', 'store'),
      //   'Views': Path.resolve(__dirname, '..', 'dev', 'app', 'views'),
      // }
    },

    module: {
      rules: [
        /**
         * Vanilla JS Handling
         */
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {'modules': false}]
                ],
                'plugins': [
                  '@babel/plugin-transform-modules-commonjs',
                  '@babel/plugin-proposal-class-properties'
                ]
              }
            }
          ]
        },
        /**
         * Typescript Handling
         */
        {
          test: /\.(ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              loader: 'ts-loader',
            },
            {
              loader: 'tslint-loader',
              options: {
                configFile: Path.resolve(__dirname, '..', 'tslint.json'),
                failtOnHint: true,
                tsConfigfile: Path.resolve(__dirname, '..', 'tsconfig.json')
              }
            }
          ]
        },
        /**
         * JSX Handling
         */
        { 
          test: /\.jsx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                  {'modules': false}
                ]
              }
            }
          ]
        },
        /**
         * Handlebars Handling
         */
        {
          test: /\.(hbs|handlebars)$/,
          use: [
            {
              loader: 'handlebars-loader',
              options: {}
            }
          ]
        },
        /**
         * CSS Handling
         */
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader,
              options: {}
            },
            // {
            //   loader: 'style-loader',
            //   options: {}
            // },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]'
                },
                sourceMap: true
              } 
            },
            {
              loader: 'postcss-loader',
              options: { // emulates a postcss.config.js file
                plugins: [
                  require('autoprefixer')
                ]
              }
            },
            {
              loader: 'resolve-url-loader',
              options: {}
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        /**
         * Image Handling
         */
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '../img/[name].[ext]'
              }
            }
          ]
        },
        /**
         * Font Handling
         */
        {
          test: /\.(ttf|otf|woff)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '../font/[name].[ext]'
              }
            }
          ]
        }
      ]
    }, // end module

    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          './javascripts/bundle.js',
          './stylesheets/bundle.css'
        ],
        root: Path.resolve(__dirname, '..', '..'),
        dry: Argv.clean ? false : true
      }),
      new MiniCSSExtractPlugin({
        // based on the global output path
        filename: './stylesheets/[name].css'
      }),
      new StyleLintPlugin({
        emitErrors: false
      }),
      // new MiniCSSExtractPlugin({
      //   filename: '../css/[name].dev.css'
      // }),
      // new HtmlWebpackPlugin({
      //   filename: './../index.html',
      //   template: './dev/document/index.hbs',
      //   minify: false,
      //   inlineSource: '.(js|css)$'
      // }),
      // new HtmlWebpackInlineSourcePlugin(),
      // new Webpack.HotModuleReplacementPlugin()
    ],

    stats: output_stats
  }

} // end config