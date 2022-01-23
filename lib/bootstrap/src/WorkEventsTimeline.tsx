import {Work, WorkEvent} from "@paradicms/models";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getWorkEventIcon} from "./getWorkEventIcon";
import React = require("react");

export const WorkEventsTimeline: React.FunctionComponent<{
  readonly page: number; // 0-based
  readonly pageMax: number; // 0-based
  readonly setPage: (newPage: number) => void;
  readonly workEvents: (WorkEvent & {readonly work: Work})[];
}> = ({page, pageMax, setPage, workEvents}) => {
  return (
    <VerticalTimeline>
      {workEvents.map(workEvent => (
        <VerticalTimelineElement
          date={workEvent.displayDate}
          key={workEvent.uri}
          icon={<FontAwesomeIcon icon={getWorkEventIcon(workEvent)} />}
        >
          <h3>{workEvent.title ?? workEvent.work.title}</h3>
          {workEvent.abstract ? <p>{workEvent.abstract.toString()}</p> : null}
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
