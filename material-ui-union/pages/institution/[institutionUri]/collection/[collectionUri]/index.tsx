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
  collectionObjects: readonly Object[];
  guiMetadata: GuiMetadata | null;
  institution: Institution;
  institutionImages: readonly Image[];
  propertyDefinitions: readonly PropertyDefinition[];
}

const CollectionPage: React.FunctionComponent<StaticProps> = ({
  collection,
  collectionObjects,
  guiMetadata,
  institution,
  institutionImages,
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
        images={institutionImages}
        institutions={[institution]}
        objects={collectionObjects}
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
  return {
    props: {
      collection: data.collections.find(
        collection => collection.uri === collectionUri
      )!,
      collectionObjects: data.objects.filter(object =>
        object.collectionUris.some(
          objectCollectionUri => objectCollectionUri === collectionUri
        )
      ),
      guiMetadata: data.guiMetadata,
      institution: data.institutions.find(
        institution => institution.uri === institutionUri
      )!,
      institutionImages: data.images.filter(
        image => image.institutionUri === institutionUri
      ),
      propertyDefinitions: data.propertyDefinitions,
    },
  };
};
