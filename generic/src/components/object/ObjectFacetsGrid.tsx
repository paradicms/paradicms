import * as React from "react";
import * as _ from "lodash";
import {Grid} from "@material-ui/core";
import {StringFacetFilter} from "~/models/search/StringFacetFilter";
import {ObjectFacets} from "~/models/search/ObjectFacets";
import {ObjectQuery} from "~/models/search/ObjectQuery";
import {ObjectFilters} from "~/models/search/ObjectFilters";
import {FacetExpansionPanel} from "~/components/object/FacetExpansionPanel";
import {StringFacetForm} from "~/components/object/StringFacetForm";

export const ObjectFacetsGrid: React.FunctionComponent<{
  facets: ObjectFacets;
  onChange: (query: ObjectQuery) => void;
  query: ObjectQuery;
}> = ({facets, onChange, query}) => {
  const isFiltersEmpty = (filters: ObjectFilters): boolean => {
    return (
      !filters.collectionUris &&
      !filters.institutionUris &&
      !filters.subjects &&
      !filters.types
    );
  };

  const onChangeStringFacetFilter = (
    attribute: keyof ObjectFilters,
    newState?: StringFacetFilter
  ) => {
    const newQuery: ObjectQuery = _.cloneDeep(query);
    if (!newQuery.filters) {
      newQuery.filters = {};
    }
    newQuery.filters[attribute] = newState;
    if (isFiltersEmpty(newQuery.filters)) {
      newQuery.filters = undefined;
    }
    onChange(newQuery);
  };

  const onChangeCulturalContext = (newState?: StringFacetFilter) =>
    onChangeStringFacetFilter("culturalContexts", newState);
  const onChangeMaterial = (newState?: StringFacetFilter) =>
    onChangeStringFacetFilter("materials", newState);
  const onChangeSpatial = (newState?: StringFacetFilter) =>
    onChangeStringFacetFilter("spatials", newState);
  const onChangeSubject = (newState?: StringFacetFilter) =>
    onChangeStringFacetFilter("subjects", newState);
  const onChangeTechnique = (newState?: StringFacetFilter) =>
    onChangeStringFacetFilter("techniques", newState);
  const onChangeTemporal = (newState?: StringFacetFilter) =>
    onChangeStringFacetFilter("temporals", newState);
  const onChangeType = (newState?: StringFacetFilter) =>
    onChangeStringFacetFilter("types", newState);

  return (
    <Grid container direction="column">
      {facets.subjects.length > 0 ? (
        <FacetExpansionPanel id="subject" title="Subjects">
          <StringFacetForm
            valueUniverse={facets.subjects}
            currentState={
              query.filters && query.filters.subjects
                ? query.filters.subjects
                : undefined
            }
            onChange={onChangeSubject}
          />
        </FacetExpansionPanel>
      ) : null}
      {facets.types.length > 0 ? (
        <FacetExpansionPanel id="type" title="Types">
          <StringFacetForm
            valueUniverse={facets.types}
            currentState={
              query.filters && query.filters.types
                ? query.filters.types
                : undefined
            }
            onChange={onChangeType}
          />
        </FacetExpansionPanel>
      ) : null}
      {facets.culturalContexts.length > 0 ? (
        <FacetExpansionPanel id="cultural-context" title="Cultural context">
          <StringFacetForm
            valueUniverse={facets.culturalContexts}
            currentState={
              query.filters && query.filters.culturalContexts
                ? query.filters.culturalContexts
                : undefined
            }
            onChange={onChangeCulturalContext}
          />
        </FacetExpansionPanel>
      ) : null}
      {facets.materials.length > 0 ? (
        <FacetExpansionPanel id="material" title="Material">
          <StringFacetForm
            valueUniverse={facets.materials}
            currentState={
              query.filters && query.filters.materials
                ? query.filters.materials
                : undefined
            }
            onChange={onChangeMaterial}
          />
        </FacetExpansionPanel>
      ) : null}
      {facets.spatials.length > 0 ? (
        <FacetExpansionPanel id="spatial-coverage" title="Spatial coverage">
          <StringFacetForm
            valueUniverse={facets.spatials}
            currentState={
              query.filters && query.filters.spatials
                ? query.filters.spatials
                : undefined
            }
            onChange={onChangeSpatial}
          />
        </FacetExpansionPanel>
      ) : null}
      {facets.techniques.length > 0 ? (
        <FacetExpansionPanel id="technique" title="Technique">
          <StringFacetForm
            valueUniverse={facets.techniques}
            currentState={
              query.filters && query.filters.techniques
                ? query.filters.techniques
                : undefined
            }
            onChange={onChangeTechnique}
          />
        </FacetExpansionPanel>
      ) : null}
      {facets.temporals.length > 0 ? (
        <FacetExpansionPanel id="temporal-coverage" title="Temporal coverage">
          <StringFacetForm
            valueUniverse={facets.temporals}
            currentState={
              query.filters && query.filters.temporals
                ? query.filters.temporals
                : undefined
            }
            onChange={onChangeTemporal}
          />
        </FacetExpansionPanel>
      ) : null}
    </Grid>
  );
};
