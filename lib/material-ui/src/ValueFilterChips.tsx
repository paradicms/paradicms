import * as React from "react";
import {useMemo} from "react";
import {Chip} from "@material-ui/core";
import {ValueFacet} from "@paradicms/facets";
import {PrimitiveType, ValueFilter, ValueFilterState} from "@paradicms/filters";

export const ValueFilterChips = <T extends PrimitiveType>(props: {
  className: string;
  facet: ValueFacet<T>;
  filter: ValueFilter<T>;
  onChange: (filter: ValueFilter<T>) => void;
}) => {
  const {className, facet, filter, onChange} = props;
  const filterState = useMemo(
    () =>
      new ValueFilterState({
        filter,
        valueUniverse: facet.values.map(value => value.value),
      }),
    [facet, filter]
  );

  const filterChips: React.ReactNodeArray = [];

  if (filter.excludeKnown) {
    filterChips.push(
      <Chip
        className={className}
        color="secondary"
        key={`${filter.label}-excludeKnown`}
        label={
          <span>
            Exclude&nbsp;
            {filter.label}: Known
          </span>
        }
        onDelete={() => {
          filterState.includeKnown();
          onChange(filterState.snapshot);
        }}
      />
    );
  }

  if (filter.excludeUnknown) {
    filterChips.push(
      <Chip
        className={className}
        color="secondary"
        key={`${filter.label}-excludeUnknown`}
        label={
          <span>
            Exclude&nbsp;
            {filter.label}: Unknown
          </span>
        }
        onDelete={() => {
          filterState.excludeUnknown = !filterState.excludeUnknown;
          onChange(filterState.snapshot);
        }}
      />
    );
  }

  (filter.excludeValues ?? []).forEach((excludeValue, excludeValueI) => {
    filterChips.push(
      <Chip
        className={className}
        color="secondary"
        key={`${filter.label}-excludeValue-${excludeValueI}`}
        label={
          <span>
            Exclude&nbsp;
            {filter.label}: {excludeValue}
          </span>
        }
        onDelete={() => {
          filterState.includeValue(excludeValue);
          onChange(filterState.snapshot);
        }}
      />
    );
  });

  (filter.includeValues ?? []).forEach((includeValue, includeValueI) => {
    filterChips.push(
      <Chip
        className={className}
        color="primary"
        key={`${filter.label}-includeValue-${includeValueI}`}
        label={
          <span>
            Include&nbsp;
            {filter.label}: {includeValue}
          </span>
        }
        onDelete={() => {
          filterState.excludeValue(includeValue);
          onChange(filterState.snapshot);
        }}
      />
    );
  });

  return <>{filterChips}</>;
};
