import {LocationsQuery} from "./LocationsQuery";
import {WorksQuery} from "./WorksQuery";

export interface GetWorkLocationsOptions {
  readonly locationsQuery?: LocationsQuery;
  readonly worksQuery?: WorksQuery;
}
