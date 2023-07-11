import {ModelSetBuilder, ModelSetFactory} from "@paradicms/models";
import {getAbsoluteImageSrc, readModelSet} from "@paradicms/next";
import fs from "fs";
import {GetStaticProps} from "next";
import * as path from "path";
import * as React from "react";
import {useMemo} from "react";
import {Layout} from "../components/Layout";
import {galleryThumbnailSelector} from "@paradicms/react-dom-components";
import {EventsTimeline} from "../components/EventsTimeline";
import {useRouter} from "next/router";
import {Hrefs} from "../lib/Hrefs";
import Link from "next/link";

interface StaticProps {
  readonly modelSetString: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({modelSetString}) => {
  const modelSet = useMemo(
    () => ModelSetFactory.fromFastRdfString(modelSetString),
    [modelSetString]
  );
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
        mode="VERTICAL_ALTERNATING"
        renderEventLink={(event, children) => (
          <Link href={Hrefs.event(event)}>
            <a>{children}</a>
          </Link>
        )}
        thumbnailSelector={galleryThumbnailSelector}
      />
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const modelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile: (filePath: string) =>
      fs.promises.readFile(filePath).then(contents => contents.toString()),
  });

  return {
    props: {
      modelSetString: new ModelSetBuilder()
        .addAppConfiguration(modelSet.appConfiguration)
        .addEvents(modelSet.events, {thumbnail: galleryThumbnailSelector})
        .build()
        .toFastRdfString(),
    },
  };
};
