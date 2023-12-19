/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // polyfill: false,
  // resolve: {
  //   fallback: {
  //     'util': false
  //   }
  // },
  siteMetadata: {
    title: `Inst News`,
    description: `Follow our activities with Inst News.`,
    author: `@btoann`,
    person: {
      name: 'btoann',
      age: 22,
    },
    simpleData: ['item 1', 'item 2', 'item 3'],
    complexData: [
      { name: 'john', age: 32, },
      { name: 'alice', age: 28, },
    ],
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
         features: [`Array.prototype.map`, `fetch`]
      },
    },
    // `gatsby-plugin-polyfill-io`,
    // `gatsby-legacy-polyfills`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qew43phyt7xr`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `styles`,
    //     path: `${__dirname}/src/assets/styles`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': 'src',
          '@assets': 'src/assets',
        },
        extensions: [`js`, `jsx`, `ts`, `tsx`, `css`, `scss`, `sass`],
      }
    },
    // {
    //   resolve: `gatsby-plugin-styled-components`,
    //   options: {
    //   },
    // },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true,
          },
        },
      },
    },
  ],
}
