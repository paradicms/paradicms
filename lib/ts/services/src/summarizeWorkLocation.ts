import {Work, WorkLocation} from "@paradicms/models";
import {WorkLocationSummary} from "./WorkLocationSummary";

export const summarizeWorkLocation = (
  work: Work,
  workLocation: WorkLocation
): WorkLocationSummary => ({
  label: workLocation.label,
  location: {
    latitude: workLocation.location.latitude,
    longitude: workLocation.location.longitude,
  },
  role: workLocation.role,
  work: {
    key: work.key,
    label: work.label,
  },
});
