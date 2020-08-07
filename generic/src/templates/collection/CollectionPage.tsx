import {graphql} from "gatsby";
import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";
import {Object} from "~/models/object/Object";
import {CollectionPageQuery} from "~/graphql/types";

const CollectionPage: React.FunctionComponent<{
  data: CollectionPageQuery;
  pageContext: {
    collection: Collection;
    institution: Institution;
    objects: Object[];
  };
}> = ({
  data: {
    allObjectJson: {nodes: objects},
  },
  pageContext: {collection, institution},
}) => {
  return (
    <Layout
      breadcrumbs={{collection, institution}}
      documentTitle={"Collection - " + collection.title}
    >
      <List>
        {objects.map(object => (
          <ListItem>
            <ListItemText>{object.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

export default CollectionPage;

export const query = graphql`
  query CollectionPage($collectionUri: String!, $institutionUri: String!) {
    allObjectJson(
      filter: {
        collection_uris: {in: [$collectionUri]}
        institution_uri: {eq: $institutionUri}
      }
    ) {
      nodes {
        ...ObjectFragment
      }
    }
  }
`;
