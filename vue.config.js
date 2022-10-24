const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Penguin",
      },
    },
  },
};

module.exports = {
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
  },
};
