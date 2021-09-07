import {Filter} from "./Filter";
import {ThumbnailSelector} from "./ThumbnailSelector";

/**
 * Query passed to the WorkQueryService.
 *
 * Queries are never passed over getStaticProps, but they are serialized to the browser query string,
 * so it's preferable to allow the optional fields to be undefined rather than null.
 */
export interface WorkQuery {
  readonly filters: readonly Filter[];
  readonly text?: string;
  readonly valueFacetValueThumbnailSelector?: ThumbnailSelector;
}
