import * as React from "react";
import {Badge} from "reactstrap";
import {JsonPrimitiveType, ValueFacet, ValueFilter} from "@paradicms/services";

interface ValueFilterBadgesProps<T extends JsonPrimitiveType> {
  facet?: ValueFacet<T>;
  filter: ValueFilter<T>;
  onChange: (newFilter: ValueFilter<T>) => void;
}

const ValueFilterBadge: React.FunctionComponent<React.PropsWithChildren<{
  onClick: () => void;
}>> = ({children, onClick}) => (
  <h5 className="d-inline-block mb-0 ms-2">
    <Badge
      className="d-inline-flex align-items-center justify-content-start px-2 py-1"
      color="secondary"
      pill
    >
      {children}
      <button
        type="button"
        className="btn-close btn-sm"
        onClick={e => {
          e.stopPropagation();
          onClick();
        }}
      ></button>
    </Badge>
  </h5>
);

export const ValueFilterBadges = <T extends JsonPrimitiveType>(
  props: ValueFilterBadgesProps<T>
) => {
  const {facet, filter, onChange} = props;

  const filterBadges: React.ReactElement[] = [];

  if (filter.excludeKnown) {
    filterBadges.push(
      <ValueFilterBadge
        key={`${filter.label}-excludeKnown`}
        onClick={() => {
          const {excludeKnown, ...otherFilterProps} = filter;
          onChange(otherFilterProps);
        }}
      >
        Exclude&nbsp;{filter.label}: Known&nbsp;
      </ValueFilterBadge>
    );
  }

  if (filter.excludeUnknown) {
    filterBadges.push(
      <ValueFilterBadge
        key={`${filter.label}-excludeUnknown`}
        onClick={() => {
          const {excludeUnknown, ...otherFilterProps} = filter;
          onChange(otherFilterProps);
        }}
      >
        Exclude&nbsp;{filter.label}: Unknown&nbsp;
      </ValueFilterBadge>
    );
  }

  (filter.excludeValues ?? []).forEach((excludeValue, excludeValueI) => {
    filterBadges.push(
      <ValueFilterBadge
        key={`${filter.label}-excludeValue-${excludeValueI}`}
        onClick={() => {
          const newExcludeValues = filter.excludeValues!.concat();
          newExcludeValues.splice(excludeValueI, 1);
          onChange({
            ...filter,
            excludeValues:
              newExcludeValues.length > 0 ? newExcludeValues : undefined,
          });
        }}
      >
        Exclude&nbsp;
        {filter.label}:&nbsp;
        {facet?.values.find(facetValue => facetValue.value === excludeValue)
          ?.label ?? excludeValue}
        &nbsp;
      </ValueFilterBadge>
    );
  });

  (filter.includeValues ?? []).forEach((includeValue, includeValueI) => {
    filterBadges.push(
      <ValueFilterBadge
        onClick={() => {
          const newIncludeValues = filter.includeValues!.concat();
          newIncludeValues.splice(includeValueI, 1);
          onChange({
            ...filter,
            includeValues:
              newIncludeValues.length > 0 ? newIncludeValues : undefined,
          });
        }}
      >
        Include&nbsp;
        {filter.label}:&nbsp;
        {facet?.values.find(facetValue => facetValue.value === includeValue)
          ?.label ?? includeValue}
        &nbsp;
      </ValueFilterBadge>
    );
  });

  return <>{filterBadges}</>;
};
