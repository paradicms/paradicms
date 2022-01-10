import {
  Work,
  WorkEvent,
  WorkEventDateTime,
  WorkEventType,
} from "@paradicms/models";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {faEllipsisV, faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import React = require("react");

const getWorkEventTypeIcon = (workEventType: WorkEventType): IconDefinition => {
  switch (workEventType) {
    case "Creation":
      return faLightbulb;
  }
};

const toDateTimeString = (dateTime: WorkEventDateTime): string => {
  const {day, month, year} = dateTime;
  if (month == null) {
    return year.toString();
  }
  if (day === null) {
    return `${month}/${year}`;
  }
  return `${month}/${day}/${year}`;
};

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
          date={toDateTimeString(workEvent.dateTime)}
          icon={<FontAwesomeIcon icon={getWorkEventTypeIcon(workEvent.type)} />}
        >
          <h3>{workEvent.work.title}</h3>
          {workEvent.work.abstract ? (
            <p>{workEvent.work.abstract.toString()}</p>
          ) : null}
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
