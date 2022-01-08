import {Work, WorkEvent, WorkEventDateTime} from "@paradicms/models";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import React = require("react");

const toDateTimeString = (dateTime: WorkEventDateTime): string => {
  const {day, month, year} = dateTime;
  if (month == null) {
    return year.toString();
  }
  if (day === null) {
    return `${month}/${year}`;
  }
  return `${day}/${month}/${year}`;
};

export const WorkEventsTimeline: React.FunctionComponent<{
  readonly page: number; // 0-based
  readonly pageMax: number; // 0-based
  readonly setPage: (newPage: number) => void;
  readonly workEvents: (WorkEvent & {readonly work: Work})[];
}> = ({workEvents}) => {
  // elements.sort((leftElement, rightElement) => {
  //   const yearDiff = leftElement.year - rightElement.year;
  //   if (yearDiff !== 0) {
  //     return yearDiff;
  //   }
  //   const monthDiff = leftElement.month - rightElement.month;
  //   if (monthDiff !== 0) {
  //     return monthDiff;
  //   }
  //   return leftElement.day - rightElement.day;
  // });

  return (
    <VerticalTimeline>
      {workEvents.map(workEvent => (
        <VerticalTimelineElement date={toDateTimeString(workEvent.dateTime)}>
          <h3>
            {workEvent.type}:&nbsp;{workEvent.work.title}
          </h3>
          {workEvent.work.abstract ? <p>{workEvent.work.abstract}</p> : null}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
