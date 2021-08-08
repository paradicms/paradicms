import {Facet} from "./Facet";
import {Filter} from "./Filter";

export interface ObjectSearchConfiguration {
  readonly facets: readonly Facet[];
  readonly filters: readonly Filter[];
  readonly fullTextSearchablePropertyUris: readonly string[];
}
