export interface GetWorkEventsOptions {
  readonly limit: number;
  readonly offset: number;
  readonly requireDate?: boolean;
  readonly requireLocation?: boolean;
}
