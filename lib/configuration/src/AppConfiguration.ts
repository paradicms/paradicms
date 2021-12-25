import {WorkSearchConfiguration} from "./WorkSearchConfiguration";

export interface AppConfiguration {
  // Configuration is passed over getStaticProps, so must use nulls instead of undefined
  readonly bootstrapStylesheetHref: string | null;
  readonly documentTitle: string | null;
  readonly navbarTitle: string | null;
  readonly workSearch: WorkSearchConfiguration;
}
