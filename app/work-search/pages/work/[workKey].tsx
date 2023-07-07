import {ModelSetBuilder, ModelSetFactory} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  getAbsoluteImageSrc,
  readModelSet,
} from "@paradicms/next";
import {
  getNamedModelLinks,
  WorkPage as DelegateWorkPage,
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
import path from "path";
import {requireNonNull} from "@paradicms/utilities";
import Link from "next/link";
import {Hrefs} from "../../lib/Hrefs";

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
  readonly collectionLabel: string | null;
  readonly modelSetString: string;
  readonly workKey: string;
}

const WorkPage: React.FunctionComponent<StaticProps> = ({
  collectionLabel,
  modelSetString,
  workKey,
}) => {
  const modelSet = useMemo(
    () => ModelSetFactory.fromFastRdfString(modelSetString),
    [modelSetString]
  );
  const router = useRouter();
  const work = requireNonNull(modelSet.workByKey(workKey));

  return (
    <Layout
      cardHeaderLinks={getNamedModelLinks(work)}
      collectionLabel={collectionLabel ?? undefined}
      configuration={modelSet.appConfiguration}
      properties={modelSet.properties}
      title={work.label}
    >
      <DelegateWorkPage
        getAbsoluteImageSrc={relativeImageSrc =>
          getAbsoluteImageSrc(relativeImageSrc, router)
        }
        properties={modelSet.properties}
        propertyGroups={modelSet.propertyGroups}
        renderWorkLink={(work, children) => (
          <Link href={Hrefs.work(work)}>
            <a>{children}</a>
          </Link>
        )}
        renderWorkLocationsMap={workLocations => (
          <WorkLocationsMap workLocations={workLocations} />
        )}
        work={work}
      />
    </Layout>
  );
};

export default WorkPage;

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

export const getStaticPaths: GetStaticPaths = async () => {
  const modelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile,
  });

  const paths: {params: {workKey: string}}[] = [];
  for (const work of modelSet.works) {
    paths.push({
      params: {
        workKey: encodeFileName(work.key),
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
  const workKey = decodeFileName(params!.workKey as string);

  const completeModelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile,
  });

  return {
    props: {
      collectionLabel:
        completeModelSet.collections.length === 1
          ? completeModelSet.collections[0].label
          : null,
      modelSetString: new ModelSetBuilder()
        .addAppConfiguration(completeModelSet.appConfiguration)
        .addWork(
          requireNonNull(completeModelSet.workByKey(workKey)),
          workPageWorkJoinSelector
        )
        .build()
        .toFastRdfString(),
      workKey: workKey,
    },
  };
};
