/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Coffee House`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: 'gatsby-plugin-layout',
    options: {
      component: require.resolve('./src/layouts/index.js')
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "./src/images/gatsby-icon.png"
    }
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://coffeehousemaster.gatsbyjs.io/',
      policy: [{ userAgent: '*', allow: '/' }]
    }
  },
]
};