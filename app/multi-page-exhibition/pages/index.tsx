import {JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {getStaticApi} from "@paradicms/next";
import {
  ModelSetJsonLdParser,
  RightsParagraph,
} from "@paradicms/react-dom-components";
import {Hrefs} from "lib/Hrefs";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import {Layout} from "../components/Layout";
import {JsonLd} from "jsonld/jsonld-spec";
import invariant from "ts-invariant";
import {getExhibitionData} from "@paradicms/api";

interface StaticProps {
  readonly configuration: JsonAppConfiguration | null;
  readonly collectionKey: string | null;
  readonly collectionModelSetJsonLd: JsonLd;
  readonly firstWorkKey: string;
}

const IndexPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "collectionModelSetJsonLd"
> & {readonly collectionModelSet: ModelSet}> = ({
  collectionKey,
  configuration,
  firstWorkKey,
  collectionModelSet,
}) => {
  const router = useRouter();
  const collection = collectionKey
    ? collectionModelSet.collectionByKey(collectionKey)
    : null;

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
  collectionModelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={collectionModelSetJsonLd}
    render={collectionModelSet => (
      <IndexPageImpl collectionModelSet={collectionModelSet} {...otherProps} />
    )}
  />
);

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const api = await getStaticApi();

  const {collection, collectionModelSet, workKeys} = await getExhibitionData(
    api
  );
  invariant(workKeys.length > 0, "must have at least one work");

  return {
    props: {
      configuration: await api.getAppConfiguration(),
      collectionKey: collection?.key ?? null,
      firstWorkKey: workKeys[0],
      collectionModelSetJsonLd: await collectionModelSet.toJsonLd(),
    },
  };
};
