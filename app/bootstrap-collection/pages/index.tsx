import * as React from "react";
import {
  Collection,
  Configuration,
  Dataset,
  DataSubsetter,
  defaultConfiguration,
  ObjectJoinSelector,
} from "@paradicms/models";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {readDataset} from "lib/readDataset";
import {LunrObjectSearchPage} from "@paradicms/react-services";
import {thumbnailTargetDimensions} from "@paradicms/material-ui";
import {ObjectSearchContainer} from "@paradicms/bootstrap/dist/ObjectSearchContainer";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";

interface StaticProps {
  readonly collection: Collection;
  readonly configuration: Configuration;
  readonly dataset: Dataset;
}

const OBJECTS_PER_PAGE = 10;

const OBJECT_JOIN_SELECTOR: ObjectJoinSelector = {
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
};

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collection,
  configuration,
  dataset,
}) => (
  <LunrObjectSearchPage
    configuration={configuration.objectSearch}
    dataset={dataset}
    objectJoinSelector={OBJECT_JOIN_SELECTOR}
    objectsPerPage={OBJECTS_PER_PAGE}
  >
    {({setObjectQuery, setPage, ...lunrObjectSearchProps}) => (
      <Layout
        collection={collection}
        configuration={configuration}
        onSearch={text => {
          setObjectQuery({filters: [], text});
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
  </LunrObjectSearchPage>
);

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const completeDataset = readDataset();
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
