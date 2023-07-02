import {WorkLocationSummary} from "@paradicms/services";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {
  faHammer,
  faLightbulb,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const getWorkLocationIcon = (
  workLocation: WorkLocationSummary
): IconDefinition => {
  switch (workLocation.role) {
    case "Creation":
      return faLightbulb;
    case "Current":
      return faLocationDot;
    case "Modification":
      return faHammer;
  }
};
