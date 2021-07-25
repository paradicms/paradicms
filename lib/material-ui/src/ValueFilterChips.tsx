import * as React from "react";
import {ValueFacet, ValueFilter, ValueFilterState} from "@paradicms/models";
import {Chip} from "@material-ui/core";

export const ValueFilterChips: React.FunctionComponent<{
  className: string;
  facet: ValueFacet<string>
  filter: ValueFilter<string>,
  onChange: (filter: ValueFilter<string>) => void
}> = ({className, facet, filter, onChange}) => {
  const filterState = new ValueFilterState({
    filter,
    valueUniverse: facet.values.map(value => value.value),
  });

  const filterChips: React.ReactNodeArray = [];
  (filter.excludeValues ?? []).forEach(
    (excludeValue, excludeValueI) => {
      filterChips.push(
        <Chip
          className={className}
          color="secondary"
          key={`exclude-${excludeValueI}`}
          label={
            <span>
              Exclude&nbsp;
              {filter.label}:{" "}{excludeValue}
            </span>
          }
          onDelete={() => {
            filterState.includeValue(excludeValue);
            onChange(filterState.snapshot);
          }}
        />,
      );
    },
  );
  (filter.includeValues ?? []).forEach(
    (includeValue, includeValueI) => {
      filterChips.push(
        <Chip
          className={className}
          color="primary"
          key={`include-${includeValueI}`}
          label={
            <span>
              Include&nbsp;
              {filter.label}:{" "}
              {includeValue}
            </span>
          }
          onDelete={() => {
            filterState.excludeValue(includeValue);
            onChange(filterState.snapshot);
          }}
        />,
      );
    },
  );
  return <>{filterChips}</>;
}