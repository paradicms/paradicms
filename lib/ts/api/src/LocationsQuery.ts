/**
 * Query over Location's.
 *
 * Queries are never passed over getStaticProps, but they are serialized to the browser query string,
 * so it's preferable to allow the optional fields to be undefined rather than null.
 */
import {LocationsFilter} from "./LocationsFilter";

export interface LocationsQuery {
  readonly filters: readonly LocationsFilter[];
}
