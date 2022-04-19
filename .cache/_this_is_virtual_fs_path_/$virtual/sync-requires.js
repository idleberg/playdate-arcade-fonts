
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jan/Repositories/playdate-arcade-fonts/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/jan/Repositories/playdate-arcade-fonts/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/jan/Repositories/playdate-arcade-fonts/src/pages/index.tsx"))
}

