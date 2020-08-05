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
