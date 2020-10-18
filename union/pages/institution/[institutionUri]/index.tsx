import * as React from "react";
import {Layout} from "components/Layout";
import {Hrefs} from "lib/Hrefs";
import {
  Collection,
  Collections,
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
  institution: Institution;
  institutionCollections: readonly Collection[];
  institutionImages: readonly Image[];
  institutionObjects: readonly Object[];
}

const InstitutionPage: React.FunctionComponent<StaticProps> = ({
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
    paths: Data.institutions.map(institution => ({
      params: {institutionUri: encodeFileName(institution.uri)},
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const institutionUri = decodeFileName(params!.institutionUri as string);
  return {
    props: {
      institution: Data.institutions.find(
        institution => institution.uri === institutionUri
      )!,
      institutionCollections: Data.collections.filter(
        collection => collection.institutionUri === institutionUri
      ),
      institutionImages: Data.images.filter(
        image => image.institutionUri === institutionUri
      ),
      institutionObjects: Data.objects.filter(
        object => object.institutionUri === institutionUri
      ),
    },
  };
};
