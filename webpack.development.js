const common = require("./webpack.common");

module.exports = {
  ...common,
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  mode: "development",
  devtool: "inline-source-map",
};
