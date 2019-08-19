const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

module.exports = withSass(
  withImages({
    webpack: function(config) {
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

// module.exports = withSass(
//   withImages(
//     withCSS({
//       webpack: function(config) {
//         config.module.rules.push({
//           test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
//           use: {
//             loader: "url-loader",
//             options: {
//               limit: 100000,
//               name: "[name].[ext]"
//             }
//           }
//         });
//         return config;
//       }
//     })
//   )
// );

// module.exports = withCSS({
//   webpack: function(config) {
//     config.module.rules.push({
//       test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
//       use: {
//         loader: "url-loader",
//         options: {
//           limit: 100000,
//           name: "[name].[ext]"
//         }
//       }
//     });
//     return config;
//   }
// });

// const withSass = require("@zeit/next-sass");
// const withCSS = require("@zeit/next-css");
// const commonsChunkConfig = require("@zeit/next-css/commons-chunk-config");
// module.exports = withSass(
//   withCSS({
//     webpack: config => commonsChunkConfig(config, /\.(sass|scss|css)$/)
//   })
// );
