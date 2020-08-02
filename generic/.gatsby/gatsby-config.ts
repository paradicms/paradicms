import {IMergePluginOptions, ITSConfigFn} from "gatsby-plugin-ts-config";
import {PluginOptions as ITypegenPluginOptions} from "gatsby-plugin-typegen/types";
import {FileSystemConfig} from "gatsby-source-filesystem";
import * as path from "path";

const gatsbyConfig: ITSConfigFn<
  "config",
  | IMergePluginOptions<"gatsby-plugin-typegen", ITypegenPluginOptions>
  | FileSystemConfig
  // Add additional plugin types here
> = ({projectRoot}) => {
  const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

  let dataDirectoryPath = process.env.DATA_DIRECTORY_PATH;
  if (!dataDirectoryPath) {
    if (activeEnv === "development") {
      dataDirectoryPath = path.join(projectRoot, "src", "data", "test");
    } else {
      dataDirectoryPath = path.join(projectRoot, "src", "data", "production");
    }
  }

  return {
    siteMetadata: {
      author: {
        name: "Minor Gordon",
        url: "https://minorgordon.net",
        email: "info@paradicms.org",
      },
      description: "A multi-paradigm Collection Management System",
      gitHubUrl: "https://github.com/minorg/paradicms",
      keywords: "gatsbyjs, gatsby, javascript, sample, something",
      title: "Paradicms",
    },
    plugins: [
      "gatsby-plugin-material-ui",
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: "Roboto",
              variants: ["300", "400", "500", "700"],
            },
          ],
        },
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-typegen`,
        options: {
          outputPath: `${projectRoot}/.gatsby/graphql/types.ts`,
          emitSchema: {
            // [`${projectRoot}/.gatsby/graphql/introspection.json`]: true,
            [`${projectRoot}/.gatsby/graphql/schema.graphql`]: true,
          },
          // emitPluginDocuments: {
          //   [`${projectRoot}/.gatsby/graphql/plugin-documents.graphql`]: true,
          // },
        },
      },
      {
        resolve: `gatsby-plugin-ts`,
        options: {
          codegen: false,
        },
      },
      `gatsby-plugin-tsconfig-paths`,
      "gatsby-plugin-use-query-params",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "data",
          path: dataDirectoryPath,
        },
      },
      `gatsby-transformer-json`,
    ],
  };
};

export default gatsbyConfig;
