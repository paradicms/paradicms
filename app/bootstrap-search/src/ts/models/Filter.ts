import {FilterType} from "~/models/FilterType";

export interface Filter {
  // Immutable properties derived from the Configuration
  // Unique identifier for this filter among other filters. It can be an IRI or any other string, as long as it's unique.
  readonly id: string;
  readonly type: FilterType;
}
