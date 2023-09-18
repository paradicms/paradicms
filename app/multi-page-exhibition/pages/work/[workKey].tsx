import {getExhibitionData} from "@paradicms/api";
import {JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  getAbsoluteImageSrc,
  getStaticApi,
} from "@paradicms/next";
import {
  WorkPage as DelegateWorkPage,
  ModelSetJsonLdParser,
  getWorkLocationIcon,
  getWorkLocationLabel,
  workPageWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {requireNonNull} from "@paradicms/utilities";
import {Layout} from "components/Layout";
import {JsonLd} from "jsonld/jsonld-spec";
import {Hrefs} from "lib/Hrefs";
import {GetStaticPaths, GetStaticProps} from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import {useRouter} from "next/router";
import * as React from "react";
import {useCallback} from "react";
import Hammer from "react-hammerjs";
import {LocationsMapLocation} from "single-page-exhibition/components/LocationsMap";
import invariant from "ts-invariant";

const LocationsMap = dynamic<{
  readonly locations: readonly LocationsMapLocation[];
}>(
  () =>
    import("../../components/LocationsMap").then(module => module.LocationsMap),
  {ssr: false}
);

interface StaticProps {
  readonly collection: {readonly label: string} | null;
  readonly configuration: JsonAppConfiguration | null;
  readonly currentWorkKey: string;
  readonly currentWorkModelSetJsonLd: JsonLd;
  readonly nextWorkKey: string | null;
  readonly previousWorkKey: string | null;
}

const WorkPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "currentWorkModelSetJsonLd"
> & {readonly currentWorkModelSet: ModelSet}> = ({
  collection,
  configuration,
  currentWorkKey,
  currentWorkModelSet,
  nextWorkKey,
  previousWorkKey,
}) => {
  const currentWork = requireNonNull(
    currentWorkModelSet.workByKey(currentWorkKey)
  );
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
              propertyGroups={currentWorkModelSet.propertyGroups}
              properties={currentWorkModelSet.properties}
              renderWorkLink={(work, children) => (
                <Link href={Hrefs.work({key: currentWorkKey})}>{children}</Link>
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
  currentWorkModelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={currentWorkModelSetJsonLd}
    render={modelSet => (
      <WorkPageImpl currentWorkModelSet={modelSet} {...otherProps} />
    )}
  />
);

export default WorkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const api = await getStaticApi();

  const paths: {params: {workKey: string}}[] = [];

  const {workKeys} = await getExhibitionData(api);

  for (const workKey of workKeys) {
    paths.push({
      params: {
        workKey: encodeFileName(workKey),
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
  const api = await getStaticApi();

  const {collection, workKeys} = await getExhibitionData(api);

  const currentWorkKey = decodeFileName(params!.workKey as string);

  const currentWorkI = workKeys.findIndex(workKey => workKey == currentWorkKey);
  if (currentWorkI === -1) {
    throw new EvalError(`current work ${currentWorkKey} not found among works`);
  }
  const nextWorkKey =
    currentWorkI + 1 < workKeys.length ? workKeys[currentWorkI + 1] : null;
  const previousWorkKey = currentWorkI > 0 ? workKeys[currentWorkI - 1] : null;

  const currentWorkModelSet = (
    await api.getWorks({
      joinSelector: workPageWorkJoinSelector,
      limit: 1,
      query: {
        filters: [
          {
            includeKeys: [currentWorkKey],
            type: "Key",
          },
        ],
      },
    })
  ).modelSet;
  invariant(
    currentWorkModelSet.works.length == 1,
    currentWorkModelSet.works.length
  );
  invariant(
    currentWorkModelSet.works[0].key === currentWorkKey,
    currentWorkModelSet.works[0].key
  );

  return {
    props: {
      collection: collection ? {label: collection.label} : null,
      configuration: await api.getAppConfiguration(),
      currentWorkKey: currentWorkKey,
      currentWorkModelSetJsonLd: await currentWorkModelSet.toJsonLd(),
      nextWorkKey: nextWorkKey,
      previousWorkKey: previousWorkKey,
    },
  };
};
