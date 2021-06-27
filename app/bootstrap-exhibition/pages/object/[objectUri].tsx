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
      readonly firstObjectUri: string | null;
      readonly lastObjectUri: string | null;
      readonly nextObjectUri: string | null;
      readonly previousObjectUri: string | null;
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
  const {currentObject, firstObjectUri, lastObjectUri, nextObjectUri, previousObjectUri} = collection;
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
        {firstObjectUri || lastObjectUri || nextObjectUri || previousObjectUri ?
          <Row className="mt-4">
            <Col style={{display: "flex", justifyContent: "center"}} xs={12}>
              <Pagination size="lg">
                {firstObjectUri ?
                  <PaginationItem>
                    <PaginationLink first href={Hrefs.object(firstObjectUri)} />
                  </PaginationItem>
                  : null}
                {previousObjectUri ?
                  <PaginationItem>
                    <PaginationLink previous href={Hrefs.object(previousObjectUri)} />
                  </PaginationItem> : null}
                {nextObjectUri ?
                  <PaginationItem>
                    <PaginationLink next href={Hrefs.object(nextObjectUri)} />
                  </PaginationItem> : null}
                {lastObjectUri ?
                  <PaginationItem>
                    <PaginationLink last href={Hrefs.object(lastObjectUri)} />
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
  let nextObjectUri: string | null = null;
  let previousObjectUri: string | null = null;
  data.objects.forEach((object, objectIndex) => {
    if (object.uri !== objectUri) {
      return;
    }
    currentObject = object;
    if (objectIndex > 0) {
      previousObjectUri = data.objects[objectIndex - 1].uri;
    }
    if (objectIndex + 1 < data.objects.length) {
      nextObjectUri = data.objects[objectIndex + 1].uri;
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
          firstObjectUri: data.objects[0].uri,
          lastObjectUri: data.objects[data.objects.length - 1].uri,
          nextObjectUri,
          previousObjectUri,
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
