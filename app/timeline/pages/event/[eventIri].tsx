import {Event, JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  getAbsoluteImageSrc,
  getStaticApi,
} from "@paradicms/next";
import {DataFactory} from "@paradicms/rdf";
import {
  EventPage as DelegateEventPage,
  ModelSetJsonLdParser,
  eventPageEventJoinSelector,
} from "@paradicms/react-dom-components";
import {requireNonNull} from "@paradicms/utilities";
import {Layout} from "components/Layout";
import {JsonLd} from "jsonld/jsonld-spec";
import {GetStaticPaths, GetStaticProps} from "next";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import * as React from "react";
import {LocationsMapLocation} from "single-page-exhibition/components/LocationsMap";

const LocationsMap = dynamic<{
  readonly locations: readonly LocationsMapLocation[];
}>(
  () =>
    import("../../components/LocationsMap").then(module => module.LocationsMap),
  {ssr: false}
);

interface StaticProps {
  readonly configuration: JsonAppConfiguration | null;
  readonly eventIri: string;
  readonly modelSetJsonLd: JsonLd;
}

const EventPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({eventIri, modelSet}) => {
  const configuration = modelSet.appConfiguration;
  const event: Event = requireNonNull(
    modelSet.eventByIri(DataFactory.namedNode(eventIri))
  );
  const router = useRouter();

  return (
    <Layout configuration={configuration} event={event}>
      <DelegateEventPage
        event={event}
        getAbsoluteImageSrc={relativeImageSrc =>
          getAbsoluteImageSrc(relativeImageSrc, router)
        }
        renderEventLocationMap={eventLocation => (
          <LocationsMap
            locations={[
              {
                centroid: requireNonNull(eventLocation.centroid),
                icon: null,
                label: eventLocation.label ?? event.label,
              },
            ]}
          />
        )}
      />
    </Layout>
  );
};

const EventPage: React.FunctionComponent<StaticProps> = ({
  modelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={modelSetJsonLd}
    render={modelSet => <EventPageImpl modelSet={modelSet} {...otherProps} />}
  />
);

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const api = await getStaticApi();

  return {
    fallback: false,
    paths: (await api.getEventIris()).modelIris.map(eventIri => ({
      params: {
        eventIri: encodeFileName(eventIri),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const api = await getStaticApi();

  const eventIri = decodeFileName(params!.eventIri as string);

  return {
    props: {
      configuration: await api.getAppConfiguration(),
      eventIri,
      modelSetJsonLd: await (
        await api.getEvents({
          joinSelector: eventPageEventJoinSelector,
          query: {
            filters: [
              {
                includeIris: [eventIri],
                type: "Iri",
              },
            ],
          },
        })
      ).modelSet.toJsonLd(),
    },
  };
};
