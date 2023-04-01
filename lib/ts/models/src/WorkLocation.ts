import {Location} from "./Location";
import {WorkLocationRole} from "./WorkLocationRole";

/**
 * Data structure summarizing a location associated with a work.
 */
export interface WorkLocation {
  readonly label: string | null;
  readonly location: Location;
  readonly role: WorkLocationRole;
}
