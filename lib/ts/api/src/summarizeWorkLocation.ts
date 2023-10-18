import {Work, WorkLocation} from "@paradicms/models";
import {deleteUndefined} from "@paradicms/utilities";
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
      iri: work.iri.value,
      label: work.label,
    },
  };
  return deleteUndefined(workLocationSummary);
};
