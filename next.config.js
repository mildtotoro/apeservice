const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const webpack = require('webpack');
// todo remoev withcss
const isProd = (process.env.NODE_ENV || 'production') === 'production';
const assetPrefix = isProd ? '/apeservice' : '';

module.exports = withSass(
  withImages({
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/products': { page: '/products' },
      };
    },
    publicRuntimeConfig: {
      assetPrefix,
    },
    assetPrefix,
    webpack: function (config) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg)$/, // for path fonts
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]"
          }
        }
      });
      return config;
    }
  }),
)
