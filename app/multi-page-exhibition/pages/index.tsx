import {ModelSet, selectExhibitionWorks} from "@paradicms/models";
import {readModelSet} from "@paradicms/next";
import {
  ModelSetJsonLdParser,
  RightsParagraph,
} from "@paradicms/react-dom-components";
import fs from "fs";
import {Hrefs} from "lib/Hrefs";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import * as path from "path";
import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import {Layout} from "../components/Layout";

interface StaticProps {
  readonly collectionKey: string | null;
  readonly firstWorkKey: string;
  readonly modelSetJsonLd: any;
}

const IndexPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({
  collectionKey,
  firstWorkKey,
  modelSet,
}) => {
  const router = useRouter();
  const collection = collectionKey
    ? modelSet.collectionByKey(collectionKey)
    : null;
  const configuration = modelSet.appConfiguration;

  React.useEffect(() => {
    if (!collection?.description) {
      router.push(Hrefs.work({key: firstWorkKey}));
    }
  }, []);

  if (!collection?.description) {
    // Will redirect in the useEffect, so this render will never be seen
    return <div></div>;
  }

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      nextWork={{key: firstWorkKey}}
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

const IndexPage: React.FunctionComponent<StaticProps> = ({
  modelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={modelSetJsonLd}
    render={modelSet => <IndexPageImpl modelSet={modelSet} {...otherProps} />}
  />
);

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const modelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile: (filePath: string) =>
      fs.promises.readFile(filePath).then(contents => contents.toString()),
  });

  const {collection, works} = selectExhibitionWorks(modelSet);

  return {
    props: {
      collectionKey: collection?.key ?? null,
      firstWorkKey: works[0].key,
      modelSetJsonLd: await modelSet.toJsonLd(),
    },
  };
};
