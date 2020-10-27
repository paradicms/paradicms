import {NumberParam, useQueryParams} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/base";
import {
  Collection,
  Image,
  Images,
  Institution,
  Models,
  Object as ObjectModel,
  ObjectFacets,
  ObjectQuery,
  Objects,
  PropertyDefinition,
} from "@paradicms/models";
import * as React from "react";
import {ObjectIndex} from "@paradicms/lunr";
import {Layout} from "components/Layout";
import {ObjectFacetsGrid} from "@paradicms/material-ui";
import {Grid} from "@material-ui/core";
import {ObjectsGallery} from "components/ObjectsGallery";
import {Data} from "lib/Data";
import {GetStaticProps} from "next";

const LIMIT_DEFAULT = 10;
const OFFSET_DEFAULT = 0;

const SearchPage: React.FunctionComponent<{
  collections: readonly Collection[];
  images: readonly Image[];
  institutions: readonly Institution[];
  objects: readonly ObjectModel[];
  propertyDefinitions: readonly PropertyDefinition[];
}> = ({collections, images, institutions, objects, propertyDefinitions}) => {
  // @ts-ignore
  const [queryParams, setQueryParams] = useQueryParams({
    limit: NumberParam,
    offset: NumberParam,
    query: new JsonQueryParamConfig<ObjectQuery>(),
  });

  const limit = queryParams.limit ?? LIMIT_DEFAULT;
  const offset = queryParams.offset ?? OFFSET_DEFAULT;
  const query = queryParams.query ?? {};

  const index = React.useMemo(
    () => new ObjectIndex(objects, propertyDefinitions),
    [objects, propertyDefinitions]
  );

  const collectionsByUri = React.useMemo(() => Models.indexByUri(collections), [
    collections,
  ]);
  const imagesByDepictsUri = React.useMemo(
    () => Images.indexByDepictsUri(images),
    [images]
  );
  const institutionsByUri = React.useMemo(
    () => Models.indexByUri(institutions),
    [institutions]
  );

  const [results, setResults] = React.useState<{
    filteredObjects: readonly ObjectModel[];
    objects: readonly ObjectModel[];
    objectFacets: ObjectFacets;
  } | null>(null);

  React.useEffect(() => {
    if (!index) {
      return;
    }

    let resultObjects: readonly ObjectModel[];
    console.info("query " + JSON.stringify(query));
    if (query.text) {
      resultObjects = index.search(query.text);
      resultObjects = resultObjects.slice(offset, offset + limit);
    } else {
      resultObjects = objects;
    }

    setResults({
      filteredObjects: query.filters
        ? Objects.filter({
            filters: query.filters,
            objects: objects,
          })
        : objects,
      objects: resultObjects,
      objectFacets: Objects.facetize(propertyDefinitions, objects),
    });
  }, [index, queryParams]);

  const joinedFilteredResultObjects = React.useMemo(
    () =>
      results && results.filteredObjects
        ? Objects.join({
            collectionsByUri,
            imagesByDepictsUri,
            institutionsByUri,
            objects: results.filteredObjects,
          })
        : [],
    [results]
  );

  if (!results) {
    return null;
  }

  return (
    <Layout
      cardTitle={
        query.text ? (
          <span>
            <span data-cy="objects-count">
              {joinedFilteredResultObjects.length}
            </span>
            &nbsp;
            <span>search results for</span>
            &nbsp;
            <i data-cy="query-text">{query.text}</i>
          </span>
        ) : (
          "Search results"
        )
      }
      documentTitle={
        query.text ? `Search results for "${query.text}"` : "Search results"
      }
      onSearch={text =>
        setQueryParams(Object.assign({}, queryParams, {query: {text}}))
      }
    >
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Grid container>
            <Grid item xs={10}>
              <ObjectsGallery
                objects={joinedFilteredResultObjects ?? []}
                renderInstitution={true}
              />
            </Grid>
            <Grid item xs={2}>
              <ObjectFacetsGrid
                facets={results.objectFacets}
                filters={query.filters ?? {}}
                onChange={newObjectFilters =>
                  setQueryParams({
                    ...queryParams,
                    query: {...query, filters: newObjectFilters},
                  })
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default SearchPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      collections: Data.collections,
      images: Data.images,
      institutions: Data.institutions,
      objects: Data.objects,
      propertyDefinitions: Data.propertyDefinitions,
    },
  };
};
