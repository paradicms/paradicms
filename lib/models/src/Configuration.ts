import {ObjectSearchConfiguration} from "./ObjectSearchConfiguration";

export interface Configuration {
  readonly bootstrapStylesheetHref: string | null;
  readonly documentTitle: string | null;
  readonly navbarTitle: string | null;
  readonly objectSearch: ObjectSearchConfiguration;
}
