import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {
  faDoorClosed,
  faDoorOpen,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import {WorkEventUnion} from "@paradicms/models";

export const getWorkEventIcon = (workEvent: WorkEventUnion): IconDefinition => {
  switch (workEvent.type) {
    case "WorkClosing":
      return faDoorClosed;
    case "WorkCreation":
      return faLightbulb;
    case "WorkOpening":
      return faDoorOpen;
  }
};
