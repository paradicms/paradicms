import {Filter} from "~/models/Filter";

export interface Query {
  filters: Filter[];
  limit: number;
  offset: number;
}
