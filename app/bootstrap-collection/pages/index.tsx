import * as React from "react";
import {
  Collection,
  Configuration,
  Dataset,
  DataSubsetter,
  defaultConfiguration,
  IndexedDataset,
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

const IndexPage: React.FunctionComponent<StaticProps> = ({
                                                           collection,
                                                           configuration,
                                                           dataset,
                                                         }) => (
  <LunrObjectSearchPage configuration={configuration} dataset={dataset} objectsPerPage={OBJECTS_PER_PAGE}>
    {({
        objectsQuery,
        objectsQueryResults,
        objectsQueryResultsJoinedDataset,
        page,
        setObjectsQuery,
        setPage,
      }) => (
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
              {objectsQueryResultsJoinedDataset.objects.length > 0 ? (
                <ObjectsGallery
                  objects={objectsQueryResultsJoinedDataset.objects}
                  objectsPerPage={OBJECTS_PER_PAGE}
                  objectsTotalCount={objectsQueryResults.totalObjectsCount}
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
  </LunrObjectSearchPage>
  );

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const completeDataset = readDataset();
  const collection = completeDataset.collections[0];
  const collectionDataset = new DataSubsetter(new IndexedDataset(completeDataset)).collectionDataset(collection.uri, {
    objects: {thumbnail: {targetDimensions: thumbnailTargetDimensions}},
  });

  console.log("Collection dataset:", Object.keys(collectionDataset).map(key => `${key}: ${((collectionDataset as any)[key] as any[]).length}`).join(", "));

  return {
    props: {
      collection,
      configuration: defaultConfiguration,
      dataset: collectionDataset,
    },
  };
};
