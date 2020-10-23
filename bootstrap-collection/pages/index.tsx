import * as React from "react";
import {
  Collection,
  Images,
  Institution,
  JoinedObject,
  Objects,
} from "@paradicms/models";
import {Layout} from "components/Layout";
import {Data} from "lib/Data";
import {GetStaticProps} from "next";
import {Col, Container, Row} from "reactstrap";
import {ObjectsGallery} from "components/ObjectsGallery";
import {Hrefs} from "lib/Hrefs";
import {Link} from "next/link";
import {NumberParam, useQueryParam} from "use-query-params";

interface StaticProps {
  collection: Collection;
  objects: readonly JoinedObject[];
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collection,
  objects,
}) => {
  let [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );
  const page = pageQueryParam ?? 0;

  return (
    <Layout collection={collection}>
      <Container fluid>
        <Row>
          <Col xs="12">
            <ObjectsGallery
              objects={objects}
              onChangePage={setPage}
              page={page}
              renderObjectLink={(object, children) => (
                <Link {...Hrefs.object(object.uri).href}>
                  <a>{children}</a>
                </Link>
              )}
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
      objects: Objects.join({
        collectionsByUri: [data.collection].reduce(
          (
            collectionsByUri: {[index: string]: Collection},
            collection: Collection
          ) => {
            collectionsByUri[collection.uri] = collection;
            return collectionsByUri;
          },
          {}
        ),
        imagesByDepictsUri: Images.indexByDepictsUri(data.images),
        institutionsByUri: [data.institution].reduce(
          (
            institutionsByUri: {[index: string]: Institution},
            institution: Institution
          ) => {
            institutionsByUri[institution.uri] = institution;
            return institutionsByUri;
          },
          {}
        ),
        objects: data.objects,
      }),
    },
  };
};
