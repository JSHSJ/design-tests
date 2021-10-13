const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: (config, { configType }) => {
    const path = require("path");

    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ["style-loader", "css-loader?modules=true"],
    //   include: path.resolve(__dirname, "../"),
    // });

    config.plugins.push(new VanillaExtractPlugin());

    return config;
  },
};
