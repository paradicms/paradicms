import * as React from "react";
import {
  Collection,
  Image,
  Images,
  Institution,
  JoinedObject,
  Models,
  Object,
  ObjectQuery,
  Objects,
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
import {useMemo} from "react";

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

  const filteredObjects = useMemo(
    () =>
      objectQuery?.filters
        ? Objects.filter({
            filters: objectQuery.filters,
            objects,
          })
        : objects,
    [objectQuery, objects]
  );

  const objectFacets = useMemo(
    () => Objects.facetize(propertyDefinitions, objects),
    [filteredObjects, propertyDefinitions]
  );

  const joinedFilteredObjects: readonly JoinedObject[] = useMemo(
    () =>
      Objects.join({
        collectionsByUri: Models.indexByUri([collection]),
        imagesByDepictsUri: Images.indexByDepictsUri(images),
        institutionsByUri: Models.indexByUri([institution]),
        objects: filteredObjects,
      }),
    [collection, images, institution, filteredObjects]
  );

  let [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );
  const page = pageQueryParam ?? 0;

  return (
    <Layout collection={collection}>
      <Container fluid>
        <Row>
          <Col xs="10">
            <ObjectsGallery
              objects={joinedFilteredObjects}
              onChangePage={setPage}
              page={page}
              renderObjectLink={(object, children) => (
                <Link {...Hrefs.object(object.uri)}>
                  <a>{children}</a>
                </Link>
              )}
            />
          </Col>
          <Col xs="2">
            <ObjectFacetsContainer
              facets={objectFacets}
              filters={objectQuery?.filters ?? {}}
              onChange={newObjectFilters => {
                setObjectQueryParam({
                  ...objectQuery,
                  filters: newObjectFilters,
                });
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
