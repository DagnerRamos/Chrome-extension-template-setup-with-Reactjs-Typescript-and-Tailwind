const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
module.exports = {
    entry: {
        popup: path.resolve('./src/popup/index.tsx'),
        content: path.resolve('./src/content/index.tsx'),
        background: path.resolve('./src/background/background.ts'),
        form_example: path.resolve('./src/form_example/index.tsx')
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
        ...getHtmlPluginsFromChunks([
            'popup',
            'form_example'
        ]),
        new CleanWebpackPlugin ({
            cleanStaleWebpackAssets: false
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks(chunk){
                return chunk.name !== 'content'
            }
        }
    }
}
function getHtmlPluginsFromChunks(chunks){
    return chunks.map(chunk => new HtmlPlugin({
        title: 'Extension',
        filename: `${chunk}.html`,
        chunks:[chunk]
    }))
}