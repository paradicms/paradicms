import {ConfigurationQueryService} from "./ConfigurationQueryService";
import {Configuration, defaultConfiguration} from "@paradicms/models";

export class HardCodedConfigurationQueryService
  implements ConfigurationQueryService {
  private readonly configuration: Configuration;

  constructor(configuration?: Configuration) {
    this.configuration = configuration ?? defaultConfiguration;
  }

  async getConfiguration(): Promise<Configuration> {
    return Promise.resolve(this.configuration);
  }
}
