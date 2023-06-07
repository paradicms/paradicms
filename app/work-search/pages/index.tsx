import {MemWorkQueryService} from "@paradicms/mem-services";
import {ModelSet, ModelSetBuilder, ModelSetFactory} from "@paradicms/models";
import {getAbsoluteImageSrc, readModelSet} from "@paradicms/next";
import {
  WorkSearchPage,
  workSearchWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {useWorkSearchQueryParams} from "@paradicms/react-dom-hooks";
import {WorkLocationSummary, WorkQueryService} from "@paradicms/services";
import {Layout} from "components/Layout";
import {Hrefs} from "lib/Hrefs";
import {GetStaticProps} from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import {useRouter} from "next/router";
import * as React from "react";
import {useMemo} from "react";
import {getDefaultWorksQueryFilters} from "../lib/getDefaultWorksQueryFilters";
import path from "path";
import fs from "fs";

const WorkLocationsMap = dynamic<{
  readonly workLocations: readonly WorkLocationSummary[];
}>(
  () =>
    import("../components/WorkLocationsMap").then(
      module => module.WorkLocationsMap
    ),
  {ssr: false}
);

interface StaticProps {
  readonly collectionLabel: string | null;
  readonly modelSetString: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionLabel,
  modelSetString,
}) => {
  const modelSet = useMemo<ModelSet>(
    () => ModelSetFactory.fromFastRdfString(modelSetString),
    [modelSetString]
  );
  const configuration = modelSet.appConfiguration;
  const router = useRouter();
  const workQueryService = useMemo<WorkQueryService>(
    () =>
      new MemWorkQueryService({
        modelSet,
      }),
    [configuration, modelSet]
  );

  const {onSearch, ...workSearchQueryParams} = useWorkSearchQueryParams({
    filters: getDefaultWorksQueryFilters(modelSet.properties),
  });

  return (
    <Layout
      collectionLabel={collectionLabel ?? undefined}
      configuration={configuration}
      onSearch={onSearch}
      properties={modelSet.properties}
    >
      <WorkSearchPage
        getAbsoluteImageSrc={relativeImageSrc =>
          getAbsoluteImageSrc(relativeImageSrc, router)
        }
        objectsPerPage={configuration?.objectsPerPage ?? 10}
        renderWorkLink={(work, children) => (
          <Link href={Hrefs.work(work)}>
            <a>{children}</a>
          </Link>
        )}
        renderWorkLocationsMap={workLocations => (
          <WorkLocationsMap workLocations={workLocations} />
        )}
        workQueryService={workQueryService}
        {...workSearchQueryParams}
      />
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const completeModelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile: (filePath: string) =>
      fs.promises.readFile(filePath).then(contents => contents.toString()),
  });

  return {
    props: {
      collectionLabel:
        completeModelSet.collections.length === 1
          ? completeModelSet.collections[0].label
          : null,
      modelSetString: new ModelSetBuilder()
        .addAppConfiguration(completeModelSet.appConfiguration)
        .addWorks(completeModelSet.works, workSearchWorkJoinSelector)
        .build()
        .toFastRdfString(),
    },
  };
};
