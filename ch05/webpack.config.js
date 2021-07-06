const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    name: "rock-scissors-paper-setting",
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".jsx", ".js"],
    },

    entry: {
        app: ["./client"],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["react-refresh/babel"],
                    },
                },
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],

    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/",
    },

    devServer: {
        hot: true,
    },
};
