import * as React from "react";
import {useMemo} from "react";
import {Collection, ModelSet, ModelSubsetter} from "@paradicms/models";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {
  smallThumbnailTargetDimensions,
  WorkSearchContainer,
  workSearchWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {readConfigurationFile, readModelSetFile} from "@paradicms/next";
import fs from "fs";
import {WorkLocationSummary, WorkQueryService} from "@paradicms/services";
import {LunrWorkQueryService} from "@paradicms/lunr";
import {useWorkSearchQueryParams} from "@paradicms/react-dom-hooks";
import dynamic from "next/dynamic";
import {SearchAppConfiguration} from "../lib/SearchAppConfiguration";
import {readSearchAppConfiguration} from "../lib/readSearchAppConfiguration";
import {defaultSearchAppConfiguration} from "../lib/defaultSearchAppConfiguration";
import {parseIntoDataset} from "@paradicms/rdf";
import {PropertyConfiguration} from "@paradicms/configuration";
import {Filter, StringPropertyValueFilter} from "@paradicms/filters";

export const getDefaultWorkQueryFilters = (
  propertyConfigurations: readonly PropertyConfiguration[]
): readonly Filter[] => {
  const filters: Filter[] = [];
  for (const propertyConfiguration of propertyConfigurations) {
    if (!propertyConfiguration.filterable) {
      continue;
    }
    if (
      filters.some(
        filter =>
          filter.type === "StringPropertyValue" &&
          (filter as StringPropertyValueFilter).propertyUri ===
            propertyConfiguration.uri
      )
    ) {
      // console.debug(
      //   "filterable property",
      //   propertyConfiguration.uri,
      //   "already has a search filter, skipping"
      // );
      continue;
    }
    // console.debug(
    //   "filterable property",
    //   propertyConfiguration.uri,
    //   "does not have search filter, adding"
    // );
    filters.push({
      label: propertyConfiguration.label,
      propertyUri: propertyConfiguration.uri,
      type: "StringPropertyValue",
    } as StringPropertyValueFilter);
  }

  return filters;
};

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
  readonly configuration: SearchAppConfiguration;
  readonly modelSetString: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configuration,
  modelSetString,
}) => {
  const modelSet = useMemo<ModelSet>(
    () => new ModelSet(parseIntoDataset(modelSetString)),
    [modelSetString]
  );

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
    defaultWorkQueryFilters: getDefaultWorkQueryFilters(
      configuration.workProperties
    ),
  });

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      onSearch={onSearch}
    >
      <WorkSearchContainer
        objectsPerPage={configuration.objectsPerPage ?? 10}
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
  const completeModelSet = readModelSetFile(readFileSync);
  const configuration =
    readSearchAppConfiguration(
      readConfigurationFile(readFileSync),
      completeModelSet.dataset
    ) ?? defaultSearchAppConfiguration;

  const collection = completeModelSet.collections[0];

  return {
    props: {
      collectionUri: collection.uri,
      configuration,
      modelSetString: new ModelSubsetter({
        completeModelSet,
        workPropertyUris: configuration.workProperties.map(
          workProperty => workProperty.uri
        ),
      })
        .collectionModelSet(collection, {
          institution: {},
          works: workSearchWorkJoinSelector(smallThumbnailTargetDimensions),
        })
        .stringify(),
    },
  };
};
