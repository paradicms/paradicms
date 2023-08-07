/**
 * Query over Collection's.
 *
 * Queries are never passed over getStaticProps, but they are serialized to the browser query string,
 * so it's preferable to allow the optional fields to be undefined rather than null.
 */
import {CollectionsFilter} from "./CollectionsFilter";

export interface CollectionsQuery {
  readonly filters: readonly CollectionsFilter[];
}
