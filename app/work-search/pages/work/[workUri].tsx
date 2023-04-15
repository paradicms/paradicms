import {ModelSetFactory, ModelSubsetter} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  getAbsoluteImageSrc,
  readModelSetFile,
} from "@paradicms/next";
import {
  WorkPage as DelegateWorkPage,
  getNamedModelLinks,
  workPageWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {WorkLocationSummary} from "@paradicms/services";
import {Layout} from "components/Layout";
import * as fs from "fs";
import {GetStaticPaths, GetStaticProps} from "next";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import * as React from "react";
import {useMemo} from "react";

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

const WorkLocationsMap = dynamic<{
  readonly workLocations: readonly WorkLocationSummary[];
}>(
  () =>
    import("../../components/WorkLocationsMap").then(
      module => module.WorkLocationsMap
    ),
  {ssr: false}
);

interface StaticProps {
  readonly collectionTitle: string | null;
  readonly modelSetString: string;
  readonly workUri: string;
}

const WorkPage: React.FunctionComponent<StaticProps> = ({
  collectionTitle,
  modelSetString,
  workUri,
}) => {
  const modelSet = useMemo(
    () => ModelSetFactory.fromFastRdfString(modelSetString),
    [modelSetString]
  );
  const router = useRouter();
  const work = modelSet.workByUri(workUri);

  return (
    <Layout
      cardHeaderLinks={getNamedModelLinks(work)}
      collectionTitle={collectionTitle ?? undefined}
      configuration={modelSet.appConfiguration}
      properties={modelSet.properties}
      title={work.title}
    >
      <DelegateWorkPage
        getAbsoluteImageSrc={relativeImageSrc =>
          getAbsoluteImageSrc(relativeImageSrc, router)
        }
        renderWorkLocationsMap={workLocations => (
          <WorkLocationsMap workLocations={workLocations} />
        )}
        work={work}
      />
    </Layout>
  );
};

export default WorkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params: {workUri: string}}[] = [];
  for (const work of (await readModelSetFile(readFile)).works) {
    paths.push({
      params: {
        workUri: encodeFileName(work.uri),
      },
    });
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const workUri = decodeFileName(params!.workUri as string);
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
        .workModelSet(
          completeModelSet.workByUri(workUri),
          workPageWorkJoinSelector
        )
        .addAppConfiguration(completeModelSet.appConfiguration)
        .build()
        .toFastRdfString(),
      workUri,
    },
  };
};
