import * as React from "react";
import {useMemo} from "react";
import {GetStaticProps} from "next";
import fs from "fs";
import {getAbsoluteImageSrc, readModelSetFile} from "@paradicms/next";
import {ModelSet, Text} from "@paradicms/models";
import {fastRdfStringToDataset} from "@paradicms/rdf";
import {Col, Container, Row} from "reactstrap";
import {
  defaultBootstrapStylesheetHref,
  RightsParagraph,
  WorkContainer,
} from "@paradicms/react-dom-components";
import Head from "next/head";
import dynamic from "next/dynamic";
import {WorkLocationSummary} from "@paradicms/services";
import {useRouter} from "next/router";

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

const WorkLocationsMap = dynamic<{
  readonly workLocations: readonly WorkLocationSummary[];
}>(
  () =>
    import("../components/WorkLocationsMap").then(
      module => module.WorkLocationsMap
    ),
  {ssr: false}
);

interface StaticProps {
  readonly collectionUri: string;
  readonly modelSetString: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  modelSetString,
}) => {
  const modelSet = useMemo(
    () => ModelSet.fromDataset(fastRdfStringToDataset(modelSetString)),
    [modelSetString]
  );
  const configuration = modelSet.appConfiguration;

  const pages: React.ReactElement[] = useMemo(() => {
    const collection = modelSet.collectionByUri(collectionUri);
    const pages: React.ReactElement[] = [];

    const collectionDescription = collection.description;
    pages.push(
      <div
        className="d-flex align-items-center justify-content-center"
        style={{height: "100vh"}}
      >
        <Container fluid>
          <Row>
            <Col className="text-center" xs={12}>
              <h1>{collection.title}</h1>
            </Col>
          </Row>
          {collectionDescription ? (
            <Row>
              <Col
                className="offset-lg-4 text-wrap"
                lg={4}
                xs={12}
                dangerouslySetInnerHTML={{
                  __html: collectionDescription.toString(),
                }}
              ></Col>
            </Row>
          ) : null}
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
      </div>
    );

    collection.works.forEach((work, workI) => {
      pages.push(
        <Container
          fluid
          style={{
            marginBottom:
              workI + 1 < collection.works.length ? "50vh" : undefined,
          }}
        >
          <Row>
            <Col className="text-center" xs={12}>
              <h2>{work.title}</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <WorkContainer
                getAbsoluteImageSrc={relativeImageSrc =>
                  getAbsoluteImageSrc(relativeImageSrc, router)
                }
                renderWorkLocationsMap={workLocations => (
                  <WorkLocationsMap workLocations={workLocations} />
                )}
                work={work}
              />
            </Col>
          </Row>
        </Container>
      );
    });

    return pages;
  }, [modelSet]);
  const router = useRouter();

  if (pages.length === 0) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{modelSet.collections[0].title}</title>
        <link
          rel="stylesheet"
          href={configuration?.stylesheet ?? defaultBootstrapStylesheetHref}
        />
      </Head>
      {pages.map((page, pageI) => (
        <div id={"page-" + pageI} key={pageI}>
          {page}
        </div>
      ))}
    </>
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
    },
  };
};
