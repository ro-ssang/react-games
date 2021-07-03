const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    name: "number-baseball-setting",
    mode: "development", // 실서비스: production
    devtool: "eval", // 실서비스: hidden-source-map
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
        publicPath: "/dist/",
        hot: true,
    },
};
