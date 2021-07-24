import * as React from "react";
import {Layout} from "components/Layout";
import {Hrefs} from "lib/Hrefs";
import {Configuration, JoinedImage} from "@paradicms/models";
import {GetStaticPaths, GetStaticProps} from "next";
import {Data} from "lib/Data";
import {decodeFileName, encodeFileName} from "@paradicms/next";
import {CollectionsGallery, thumbnailTargetDimensions} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {
  indexImagesByDepictsUri,
  indexObjectsByCollectionUri,
  joinImage,
  selectCollectionImages,
  selectThumbnail,
} from "@paradicms/model-utils";

interface StaticProps {
  readonly configuration: Configuration;
  readonly institution: {
    readonly collections: readonly {
      readonly thumbnail: JoinedImage | null;
      readonly title: string;
      readonly uri: string;
    }[];
    readonly name: string;
    readonly uri: string;
  };
}

const InstitutionPage: React.FunctionComponent<StaticProps> = ({
                                                                 configuration,
                                                                 institution,
                                                               }) => {
  return (
    <Layout
      breadcrumbs={{institution}}
      documentTitle={`${institution.name} - Collections`}
      configuration={configuration}
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
    props: {
      configuration: data.configuration,
      institution: {
        collections: institutionCollections.map(collection => {
          const thumbnail = selectThumbnail({
            images: selectCollectionImages({
              collection,
              imagesByDepictsUri: institutionImagesByDepictsUri,
              objectsByCollectionUri: indexObjectsByCollectionUri(
                institutionObjects,
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
              : null,
            title: collection.title,
            uri: collection.uri,
          };
        }),
        name: institution.name,
        uri: institution.uri,
      },
    },
  };
};
