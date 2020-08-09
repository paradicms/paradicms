import {graphql} from "gatsby";
import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {Grid} from "@material-ui/core";
import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";
import {CollectionPageQuery} from "~/graphql/types";
import {JoinedObject} from "~/models/object/JoinedObject";
import {RightsTable} from "~/components/rights/RightsTable";
import {ObjectFacets} from "~/models/search/ObjectFacets";
import {ObjectFacetsGrid} from "~/components/object/ObjectFacetsGrid";
import {ObjectQuery} from "~/models/search/ObjectQuery";
import {Objects} from "~/models/object/Objects";
import {ObjectsGallery} from "~/components/object/ObjectsGallery";
import {Models} from "~/models/Models";
import {Images} from "~/models/image/Images";
import {useQueryParam, NumberParam} from "use-query-params";

const OBJECTS_PER_PAGE = 10;

const CollectionPage: React.FunctionComponent<{
  data: CollectionPageQuery;
  pageContext: {
    collection: Collection;
    institution: Institution;
  };
}> = ({
  data: {
    allImageJson: {nodes: institutionImages},
    allObjectJson: {nodes: collectionObjects},
  },
  pageContext: {collection, institution},
}) => {
  const [objectQuery, setObjectQuery] = React.useState<ObjectQuery>({
    filters: {collectionUris: {include: [collection.uri]}},
  });

  let [objectsPageQueryParam, setObjectsPage] = useQueryParam<
    number | null | undefined
  >("page", NumberParam);
  const objectsPage = objectsPageQueryParam ?? 0;
  // const [objectsPage, setObjectsPage] = React.useState<number>(0);

  const objectFacets = new ObjectFacets(collectionObjects);

  const joinedObjects: readonly JoinedObject[] = Objects.join({
    collectionsByUri: Models.indexByUri([collection]),
    institutionsByUri: Models.indexByUri([institution]),
    imagesByObjectUri: Images.indexByObjectUri(institutionImages),
    objects: collectionObjects,
  });

  const rights = collection.rights ?? institution.rights ?? undefined;

  return (
    <Layout
      breadcrumbs={{collection, institution}}
      documentTitle={"Collection - " + collection.title}
    >
      <Grid container direction="column" spacing={2}>
        {rights && joinedObjects.length ? (
          <Grid item>
            <RightsTable rights={rights} />
          </Grid>
        ) : null}
        <Grid item>
          <Grid container>
            <Grid item xs={10}>
              {joinedObjects.length ? (
                <ObjectsGallery
                  currentPage={objectsPage}
                  maxPage={
                    Math.ceil(joinedObjects.length / OBJECTS_PER_PAGE) - 1
                  }
                  objects={joinedObjects.slice(
                    objectsPage * OBJECTS_PER_PAGE,
                    (objectsPage + 1) * OBJECTS_PER_PAGE
                  )}
                  objectsPerPage={OBJECTS_PER_PAGE}
                  objectsTotal={joinedObjects.length}
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
    allImageJson(filter: {institution_uri: {eq: $institutionUri}}) {
      nodes {
        ...ImageFragment
      }
    }
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
