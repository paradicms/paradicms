import {PropertyConfiguration} from "./PropertyConfiguration";
import {SearchConfiguration} from "./SearchConfiguration";

export interface AppConfiguration {
  readonly bootstrapStylesheetHref?: string;
  readonly documentTitle?: string;
  readonly navbarTitle?: string;
  readonly workProperties?: readonly PropertyConfiguration[];
  readonly search?: SearchConfiguration;
}
