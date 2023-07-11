import {Work, WorkEventUnion} from "@paradicms/models";
import {getWorkEventIcon} from "./getWorkEventIcon";
import React from "react";
import {EventsTimeline, EventsTimelineEvent} from "./EventsTimeline";

interface WorkEventsTimelineEvent extends EventsTimelineEvent {
  readonly work: Work;
}

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
    <EventsTimeline
      events={workEvents.map(
        ({work, workEvent}): WorkEventsTimelineEvent => ({
          displayDate: workEvent.displayDate,
          icon: getWorkEventIcon(workEvent),
          label: workEvent.label,
          key: workEvent.key,
          thumbnail: selector => workEvent.thumbnail(selector),
          work: work,
        })
      )}
      getAbsoluteImageSrc={getAbsoluteImageSrc}
      layout="1-column-left"
      page={page}
      pageMax={pageMax}
      renderEventLink={(event: EventsTimelineEvent, children) =>
        renderWorkLink((event as WorkEventsTimelineEvent).work, children)
      }
      setPage={setPage}
    />
  );
};
