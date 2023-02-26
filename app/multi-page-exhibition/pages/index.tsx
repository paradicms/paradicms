import * as React from "react";
import {useMemo} from "react";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";
import {readConfigurationFile, readModelSetFile} from "@paradicms/next";
import {ModelSet, Text} from "@paradicms/models";
import {Layout} from "../components/Layout";
import {Col, Container, Row} from "reactstrap";
import {RightsParagraph} from "@paradicms/react-dom-components";
import {fastRdfStringToDataset} from "@paradicms/rdf";
import {MultiPageExhibitionAppConfiguration} from "../lib/MultiPageExhibitionAppConfiguration";

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

interface StaticProps {
  readonly collectionUri: string;
  readonly configurationString: string;
  readonly modelSetString: string;
  readonly firstWorkUri: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configurationString,
  modelSetString,
  firstWorkUri,
}) => {
  const router = useRouter();
  const configuration = useMemo(
    () =>
      MultiPageExhibitionAppConfiguration.fromDataset(
        fastRdfStringToDataset(configurationString)
      )!,
    [configurationString]
  );
  const modelSet = useMemo(
    () => ModelSet.fromDataset(fastRdfStringToDataset(modelSetString)),
    [modelSetString]
  );
  const collection = modelSet.collectionByUri(collectionUri);
  const collectionAbstract = collection.abstract;

  React.useEffect(() => {
    if (!collectionAbstract) {
      router.push(Hrefs.work({collectionUri, workUri: firstWorkUri}));
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
        {collectionAbstract instanceof Text &&
        collectionAbstract.rights?.requiresAttribution ? (
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
  const modelSet = await readModelSetFile(readFile);
  const collection = modelSet.collections[0];

  return {
    props: {
      configurationString: (
        MultiPageExhibitionAppConfiguration.fromDatasets([
          await readConfigurationFile(readFile),
          modelSet.dataset,
        ]) ?? MultiPageExhibitionAppConfiguration.default
      ).toFastRdfString(),
      modelSetString: modelSet.toFastRdfString(),
      collectionUri: collection.uri,
      firstWorkUri: collection.works[0].uri,
    },
  };
};
