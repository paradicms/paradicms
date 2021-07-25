import * as React from "react";
import {ValueFacet, ValueFilter, ValueFilterState} from "@paradicms/models";
import {Chip} from "@material-ui/core";

export const ValueFilterChips: React.FunctionComponent<{
  className: string;
  facet: ValueFacet<string>
  filter: ValueFilter<string>,
  labelPrefix: string;
  onChange: (filter: ValueFilter<string> | null) => void
}> = ({className, facet, filter, labelPrefix, onChange}) => {
  const filterState = new ValueFilterState({
    filter: filter,
    valueUniverse: facet.values.map(value => value.value),
  });

  const filterChips: React.ReactNodeArray = [];
  (filter.excludeValues ?? []).forEach(
    (excludePropertyValue, excludePropertyValueI) => {
      filterChips.push(
        <Chip
          className={className}
          color="secondary"
          key={`exclude-${excludePropertyValueI}`}
          label={
            <span>
              Exclude&nbsp;
              {labelPrefix}:{" "}{excludePropertyValue}
            </span>
          }
          onDelete={() => {
            filterState.includeValue(excludePropertyValue);
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
              {labelPrefix}:{" "}
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