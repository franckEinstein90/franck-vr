require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "FranckVR",
  },
  plugins: [
    "gatsby-plugin-scss-typescript", 
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://powerbuild.netlify.app/` // required!
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
