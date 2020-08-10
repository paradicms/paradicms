import * as React from "react";
import * as _ from "lodash";
import {Grid} from "@material-ui/core";
import {StringFacetFilter} from "~/models/search/StringFacetFilter";
import {ObjectFacets} from "~/models/search/ObjectFacets";
import {ObjectFilters} from "~/models/search/ObjectFilters";
import {FacetExpansionPanel} from "~/components/object/FacetExpansionPanel";
import {StringFacetForm} from "~/components/object/StringFacetForm";

export const ObjectFacetsGrid: React.FunctionComponent<{
  facets: ObjectFacets;
  filters: ObjectFilters;
  onChange: (filters: ObjectFilters) => void;
}> = ({facets, filters, onChange}) => {
  // const isFiltersEmpty = (filters: ObjectFilters): boolean => {
  //   for (const key of Object.keys(filters)) {
  //     if (!_.isEmpty(filters[key as keyof ObjectFilters])) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  const onChangeStringFacetFilter = (
    attribute: keyof ObjectFilters,
    newState?: StringFacetFilter
  ) => {
    const newFilters: ObjectFilters = _.cloneDeep(filters);
    newFilters[attribute] = newState;
    onChange(newFilters);
  };

  const panels: {id: keyof ObjectFacets; title: string}[] = [
    {id: "creators", title: "Creator"},
    {id: "culturalContexts", title: "Cultural context"},
    {id: "extents", title: "Extent"},
    {id: "languages", title: "Language"},
    {id: "materials", title: "Material"},
    {id: "media", title: "Medium"},
    {id: "publishers", title: "Publisher"},
    {id: "spatials", title: "Spatial coverage"},
    {id: "subjects", title: "Subject"},
    {id: "techniques", title: "Technique"},
    {id: "temporals", title: "Temporal coverage"},
    {id: "types", title: "Type"},
  ];

  return (
    <Grid container direction="column" spacing={4}>
      {panels.map(({id, title}) => {
        if (facets[id].length === 0) {
          return null;
        }
        return (
          <Grid item key={id}>
            <FacetExpansionPanel id={id} title={title}>
              <StringFacetForm
                valueUniverse={facets[id as keyof ObjectFacets]}
                currentState={
                  filters[id] ? (filters[id] as StringFacetFilter) : undefined
                }
                onChange={newState => onChangeStringFacetFilter(id, newState)}
              />
            </FacetExpansionPanel>
          </Grid>
        );
      })}
    </Grid>
  );
};
