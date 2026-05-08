const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("CNAME");

  // All posts (already filtered by published flag in posts.11tydata.js)
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("posts")
      .sort((a, b) => b.date - a.date);
  });

  // Subset collections per type
  for (const type of ["origins", "tools", "devlog"]) {
    eleventyConfig.addCollection(type, (collectionApi) => {
      return collectionApi
        .getFilteredByTag("posts")
        .filter(p => p.data.postType === type)
        .sort((a, b) => b.date - a.date);
    });
  }

  // readableDate filter for templates
  eleventyConfig.addFilter("readableDate", (d) => {
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric"
    });
  });

  // date filter — Eleventy 3.x doesn't bundle one. Only yyyy-MM-dd is needed.
  eleventyConfig.addFilter("date", (d, format) => {
    const dt = new Date(d);
    if (format === "yyyy-MM-dd") {
      return dt.toISOString().slice(0, 10);
    }
    return dt.toISOString();
  });

  eleventyConfig.addFilter("limit", (arr, n) => Array.isArray(arr) ? arr.slice(0, n) : arr);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
