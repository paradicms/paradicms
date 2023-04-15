import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {
  faDoorClosed,
  faDoorOpen,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import {
  WorkClosing,
  WorkCreation,
  WorkEvent,
  WorkOpening,
} from "@paradicms/models";

export const getWorkEventIcon = (workEvent: WorkEvent): IconDefinition => {
  return workEvent.accept({
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
