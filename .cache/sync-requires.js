const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nickhandy/Code/nicholashandy/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/nickhandy/Code/nicholashandy/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/nickhandy/Code/nicholashandy/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nickhandy/Code/nicholashandy/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/nickhandy/Code/nicholashandy/src/pages/my-files.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/nickhandy/Code/nicholashandy/src/templates/blog-post.js")))
}

