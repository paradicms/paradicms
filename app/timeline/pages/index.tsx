import {JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {getAbsoluteImageSrc, getStaticApi} from "@paradicms/next";
import {
  EventsTimeline,
  ModelSetJsonLdParser,
  galleryThumbnailSelector,
} from "@paradicms/react-dom-components";
import {JsonLd} from "jsonld/jsonld-spec";
import {GetStaticProps} from "next";
import Link from "next/link";
import {useRouter} from "next/router";
import * as React from "react";
import "react-vertical-timeline-component/style.min.css";
import {Layout} from "../components/Layout";
import {Hrefs} from "../lib/Hrefs";

interface StaticProps {
  readonly configuration: JsonAppConfiguration | null;
  readonly modelSetJsonLd: JsonLd;
}

const IndexPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({modelSet}) => {
  const configuration = modelSet.appConfiguration;
  // log.debug("events in timeline:", modelSet.events.length);
  const router = useRouter();

  return (
    <Layout configuration={configuration}>
      <EventsTimeline
        events={modelSet.events}
        getAbsoluteImageSrc={relativeImageSrc =>
          getAbsoluteImageSrc(relativeImageSrc, router)
        }
        page={0}
        pageMax={0}
        renderEventLink={(event, children) => (
          <Link href={Hrefs.event(event)}>{children}</Link>
        )}
        setPage={() => {}}
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
  const api = await getStaticApi();

  return {
    props: {
      configuration: await api.getAppConfiguration(),
      modelSetJsonLd: await (
        await api.getEvents({
          joinSelector: {thumbnail: galleryThumbnailSelector},
        })
      ).modelSet.toJsonLd(),
    },
  };
};
