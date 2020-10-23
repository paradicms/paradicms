import * as React from "react";
import {Institution, JoinedObject} from "@paradicms/models";
import {Container, Row, Col} from "reactstrap";
import PaginationComponent from "react-reactstrap-pagination";

const OBJECTS_PER_PAGE = 10;

export const ObjectsGallery: React.FunctionComponent<{
  objects: readonly JoinedObject[];
  onChangePage: (page: number) => void;
  page: number;
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: JoinedObject,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({
  objects,
  onChangePage,
  page,
  renderInstitutionLink,
  renderObjectLink,
}) => (
  <Container fluid>
    <Row>
      <Col xs={12}>
        {objects
          .slice(page * OBJECTS_PER_PAGE, (page + 1) * OBJECTS_PER_PAGE)
          .map(object => (
            <div key={object.uri}>{object.title}</div>
          ))}
      </Col>
    </Row>
    {objects.length > 0 ? (
      <Row className="pt-2">
        <Col xs={12}>
          <PaginationComponent
            defaultActivePage={page + 1}
            onSelect={page => onChangePage(page - 1)}
            pageSize={20}
            totalItems={objects.length}
          />
        </Col>
      </Row>
    ) : null}
  </Container>
);
