import {Work, WorkLocation} from "@paradicms/models";
import {WorkLocationSummary} from "./WorkLocationSummary";

export const summarizeWorkLocation = (
  work: Work,
  workLocation: WorkLocation
): WorkLocationSummary => {
  const workLocationSummary: WorkLocationSummary = {
    label: workLocation.label ?? undefined,
    location: {
      centroid: workLocation.location.centroid ?? undefined,
      label: workLocation.location.label ?? undefined,
    },
    role: workLocation.role,
    work: {
      key: work.key,
      label: work.label,
    },
  };
  return JSON.parse(JSON.stringify(workLocationSummary)); // Remove the undefined's
};
