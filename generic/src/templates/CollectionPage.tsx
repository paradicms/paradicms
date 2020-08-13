import {graphql} from "gatsby";
import * as React from "react";
import {Layout} from "~/components/Layout";
import {Grid} from "@material-ui/core";
import {Collection} from "~/models/Collection";
import {Institution} from "~/models/Institution";
import {CollectionPageQuery} from "~/graphql/types";
import {JoinedObject} from "~/models/JoinedObject";
import {RightsTable} from "~/components/RightsTable";
import {ObjectFacetsGrid} from "~/components/ObjectFacetsGrid";
import {Objects} from "~/models/Objects";
import {ObjectsGallery} from "~/components/ObjectsGallery";
import {Models} from "~/models/Models";
import {Images} from "~/models/Images";
import {NumberParam, useQueryParam} from "use-query-params";
import {ObjectFilters} from "~/models/ObjectFilters";
import {Object} from "~/models/Object";

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
    allPropertyDefinitionJson: {nodes: propertyDefinitions},
  },
  pageContext: {collection, institution},
}) => {
  const [filteredObjects, setFilteredObjects] = React.useState<
    readonly Object[]
  >(collectionObjects);
  const [objectFilters, setObjectFilters] = React.useState<ObjectFilters>({
    collectionUris: {include: [collection.uri]},
  });

  let [objectsPageQueryParam, setObjectsPage] = useQueryParam<
    number | null | undefined
  >("page", NumberParam);
  const objectsPage = objectsPageQueryParam ?? 0;

  const objectFacets = Objects.facetize(propertyDefinitions, collectionObjects);

  const joinedFilteredObjects: readonly JoinedObject[] = Objects.join({
    collectionsByUri: Models.indexByUri([collection]),
    institutionsByUri: Models.indexByUri([institution]),
    imagesByObjectUri: Images.indexByObjectUri(institutionImages),
    objects: filteredObjects,
  });

  const rights = collection.rights ?? institution.rights ?? undefined;

  return (
    <Layout
      breadcrumbs={{collection, institution}}
      documentTitle={"Collection - " + collection.title}
    >
      <Grid container direction="column" spacing={2}>
        {rights && joinedFilteredObjects.length ? (
          <Grid item>
            <RightsTable rights={rights} />
          </Grid>
        ) : null}
        <Grid item>
          <Grid container>
            <Grid item xs={10}>
              {joinedFilteredObjects.length ? (
                <ObjectsGallery
                  currentPage={objectsPage}
                  maxPage={
                    Math.ceil(joinedFilteredObjects.length / OBJECTS_PER_PAGE) -
                    1
                  }
                  objects={joinedFilteredObjects.slice(
                    objectsPage * OBJECTS_PER_PAGE,
                    (objectsPage + 1) * OBJECTS_PER_PAGE
                  )}
                  objectsPerPage={OBJECTS_PER_PAGE}
                  objectsTotal={joinedFilteredObjects.length}
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
                filters={objectFilters}
                onChange={newObjectFilters => {
                  setFilteredObjects(
                    Objects.filter({
                      filters: newObjectFilters,
                      objects: collectionObjects,
                    })
                  );
                  setObjectFilters(newObjectFilters);
                }}
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
    allImageJson(filter: {institutionUri: {eq: $institutionUri}}) {
      nodes {
        ...ImageFragment
      }
    }
    allPropertyDefinitionJson {
      nodes {
        ...PropertyDefinitionFragment
      }
    }
    allObjectJson(
      filter: {
        collectionUris: {in: [$collectionUri]}
        institutionUri: {eq: $institutionUri}
      }
    ) {
      nodes {
        ...ObjectFragment
      }
    }
  }
`;
