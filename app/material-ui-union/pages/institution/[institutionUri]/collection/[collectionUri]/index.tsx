import {
  decodeFileName,
  encodeFileName,
  readConfigurationFile,
  readDatasetFile,
} from "@paradicms/next";
import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {
  Configuration,
  Dataset,
  DataSubsetter,
  IndexedDataset,
  JoinedDataset,
  ObjectJoinSelector,
} from "@paradicms/models";
import {GetStaticPaths, GetStaticProps} from "next";
import {
  ObjectSearchGrid,
  thumbnailTargetDimensions,
} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import {ObjectSearchPage} from "@paradicms/react-search";
import {ObjectQueryService} from "@paradicms/services";
import {LunrObjectQueryService} from "@paradicms/lunr";
import fs from "fs";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

const OBJECT_JOIN_SELECTOR: ObjectJoinSelector = {
  collections: {},
  institution: {rights: true},
  propertyDefinitions: {
    values: {
      thumbnail: {targetDimensions: thumbnailTargetDimensions},
    },
  },
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
};

const OBJECTS_PER_PAGE = 10;

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: Configuration;
  readonly dataset: Dataset;
}

const CollectionPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configuration,
  dataset,
}) => {
  const indexedDataset = useMemo(() => new IndexedDataset(dataset), [dataset]);
  const joinedDataset = useMemo(() => new JoinedDataset(indexedDataset), [
    indexedDataset,
  ]);
  const collection = useMemo(
    () => joinedDataset.collectionByUri(collectionUri),
    [collectionUri, joinedDataset]
  );
  const institution = useMemo(() => collection.institution, [collection]);
  const objectQueryService = useMemo<ObjectQueryService>(
    () =>
      new LunrObjectQueryService({
        configuration: configuration.objectSearch,
        dataset: indexedDataset,
        objectJoinSelector: OBJECT_JOIN_SELECTOR,
      }),
    [configuration, indexedDataset]
  );

  return (
    <ObjectSearchPage
      configuration={configuration.objectSearch}
      objectQueryService={objectQueryService}
      objectsPerPage={OBJECTS_PER_PAGE}
    >
      {({
        objectQuery,
        objectQueryResults,
        page,
        pageMax,
        setObjectQuery,
        setPage,
      }) => (
        <Layout
          breadcrumbs={{collection, institution}}
          cardTitle={
            <span>
              <span>
                Collection&nbsp;&mdash;&nbsp;
                <span data-cy="collection-title">{collection.title}</span>
              </span>
            </span>
          }
          documentTitle={"Collection - " + collection.title}
          configuration={configuration}
        >
          <ObjectSearchGrid
            facets={objectQueryResults.facets}
            objects={objectQueryResults.dataset.objects}
            onChangeFilters={filters =>
              setObjectQuery({...objectQuery, filters})
            }
            onChangePage={setPage}
            page={page}
            pageMax={pageMax}
            renderInstitutionLink={(institution, children) => (
              <Link href={Hrefs.institution(institution.uri).home}>
                {children}
              </Link>
            )}
            renderObjectLink={(object, children) => (
              <Link
                href={Hrefs.institution(object.institution.uri).object(
                  object.uri
                )}
              >
                {children}
              </Link>
            )}
            query={objectQuery}
          />
        </Layout>
      )}
    </ObjectSearchPage>
  );
};

export default CollectionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const dataset = readDatasetFile(readFileSync);
  const indexedDataset = new IndexedDataset(dataset);

  const paths: {params: {collectionUri: string; institutionUri: string}}[] = [];
  for (const institution of dataset.institutions) {
    const encodedInstitutionUri = encodeFileName(institution.uri);
    for (const collection of indexedDataset.institutionCollections(
      institution.uri
    )) {
      paths.push({
        params: {
          collectionUri: encodeFileName(collection.uri),
          institutionUri: encodedInstitutionUri,
        },
      });
    }
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const collectionUri = decodeFileName(params!.collectionUri as string);
  // const institutionUri = decodeFileName(params!.institutionUri as string);

  const collectionDataset = DataSubsetter.fromDataset(
    readDatasetFile(readFileSync)
  ).collectionDataset(collectionUri, {
    objects: OBJECT_JOIN_SELECTOR,
  });

  console.log(
    "Collection dataset:",
    Object.keys(collectionDataset)
      .map(
        key => `${key}: ${((collectionDataset as any)[key] as any[]).length}`
      )
      .join(", ")
  );

  return {
    props: {
      collectionUri,
      configuration: readConfigurationFile(readFileSync),
      dataset: collectionDataset,
    },
  };
};
