import * as React from "react";
import {Institution} from "@paradicms/models";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";
import {Accordion} from "./Accordion";
import {RightsTable} from "./RightsTable";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";

export const ObjectCard: React.FunctionComponent<{
  object: Object;
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: Object,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({object, renderInstitutionLink, renderObjectLink}) => {
  const thumbnail = object.thumbnail({
    targetDimensions: thumbnailTargetDimensions,
  });
  const thumbnailSrc =
    thumbnail?.src ?? Image.placeholderSrc(thumbnailTargetDimensions);

  return (
    <Card className="text-center">
      <CardHeader tag="h4">
        {renderObjectLink(object, <>{object.title}</>)}
      </CardHeader>
      {renderObjectLink(
        object,
        <CardImg
          src={thumbnailSrc}
          style={{
            height: thumbnailTargetDimensions.height,
            marginBottom: "20px",
            marginTop: "20px",
            width: thumbnailTargetDimensions.width,
          }}
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
                    cellStyle={{
                      padding: 0,
                      textAlign: "left",
                    }}
                    rights={thumbnail.rights}
                    tableStyle={{fontSize: "xx-small"}}
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
                    cellStyle={{
                      padding: 0,
                      textAlign: "left",
                    }}
                    rights={object.rights}
                    tableStyle={{fontSize: "xx-small"}}
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
