module.exports = {
  siteMetadata: {
    title: `Julien Guittard`,
    author: `Julien Guittard`,
    job: `Web Application Architect`,
    headLine: `A personal blog about software development`,
    description: `Hi! My name is Julien Guittard. I'm a passionate web application architect, PHP evangelist and iOS developer.`,
    siteUrl: `https://julienguittard.com`,
    social: {
      twitter: `julienguittard`,
      linkedin: `julienguittard`,
      github: `jguittard`,
      facebook: `julien.guittard`
    },
    siteLanguage: 'en', // Language Tag on <html> element
    logo: '/assets/jg-icon_512x512.png', // Used for SEO
    ogLanguage: 'en_US', // Facebook Language
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `105850445`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Julien Guittard`,
        short_name: `Julien Guittard`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#70b49c`,
        display: `minimal-ui`,
        icon: `content/assets/jg-icon_512x512.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-styled-components`
  ],
}
