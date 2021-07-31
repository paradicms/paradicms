import * as React from "react";
import {ImageDimensions, JoinedImage, JoinedInstitution, JoinedObject} from "@paradicms/models";
import {Card, CardBody, CardHeader, CardImg, Col, Container, Row, Table} from "reactstrap";
import {Accordion} from "./Accordion";
import {RightsTable} from "./RightsTable";

export const ObjectCard: React.FunctionComponent<{
  object: JoinedObject;
  renderInstitutionLink?: (
    institution: JoinedInstitution,
    children: React.ReactNode,
  ) => React.ReactNode;
  renderObjectLink: (
    object: JoinedObject,
    children: React.ReactNode,
  ) => React.ReactNode;
}> = ({object, renderInstitutionLink, renderObjectLink}) => {
  const thumbnailDimensions: ImageDimensions = {height: 200, width: 200};
  const thumbnail = object.thumbnail({targetDimensions: thumbnailDimensions});
  const thumbnailSrc = thumbnail?.src ?? JoinedImage.placeholderSrc(thumbnailDimensions);

  return (
    <Card className="object-card">
      <CardHeader tag="h3">
        {renderObjectLink(object, <>{object.title}</>)}
      </CardHeader>
      {renderObjectLink(
        object,
        <CardImg
          className="thumbnail"
          src={thumbnailSrc}
          title={object.title}
        />
      )}
      <CardBody>
        <Container fluid>
          {renderInstitutionLink ? (
            <Row>
              <Col xs={12}>
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Institution</strong>
                      </td>
                      <td>
                        {renderInstitutionLink(
                          object.institution,
                          <span>{object.institution.name}</span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          ) : null}
          {object.abstract ? (
            <Row>
              <Col xs={12}>
                <Accordion title="Summary">{object.abstract}</Accordion>
              </Col>
            </Row>
          ) : null}
          {thumbnail && thumbnail.rights ? (
            <Row>
              <Col xs={12}>
                <Accordion title="Image rights">
                  <RightsTable
                    rights={thumbnail.rights}
                    tableClassName="rights-table"
                  ></RightsTable>
                </Accordion>
              </Col>
            </Row>
          ) : null}
          {object.rights ? (
            <Row>
              <Col xs={12}>
                <Accordion title="Metadata rights">
                  <RightsTable
                    rights={object.rights}
                    tableClassName="rights-table"
                  ></RightsTable>
                </Accordion>
              </Col>
            </Row>
          ) : null}
        </Container>
      </CardBody>
    </Card>
  );
};
