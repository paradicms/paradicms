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
  smallThumbnailTargetDimensions,
  WorkContainer,
} from "@paradicms/react-dom-components";
import * as fs from "fs";
import dynamic from "next/dynamic";
import {WorkLocationSummary} from "@paradicms/services";
import {getWorkSearchAppConfiguration} from "../../lib/getWorkSearchAppConfiguration";
import {fastStringToDataset} from "@paradicms/rdf";
import {WorkSearchAppConfiguration} from "../../lib/WorkSearchAppConfiguration";

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

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
  readonly configurationString: string;
  readonly modelSetString: string;
  readonly workUri: string;
}

const WorkPage: React.FunctionComponent<StaticProps> = ({
  configurationString,
  modelSetString,
  workUri,
}) => {
  const configuration = useMemo<WorkSearchAppConfiguration>(
    () =>
      getWorkSearchAppConfiguration([fastStringToDataset(configurationString)]),
    [configurationString]
  );
  const modelSet = useMemo(
    () => ModelSet.fromDataset(fastStringToDataset(modelSetString)),
    [modelSetString]
  );
  const work = modelSet.workByUri(workUri);

  return (
    <Layout
      cardHeaderLinks={getNamedModelLinks(work)}
      title={work.title}
      configuration={configuration}
    >
      <WorkContainer
        renderWorkLocationsMap={workLocations => (
          <WorkLocationsMap workLocations={workLocations} />
        )}
        work={work}
      />
    </Layout>
  );
};

export default WorkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params: {workUri: string}}[] = [];
  for (const work of (await readModelSetFile(readFile)).works) {
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
  const completeModelSet = await readModelSetFile(readFile);
  const configuration = getWorkSearchAppConfiguration([
    await readConfigurationFile(readFile),
    completeModelSet.dataset,
  ]);

  return {
    props: {
      configurationString: configuration.toFastString(),
      modelSetString: new ModelSubsetter({
        completeModelSet,
        workPropertyUris: configuration.workProperties.map(
          workProperty => workProperty.uri
        ),
      })
        .workModelSet(completeModelSet.workByUri(workUri), {
          agents: {
            thumbnail: {targetDimensions: smallThumbnailTargetDimensions},
          },
          allImages: true,
          collections: {},
          events: {},
          institution: {},
        })
        .toFastString(),
      workUri,
    },
  };
};
