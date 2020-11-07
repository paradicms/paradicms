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
  institutionCollections: readonly Collection[];
  institutionImages: readonly Image[];
  institutionObjects: readonly Object[];
}

const InstitutionPage: React.FunctionComponent<StaticProps> = ({
  guiMetadata,
  institution,
  institutionCollections,
  institutionImages,
  institutionObjects,
}) => {
  const institutionsByUri: {[index: string]: Institution} = {};
  institutionsByUri[institution.uri] = institution;

  const joinedCollections = Collections.join({
    collections: institutionCollections,
    institutionsByUri,
    imagesByDepictsUri: Images.indexByDepictsUri(institutionImages),
    objectsByCollectionUri: Objects.indexByCollectionUri({
      objects: institutionObjects,
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
  return {
    fallback: false,
    paths: new Data().institutions.map(institution => ({
      params: {institutionUri: encodeFileName(institution.uri)},
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const data = new Data();
  const institutionUri = decodeFileName(params!.institutionUri as string);
  return {
    props: {
      guiMetadata: data.guiMetadata,
      institution: data.institutions.find(
        institution => institution.uri === institutionUri
      )!,
      institutionCollections: data.collections.filter(
        collection => collection.institutionUri === institutionUri
      ),
      institutionImages: data.images.filter(
        image => image.institutionUri === institutionUri
      ),
      institutionObjects: data.objects.filter(
        object => object.institutionUri === institutionUri
      ),
    },
  };
};
