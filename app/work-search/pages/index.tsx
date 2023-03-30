import * as React from "react";
import {useMemo} from "react";
import {ModelSet, ModelSubsetter} from "@paradicms/models";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {
  smallThumbnailTargetDimensions,
  WorkSearchContainer,
  workSearchWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {Hrefs} from "lib/Hrefs";
import Link from "next/link";
import {getAbsoluteImageSrc, readModelSetFile} from "@paradicms/next";
import fs from "fs";
import {WorkLocationSummary, WorkQueryService} from "@paradicms/services";
import {LunrWorkQueryService} from "@paradicms/lunr";
import {useWorkSearchQueryParams} from "@paradicms/react-dom-hooks";
import dynamic from "next/dynamic";
import {fastRdfStringToDataset} from "@paradicms/rdf";
import {getDefaultWorkQueryFilters} from "../lib/getDefaultWorkQueryFilters";
import {useRouter} from "next/router";

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
    () => ModelSet.fromDataset(fastRdfStringToDataset(modelSetString)),
    [modelSetString]
  );
  const configuration = modelSet.appConfiguration;
  const router = useRouter();
  const workQueryService = useMemo<WorkQueryService>(
    () =>
      new LunrWorkQueryService({
        modelSet,
      }),
    [configuration, modelSet]
  );

  const {onSearch, ...workSearchQueryParams} = useWorkSearchQueryParams({
    filters: getDefaultWorkQueryFilters(modelSet.properties),
  });

  return (
    <Layout
      collectionTitle={collectionTitle ?? undefined}
      configuration={configuration}
      onSearch={onSearch}
      properties={modelSet.properties}
    >
      <WorkSearchContainer
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
        .worksModelSet(
          completeModelSet.works,
          workSearchWorkJoinSelector(smallThumbnailTargetDimensions)
        )
        .toFastRdfString(),
    },
  };
};
