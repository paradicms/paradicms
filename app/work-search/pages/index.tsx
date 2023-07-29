import {MemWorkQueryService} from "@paradicms/mem-services";
import {ModelSet, ModelSetBuilder, ModelSetFactory} from "@paradicms/models";
import {getAbsoluteImageSrc, readModelSet} from "@paradicms/next";
import {
  getWorkLocationIcon,
  getWorkLocationLabel,
  WorkSearchPage,
  workSearchWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {useWorkSearchQueryParams} from "@paradicms/react-dom-hooks";
import {WorkQueryService} from "@paradicms/services";
import {Layout} from "components/Layout";
import {Hrefs} from "lib/Hrefs";
import {GetStaticProps} from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import {useRouter} from "next/router";
import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {getDefaultWorksQueryFilters} from "../lib/getDefaultWorksQueryFilters";
import path from "path";
import fs from "fs";
import {LocationsMapLocation} from "single-page-exhibition/components/LocationsMap";
import * as jsonld from "jsonld";
import {Quad} from "@rdfjs/types";
import {Store} from "@paradicms/rdf";

const LocationsMap = dynamic<{
  readonly locations: readonly LocationsMapLocation[];
}>(
  () =>
    import("../components/LocationsMap").then(module => module.LocationsMap),
  {ssr: false}
);

interface StaticProps {
  readonly collectionLabel: string | null;
  readonly modelSetJsonLd: any;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  collectionLabel,
  modelSetJsonLd,
}) => {
  const [modelSet, setModelSet] = useState<ModelSet | null>(null);
  useEffect(
    () => ModelSetFactory.fromJsonLd(modelSetJsonLd).then(setModelSet),
    [modelSetJsonLd]
  );
  const router = useRouter();
  const workQueryService = useMemo<WorkQueryService | null>(
    () =>
      modelSet
        ? new MemWorkQueryService({
            modelSet,
          })
        : null,
    [modelSet]
  );

  const {onSearch, ...workSearchQueryParams} = useWorkSearchQueryParams({
    filters: modelSet ? getDefaultWorksQueryFilters(modelSet.properties) : [],
  });

  if (!modelSet || !workQueryService) {
    return null;
  }

  const configuration = modelSet.appConfiguration;

  return (
    <Layout
      collectionLabel={collectionLabel ?? undefined}
      configuration={configuration}
      onSearch={onSearch}
      properties={modelSet.properties}
    >
      <WorkSearchPage
        getAbsoluteImageSrc={relativeImageSrc =>
          getAbsoluteImageSrc(relativeImageSrc, router)
        }
        objectsPerPage={configuration?.objectsPerPage ?? 10}
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
        workQueryService={workQueryService}
        {...workSearchQueryParams}
      />
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const completeModelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile: (filePath: string) =>
      fs.promises.readFile(filePath).then(contents => contents.toString()),
  });

  return {
    props: {
      collectionLabel:
        completeModelSet.collections.length === 1
          ? completeModelSet.collections[0].label
          : null,
      modelSetJsonLd: await new ModelSetBuilder()
        .addAppConfiguration(completeModelSet.appConfiguration)
        .addWorks(completeModelSet.works, workSearchWorkJoinSelector)
        .build()
        .toJsonLd(),
    },
  };
};
