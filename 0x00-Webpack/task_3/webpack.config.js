const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        header: "./header/header.js",
        body: "./body/body.js",
        footer: "./footer/footer.js"
        //main: ["./header/header.js", "./body/body.js", "./footer/footer.js"]
    },
    output: {
        filename: 'header.bundle.js',
        filename: 'body.bundle.js',
        filename: 'footer.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ]
    },
    devServer: {
        open: true,
        port: 8564
    }
};