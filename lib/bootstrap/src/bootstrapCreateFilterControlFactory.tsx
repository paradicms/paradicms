import * as React from "react";
import {ValueFilterControl} from "./ValueFilterControl";
import {CreateFilterControlFactory} from "@paradicms/react-search/dist/CreateFilterControlFactory";

export const bootstrapCreateFilterControlFactory: CreateFilterControlFactory = {
  createCollectionValueFilterControl: (facet, filter, onChangeFilter) => (
    <ValueFilterControl
      facet={facet}
      filter={filter}
      onChange={onChangeFilter}
    />
  ),

  createInstitutionValueFilterControl: (facet, filter, onChangeFilter) => (
    <ValueFilterControl
      facet={facet}
      filter={filter}
      onChange={onChangeFilter}
    />
  ),

  createStringPropertyValueFilterControl: (facet, filter, onChangeFilter) => (
    <ValueFilterControl
      facet={facet}
      filter={filter}
      onChange={onChangeFilter}
    />
  ),
};
