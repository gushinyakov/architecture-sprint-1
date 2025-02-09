const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');

const deps = require("./package.json").dependencies;

const printCompilationMessage = require('./compilation.config.js');

module.exports = (_, argv) => ({
    output: {
        publicPath: "http://localhost:8090/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 8090,
        historyApiFallback: true,
        watchFiles: [path.resolve(__dirname, 'src')],
        onListening: function (devServer) {
            const port = devServer.server.address().port

            printCompilationMessage('compiling', port)

            devServer.compiler.hooks.done.tap('OutputMessagePlugin', (stats) => {
                setImmediate(() => {
                    if (stats.hasErrors()) {
                        printCompilationMessage('failure', port)
                    } else {
                        printCompilationMessage('success', port)
                    }
                })
            })
        }
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "shared_feature",
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
                './ui/SafeComponent': './src/ui/SafeComponent.jsx',
                './event-emitter': './src/utils/event_emitter/eventEmitter.js',
                './event-emitter/inject': './src/utils/event_emitter/inject.js',
                './storage': './src/utils/storage/storage.js',
                './storage/inject': './src/utils/storage/inject.js'
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            },
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
        new Dotenv()
    ],
});
