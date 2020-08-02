import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {List} from "@material-ui/core";

const CollectionPage: React.FunctionComponent<{
  pageContext: {
    collection: GatsbyTypes.CollectionJson;
    institution: GatsbyTypes.InstitutionJson;
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
