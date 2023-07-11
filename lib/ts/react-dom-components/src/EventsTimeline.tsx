import {imagePlaceholderSrc} from "@paradicms/models";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import {RightsParagraph} from "./RightsParagraph";
import {EventsTimelineEvent} from "./EventsTimelineEvent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";

const RIGHTS_STYLE: React.CSSProperties = {
  fontSize: "xx-small",
  marginBottom: 0,
  marginTop: 0,
};

const EventCard: React.FunctionComponent<{
  event: EventsTimelineEvent;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  renderEventLink: (
    event: EventsTimelineEvent,
    children: React.ReactNode
  ) => React.ReactElement;
}> = ({event, getAbsoluteImageSrc, renderEventLink}) => {
  const thumbnail = event.thumbnail(galleryThumbnailSelector);

  return (
    <Card
      className="border-0"
      style={{
        maxWidth: galleryThumbnailSelector.targetDimensions.width,
      }}
    >
      {thumbnail ? (
        <div
          className="d-flex justify-content-center"
          // style={{
          //   minHeight: galleryThumbnailSelector.targetDimensions.height,
          // }}
        >
          {renderEventLink(
            event,
            <img
              src={
                thumbnail?.src
                  ? getAbsoluteImageSrc(thumbnail.src)
                  : imagePlaceholderSrc(
                      galleryThumbnailSelector.targetDimensions
                    )
              }
              style={{
                alignSelf: "center",
                maxHeight: galleryThumbnailSelector.targetDimensions.height,
                maxWidth: galleryThumbnailSelector.targetDimensions.width,
              }}
            />
          )}
        </div>
      ) : null}
      <CardBody className="text-center">
        <CardTitle className="mb-1" tag="h5">
          {renderEventLink(event, event.label)}
        </CardTitle>
        {thumbnail && thumbnail.requiresAttribution ? (
          <CardText tag="div">
            {thumbnail && thumbnail.requiresAttribution ? (
              <RightsParagraph
                tag="div"
                material="Image"
                rights={thumbnail}
                style={RIGHTS_STYLE}
              />
            ) : null}
          </CardText>
        ) : null}
      </CardBody>
    </Card>
  );
};

export const EventsTimeline: React.FunctionComponent<{
  events: readonly EventsTimelineEvent[];
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  layout?: "1-column-left" | "1-column-right" | "2-columns";
  page: number; // 0-based
  pageMax: number; // 0-based
  renderEventLink: (
    event: EventsTimelineEvent,
    children: React.ReactNode
  ) => React.ReactElement;
  setPage: (newPage: number) => void;
}> = ({
  events,
  getAbsoluteImageSrc,
  layout,
  page,
  pageMax,
  renderEventLink,
  setPage,
}) => {
  return (
    // @ts-ignore
    <VerticalTimeline layout={layout}>
      {events.map(event => (
        <VerticalTimelineElement
          date={event.displayDate ?? undefined}
          dateClassName="text-center"
          icon={<FontAwesomeIcon icon={event.icon ?? faCalendarDays} />}
          key={event.key}
        >
          <EventCard
            getAbsoluteImageSrc={getAbsoluteImageSrc}
            renderEventLink={renderEventLink}
            event={event}
          />
        </VerticalTimelineElement>
      ))}
      {page < pageMax ? (
        <VerticalTimelineElement
          iconOnClick={() => setPage(page + 1)}
          // icon={<FontAwesomeIcon icon={faEllipsisV} />}
        />
      ) : null}
    </VerticalTimeline>
  );
};
