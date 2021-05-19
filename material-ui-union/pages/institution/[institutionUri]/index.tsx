import * as React from "react";
import {Layout} from "components/Layout";
import {Hrefs} from "lib/Hrefs";
import {GuiMetadata, JoinedImage} from "@paradicms/models";
import {GetStaticPaths, GetStaticProps} from "next";
import {Data} from "lib/Data";
import {decodeFileName, encodeFileName} from "@paradicms/base";
import {
  CollectionsGallery,
  thumbnailTargetDimensions,
} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {
  deleteUndefined,
  indexImagesByDepictsUri,
  indexObjectsByCollectionUri,
  joinImage,
  selectCollectionImages,
  selectThumbnail,
} from "@paradicms/model-utils";

interface StaticProps {
  readonly guiMetadata: GuiMetadata | null;
  readonly institution: {
    readonly collections: readonly {
      readonly title: string;
      readonly thumbnail?: JoinedImage;
      readonly uri: string;
    }[];
    readonly name: string;
    readonly uri: string;
  };
}

const InstitutionPage: React.FunctionComponent<StaticProps> = ({
  guiMetadata,
  institution,
}) => {
  return (
    <Layout
      breadcrumbs={{institution}}
      documentTitle={`${institution.name} - Collections`}
      guiMetadata={guiMetadata}
    >
      <CollectionsGallery
        collections={institution.collections}
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

  const institution = data.institutionByUri(institutionUri);

  const institutionCollections = data.institutionCollections(institutionUri);

  const institutionObjects = data.institutionObjects(institutionUri);

  const institutionImagesByDepictsUri = indexImagesByDepictsUri(
    data.institutionImages(institutionUri)
  );

  return {
    props: deleteUndefined({
      guiMetadata: data.guiMetadata,
      institution: {
        collections: institutionCollections.map(collection => {
          const thumbnail = selectThumbnail({
            images: selectCollectionImages({
              collection,
              imagesByDepictsUri: institutionImagesByDepictsUri,
              objectsByCollectionUri: indexObjectsByCollectionUri(
                institutionObjects
              ),
            }),
            targetDimensions: thumbnailTargetDimensions,
          });
          return {
            thumbnail: thumbnail
              ? joinImage({
                  image: thumbnail,
                  licenseTitlesByUri: data.licenseTitlesByUri,
                  rightsStatementPrefLabelsByUri:
                    data.rightsStatementPrefLabelsByUri,
                })
              : undefined,
            title: collection.title,
            uri: collection.uri,
          };
        }),
        name: institution.name,
        uri: institution.uri,
      },
    }),
  };
};
