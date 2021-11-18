module.exports = {
  mode: "development",
  devServer: {
    static: "./dist",
  },
  devtool: "source-map",
  entry: {
    addButton: "./src/scripts/addButton.js",
    page1: "./src/scripts/scriptForPage1.js",
    page2: "./src/scripts/scriptForPage2.js",
    page3: "./src/scripts/scriptForPage3.js",
  },
  output: {
    filename: "[name].js",
  },
};
