import * as React from "react";
import {Layout} from "components/Layout";
import {Grid} from "@material-ui/core";
import {
  Collection,
  Image,
  Images,
  Institution,
  JoinedObject,
  Models,
  Object,
  ObjectFilters,
  Objects,
  PropertyDefinition,
} from "@paradicms/models";
import {ObjectFacetsGrid, RightsTable} from "@paradicms/material-ui";
import {Data} from "lib/Data";
import {GetStaticPaths, GetStaticProps} from "next";
import {decodeFileName, encodeFileName} from "lib/encodeFileName";
import {ObjectsGallery} from "components/ObjectsGallery";

const CollectionPage: React.FunctionComponent<{
  collection: Collection;
  collectionObjects: readonly Object[];
  institution: Institution;
  institutionImages: readonly Image[];
  propertyDefinitions: readonly PropertyDefinition[];
}> = ({
  collection,
  collectionObjects,
  institution,
  institutionImages,
  propertyDefinitions,
}) => {
  const [filteredObjects, setFilteredObjects] = React.useState<
    readonly Object[]
  >(collectionObjects);
  const [objectFilters, setObjectFilters] = React.useState<ObjectFilters>({
    collectionUris: {include: [collection.uri]},
  });

  const objectFacets = Objects.facetize(propertyDefinitions, collectionObjects);

  const joinedFilteredObjects: readonly JoinedObject[] = Objects.join({
    collectionsByUri: Models.indexByUri([collection]),
    institutionsByUri: Models.indexByUri([institution]),
    imagesByObjectUri: Images.indexByObjectUri(institutionImages),
    objects: filteredObjects,
  });

  const rights = institution.rights;

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
              <ObjectsGallery joinedObjects={joinedFilteredObjects} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params: {collectionUri: string; institutionUri: string}}[] = [];
  for (const institutionUri of Data.getInstitutionUris()) {
    for (const collectionUri of Data.getCollectionUrisByInstitutionUri(
      institutionUri
    )) {
      paths.push({
        params: {
          collectionUri: encodeFileName(collectionUri),
          institutionUri: encodeFileName(institutionUri),
        },
      });
    }
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const collectionUri = decodeFileName(params!.collectionUri as string);
  const institutionUri = decodeFileName(params!.institutionUri as string);

  return {
    props: {
      collection: Data.getCollectionByUri(collectionUri),
      collectionObjects: Data.getObjectsByCollectionUri(collectionUri),
      institution: Data.getInstitutionByUri(institutionUri),
      institutionImages: Data.getImagesByInstitutionUri(institutionUri),
      propertyDefinitions: Data.getPropertyDefinitions(),
    },
  };
};
