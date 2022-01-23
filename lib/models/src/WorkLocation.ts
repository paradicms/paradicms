import {Location} from "./Location";
import {WorkLocationRole} from "./WorkLocationRole";

/**
 * Data structure summarizing a location associated with a work.
 */
export interface WorkLocation {
  readonly location: Location;
  readonly role: WorkLocationRole;
  readonly title: string | null;
}
