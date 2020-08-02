import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {List} from "@material-ui/core";
import {InstitutionSummary} from "~/models/institution/InstitutionSummary";
import {CollectionSummary} from "~/models/collection/CollectionSummary";

const CollectionPage: React.FunctionComponent<{
  pageContext: {
    collection: CollectionSummary;
    institution: InstitutionSummary;
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
