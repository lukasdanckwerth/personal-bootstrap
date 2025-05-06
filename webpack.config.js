const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                // quietDeps: true, // <- this suppresses deprecation warnings from node_modules
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
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
  resolve: {
    extensions: [".js"],
  },
};
