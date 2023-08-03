import {
  ModelSet,
  ModelSetBuilder,
  selectExhibitionWorks,
} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  getAbsoluteImageSrc,
  readModelSet,
} from "@paradicms/next";
import {
  getWorkLocationIcon,
  getWorkLocationLabel,
  ModelSetJsonLdParser,
  WorkPage as DelegateWorkPage,
  workPageWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {Layout} from "components/Layout";
import fs from "fs";
import {Hrefs} from "lib/Hrefs";
import {GetStaticPaths, GetStaticProps} from "next";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import * as React from "react";
import {useCallback} from "react";
import Hammer from "react-hammerjs";
import path from "path";
import {requireNonNull} from "@paradicms/utilities";
import Link from "next/link";
import {LocationsMapLocation} from "single-page-exhibition/components/LocationsMap";

const LocationsMap = dynamic<{
  readonly locations: readonly LocationsMapLocation[];
}>(
  () =>
    import("../../components/LocationsMap").then(module => module.LocationsMap),
  {ssr: false}
);

interface StaticProps {
  readonly collectionKey: string | null;
  readonly currentWorkKey: string;
  readonly modelSetJsonLd: any;
  readonly nextWorkKey: string | null;
  readonly previousWorkKey: string | null;
}

const WorkPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({
  collectionKey,
  currentWorkKey,
  modelSet,
  nextWorkKey,
  previousWorkKey,
}) => {
  const collection = collectionKey
    ? modelSet.collectionByKey(collectionKey)
    : null;
  const configuration = modelSet.appConfiguration;
  const currentWork = requireNonNull(modelSet.workByKey(currentWorkKey));
  const router = useRouter();

  const onGoToNextWork = useCallback(() => {
    if (nextWorkKey) {
      router.push(Hrefs.work({key: nextWorkKey}));
    }
  }, [nextWorkKey, router]);

  const onGoToPreviousWork = useCallback(() => {
    if (previousWorkKey) {
      router.push(Hrefs.work({key: previousWorkKey}));
    }
  }, [previousWorkKey, router]);

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
      nextWork={nextWorkKey ? {key: nextWorkKey} : undefined}
      previousWork={previousWorkKey ? {key: previousWorkKey} : undefined}
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
              renderWorkLink={(work, children) => (
                <Link href={Hrefs.work({key: currentWorkKey})}>
                  <a>{children}</a>
                </Link>
              )}
              renderWorkLocationsMap={workLocations => (
                <LocationsMap
                  locations={workLocations.map(workLocation => ({
                    centroid: workLocation.location.centroid!,
                    icon: getWorkLocationIcon(workLocation),
                    label: getWorkLocationLabel(workLocation),
                  }))}
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

const WorkPage: React.FunctionComponent<StaticProps> = ({
  modelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={modelSetJsonLd}
    render={modelSet => <WorkPageImpl modelSet={modelSet} {...otherProps} />}
  />
);

export default WorkPage;

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

export const getStaticPaths: GetStaticPaths = async () => {
  const modelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile,
  });

  const paths: {params: {workKey: string}}[] = [];

  const {works} = selectExhibitionWorks(modelSet);

  // Use first collection with works
  for (const work of works) {
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
  const completeModelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile,
  });
  const {collection, works} = selectExhibitionWorks(completeModelSet);
  const workKey = decodeFileName(params!.workKey as string);

  const currentWork = requireNonNull(completeModelSet.workByKey(workKey));

  const currentWorkI = works.findIndex(work => work.key === currentWork.key);
  if (currentWorkI === -1) {
    throw new EvalError(
      `current work ${currentWork.key} not found among works`
    );
  }
  const nextWorkKey =
    currentWorkI + 1 < works.length ? works[currentWorkI + 1].key : null;
  const previousWorkKey = currentWorkI > 0 ? works[currentWorkI - 1].key : null;

  const workKeys: string[] = [];
  if (previousWorkKey) {
    workKeys.push(previousWorkKey);
  }
  workKeys.push(workKey);
  if (nextWorkKey) {
    workKeys.push(nextWorkKey);
  }

  const modelSetBuilder = new ModelSetBuilder()
    .addAppConfiguration(completeModelSet.appConfiguration)
    .addWorks(
      workKeys.map(workKey =>
        requireNonNull(completeModelSet.workByKey(workKey))
      ),
      workPageWorkJoinSelector
    );
  if (collection) {
    modelSetBuilder.addCollection(collection);
  }

  return {
    props: {
      collectionKey: collection?.key ?? null,
      currentWorkKey: workKey,
      modelSetJsonLd: await modelSetBuilder.build().toJsonLd(),
      nextWorkKey: nextWorkKey,
      previousWorkKey: previousWorkKey,
    },
  };
};
