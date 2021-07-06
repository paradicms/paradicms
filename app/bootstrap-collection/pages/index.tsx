import * as React from "react";
import {GuiMetadata, JoinedImage, JoinedRights, ObjectQuery, Property, PropertyDefinition} from "@paradicms/models";
import {Layout} from "components/Layout";
import {Data} from "lib/Data";
import {GetStaticProps} from "next";
import {Col, Container, Row} from "reactstrap";
import {ObjectFacetsControls, ObjectFiltersBadges, ObjectsGallery} from "@paradicms/bootstrap";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {NumberParam, useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/base";
import {IndexedObject, ObjectFacetedSearchQuery} from "@paradicms/lunr";
import {joinImage, joinRights, selectThumbnail} from "@paradicms/model-utils";

interface StaticProps {
  readonly guiMetadata: GuiMetadata | null;
  readonly institution: {
    readonly collection: {
      readonly objects: readonly {
        readonly abstract: string | null;
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

const IndexPage: React.FunctionComponent<StaticProps> = ({
                                                           guiMetadata,
                                                           institution,
                                                           propertyDefinitions,
                                                         }) => {
  const collection = institution.collection;

  const [objectQuery, setObjectQueryParam] = useQueryParam<ObjectQuery>(
    "query",
    new JsonQueryParamConfig<ObjectQuery>(),
  );

  let [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam,
  );
  const page = pageQueryParam ?? 0;

  const indexedObjects: readonly IndexedObject[] = React.useMemo(
    () =>
      collection.objects.map(object => ({
        abstract: object.abstract,
        collectionUris: [collection.uri],
        institutionUri: institution.uri,
        properties: object.properties,
        title: object.title,
        uri: object.uri,
      })),
    [institution]
  );

  return (
    <ObjectFacetedSearchQuery
      objects={indexedObjects}
      propertyDefinitions={propertyDefinitions}
      query={objectQuery ?? {}}
    >
      {({objectFacets, objects}) => (
        <Layout
          collection={collection}
          guiMetadata={guiMetadata}
          onSearch={text => {
            setObjectQueryParam({filters: null, text});
            setPage(undefined);
          }}
        >
          <Container fluid>
            {objects.length > 0 ? (
              <>
                <Row>
                  <Col xs={12}>
                    <h4 className="d-inline-block">
                      <span>{objects.length}</span>&nbsp;
                      <span>{objects.length === 1 ? "object" : "objects"}</span>
                      &nbsp;
                      {objectQuery && objectQuery.text ? (
                        <span>
                          matching <i>{objectQuery.text}</i>
                        </span>
                      ) : (
                        <span>matched</span>
                      )}
                    </h4>
                    {objectQuery?.filters ? (
                      <div className="d-inline-block">
                        <ObjectFiltersBadges
                          facets={objectFacets}
                          filters={objectQuery.filters}
                          propertyDefinitions={propertyDefinitions}
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
                    objects={objects}
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
                <ObjectFacetsControls
                  facets={objectFacets}
                  filters={
                    objectQuery?.filters ?? {
                      collectionUris: null,
                      institutionUris: null,
                      properties: null,
                    }
                  }
                  onChange={newObjectFilters => {
                    setObjectQueryParam({
                      ...objectQuery,
                      filters: newObjectFilters,
                    });
                    setPage(undefined);
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Layout>
      )}
    </ObjectFacetedSearchQuery>
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
      guiMetadata: data.guiMetadata,
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
