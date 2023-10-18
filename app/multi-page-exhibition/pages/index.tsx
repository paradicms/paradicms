import {getExhibitionData} from "@paradicms/api";
import {JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {getStaticApi} from "@paradicms/next";
import {DataFactory} from "@paradicms/rdf";
import {
  ModelSetJsonLdParser,
  RightsParagraph,
} from "@paradicms/react-dom-components";
import {JsonLd} from "jsonld/jsonld-spec";
import {Hrefs} from "lib/Hrefs";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import invariant from "ts-invariant";
import {Layout} from "../components/Layout";

interface StaticProps {
  readonly collectionIri: string | null;
  readonly collectionModelSetJsonLd: JsonLd;
  readonly configuration: JsonAppConfiguration | null;
  readonly firstWorkIri: string;
}

const IndexPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "collectionModelSetJsonLd"
> & {readonly collectionModelSet: ModelSet}> = ({
  collectionIri,
  configuration,
  firstWorkIri: firstWorkIriString,
  collectionModelSet,
}) => {
  const firstWorkIri = DataFactory.namedNode(firstWorkIriString);

  const router = useRouter();
  const collection = collectionIri
    ? collectionModelSet.collectionByIri(DataFactory.namedNode(collectionIri))
    : null;

  React.useEffect(() => {
    if (!collection?.description) {
      router.push(Hrefs.work({iri: firstWorkIri}));
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

  const {collection, collectionModelSet, workIris} = await getExhibitionData(
    api
  );
  invariant(workIris.length > 0, "must have at least one work");

  return {
    props: {
      configuration: await api.getAppConfiguration(),
      collectionIri: collection?.iri.value ?? null,
      firstWorkIri: workIris[0].value,
      collectionModelSetJsonLd: await collectionModelSet.toJsonLd(),
    },
  };
};
