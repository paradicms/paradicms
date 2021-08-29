import * as React from "react";
import {useMemo} from "react";
import {
  Collection,
  Configuration,
  Dataset,
  DataSubsetter,
  defaultConfiguration,
  IndexedDataset,
  ObjectJoinSelector,
} from "@paradicms/models";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {ObjectSearchPage} from "@paradicms/react-search";
import {
  ObjectSearchContainer,
  thumbnailTargetDimensions,
} from "@paradicms/bootstrap";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {ObjectQueryService} from "@paradicms/services";
import {LunrObjectQueryService} from "@paradicms/lunr";
import {readDatasetFile} from "@paradicms/next";
import fs from "fs";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly collection: Collection;
  readonly configuration: Configuration;
  readonly dataset: Dataset;
}

const OBJECTS_PER_PAGE = 10;

const OBJECT_JOIN_SELECTOR: ObjectJoinSelector = {
  propertyDefinitions: {
    values: {
      thumbnail: {targetDimensions: thumbnailTargetDimensions},
    },
  },
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
};

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collection,
  configuration,
  dataset,
}) => {
  const objectQueryService = useMemo<ObjectQueryService>(
    () =>
      new LunrObjectQueryService({
        configuration: configuration.objectSearch,
        dataset: new IndexedDataset(dataset),
        objectJoinSelector: OBJECT_JOIN_SELECTOR,
      }),
    [configuration, dataset]
  );

  return (
    <ObjectSearchPage
      configuration={configuration.objectSearch}
      objectQueryService={objectQueryService}
      objectsPerPage={OBJECTS_PER_PAGE}
    >
      {({setObjectQuery, setPage, ...lunrObjectSearchProps}) => (
        <Layout
          collection={collection}
          configuration={configuration}
          onSearch={text => {
            setObjectQuery({filters: configuration.objectSearch.filters, text});
            setPage(undefined);
          }}
        >
          <ObjectSearchContainer
            objectsPerPage={OBJECTS_PER_PAGE}
            renderObjectLink={(object, children) => (
              <Link href={Hrefs.object(object.uri)}>
                <a>{children}</a>
              </Link>
            )}
            setObjectQuery={setObjectQuery}
            setPage={setPage}
            {...lunrObjectSearchProps}
          />
        </Layout>
      )}
    </ObjectSearchPage>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const completeDataset = readDatasetFile(readFileSync);
  const collection = completeDataset.collections[0];
  // Must pass all of the collection's objects in to feed into the search service
  const collectionDataset = DataSubsetter.fromDataset(
    completeDataset
  ).collectionDataset(collection.uri, {
    objects: OBJECT_JOIN_SELECTOR,
  });

  // console.debug("Collection dataset:", Object.keys(collectionDataset).map(key => `${key}: ${((collection,Dataset as any)[key] as any[]).length,,,,,,}`).join(", "));

  return {
    props: {
      collection,
      configuration: defaultConfiguration,
      dataset: collectionDataset,
    },
  };
};
