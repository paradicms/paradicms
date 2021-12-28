import * as React from "react";
import {useCallback, useMemo, useState} from "react";
import {Layout} from "components/Layout";
import {Dataset, DataSubsetter} from "@paradicms/models";
import {AppConfiguration} from "@paradicms/configuration";
import {
  decodeFileName,
  encodeFileName,
  readAppConfigurationFile,
  readDatasetFile,
} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
  Row,
} from "reactstrap";
import {RightsTable, WorkImagesCarousel} from "@paradicms/bootstrap";
import * as fs from "fs";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly configuration: AppConfiguration;
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

  const [openAccordionId, setOpenAccordionId] = useState<string>("");

  const toggleAccordion = useCallback(
    (newOpenAccordionId: string) => {
      if (newOpenAccordionId === openAccordionId) {
        setOpenAccordionId("");
      } else {
        setOpenAccordionId(newOpenAccordionId);
      }
    },
    [openAccordionId]
  );

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
        {configuration.workProperties &&
        configuration.workProperties.length > 0 ? (
          <Row className="mt-4">
            <Col xs={12}>
              {/*<Accordion defaultOpen={true} title={<h4>Properties</h4>}>*/}
              {/*  <PropertiesTable properties={work.properties} />*/}
              {/*</Accordion>*/}
            </Col>
          </Row>
        ) : null}
        {work.rights ? (
          <Row className="mt-4">
            <Col xs={12}>
              {/*@ts-ignore*/}
              <Accordion open={openAccordionId} toggle={toggleAccordion}>
                <AccordionItem>
                  <AccordionHeader targetId="0">
                    Metadata rights
                  </AccordionHeader>
                  <AccordionBody accordionId="0">
                    <RightsTable rights={work.rights} />
                  </AccordionBody>
                </AccordionItem>
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
  const configuration = readAppConfigurationFile(readFileSync);

  return {
    props: {
      configuration,
      datasetString: new DataSubsetter({
        configuration,
        completeDataset: readDatasetFile(readFileSync),
      })
        .workDataset(workUri, {
          allImages: true,
          collections: {},
          institution: {},
        })
        .stringify(),
      workUri,
    },
  };
};
