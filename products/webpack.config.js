const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 4001
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "products",
            filename: "productsRemote.js",
            exposes: {
                "./ProductsIndex": "./src/index.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};