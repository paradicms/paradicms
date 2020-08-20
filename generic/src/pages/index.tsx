import * as React from "react";
import {Layout} from "~/components/Layout";
import {graphql, Link} from "gatsby";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {IndexPageQuery} from "~/graphql/types";
import {Hrefs} from "~/Hrefs";

const IndexPage: React.FunctionComponent<{
  data: IndexPageQuery;
}> = ({
  data: {
    allInstitutionJson: {nodes: institutions},
  },
}) => {
  return (
    <Layout documentTitle="Institutions">
      <List>
        {institutions.map(institution => (
          <ListItem key={institution.uri}>
            <ListItemText>
              <Link to={Hrefs.institution(institution).home}>
                {institution.name}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allInstitutionJson {
      nodes {
        name
        uri
      }
    }
  }
`;
