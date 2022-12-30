/**
 * @type {import('gatsby').GatsbyConfig}
 */

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
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "./src/images/gatsby-icon.png"
    }
  },
]
};