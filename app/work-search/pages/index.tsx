import {MemWorkQueryService} from "@paradicms/mem-services";
import {ModelSet, ModelSetBuilder} from "@paradicms/models";
import {getAbsoluteImageSrc, readModelSet} from "@paradicms/next";
import {
  getWorkLocationIcon,
  getWorkLocationLabel,
  ModelSetJsonLdParser,
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
import {useMemo} from "react";
import {getDefaultWorksQueryFilters} from "../lib/getDefaultWorksQueryFilters";
import path from "path";
import fs from "fs";
import {LocationsMapLocation} from "single-page-exhibition/components/LocationsMap";
import {JsonLd} from "jsonld/jsonld-spec";

const LocationsMap = dynamic<{
  readonly locations: readonly LocationsMapLocation[];
}>(
  () =>
    import("../components/LocationsMap").then(module => module.LocationsMap),
  {ssr: false}
);

interface StaticProps {
  readonly collectionLabel: string | null;
  readonly modelSetJsonLd: JsonLd;
}

const IndexPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({collectionLabel, modelSet}) => {
  const configuration = modelSet.appConfiguration;
  const router = useRouter();
  const workQueryService = useMemo<WorkQueryService>(
    () =>
      new MemWorkQueryService({
        modelSet,
      }),
    [configuration, modelSet]
  );

  const {onSearch, ...workSearchQueryParams} = useWorkSearchQueryParams({
    filters: getDefaultWorksQueryFilters(modelSet.properties),
  });

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

const IndexPage: React.FunctionComponent<StaticProps> = ({
  modelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={modelSetJsonLd}
    render={modelSet => <IndexPageImpl modelSet={modelSet} {...otherProps} />}
  />
);

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
