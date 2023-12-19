/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: '/using-dsg',
    component: require.resolve('./src/templates/using-dsg.js'),
    context: {},
    defer: true,
  })
}

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

// Polyfill
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new NodePolyfillPlugin()
    ],
    resolve: {
      fallback: {
        util: require.resolve('util/'),
        url: require.resolve(`url/`),
        assert: require.resolve(`assert/`),
        crypto: require.resolve(`crypto-browserify`),
        os: require.resolve(`os-browserify/browser`),
        https: require.resolve(`https-browserify`),
        http: require.resolve(`stream-http`),
        stream: require.resolve('stream-browserify'),
        // path: false,
        // vm: false,
        // zlib: false,
      },
    },
  })
}