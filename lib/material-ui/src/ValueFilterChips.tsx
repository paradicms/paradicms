import * as React from "react";
import {
  PrimitiveValue,
  ValueFacet,
  ValueFilter,
  ValueFilterState,
} from "@paradicms/models";
import {Chip} from "@material-ui/core";

export class ValueFilterChips<
  T extends PrimitiveValue
> extends React.Component<{
  className: string;
  facet: ValueFacet<T>;
  filter: ValueFilter<T>;
  onChange: (filter: ValueFilter<T>) => void;
}> {
  render() {
    const {className, facet, filter, onChange} = this.props;
    const filterState = new ValueFilterState({
      filter,
      valueUniverse: facet.values.map(value => value.value),
    });

    const filterChips: React.ReactNodeArray = [];
    (filter.excludeValues ?? []).forEach((excludeValue, excludeValueI) => {
      filterChips.push(
        <Chip
          className={className}
          color="secondary"
          key={`exclude-${excludeValueI}`}
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
          key={`include-${includeValueI}`}
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
  }
}
