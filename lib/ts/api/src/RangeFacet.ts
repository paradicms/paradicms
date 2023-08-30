import {Record} from "runtypes";
import {RuntypeBase} from "runtypes/lib/runtype";

/**
 * Range facet consisting of a [start endpoint, end endpoint] interval, where both start and end are required if the facet is specified.
 */
export const RangeFacet = <EndpointT extends RuntypeBase>(
  endpointT: EndpointT
) =>
  Record({
    end: endpointT,
    start: endpointT,
  }).asReadonly();

export interface RangeFacet<EndpointT> {
  readonly end: EndpointT;
  readonly start: EndpointT;
}
