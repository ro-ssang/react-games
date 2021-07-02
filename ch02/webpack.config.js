const path = require("path");

module.exports = {
    name: "wordrelay-setting",
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".js", ".jsx"],
    },

    entry: {
        app: ["./client"],
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"], // preset-env: 환경(브라우저)에 맞게 바꿔준다.
                    },
                },
            },
        ],
    },

    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
    },
};
