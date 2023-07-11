import {
  Event,
  ModelSet,
  ModelSetBuilder,
  ModelSetFactory,
} from "@paradicms/models";
import {
  decodeFileName,
  encodeFileName,
  getAbsoluteImageSrc,
  readModelSet,
} from "@paradicms/next";
import {
  EventPage as DelegateEventPage,
  eventPageEventJoinSelector,
} from "@paradicms/react-dom-components";
import {Layout} from "components/Layout";
import fs from "fs";
import {GetStaticPaths, GetStaticProps} from "next";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import * as React from "react";
import {useMemo} from "react";
import path from "path";
import {requireNonNull} from "@paradicms/utilities";
import {LocationsMapLocation} from "single-page-exhibition/components/LocationsMap";

const LocationsMap = dynamic<{
  readonly locations: readonly LocationsMapLocation[];
}>(
  () =>
    import("../../components/LocationsMap").then(module => module.LocationsMap),
  {ssr: false}
);

interface StaticProps {
  readonly eventKey: string;
  readonly modelSetString: string;
}

const EventPage: React.FunctionComponent<StaticProps> = ({
  eventKey,
  modelSetString,
}) => {
  const modelSet = useMemo<ModelSet>(
    () => ModelSetFactory.fromFastRdfString(modelSetString),
    [modelSetString]
  );
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

export default EventPage;

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

export const getStaticPaths: GetStaticPaths = async () => {
  const modelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile,
  });

  return {
    fallback: false,
    paths: modelSet.events.map(event => ({
      params: {
        eventKey: encodeFileName(event.key),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const completeModelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile,
  });
  const eventKey = decodeFileName(params!.eventKey as string);

  return {
    props: {
      eventKey,
      modelSetString: new ModelSetBuilder()
        .addAppConfiguration(completeModelSet.appConfiguration)
        .addEvent(
          requireNonNull(completeModelSet.eventByKey(eventKey)),
          eventPageEventJoinSelector
        )
        .build()
        .toFastRdfString(),
    },
  };
};
