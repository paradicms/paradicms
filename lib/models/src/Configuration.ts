import {WorkSearchConfiguration} from "./WorkSearchConfiguration";

export interface Configuration {
  readonly bootstrapStylesheetHref: string | null;
  readonly documentTitle: string | null;
  readonly navbarTitle: string | null;
  readonly workSearch: WorkSearchConfiguration;
}
