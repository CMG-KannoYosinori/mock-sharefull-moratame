/** 全 HTML を dist/contents/signup01.html のように .html のフラットなパスで出力する */
module.exports = {
  permalink: function (data) {
    return data.page.filePathStem + ".html";
  },
};
