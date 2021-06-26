import * as React from "react";
import {Layout} from "components/Layout";
import {JoinedImage, JoinedRights, Object, Property} from "@paradicms/models";
import {Data} from "lib/Data";
import {decodeFileName, encodeFileName} from "@paradicms/base";
import {GetStaticPaths, GetStaticProps} from "next";
import {Col, Container, Row} from "reactstrap";
import {Accordion, ObjectImagesCarousel, RightsTable} from "@paradicms/bootstrap";
import {joinImage, joinRights} from "@paradicms/model-utils";

interface StaticProps {
  readonly institution: {
    readonly collection: {
      readonly currentObject: {
        readonly images: readonly JoinedImage[];
        readonly rights: JoinedRights | null;
        readonly properties?: readonly Property[];
        readonly title: string;
        readonly uri: string;
      };
      readonly nextObjectUri: string | null;
      readonly previousObjectUri: string | null;
      readonly title: string;
    };
    readonly rights: JoinedRights | null;
  };
}

const ObjectPage: React.FunctionComponent<StaticProps> = ({
                                                            institution,
                                                          }) => {
  const collection = institution.collection;
  const currentObject = collection.currentObject;
  const rights = currentObject.rights ?? institution.rights ?? null;

  return (
    <Layout collection={collection} documentTitle={currentObject.title}>
      <Container fluid>
        <Row>
          <Col xs={12} style={{display: "flex", justifyContent: "center"}}>
            <ObjectImagesCarousel images={currentObject.images} />
          </Col>
        </Row>
        {rights ? (
          <Row className="mt-4">
            <Col xs={12}>
              <Accordion title={<h4>Metadata rights</h4>}>
                <RightsTable rights={rights} />
              </Accordion>
            </Col>
          </Row>
        ) : null}
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
