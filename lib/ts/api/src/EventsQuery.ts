/**
 * Query over Events's.
 *
 * Queries are never passed over getStaticProps, but they are serialized to the browser query string,
 * so it's preferable to allow the optional fields to be undefined rather than null.
 */
import {EventsFilter} from "./EventsFilter";

export interface EventsQuery {
  readonly filters?: readonly EventsFilter[];
}
