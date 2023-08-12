import {Work, WorkLocation} from "@paradicms/models";
import {WorkLocationSummary} from "./WorkLocationSummary";
import {deleteUndefined} from "@paradicms/utilities";

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
  return deleteUndefined(workLocationSummary);
};
