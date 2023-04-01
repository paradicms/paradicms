import {Work, WorkLocation} from "@paradicms/models";
import {WorkLocationSummary} from "./WorkLocationSummary";

export const summarizeWorkLocation = (
  work: Work,
  workLocation: WorkLocation
): WorkLocationSummary => ({
  location: {
    lat: workLocation.location.lat,
    long: workLocation.location.long,
  },
  role: workLocation.role,
  title: workLocation.title,
  work: {
    title: work.title,
    uri: work.uri,
  },
});
