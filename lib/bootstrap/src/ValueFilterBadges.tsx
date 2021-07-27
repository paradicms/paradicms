import * as React from "react";
import {ValueFilter} from "@paradicms/models";
import {Badge} from "reactstrap";

export const ValueFilterBadges: React.FunctionComponent<{
  filter: ValueFilter<string>,
}> = ({filter}) => {
  const filterBadges: React.ReactNodeArray = [];
  (filter.excludeValues ?? []).forEach(
    (excludeValue, excludeValueI) => {
      filterBadges.push(
        <h5
          className="d-inline-block ml-2"
          key={`exclude-${excludeValueI}`}
          >
          <Badge className="p-2" color="warning" pill>
              Exclude&nbsp;
              {filter.label}:{" "}{excludeValue}
          </Badge>
        </h5>
      );
    },
  );
  (filter.includeValues ?? []).forEach(
    (includeValue, includeValueI) => {
      filterBadges.push(
        <h5
          className="d-inline-block ml-2"
          key={`include-${includeValueI}`}
          >
          <Badge className="p-2" color="warning" pill>
            Include&nbsp;
            {filter.label}:{" "}
            {includeValue}
          </Badge>
        </h5>
      );
    },
  );
  return <>{filterBadges}</>;
}