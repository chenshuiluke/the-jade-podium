const withCss = require("@zeit/next-css");
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    withImages,
    withCss,
  ],
  {webpack: (config, options) => {
 
    // modify the `config` here
    config.module.rules.push(
        {
            test: /\.css$/,
            loader: 'babel-loader!raw-loader'
        },
    )
    config.module.rules.push(
        {
            test: /\.scss$/,
            loader: 'babel-loader!raw-loader!sass-loader'
        }
    )

    return config;
  }
}
);