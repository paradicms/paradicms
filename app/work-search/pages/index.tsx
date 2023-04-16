import {MemWorkQueryService} from "@paradicms/lunr";
import {ModelSet, ModelSetFactory, ModelSubsetter} from "@paradicms/models";
import {getAbsoluteImageSrc, readModelSetFile} from "@paradicms/next";
import {
  WorkSearchPage,
  workSearchWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {useWorkSearchQueryParams} from "@paradicms/react-dom-hooks";
import {WorkLocationSummary, WorkQueryService} from "@paradicms/services";
import {Layout} from "components/Layout";
import fs from "fs";
import {Hrefs} from "lib/Hrefs";
import {GetStaticProps} from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import {useRouter} from "next/router";
import * as React from "react";
import {useMemo} from "react";
import {getDefaultWorksQueryFilters} from "../lib/getDefaultWorksQueryFilters";

const WorkLocationsMap = dynamic<{
  readonly workLocations: readonly WorkLocationSummary[];
}>(
  () =>
    import("../components/WorkLocationsMap").then(
      module => module.WorkLocationsMap
    ),
  {ssr: false}
);

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

interface StaticProps {
  readonly collectionTitle: string | null;
  readonly modelSetString: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionTitle,
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
      collectionTitle={collectionTitle ?? undefined}
      configuration={configuration}
      onSearch={onSearch}
      properties={modelSet.properties}
    >
      <WorkSearchPage
        getAbsoluteImageSrc={relativeImageSrc =>
          getAbsoluteImageSrc(relativeImageSrc, router)
        }
        objectsPerPage={configuration?.objectsPerPage ?? 10}
        renderWorkLink={(workUri, children) => (
          <Link href={Hrefs.work(workUri)}>
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
  const completeModelSet = await readModelSetFile(readFile);

  return {
    props: {
      collectionTitle:
        completeModelSet.collections.length === 1
          ? completeModelSet.collections[0].title
          : null,
      modelSetString: new ModelSubsetter({
        completeModelSet,
      })
        .worksModelSet(completeModelSet.works, workSearchWorkJoinSelector)
        .addAppConfiguration(completeModelSet.appConfiguration)
        .build()
        .toFastRdfString(),
    },
  };
};
