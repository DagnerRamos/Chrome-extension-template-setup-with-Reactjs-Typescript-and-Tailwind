const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
module.exports = {
    mode : "development",
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('./src/popup/popup.tsx'),
        content: path.resolve('./src/content.ts'),
        background: path.resolve('./src/background/background.ts'),
    },
    module: {
        rules: [
            {
                use:"ts-loader",
                test: /\.tsx$/,
                exclude: /node_modules/
            },
            {
                use:"ts-loader",
                test: /\.ts$/,
                exclude: /node_modules/
            },
            {
                use:[
                    'style-loader', 
                    'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            ident: 'postcss',
                            plugins: [tailwindcss, autoprefixer]
                        }
                    }
                }],
                test: /\.css$/i,
            }
        ]
    },
    plugins:[
        new CopyPlugin({
            patterns:[
                {
                    from:path.resolve('src/manifest.json'), 
                    to: path.resolve('dist')
                },
                {
                    from: path.resolve('src/assets/images/'),
                    to: path.resolve('dist')
                }
            ]
        }),
        new HtmlPlugin({
            title: 'ReactJs PopUp',
            filename: 'popup.html',
            chunks: ['popup']
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js'
    }
}