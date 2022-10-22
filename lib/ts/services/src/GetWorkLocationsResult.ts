import {WorkLocationSummary} from "./WorkLocationSummary";

export interface GetWorkLocationsResult {
  // The GUI displays all locations on the map together, so we send an abbreviated version of a work.
  readonly workLocations: readonly WorkLocationSummary[];
}
