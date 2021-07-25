import {Filter} from "./Filter";

export interface ObjectsQuery {
  readonly filters: readonly Filter[];
  readonly limit: number;
  readonly offset: number;
  readonly text: string | null;
}
