import {
  visitWorkEvent,
  WorkClosing,
  WorkCreation,
  WorkEvent,
  WorkOpening,
} from "@paradicms/models";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {
  faDoorClosed,
  faDoorOpen,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export const getWorkEventIcon = (workEvent: WorkEvent): IconDefinition => {
  return visitWorkEvent(workEvent, {
    visitWorkClosing(workClosing: WorkClosing): IconDefinition {
      return faDoorClosed;
    },
    visitWorkCreation(workCreation: WorkCreation): IconDefinition {
      return faLightbulb;
    },
    visitWorkOpening(workOpening: WorkOpening): IconDefinition {
      return faDoorOpen;
    },
  });
};
