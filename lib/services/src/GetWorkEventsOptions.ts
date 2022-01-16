import {WorkEventJoinSelector} from "@paradicms/models";

export interface GetWorkEventsOptions {
  readonly limit: number;
  readonly offset: number;
  readonly requireDate?: boolean;
  readonly workEventJoinSelector?: WorkEventJoinSelector;
}
