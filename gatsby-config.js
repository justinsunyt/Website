module.exports = {
  siteMetadata: {
    title: `Justin Sun`,
    description: `Hey! I'm Justin.`,
    author: `Justin Sun`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Justin Sun`,
        short_name: `Justin Sun`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#3969f9`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`,
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
        ],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
