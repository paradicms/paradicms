import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import PaginationComponent from "react-reactstrap-pagination";
import {ObjectCard} from "./ObjectCard";
import {ObjectCardObject} from "./ObjectCardObject";
import {ObjectCardInstitution} from "./ObjectCardInstitution";

const OBJECTS_PER_PAGE = 10;

/**
 * Objects gallery component.
 *
 * @param objects objects to render in the gallery, should not be sliced (limit + offset) beforehand
 */
export const ObjectsGallery: React.FunctionComponent<{
  objects: readonly ObjectCardObject[];
  onChangePage: (page: number) => void;
  page: number;
  renderInstitutionLink?: (
    institution: ObjectCardInstitution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: ObjectCardObject,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({
  objects,
  onChangePage,
  page,
  renderInstitutionLink,
  renderObjectLink,
}) => (
  <Container className="objects-gallery" fluid>
    <Row>
      {objects
        .slice(page * OBJECTS_PER_PAGE, (page + 1) * OBJECTS_PER_PAGE)
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
    {objects.length > OBJECTS_PER_PAGE ? (
      <Row className="pagination-row">
        <Col className="pagination-col" xs={12}>
          <PaginationComponent
            defaultActivePage={page + 1}
            onSelect={page => onChangePage(page - 1)}
            pageSize={OBJECTS_PER_PAGE}
            totalItems={objects.length}
          />
        </Col>
      </Row>
    ) : null}
  </Container>
);
