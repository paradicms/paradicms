import * as React from "react";
import {useMemo} from "react";
import {
  Collection,
  Configuration,
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
import {readConfigurationFile, readDatasetFile} from "@paradicms/next";
import fs from "fs";
import {WorkQueryService} from "@paradicms/services";
import {LunrWorkQueryService} from "@paradicms/lunr";
import {WorkSearchPage} from "@paradicms/react-search";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: Configuration;
  readonly datasetString: string;
}

const WORKS_PER_PAGE = 10;

const WORK_JOIN_SELECTOR: WorkJoinSelector = {
  propertyDefinitions: {
    values: {
      thumbnail: {targetDimensions: thumbnailTargetDimensions},
    },
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
        configuration: configuration.workSearch,
        dataset,
        workJoinSelector: WORK_JOIN_SELECTOR,
      }),
    [configuration, dataset]
  );

  return (
    <WorkSearchPage
      configuration={configuration.workSearch}
      workQueryService={workQueryService}
      worksPerPage={WORKS_PER_PAGE}
    >
      {({setWorkQuery, setPage, ...lunrWorkSearchProps}) => (
        <Layout
          collection={collection}
          configuration={configuration}
          onSearch={text => {
            setWorkQuery({filters: configuration.workSearch.filters, text});
            setPage(undefined);
          }}
        >
          <WorkSearchContainer
            worksPerPage={WORKS_PER_PAGE}
            renderWorkLink={(work, children) => (
              <Link href={Hrefs.work(work.uri)}>
                <a>{children}</a>
              </Link>
            )}
            setWorkQuery={setWorkQuery}
            setPage={setPage}
            {...lunrWorkSearchProps}
          />
        </Layout>
      )}
    </WorkSearchPage>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const completeDataset = readDatasetFile(readFileSync);
  const collectionUri = completeDataset.collections[0].uri;
  // Must pass all of the collection's works in to feed into the search service
  const collectionDataset = new DataSubsetter(
    completeDataset
  ).collectionDataset(collectionUri, {
    works: WORK_JOIN_SELECTOR,
  });

  // console.debug("Collection dataset:", Object.keys(collectionDataset).map(key => `${key}: ${((collection,Dataset as any)[key] as any[]).length,,,,,,}`).join(", "));

  return {
    props: {
      collectionUri,
      configuration: readConfigurationFile(readFileSync),
      datasetString: collectionDataset.stringify(),
    },
  };
};
