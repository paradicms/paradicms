import {Facet, Filter, JoinedInstitution, JoinedObject, ObjectQuery} from "@paradicms/models";
import * as React from "react";
import {Grid} from "@material-ui/core";
import {FiltersControls} from "./FiltersControls";
import {ObjectsGallery} from "./ObjectsGallery";
import {FiltersChips} from "./FiltersChips";

export const ObjectSearchGrid: React.FunctionComponent<{
  facets: readonly Facet[];
  objects: readonly JoinedObject[];
  onChangeFilters: (filters: readonly Filter[]) => void;
  onChangePage: (page: number) => void;
  page: number; // From 0
  pageMax: number;
  query: ObjectQuery;
  renderInstitutionLink?: (
    institution: JoinedInstitution,
    children: React.ReactNode,
  ) => React.ReactNode;
  renderObjectLink: (
    object: JoinedObject,
    children: React.ReactNode,
  ) => React.ReactNode;
}> = ({
        facets,
        objects,
        onChangeFilters,
        onChangePage,
        page,
        pageMax,
        query,
        renderInstitutionLink,
        renderObjectLink,
      }) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container>
          <Grid item xs={10}>
            {objects.length > 0 ? (
              <ObjectsGallery
                objects={objects}
                onChangePage={onChangePage}
                page={page}
                pageMax={pageMax}
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
              <Grid item>
                <FiltersChips
                  facets={facets}
                  filters={query.filters}
                  onChange={onChangeFilters}
                />
              </Grid>
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
