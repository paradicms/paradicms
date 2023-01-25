import * as React from "react";
import {
  UIEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
  WheelEvent,
} from "react";
import {GetStaticProps} from "next";
import fs from "fs";
import {readConfigurationFile, readModelSetFile} from "@paradicms/next";
import {ModelSet, Text} from "@paradicms/models";
import {defaultSinglePageExhibitionAppConfiguration} from "../lib/defaultSinglePageExhibitionAppConfiguration";
import {readSinglePageExhibitionAppConfiguration} from "../lib/readSinglePageExhibitionAppConfiguration";
import {SinglePageExhibitionAppConfiguration} from "../lib/SinglePageExhibitionAppConfiguration";
import {parseIntoDataset} from "@paradicms/rdf";
import {Col, Container, Row} from "reactstrap";
import {
  defaultBootstrapStylesheetHref,
  RightsParagraph,
  WorkContainer,
} from "@paradicms/react-dom-components";
import Head from "next/head";
import dynamic from "next/dynamic";
import {WorkLocationSummary} from "@paradicms/services";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

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
  readonly configuration: SinglePageExhibitionAppConfiguration;
  readonly modelSetString: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configuration,
  modelSetString,
}) => {
  const modelSet = useMemo(
    () => new ModelSet(parseIntoDataset(modelSetString)),
    [modelSetString]
  );

  const pages: React.ReactElement[] = useMemo(() => {
    const collection = modelSet.collectionByUri(collectionUri);
    const pages: React.ReactElement[] = [];

    const collectionAbstract = collection.abstract;
    pages.push(
      <Container fluid>
        <Row>
          <Col className="text-center" xs={12}>
            <h1>{collection.title}</h1>
          </Col>
        </Row>
        {collectionAbstract ? (
          <Row>
            <Col
              className="offset-lg-4 text-wrap"
              lg={4}
              xs={12}
              dangerouslySetInnerHTML={{
                __html: collectionAbstract.toString(),
              }}
            ></Col>
          </Row>
        ) : null}
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
    );

    for (const work of collection.works) {
      pages.push(
        <Container fluid>
          <Row>
            <Col className="text-center" xs={12}>
              <h2>{work.title}</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <WorkContainer
                work={work}
                workLocationsMapComponent={WorkLocationsMap}
              />
            </Col>
          </Row>
        </Container>
      );
    }

    return pages;
  }, [modelSet]);

  const onScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(0);

  const onWheel = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY < 0) {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
      } else if (e.deltaY > 0) {
        if (currentPage < pages.length) {
          setCurrentPage(currentPage + 1);
        }
      }
    },
    [currentPage, pages]
  );

  useEffect(() => {
    const pageElement = document.getElementById("page-" + currentPage);
    if (pageElement) {
      console.info("Go to page", currentPage);
      window.scrollTo(pageElement.offsetLeft, pageElement.offsetTop);
      document.body.scrollTop = pageElement.offsetTop;
    }
  }, [currentPage]);

  if (pages.length === 0) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{modelSet.collections[0].title}</title>
        <link
          rel="stylesheet"
          href={configuration.stylesheetHref ?? defaultBootstrapStylesheetHref}
        />
      </Head>
      <div onScroll={onScroll} onWheel={onWheel}>
        {pages.map((page, pageI) => (
          <div
            className="d-flex"
            key={pageI}
            style={{alignItems: "center", height: "100vh", width: "100%"}}
          >
            <div id={"page-" + pageI}>{page}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const modelSet = readModelSetFile(readFileSync);
  const collection = modelSet.collections[0];

  return {
    props: {
      configuration:
        readSinglePageExhibitionAppConfiguration(
          readConfigurationFile(readFileSync),
          modelSet.dataset
        ) ?? defaultSinglePageExhibitionAppConfiguration,
      modelSetString: modelSet.stringify(),
      collectionUri: collection.uri,
    },
  };
};
