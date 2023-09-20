module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addPassthroughCopy("assets/scripts/**.*");
  eleventyConfig.addPassthroughCopy("assets/images/**.*");
  eleventyConfig.addPassthroughCopy("assets/fonts/**.*");
  eleventyConfig.addPassthroughCopy("assets/icons/**.*");
  eleventyConfig.addPassthroughCopy("assets", "assets");
  // Creates the extension for use
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css", // optional, default: "html"

    // `compile` is called once per .scss file in the input directory
    compile: async function (inputContent) {
      let result = sass.compileString(inputContent);

      // This is the render function, `data` is the full data cascade
      return async (data) => {
        return result.css;
      };
    },
  });
};