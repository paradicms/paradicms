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
import {decodeFileName, encodeFileName} from "@paradicms/base";
import {ObjectsGallery} from "components/ObjectsGallery";

interface StaticProps {
  collection: Collection;
  collectionObjects: readonly Object[];
  institution: Institution;
  institutionImages: readonly Image[];
  propertyDefinitions: readonly PropertyDefinition[];
}

const CollectionPage: React.FunctionComponent<StaticProps> = ({
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
    imagesByDepictsUri: Images.indexByDepictsUri(institutionImages),
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
              <ObjectsGallery objects={joinedFilteredObjects} />
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
  for (const institution of Data.institutions) {
    for (const collection of Data.collections.filter(
      collection => collection.institutionUri == institution.uri
    )) {
      paths.push({
        params: {
          collectionUri: encodeFileName(collection.uri),
          institutionUri: encodeFileName(institution.uri),
        },
      });
    }
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const collectionUri = decodeFileName(params!.collectionUri as string);
  const institutionUri = decodeFileName(params!.institutionUri as string);

  return {
    props: {
      collection: Data.collections.find(
        collection => collection.uri === collectionUri
      )!,
      collectionObjects: Data.objects.filter(object =>
        object.collectionUris.some(
          objectCollectionUri => objectCollectionUri === collectionUri
        )
      ),
      institution: Data.institutions.find(
        institution => institution.uri === institutionUri
      )!,
      institutionImages: Data.images.filter(
        image => image.institutionUri === institutionUri
      ),
      propertyDefinitions: Data.propertyDefinitions,
    },
  };
};
