import * as React from "react";
import {Layout} from "components/Layout";
import {
  JoinedImage,
  JoinedRights,
  Property,
  PropertyDefinition,
} from "@paradicms/models";
import {Data} from "lib/Data";
import {decodeFileName, encodeFileName} from "@paradicms/base";
import {GetStaticPaths, GetStaticProps} from "next";
import {Col, Container, Row} from "reactstrap";
import {Accordion} from "components/Accordion";
import {RightsTable} from "components/RightsTable";
import {PropertiesTable} from "components/PropertiesTable";
import {ObjectImagesCarousel} from "components/ObjectImagesCarousel";
import {joinImage, joinRights} from "@paradicms/model-utils";

interface StaticProps {
  readonly institution: {
    readonly collection: {
      readonly object: {
        readonly images: readonly JoinedImage[];
        readonly rights?: JoinedRights;
        readonly properties?: readonly Property[];
        readonly title: string;
        readonly uri: string;
      };
      readonly title: string;
      readonly uri: string;
    };
    readonly name: string;
    readonly rights?: JoinedRights;
    readonly uri: string;
  };
  readonly propertyDefinitions: readonly PropertyDefinition[];
}

const ObjectPage: React.FunctionComponent<StaticProps> = ({
  institution,
  propertyDefinitions,
}) => {
  const collection = institution.collection;
  const object = collection.object;
  const rights = object.rights ?? institution.rights ?? undefined;

  return (
    <Layout collection={collection} documentTitle={"Object - " + object.title}>
      <Container fluid>
        <Row>
          <Col xs={12} style={{display: "flex", justifyContent: "center"}}>
            <ObjectImagesCarousel images={object.images} />
          </Col>
        </Row>
        {object.properties && object.properties.length > 0 ? (
          <Row className="mt-4">
            <Col xs={12}>
              <Accordion defaultOpen={true} title={<h4>Properties</h4>}>
                <PropertiesTable
                  properties={object.properties}
                  propertyDefinitions={propertyDefinitions}
                />
              </Accordion>
            </Col>
          </Row>
        ) : null}
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
  const object = data.objects.find(object => object.uri === objectUri)!;

  return {
    props: {
      institution: {
        collection: {
          object: {
            images: data.images
              .filter(image => image.depictsUri === objectUri)
              .map(image =>
                joinImage({
                  licenseTitlesByUri: data.licenseTitlesByUri,
                  image,
                  rightsStatementPrefLabelsByUri:
                    data.rightsStatementPrefLabelsByUri,
                })
              ),
            rights: object.rights
              ? joinRights({
                  licenseTitlesByUri: data.licenseTitlesByUri,
                  rights: object.rights,
                  rightsStatementPrefLabelsByUri:
                    data.rightsStatementPrefLabelsByUri,
                })
              : undefined,
            title: object.title,
            uri: object.uri,
          },
          title: collection.title,
          uri: collection.uri,
        },
        name: institution.name,
        rights: institution.rights
          ? joinRights({
              licenseTitlesByUri: data.licenseTitlesByUri,
              rights: institution.rights,
              rightsStatementPrefLabelsByUri:
                data.rightsStatementPrefLabelsByUri,
            })
          : undefined,
        uri: institution.uri,
      },
      propertyDefinitions: data.propertyDefinitions,
    },
  };
};
