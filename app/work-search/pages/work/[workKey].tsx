import {ModelSet, ModelSetBuilder} from "@paradicms/models";
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
  readonly modelSetJsonLd: JsonLd;
  readonly workKey: string;
}

const WorkPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({collectionLabel, modelSet, workKey}) => {
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
  const modelSet = await getStaticApi({
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

  const completeModelSet = await getStaticApi({
    pathDelimiter: path.delimiter,
    readFile,
  });

  return {
    props: {
      collectionLabel:
        completeModelSet.collections.length === 1
          ? completeModelSet.collections[0].label
          : null,
      modelSetJsonLd: await new ModelSetBuilder()
        .addAppConfiguration(completeModelSet.appConfiguration)
        .addWork(
          requireNonNull(completeModelSet.workByKey(workKey)),
          workPageWorkJoinSelector
        )
        .build()
        .toJsonLd(),
      workKey: workKey,
    },
  };
};
