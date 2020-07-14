module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/gatsby-icon.png`,
      },
    },
    'gatsby-theme-blog-darkmode',
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Clmystes's Blog`,
    siteUrl: `http://blog.clmystes.tech`,
    author: `Clmystes`,
    description: `Personal blog by Clmystes`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/clmystes`,
      },
      {
        name: `github`,
        url: `https://github.com/clmystes`,
      },
    ],
  },
}
