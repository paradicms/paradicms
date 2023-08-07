/**
 * Query over Work's.
 *
 * Queries are never passed over getStaticProps, but they are serialized to the browser query string,
 * so it's preferable to allow the optional fields to be undefined rather than null.
 */
import {WorksFilter} from "./WorksFilter";

export interface WorksQuery {
  readonly filters: readonly WorksFilter[];
  readonly text?: string;
}
