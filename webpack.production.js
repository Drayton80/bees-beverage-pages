const common = require("./webpack.common");

module.exports = {
  ...common,
  mode: "production",
  optimization: {
    minimize: true,
  },
};
