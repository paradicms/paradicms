import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faHammer, faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {WorkEvent} from "@paradicms/models";

export const getWorkEventIcon = (workEvent: WorkEvent): IconDefinition => {
  switch (workEvent.type) {
    // case "WorkClosing":
    //   return faDoorClosed;
    case "WorkCreation":
      return faLightbulb;
    case "WorkModification":
      return faHammer;
    // case "WorkOpening":
    //   return faDoorOpen;
  }
};
