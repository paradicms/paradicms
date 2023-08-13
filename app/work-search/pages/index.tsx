import {JsonAppConfiguration} from "@paradicms/models";
import {
  ApiConfiguration,
  ApiProvider,
  getAbsoluteImageSrc,
  getClientApiConfiguration,
  getStaticApi,
  useApi,
} from "@paradicms/next";
import {
  getWorkLocationIcon,
  getWorkLocationLabel,
  WorkSearchPage,
} from "@paradicms/react-dom-components";
import {useWorkSearchQueryParams} from "@paradicms/react-dom-hooks";
import {Layout} from "components/Layout";
import {Hrefs} from "lib/Hrefs";
import {GetStaticProps} from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import {useRouter} from "next/router";
import * as React from "react";
import {getDefaultWorksQueryFilters} from "../lib/getDefaultWorksQueryFilters";
import {LocationsMapLocation} from "single-page-exhibition/components/LocationsMap";
import {JsonProperty} from "../lib/JsonProperty";

const LocationsMap = dynamic<{
  readonly locations: readonly LocationsMapLocation[];
}>(
  () =>
    import("../components/LocationsMap").then(module => module.LocationsMap),
  {ssr: false}
);

interface StaticProps {
  readonly apiConfiguration: ApiConfiguration;
  readonly collectionLabel: string | null;
  readonly configuration: JsonAppConfiguration | null;
  readonly properties: readonly JsonProperty[];
}

const IndexPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "apiConfiguration"
>> = ({collectionLabel, configuration, properties}) => {
  const api = useApi();
  const router = useRouter();

  const {onSearch, ...workSearchQueryParams} = useWorkSearchQueryParams({
    filters: getDefaultWorksQueryFilters(properties),
  });

  return (
    <Layout
      collectionLabel={collectionLabel ?? undefined}
      configuration={configuration}
      onSearch={onSearch}
      properties={properties}
    >
      <WorkSearchPage
        api={api}
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
        {...workSearchQueryParams}
      />
    </Layout>
  );
};

const IndexPage: React.FunctionComponent<StaticProps> = ({
  apiConfiguration,
  ...otherProps
}) => (
  <ApiProvider apiConfiguration={apiConfiguration}>
    <IndexPageImpl {...otherProps} />
  </ApiProvider>
);

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const api = await getStaticApi();

  const collections = (
    await api.getCollections({
      limit: 1,
    })
  ).modelSet.collections;

  return {
    props: {
      apiConfiguration: await getClientApiConfiguration(),
      collectionLabel: collections.length === 1 ? collections[0].label : null,
      configuration: await api.getAppConfiguration(),
      properties: (await api.getProperties()).modelSet.properties.map(
        property => ({
          filterable: property.filterable,
          iris: property.iris,
          label: property.label,
        })
      ),
    },
  };
};
