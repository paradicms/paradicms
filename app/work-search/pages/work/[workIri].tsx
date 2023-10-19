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
  getNamedModelLinks,
  getWorkLocationIcon,
  getWorkLocationLabel,
  workPageWorkJoinSelector,
} from "@paradicms/react-dom-components";
import {requireNonNull} from "@paradicms/utilities";
import {Layout} from "components/Layout";
import {JsonLd} from "jsonld/jsonld-spec";
import {GetStaticPaths, GetStaticProps} from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import {useRouter} from "next/router";
import * as React from "react";
import {LocationsMapLocation} from "single-page-exhibition/components/LocationsMap";
import {Hrefs} from "../../lib/Hrefs";

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
  readonly workIri: string;
  readonly workModelSetJsonLd: JsonLd;
}

const WorkPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "workModelSetJsonLd"
> & {readonly workModelSet: ModelSet}> = ({
  collectionLabel,
  configuration,
  workModelSet,
  workIri,
}) => {
  const router = useRouter();
  const work = requireNonNull(
    workModelSet.workByIri(DataFactory.namedNode(workIri))
  );

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
          <Link href={Hrefs.work(work)}>{children}</Link>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const api = await getStaticApi();

  const paths: {params: {workIri: string}}[] = [];
  for (const workIri of (await api.getWorkIris()).modelIris) {
    paths.push({
      params: {
        workIri: encodeFileName(workIri),
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
  const workIri = decodeFileName(params!.workIri as string);

  const api = await getStaticApi();

  const collections = (
    await api.getCollections({
      limit: 1,
    })
  ).modelSet.collections;

  const workModelSet = (
    await api.getWorks({
      joinSelector: workPageWorkJoinSelector,
      limit: 1,
      query: {
        filters: [
          {
            includeIris: [workIri],
            type: "Iri",
          },
        ],
      },
    })
  ).modelSet;

  return {
    props: {
      collectionLabel: collections.length === 1 ? collections[0].label : null,
      configuration: await api.getAppConfiguration(),
      workIri,
      workModelSetJsonLd: await workModelSet.toJsonLd(),
    },
  };
};
