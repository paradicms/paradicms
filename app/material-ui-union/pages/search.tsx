import {
  Configuration,
  Dataset,
  DataSubsetter,
  IndexedDataset,
  ObjectJoinSelector,
} from "@paradicms/models";
import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
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
import {readConfigurationFile, readDatasetFile} from "@paradicms/next";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly configuration: Configuration;
  readonly dataset: Dataset;
}

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

const SearchPage: React.FunctionComponent<StaticProps> = ({
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
      {({
        objectQuery,
        objectQueryResults,
        page,
        pageMax,
        setObjectQuery,
        setPage,
      }) => (
        <Layout
          cardTitle={
            objectQuery?.text ? (
              <span>
                <span>Search results for</span>
                &nbsp;
                <i data-cy="query-text">{objectQuery.text}</i>
              </span>
            ) : (
              "Search results"
            )
          }
          documentTitle={
            objectQuery?.text
              ? `Search results for "${objectQuery.text}"`
              : "Search results"
          }
          configuration={configuration}
          onSearch={text =>
            setObjectQuery({filters: configuration.objectSearch.filters, text})
          }
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

export default SearchPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const dataset = readDatasetFile(readFileSync);
  const searchDataset = DataSubsetter.fromDataset(dataset).objectsDataset(
    dataset.objects.map(object => object.uri),
    OBJECT_JOIN_SELECTOR
  );

  console.log(
    "Search dataset:",
    Object.keys(searchDataset)
      .map(key => `${key}: ${((searchDataset as any)[key] as any[]).length}`)
      .join(", ")
  );

  return {
    props: {
      configuration: readConfigurationFile(readFileSync),
      dataset: searchDataset,
    },
  };
};
