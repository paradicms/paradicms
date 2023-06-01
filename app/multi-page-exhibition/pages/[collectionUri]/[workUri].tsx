import {ModelSet, ModelSetBuilder, ModelSetFactory} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  getAbsoluteImageSrc,
  readModelSet,
} from "@paradicms/next";
import {
  WorkPage as DelegateWorkPage,
  workPageWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {WorkLocationSummary} from "@paradicms/services";
import {Layout} from "components/Layout";
import fs from "fs";
import {Hrefs} from "lib/Hrefs";
import {GetStaticPaths, GetStaticProps} from "next";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import * as React from "react";
import {useCallback, useMemo} from "react";
import Hammer from "react-hammerjs";
import path from "path";

const WorkLocationsMap = dynamic<{
  readonly collectionIri: string;
  readonly workLocations: readonly WorkLocationSummary[];
}>(
  () =>
    import("../../components/WorkLocationsMap").then(
      module => module.WorkLocationsMap
    ),
  {ssr: false}
);

interface StaticProps {
  readonly collectionIri: string;
  readonly currentWorkIri: string;
  readonly modelSetString: string;
  readonly nextWorkIri: string | null;
  readonly previousWorkIri: string | null;
}

const WorkPage: React.FunctionComponent<StaticProps> = ({
  collectionIri,
  currentWorkIri,
  modelSetString,
  nextWorkIri,
  previousWorkIri,
}) => {
  const modelSet = useMemo<ModelSet>(
    () => ModelSetFactory.fromFastRdfString(modelSetString),
    [modelSetString]
  );
  const collection = modelSet.collectionByIri(collectionIri);
  const configuration = modelSet.appConfiguration;
  const currentWork = modelSet.workByIri(currentWorkIri);
  const router = useRouter();

  const onGoToNextWork = useCallback(() => {
    if (nextWorkIri) {
      router.push(Hrefs.work({collectionIri, workIri: nextWorkIri}));
    }
  }, [nextWorkIri, router]);

  const onGoToPreviousWork = useCallback(() => {
    if (previousWorkIri) {
      router.push(Hrefs.work({collectionIri, workIri: previousWorkIri}));
    }
  }, [previousWorkIri, router]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      switch (e.keyCode) {
        case 37:
          // Left arrow
          onGoToPreviousWork();
          break;
        case 39:
          // Right arrow
          onGoToNextWork();
          break;
        default:
          break;
      }
    },
    [onGoToNextWork, onGoToPreviousWork]
  );

  return (
    <Layout
      collection={collection}
      configuration={configuration}
      currentWork={currentWork}
      nextWork={nextWorkIri ? {iri: nextWorkIri} : undefined}
      previousWork={previousWorkIri ? {iri: previousWorkIri} : undefined}
    >
      <Hammer onSwipeLeft={onGoToPreviousWork} onSwipeRight={onGoToNextWork}>
        <div>
          <div onKeyDown={onKeyDown} style={{outline: "none"}} tabIndex={0}>
            <DelegateWorkPage
              getAbsoluteImageSrc={relativeImageSrc =>
                getAbsoluteImageSrc(relativeImageSrc, router)
              }
              propertyGroups={modelSet.propertyGroups}
              properties={modelSet.properties}
              renderWorkLocationsMap={workLocations => (
                <WorkLocationsMap
                  collectionIri={collectionIri}
                  workLocations={workLocations}
                />
              )}
              work={currentWork}
            />
          </div>
        </div>
      </Hammer>
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

  const paths: {params: {collectionIri: string; workIri: string}}[] = [];

  // Use first collection with works
  for (const collection of modelSet.collections) {
    for (const work of modelSet.collectionWorks(collection.iri)) {
      paths.push({
        params: {
          collectionIri: encodeFileName(collection.iri),
          workIri: encodeFileName(work.iri),
        },
      });
    }
    if (paths.length > 0) {
      break;
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
  const collectionIri = decodeFileName(params!.collectionIri as string);
  const workIri = decodeFileName(params!.workIri as string);

  const completeModelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile,
  });

  const currentWork = completeModelSet.workByIri(workIri);
  const collectionWorks = completeModelSet.collectionWorks(collectionIri);

  const currentWorkI = collectionWorks.findIndex(
    work => work.iri === currentWork.iri
  );
  if (currentWorkI === -1) {
    throw new EvalError(
      `current work ${currentWork.iri} not found among collection ${collectionIri} works`
    );
  }
  const nextWorkIri =
    currentWorkI + 1 < collectionWorks.length
      ? collectionWorks[currentWorkI + 1].iri
      : null;
  const previousWorkIri =
    currentWorkI > 0 ? collectionWorks[currentWorkI - 1].iri : null;

  const workIris: string[] = [];
  if (previousWorkIri) {
    workIris.push(previousWorkIri);
  }
  workIris.push(workIri);
  if (nextWorkIri) {
    workIris.push(nextWorkIri);
  }

  return {
    props: {
      collectionIri,
      currentWorkIri: workIri,
      modelSetString: new ModelSetBuilder()
        .addAppConfiguration(completeModelSet.appConfiguration)
        .addWorks(
          workIris.map(workIri => completeModelSet.workByIri(workIri)),
          workPageWorkJoinSelector
        )
        .build()
        .toFastRdfString(),
      nextWorkIri,
      previousWorkIri,
    },
  };
};
