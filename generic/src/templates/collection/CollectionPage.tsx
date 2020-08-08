import {graphql} from "gatsby";
import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {Grid} from "@material-ui/core";
import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";
import {Object} from "~/models/object/Object";
import {CollectionPageQuery} from "~/graphql/types";
import {ObjectSummary} from "~/models/object/ObjectSummary";
import {RightsTable} from "~/components/rights/RightsTable";
import {ObjectFacets} from "~/models/search/ObjectFacets";
import {ObjectFacetsGrid} from "~/components/object/ObjectFacetsGrid";
import {ObjectQuery} from "~/models/search/ObjectQuery";
import {Objects} from "~/models/object/Objects";
import {ObjectsGallery} from "~/components/object/ObjectsGallery";

const OBJECTS_PER_PAGE = 20;

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

  const [objectsPage, setObjectsPage] = React.useState<number>(0);

  const objectFacets = new ObjectFacets(objects);

  const collectionsByUri: {[index: string]: Collection} = {};
  collectionsByUri[collection.uri] = collection;
  const institutionsByUri: {[index: string]: Institution} = {};
  institutionsByUri[institution.uri] = institution;

  const objectSummaries: readonly ObjectSummary[] = Objects.summarize({
    collectionsByUri,
    institutionsByUri,
    objects,
  });

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
              {objects.length ? (
                <ObjectsGallery
                  currentPage={objectsPage}
                  maxPage={Math.ceil(objects.length / OBJECTS_PER_PAGE) - 1}
                  objects={objectSummaries.slice(
                    objectsPage * OBJECTS_PER_PAGE,
                    (objectsPage + 1) * OBJECTS_PER_PAGE
                  )}
                  onChangePage={setObjectsPage}
                />
              ) : (
                <h4 style={{textAlign: "center"}}>
                  No matching objects found.
                </h4>
              )}
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
