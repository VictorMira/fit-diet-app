module.exports = {
  siteMetadata: {
    title: `Fit Diet App`,
    description: `Set your goals of Calories intake according to your personal information and activity profile.`,
    author: `@vmmira`,
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
        name: `fit-diet-app`,
        short_name: `fit-diet-app`,
        start_url: `/`,
        background_color: `linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)`,
        theme_color: `linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
