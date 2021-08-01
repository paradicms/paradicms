import {decodeFileName, encodeFileName} from "@paradicms/next";
import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {
  Configuration,
  Dataset,
  DataSubsetter,
  defaultConfiguration,
  IndexedDataset,
  JoinedDataset,
  ObjectJoinSelector,
} from "@paradicms/models";
import {GetStaticPaths, GetStaticProps} from "next";
import {ObjectFacetedSearchGrid, thumbnailTargetDimensions} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import {readDataset} from "lib/readDataset";
import {LunrObjectSearchPage} from "@paradicms/lunr-react";

const OBJECT_JOIN_SELECTOR: ObjectJoinSelector = {
  collections: {},
  institution: {},
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
  const joinedDataset = useMemo(() => JoinedDataset.fromDataset(dataset), [dataset]);
  const collection = useMemo(() => joinedDataset.collectionByUri(collectionUri), [collectionUri, joinedDataset]);
  const institution = useMemo(() => collection.institution, [collection]);

  return (
    <LunrObjectSearchPage configuration={configuration} dataset={dataset} objectJoinSelector={OBJECT_JOIN_SELECTOR}
                          objectsPerPage={OBJECTS_PER_PAGE}>
      {({
          objectsQuery,
          objectsQueryResults,
          objectsQueryResultsJoinedDataset,
          page,
          pageMax,
          setObjectsQuery,
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
          <ObjectFacetedSearchGrid
            facets={objectsQueryResults.facets}
            objects={objectsQueryResultsJoinedDataset.objects}
            onChangeFilters={filters => setObjectsQuery({...objectsQuery, filters})}
            onChangePage={setPage}
            page={page}
            pageMax={pageMax}
            renderInstitutionLink={(institution, children) => (
              <Link href={Hrefs.institution(institution.uri).home}>{children}</Link>
            )}
            renderObjectLink={(object, children) => (
              <Link
                href={Hrefs.institution(object.institution.uri).object(object.uri)}
              >
                {children}
              </Link>
            )}
            query={objectsQuery}
          />
        </Layout>
      )}
    </LunrObjectSearchPage>);
}

export default CollectionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const dataset = readDataset();
  const indexedDataset = new IndexedDataset(dataset);

  const paths: {params: {collectionUri: string; institutionUri: string}}[] = [];
  for (const institution of dataset.institutions) {
    const encodedInstitutionUri = encodeFileName(institution.uri);
    for (const collection of indexedDataset.institutionCollections(institution.uri)) {
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
      configuration: defaultConfiguration,
      dataset: DataSubsetter.fromDataset(readDataset()).collectionDataset(collectionUri, {
        objects: OBJECT_JOIN_SELECTOR,
      }),
    },
  };
};
