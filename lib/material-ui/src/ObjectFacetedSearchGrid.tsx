import {Facet, Filter, ObjectsQuery} from "@paradicms/models";
import * as React from "react";
import {Grid} from "@material-ui/core";
import {FiltersControls} from "./FiltersControls";
import {ObjectsGallery} from "./ObjectsGallery";
import {FiltersChips} from "FiltersChips";
import {ObjectCardObject} from "./ObjectCardObject";
import {ObjectCardInstitution} from "./ObjectCardInstitution";

export const ObjectFacetedSearchGrid: React.FunctionComponent<{
  facets: readonly Facet[];
  objects: readonly ObjectCardObject[];
  objectsTotalCount: number;
  onChangeFilters: (filters: readonly Filter[]) => void;
  onChangePage: (page: number) => void;
  page: number; // From 0
  query: ObjectsQuery;
  renderInstitutionLink?: (
    institution: ObjectCardInstitution,
    children: React.ReactNode,
  ) => React.ReactNode;
  renderObjectLink: (
    object: ObjectCardObject,
    children: React.ReactNode,
  ) => React.ReactNode;
}> = ({
        facets,
        objects,
        objectsTotalCount,
        onChangeFilters,
        onChangePage,
        page,
        query,
        renderInstitutionLink,
        renderObjectLink,
      }) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container>
          <Grid item xs={10}>
            {objectsTotalCount > 0 ? (
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
              {objectsTotalCount > 0 ? (
                <>
                  <Grid item>
                    <FiltersChips
                      facets={facets}
                      filters={query.filters}
                      onChange={onChangeFilters}
                    />
                  </Grid>
                  <Grid item style={{textAlign: "center"}}>
                    <span>Showing&nbsp;</span>
                    <span data-cy="objects-count">{objects.length}</span>
                    <span>&nbsp;of&nbsp;</span>
                    <span data-cy="total-objects-count">
                        {objectsTotalCount}
                      </span>
                    <span>&nbsp;objects</span>
                  </Grid>
                </>
              ) : null}
              <Grid item>
                <FiltersControls
                  facets={facets}
                  filters={
                    query.filters
                  }
                  onChange={onChangeFilters}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
