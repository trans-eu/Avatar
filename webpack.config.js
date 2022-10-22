const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
            {
                test: /\.(sass|css|scss)$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                        },
                    }, 'postcss-loader', 'sass-loader'],
            }
        ],
    },
};
