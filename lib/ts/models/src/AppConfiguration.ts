import {Model} from "./Model";
import {JsonAppConfiguration} from "./json/JsonAppConfiguration";

export interface AppConfiguration extends Model {
  readonly objectsPerPage: number | null;
  readonly stylesheet: string | null;
  toJson(): JsonAppConfiguration;
  readonly title: string | null;
}
