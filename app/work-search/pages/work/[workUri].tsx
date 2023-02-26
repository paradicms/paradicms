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
import {readWorkSearchAppConfiguration} from "../../lib/readWorkSearchAppConfiguration";
import {defaultWorkSearchAppConfiguration} from "../../lib/defaultWorkSearchAppConfiguration";
import {parseIntoDataset} from "@paradicms/rdf";
import {WorkSearchAppConfiguration} from "../../lib/WorkSearchAppConfiguration";

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
      readWorkSearchAppConfiguration([parseIntoDataset(configurationString)])!,
    [configurationString]
  );
  const modelSet = useMemo(
    () => new ModelSet(parseIntoDataset(modelSetString)),
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

export const getStaticPaths: GetStaticPaths = () => {
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

export const getStaticProps: GetStaticProps = ({
  params,
}): {props: StaticProps} => {
  const workUri = decodeFileName(params!.workUri as string);
  const completeModelSet = readModelSetFile(readFileSync);
  const configuration =
    readWorkSearchAppConfiguration([
      readConfigurationFile(readFileSync),
      completeModelSet.dataset,
    ]) ?? defaultWorkSearchAppConfiguration;

  return {
    props: {
      configurationString: configuration.stringify(),
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
        .stringify(),
      workUri,
    },
  };
};
