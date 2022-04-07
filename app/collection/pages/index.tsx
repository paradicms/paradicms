import * as React from "react";
import {useMemo} from "react";
import {Collection, Dataset, DataSubsetter} from "@paradicms/models";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {
  thumbnailTargetDimensions,
  WorkSearchContainer,
} from "@paradicms/bootstrap";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {readConfigurationFile, readDatasetFile} from "@paradicms/next";
import fs from "fs";
import {WorkLocationSummary, WorkQueryService} from "@paradicms/services";
import {LunrWorkQueryService} from "@paradicms/lunr";
import {
  useWorkSearchQueryParams,
  workSearchWorkJoinSelector,
} from "@paradicms/react-search";
import dynamic from "next/dynamic";
import {BootstrapCollectionAppConfiguration} from "../lib/BootstrapCollectionAppConfiguration";
import {readBootstrapCollectionAppConfiguration} from "../lib/readBootstrapCollectionAppConfiguration";
import {defaultBootstrapCollectionAppConfiguration} from "../lib/defaultBootstrapCollectionAppConfiguration";

const WorkLocationsMap = dynamic<{
  readonly workLocations: readonly WorkLocationSummary[];
}>(
  () =>
    import("../components/WorkLocationsMap").then(
      module => module.WorkLocationsMap
    ),
  {ssr: false}
);

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: BootstrapCollectionAppConfiguration;
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
        dataset,
        resultWorkPropertyUris: configuration.workProperties.map(
          workProperty => workProperty.uri
        ),
        searchWorkPropertyUris: configuration.workProperties
          .filter(workProperty => workProperty.searchable)
          .map(workProperty => workProperty.uri),
      }),
    [configuration, dataset]
  );

  const {onSearch, ...workSearchQueryParams} = useWorkSearchQueryParams({
    defaultWorkQueryFilters: configuration.search?.filters,
  });

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      onSearch={onSearch}
    >
      <WorkSearchContainer
        renderWorkLink={(workUri, children) => (
          <Link href={Hrefs.work(workUri)}>
            <a>{children}</a>
          </Link>
        )}
        workLocationsMapComponent={WorkLocationsMap}
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
  const configuration =
    readBootstrapCollectionAppConfiguration(
      readConfigurationFile(readFileSync),
      completeDataset.store
    ) ?? defaultBootstrapCollectionAppConfiguration;

  const collection = completeDataset.collections[0];

  return {
    props: {
      collectionUri: collection.uri,
      configuration,
      datasetString: new DataSubsetter({
        completeDataset,
        workPropertyUris: configuration.workProperties.map(
          workProperty => workProperty.uri
        ),
      })
        .collectionDataset(collection, {
          institution: {},
          works: workSearchWorkJoinSelector(thumbnailTargetDimensions),
        })
        .stringify(),
    },
  };
};
