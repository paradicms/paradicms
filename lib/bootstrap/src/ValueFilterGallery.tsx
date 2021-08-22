import * as React from "react";
import {JoinedValueFacet, PrimitiveType, ValueFilter} from "@paradicms/models";

interface ValueFilterGalleryProps<T extends PrimitiveType> {
  facet: JoinedValueFacet<T>;
  filter: ValueFilter<T>;
  onChange: (newFilter: ValueFilter<T>) => void;
}

export const ValueFilterGallery = <T extends PrimitiveType>(
  props: ValueFilterGalleryProps<T>
) => {
  return <div>Gallery</div>;
};
