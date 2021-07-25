import {Facet} from "./Facet";
import {Filter} from "./Filter";

export interface Configuration {
  readonly bootstrapStylesheetHref: string | null;
  readonly documentTitle: string | null;
  readonly navbarTitle: string | null;
  readonly objectFacets: readonly Facet[];
  readonly objectFilters: readonly Filter[];
  readonly objectFullTextSearchablePropertyUris: readonly string[];
}
