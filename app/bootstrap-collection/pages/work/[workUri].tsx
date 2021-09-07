import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {Configuration, Dataset, DataSubsetter} from "@paradicms/models";
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
  PropertiesTable,
  RightsTable,
  WorkImagesCarousel,
} from "@paradicms/bootstrap";
import * as fs from "fs";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly configuration: Configuration;
  readonly datasetString: string;
  readonly workUri: string;
}

const WorkPage: React.FunctionComponent<StaticProps> = ({
  configuration,
  datasetString,
  workUri,
}) => {
  const dataset = useMemo(() => Dataset.parse(datasetString), [datasetString]);
  const work = dataset.workByUri(workUri);
  const collection = work.collections[0];

  return (
    <Layout
      collection={collection}
      documentTitle={"Work - " + work.title}
      configuration={configuration}
    >
      <Container fluid>
        <Row>
          <Col xs={12} style={{display: "flex", justifyContent: "center"}}>
            <WorkImagesCarousel work={work} />
          </Col>
        </Row>
        {work.properties.length > 0 ? (
          <Row className="mt-4">
            <Col xs={12}>
              <Accordion defaultOpen={true} title={<h4>Properties</h4>}>
                <PropertiesTable properties={work.properties} />
              </Accordion>
            </Col>
          </Row>
        ) : null}
        {work.rights ? (
          <Row className="mt-4">
            <Col xs={12}>
              <Accordion title={<h4>Metadata rights</h4>}>
                <RightsTable rights={work.rights} />
              </Accordion>
            </Col>
          </Row>
        ) : null}
      </Container>
    </Layout>
  );
};

export default WorkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params: {workUri: string}}[] = [];
  for (const work of readDatasetFile(readFileSync).works) {
    paths.push({
      params: {
        workUri: encodeFileName(work.uri),
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
  const workUri = decodeFileName(params!.workUri as string);

  return {
    props: {
      configuration: readConfigurationFile(readFileSync),
      datasetString: new DataSubsetter(readDatasetFile(readFileSync))
        .workDataset(workUri, {
          allImages: true,
          collections: {},
          institution: {rights: true},
        })
        .stringify(),
      workUri,
    },
  };
};
