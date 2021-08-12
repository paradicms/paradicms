import {Filter} from "./Filter";

/**
 * Query passed to the ObjectQueryService.
 *
 * Queries are never passed over getStaticProps, but they are serialized to the browser query string,
 * so it's preferable to allow the optional fields to be undefined rather than null.
 */
export interface ObjectQuery {
  readonly filters: readonly Filter[];
  readonly text?: string;
}
