import * as React from "react";
import {useCallback, useMemo} from "react";
import {Layout} from "components/Layout";
import {ModelSet, ModelSubsetter} from "@paradicms/models";
import {decodeFileName, encodeFileName, readConfigurationFile, readModelSetFile,} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";
import {thumbnailTargetDimensions, WorkContainer} from "@paradicms/react-dom-components";
import Hammer from "react-hammerjs";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import {WorkLocationSummary} from "@paradicms/services";
import {MultiPageExhibitionAppConfiguration} from "../../lib/MultiPageExhibitionAppConfiguration";
import {readMultiPageExhibitionAppConfiguration} from "../../lib/readMultiPageExhibitionAppConfiguration";
import {defaultMultiPageExhibitionAppConfiguration} from "../../lib/defaultMultiPageExhibitionAppConfiguration";
import {parseIntoDataset} from "@paradicms/rdf";

const WorkLocationsMap = dynamic<{
  readonly workLocations: readonly WorkLocationSummary[];
}>(
  () =>
    import("../../components/WorkLocationsMap").then(
      module => module.WorkLocationsMap
    ),
  {ssr: false}
);

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly collectionUri: string;
  readonly configuration: MultiPageExhibitionAppConfiguration;
  readonly currentWorkUri: string;
  readonly modelSetString: string;
  readonly nextWorkUri: string | null;
  readonly previousWorkUri: string | null;
}

const WorkPage: React.FunctionComponent<StaticProps> = ({
  collectionUri,
  configuration,
  currentWorkUri,
  modelSetString,
  nextWorkUri,
  previousWorkUri,
}) => {
  const router = useRouter();

  const modelSet = useMemo<ModelSet>(
    () => new ModelSet(parseIntoDataset(modelSetString)),
    [modelSetString]
  );
  const collection = modelSet.collectionByUri(collectionUri);
  const currentWork = modelSet.workByUri(currentWorkUri);

  const onGoToNextWork = useCallback(() => {
    if (nextWorkUri) {
      router.push(Hrefs.work(nextWorkUri));
    }
  }, [nextWorkUri, router]);

  const onGoToPreviousWork = useCallback(() => {
    if (previousWorkUri) {
      router.push(Hrefs.work(previousWorkUri));
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
              work={currentWork}
              workLocationsMapComponent={WorkLocationsMap}
            />
          </div>
        </div>
      </Hammer>
    </Layout>
  );
};

export default WorkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params: {workUri: string}}[] = [];

  for (const work of readModelSetFile(readFileSync).works) {
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

  const completeModelSet = readModelSetFile(readFileSync);

  const currentWork = completeModelSet.workByUri(workUri);
  const collectionUri = currentWork.collectionUris[0];
  const collectionWorks = completeModelSet.collectionWorks(collectionUri);

  const currentWorkI = collectionWorks.findIndex(
    work => work.uri === currentWork.uri
  );
  if (currentWorkI === -1) {
    throw new EvalError();
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
      configuration:
        readMultiPageExhibitionAppConfiguration(
          readConfigurationFile(readFileSync),
          completeModelSet.dataset
        ) ?? defaultMultiPageExhibitionAppConfiguration,
      currentWorkUri: workUri,
      modelSetString: new ModelSubsetter({
        completeModelSet,
        workPropertyUris: [],
      })
        .worksModelSet(
          workUris.map(workUri => completeModelSet.workByUri(workUri)),
          {
            agents: {
              thumbnail: {targetDimensions: thumbnailTargetDimensions},
            },
            allImages: true,
            collections: {},
            institution: {},
            events: {},
          }
        )
        .stringify(),
      nextWorkUri,
      previousWorkUri,
    },
  };
};
