const withCss = require("@zeit/next-css");
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");
const Dotenv = require('dotenv-webpack');
const path = require('path');
require('dotenv').config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});

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

    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config;
  }
}
);