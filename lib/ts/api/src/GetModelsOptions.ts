export interface GetModelsOptions<JoinSelectorT, QueryT, SortT> {
  readonly joinSelector?: JoinSelectorT;
  readonly limit?: number;
  readonly offset?: number;
  readonly query?: QueryT;
  readonly sort?: SortT;
}
