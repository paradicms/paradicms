import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {Dataset, DataSubsetter} from "@paradicms/models";
import {AppConfiguration} from "@paradicms/configuration";
import {
  decodeFileName,
  encodeFileName,
  readAppConfigurationFile,
  readDatasetFile,
} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import {WorkContainer} from "@paradicms/bootstrap";
import * as fs from "fs";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly configuration: AppConfiguration;
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
      collection={collection}
      documentTitle={"Work - " + work.title}
      configuration={configuration}
    >
      <WorkContainer work={work} />
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
  const configuration = readAppConfigurationFile(readFileSync);

  return {
    props: {
      configuration,
      datasetString: new DataSubsetter({
        configuration,
        completeDataset: readDatasetFile(readFileSync),
      })
        .workDataset(workUri, {
          allImages: true,
          collections: {},
          institution: {},
        })
        .stringify(),
      workUri,
    },
  };
};
