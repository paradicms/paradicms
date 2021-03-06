import * as React from "react";
import {useMemo} from "react";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";
import {readConfigurationFile, readDatasetFile} from "@paradicms/next";
import {Dataset, Text} from "@paradicms/models";
import {Layout} from "../components/Layout";
import {Col, Container, Row} from "reactstrap";
import {RightsParagraph} from "@paradicms/bootstrap";
import {defaultBootstrapExhibitionAppConfiguration} from "../lib/defaultBootstrapExhibitionAppConfiguration";
import {readBootstrapExhibitionAppConfiguration} from "../lib/readBootstrapCollectionAppConfiguration";
import {BootstrapExhibitionAppConfiguration} from "../lib/BootstrapExhibitionAppConfiguration";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: BootstrapExhibitionAppConfiguration;
  readonly datasetString: string;
  readonly firstWorkUri: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configuration,
  datasetString,
  firstWorkUri,
}) => {
  const router = useRouter();

  const dataset = useMemo(() => Dataset.parse(datasetString), [datasetString]);
  const collection = dataset.collectionByUri(collectionUri);
  const collectionAbstract = collection.abstract;

  React.useEffect(() => {
    if (!collectionAbstract) {
      router.push(Hrefs.work(firstWorkUri));
    }
  }, []);

  if (!collectionAbstract) {
    // Will redirect in the useEffect, so this render will never be seen
    return <div></div>;
  }

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      nextWork={{uri: firstWorkUri}}
    >
      <Container fluid>
        <Row>
          <Col
            className="text-wrap"
            xs={12}
            dangerouslySetInnerHTML={{
              __html: collectionAbstract.toString(),
            }}
          ></Col>
        </Row>
        {collectionAbstract instanceof Text && collectionAbstract.rights ? (
          <Row className="mt-2">
            <Col className="text-center" xs={12}>
              <RightsParagraph
                material="Text"
                rights={collectionAbstract.rights}
                style={{fontSize: "xx-small"}}
              />
            </Col>
          </Row>
        ) : null}
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const dataset = readDatasetFile(readFileSync);
  const collection = dataset.collections[0];

  return {
    props: {
      configuration:
        readBootstrapExhibitionAppConfiguration(
          readConfigurationFile(readFileSync),
          dataset.store
        ) ?? defaultBootstrapExhibitionAppConfiguration,
      datasetString: dataset.stringify(),
      collectionUri: collection.uri,
      firstWorkUri: collection.works[0].uri,
    },
  };
};
