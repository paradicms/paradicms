import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {List, ListItem} from "@material-ui/core";
import {Hrefs} from "~/Hrefs";
import {Link} from "gatsby";
import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";

const InstitutionPage: React.FunctionComponent<{
  pageContext: {
    collections: ReadonlyArray<Collection>;
    institution: Institution;
  };
}> = ({pageContext: {collections, institution}}) => {
  return (
    <Layout
      breadcrumbs={{institution}}
      documentTitle={"Institution - " + institution.name}
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
