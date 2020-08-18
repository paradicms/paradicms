import {NumberParam, useQueryParams, useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "~/components/JsonQueryParamConfig";
import {ObjectQuery} from "@paradicms/models";
import * as React from "react";
import {ObjectIndex} from "~/ObjectIndex";
import {graphql} from "gatsby";
import {SearchPageQuery} from "~/graphql/types";
import {ObjectIndexDocument} from "~/models/ObjectIndexDocument";
import {Models} from "@paradicms/models";
import {JoinedObject} from "@paradicms/models";
import {Images} from "@paradicms/models";
import {Layout} from "~/components/Layout";
import {ObjectsGallery} from "~/components/ObjectsGallery";
import {ObjectFacetsGrid} from "~/components/ObjectFacetsGrid";
import {Objects} from "@paradicms/models";
import {Grid} from "@material-ui/core";
import {Object as ObjectModel} from "@paradicms/models";
import {ObjectFacets} from "@paradicms/models";

const LIMIT_DEFAULT = 10;
const OBJECTS_PER_PAGE = 10;
const OFFSET_DEFAULT = 0;

const SearchPage: React.FunctionComponent<{data: SearchPageQuery}> = ({
  data: {
    allCollectionJson: {nodes: collections},
    allImageJson: {nodes: images},
    allInstitutionJson: {nodes: institutions},
    allObjectJson: {nodes: objects},
    allPropertyDefinitionJson: {nodes: propertyDefinitions},
  },
}) => {
  // @ts-ignore
  const [queryParams, setQueryParams] = useQueryParams({
    limit: NumberParam,
    offset: NumberParam,
    query: new JsonQueryParamConfig<ObjectQuery>(),
  });

  const limit = queryParams.limit ?? LIMIT_DEFAULT;
  const offset = queryParams.offset ?? OFFSET_DEFAULT;
  const query = queryParams.query ?? {};

  let [objectsPageQueryParam, setObjectsPage] = useQueryParam<
    number | null | undefined
  >("page", NumberParam);
  const objectsPage = objectsPageQueryParam ?? 0;

  const [index, setIndex] = React.useState<ObjectIndex>();
  React.useEffect(() => {
    ObjectIndex.loaded().then(index => setIndex(index));
  }, []);

  const collectionsByUri = React.useMemo(() => Models.indexByUri(collections), [
    collections,
  ]);
  const imagesByObjectUri = React.useMemo(
    () => Images.indexByObjectUri(images),
    [images]
  );
  const institutionsByUri = React.useMemo(
    () => Models.indexByUri(institutions),
    [institutions]
  );
  const objectsByUri = React.useMemo(() => Models.indexByUri(objects), [
    objects,
  ]);

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
      let results = index.search(query.text);
      results = results.slice(offset, offset + limit);
      resultObjects = results.map(
        (result: ObjectIndexDocument): ObjectModel => {
          const {uri: objectUri} = result;

          const object = objectsByUri[objectUri];
          if (!object) {
            throw new EvalError("unable to find object with URI " + objectUri);
          }
          return object;
        }
      );
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
      results?.filteredObjects.map(
        (object): JoinedObject => {
          const collections = object.collectionUris.map(collectionUri => {
            const collection = collectionsByUri[collectionUri];
            if (!collection) {
              throw new EvalError(
                "unable to find collection with URI " + collectionUri
              );
            }
            return collection;
          });

          const images = imagesByObjectUri[object.uri];

          const institution = institutionsByUri[object.institutionUri];
          if (!institution) {
            throw new EvalError(
              "unable to find institution with URI " + object.institutionUri
            );
          }

          return {
            collections,
            images,
            institution,
            ...object,
          };
        }
      ),
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
            Search results for <i data-cy="query-text">{query.text}</i>
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
              {joinedFilteredResultObjects?.length ? (
                <ObjectsGallery
                  currentPage={objectsPage}
                  maxPage={
                    Math.ceil(
                      joinedFilteredResultObjects.length / OBJECTS_PER_PAGE
                    ) - 1
                  }
                  objects={joinedFilteredResultObjects.slice(
                    objectsPage * OBJECTS_PER_PAGE,
                    (objectsPage + 1) * OBJECTS_PER_PAGE
                  )}
                  objectsPerPage={OBJECTS_PER_PAGE}
                  objectsTotal={joinedFilteredResultObjects.length}
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

export const query = graphql`
  query SearchPage {
    allCollectionJson {
      nodes {
        ...CollectionFragment
      }
    }
    allImageJson {
      nodes {
        ...ImageFragment
      }
    }
    allInstitutionJson {
      nodes {
        ...InstitutionFragment
      }
    }
    allObjectJson {
      nodes {
        ...ObjectFragment
      }
    }
    allPropertyDefinitionJson {
      nodes {
        ...PropertyDefinitionFragment
      }
    }
  }
`;
