import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {List} from "@material-ui/core";
import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";

const CollectionPage: React.FunctionComponent<{
  pageContext: {
    collection: Collection;
    institution: Institution;
  };
}> = ({pageContext: {collection, institution}}) => {
  return (
    <Layout
      breadcrumbs={{collection, institution}}
      documentTitle={"Collection - " + collection.title}
    >
      <List></List>
    </Layout>
  );
};

export default CollectionPage;
