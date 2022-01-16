import {Institution, Work} from "@paradicms/models";
import * as React from "react";
import {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {FiltersControls} from "./FiltersControls";
import {WorksGallery} from "./WorksGallery";
import {FiltersChips} from "./FiltersChips";
import {GetWorksResult, WorkQuery, WorkQueryService} from "@paradicms/services";
import {
  calculatePageMax,
  workSearchWorkJoinSelector,
} from "@paradicms/react-search";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";

const OBJECTS_PER_PAGE = 10;

export const WorkSearchGrid: React.FunctionComponent<{
  page: number; // From 0
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactNode;
  setPage: (page: number | undefined) => void;
  setWorkQuery: (workQuery: WorkQuery) => void;
  workQuery: WorkQuery;
  workQueryService: WorkQueryService;
}> = ({
  page,
  renderInstitutionLink,
  renderWorkLink,
  setPage,
  setWorkQuery,
  workQuery,
  workQueryService,
}) => {
  const [getWorksResult, setGetWorksResult] = useState<GetWorksResult | null>(
    null
  );

  useEffect(() => {
    workQueryService
      .getWorks(
        {
          limit: OBJECTS_PER_PAGE,
          offset: page * OBJECTS_PER_PAGE,
          workJoinSelector: workSearchWorkJoinSelector(
            thumbnailTargetDimensions
          ),
          valueFacetValueThumbnailSelector: {
            targetDimensions: thumbnailTargetDimensions,
          },
        },
        workQuery
      )
      .then(setGetWorksResult);
  }, [page, workQuery]);

  if (!getWorksResult) {
    return null;
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container>
          <Grid item xs={10}>
            {getWorksResult.dataset.works.length > 0 ? (
              <WorksGallery
                onChangePage={setPage}
                page={page}
                pageMax={calculatePageMax({
                  objectsPerPage: OBJECTS_PER_PAGE,
                  totalObjects: getWorksResult.totalWorksCount,
                })}
                renderInstitutionLink={renderInstitutionLink}
                renderWorkLink={renderWorkLink}
                works={getWorksResult.dataset.works}
              />
            ) : (
              <h2 style={{textAlign: "center"}}>No matching works found.</h2>
            )}
          </Grid>
          <Grid item xs={2}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <FiltersChips
                  facets={getWorksResult.facets}
                  filters={workQuery.filters}
                  onChange={filters => setWorkQuery({...workQuery, filters})}
                />
              </Grid>
              <Grid item>
                <FiltersControls
                  facets={getWorksResult.facets}
                  filters={workQuery.filters}
                  onChange={filters => setWorkQuery({...workQuery, filters})}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
