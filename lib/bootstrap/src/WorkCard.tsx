import * as React from "react";
import {Image, Institution, Rights, Text, Work} from "@paradicms/models";
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

export const WorkCard: React.FunctionComponent<{
  work: Work;
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactNode;
}> = ({work, renderInstitutionLink, renderWorkLink}) => {
  const thumbnail = work.thumbnail({
    targetDimensions: thumbnailTargetDimensions,
  });
  const thumbnailSrc =
    thumbnail?.src ?? Image.placeholderSrc(thumbnailTargetDimensions);

  const rightsEntries: {rights: Rights; title: string}[] = [];
  if (thumbnail && thumbnail.rights) {
    rightsEntries.push({rights: thumbnail.rights, title: "Image rights"});
  }
  if (work.rights || work.institution.rights) {
    rightsEntries.push({
      rights: work.rights ?? work.institution.rights!,
      title: "Metadata rights",
    });
  }
  if (work.abstract && work.abstract instanceof Text && work.abstract.rights) {
    rightsEntries.push({
      rights: work.abstract.rights!,
      title: "Summary rights",
    });
  }

  return (
    <Card className="text-center">
      <CardHeader tag="h4">
        {renderWorkLink(work, <>{work.title}</>)}
      </CardHeader>
      {renderWorkLink(
        work,
        <CardImg
          src={thumbnailSrc}
          style={{
            height: thumbnailTargetDimensions.height,
            marginBottom: "20px",
            marginTop: "20px",
            width: thumbnailTargetDimensions.width,
          }}
          title={work.title}
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
                          work.institution,
                          <span>{work.institution.name}</span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          ) : null}
          {work.abstract ? (
            <Row>
              <Col xs={12}>
                <Accordion title="Summary">
                  {work.abstract.toString()}
                </Accordion>
              </Col>
            </Row>
          ) : null}
          {rightsEntries.map((rightsEntry, key) => (
            <Row key={key}>
              <Col xs={12}>
                <Accordion title={rightsEntry.title}>
                  <RightsTable
                    cellStyle={{
                      padding: 0,
                      textAlign: "left",
                    }}
                    rights={rightsEntry.rights}
                    tableStyle={{fontSize: "xx-small"}}
                  ></RightsTable>
                </Accordion>
              </Col>
            </Row>
          ))}
        </Container>
      </CardBody>
    </Card>
  );
};
