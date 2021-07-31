import * as React from "react";
import {Layout} from "components/Layout";
import {Hrefs} from "lib/Hrefs";
import {Configuration, Dataset, defaultConfiguration, IndexedDataset, JoinedDataset} from "@paradicms/models";
import {GetStaticPaths, GetStaticProps} from "next";
import {decodeFileName, encodeFileName} from "@paradicms/next";
import {CollectionsGallery} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {readDataset} from "lib/readDataset";
import {useMemo} from "react";

interface StaticProps {
  readonly configuration: Configuration;
  readonly dataset: Dataset;
  readonly institutionUri: string;
}

const InstitutionPage: React.FunctionComponent<StaticProps> = ({
                                                                 configuration,
                                                                 dataset,
  institutionUri
                                                               }) => {
  const joinedDataset = useMemo(() => JoinedDataset.fromDataset(dataset), [dataset]);
  const institution = useMemo(() => joinedDataset.institutionByUri(institutionUri), [institutionUri, joinedDataset]);

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
  const dataset = readDataset();
  return {
    fallback: false,
    paths: dataset.institutions.map(institution => ({
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
      configuration: defaultConfiguration,
      dataset: new IndexedDataset(readDataset()).institutionDataset(institutionUri),
      institutionUri,
  };
};
