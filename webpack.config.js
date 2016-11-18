var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.tsx'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$|\.tsx?$/,
                exclude: /node_modules/,
                // loader: 'react-hot!babel'
                loader: 'babel-loader'
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};