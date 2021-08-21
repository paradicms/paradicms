import * as React from "react";
import {PrimitiveType, ValueFacet, ValueFilter} from "@paradicms/models";
import {ValueFilterTable} from "@paradicms/react-data-table";

interface ValueFilterControlProps<T extends PrimitiveType> {
  facet: ValueFacet<T>;
  filter: ValueFilter<T>;
  onChange: (newFilter: ValueFilter<T>) => void;
}

export const ValueFilterControl = <T extends PrimitiveType>(
  props: ValueFilterControlProps<T>
) => {
  const {facet, filter, onChange} = props;
  return <ValueFilterTable facet={facet} filter={filter} onChange={onChange} />;
};
