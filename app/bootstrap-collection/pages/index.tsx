import * as React from "react";
import {useMemo} from "react";
import {
  Collection,
  Dataset,
  DataSubsetter,
  WorkJoinSelector,
} from "@paradicms/models";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {
  thumbnailTargetDimensions,
  WorkSearchContainer,
} from "@paradicms/bootstrap";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {readAppConfigurationFile, readDatasetFile} from "@paradicms/next";
import fs from "fs";
import {WorkQueryService} from "@paradicms/services";
import {LunrWorkQueryService} from "@paradicms/lunr";
import {useWorkQuery} from "@paradicms/react-search";
import {AppConfiguration} from "@paradicms/configuration";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: AppConfiguration;
  readonly datasetString: string;
}

const WORKS_PER_PAGE = 10;

const WORK_JOIN_SELECTOR: WorkJoinSelector = {
  propertyNamedValues: {
    thumbnail: {targetDimensions: thumbnailTargetDimensions},
  },
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
};

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configuration,
  datasetString,
}) => {
  const defaultWorkQueryFilters = configuration.search?.filters ?? [];

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
        workJoinSelector: WORK_JOIN_SELECTOR,
      }),
    [configuration, dataset]
  );

  const {
    setPage,
    setWorkQuery,
    workQueryResults,
    ...workSearchProps
  } = useWorkQuery({
    defaultFilters: defaultWorkQueryFilters,
    workQueryService,
    worksPerPage: WORKS_PER_PAGE,
  });
  if (!workQueryResults) {
    return null;
  }

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      onSearch={text => {
        setWorkQuery({filters: defaultWorkQueryFilters, text});
        setPage(undefined);
      }}
    >
      <WorkSearchContainer
        renderWorkLink={(work, children) => (
          <Link href={Hrefs.work(work.uri)}>
            <a>{children}</a>
          </Link>
        )}
        setPage={setPage}
        setWorkQuery={setWorkQuery}
        workQueryResults={workQueryResults}
        {...workSearchProps}
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

  const collectionUri = completeDataset.collections[0].uri;

  return {
    props: {
      collectionUri,
      configuration,
      datasetString: new DataSubsetter({completeDataset, configuration})
        .collectionDataset(collectionUri, {
          institution: {},
          works: WORK_JOIN_SELECTOR,
        })
        .stringify(),
    },
  };
};
