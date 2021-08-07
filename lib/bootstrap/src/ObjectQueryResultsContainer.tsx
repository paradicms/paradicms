import * as React from "react";
import {useMemo, useState} from "react";
import {Button, ButtonGroup, Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PaginationComponent from "react-reactstrap-pagination";
import {
  JoinedInstitution,
  JoinedObject,
  JoinedObjectQueryResults,
} from "@paradicms/models";
import {ObjectsGallery} from "./ObjectsGallery";
import {ObjectsListGroup} from "./ObjectsListGroup";
import {faImages, faList} from "@fortawesome/free-solid-svg-icons";

export const ObjectQueryResultsContainer: React.FunctionComponent<{
  objectQueryResults: JoinedObjectQueryResults;
  objectsPerPage: number;
  onChangePage: (page: number) => void;
  page: number; // From 0
  renderInstitutionLink?: (
    institution: JoinedInstitution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: JoinedObject,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({
  objectQueryResults,
  objectsPerPage,
  onChangePage,
  page,
  renderInstitutionLink,
  renderObjectLink,
}) => {
  const [view, setView] = useState<"gallery" | "list">("gallery");

  const objects = useMemo(() => objectQueryResults.joinedDataset.objects, [
    objectQueryResults,
  ]);

  if (objects.length === 0) {
    return <h3>No matching objects found.</h3>;
  }

  return (
    <Container fluid>
      <Row>
        <Col className="left" xs={8}>
          <h3>Objects</h3>
        </Col>
        <Col xs={4}>
          <ButtonGroup size="lg">
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
      <Row className="mt-2">
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
            onSelect={page => onChangePage(page - 1)}
            pageSize={objectsPerPage}
            previousPageText="‹"
            totalItems={objectQueryResults.totalObjectsCount}
          />
        </Col>
      </Row>
    </Container>
  );
};
