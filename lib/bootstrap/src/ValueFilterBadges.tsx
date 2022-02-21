import * as React from "react";
import {Badge} from "reactstrap";
import {JsonPrimitiveType, ValueFilter} from "@paradicms/filters";
import {ValueFacet} from "@paradicms/facets";

export class ValueFilterBadges<
  T extends JsonPrimitiveType
> extends React.Component<{
  facet?: ValueFacet<T>;
  filter: ValueFilter<T>;
}> {
  render() {
    const {facet, filter} = this.props;

    const filterBadges: React.ReactNodeArray = [];

    if (filter.excludeKnown) {
      filterBadges.push(
        <h5
          className="d-inline-block ms-2"
          key={`${filter.label}-excludeKnown`}
        >
          <Badge className="p-2" color="warning" pill>
            Exclude&nbsp;
            {filter.label}: Known
          </Badge>
        </h5>
      );
    }

    if (filter.excludeUnknown) {
      filterBadges.push(
        <h5
          className="d-inline-block ms-2"
          key={`${filter.label}-excludeUnknown`}
        >
          <Badge className="p-2" color="warning" pill>
            Exclude&nbsp;
            {filter.label}: Unknown
          </Badge>
        </h5>
      );
    }

    (filter.excludeValues ?? []).forEach((excludeValue, excludeValueI) => {
      filterBadges.push(
        <h5
          className="d-inline-block ms-2"
          key={`${filter.label}-excludeValue-${excludeValueI}`}
        >
          <Badge className="p-2" color="warning" pill>
            Exclude&nbsp;
            {filter.label}:&nbsp;
            {facet?.values.find(facetValue => facetValue.value === excludeValue)
              ?.label ?? excludeValue}
          </Badge>
        </h5>
      );
    });

    (filter.includeValues ?? []).forEach((includeValue, includeValueI) => {
      filterBadges.push(
        <h5
          className="d-inline-block ms-2"
          key={`${filter.label}-includeValue-${includeValueI}`}
        >
          <Badge className="p-2" color="warning" pill>
            Include&nbsp;
            {filter.label}:&nbsp;
            {facet?.values.find(facetValue => facetValue.value === includeValue)
              ?.label ?? includeValue}
          </Badge>
        </h5>
      );
    });

    return <>{filterBadges}</>;
  }
}
