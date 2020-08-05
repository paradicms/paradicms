import * as React from "react";
import {invariant} from "ts-invariant";
import * as _ from "lodash";
import {
  Checkbox,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControlLabel,
  Grid,
  List,
  ListItem,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {StringFacetFilter} from "~/models/search/StringFacetFilter";
import {ObjectFacets} from "~/models/search/ObjectFacets";
import {ObjectQuery} from "~/models/search/ObjectQuery";
import {ObjectFilters} from "~/models/search/ObjectFilters";

const FacetExpansionPanel: React.FunctionComponent<{
  children: React.ReactNode;
  id: string;
  title: string;
}> = ({children, id, title}) => {
  return (
    <Grid item className="facet" data-cy={id + "-facet"}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {title}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
};

const StringFacetPanel: React.FunctionComponent<{
  allValues: readonly string[];
  currentState?: StringFacetFilter;
  id: string;
  onChange: (newState?: StringFacetFilter) => void;
  title: string;
}> = ({allValues, currentState, id, onChange, title}) => {
  if (allValues.length === 0) {
    return null;
  }

  // Build sets of the exclude and include values to avoid repeatedly iterating over the arrays.
  const toSet = (
    values: readonly string[] | null | undefined
  ): {[index: string]: true} => {
    const result: {[index: string]: true} = {};
    for (const value of values ? values : []) {
      result[value] = true;
    }
    return result;
  };
  toSet(allValues); // To check for duplicates
  const excludeSet = toSet(currentState ? currentState.exclude : undefined);
  const includeSet = toSet(currentState ? currentState.include : undefined);

  // If a value is not in one of the sets it's implicitly included.
  for (const value of allValues) {
    if (value in excludeSet) {
      invariant(!(value in includeSet), "value both included and excluded");
    } else if (value in includeSet) {
      continue;
    } else {
      includeSet[value] = true;
    }
  }
  invariant(
    Object.keys(includeSet).length + Object.keys(excludeSet).length ===
      allValues.length,
    "sets should account for all values"
  );

  return (
    <FacetExpansionPanel id={id} title={title}>
      <List>
        {allValues.sort().map(value => {
          const onChangeValue = (
            e: React.ChangeEvent<HTMLInputElement>
          ): void => {
            const newChecked = e.target.checked;
            delete excludeSet[value];
            delete includeSet[value];
            if (newChecked) {
              includeSet[value] = true;
            } else {
              excludeSet[value] = true;
            }

            const exclude = Object.keys(excludeSet).sort();
            const include = Object.keys(includeSet).sort();
            invariant(
              include.length + exclude.length === allValues.length,
              "sets should account for all values"
            );

            if (include.length === allValues.length) {
              onChange(undefined); // Implicitly include all values
            } else if (exclude.length === allValues.length) {
              onChange({exclude}); // Explicitly exclude all values
            } else if (include.length >= exclude.length) {
              invariant(exclude.length > 0, "must explicitly exclude");
              // exclude includes fewer values. Those outside it will be included.
              onChange({exclude});
            } else {
              // include includes fewer values. Those outside it will be excluded.
              invariant(include.length > 0, "must explicitly include");
              onChange({include});
            }
          };

          return (
            <ListItem className="w-100" key={value}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!includeSet[value]}
                    onChange={onChangeValue}
                  />
                }
                label={value}
              />
            </ListItem>
          );
        })}
      </List>
    </FacetExpansionPanel>
  );
};

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
      <StringFacetPanel
        allValues={facets.subjects}
        currentState={
          query.filters && query.filters.subjects
            ? query.filters.subjects
            : undefined
        }
        id="subject"
        onChange={onChangeSubject}
        title={"Subjects"}
      />
      <StringFacetPanel
        allValues={facets.types}
        currentState={
          query.filters && query.filters.types ? query.filters.types : undefined
        }
        id="type"
        onChange={onChangeType}
        title={"Types"}
      />
      <StringFacetPanel
        allValues={facets.culturalContexts}
        currentState={
          query.filters && query.filters.culturalContexts
            ? query.filters.culturalContexts
            : undefined
        }
        id="cultural-context"
        onChange={onChangeCulturalContext}
        title={"Cultural context"}
      />
      <StringFacetPanel
        allValues={facets.materials}
        currentState={
          query.filters && query.filters.materials
            ? query.filters.materials
            : undefined
        }
        id="material"
        onChange={onChangeMaterial}
        title={"Material"}
      />
      <StringFacetPanel
        allValues={facets.spatials}
        currentState={
          query.filters && query.filters.spatials
            ? query.filters.spatials
            : undefined
        }
        id="spatial-coverage"
        onChange={onChangeSpatial}
        title={"Spatial coverage"}
      />
      <StringFacetPanel
        allValues={facets.techniques}
        currentState={
          query.filters && query.filters.techniques
            ? query.filters.techniques
            : undefined
        }
        id="technique"
        onChange={onChangeTechnique}
        title={"Technique"}
      />
      <StringFacetPanel
        allValues={facets.temporals}
        currentState={
          query.filters && query.filters.temporals
            ? query.filters.temporals
            : undefined
        }
        id="temporal-coverage"
        onChange={onChangeTemporal}
        title={"Temporal coverage"}
      />
    </Grid>
  );
};
