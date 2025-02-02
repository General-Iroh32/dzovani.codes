const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Override vulnerable dependencies
      if (webpackConfig.resolve.alias) {
        webpackConfig.resolve.alias['nth-check'] = require.resolve('nth-check');
        webpackConfig.resolve.alias['postcss'] = require.resolve('postcss');
        webpackConfig.resolve.alias['css-select'] = require.resolve('css-select');
        webpackConfig.resolve.alias['svgo'] = require.resolve('svgo');
      } else {
        webpackConfig.resolve.alias = {
          'nth-check': require.resolve('nth-check'),
          'postcss': require.resolve('postcss'),
          'css-select': require.resolve('css-select'),
          'svgo': require.resolve('svgo')
        };
      }

      // Find and update sass-loader configuration
      webpackConfig.module.rules.forEach(rule => {
        if (rule.oneOf) {
          rule.oneOf.forEach(oneOf => {
            if (oneOf.test && oneOf.test.toString().includes('scss|sass')) {
              const sassLoader = oneOf.use.find(use => 
                use.loader && use.loader.includes('sass-loader')
              );
              if (sassLoader) {
                sassLoader.options = {
                  implementation: require('sass'),
                  sourceMap: true,
                  additionalData: `
                    @use "sass:math";
                    @use "src/variables" as *;
                    @use "src/mixins" as *;
                  `,
                  sassOptions: {
                    outputStyle: 'compressed',
                    includePaths: [path.join(__dirname, 'src')]
                  },
                  webpackImporter: false
                };
              }
            }
          });
        }
      });

      // SVG configuration with updated SVGO
      webpackConfig.module.rules = webpackConfig.module.rules.map(rule => {
        if (rule.oneOf) {
          rule.oneOf = rule.oneOf.map(oneOfRule => {
            if (oneOfRule.test && oneOfRule.test.toString().includes('svg')) {
              return {
                ...oneOfRule,
                use: [
                  {
                    loader: '@svgr/webpack',
                    options: {
                      svgoConfig: {
                        plugins: [
                          {
                            name: 'preset-default',
                            params: {
                              overrides: {
                                removeViewBox: false
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              };
            }
            return oneOfRule;
          });
        }
        return rule;
      });

      return webpackConfig;
    }
  }
}; 