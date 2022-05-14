import {
  AppConfiguration,
  PropertyConfiguration,
  SearchConfiguration,
} from "@paradicms/configuration";

export interface BootstrapCollectionAppConfiguration extends AppConfiguration {
  readonly search: SearchConfiguration;
  readonly workProperties: readonly PropertyConfiguration[];
}
