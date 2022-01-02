import {Col, Container, Row} from "reactstrap";
import * as React from "react";
import {useEffect, useState} from "react";
import {FiltersBadges} from "./FiltersBadges";
import {WorksGallery} from "./WorksGallery";
import {Institution, Work} from "@paradicms/models";
import {Pagination} from "./Pagination";
import {GetWorksResult, WorkQuery, WorkQueryService} from "@paradicms/services";
import {FiltersControls} from "./FiltersControls";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
import {calculatePageMax} from "@paradicms/react-search";
import {Filter} from "@paradicms/filters";

const OBJECTS_PER_PAGE = 10;

export const WorkSearchContainer: React.FunctionComponent<{
  onChangeFilters: (filters: readonly Filter[]) => void;
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactNode;
  setWorkAgentsPage: (page: number | undefined) => void;
  setWorksPage: (page: number | undefined) => void;
  setWorkQuery: (workQuery: WorkQuery) => void;
  workAgentsPage: number;
  workQuery: WorkQuery;
  workQueryService: WorkQueryService;
  worksPage: number;
}> = ({
  onChangeFilters,
  renderInstitutionLink,
  renderWorkLink,
  setWorkQuery,
  setWorksPage,
  workQuery,
  workQueryService,
  worksPage,
}) => {
  // const [viewQueryParam, setView] = useQueryParam<"gallery" | "table">("view");
  // const view = viewQueryParam ?? "gallery";

  const [getWorksResult, setGetWorksResult] = useState<GetWorksResult | null>(
    null
  );

  useEffect(() => {
    workQueryService
      .getWorks(
        {
          limit: OBJECTS_PER_PAGE,
          offset: worksPage * OBJECTS_PER_PAGE,
          valueFacetValueThumbnailSelector: {
            targetDimensions: thumbnailTargetDimensions,
          },
        },
        workQuery
      )
      .then(setGetWorksResult);
  }, [worksPage, workQuery]);

  if (!getWorksResult) {
    return null;
  }

  // if (works.length === 0) {
  //   return <h3>No matching works found.</h3>;
  // }

  return (
    <Container fluid>
      {getWorksResult.totalWorksCount > 0 ? (
        <>
          <Row>
            <Col className="d-flex justify-content-between" xs={12}>
              <h4>
                <span>{getWorksResult.totalWorksCount}</span>&nbsp;
                <span>
                  {getWorksResult.totalWorksCount === 1 ? "work" : "works"}
                </span>
                &nbsp;
                {workQuery.text ? (
                  <span>
                    matching <i>{workQuery.text}</i>
                  </span>
                ) : (
                  <span>matched</span>
                )}
              </h4>
              {workQuery.filters.length > 0 ? (
                <div>
                  <FiltersBadges
                    facets={getWorksResult.facets}
                    filters={workQuery.filters}
                  />
                </div>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <hr />
            </Col>
          </Row>
        </>
      ) : null}
      <Row>
        <Col xs="2">
          <FiltersControls
            facets={getWorksResult.facets}
            filters={workQuery.filters}
            onChange={onChangeFilters}
          />
        </Col>
        <Col xs="10">
          <Container fluid>
            <Row>
              <WorksGallery
                works={getWorksResult.dataset.works}
                renderInstitutionLink={renderInstitutionLink}
                renderWorkLink={renderWorkLink}
              />
            </Row>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center" xs={12}>
                <Pagination
                  count={
                    calculatePageMax({
                      objectsPerPage: OBJECTS_PER_PAGE,
                      totalObjects: getWorksResult.totalWorksCount,
                    }) + 1
                  }
                  page={worksPage + 1}
                  onChange={(_, newPage) => setWorksPage(newPage - 1)}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
