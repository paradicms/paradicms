import {JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {getAbsoluteImageSrc, getStaticApi} from "@paradicms/next";
import fs from "fs";
import {GetStaticProps} from "next";
import * as path from "path";
import * as React from "react";
import {Layout} from "../components/Layout";
import {
  EventsTimeline,
  galleryThumbnailSelector,
  ModelSetJsonLdParser,
} from "@paradicms/react-dom-components";
import {useRouter} from "next/router";
import {Hrefs} from "../lib/Hrefs";
import Link from "next/link";
import "react-vertical-timeline-component/style.min.css";
import {JsonLd} from "jsonld/jsonld-spec";

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
          <Link href={Hrefs.event(event)}>
            <a>{children}</a>
          </Link>
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
  const {api} = await getStaticApi({
    pathDelimiter: path.delimiter,
    readFile: (filePath: string) =>
      fs.promises.readFile(filePath).then(contents => contents.toString()),
  });

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
