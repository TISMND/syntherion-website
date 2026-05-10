const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("CNAME");

  // Posts are sorted newest-first by date. When two posts share a date
  // (e.g. a one-shot drafting session), the optional `order` frontmatter
  // field acts as a tiebreaker. LOWER `order` means EARLIER in the intended
  // reading sequence. The collection sorts descending, so posts with a
  // higher `order` value end up first in the array.
  const sortPosts = (a, b) => {
    const dateDiff = b.date - a.date;
    if (dateDiff !== 0) return dateDiff;
    const aOrder = a.data.order ?? 0;
    const bOrder = b.data.order ?? 0;
    return bOrder - aOrder;
  };

  // All posts (already filtered by published flag in posts.11tydata.js)
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByTag("posts").sort(sortPosts);
  });

  // Subset collections per type
  for (const type of ["origins", "tools", "devlog"]) {
    eleventyConfig.addCollection(type, (collectionApi) => {
      return collectionApi
        .getFilteredByTag("posts")
        .filter(p => p.data.postType === type)
        .sort(sortPosts);
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

  // isDevMode global — true in `--serve`/`--watch` modes, or when
  // ELEVENTY_INCLUDE_DRAFTS=true is set. Mirrors src/posts/posts.11tydata.js.
  // Computed at config-load time so the template sees a boolean, not a function.
  eleventyConfig.addGlobalData("isDevMode",
    process.env.ELEVENTY_RUN_MODE === "serve" ||
    process.env.ELEVENTY_RUN_MODE === "watch" ||
    process.env.ELEVENTY_INCLUDE_DRAFTS === "true"
  );

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
