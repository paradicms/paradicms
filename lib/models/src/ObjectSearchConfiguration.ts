import {Filter} from "./Filter";

export interface ObjectSearchConfiguration {
  readonly filters: readonly Filter[];
  readonly searchablePropertyUris: readonly string[];
}
