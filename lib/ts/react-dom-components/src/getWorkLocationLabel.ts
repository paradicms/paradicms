import {WorkLocationSummary} from "@paradicms/api";

export const getWorkLocationLabel = (
  workLocation: WorkLocationSummary
): string => {
  if (workLocation.label) {
    return workLocation.label;
  }

  const labelParts: string[] = [];
  labelParts.push(workLocation.work.label);
  switch (workLocation.role) {
    case "Creation":
      labelParts.push("created");
      break;
    case "Current":
      labelParts.push("currently");
      break;
    case "Modification":
      labelParts.push("modified");
      break;
  }
  labelParts.push("@");
  if (workLocation.location.label) {
    labelParts.push(workLocation.location.label);
  }
  return labelParts.join(" ");
};
