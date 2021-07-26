import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import PaginationComponent from "react-reactstrap-pagination";
import {ObjectCard} from "./ObjectCard";
import {ObjectCardObject} from "./ObjectCardObject";
import {ObjectCardInstitution} from "./ObjectCardInstitution";

/**
 * Objects gallery component.
 *
 * @param objects current page of objects to render in the gallery
 */
export const ObjectsGallery: React.FunctionComponent<{
  objects: readonly ObjectCardObject[];
  objectsPerPage: number;
  objectsTotalCount: number;
  onChangePage: (page: number) => void;
  page: number; // From 0
  renderInstitutionLink?: (
    institution: ObjectCardInstitution,
    children: React.ReactNode,
  ) => React.ReactNode;
  renderObjectLink: (
    object: ObjectCardObject,
    children: React.ReactNode,
  ) => React.ReactNode;
}> = ({
        objects,
        objectsPerPage,
        objectsTotalCount,
        onChangePage,
        page,
        renderInstitutionLink,
        renderObjectLink,
      }) => (
  <Container className="objects-gallery" fluid>
    <Row>
      {objects
        .map(object => (
          <div className="object-card-container" key={object.uri}>
            <ObjectCard
              object={object}
              renderInstitutionLink={renderInstitutionLink}
              renderObjectLink={renderObjectLink}
            />
          </div>
        ))}
    </Row>
    <Row className="pagination-row">
      <Col className="pagination-col" xs={12}>
        <PaginationComponent
          defaultActivePage={page + 1}
          onSelect={page => onChangePage(page - 1)}
          pageSize={objectsPerPage}
          totalItems={objectsTotalCount}
        />
      </Col>
    </Row>
  </Container>
);
