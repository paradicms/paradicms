export interface GetModelKeysOptions<QueryT, SortT> {
  readonly limit?: number;
  readonly offset?: number;
  readonly query?: QueryT;
  readonly sort?: SortT;
}
