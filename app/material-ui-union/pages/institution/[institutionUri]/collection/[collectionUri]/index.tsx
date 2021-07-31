import {NumberParam, useQueryParam} from "use-query-params";
import {decodeFileName, encodeFileName} from "@paradicms/next";
import {JsonQueryParamConfig} from "@paradicms/react";
import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {Layout} from "components/Layout";
import {
  Configuration,
  Dataset,
  defaultConfiguration,
  IndexedDataset,
  JoinedDataset,
  ObjectsQuery,
  ObjectsQueryResults,
} from "@paradicms/models";
import {GetStaticPaths, GetStaticProps} from "next";
import {ObjectFacetedSearchGrid} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import {ObjectQueryService} from "@paradicms/services";
import {LunrObjectQueryService} from "@paradicms/lunr";
import {readDataset} from "lib/readDataset";

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: Configuration;
  readonly dataset: Dataset;
}

const OBJECTS_PER_PAGE = 10;

const CollectionPage: React.FunctionComponent<StaticProps> = ({
                                                                collectionUri,
                                                                configuration,
                                                                dataset,
                                                              }) => {
  const joinedDataset = useMemo(() => JoinedDataset.fromDataset(dataset), [dataset]);
  const collection = useMemo(() => joinedDataset.collectionByUri(collectionUri), [collectionUri, joinedDataset]);
  const institution = useMemo(() => collection.institution, [collection]);

  const [objectsQuery, setObjectsQueryParam] = useQueryParam<ObjectsQuery>(
    "query",
    new JsonQueryParamConfig<ObjectsQuery>(),
  );

  let [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam,
  );
  const page = useMemo<number>(() => pageQueryParam ?? 0, [pageQueryParam]);

  const objectQueryService = useMemo<ObjectQueryService>(() => new LunrObjectQueryService({
    configuration,
    dataset: new IndexedDataset(dataset),
  }), [configuration, dataset]);

  const [objectsQueryResults, setObjectsQueryResults] = useState<ObjectsQueryResults | null>(null);

  useEffect(() => {
    objectQueryService.getObjects({
      limit: OBJECTS_PER_PAGE,
      offset: page * OBJECTS_PER_PAGE,
      query: objectsQuery,
    }).then(setObjectsQueryResults);
  }, [objectsQuery, objectQueryService, page]);

  const objectsQueryResultsJoinedDataset = useMemo(() => objectsQueryResults !== null ? JoinedDataset.fromDataset(objectsQueryResults.dataset) : null, [objectsQueryResults]);

  if (objectsQueryResults === null || objectsQueryResultsJoinedDataset === null) {
    return null;
  }

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
      <ObjectFacetedSearchGrid
        facets={objectsQueryResults.facets}
        objects={objectsQueryResultsJoinedDataset.objects}
        onChangeFilters={filters => setObjectsQueryParam({...objectsQuery, filters})}
        onChangePage={setPage}
        page={page ?? 0}
        pageMax={Math.ceil(objectsQueryResults.totalCount / OBJECTS_PER_PAGE) - 1}
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
  );
};

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
      dataset: new IndexedDataset(readDataset()).collectionDataset(collectionUri),
    },
  };
};
