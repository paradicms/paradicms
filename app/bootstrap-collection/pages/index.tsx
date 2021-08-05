import * as React from "react";
import {
  Collection,
  Configuration,
  Dataset,
  DataSubsetter,
  defaultConfiguration,
  ObjectJoinSelector,
} from "@paradicms/models";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {Col, Container, Row} from "reactstrap";
import {FiltersBadges, FiltersControls, ObjectsGallery} from "@paradicms/bootstrap";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {readDataset} from "lib/readDataset";
import {LunrObjectSearchPage} from "@paradicms/lunr-react";
import {thumbnailTargetDimensions} from "@paradicms/material-ui";

interface StaticProps {
  readonly collection: Collection;
  readonly configuration: Configuration;
  readonly dataset: Dataset;
}

const OBJECTS_PER_PAGE = 10;

const OBJECT_JOIN_SELECTOR: ObjectJoinSelector = {
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
};

const IndexPage: React.FunctionComponent<StaticProps> = ({
                                                           collection,
                                                           configuration,
                                                           dataset,
                                                         }) => (
  <LunrObjectSearchPage configuration={configuration} dataset={dataset} objectJoinSelector={OBJECT_JOIN_SELECTOR}
                        objectsPerPage={OBJECTS_PER_PAGE}>
    {({
        objectQuery,
        objectQueryResults,
        objectQueryResultsJoinedDataset,
        page,
        setObjectQuery,
        setPage,
      }) => (
      <Layout
        collection={collection}
        configuration={configuration}
        onSearch={text => {
          setObjectQuery({filters: [], text});
          setPage(undefined);
        }}
      >
        <Container fluid>
          {objectQueryResults.totalObjectsCount > 0 ? (
            <>
              <Row>
                <Col xs={12}>
                  <h4 className="d-inline-block">
                    <span>{objectQueryResults.totalObjectsCount}</span>&nbsp;
                    <span>{objectQueryResults.totalObjectsCount === 1 ? "object" : "objects"}</span>
                    &nbsp;
                    {objectQuery.text ? (
                      <span>
                          matching <i>{objectQuery.text}</i>
                        </span>
                    ) : (
                      <span>matched</span>
                    )}
                  </h4>
                  {objectQuery.filters.length > 0 ? (
                    <div className="d-inline-block">
                      <FiltersBadges
                        filters={objectQuery.filters}
                      />
                    </div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <hr />
                </Col>
              </Row>
            </>
          ) : null}
          <Row>
            <Col xs="10">
              {objectQueryResultsJoinedDataset.objects.length > 0 ? (
                <ObjectsGallery
                  objects={objectQueryResultsJoinedDataset.objects}
                  objectsPerPage={OBJECTS_PER_PAGE}
                  objectsTotalCount={objectQueryResults.totalObjectsCount}
                  onChangePage={setPage}
                  page={page}
                  renderObjectLink={(object, children) => (
                    <Link href={Hrefs.object(object.uri)}>
                      <a>{children}</a>
                    </Link>
                  )}
                />
              ) : (
                <h3>No matching objects found.</h3>
              )}
            </Col>
            <Col xs="2">
              <FiltersControls
                facets={objectQueryResults.facets}
                filters={objectQuery.filters}
                onChange={newFilters => {
                  setObjectQuery({
                    ...objectQuery,
                    filters: newFilters,
                  });
                  setPage(undefined);
                }}
              />
            </Col>
          </Row>
        </Container>
      </Layout>)
    }
  </LunrObjectSearchPage>
  );

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const completeDataset = readDataset();
  const collection = completeDataset.collections[0];
  // Must pass all of the collection's objects in to feed into the search service
  const collectionDataset = DataSubsetter.fromDataset(completeDataset).collectionDataset(collection.uri, {
    objects: OBJECT_JOIN_SELECTOR,
  });

  // console.debug("Collection dataset:", Object.keys(collectionDataset).map(key => `${key}: ${((collectionDataset as any)[key] as any[]).length}`).join(", "));

  return {
    props: {
      collection,
      configuration: defaultConfiguration,
      dataset: collectionDataset,
    },
  };
};
