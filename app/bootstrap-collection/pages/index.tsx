import * as React from "react";
import {useMemo} from "react";
import {Collection, Dataset, DataSubsetter} from "@paradicms/models";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {
  WorkSearchContainer,
  workSearchWorkJoinSelector,
} from "@paradicms/bootstrap";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {readAppConfigurationFile, readDatasetFile} from "@paradicms/next";
import fs from "fs";
import {WorkQueryService} from "@paradicms/services";
import {LunrWorkQueryService} from "@paradicms/lunr";
import {useWorkSearchQueryParams} from "@paradicms/react-search";
import {AppConfiguration} from "@paradicms/configuration";
import "react-vertical-timeline-component/style.min.css";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: AppConfiguration;
  readonly datasetString: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configuration,
  datasetString,
}) => {
  const dataset = useMemo<Dataset>(() => Dataset.parse(datasetString), [
    datasetString,
  ]);

  const collection = useMemo<Collection>(
    () => dataset.collectionByUri(collectionUri),
    [collectionUri, datasetString]
  );

  const workQueryService = useMemo<WorkQueryService>(
    () =>
      new LunrWorkQueryService({
        configuration,
        dataset,
      }),
    [configuration, dataset]
  );

  const {onSearch, ...workSearchQueryParams} = useWorkSearchQueryParams(
    configuration
  );

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      onSearch={onSearch}
    >
      <WorkSearchContainer
        renderWorkLink={(work, children) => (
          <Link href={Hrefs.work(work.uri)}>
            <a>{children}</a>
          </Link>
        )}
        workQueryService={workQueryService}
        {...workSearchQueryParams}
      />
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const completeDataset = readDatasetFile(readFileSync);
  const configuration = readAppConfigurationFile(readFileSync);

  const collection = completeDataset.collections[0];

  return {
    props: {
      collectionUri: collection.uri,
      configuration,
      datasetString: new DataSubsetter({completeDataset, configuration})
        .collectionDataset(collection, {
          institution: {},
          works: workSearchWorkJoinSelector,
        })
        .stringify(),
    },
  };
};
