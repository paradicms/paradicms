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
import {usePageQueryParam, useWorkQueryParam} from "@paradicms/react-search";
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
  propertyNamedValues: {
    thumbnail: {targetDimensions: thumbnailTargetDimensions},
  },
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
};

const SearchPage: React.FunctionComponent<StaticProps> = ({
  configuration,
  datasetString,
}) => {
  const router = useRouter();

  if (!configuration.search) {
    router.push(Hrefs.home);
    return null;
  }

  const dataset = useMemo(() => Dataset.parse(datasetString), [datasetString]);

  const workQueryService = useMemo<WorkQueryService>(
    () =>
      new LunrWorkQueryService({
        configuration,
        dataset,
      }),
    [configuration, dataset]
  );

  const [workQuery, setWorkQuery] = useWorkQueryParam(
    {
      filters: configuration.search?.filters ?? [],
    },
    "query"
  );

  const [page, setPage] = usePageQueryParam("page");

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
      onSearch={text => setWorkQuery({...workQuery, text})}
    >
      <WorkSearchGrid
        page={page}
        renderInstitutionLink={(institution, children) => (
          <Link href={Hrefs.institution(institution.uri).home}>{children}</Link>
        )}
        renderWorkLink={(work, children) => (
          <Link href={Hrefs.institution(work.institution.uri).work(work.uri)}>
            {children}
          </Link>
        )}
        setPage={setPage}
        setWorkQuery={setWorkQuery}
        workQuery={workQuery}
        workQueryService={workQueryService}
      />
    </Layout>
  );
};

export default SearchPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const completeDataset = readDatasetFile(readFileSync);
  const configuration = readAppConfigurationFile(readFileSync);

  return {
    props: {
      configuration,
      datasetString: new DataSubsetter({completeDataset, configuration})
        .worksDataset(completeDataset.works, WORK_JOIN_SELECTOR)
        .stringify(),
    },
  };
};
