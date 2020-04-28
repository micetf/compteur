const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TransformObjectRestSpread = require("babel-plugin-transform-object-rest-spread");
const isDev = process.env.NODE_ENV === "development";
const bootstrap = ["bootstrap"];
const react = ["react", "react-dom"];
const config = {
    entry: {
        main: "./src/index.js",
        bootstrap,
        react,
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "js/[name].bundle.js",
    },
    devtool: isDev ? "inline-source-map" : "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"],
                        plugins: [TransformObjectRestSpread],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: "../",
                }),
            },
            {
                test: /\.(jpe?g|gif|png|woff|woff2|ttf(\?v=\d+\.\d+\.\d+)?|svg(\?v=\d+\.\d+\.\d+)?)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            fallback: "file-loader",
                            name: "fonts.bundle.[ext]",
                            outputPath: "fonts",
                        },
                    },
                    "image-webpack-loader",
                ],
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "fonts.bundle.[ext]",
                            outputPath: "fonts",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/styles.bundle.css",
            allChunks: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["bootstrap", "react"],
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ],
};

module.exports = config;
