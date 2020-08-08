import {graphql} from "gatsby";
import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {Grid, List, ListItem, ListItemText} from "@material-ui/core";
import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";
import {Object} from "~/models/object/Object";
import {CollectionPageQuery} from "~/graphql/types";
import {ObjectSummary} from "~/models/object/ObjectSummary";
import {RightsTable} from "~/components/rights/RightsTable";
import {ObjectFacets} from "~/models/search/ObjectFacets";
import {ObjectFacetsGrid} from "~/components/object/ObjectFacetsGrid";
import {ObjectQuery} from "~/models/search/ObjectQuery";

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
  const [objectQuery, setObjectQuery] = React.useState<ObjectQuery>({
    filters: {collectionUris: {include: [collection.uri]}},
  });

  const objectFacets = new ObjectFacets(objects);

  const objectSummaries: ObjectSummary[] = objects.map(object => ({
    collection,
    institution,
    ...object,
  }));

  const rights = collection.rights ?? institution.rights ?? undefined;

  return (
    <Layout
      breadcrumbs={{collection, institution}}
      documentTitle={"Collection - " + collection.title}
    >
      <Grid container direction="column" spacing={2}>
        {rights && objectSummaries.length ? (
          <Grid item>
            <RightsTable rights={rights} />
          </Grid>
        ) : null}
        {/*{objectSummaries.length ? (*/}
        {/*  <Grid item>*/}
        {/*    <SearchResultsSummary*/}
        {/*      objectsPerPage={OBJECTS_PER_PAGE}*/}
        {/*      state={state}*/}
        {/*    />*/}
        {/*  </Grid>*/}
        {/*) : null}*/}
        <Grid item>
          <Grid container>
            <Grid item xs={10}>
              <List>
                {objects.map(object => (
                  <ListItem>
                    <ListItemText>{object.title}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={2}>
              <ObjectFacetsGrid
                facets={objectFacets}
                onChange={setObjectQuery}
                query={objectQuery}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
