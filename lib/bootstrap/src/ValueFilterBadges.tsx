import * as React from "react";
import {PrimitiveValue, ValueFilter} from "@paradicms/models";
import {Badge} from "reactstrap";

export class ValueFilterBadges<
  T extends PrimitiveValue
> extends React.Component<{
  filter: ValueFilter<T>;
}> {
  render() {
    const {filter} = this.props;
    const filterBadges: React.ReactNodeArray = [];
    (filter.excludeValues ?? []).forEach((excludeValue, excludeValueI) => {
      filterBadges.push(
        <h5 className="d-inline-block ml-2" key={`exclude-${excludeValueI}`}>
          <Badge className="p-2" color="warning" pill>
            Exclude&nbsp;
            {filter.label}: {excludeValue}
          </Badge>
        </h5>
      );
    });
    (filter.includeValues ?? []).forEach((includeValue, includeValueI) => {
      filterBadges.push(
        <h5 className="d-inline-block ml-2" key={`include-${includeValueI}`}>
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
