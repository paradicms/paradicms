import {Text, Work, WorkEvent} from "@paradicms/models";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getWorkEventIcon} from "./getWorkEventIcon";
import {RightsParagraph} from "./RightsParagraph";
import React = require("react");

export const WorkEventsTimeline: React.FunctionComponent<{
  readonly page: number; // 0-based
  readonly pageMax: number; // 0-based
  readonly setPage: (newPage: number) => void;
  readonly workEvents: readonly (WorkEvent & {readonly work: Work})[];
}> = ({page, pageMax, setPage, workEvents}) => {
  return (
    <VerticalTimeline layout="1-column">
      {workEvents.map(workEvent => (
        <VerticalTimelineElement
          date={workEvent.displayDate ?? undefined}
          key={workEvent.uri}
          icon={<FontAwesomeIcon icon={getWorkEventIcon(workEvent)} />}
        >
          <h3>{workEvent.title}</h3>
          {workEvent.description ? (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: workEvent.description.toString(),
                }}
              ></div>
              {workEvent.description instanceof Text &&
              workEvent.description.rights?.requiresAttribution ? (
                <RightsParagraph
                  material="Text"
                  rights={workEvent.description.rights}
                  style={{fontSize: "x-small", marginBottom: 0}}
                />
              ) : null}
            </>
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
