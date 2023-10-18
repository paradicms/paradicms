import {JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  getAbsoluteImageSrc,
  getStaticApi,
} from "@paradicms/next";
import {DataFactory} from "@paradicms/rdf";
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
import {getExhibitionData} from "../../lib/getExhibitionData";

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
  readonly currentWorkIri: string;
  readonly currentWorkModelSetJsonLd: JsonLd;
  readonly nextWorkIri: string | null;
  readonly previousWorkIri: string | null;
}

const WorkPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "currentWorkModelSetJsonLd"
> & {readonly currentWorkModelSet: ModelSet}> = ({
  collection,
  configuration,
  currentWorkIri: currentWorkIriString,
  currentWorkModelSet,
  nextWorkIri: nextWorkIriString,
  previousWorkIri: previousWorkIriString,
}) => {
  const currentWorkIri = DataFactory.namedNode(currentWorkIriString);
  const nextWorkIri = nextWorkIriString
    ? DataFactory.namedNode(nextWorkIriString)
    : null;
  const previousWorkIri = previousWorkIriString
    ? DataFactory.namedNode(previousWorkIriString)
    : null;

  const currentWork = requireNonNull(
    currentWorkModelSet.workByIri(currentWorkIri)
  );
  const router = useRouter();

  const onGoToNextWork = useCallback(() => {
    if (nextWorkIri) {
      router.push(Hrefs.work({iri: nextWorkIri}));
    }
  }, [nextWorkIri, router]);

  const onGoToPreviousWork = useCallback(() => {
    if (previousWorkIri) {
      router.push(Hrefs.work({iri: previousWorkIri}));
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
              propertyGroups={currentWorkModelSet.propertyGroups}
              properties={currentWorkModelSet.properties}
              renderWorkLink={(work, children) => (
                <Link href={Hrefs.work({iri: currentWorkIri})}>{children}</Link>
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

  const paths: {params: {workIri: string}}[] = [];

  const {workIris} = await getExhibitionData(api);

  for (const workIri of workIris) {
    paths.push({
      params: {
        workIri: encodeFileName(workIri.value),
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

  const {collection, workIris} = await getExhibitionData(api);

  const currentWorkIri = decodeFileName(params!.workIri as string);

  const currentWorkI = workIris.findIndex(
    workIri => workIri.value == currentWorkIri
  );
  if (currentWorkI === -1) {
    throw new EvalError(`current work ${currentWorkIri} not found among works`);
  }

  const currentWorkModelSet = (
    await api.getWorks({
      joinSelector: workPageWorkJoinSelector,
      limit: 1,
      query: {
        filters: [
          {
            includeIris: [currentWorkIri],
            type: "Iri",
          },
        ],
      },
    })
  ).modelSet;

  return {
    props: {
      collection: collection ? {label: collection.label} : null,
      configuration: await api.getAppConfiguration(),
      currentWorkIri: currentWorkIri,
      currentWorkModelSetJsonLd: await currentWorkModelSet.toJsonLd(),
      nextWorkIri:
        currentWorkI + 1 < workIris.length
          ? workIris[currentWorkI + 1].value
          : null,
      previousWorkIri:
        currentWorkI > 0 ? workIris[currentWorkI - 1].value : null,
    },
  };
};
