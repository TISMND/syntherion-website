// Sidecar data for src/drafts.njk.
// Returns permalink: false in production so Eleventy skips writing the page,
// matching the same dev-mode gating used by src/posts/posts.11tydata.js.
const isDevMode = () =>
  process.env.ELEVENTY_RUN_MODE === "serve" ||
  process.env.ELEVENTY_RUN_MODE === "watch" ||
  process.env.ELEVENTY_INCLUDE_DRAFTS === "true";

module.exports = {
  eleventyComputed: {
    permalink: () => isDevMode() ? "/drafts/" : false,
    eleventyExcludeFromCollections: () => !isDevMode()
  }
};
