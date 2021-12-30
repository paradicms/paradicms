import {Button, ButtonGroup, Col, Container, Row} from "reactstrap";
import * as React from "react";
import {useMemo} from "react";
import {FiltersBadges} from "./FiltersBadges";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImages, faList} from "@fortawesome/free-solid-svg-icons";
import {WorksGallery} from "./WorksGallery";
import {WorksTable} from "./WorksTable";
import {useQueryParam} from "use-query-params";
import {Institution, Work} from "@paradicms/models";
import {Pagination} from "./Pagination";
import {WorkQuery, WorkQueryResults} from "@paradicms/services";
import {FiltersControls} from "./FiltersControls";

export const WorkSearchContainer: React.FunctionComponent<{
  page: number;
  pageMax: number;
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactNode;
  setWorkQuery: (workQuery: WorkQuery) => void;
  setPage: (page: number | undefined) => void;
  workQuery: WorkQuery;
  workQueryResults: WorkQueryResults;
}> = ({
  page,
  pageMax,
  renderInstitutionLink,
  renderWorkLink,
  setWorkQuery,
  setPage,
  workQuery,
  workQueryResults,
}) => {
  const [viewQueryParam, setView] = useQueryParam<"gallery" | "table">("view");
  const view = viewQueryParam ?? "gallery";

  const works = useMemo(() => workQueryResults.dataset.works, [
    workQueryResults,
  ]);

  // if (works.length === 0) {
  //   return <h3>No matching works found.</h3>;
  // }

  return (
    <Container fluid>
      {workQueryResults.totalWorksCount > 0 ? (
        <>
          <Row>
            <Col className="d-flex justify-content-between" xs={12}>
              <h4>
                <span>{workQueryResults.totalWorksCount}</span>&nbsp;
                <span>
                  {workQueryResults.totalWorksCount === 1 ? "work" : "works"}
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
                    facets={workQueryResults.facets}
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
            facets={workQueryResults.facets}
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
                  works={works}
                  renderInstitutionLink={renderInstitutionLink}
                  renderWorkLink={renderWorkLink}
                />
              ) : null}
              {view === "table" ? (
                <Col xs={12}>
                  <WorksTable
                    works={works}
                    renderInstitutionLink={renderInstitutionLink}
                    renderWorkLink={renderWorkLink}
                  />
                </Col>
              ) : null}
            </Row>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center" xs={12}>
                <Pagination
                  count={pageMax + 1}
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
