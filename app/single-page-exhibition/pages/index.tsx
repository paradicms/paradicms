import {JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {getAbsoluteImageSrc, getStaticApi} from "@paradicms/next";
import {DataFactory} from "@paradicms/rdf";
import {
  ModelSetJsonLdParser,
  RightsParagraph,
  WorkPage,
  defaultBootstrapStylesheetHref,
  getWorkLocationIcon,
  getWorkLocationLabel,
  workPageWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {requireNonNull} from "@paradicms/utilities";
import {JsonLd} from "jsonld/jsonld-spec";
import {GetStaticProps} from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import {useRouter} from "next/router";
import * as React from "react";
import {useMemo} from "react";
import {Col, Container, Row} from "reactstrap";
import {LocationsMapLocation} from "../components/LocationsMap";

const LocationsMap = dynamic<{
  readonly locations: readonly LocationsMapLocation[];
}>(
  () =>
    import("../components/LocationsMap").then(module => module.LocationsMap),
  {ssr: false}
);

interface StaticProps {
  readonly configuration: JsonAppConfiguration | null;
  readonly collectionIri: string | null;
  readonly collectionModelSetJsonLd: JsonLd;
  readonly workIris: readonly string[];
  readonly worksModelSetJsonLd: JsonLd;
}

const IndexPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "collectionModelSetJsonLd" | "worksModelSetJsonLd"
> & {
  readonly collectionModelSet: ModelSet;
  readonly worksModelSet: ModelSet;
}> = ({
  configuration,
  collectionIri,
  collectionModelSet,
  workIris,
  worksModelSet,
}) => {
  const pages: React.ReactElement[] = useMemo(() => {
    const collection = collectionIri
      ? collectionModelSet.collectionByIri(DataFactory.namedNode(collectionIri))
      : null;
    const works = workIris.map(workIri =>
      requireNonNull(
        worksModelSet.workByIri(DataFactory.namedNode(workIri)),
        workIri
      )
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
                properties={collectionModelSet.properties}
                propertyGroups={collectionModelSet.propertyGroups}
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
  }, [collectionModelSet]);
  const router = useRouter();

  if (pages.length === 0) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{collectionModelSet.collections[0].label}</title>
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
  collectionModelSetJsonLd,
  worksModelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={collectionModelSetJsonLd}
    render={collectionModelSet => (
      <ModelSetJsonLdParser
        modelSetJsonLd={worksModelSetJsonLd}
        render={worksModelSet => (
          <IndexPageImpl
            collectionModelSet={collectionModelSet}
            worksModelSet={worksModelSet}
            {...otherProps}
          />
        )}
      />
    )}
  />
);

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const api = await getStaticApi();

  const {modelSet: collectionModelSet} = await api.getCollections({
    limit: 1,
    query: {
      filters: [
        {
          exists: true,
          type: "CollectionWorksExistence",
        },
      ],
    },
  });

  const collection =
    collectionModelSet.collections.length > 0
      ? collectionModelSet.collections[0]
      : null;

  const works = await api.getWorks({
    joinSelector: workPageWorkJoinSelector,
    query: {
      filters: collection
        ? [
            {
              includeValues: [collection.iri.value],
              type: "WorkCollectionValue",
            },
          ]
        : [],
    },
  });

  return {
    props: {
      configuration: await api.getAppConfiguration(),
      collectionIri: collection?.iri.value ?? null,
      collectionModelSetJsonLd: await collectionModelSet.toJsonLd(),
      worksModelSetJsonLd: await works.modelSet.toJsonLd(),
      workIris: works.modelIris,
    },
  };
};
