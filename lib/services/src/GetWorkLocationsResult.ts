import {WorkLocationRole} from "@paradicms/models";

export interface GetWorkLocationsResult {
  // The GUI displays all locations on the map together, so we send an abbreviated version of a work.
  readonly workLocations: readonly {
    readonly location: {
      readonly lat: number;
      readonly long: number;
    };
    readonly role: WorkLocationRole;
    readonly work: {
      readonly title: string;
      readonly uri: string;
    };
  }[];
}
