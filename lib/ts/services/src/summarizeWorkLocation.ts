import {Work, WorkLocation} from "@paradicms/models";
import {WorkLocationSummary} from "./WorkLocationSummary";

export const summarizeWorkLocation = (
  work: Work,
  workLocation: WorkLocation
): WorkLocationSummary => ({
  label: workLocation.label,
  location: {
    lat: workLocation.location.lat,
    long: workLocation.location.long,
  },
  role: workLocation.role,
  work: {
    label: work.label,
    iri: work.iri,
  },
});
