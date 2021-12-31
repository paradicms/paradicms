import {Button, ButtonGroup, Col, Container, Row} from "reactstrap";
import * as React from "react";
import {useEffect, useState} from "react";
import {FiltersBadges} from "./FiltersBadges";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImages, faList} from "@fortawesome/free-solid-svg-icons";
import {WorksGallery} from "./WorksGallery";
import {WorksTable} from "./WorksTable";
import {useQueryParam} from "use-query-params";
import {Institution, Work} from "@paradicms/models";
import {Pagination} from "./Pagination";
import {GetWorksResult, WorkQuery, WorkQueryService} from "@paradicms/services";
import {FiltersControls} from "./FiltersControls";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
import {calculatePageMax} from "@paradicms/react-search";

const OBJECTS_PER_PAGE = 10;

export const WorkSearchContainer: React.FunctionComponent<{
  page: number;
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
  const [viewQueryParam, setView] = useQueryParam<"gallery" | "table">("view");
  const view = viewQueryParam ?? "gallery";

  const [getWorksResult, setGetWorksResult] = useState<GetWorksResult | null>(
    null
  );

  useEffect(() => {
    workQueryService
      .getWorks(
        {
          limit: OBJECTS_PER_PAGE,
          offset: page * OBJECTS_PER_PAGE,
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
              <ButtonGroup>
                <Button
                  color={view === "gallery" ? "primary" : undefined}
                  onClick={() => setView("gallery")}
                  title="gallery view"
                >
                  <FontAwesomeIcon icon={faImages} />
                </Button>
                <Button
                  color={view === "table" ? "primary" : undefined}
                  onClick={() => setView("table")}
                  title="table view"
                >
                  <FontAwesomeIcon icon={faList} />
                </Button>
              </ButtonGroup>
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
            onChange={newFilters => {
              setWorkQuery({
                ...workQuery,
                filters: newFilters,
              });
              setPage(undefined);
            }}
          />
        </Col>
        <Col xs="10">
          <Container fluid>
            <Row>
              {view === "gallery" ? (
                <WorksGallery
                  works={getWorksResult.dataset.works}
                  renderInstitutionLink={renderInstitutionLink}
                  renderWorkLink={renderWorkLink}
                />
              ) : null}
              {view === "table" ? (
                <Col xs={12}>
                  <WorksTable
                    works={getWorksResult.dataset.works}
                    renderInstitutionLink={renderInstitutionLink}
                    renderWorkLink={renderWorkLink}
                  />
                </Col>
              ) : null}
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
                  page={page + 1}
                  onChange={(_, newPage) => setPage(newPage - 1)}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
