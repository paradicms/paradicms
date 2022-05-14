import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {Dataset, DataSubsetter} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  readConfigurationFile,
  readDatasetFile,
} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import {
  getNamedModelLinks,
  thumbnailTargetDimensions,
  WorkContainer,
} from "@paradicms/bootstrap";
import * as fs from "fs";
import dynamic from "next/dynamic";
import {WorkLocationSummary} from "@paradicms/services";
import {BootstrapCollectionAppConfiguration} from "../../lib/BootstrapCollectionAppConfiguration";
import {readBootstrapCollectionAppConfiguration} from "../../lib/readBootstrapCollectionAppConfiguration";
import {defaultBootstrapCollectionAppConfiguration} from "../../lib/defaultBootstrapCollectionAppConfiguration";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

const WorkLocationsMap = dynamic<{
  readonly workLocations: readonly WorkLocationSummary[];
}>(
  () =>
    import("../../components/WorkLocationsMap").then(
      module => module.WorkLocationsMap
    ),
  {ssr: false}
);

interface StaticProps {
  readonly configuration: BootstrapCollectionAppConfiguration;
  readonly datasetString: string;
  readonly workUri: string;
}

const WorkPage: React.FunctionComponent<StaticProps> = ({
  configuration,
  datasetString,
  workUri,
}) => {
  const dataset = useMemo(() => Dataset.parse(datasetString), [datasetString]);
  const work = dataset.workByUri(workUri);
  const collection = work.collections[0];

  return (
    <Layout
      cardHeaderLinks={getNamedModelLinks(work)}
      collection={collection}
      documentTitle={work.title}
      configuration={configuration}
    >
      <WorkContainer work={work} workLocationsMapComponent={WorkLocationsMap} />
    </Layout>
  );
};

export default WorkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params: {workUri: string}}[] = [];
  for (const work of readDatasetFile(readFileSync).works) {
    paths.push({
      params: {
        workUri: encodeFileName(work.uri),
      },
    });
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const workUri = decodeFileName(params!.workUri as string);
  const completeDataset = readDatasetFile(readFileSync);
  const configuration =
    readBootstrapCollectionAppConfiguration(
      readConfigurationFile(readFileSync),
      completeDataset.store
    ) ?? defaultBootstrapCollectionAppConfiguration;

  return {
    props: {
      configuration,
      datasetString: new DataSubsetter({
        completeDataset,
        workPropertyUris: configuration.workProperties.map(
          workProperty => workProperty.uri
        ),
      })
        .workDataset(completeDataset.workByUri(workUri), {
          agents: {
            thumbnail: {targetDimensions: thumbnailTargetDimensions},
          },
          allImages: true,
          collections: {},
          events: {},
          institution: {},
        })
        .stringify(),
      workUri,
    },
  };
};
