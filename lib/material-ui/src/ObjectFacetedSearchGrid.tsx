import {ObjectFilters, ObjectQuery, PropertyDefinition} from "@paradicms/models";
import * as React from "react";
import {ObjectFacetedSearchQuery} from "@paradicms/lunr";
import {Grid} from "@material-ui/core";
import {ObjectFacetsControls} from "./ObjectFacetsControls";
import {ObjectsGallery} from "./ObjectsGallery";
import {FiltersChips} from "FiltersChips";
import {ObjectCardObject} from "./ObjectCardObject";
import {ObjectCardInstitution} from "./ObjectCardInstitution";
import {indexModelsByUri} from "@paradicms/model-utils";

export const ObjectFacetedSearchGrid: React.FunctionComponent<{
  objects: readonly ObjectCardObject[];
  onChangeFilters: (filters: ObjectFilters) => void;
  onChangePage: (page: number) => void;
  page: number; // From 0
  propertyDefinitions: readonly PropertyDefinition[];
  query: ObjectQuery;
  renderInstitutionLink?: (
    institution: ObjectCardInstitution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: ObjectCardObject,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({
  objects,
  onChangeFilters,
  onChangePage,
  page,
  propertyDefinitions,
  renderInstitutionLink,
  renderObjectLink,
  query,
}) => {
  const totalObjectsCount = objects.length;

  const propertyDefinitionsByUri = React.useMemo(
    () => indexModelsByUri(propertyDefinitions),
    [propertyDefinitions]
  );

  return (
    <ObjectFacetedSearchQuery
      objects={objects}
      propertyDefinitions={propertyDefinitions}
      query={query}
    >
      {({objectFacets, objects}) => (
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Grid container>
              <Grid item xs={10}>
                {objects.length > 0 ? (
                  <ObjectsGallery
                    objects={objects}
                    onChangePage={onChangePage}
                    page={page}
                    renderInstitutionLink={renderInstitutionLink}
                    renderObjectLink={renderObjectLink}
                  />
                ) : (
                  <h2 style={{textAlign: "center"}}>
                    No matching objects found.
                  </h2>
                )}
              </Grid>
              <Grid item xs={2}>
                <Grid container direction="column" spacing={2}>
                  {objects.length > 0 ? (
                    <>
                      <Grid item>
                        <FiltersChips
                          facets={objectFacets}
                          filters={
                            query.filters ?? {
                              collectionUris: null,
                              institutionUris: null,
                              properties: null,
                            }
                          }
                          onChange={onChangeFilters}
                          propertyDefinitionsByUri={propertyDefinitionsByUri}
                        />
                      </Grid>
                      <Grid item style={{textAlign: "center"}}>
                        <span>Showing&nbsp;</span>
                        <span data-cy="objects-count">{objects.length}</span>
                        <span>&nbsp;of&nbsp;</span>
                        <span data-cy="total-objects-count">
                          {totalObjectsCount}
                        </span>
                        <span>&nbsp;objects</span>
                      </Grid>
                    </>
                  ) : null}
                  <Grid item>
                    <ObjectFacetsControls
                      facets={objectFacets}
                      filters={
                        query.filters ?? {
                          collectionUris: null,
                          institutionUris: null,
                          properties: null,
                        }
                      }
                      onChange={onChangeFilters}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </ObjectFacetedSearchQuery>
  );
};
