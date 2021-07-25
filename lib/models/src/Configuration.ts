import {Facet} from "./Facet";

export interface Configuration {
  readonly bootstrapStylesheetHref: string | null;
  readonly documentTitle: string | null;
  readonly navbarTitle: string | null;
  readonly objectFacets: readonly Facet[];
  
}
