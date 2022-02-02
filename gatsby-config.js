module.exports = {
  siteMetadata: {
    siteUrl: 'https://ray7ackson.web.app',
    title: 'Ray 7ackson',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/img/',
      },
      __key: 'images',
    },
  ],
};
