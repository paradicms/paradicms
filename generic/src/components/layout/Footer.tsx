import * as React from "react";
import {Footer as MuiFooter} from "@paradicms/gatsby-material-ui";
import {graphql, StaticQuery} from "gatsby";

export const Footer: React.FunctionComponent = () => {
  return (
    <StaticQuery<GatsbyTypes.IndexLayoutQueryQuery>
      query={graphql`
        query IndexLayoutQuery {
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
      render={(data: {
        site: {
          siteMetadata: {
            author: {
              email: string;
              name: string;
              url: string;
            };
            gitHubUrl: string;
          };
        };
      }) => <MuiFooter {...data.site.siteMetadata} />}
    />
  );
};
