import * as React from "react";
import {Badge} from "reactstrap";
import {JsonPrimitiveType, ValueFilter} from "@paradicms/filters";
import {ValueFacet} from "@paradicms/facets";

interface ValueFilterBadgesProps<T extends JsonPrimitiveType> {
  facet?: ValueFacet<T>;
  filter: ValueFilter<T>;
  onChange: (newFilter: ValueFilter<T>) => void;
}

export const ValueFilterBadges = <T extends JsonPrimitiveType>(
  props: ValueFilterBadgesProps<T>
) => {
  const {facet, filter, onChange} = props;

  const filterBadges: React.ReactElement[] = [];

  if (filter.excludeKnown) {
    filterBadges.push(
      <h5 className="d-inline-block ms-2" key={`${filter.label}-excludeKnown`}>
        <Badge className="p-2" color="warning" pill>
          Exclude&nbsp;
          {filter.label}: Known&nbsp;
          <button
            type="button"
            className="btn-close"
            onClick={e => {
              e.stopPropagation();
              const {excludeKnown, ...otherFilterProps} = filter;
              onChange(otherFilterProps);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
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
          {filter.label}: Unknown&nbsp;
          <button
            type="button"
            className="btn-close"
            onClick={e => {
              e.stopPropagation();
              const {excludeUnknown, ...otherFilterProps} = filter;
              onChange(otherFilterProps);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
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
          &nbsp;
          <button
            type="button"
            className="btn-close"
            onClick={e => {
              e.stopPropagation();
              const newExcludeValues = filter.excludeValues!.concat();
              newExcludeValues.splice(excludeValueI, 1);
              onChange({
                ...filter,
                excludeValues:
                  newExcludeValues.length > 0 ? newExcludeValues : undefined,
              });
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
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
          &nbsp;
          <button
            type="button"
            className="btn-close"
            onClick={e => {
              e.stopPropagation();
              const newIncludeValues = filter.includeValues!.concat();
              newIncludeValues.splice(includeValueI, 1);
              onChange({
                ...filter,
                includeValues:
                  newIncludeValues.length > 0 ? newIncludeValues : undefined,
              });
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Badge>
      </h5>
    );
  });

  return <>{filterBadges}</>;
};
