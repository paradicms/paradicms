import * as React from "react";
import {PrimitiveType, ValueFilter} from "@paradicms/models";
import {Badge} from "reactstrap";

export class ValueFilterBadges<
  T extends PrimitiveType
> extends React.Component<{
  filter: ValueFilter<T>;
}> {
  render() {
    const {filter} = this.props;

    const filterBadges: React.ReactNodeArray = [];

    if (filter.excludeUnknown) {
      filterBadges.push(
        <h5
          className="d-inline-block ml-2"
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
          className="d-inline-block ml-2"
          key={`${filter.label}-excludeValue-${excludeValueI}`}
        >
          <Badge className="p-2" color="warning" pill>
            Exclude&nbsp;
            {filter.label}: {excludeValue}
          </Badge>
        </h5>
      );
    });

    (filter.includeValues ?? []).forEach((includeValue, includeValueI) => {
      filterBadges.push(
        <h5
          className="d-inline-block ml-2"
          key={`${filter.label}-includeValue-${includeValueI}`}
        >
          <Badge className="p-2" color="warning" pill>
            Include&nbsp;
            {filter.label}: {includeValue}
          </Badge>
        </h5>
      );
    });

    return <>{filterBadges}</>;
  }
}
