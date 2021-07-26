import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {
  Configuration,
  JoinedImage,
  JoinedRights,
  Object,
  ObjectsQuery,
  ObjectsQueryResults,
  Property,
  PropertyDefinition,
} from "@paradicms/models";
import {Layout} from "components/Layout";
import {Data} from "lib/Data";
import {GetStaticProps} from "next";
import {Col, Container, Row} from "reactstrap";
import {FiltersBadges, FiltersControls, ObjectsGallery} from "@paradicms/bootstrap";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {NumberParam, useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react";
import {joinImage, joinRights, selectThumbnail} from "@paradicms/model-utils";
import {LunrObjectQueryService} from "@paradicms/lunr";
import {ObjectQueryService} from "@paradicms/services";

interface StaticProps {
  readonly configuration: Configuration;
  readonly institution: {
    readonly collection: {
      // The collectionUris and institutionUri properties are implied by the structure.
      readonly objects: readonly {
        readonly abstract: string | null;
        readonly page: string | null;
        readonly properties: readonly Property[] | null;
        readonly rights: JoinedRights | null;
        readonly thumbnail: JoinedImage | null;
        readonly title: string;
        readonly uri: string;
      }[];
      readonly title: string;
      readonly uri: string;
    };
    readonly name: string;
    readonly rights: JoinedRights | null;
    readonly uri: string;
  };
  readonly propertyDefinitions: readonly PropertyDefinition[];
}

const OBJECTS_PER_PAGE = 10;

const IndexPage: React.FunctionComponent<StaticProps> = ({
                                                           configuration,
                                                           institution,
                                                           propertyDefinitions,
                                                         }) => {
  const collection = institution.collection;

  // The collection and institution on the objects prop are implied
  // Make them explicit here so we can have Object for other users.
  const allObjects: readonly Object[] = useMemo(
    () =>
      collection.objects.map(object => ({
        ...object,
        collectionUris: [collection.uri],
        institutionUri: institution.uri,
      })),
    [institution],
  );

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
    objects: allObjects,
  }), [configuration, allObjects]);

  const [objectsQueryResults, setObjectsQueryResults] = useState<ObjectsQueryResults | null>(null);

  useEffect(() => {
    objectQueryService.getObjects({
      limit: OBJECTS_PER_PAGE,
      offset: page * OBJECTS_PER_PAGE,
      query: objectsQuery,
    }).then(setObjectsQueryResults);
  }, [objectsQuery, objectQueryService, page]);

  if (objectsQueryResults === null) {
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
        {objectsQueryResults.totalCount > 0 ? (
          <>
            <Row>
              <Col xs={12}>
                <h4 className="d-inline-block">
                  <span>{objectsQueryResults.totalCount}</span>&nbsp;
                  <span>{objectsQueryResults.totalCount === 1 ? "object" : "objects"}</span>
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
                {objects.length > 0 ? (
                  <ObjectsGallery
                    objects={objectsQueryResults.objects}
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
  const data = new Data();

  const collection = data.collection;
  const institution = data.institution;

  return {
    props: {
      configuration: data.configuration,
      institution: {
        collection: {
          objects: data.objects.map(object => {
            const images = data.images.filter(
              image => image.depictsUri === object.uri,
            );
            const thumbnail = selectThumbnail({
              images,
              targetDimensions: {height: 200, width: 200},
            });
            return {
              abstract: object.abstract,
              page: object.page,
              properties: object.properties,
              rights: object.rights
                ? joinRights({
                  licenseTitlesByUri: data.licenseTitlesByUri,
                  rights: object.rights,
                  rightsStatementPrefLabelsByUri:
                  data.rightsStatementPrefLabelsByUri,
                })
                : null,
              thumbnail: thumbnail
                ? joinImage({
                    image: thumbnail,
                    licenseTitlesByUri: data.licenseTitlesByUri,
                    rightsStatementPrefLabelsByUri:
                      data.rightsStatementPrefLabelsByUri,
                  })
                : null,
              title: object.title,
              uri: object.uri,
            };
          }),
          title: collection.title,
          uri: collection.uri,
        },
        name: institution.name,
        rights: institution.rights
          ? joinRights({
              licenseTitlesByUri: data.licenseTitlesByUri,
              rights: institution.rights,
              rightsStatementPrefLabelsByUri:
                data.rightsStatementPrefLabelsByUri,
            })
          : null,
        uri: institution.uri,
      },
      propertyDefinitions: data.propertyDefinitions,
    },
  };
};
