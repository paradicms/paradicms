import {Work, WorkLocation} from "@paradicms/models";
import {WorkLocationSummary} from "./WorkLocationSummary";

export const summarizeWorkLocation = (
  work: Work,
  workLocation: WorkLocation
): WorkLocationSummary => ({
  label: workLocation.label,
  location: {
    centroid: workLocation.location.centroid,
    label: workLocation.location.label,
  },
  role: workLocation.role,
  work: {
    key: work.key,
    label: work.label,
  },
});
