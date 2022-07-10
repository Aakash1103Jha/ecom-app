const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 4002
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "cart",
            filename: "remoteEntry.js",
            exposes: {
                "./CartIndex": "./src/index.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};