import {Filter} from "./Filter";

export interface WorkSearchConfiguration {
  readonly filters: readonly Filter[];
  readonly searchablePropertyUris: readonly string[];
}
