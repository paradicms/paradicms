import * as React from "react";
import {Layout} from "~/components/Layout";
import {List, ListItem} from "@material-ui/core";
import {Hrefs} from "~/Hrefs";
import {graphql, Link} from "gatsby";
import {Institution} from "~/models/Institution";
import {InstitutionPageQuery} from "~/graphql/types";

const InstitutionPage: React.FunctionComponent<{
  data: InstitutionPageQuery;
  pageContext: {
    institution: Institution;
  };
}> = ({
  data: {
    allCollectionJson: {nodes: collections},
  },
  pageContext: {institution},
}) => {
  return (
    <Layout
      breadcrumbs={{institution}}
      documentTitle={`${institution.name} - Collections`}
    >
      <List>
        {collections.map(collection => (
          <ListItem key={collection.uri}>
            <Link
              to={Hrefs.institution(institution).collection(collection).home}
            >
              {collection.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

export default InstitutionPage;

export const query = graphql`
  query InstitutionPage($institutionUri: String!) {
    allCollectionJson(filter: {institutionUri: {eq: $institutionUri}}) {
      nodes {
        title
        uri
      }
    }
  }
`;
