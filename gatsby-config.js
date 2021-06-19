module.exports = {
  siteMetadata: {
    title: "FranckVR",
  },
  plugins: [
    "gatsby-plugin-scss-typescript", 
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
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
