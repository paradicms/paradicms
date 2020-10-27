import * as React from "react";
import {Layout} from "components/Layout";
import {
  Collection,
  Image,
  Institution,
  Object,
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

interface StaticProps {
  collection: Collection;
  institution: Institution;
  object: Object;
  objectImages: readonly Image[];
  propertyDefinitions: readonly PropertyDefinition[];
}

const ObjectPage: React.FunctionComponent<StaticProps> = ({
  collection,
  institution,
  object,
  objectImages,
  propertyDefinitions,
}) => {
  const rights = object.rights ?? institution.rights ?? undefined;

  return (
    <Layout collection={collection} documentTitle={"Object - " + object.title}>
      <Container fluid>
        <Row>
          <Col xs={12} style={{display: "flex", justifyContent: "center"}}>
            <ObjectImagesCarousel images={objectImages} />
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

  return {
    props: {
      collection: data.collection,
      institution: data.institution,
      object: data.objects.find(object => object.uri === objectUri)!,
      objectImages: data.images.filter(image => image.depictsUri === objectUri),
      propertyDefinitions: data.propertyDefinitions,
    },
  };
};
