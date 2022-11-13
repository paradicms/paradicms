import * as React from "react";
import {useMemo} from "react";
import {Collection, DataSubsetter, ModelSet} from "@paradicms/models";
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
import {CollectionAppConfiguration} from "../lib/CollectionAppConfiguration";
import {readCollectionAppConfiguration} from "../lib/readCollectionAppConfiguration";
import {defaultCollectionAppConfiguration} from "../lib/defaultCollectionAppConfiguration";

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
  readonly configuration: CollectionAppConfiguration;
  readonly modelSetString: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configuration,
  modelSetString,
}) => {
  const modelSet = useMemo<ModelSet>(() => ModelSet.parse(modelSetString), [
    modelSetString,
  ]);

  const collection = useMemo<Collection>(
    () => modelSet.collectionByUri(collectionUri),
    [collectionUri, modelSetString]
  );

  const workQueryService = useMemo<WorkQueryService>(
    () =>
      new LunrWorkQueryService({
        modelSet,
        resultWorkPropertyUris: configuration.workProperties.map(
          workProperty => workProperty.uri
        ),
        searchWorkPropertyUris: configuration.workProperties
          .filter(workProperty => workProperty.searchable)
          .map(workProperty => workProperty.uri),
      }),
    [configuration, modelSet]
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
    readCollectionAppConfiguration(
      readConfigurationFile(readFileSync),
      completeDataset.store
    ) ?? defaultCollectionAppConfiguration;

  const collection = completeDataset.collections[0];

  return {
    props: {
      collectionUri: collection.uri,
      configuration,
      modelSetString: new DataSubsetter({
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
