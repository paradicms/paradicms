import {
  AppConfiguration,
  PropertyConfiguration,
} from "@paradicms/configuration";

export interface SearchAppConfiguration extends AppConfiguration {
  readonly objectsPerPage?: number;
  readonly workProperties: readonly PropertyConfiguration[];
}
