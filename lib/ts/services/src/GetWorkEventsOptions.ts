import {WorkEventJoinSelector} from "@paradicms/models";
import {WorkEventSort} from "./WorkEventSort";

export interface GetWorkEventsOptions {
  readonly limit: number;
  readonly offset: number;
  readonly requireDate?: boolean;
  readonly sort?: WorkEventSort;
  readonly workEventJoinSelector?: WorkEventJoinSelector;
}
