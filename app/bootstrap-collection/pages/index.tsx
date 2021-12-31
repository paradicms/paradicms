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
import {usePageQueryParam, useWorkQueryParam} from "@paradicms/react-search";
import {AppConfiguration} from "@paradicms/configuration";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: AppConfiguration;
  readonly datasetString: string;
}

const WORK_JOIN_SELECTOR: WorkJoinSelector = {
  agent: {
    thumbnail: {targetDimensions: thumbnailTargetDimensions},
  },
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

  const {setWorkQuery, workQuery} = useWorkQueryParam({
    filters: configuration.search?.filters ?? [],
  });

  const {page, setPage} = usePageQueryParam("page");

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      onSearch={text => {
        setWorkQuery({...workQuery, text});
        setPage(undefined);
      }}
    >
      <WorkSearchContainer
        page={page}
        renderWorkLink={(work, children) => (
          <Link href={Hrefs.work(work.uri)}>
            <a>{children}</a>
          </Link>
        )}
        setPage={setPage}
        setWorkQuery={setWorkQuery}
        workQuery={workQuery}
        workQueryService={workQueryService}
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
