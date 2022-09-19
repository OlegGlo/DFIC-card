const webpack = require('webpack');
const path = require('path');

const config = {



    ignoreWarnings: [
        {
            file: './node_modules/react-awesome-reveal/dist/module.js',
            message: 'Module Warning',
        },
        (warning, compilation) => true
    ],

    entry: [
        '&quiet=true',
        'react-hot-loader/patch',
        './src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        'static': {
            directory: './dist'
        }
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
};

module.exports = config;