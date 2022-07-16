const common = require("./webpack.common");

module.exports = {
  ...common,
  devServer: {
    port: 3000,
  },
  mode: "development",
  devtool: "inline-source-map",
};
