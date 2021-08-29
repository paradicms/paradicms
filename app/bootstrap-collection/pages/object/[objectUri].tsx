import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {
  Configuration,
  Dataset,
  DataSubsetter,
  JoinedDataset,
} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  readConfigurationFile,
  readDatasetFile,
} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import {Col, Container, Row} from "reactstrap";
import {
  Accordion,
  ObjectImagesCarousel,
  PropertiesTable,
  RightsTable,
} from "@paradicms/bootstrap";
import * as fs from "fs";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly configuration: Configuration;
  readonly dataset: Dataset;
  readonly objectUri: string;
}

const ObjectPage: React.FunctionComponent<StaticProps> = ({
  configuration,
  dataset,
  objectUri,
}) => {
  const joinedDataset = useMemo(() => JoinedDataset.fromDataset(dataset), [
    dataset,
  ]);
  const object = joinedDataset.objectByUri(objectUri);
  const collection = object.collections[0];

  return (
    <Layout
      collection={collection}
      documentTitle={"Object - " + object.title}
      configuration={configuration}
    >
      <Container fluid>
        <Row>
          <Col xs={12} style={{display: "flex", justifyContent: "center"}}>
            <ObjectImagesCarousel object={object} />
          </Col>
        </Row>
        {object.properties.length > 0 ? (
          <Row className="mt-4">
            <Col xs={12}>
              <Accordion defaultOpen={true} title={<h4>Properties</h4>}>
                <PropertiesTable properties={object.properties} />
              </Accordion>
            </Col>
          </Row>
        ) : null}
        {object.rights ? (
          <Row className="mt-4">
            <Col xs={12}>
              <Accordion title={<h4>Metadata rights</h4>}>
                <RightsTable rights={object.rights} />
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
  for (const object of readDatasetFile(readFileSync).objects) {
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
  const objectUri = decodeFileName(params!.objectUri as string);

  const objectDataset = DataSubsetter.fromDataset(
    readDatasetFile(readFileSync)
  ).objectDataset(objectUri, {
    allImages: true,
    collections: {},
    institution: {rights: true},
  });

  // console.debug("Object dataset:", Object.keys(objectDataset).map(key => `${key}: ${((objectDataset as any)[key] as any[]).length}`).join(", "));

  return {
    props: {
      configuration: readConfigurationFile(readFileSync),
      dataset: objectDataset,
      objectUri,
    },
  };
};
