import {ConfigurationQueryService} from "./ConfigurationQueryService";
import {Configuration, defaultConfiguration} from "@paradicms/models";

export class HardCodedConfigurationQueryService implements ConfigurationQueryService {
  async getConfiguration(): Promise<Configuration> {
    return Promise.resolve(defaultConfiguration);
  }
}
