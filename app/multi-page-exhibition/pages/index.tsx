import * as React from "react";
import {useMemo} from "react";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";
import {readModelSetFile} from "@paradicms/next";
import {ModelSet, Text} from "@paradicms/models";
import {Layout} from "../components/Layout";
import {Col, Container, Row} from "reactstrap";
import {RightsParagraph} from "@paradicms/react-dom-components";
import {fastRdfStringToDataset} from "@paradicms/rdf";

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

interface StaticProps {
  readonly collectionUri: string;
  readonly modelSetString: string;
  readonly firstWorkUri: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  modelSetString,
  firstWorkUri,
}) => {
  const router = useRouter();
  const modelSet = useMemo(
    () => ModelSet.fromDataset(fastRdfStringToDataset(modelSetString)),
    [modelSetString]
  );
  const collection = modelSet.collectionByUri(collectionUri);
  const collectionDescription = collection.description;
  const configuration = modelSet.appConfiguration;

  React.useEffect(() => {
    if (!collectionDescription) {
      router.push(Hrefs.work({collectionUri, workUri: firstWorkUri}));
    }
  }, []);

  if (!collectionDescription) {
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
              __html: collectionDescription.toString(),
            }}
          ></Col>
        </Row>
        {collectionDescription instanceof Text &&
        collectionDescription.rights?.requiresAttribution ? (
          <Row className="mt-2">
            <Col className="text-center" xs={12}>
              <RightsParagraph
                material="Text"
                rights={collectionDescription.rights}
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
      modelSetString: modelSet.toFastRdfString(),
      collectionUri: collection.uri,
      firstWorkUri: collection.works[0].uri,
    },
  };
};
