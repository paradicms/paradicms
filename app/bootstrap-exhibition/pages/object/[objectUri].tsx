import * as React from "react";
import {Layout} from "components/Layout";
import {JoinedImage, JoinedRights, JoinedValue, Object} from "@paradicms/models";
import {Data} from "lib/Data";
import {decodeFileName, encodeFileName} from "@paradicms/base";
import {GetStaticPaths, GetStaticProps} from "next";
import {Col, Container, Pagination, PaginationItem, PaginationLink, Row, Table} from "reactstrap";
import {JoinedValueLink, ObjectImagesCarousel} from "@paradicms/bootstrap";
import {joinImage, joinRights} from "@paradicms/model-utils";
import {Hrefs} from "lib/Hrefs";

interface StaticProps {
  readonly institution: {
    readonly collection: {
      readonly currentObject: {
        readonly abstract: string | null;
        readonly images: readonly JoinedImage[];
        readonly rights: JoinedRights | null;
        readonly title: string;
        readonly uri: string;
      };
      readonly nextObject: {readonly title: string; readonly uri: string;} | null;
      readonly previousObject: {readonly title: string; readonly uri: string;} | null;
      readonly title: string;
    };
    readonly rights: JoinedRights | null;
  };
}

const RightsTableRow: React.FunctionComponent<{
  label: string;
  value: JoinedValue | null;
}> = ({label, value}) => {
  if (!value) {
    return null;
  }
  return (
    <tr>
      <td>
        <strong>{label}</strong>
      </td>
      <td>
        <JoinedValueLink value={value} />
      </td>
    </tr>
  );
};

const ObjectPage: React.FunctionComponent<StaticProps> = ({
                                                            institution,
                                                          }) => {
  const collection = institution.collection;
  const {currentObject, nextObject, previousObject} = collection;
  const rights = currentObject.rights ?? institution.rights ?? null;

  return (
    <Layout collection={collection} object={currentObject}>
      <Container fluid>
        <Row>
          {currentObject.images.length > 0 ?
            <Col className="p-0" xs={6} style={{display: "flex", justifyContent: "center"}}>
              <ObjectImagesCarousel images={currentObject.images} />
            </Col> : null}
          <Col className="p-0" xs={currentObject.images.length > 0 ? 6 : 12}>
            <Container fluid>
              <Row>
                <Col className="p-0" xs={12}>
                  <h1>{currentObject.title}</h1>
                </Col>
              </Row>
              {currentObject.abstract ?
                <Row className="mt-2">
                  <Col className="p-0" xs={12}>{currentObject.abstract}</Col>
                </Row>
                : null}
              {rights ?
                <Row className="mt-4">
                  <Col className="p-0" xs={12}>
                    <Table striped>
                      <tbody>
                      {rights ? <>
                        <RightsTableRow
                          label="Rights statement"
                          value={rights.statement}
                        />
                        <RightsTableRow
                          label="Rights holder"
                          value={rights.holder}
                        />
                        <RightsTableRow
                          label="License"
                          value={rights.license}
                        />
                      </> : null}
                      </tbody>
                    </Table>
                  </Col>
                </Row> : null}
            </Container>
          </Col>
        </Row>
        {nextObject || previousObject ?
          <Row className="mt-4">
            <Col xs={12}>
              <Pagination size="lg" style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                {previousObject ?
                  <PaginationItem>
                    <PaginationLink previous
                                    href={Hrefs.object(previousObject.uri)}>‹ {previousObject.title}</PaginationLink>
                  </PaginationItem> : null}
                {nextObject ?
                  <PaginationItem>
                    <PaginationLink next href={Hrefs.object(nextObject.uri)}>{nextObject.title} ›</PaginationLink>
                  </PaginationItem> : null}
              </Pagination></Col></Row> : null}
      </Container>
    </Layout>
  );
};

export default ObjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params: {objectUri: string}}[] = [];
  for (const object of new Data().objects) {
    paths.push({
      params: {
        objectUri: encodeFileName(object.uri),
      },
    });
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({
                                                       params,
                                                     }): Promise<{props: StaticProps}> => {
  const data = new Data();
  const objectUri = decodeFileName(params!.objectUri as string);

  const collection = data.collection;
  const institution = data.institution;

  let currentObject: Object | undefined;
  let nextObject: Object | null = null;
  let previousObject: Object | null = null;
  data.objects.forEach((object, objectIndex) => {
    if (object.uri !== objectUri) {
      return;
    }
    currentObject = object;
    if (objectIndex > 0) {
      previousObject = data.objects[objectIndex - 1];
    }
    if (objectIndex + 1 < data.objects.length) {
      nextObject = data.objects[objectIndex + 1];
    }
  });
  if (!currentObject) {
    throw new EvalError();
  }

  return {
    props: {
      institution: {
        collection: {
          currentObject: {
            abstract: currentObject.abstract,
            images: data.images
              .filter(image => image.depictsUri === objectUri)
              .map(image =>
                joinImage({
                  licenseTitlesByUri: data.licenseTitlesByUri,
                  image,
                  rightsStatementPrefLabelsByUri:
                  data.rightsStatementPrefLabelsByUri,
                }),
              ),
            rights: currentObject.rights
              ? joinRights({
                licenseTitlesByUri: data.licenseTitlesByUri,
                rights: currentObject.rights,
                rightsStatementPrefLabelsByUri:
                data.rightsStatementPrefLabelsByUri,
              })
              : null,
            title: currentObject.title,
            uri: currentObject.uri,
          },
          nextObject,
          previousObject,
          title: collection.title,
        },
        rights: institution.rights
          ? joinRights({
            licenseTitlesByUri: data.licenseTitlesByUri,
            rights: institution.rights,
            rightsStatementPrefLabelsByUri:
            data.rightsStatementPrefLabelsByUri,
          })
          : null,
      },
    },
  };
};
