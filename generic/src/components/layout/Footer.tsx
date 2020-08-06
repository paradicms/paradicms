import * as React from "react";
import {Footer as MuiFooter} from "@paradicms/gatsby-material-ui";
import {graphql, StaticQuery} from "gatsby";
import {FooterQuery} from "~/graphql/types";

export const Footer: React.FunctionComponent = () => {
  return (
    <StaticQuery<FooterQuery>
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
