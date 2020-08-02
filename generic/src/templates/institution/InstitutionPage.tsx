import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {List, ListItem} from "@material-ui/core";
import {Hrefs} from "~/Hrefs";
import {Link} from "gatsby";

const InstitutionPage: React.FunctionComponent<{
  pageContext: {
    collections: Pick<GatsbyTypes.CollectionJson, "title" | "uri">[];
    institution: GatsbyTypes.InstitutionJson;
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
