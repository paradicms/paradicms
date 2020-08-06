import * as React from "react";
import {Footer as MuiFooter} from "@paradicms/gatsby-material-ui";
import {graphql, StaticQuery} from "gatsby";

export const Footer: React.FunctionComponent = () => {
  return (
    <StaticQuery<any>
      query={graphql`
        query Footer {
          site {
            siteMetadata {
              author {
                email
                name
                url
              }
              gitHubUrl
            }
          }
        }
      `}
      render={data => <MuiFooter {...data.site!.siteMetadata!} />}
    />
  );
};
