import {Filter} from "./Filter";

export interface ObjectQuery {
  readonly filters: readonly Filter[];
  readonly text: string | null;
}
