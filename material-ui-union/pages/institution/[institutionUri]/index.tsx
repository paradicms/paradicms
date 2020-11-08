import * as React from "react";
import {Layout} from "components/Layout";
import {Hrefs} from "lib/Hrefs";
import {
  Collection,
  Collections,
  GuiMetadata,
  Image,
  Images,
  Institution,
  Models,
  Object,
  Objects,
} from "@paradicms/models";
import {GetStaticPaths, GetStaticProps} from "next";
import {Data} from "lib/Data";
import {decodeFileName, encodeFileName} from "@paradicms/base";
import {CollectionsGallery} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";

interface StaticProps {
  guiMetadata: GuiMetadata | null;
  institution: Institution;
  objects: readonly Object[];
  collections: readonly Collection[];
  images: readonly Image[];
}

const InstitutionPage: React.FunctionComponent<StaticProps> = ({
  collections,
  guiMetadata,
  images,
  institution,
  objects,
}) => {
  const joinedCollections = Collections.join({
    collections,
    institutionsByUri: Models.indexByUri([institution]),
    imagesByDepictsUri: Images.indexByDepictsUri(images),
    objectsByCollectionUri: Objects.indexByCollectionUri({
      objects: objects,
    }),
  });

  return (
    <Layout
      breadcrumbs={{institution}}
      documentTitle={`${institution.name} - Collections`}
      guiMetadata={guiMetadata}
    >
      <CollectionsGallery
        collections={joinedCollections}
        renderCollectionLink={(collection, children) => (
          <Link
            {...Hrefs.institution(institution.uri).collection(collection.uri)
              .home}
            data-cy={"collection-link-" + collection.uri}
          >
            {children}
          </Link>
        )}
      />
    </Layout>
  );
};

export default InstitutionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = Data.instance;
  return {
    fallback: false,
    paths: data.institutions.map(institution => ({
      params: {institutionUri: encodeFileName(institution.uri)},
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const data = Data.instance;
  const institutionUri = decodeFileName(params!.institutionUri as string);
  return {
    props: {
      collections: data.collections.filter(
        collection => collection.institutionUri === institutionUri
      ),
      guiMetadata: data.guiMetadata,
      images: data.images.filter(
        image => image.institutionUri === institutionUri
      ),
      institution: data.institutions.find(
        institution => institution.uri === institutionUri
      )!,
      objects: data.objects.filter(
        object => object.institutionUri === institutionUri
      ),
    },
  };
};
