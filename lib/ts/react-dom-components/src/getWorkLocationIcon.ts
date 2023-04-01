import {WorkLocationSummary} from "@paradicms/services";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {
  faDoorClosed,
  faDoorOpen,
  faLightbulb,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const getWorkLocationIcon = (
  workLocation: WorkLocationSummary
): IconDefinition => {
  switch (workLocation.role) {
    case "Closing":
      return faDoorClosed;
    case "Creation":
      return faLightbulb;
    case "Current":
      return faLocationDot;
    case "Opening":
      return faDoorOpen;
  }
};
