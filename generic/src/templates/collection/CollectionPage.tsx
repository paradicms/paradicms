import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";
import {Object} from "~/models/object/Object";

const CollectionPage: React.FunctionComponent<{
  pageContext: {
    collection: Collection;
    institution: Institution;
    objects: Object[];
  };
}> = ({pageContext: {collection, institution, objects}}) => {
  const collectionObjects = objects.filter(
    object =>
      object.institution_uri === institution.uri &&
      object.collection_uris.some(
        collectionUri => collectionUri === collection.uri
      )
  );

  return (
    <Layout
      breadcrumbs={{collection, institution}}
      documentTitle={"Collection - " + collection.title}
    >
      <List>
        {collectionObjects.map(object => (
          <ListItem>
            <ListItemText>{object.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

export default CollectionPage;
