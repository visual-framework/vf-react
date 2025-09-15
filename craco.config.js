const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const oneOfRule = webpackConfig.module.rules.find(rule => Array.isArray(rule.oneOf));
      if (oneOfRule) {
        oneOfRule.oneOf.forEach(rule => {
          if (
            rule.loader &&
            rule.loader.includes("babel-loader") &&
            rule.exclude
          ) {
            const originalExclude = rule.exclude;
            rule.exclude = (input) => {
              if (
                typeof input === "string" &&
                input.replace(/\\/g, "/").includes("node_modules/@visual-framework/vf-chatbot")
              ) {
                return false;
              }
              if (typeof originalExclude === "function") {
                return originalExclude(input);
              }
              if (Array.isArray(originalExclude)) {
                return originalExclude.some(ex => input.includes(ex));
              }
              return false;
            };

            // Add this: force automatic runtime for our package
            if (!rule.options) rule.options = {};
            if (!rule.options.overrides) rule.options.overrides = [];
            rule.options.overrides.push({
              test: /@visual-framework[\\\/]vf-chatbot/,
              presets: [
                [
                  "@babel/preset-react",
                  { runtime: "automatic" }
                ]
              ]
            });
          }
        });
      }
      return webpackConfig;
    }
  }
};