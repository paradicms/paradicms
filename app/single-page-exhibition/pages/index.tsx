import {ModelSet} from "@paradicms/models";
import {getAbsoluteImageSrc, getStaticApi} from "@paradicms/next";
import {
  defaultBootstrapStylesheetHref,
  getWorkLocationIcon,
  getWorkLocationLabel,
  ModelSetJsonLdParser,
  RightsParagraph,
  WorkPage,
  workPageWorkJoinSelector,
} from "@paradicms/react-dom-components";
import fs from "fs";
import {GetStaticProps} from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import {useRouter} from "next/router";
import path from "path";
import * as React from "react";
import {useMemo} from "react";
import {Col, Container, Row} from "reactstrap";
import {requireNonNull} from "@paradicms/utilities";
import {LocationsMapLocation} from "../components/LocationsMap";
import {JsonLd} from "jsonld/jsonld-spec";

const LocationsMap = dynamic<{
  readonly locations: readonly LocationsMapLocation[];
}>(
  () =>
    import("../components/LocationsMap").then(module => module.LocationsMap),
  {ssr: false}
);

interface StaticProps {
  readonly collectionKey: string | null;
  readonly modelSetJsonLd: JsonLd;
  readonly workKeys: readonly string[];
}

const IndexPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({collectionKey, modelSet, workKeys}) => {
  const configuration = modelSet.appConfiguration;

  const pages: React.ReactElement[] = useMemo(() => {
    const collection = collectionKey
      ? modelSet.collectionByKey(collectionKey)
      : null;
    const works = workKeys.map(workKey =>
      requireNonNull(modelSet.workByKey(workKey))
    );
    const pages: React.ReactElement[] = [];

    if (collection) {
      pages.push(
        <div
          className="d-flex align-items-center justify-content-center"
          style={{height: "100vh"}}
        >
          <Container fluid>
            <Row>
              <Col className="text-center" xs={12}>
                <h1>{collection.label}</h1>
              </Col>
            </Row>
            {collection.description ? (
              <Row>
                <Col
                  className="offset-lg-4 text-wrap"
                  lg={4}
                  xs={12}
                  dangerouslySetInnerHTML={{
                    __html: collection.description.value,
                  }}
                ></Col>
              </Row>
            ) : null}
            {collection.description?.requiresAttribution ? (
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
        </div>
      );
    }

    works.forEach((work, workI) => {
      pages.push(
        <Container
          fluid
          style={{
            marginBottom: workI + 1 < works.length ? "50vh" : undefined,
          }}
        >
          <Row>
            <Col className="text-center" xs={12}>
              <h2>{work.label}</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <WorkPage
                getAbsoluteImageSrc={relativeImageSrc =>
                  getAbsoluteImageSrc(relativeImageSrc, router)
                }
                properties={modelSet.properties}
                propertyGroups={modelSet.propertyGroups}
                renderWorkLink={(work, children) => <span>{children}</span>}
                renderWorkLocationsMap={workLocations => (
                  <LocationsMap
                    locations={workLocations.map(workLocation => ({
                      centroid: workLocation.location.centroid!,
                      icon: getWorkLocationIcon(workLocation),
                      label: getWorkLocationLabel(workLocation),
                    }))}
                  />
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
        <title>{modelSet.collections[0].label}</title>
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
  const {api} = await getStaticApi({
    pathDelimiter: path.delimiter,
    readFile: (filePath: string) =>
      fs.promises.readFile(filePath).then(contents => contents.toString()),
  });

  const {modelSet} = await api.getCollections({
    collectionJoinSelector: {
      works: workPageWorkJoinSelector,
    },
    limit: 1,
    offset: 0,
    requireWorks: true,
  });

  const collection =
    modelSet.collections.length > 0 ? modelSet.collections[0] : null;

  return {
    props: {
      collectionKey: collection?.key ?? null,
      modelSetJsonLd: await modelSet.toJsonLd(),
      workKeys: collection?.works.map(work => work.key) ?? [],
    },
  };
};
