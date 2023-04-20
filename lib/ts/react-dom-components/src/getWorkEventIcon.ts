import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {
  faDoorClosed,
  faDoorOpen,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import {
  WorkClosing,
  WorkCreation,
  WorkEventUnion,
  WorkOpening,
} from "@paradicms/models";

export const getWorkEventIcon = (workEvent: WorkEventUnion): IconDefinition => {
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
