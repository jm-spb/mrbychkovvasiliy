module.exports = {
  siteMetadata: {
    title: `mrbychkovvasiliy`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-scroll-reveal',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src`,
      },
    },
    'gatsby-plugin-react-helmet'
  ],
};
