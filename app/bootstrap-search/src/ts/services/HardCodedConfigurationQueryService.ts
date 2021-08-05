import {ConfigurationQueryService} from "~/services/ConfigurationQueryService";
import {Configuration} from "~/models/Configuration";
import {FreetextFilter} from "~/models/FreetextFilter";
import {DCTERMS} from "@paradicms/rdf";

export const titleFreetextFilter: FreetextFilter = {
  id: "titlefreetext",
  label: "Search titles",
  propertyIds: [DCTERMS.title.value],
  type: "freetext",
  value: "",
};

export const hardCodedConfiguration: Configuration = {
  filters: [titleFreetextFilter],
};

export class HardCodedConfigurationQueryService
  implements ConfigurationQueryService
{
  async getConfiguration(): Promise<Configuration> {
    return Promise.resolve(hardCodedConfiguration);
  }
}
