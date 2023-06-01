import {ModelSetFactory} from "@paradicms/models";
import {readModelSet} from "@paradicms/next";
import {RightsParagraph} from "@paradicms/react-dom-components";
import fs from "fs";
import {Hrefs} from "lib/Hrefs";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import * as path from "path";
import * as React from "react";
import {useMemo} from "react";
import {Col, Container, Row} from "reactstrap";
import {Layout} from "../components/Layout";

interface StaticProps {
  readonly collectionIri: string;
  readonly modelSetString: string;
  readonly firstWorkIri: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionIri,
  modelSetString,
  firstWorkIri,
}) => {
  const router = useRouter();
  const modelSet = useMemo(
    () => ModelSetFactory.fromFastRdfString(modelSetString),
    [modelSetString]
  );
  const collection = modelSet.collectionByIri(collectionIri);
  const configuration = modelSet.appConfiguration;

  React.useEffect(() => {
    if (!collection.description) {
      router.push(Hrefs.work({collectionIri, workIri: firstWorkIri}));
    }
  }, []);

  if (!collection.description) {
    // Will redirect in the useEffect, so this render will never be seen
    return <div></div>;
  }

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      nextWork={{iri: firstWorkIri}}
    >
      <Container fluid>
        <Row>
          <Col
            className="text-wrap"
            xs={12}
            dangerouslySetInnerHTML={{
              __html: collection.description.value,
            }}
          ></Col>
        </Row>
        {collection.description.requiresAttribution ? (
          <Row className="mt-2">
            <Col className="text-center" xs={12}>
              <RightsParagraph
                material="Text"
                rights={collection.description}
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
  const modelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile: (filePath: string) =>
      fs.promises.readFile(filePath).then(contents => contents.toString()),
  });
  const collection = modelSet.collections[0];

  return {
    props: {
      modelSetString: modelSet.toFastRdfString(),
      collectionIri: collection.iri,
      firstWorkIri: collection.works[0].iri,
    },
  };
};
