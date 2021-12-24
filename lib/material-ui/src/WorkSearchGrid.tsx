import {Institution, Work} from "@paradicms/models";
import * as React from "react";
import {Grid} from "@material-ui/core";
import {FiltersControls} from "./FiltersControls";
import {WorksGallery} from "./WorksGallery";
import {FiltersChips} from "./FiltersChips";
import {WorkQuery} from "@paradicms/services";
import {Facet} from "@paradicms/facets";
import {Filter} from "@paradicms/filters";

export const WorkSearchGrid: React.FunctionComponent<{
  facets: readonly Facet[];
  onChangeFilters: (filters: readonly Filter[]) => void;
  onChangePage: (page: number) => void;
  page: number; // From 0
  pageMax: number;
  query: WorkQuery;
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactNode;
  works: readonly Work[];
}> = ({
  facets,
  works,
  onChangeFilters,
  onChangePage,
  page,
  pageMax,
  query,
  renderInstitutionLink,
  renderWorkLink,
}) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container>
          <Grid item xs={10}>
            {works.length > 0 ? (
              <WorksGallery
                works={works}
                onChangePage={onChangePage}
                page={page}
                pageMax={pageMax}
                renderInstitutionLink={renderInstitutionLink}
                renderWorkLink={renderWorkLink}
              />
            ) : (
              <h2 style={{textAlign: "center"}}>No matching works found.</h2>
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
                  filters={query.filters}
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
