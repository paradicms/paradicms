import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {
  Collection,
  Configuration,
  Dataset,
  defaultConfiguration,
  IndexedDataset,
  JoinedDataset,
  ObjectsQuery,
  ObjectsQueryResults,
} from "@paradicms/models";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {Col, Container, Row} from "reactstrap";
import {FiltersBadges, FiltersControls, ObjectsGallery} from "@paradicms/bootstrap";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {NumberParam, useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react";
import {LunrObjectQueryService} from "@paradicms/lunr";
import {ObjectQueryService} from "@paradicms/services";
import {readDataset} from "lib/readDataset";

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
                                                         }) => {
  const [objectsQuery, setObjectsQueryParam] = useQueryParam<ObjectsQuery>(
    "query",
    new JsonQueryParamConfig<ObjectsQuery>(),
  );

  let [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam,
  );
  const page = useMemo<number>(() => pageQueryParam ?? 0, [pageQueryParam]);

  const objectQueryService = useMemo<ObjectQueryService>(() => new LunrObjectQueryService({
    configuration,
    dataset: new IndexedDataset(dataset),
  }), [configuration, dataset]);

  const [objectsQueryResults, setObjectsQueryResults] = useState<ObjectsQueryResults | null>(null);

  useEffect(() => {
    objectQueryService.getObjects({
      limit: OBJECTS_PER_PAGE,
      offset: page * OBJECTS_PER_PAGE,
      query: objectsQuery,
    }).then(setObjectsQueryResults);
  }, [objectsQuery, objectQueryService, page]);

  const objectsQueryResultsJoinedDataset = useMemo(() => objectsQueryResults !== null ? JoinedDataset.fromDataset(objectsQueryResults.dataset) : null, [objectsQueryResults]);

  if (objectsQueryResults === null || objectsQueryResultsJoinedDataset === null) {
    return null;
  }

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      onSearch={text => {
        setObjectsQueryParam({filters: [], text});
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
                    setObjectsQueryParam({
                      ...objectsQuery,
                      filters: newFilters,
                    });
                    setPage(undefined);
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Layout>
  );
};

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
      dataset: indexedDataset.collectionObjectsDataset(collection.uri),
    },
  };
};
