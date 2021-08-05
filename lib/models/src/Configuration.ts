import {ObjectQueryConfiguration} from "ObjectQueryConfiguration";

export interface Configuration {
  readonly bootstrapStylesheetHref: string | null;
  readonly documentTitle: string | null;
  readonly navbarTitle: string | null;
  readonly objectSearch: ObjectQueryConfiguration;
}
