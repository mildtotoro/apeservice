const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
// todo remoev withcss
module.exports = withSass(
  withImages({

    exportPathMap: function () {
      return {
        '/': { page: '/' },
        // '/': { page: '/' },
      };
    },

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
  })
);
