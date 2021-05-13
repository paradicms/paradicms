import * as React from "react";
import {Layout} from "components/Layout";
import {Hrefs} from "lib/Hrefs";
import {
  Collection,
  GuiMetadata,
  Image,
  Institution,
  Object,
} from "@paradicms/models";
import {GetStaticPaths, GetStaticProps} from "next";
import {Data} from "lib/Data";
import {decodeFileName, encodeFileName} from "@paradicms/base";
import {CollectionsGallery} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {
  indexImagesByDepictsUri,
  indexModelsByUri,
  indexObjectsByCollectionUri,
  joinCollections,
  selectCollectionImages,
} from "@paradicms/model-utils";

interface StaticProps {
  guiMetadata: GuiMetadata | null;
  institution: Institution;
  institutionCollectionImagesByDepictsUri: {[index: string]: readonly Image[]}; // No duplicate Images
  institutionCollections: readonly Collection[];
  institutionObjects: readonly Object[];
}

const InstitutionPage: React.FunctionComponent<StaticProps> = ({
  guiMetadata,
  institution,
  institutionCollections,
  institutionCollectionImagesByDepictsUri,
  institutionObjects,
}) => {
  const joinedCollections = React.useMemo(
    () =>
      joinCollections({
        collections: institutionCollections,
        imagesByDepictsUri: institutionCollectionImagesByDepictsUri,
        institutionsByUri: indexModelsByUri([institution]),
        objectsByCollectionUri: indexObjectsByCollectionUri(institutionObjects),
      }),
    [
      institution,
      institutionCollectionImagesByDepictsUri,
      institutionCollections,
      institutionObjects,
    ]
  );

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
            href={
              Hrefs.institution(institution.uri).collection(collection.uri).home
            }
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

  const institutionCollections =
    data.collectionsByInstitutionUri[institutionUri] ?? [];

  const institutionObjects = data.objectsByInstitutionUri[institutionUri] ?? [];

  const institutionImagesByDepictsUri = indexImagesByDepictsUri(
    data.imagesByInstitutionUri[institutionUri] ?? []
  );

  const institutionCollectionImages: Image[] = [];
  for (const collection of institutionCollections) {
    institutionCollectionImages.push(
      ...selectCollectionImages({
        collection,
        imagesByDepictsUri: institutionImagesByDepictsUri,
        objectsByCollectionUri: indexObjectsByCollectionUri(institutionObjects),
      })
    );
  }

  return {
    props: {
      guiMetadata: data.guiMetadata,
      institution: data.institutionByUri(institutionUri),
      institutionCollectionImagesByDepictsUri: indexImagesByDepictsUri(
        institutionCollectionImages
      ),
      institutionCollections,
      institutionObjects,
    },
  };
};
