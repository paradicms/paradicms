import {Configuration} from "@paradicms/models";

export interface ConfigurationQueryService {
  getConfiguration(): Promise<Configuration>;
}
