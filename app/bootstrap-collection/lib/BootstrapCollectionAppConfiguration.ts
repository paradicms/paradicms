import {AppConfiguration, SearchConfiguration} from "@paradicms/configuration";
import {PropertyConfiguration} from "@paradicms/configuration/dist/PropertyConfiguration";

export interface BootstrapCollectionAppConfiguration extends AppConfiguration {
  readonly search: SearchConfiguration;
  readonly workProperties: readonly PropertyConfiguration[];
}
