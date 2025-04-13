const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: '[name].js', // Output file name
        clean: true
    },
    module:{
        rules: [
            {
                test: /\.js$/, // Apply this rule to .js files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Use Babel to transpile JavaScript
                },
            },
            {
                test: /\.css$/, // Apply this rule to .css files
                use: ['style-loader', 'css-loader'], // Use these loaders for CSS
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Template HTML file
            filename: 'index.html', // Output HTML file name
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups:{
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    mode: 'production', // Set mode to production
}