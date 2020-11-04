import * as React from "react";
import {
  Collection,
  Image,
  Institution,
  Object,
  ObjectQuery,
  PropertyDefinition,
} from "@paradicms/models";
import {Layout} from "components/Layout";
import {Data} from "lib/Data";
import {GetStaticProps} from "next";
import {Col, Container, Row} from "reactstrap";
import {ObjectsGallery} from "components/ObjectsGallery";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {NumberParam, useQueryParam} from "use-query-params";
import {ObjectFacetsContainer} from "components/ObjectFacetsContainer";
import {JsonQueryParamConfig} from "@paradicms/base";
import {ObjectFacetedSearch} from "@paradicms/lunr";
import {ObjectFiltersBadges} from "components/ObjectFiltersBadges";

interface StaticProps {
  collection: Collection;
  images: readonly Image[];
  institution: Institution;
  objects: readonly Object[];
  propertyDefinitions: readonly PropertyDefinition[];
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collection,
  images,
  institution,
  objects,
  propertyDefinitions,
}) => {
  const [objectQuery, setObjectQueryParam] = useQueryParam<ObjectQuery>(
    "query",
    new JsonQueryParamConfig<ObjectQuery>()
  );

  let [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );
  const page = pageQueryParam ?? 0;

  return (
    <ObjectFacetedSearch
      collections={[collection]}
      images={images}
      institutions={[institution]}
      objects={objects}
      propertyDefinitions={propertyDefinitions}
      query={objectQuery ?? {}}
    >
      {({objectFacets, objects}) => (
        <Layout
          collection={collection}
          onSearch={text => {
            setObjectQueryParam({text});
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
                          objectFilters={objectQuery.filters}
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
                      <Link {...Hrefs.object(object.uri)}>
                        <a>{children}</a>
                      </Link>
                    )}
                  />
                ) : (
                  <h3>No matching objects found.</h3>
                )}
              </Col>
              <Col xs="2">
                {objects.length > 0 ? (
                  <ObjectFacetsContainer
                    facets={objectFacets}
                    filters={objectQuery?.filters ?? {}}
                    onChange={newObjectFilters => {
                      setObjectQueryParam({
                        ...objectQuery,
                        filters: newObjectFilters,
                      });
                      setPage(undefined);
                    }}
                  />
                ) : null}
              </Col>
            </Row>
          </Container>
        </Layout>
      )}
    </ObjectFacetedSearch>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const data = new Data();
  return {
    props: {
      collection: data.collection,
      images: data.images,
      institution: data.institution,
      objects: data.objects,
      propertyDefinitions: data.propertyDefinitions,
    },
  };
};
