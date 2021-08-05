import {Configuration} from "~/models/Configuration";

export interface ConfigurationQueryService {
  getConfiguration(): Promise<Configuration>;
}
