import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {imagePlaceholderSrc, Work, WorkEventUnion} from "@paradicms/models";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {RightsParagraph} from "./RightsParagraph";
import {getWorkEventIcon} from "./getWorkEventIcon";
import React from "react";
import {GalleryCard} from "./GalleryCard";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";

const RIGHTS_STYLE: React.CSSProperties = {
  fontSize: "xx-small",
  marginBottom: 0,
  marginTop: 0,
};

const WorkEventCard: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactElement;
  work: Work;
  workEvent: WorkEventUnion;
}> = ({getAbsoluteImageSrc, renderWorkLink, work, workEvent}) => {
  const thumbnail = workEvent.thumbnail(galleryThumbnailSelector);

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
          style={{
            minHeight: galleryThumbnailSelector.targetDimensions.height,
          }}
        >
          {renderWorkLink(
            work,
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
          {renderWorkLink(work, workEvent.label)}
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

  return (
    <GalleryCard
      getAbsoluteImageSrc={getAbsoluteImageSrc}
      thumbnail={workEvent.thumbnail(galleryThumbnailSelector)}
      title={workEvent.label}
    />
  );
};

export const WorkEventsTimeline: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  page: number; // 0-based
  pageMax: number; // 0-based
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactElement;
  setPage: (newPage: number) => void;
  workEvents: readonly {work: Work; workEvent: WorkEventUnion}[];
}> = ({
  getAbsoluteImageSrc,
  page,
  pageMax,
  renderWorkLink,
  setPage,
  workEvents,
}) => {
  return (
    // @ts-ignore
    <VerticalTimeline layout="1-column-left">
      {workEvents.map(({work, workEvent}) => (
        <VerticalTimelineElement
          date={workEvent.displayDate ?? undefined}
          dateClassName="text-center"
          key={workEvent.key}
          icon={<FontAwesomeIcon icon={getWorkEventIcon(workEvent)} />}
        >
          <WorkEventCard
            getAbsoluteImageSrc={getAbsoluteImageSrc}
            renderWorkLink={renderWorkLink}
            work={work}
            workEvent={workEvent}
          />
        </VerticalTimelineElement>
      ))}
      {page < pageMax ? (
        <VerticalTimelineElement
          iconOnClick={() => setPage(page + 1)}
          icon={<FontAwesomeIcon icon={faEllipsisV} />}
        />
      ) : null}
    </VerticalTimeline>
  );
};
