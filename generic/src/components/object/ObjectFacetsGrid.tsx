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
    for (const key of Object.keys(filters)) {
      if (!_.isEmpty(filters[key as keyof ObjectFilters])) {
        return false;
      }
    }
    return true;
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
            onChange={newState =>
              onChangeStringFacetFilter("subjects", newState)
            }
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
            onChange={newState => onChangeStringFacetFilter("types", newState)}
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
            onChange={newState =>
              onChangeStringFacetFilter("culturalContexts", newState)
            }
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
            onChange={newState =>
              onChangeStringFacetFilter("materials", newState)
            }
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
            onChange={newState =>
              onChangeStringFacetFilter("spatials", newState)
            }
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
            onChange={newState =>
              onChangeStringFacetFilter("techniques", newState)
            }
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
            onChange={newState =>
              onChangeStringFacetFilter("temporals", newState)
            }
          />
        </FacetExpansionPanel>
      ) : null}
    </Grid>
  );
};
