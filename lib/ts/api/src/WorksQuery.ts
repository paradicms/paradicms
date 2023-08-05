/**
 * Query over Work's.
 *
 * Queries are never passed over getStaticProps, but they are serialized to the browser query string,
 * so it's preferable to allow the optional fields to be undefined rather than null.
 */
import {FilterUnion} from "./FilterUnion";

export interface WorksQuery {
  readonly filters: readonly FilterUnion[];
  readonly text?: string;
}
