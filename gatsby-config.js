
module.exports = {
  siteMetadata: {
    title: "Blog || Gatsby + Strapi",
    description: "Nitin Rai is a software engineer based in Lucknow, IN who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.",
    siteKeywords:
    'dvlnitins, Nitin Rai, Nitin, Rai, software engineer, front-end engineer, web developer, designer, ui/us, developer javascript, india',
    author: "@dvlnitins",
    twitterUsername: "@dvlnitins",
    image: "/twitter-img.png",
    siteUrl: "https://www.dvlnitins.in",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dvlnitins.in`,
        short_name: `dvlnitins`,
        start_url: `/`,
        background_color: `#edf2f4`,
        theme_color: `#BC707B`,
        display: `standalone`,
        orientation: `portrait-primary`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://cmslab.herokuapp.com`,
        queryLimit: 1000, 
        contentTypes: [`blogs`],
      },
    },
  {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
        {
          family: `Montserrat`,
          variants: [`400`, `500`, `700`],
        },
        {
          family: `Righteous`,
        },
        {
          family: `Open Sans`,
        },
      ],
    },
    },
  }
  ],
}
