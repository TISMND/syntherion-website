module.exports = {
  layout: "layouts/post.njk",
  tags: ["posts"],
  eleventyComputed: {
    permalink: data => {
      // Skip writing the page entirely if it's a draft in production.
      // Eleventy 3.x sets ELEVENTY_RUN_MODE itself ("build" / "serve" / "watch"),
      // so we ALSO honor it; but during a non-serve build we treat it as "production"
      // unless ELEVENTY_INCLUDE_DRAFTS=true is explicitly passed in.
      const mode = process.env.ELEVENTY_RUN_MODE;
      const includeDrafts =
        mode === "serve" ||
        mode === "watch" ||
        process.env.ELEVENTY_INCLUDE_DRAFTS === "true";
      if (!includeDrafts && data.published !== true) {
        return false;
      }
      // Derive slug from input filename to preserve the date prefix in the URL
      // (Eleventy's page.fileSlug/filePathStem strip leading dates).
      const path = require("path");
      const base = path.basename(data.page.inputPath, path.extname(data.page.inputPath));
      return `/devlog/${base}/`;
    },
    // Also exclude drafts from collections in production.
    eleventyExcludeFromCollections: data => {
      const mode = process.env.ELEVENTY_RUN_MODE;
      const includeDrafts =
        mode === "serve" ||
        mode === "watch" ||
        process.env.ELEVENTY_INCLUDE_DRAFTS === "true";
      if (includeDrafts) return false;
      return data.published !== true;
    }
  }
};
