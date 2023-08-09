import {Event, JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  getAbsoluteImageSrc,
  getStaticApi,
} from "@paradicms/next";
import {
  EventPage as DelegateEventPage,
  eventPageEventJoinSelector,
  ModelSetJsonLdParser,
} from "@paradicms/react-dom-components";
import {Layout} from "components/Layout";
import fs from "fs";
import {GetStaticPaths, GetStaticProps} from "next";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import * as React from "react";
import path from "path";
import {requireNonNull} from "@paradicms/utilities";
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
  readonly configuration: JsonAppConfiguration | null;
  readonly eventKey: string;
  readonly modelSetJsonLd: JsonLd;
}

const EventPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({eventKey, modelSet}) => {
  const configuration = modelSet.appConfiguration;
  const event: Event = requireNonNull(modelSet.eventByKey(eventKey));
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

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

export const getStaticPaths: GetStaticPaths = async () => {
  const {api} = await getStaticApi({
    pathDelimiter: path.delimiter,
    readFile,
  });

  return {
    fallback: false,
    paths: (await api.getEventKeys()).eventKeys.map(eventKey => ({
      params: {
        eventKey: encodeFileName(eventKey),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const {api} = await getStaticApi({
    pathDelimiter: path.delimiter,
    readFile,
  });

  const eventKey = decodeFileName(params!.eventKey as string);

  return {
    props: {
      configuration: await api.getAppConfiguration(),
      eventKey,
      modelSetJsonLd: await (
        await api.getEvents({
          eventJoinSelector: eventPageEventJoinSelector,
          query: {
            filters: [
              {
                includeKeys: [eventKey],
                type: "Key",
              },
            ],
          },
        })
      ).modelSet.toJsonLd(),
    },
  };
};
