import {Optional, Record} from "runtypes";
import {RuntypeBase} from "runtypes/lib/runtype";

/**
 * Range filter consisting of a [start endpoint, end endpoint] interval,
 * where start or end can be omitted to leave that part of the range open.
 */
export const RangeFilter = <EndpointT extends RuntypeBase>(
  endpointT: EndpointT
) =>
  Record({
    end: Optional(endpointT),
    start: Optional(endpointT),
  }).asReadonly();

export interface RangeFilter<EndpointT> {
  readonly end?: EndpointT;
  readonly start?: EndpointT;
}
