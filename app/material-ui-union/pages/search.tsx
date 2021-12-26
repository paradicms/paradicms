import {Dataset, DataSubsetter, WorkJoinSelector} from "@paradicms/models";
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
import {readAppConfigurationFile, readDatasetFile} from "@paradicms/next";
import {WorkQueryService} from "@paradicms/services";
import {LunrWorkQueryService} from "@paradicms/lunr";
import {useWorkQuery} from "@paradicms/react-search";
import {AppConfiguration} from "@paradicms/configuration";
import {useRouter} from "next/router";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly configuration: AppConfiguration;
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
  const router = useRouter();

  if (!configuration.search) {
    router.push(Hrefs.home);
    return null;
  }

  const defaultWorkQueryFilters = configuration.search!.filters ?? [];

  const dataset = useMemo(() => Dataset.parse(datasetString), [datasetString]);

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
    defaultFilters: defaultWorkQueryFilters,
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
      onSearch={text => setWorkQuery({filters: defaultWorkQueryFilters, text})}
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

export default SearchPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const dataset = readDatasetFile(readFileSync);

  return {
    props: {
      configuration: readAppConfigurationFile(readFileSync),
      datasetString: new DataSubsetter(dataset)
        .worksDataset(
          dataset.works.map(work => work.uri),
          WORK_JOIN_SELECTOR
        )
        .stringify(),
    },
  };
};
