import {Filter} from "./Filter";

export interface ObjectsQuery {
  readonly filters: readonly Filter[];
  readonly text: string | null;
}
