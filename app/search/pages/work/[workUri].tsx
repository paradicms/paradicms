import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {ModelSet, ModelSubsetter} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  readConfigurationFile,
  readModelSetFile,
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
import {CollectionAppConfiguration} from "../../lib/CollectionAppConfiguration";
import {readCollectionAppConfiguration} from "../../lib/readCollectionAppConfiguration";
import {defaultCollectionAppConfiguration} from "../../lib/defaultCollectionAppConfiguration";
import {parseIntoDataset} from "@paradicms/rdf";

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
  readonly configuration: CollectionAppConfiguration;
  readonly modelSetString: string;
  readonly workUri: string;
}

const WorkPage: React.FunctionComponent<StaticProps> = ({
  configuration,
  modelSetString,
  workUri,
}) => {
  const modelSet = useMemo(
    () => new ModelSet(parseIntoDataset(modelSetString)),
    [modelSetString]
  );
  const work = modelSet.workByUri(workUri);
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
  for (const work of readModelSetFile(readFileSync).works) {
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
  const completeModelSet = readModelSetFile(readFileSync);
  const configuration =
    readCollectionAppConfiguration(
      readConfigurationFile(readFileSync),
      completeModelSet.dataset
    ) ?? defaultCollectionAppConfiguration;

  return {
    props: {
      configuration,
      modelSetString: new ModelSubsetter({
        completeModelSet,
        workPropertyUris: configuration.workProperties.map(
          workProperty => workProperty.uri
        ),
      })
        .workModelSet(completeModelSet.workByUri(workUri), {
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
