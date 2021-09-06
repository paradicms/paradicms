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
} from "@paradicms/models";
import {GetStaticPaths, GetStaticProps} from "next";
import {thumbnailTargetDimensions} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

const WORK_JOIN_SELECTOR: WorkJoinSelector = {
  collections: {},
  institution: {rights: true},
  propertyDefinitions: {
    values: {
      thumbnail: {targetDimensions: thumbnailTargetDimensions},
    },
  },
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
};

const WORKS_PER_PAGE = 10;

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
  const workQueryService = useMemo<WorkQueryService>(
    () =>
      new LunrWorkQueryService({
        configuration: configuration.workSearch,
        dataset: indexedDataset,
        workJoinSelector: WORK_JOIN_SELECTOR,
      }),
    [configuration, indexedDataset]
  );

  return (
    <WorkSearchPage
      configuration={configuration.workSearch}
      workQueryService={workQueryService}
      worksPerPage={WORKS_PER_PAGE}
    >
      {({
        workQuery,
        workQueryResults,
        page,
        pageMax,
        setWorkQuery,
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
          <WorkSearchGrid
            facets={workQueryResults.facets}
            works={workQueryResults.dataset.works}
            onChangeFilters={filters => setWorkQuery({...workQuery, filters})}
            onChangePage={setPage}
            page={page}
            pageMax={pageMax}
            renderInstitutionLink={(institution, children) => (
              <Link href={Hrefs.institution(institution.uri).home}>
                {children}
              </Link>
            )}
            renderWorkLink={(work, children) => (
              <Link
                href={Hrefs.institution(work.institution.uri).work(work.uri)}
              >
                {children}
              </Link>
            )}
            query={workQuery}
          />
        </Layout>
      )}
    </WorkSearchPage>
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
    works: WORK_JOIN_SELECTOR,
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
