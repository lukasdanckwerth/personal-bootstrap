const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    "custom-bootstrap": "./src/index.js",
    // styles: "./src/index.scss",
  },
  output: {
    filename: "[name].js", // Outputs: app.js
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader", // Optional, if you use modern JS
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS to a separate file
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  resolve: {
    extensions: [".js", ".scss"],
  },
  devServer: {
    static: "./",
    hot: true,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
  // optimization: {
  //   minimize: false, // 🔴 disable all minimizers, including CSS
  // },
};
