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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fit Diet App`,
        short_name: `Fit Diet App`,
        start_url: `/`,
        background_color: `#6FCF97`,
        theme_color: `#66D2EA`,
        display: `standalone`,
        icon: `src/images/F-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
