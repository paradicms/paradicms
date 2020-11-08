import {NumberParam, useQueryParam} from "use-query-params";
import {
  decodeFileName,
  encodeFileName,
  JsonQueryParamConfig,
} from "@paradicms/base";
import * as React from "react";
import {Layout} from "components/Layout";
import {
  Collection,
  GuiMetadata,
  Image,
  Institution,
  Object,
  ObjectFilters,
  PropertyDefinition,
} from "@paradicms/models";
import {Data} from "lib/Data";
import {GetStaticPaths, GetStaticProps} from "next";
import {ObjectFacetedSearchGrid} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";

interface StaticProps {
  collection: Collection;
  guiMetadata: GuiMetadata | null;
  images: readonly Image[];
  institution: Institution;
  objects: readonly Object[];
  propertyDefinitions: readonly PropertyDefinition[];
}

const CollectionPage: React.FunctionComponent<StaticProps> = ({
  collection,
  guiMetadata,
  images,
  institution,
  objects,
  propertyDefinitions,
}) => {
  const [filters, setFilters] = useQueryParam<ObjectFilters>(
    "filters",
    new JsonQueryParamConfig<ObjectFilters>()
  );
  const [page, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );

  return (
    <Layout
      breadcrumbs={{collection, institution}}
      cardTitle={
        <span>
          <span>
            Collection&nbsp;&mdash;&nbsp;
            <span data-cy="collection-title">{collection.title}</span>
          </span>
        </span>
      }
      documentTitle={"Collection - " + collection.title}
      guiMetadata={guiMetadata}
    >
      <ObjectFacetedSearchGrid
        collections={[collection]}
        images={images}
        institutions={[institution]}
        objects={objects}
        onChangeFilters={setFilters}
        onChangePage={setPage}
        page={page ?? 0}
        propertyDefinitions={propertyDefinitions}
        renderObjectLink={(object, children) => (
          <Link
            {...Hrefs.institution(object.institution.uri).object(object.uri)}
          >
            {children}
          </Link>
        )}
        query={{filters}}
      />
    </Layout>
  );
};

export default CollectionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = new Data();
  const paths: {params: {collectionUri: string; institutionUri: string}}[] = [];
  for (const institution of data.institutions) {
    for (const collection of data.collections.filter(
      collection => collection.institutionUri == institution.uri
    )) {
      paths.push({
        params: {
          collectionUri: encodeFileName(collection.uri),
          institutionUri: encodeFileName(institution.uri),
        },
      });
    }
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const collectionUri = decodeFileName(params!.collectionUri as string);
  const institutionUri = decodeFileName(params!.institutionUri as string);

  const data = new Data();
  const collection = data.collections.find(
    collection => collection.uri === collectionUri
  )!;
  const institution = data.institutions.find(
    institution => institution.uri === institutionUri
  )!;
  const objects = data.objects.filter(object =>
    object.collectionUris.some(
      objectCollectionUri => objectCollectionUri === collectionUri
    )
  );
  const objectUris = new Set<string>(objects.map(object => object.uri));
  const images = data.images.filter(image => objectUris.has(image.depictsUri));

  return {
    props: {
      collection,
      guiMetadata: data.guiMetadata,
      images,
      institution,
      objects,
      propertyDefinitions: data.propertyDefinitions,
    },
  };
};
