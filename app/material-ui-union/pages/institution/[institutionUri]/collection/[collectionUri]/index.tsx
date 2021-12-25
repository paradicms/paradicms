import {
  decodeFileName,
  encodeFileName,
  readAppConfigurationFile,
  readDatasetFile,
} from "@paradicms/next";
import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {Dataset, DataSubsetter, WorkJoinSelector} from "@paradicms/models";
import {GetStaticPaths, GetStaticProps} from "next";
import {
  thumbnailTargetDimensions,
  WorkSearchGrid,
} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";
import {WorkQueryService} from "@paradicms/services";
import {LunrWorkQueryService} from "@paradicms/lunr";
import {useWorkQuery} from "@paradicms/react-search";
import {AppConfiguration} from "@paradicms/configuration";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

const WORK_JOIN_SELECTOR: WorkJoinSelector = {
  collections: {},
  institution: {},
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
  readonly configuration: AppConfiguration;
  readonly datasetString: string;
}

const CollectionPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configuration,
  datasetString,
}) => {
  const dataset = useMemo(() => Dataset.parse(datasetString), [datasetString]);

  const collection = dataset.collectionByUri(collectionUri);
  const institution = collection.institution;
  const workQueryService = useMemo<WorkQueryService>(
    () =>
      new LunrWorkQueryService({
        configuration,
        dataset,
        workJoinSelector: WORK_JOIN_SELECTOR,
      }),
    [configuration, dataset]
  );

  const useWorkQueryOut = useWorkQuery({
    configuration: configuration.workSearch,
    workQueryService,
    worksPerPage: WORKS_PER_PAGE,
  });
  if (!useWorkQueryOut) {
    return null;
  }
  const {
    page,
    pageMax,
    setPage,
    setWorkQuery,
    workQuery,
    workQueryResults,
  } = useWorkQueryOut;

  return (
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
          <Link href={Hrefs.institution(institution.uri).home}>{children}</Link>
        )}
        renderWorkLink={(work, children) => (
          <Link href={Hrefs.institution(work.institution.uri).work(work.uri)}>
            {children}
          </Link>
        )}
        query={workQuery}
      />
    </Layout>
  );
};

export default CollectionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const dataset = readDatasetFile(readFileSync);

  const paths: {params: {collectionUri: string; institutionUri: string}}[] = [];
  for (const institution of dataset.institutions) {
    const encodedInstitutionUri = encodeFileName(institution.uri);
    for (const collection of dataset.institutionCollections(institution.uri)) {
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

  return {
    props: {
      collectionUri,
      configuration: readAppConfigurationFile(readFileSync),
      datasetString: new DataSubsetter(readDatasetFile(readFileSync))
        .collectionDataset(collectionUri, {
          works: WORK_JOIN_SELECTOR,
        })
        .stringify(),
    },
  };
};
