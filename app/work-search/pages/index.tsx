import * as React from "react";
import {useMemo} from "react";
import {ModelSet, ModelSubsetter} from "@paradicms/models";
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
import {fastStringToDataset} from "@paradicms/rdf";
import {getDefaultWorkQueryFilters} from "../lib/getDefaultWorkQueryFilters";
import {WorkSearchAppConfiguration} from "../lib/WorkSearchAppConfiguration";

const WorkLocationsMap = dynamic<{
  readonly workLocations: readonly WorkLocationSummary[];
}>(
  () =>
    import("../components/WorkLocationsMap").then(
      module => module.WorkLocationsMap
    ),
  {ssr: false}
);

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

interface StaticProps {
  readonly configurationString: string;
  readonly modelSetString: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  configurationString,
  modelSetString,
}) => {
  const configuration = useMemo<WorkSearchAppConfiguration>(
    () =>
      WorkSearchAppConfiguration.fromDataset(
        fastStringToDataset(configurationString)
      )!,
    [configurationString]
  );
  const modelSet = useMemo<ModelSet>(
    () => ModelSet.fromDataset(fastStringToDataset(modelSetString)),
    [modelSetString]
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
    filters: getDefaultWorkQueryFilters(configuration.workProperties),
  });

  return (
    <Layout configuration={configuration} onSearch={onSearch}>
      <WorkSearchContainer
        objectsPerPage={configuration.objectsPerPage ?? 10}
        renderWorkLink={(workUri, children) => (
          <Link href={Hrefs.work(workUri)}>
            <a>{children}</a>
          </Link>
        )}
        renderWorkLocationsMap={workLocations => (
          <WorkLocationsMap workLocations={workLocations} />
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
  const completeModelSet = await readModelSetFile(readFile);
  const configuration =
    WorkSearchAppConfiguration.fromDatasets([
      await readConfigurationFile(readFile),
      completeModelSet.dataset,
    ]) ?? WorkSearchAppConfiguration.default;

  return {
    props: {
      configurationString: configuration.toFastString(),
      modelSetString: new ModelSubsetter({
        completeModelSet,
        workPropertyUris: configuration.workProperties.map(
          workProperty => workProperty.uri
        ),
      })
        .worksModelSet(
          completeModelSet.works,
          workSearchWorkJoinSelector(smallThumbnailTargetDimensions)
        )
        .toFastString(),
    },
  };
};
