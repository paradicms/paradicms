import {JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  getAbsoluteImageSrc,
  getStaticApi,
} from "@paradicms/next";
import {
  getNamedModelLinks,
  getWorkLocationIcon,
  getWorkLocationLabel,
  ModelSetJsonLdParser,
  WorkPage as DelegateWorkPage,
  workPageWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {Layout} from "components/Layout";
import * as fs from "fs";
import {GetStaticPaths, GetStaticProps} from "next";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import * as React from "react";
import path from "path";
import {requireNonNull} from "@paradicms/utilities";
import Link from "next/link";
import {Hrefs} from "../../lib/Hrefs";
import {LocationsMapLocation} from "single-page-exhibition/components/LocationsMap";
import {JsonLd} from "jsonld/jsonld-spec";

const LocationsMap = dynamic<{
  readonly locations: readonly LocationsMapLocation[];
}>(
  () =>
    import("../../components/LocationsMap").then(module => module.LocationsMap),
  {ssr: false}
);

interface StaticProps {
  readonly collectionLabel: string | null;
  readonly configuration: JsonAppConfiguration | null;
  readonly workKey: string;
  readonly workModelSetJsonLd: JsonLd;
}

const WorkPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "workModelSetJsonLd"
> & {readonly workModelSet: ModelSet}> = ({
  collectionLabel,
  configuration,
  workModelSet,
  workKey,
}) => {
  const router = useRouter();
  const work = requireNonNull(workModelSet.workByKey(workKey));

  return (
    <Layout
      cardHeaderLinks={getNamedModelLinks(work)}
      collectionLabel={collectionLabel ?? undefined}
      configuration={configuration}
      properties={workModelSet.properties}
      title={work.label}
    >
      <DelegateWorkPage
        getAbsoluteImageSrc={relativeImageSrc =>
          getAbsoluteImageSrc(relativeImageSrc, router)
        }
        properties={workModelSet.properties}
        propertyGroups={workModelSet.propertyGroups}
        renderWorkLink={(work, children) => (
          <Link href={Hrefs.work(work)}>
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
        work={work}
      />
    </Layout>
  );
};

const WorkPage: React.FunctionComponent<StaticProps> = ({
  workModelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={workModelSetJsonLd}
    render={modelSet => (
      <WorkPageImpl workModelSet={modelSet} {...otherProps} />
    )}
  />
);

export default WorkPage;

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

export const getStaticPaths: GetStaticPaths = async () => {
  const {api} = await getStaticApi({
    pathDelimiter: path.delimiter,
    readFile,
  });

  const paths: {params: {workKey: string}}[] = [];
  for (const workKey of (await api.getWorkKeys()).modelKeys) {
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
  const workKey = decodeFileName(params!.workKey as string);

  const {api} = await getStaticApi({
    pathDelimiter: path.delimiter,
    readFile,
  });

  const collections = (
    await api.getCollections({
      limit: 1,
    })
  ).modelSet.collections;

  const workModelSet = (
    await api.getWorks({
      joinSelector: workPageWorkJoinSelector,
    })
  ).modelSet;

  return {
    props: {
      collectionLabel: collections.length === 1 ? collections[0].label : null,
      configuration: await api.getAppConfiguration(),
      workKey,
      workModelSetJsonLd: await workModelSet.toJsonLd(),
    },
  };
};
