import {Event, ThumbnailSelector} from "@paradicms/models";
import React, {useMemo} from "react";
import {Chrono, TimelineItem} from "react-chrono";
import log from "loglevel";
import {Hrefs} from "../lib/Hrefs";
import {GalleryCard} from "@paradicms/react-dom-components/dist/GalleryCard";
import {galleryThumbnailSelector} from "@paradicms/react-dom-components";

export const EventsTimeline: React.FunctionComponent<{
  events: readonly Event[];
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  mode: "HORIZONTAL" | "VERTICAL" | "VERTICAL_ALTERNATING";
  renderEventLink: (
    event: Event,
    children: React.ReactNode
  ) => React.ReactElement;
  thumbnailSelector: ThumbnailSelector;
}> = ({
  events,
  getAbsoluteImageSrc,
  mode,
  renderEventLink,
  thumbnailSelector,
}) => {
  const items: readonly TimelineItem[] = useMemo(
    () =>
      events
        .concat()
        .sort((left, right) => left.compareByDate(right))
        .map(event => {
          const item: TimelineItem = {
            // url: Hrefs.event(event),
          };

          if (event.displayDate) {
            item.title = event.displayDate;
          }

          // const thumbnail = event.thumbnail(thumbnailSelector);
          // if (thumbnail && thumbnail.src) {
          //   log.debug("event", event.key, "has thumbnail", thumbnail.src);
          //   item.media = {
          //     name: thumbnail.label ?? event.label,
          //     source: {
          //       url: getAbsoluteImageSrc(thumbnail.src),
          //     },
          //     type: "IMAGE",
          //   };
          // } else {
          //   log.debug("event", event.key, "has no thumbnail");
          // }

          item.timelineContent = (
            <GalleryCard
              getAbsoluteImageSrc={getAbsoluteImageSrc}
              renderLink={children => renderEventLink(event, children)}
              subtitle={event.displayDate}
              thumbnail={event.thumbnail(thumbnailSelector)}
              title={event.label}
            />
          );

          return item;
        }),
    [events]
  );

  return (
    <Chrono
      cardHeight={
        thumbnailSelector.targetDimensions.height +
        thumbnailSelector.targetDimensions.height * 2
      }
      classNames={{
        controls: "text-secondary",
        title: "bg-light text-primary",
      }}
      items={items}
      itemWidth={thumbnailSelector.targetDimensions.width}
      mode={mode}
    />
  );
};
