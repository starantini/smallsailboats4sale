// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  devServer: {
    static: {
      directory: __dirname + "/public",
    },
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    // alias: {
    //   path: require.resolve("path-browserify"),
    // },
    extensions: [".js", ".jsx"],
    // fallback: {
    //   path: false,
    //   url: require.resolve("url/"),
    //   assert: require.resolve("assert/"),
    // },
  },
  // plugins: [new NodePolyfillPlugin()],
};
