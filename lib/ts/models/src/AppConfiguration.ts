import {Model} from "./Model";

export interface AppConfiguration extends Model {
  readonly objectsPerPage: number | null;
  readonly stylesheet: string | null;
  readonly title: string | null;
}
