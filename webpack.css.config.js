const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.scss", // Only SCSS entry
  output: {
    path: path.resolve(__dirname, "dist"),
    // No JS file needed, but Webpack requires a JS output, so we name it dummy
    filename: "ignore.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into file
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "custom.css", // Output CSS file
    }),
  ],
  // Skip JS optimization
  optimization: {
    minimize: false,
  },
};
