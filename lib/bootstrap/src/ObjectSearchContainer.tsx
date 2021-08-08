import {Button, ButtonGroup, Col, Container, Row} from "reactstrap";
import * as React from "react";
import {useMemo, useState} from "react";
import {
  JoinedInstitution,
  JoinedObject,
  JoinedObjectQueryResults,
  ObjectQuery,
} from "@paradicms/models";
import {FiltersControls} from "./FiltersControls";
import {FiltersBadges} from "./FiltersBadges";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImages, faList} from "@fortawesome/free-solid-svg-icons";
import {ObjectsGallery} from "./ObjectsGallery";
import {ObjectsListGroup} from "./ObjectsListGroup";
import PaginationComponent from "react-reactstrap-pagination";

export const ObjectSearchContainer: React.FunctionComponent<{
  objectQuery: ObjectQuery;
  objectQueryResults: JoinedObjectQueryResults;
  objectsPerPage: number;
  page: number;
  renderInstitutionLink?: (
    institution: JoinedInstitution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: JoinedObject,
    children: React.ReactNode
  ) => React.ReactNode;
  setObjectQuery: (objectQuery: ObjectQuery) => void;
  setPage: (page: number | undefined) => void;
}> = ({
  objectQuery,
  objectQueryResults,
  objectsPerPage,
  page,
  renderInstitutionLink,
  renderObjectLink,
  setObjectQuery,
  setPage,
}) => {
  const [view, setView] = useState<"gallery" | "list">("gallery");

  const objects = useMemo(() => objectQueryResults.joinedDataset.objects, [
    objectQueryResults,
  ]);

  // if (objects.length === 0) {
  //   return <h3>No matching objects found.</h3>;
  // }

  return (
    <Container fluid>
      {objectQueryResults.totalObjectsCount > 0 ? (
        <>
          <Row>
            <Col className="d-flex justify-content-between" xs={12}>
              <h4>
                <span>{objectQueryResults.totalObjectsCount}</span>&nbsp;
                <span>
                  {objectQueryResults.totalObjectsCount === 1
                    ? "object"
                    : "objects"}
                </span>
                &nbsp;
                {objectQuery.text ? (
                  <span>
                    matching <i>{objectQuery.text}</i>
                  </span>
                ) : (
                  <span>matched</span>
                )}
              </h4>
              {objectQuery.filters.length > 0 ? (
                <div>
                  <FiltersBadges filters={objectQuery.filters} />
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
                  color={view === "list" ? "primary" : undefined}
                  onClick={() => setView("list")}
                  title="list view"
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
            facets={objectQueryResults.facets}
            filters={objectQuery.filters}
            onChange={newFilters => {
              setObjectQuery({
                ...objectQuery,
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
                <ObjectsGallery
                  objects={objectQueryResults.joinedDataset.objects}
                  renderInstitutionLink={renderInstitutionLink}
                  renderObjectLink={renderObjectLink}
                />
              ) : null}
              {view === "list" ? (
                <Col xs={12}>
                  <ObjectsListGroup objects={objects} />
                </Col>
              ) : null}
            </Row>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center" xs={12}>
                <PaginationComponent
                  defaultActivePage={page + 1}
                  firstPageText="«"
                  lastPageText="»"
                  nextPageText="›"
                  onSelect={page => setPage(page - 1)}
                  pageSize={objectsPerPage}
                  previousPageText="‹"
                  totalItems={objectQueryResults.totalObjectsCount}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
