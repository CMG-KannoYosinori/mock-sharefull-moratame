module.exports = function (eleventyConfig) {
  // assets をそのまま出力にコピー
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
    templateFormats: ["html", "liquid"],
    htmlTemplateEngine: "liquid",
  };
};
