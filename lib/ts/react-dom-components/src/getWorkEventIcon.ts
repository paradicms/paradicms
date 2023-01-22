import {visitWorkEvent, WorkCreation, WorkEvent} from "@paradicms/models";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";

export const getWorkEventIcon = (workEvent: WorkEvent): IconDefinition => {
  return visitWorkEvent(workEvent, {
    visitWorkCreation(workCreation: WorkCreation): IconDefinition {
      return faLightbulb;
    },
  });
};
