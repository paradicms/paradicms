import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {Hrefs} from "lib/Hrefs";
import {Configuration, Dataset, DataSubsetter} from "@paradicms/models";
import {GetStaticPaths, GetStaticProps} from "next";
import {
  decodeFileName,
  encodeFileName,
  readConfigurationFile,
  readDatasetFile,
} from "@paradicms/next";
import {
  CollectionsGallery,
  thumbnailTargetDimensions,
} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import fs from "fs";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly configuration: Configuration;
  readonly datasetString: string;
  readonly institutionUri: string;
}

const InstitutionPage: React.FunctionComponent<StaticProps> = ({
  configuration,
  datasetString,
  institutionUri,
}) => {
  const dataset = useMemo(() => Dataset.parse(datasetString), [datasetString]);
  const institution = dataset.institutionByUri(institutionUri);

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
  const dataset = readDatasetFile(readFileSync);
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
      configuration: readConfigurationFile(readFileSync),
      datasetString: new DataSubsetter(readDatasetFile(readFileSync))
        .institutionDataset(institutionUri, {
          collections: {
            institution: {},
            thumbnail: {targetDimensions: thumbnailTargetDimensions},
          },
        })
        .stringify(),
      institutionUri,
    },
  };
};
