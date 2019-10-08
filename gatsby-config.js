module.exports = {
  siteMetadata: {
    title: "Hi! I'm Franklin, looking for my page? 🔎",
    message:
      "🚧 This site is actually under construction, you can go back later! 👷",
    pattern: "Arrows",
    color: "#4c4c4c",
    titleFont: "Righteous",
    messageFont: "Roboto",
    social: [
      "https://github.com/fcastillo18",
      "https://twitter.com/fcastillo181"
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-under-construction",
        short_name: "Under Construction",
        start_url: "/",
        background_color: "#4c4c4c",
        theme_color: "#4c4c4c",
        display: "standalone",
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
