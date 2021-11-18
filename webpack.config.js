module.exports = {
  mode: "development",
  devServer: {
    static: "./dist",
    compress: true,

    port: 9000,
  },
  devtool: "source-map",
  entry: {
    addButton: "./src/scripts/addButton.ts",
    page1: "./src/scripts/scriptForPage1.ts",
    page2: "./src/scripts/scriptForPage2.ts",
    page3: "./src/scripts/scriptForPage3.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,

        use: "ts-loader",

        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
  },
};
