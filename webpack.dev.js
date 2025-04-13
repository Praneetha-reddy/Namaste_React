const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import HtmlWebpackPlugin
module.exports = {
    entry: './index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output file name
    },
    module: {
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
            },
        ],
    },
    devServer: {
        static: './dist', // Serve content from the dist directory
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Template HTML file
            filename: 'index.html', // Output HTML file name
        }),
    ],
    mode: 'development', // Set mode to development
};