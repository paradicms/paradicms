import {WorkEventJoinSelector} from "@paradicms/models";
import {WorkEventsSort} from "./WorkEventsSort";

export interface GetWorkEventsOptions {
  readonly limit: number;
  readonly offset: number;
  readonly requireDate?: boolean;
  readonly sort?: WorkEventsSort;
  readonly workEventJoinSelector?: WorkEventJoinSelector;
}
