import {useQueryParams} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/base";
import {
  Collection,
  GuiMetadata,
  Image,
  Institution,
  Object as ObjectModel,
  ObjectQuery,
  PropertyDefinition,
} from "@paradicms/models";
import * as React from "react";
import {ObjectFacetedSearch} from "@paradicms/lunr";
import {Layout} from "components/Layout";
import {ObjectFacetsGrid} from "@paradicms/material-ui";
import {Grid} from "@material-ui/core";
import {ObjectsGallery} from "components/ObjectsGallery";
import {Data} from "lib/Data";
import {GetStaticProps} from "next";

interface StaticProps {
  collections: readonly Collection[];
  guiMetadata: GuiMetadata | null;
  images: readonly Image[];
  institutions: readonly Institution[];
  objects: readonly ObjectModel[];
  propertyDefinitions: readonly PropertyDefinition[];
}

const SearchPage: React.FunctionComponent<StaticProps> = ({
  collections,
  guiMetadata,
  images,
  institutions,
  objects,
  propertyDefinitions,
}) => {
  // @ts-ignore
  const [queryParams, setQueryParams] = useQueryParams({
    query: new JsonQueryParamConfig<ObjectQuery>(),
  });

  const query = queryParams.query ?? {};

  return (
    <ObjectFacetedSearch
      collections={collections}
      images={images}
      institutions={institutions}
      objects={objects}
      propertyDefinitions={propertyDefinitions}
      query={query}
    >
      {({objectFacets, objects}) => (
        <Layout
          cardTitle={
            query.text ? (
              <span>
                <span data-cy="objects-count">{objects.length}</span>
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
          guiMetadata={guiMetadata}
          onSearch={text =>
            setQueryParams(Object.assign({}, queryParams, {query: {text}}))
          }
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Grid container>
                <Grid item xs={10}>
                  <ObjectsGallery objects={objects} renderInstitution={true} />
                </Grid>
                <Grid item xs={2}>
                  <ObjectFacetsGrid
                    facets={objectFacets}
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
      )}
    </ObjectFacetedSearch>
  );
};

export default SearchPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  return {
    props: {
      collections: Data.collections,
      guiMetadata: Data.guiMetadata,
      images: Data.images,
      institutions: Data.institutions,
      objects: Data.objects,
      propertyDefinitions: Data.propertyDefinitions,
    },
  };
};
