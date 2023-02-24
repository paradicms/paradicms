import {
  AppConfiguration,
  PropertyConfiguration,
} from "@paradicms/configuration";

export interface WorkSearchAppConfiguration extends AppConfiguration {
  readonly objectsPerPage?: number;
  readonly siteTitle?: string;
  readonly workProperties: readonly PropertyConfiguration[];
}
