import * as React from "react";
import {Collection, Configuration, Dataset, defaultConfiguration, IndexedDataset} from "@paradicms/models";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {Col, Container, Row} from "reactstrap";
import {FiltersBadges, FiltersControls, ObjectsGallery} from "@paradicms/bootstrap";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {readDataset} from "lib/readDataset";
import {NextSearchPage} from "@paradicms/next";

interface StaticProps {
  readonly collection: Collection;
  readonly configuration: Configuration;
  readonly dataset: Dataset;
}

const OBJECTS_PER_PAGE = 10;

const IndexPage: React.FunctionComponent<StaticProps> = ({
                                                           collection,
                                                           configuration,
                                                           dataset,
                                                         }) => (
  <NextSearchPage configuration={configuration} dataset={dataset}>
    {({joinedDataset, objectsQuery, objectsQueryResults, page, pageMax, setObjectsQuery, setPage}) => (
      <Layout
        collection={collection}
        configuration={configuration}
        onSearch={text => {
          setObjectsQuery({filters: [], text});
          setPage(undefined);
        }}
      >
        <Container fluid>
          {objectsQueryResults.totalObjectsCount > 0 ? (
            <>
              <Row>
                <Col xs={12}>
                  <h4 className="d-inline-block">
                    <span>{objectsQueryResults.totalObjectsCount}</span>&nbsp;
                    <span>{objectsQueryResults.totalObjectsCount === 1 ? "object" : "objects"}</span>
                    &nbsp;
                    {objectsQuery.text ? (
                      <span>
                          matching <i>{objectsQuery.text}</i>
                        </span>
                    ) : (
                      <span>matched</span>
                    )}
                  </h4>
                  {objectsQuery.filters.length > 0 ? (
                    <div className="d-inline-block">
                      <FiltersBadges
                        filters={objectsQuery.filters}
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
              {joinedDataset.objects.length > 0 ? (
                <ObjectsGallery
                  objects={joinedDataset.objects}
                  objectsPerPage={OBJECTS_PER_PAGE}
                  objectsTotalCount={objectsQueryResults.totalObjectsCount}
                  onChangePage={setPage}
                  page={page}
                  // pageMax={Math.ceil(objectsQueryResults.totalCount / OBJECTS_PER_PAGE) - 1}
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
                facets={objectsQueryResults.facets}
                filters={objectsQuery.filters}
                onChange={newFilters => {
                  setObjectsQuery({
                    ...objectsQuery,
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
  </NextSearchPage>
  );

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const dataset = readDataset();
  const indexedDataset = new IndexedDataset(dataset);
  const collection = indexedDataset.firstCollection;
  return {
    props: {
      collection,
      configuration: defaultConfiguration,
      dataset: indexedDataset.collectionDataset(collection.uri),
    },
  };
};
