import {Filter} from "~/models/Filter";

export interface FreetextFilter extends Filter {
  // Immutable properties derived from the Configuration
  // Unique identifiers of the properties this filter applies to. These can be IRIs or any other unique identifier.
  readonly label: string;
  readonly propertyIds: readonly string[];
  readonly type: "freetext";

  // Mutable state of the filter, may be set to an empty string initially
  value: string;
}
