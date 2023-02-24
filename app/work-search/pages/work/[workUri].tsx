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
import {WorkSearchAppConfiguration} from "../../lib/WorkSearchAppConfiguration";
import {readWorkSearchAppConfiguration} from "../../lib/readWorkSearchAppConfiguration";
import {defaultSearchAppConfiguration} from "../../lib/defaultSearchAppConfiguration";
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
  readonly configuration: WorkSearchAppConfiguration;
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
    readWorkSearchAppConfiguration(
      readConfigurationFile(readFileSync),
      completeModelSet.dataset
    ) ?? defaultSearchAppConfiguration;

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
