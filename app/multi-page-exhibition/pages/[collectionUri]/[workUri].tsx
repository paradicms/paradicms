import * as React from "react";
import {useCallback, useMemo} from "react";
import {Layout} from "components/Layout";
import {ModelSet, ModelSubsetter} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  readConfigurationFile,
  readModelSetFile,
} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";
import {
  smallThumbnailTargetDimensions,
  WorkContainer,
} from "@paradicms/react-dom-components";
import Hammer from "react-hammerjs";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import {WorkLocationSummary} from "@paradicms/services";
import {fastStringToDataset} from "@paradicms/rdf";
import {MultiPageExhibitionAppConfiguration} from "../../lib/MultiPageExhibitionAppConfiguration";

const WorkLocationsMap = dynamic<{
  readonly collectionUri: string;
  readonly workLocations: readonly WorkLocationSummary[];
}>(
  () =>
    import("../../components/WorkLocationsMap").then(
      module => module.WorkLocationsMap
    ),
  {ssr: false}
);

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

interface StaticProps {
  readonly collectionUri: string;
  readonly configurationString: string;
  readonly currentWorkUri: string;
  readonly modelSetString: string;
  readonly nextWorkUri: string | null;
  readonly previousWorkUri: string | null;
}

const WorkPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configurationString,
  currentWorkUri,
  modelSetString,
  nextWorkUri,
  previousWorkUri,
}) => {
  const router = useRouter();
  const configuration = useMemo(
    () =>
      MultiPageExhibitionAppConfiguration.fromDatasets([
        fastStringToDataset(configurationString),
      ]),
    [configurationString]
  );
  const modelSet = useMemo<ModelSet>(
    () => ModelSet.fromDataset(fastStringToDataset(modelSetString)),
    [modelSetString]
  );
  const collection = modelSet.collectionByUri(collectionUri);
  const currentWork = modelSet.workByUri(currentWorkUri);

  const onGoToNextWork = useCallback(() => {
    if (nextWorkUri) {
      router.push(Hrefs.work({collectionUri, workUri: nextWorkUri}));
    }
  }, [nextWorkUri, router]);

  const onGoToPreviousWork = useCallback(() => {
    if (previousWorkUri) {
      router.push(Hrefs.work({collectionUri, workUri: previousWorkUri}));
    }
  }, [previousWorkUri, router]);

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
      nextWork={nextWorkUri ? {uri: nextWorkUri} : undefined}
      previousWork={previousWorkUri ? {uri: previousWorkUri} : undefined}
    >
      <Hammer onSwipeLeft={onGoToPreviousWork} onSwipeRight={onGoToNextWork}>
        <div>
          <div onKeyDown={onKeyDown} style={{outline: "none"}} tabIndex={0}>
            <WorkContainer
              renderWorkLocationsMap={workLocations => (
                <WorkLocationsMap
                  collectionUri={collectionUri}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params: {collectionUri: string; workUri: string}}[] = [];

  const modelSet = await readModelSetFile(readFile);

  // Use first collection with works
  for (const collection of modelSet.collections) {
    for (const work of modelSet.collectionWorks(collection.uri)) {
      paths.push({
        params: {
          collectionUri: encodeFileName(collection.uri),
          workUri: encodeFileName(work.uri),
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
  const collectionUri = decodeFileName(params!.collectionUri as string);
  const workUri = decodeFileName(params!.workUri as string);

  const completeModelSet = await readModelSetFile(readFile);

  const currentWork = completeModelSet.workByUri(workUri);
  const collectionWorks = completeModelSet.collectionWorks(collectionUri);

  const currentWorkI = collectionWorks.findIndex(
    work => work.uri === currentWork.uri
  );
  if (currentWorkI === -1) {
    throw new EvalError(
      `current work ${currentWork.uri} not found among collection ${collectionUri} works`
    );
  }
  const nextWorkUri =
    currentWorkI + 1 < collectionWorks.length
      ? collectionWorks[currentWorkI + 1].uri
      : null;
  const previousWorkUri =
    currentWorkI > 0 ? collectionWorks[currentWorkI - 1].uri : null;

  const workUris: string[] = [];
  if (previousWorkUri) {
    workUris.push(previousWorkUri);
  }
  workUris.push(workUri);
  if (nextWorkUri) {
    workUris.push(nextWorkUri);
  }

  return {
    props: {
      collectionUri,
      configurationString: getMultiPageExhibitionAppConfiguration([
        await readConfigurationFile(readFile),
        completeModelSet.dataset,
      ]).toFastString(),
      currentWorkUri: workUri,
      modelSetString: new ModelSubsetter({
        completeModelSet,
        workPropertyUris: [],
      })
        .worksModelSet(
          workUris.map(workUri => completeModelSet.workByUri(workUri)),
          {
            agents: {
              thumbnail: {targetDimensions: smallThumbnailTargetDimensions},
            },
            allImages: true,
            collections: {},
            institution: {},
            events: {},
          }
        )
        .toFastString(),
      nextWorkUri,
      previousWorkUri,
    },
  };
};
