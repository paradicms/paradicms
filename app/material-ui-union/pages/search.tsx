import {
  Configuration,
  Dataset,
  DataSubsetter,
  WorkJoinSelector,
} from "@paradicms/models";
import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {
  thumbnailTargetDimensions,
  WorkSearchGrid,
} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";
import {readConfigurationFile, readDatasetFile} from "@paradicms/next";
import {WorkQueryService} from "@paradicms/services";
import {LunrWorkQueryService} from "@paradicms/lunr";
import {WorkSearchPage} from "@paradicms/react-search";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly configuration: Configuration;
  readonly datasetString: string;
}

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

const SearchPage: React.FunctionComponent<StaticProps> = ({
  configuration,
  datasetString,
}) => {
  const dataset = useMemo(() => Dataset.parse(datasetString), [datasetString]);

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
      {({
        workQuery,
        workQueryResults,
        page,
        pageMax,
        setWorkQuery,
        setPage,
      }) => (
        <Layout
          cardTitle={
            workQuery?.text ? (
              <span>
                <span>Search results for</span>
                &nbsp;
                <i data-cy="query-text">{workQuery.text}</i>
              </span>
            ) : (
              "Search results"
            )
          }
          documentTitle={
            workQuery?.text
              ? `Search results for "${workQuery.text}"`
              : "Search results"
          }
          configuration={configuration}
          onSearch={text =>
            setWorkQuery({filters: configuration.workSearch.filters, text})
          }
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

export default SearchPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const dataset = readDatasetFile(readFileSync);

  return {
    props: {
      configuration: readConfigurationFile(readFileSync),
      datasetString: new DataSubsetter(dataset)
        .worksDataset(
          dataset.works.map(work => work.uri),
          WORK_JOIN_SELECTOR
        )
        .stringify(),
    },
  };
};
