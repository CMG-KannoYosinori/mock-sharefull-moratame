module.exports = function (eleventyConfig) {
  // assets をそのまま出力にコピー
  eleventyConfig.addPassthroughCopy("src/assets");

  // GitHub Pages などサブパス公開用（デプロイ時: PATH_PREFIX=/mock-sharefull-moratame）
  eleventyConfig.addGlobalData("pathPrefix", () => process.env.PATH_PREFIX || "");

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
