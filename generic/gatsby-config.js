"use strict";

// See https://gist.github.com/JohnAlbin/2fc05966624dffb20f4b06b4305280f9

require("source-map-support").install();
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017"
  }
});

module.exports = {
  siteMetadata: {
    author: {
      name: "Minor Gordon",
      url: "https://minorgordon.net",
      email: "info@paradicms.org"
    },
    description:
      "A multi-paradigm Collection Management System",
    gitHubUrl: "https://github.com/minorg/paradicms",
    keywords: "gatsbyjs, gatsby, javascript, sample, something",
    title: "Paradicms"
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-lunr`,
    //   options: {
    //     // Fields to index. If store === true value will be stored in index file.
    //     // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
    //     fields: [
    //       { name: "label", store: true },
    //       { name: "uri", store: true },
    //       { name: "type", store: true }
    //     ],
    //     languages: [
    //       {
    //         name: "en"
    //       }
    //     ],
    //     // How to resolve each field's value for a supported node type
    //     resolvers: {
    //       // For any node of type X, list how to resolve the fields' values
    //       PersonJson: {
    //         label: node => node.labels.pref_label,
    //         type: node => "Person",
    //         uri: node => node.uri
    //       }
    //     }
    //   }
    // },
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: ["300", "400", "500", "700"]
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-typegen",
    "gatsby-plugin-typescript",
    "gatsby-plugin-use-query-params",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`
      }
    },
    "gatsby-transformer-json"
  ]
};
