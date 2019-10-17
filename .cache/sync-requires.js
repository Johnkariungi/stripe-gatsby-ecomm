const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/admin/Projects/node/stripe-gatsby-ecomm/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/admin/Projects/node/stripe-gatsby-ecomm/src/pages/404.js"))),
  "component---src-pages-canceled-js": hot(preferDefault(require("/Users/admin/Projects/node/stripe-gatsby-ecomm/src/pages/canceled.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/admin/Projects/node/stripe-gatsby-ecomm/src/pages/index.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/admin/Projects/node/stripe-gatsby-ecomm/src/pages/success.js"))),
  "component---src-pages-products-js": hot(preferDefault(require("/Users/admin/Projects/node/stripe-gatsby-ecomm/src/pages/products.js")))
}

