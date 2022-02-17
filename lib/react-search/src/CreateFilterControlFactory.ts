import {
  CollectionValueFacet,
  InstitutionValueFacet,
  StringPropertyValueFacet,
} from "@paradicms/facets";
import {
  CollectionValueFilter,
  Filter,
  InstitutionValueFilter,
  StringPropertyValueFilter,
} from "@paradicms/filters";
import React from "react";

export interface CreateFilterControlFactory {
  createCollectionValueFilterControl(
    facet: CollectionValueFacet,
    filter: CollectionValueFilter,
    onChangeFilter: (newFilter: Filter) => void
  ): React.ReactElement | null;

  createInstitutionValueFilterControl(
    facet: InstitutionValueFacet,
    filter: InstitutionValueFilter,
    onChangeFilter: (newFilter: Filter) => void
  ): React.ReactElement | null;

  createStringPropertyValueFilterControl(
    facet: StringPropertyValueFacet,
    filter: StringPropertyValueFilter,
    onChangeFilter: (newFilter: Filter) => void
  ): React.ReactElement | null;
}
