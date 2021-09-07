import * as React from "react";
import {Grid} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {WorkCard} from "./WorkCard";
import {Institution, Work} from "@paradicms/models";

/**
 * Works gallery component.
 *
 * @param works current page of works to render in the gallery
 */
export const WorksGallery: React.FunctionComponent<{
  works: readonly Work[];
  onChangePage: (page: number) => void;
  page: number; // From 0
  pageMax: number; // From 0
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactNode;
}> = ({
  works,
  onChangePage,
  page,
  pageMax,
  renderInstitutionLink,
  renderWorkLink,
}) => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Grid container spacing={8}>
          {works.map(work => (
            <Grid item key={work.uri}>
              <WorkCard
                work={work}
                renderInstitutionLink={renderInstitutionLink}
                renderWorkLink={renderWorkLink}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item style={{alignSelf: "center"}}>
        <Pagination
          count={pageMax + 1}
          page={page + 1}
          onChange={(_, value) => onChangePage(value - 1)}
        />
      </Grid>
    </Grid>
  );
};
