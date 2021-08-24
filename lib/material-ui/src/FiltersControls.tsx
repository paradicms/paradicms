import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@material-ui/core";
import {
  CollectionValueFilter,
  Filter,
  InstitutionValueFilter,
  JoinedCollectionValueFacet,
  JoinedFacet,
  JoinedInstitutionValueFacet,
  JoinedStringPropertyValueFacet,
  StringPropertyValueFilter,
} from "@paradicms/models";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {createFilterControl, ValueFilterTable} from "@paradicms/react-search";

export const FiltersControls: React.FunctionComponent<{
  facets: readonly JoinedFacet[];
  filters: readonly Filter[];
  onChange: (filters: readonly Filter[]) => void;
}> = ({facets, filters, onChange}) => {
  return (
    <Grid container direction="column" spacing={2}>
      {filters.map((filter, filterI) => {
        const onChangeFilter = (newFilter: Filter) => {
          const filtersCopy = filters.concat();
          filtersCopy[filterI] = newFilter;
          onChange(filtersCopy);
        };

        return createFilterControl({
          facets,
          factory: {
            createCollectionValueFilterControl(
              facet: JoinedCollectionValueFacet,
              filter: CollectionValueFilter
            ): React.ReactNode {
              throw new EvalError("not implemented");
            },

            createInstitutionValueFilterControl(
              facet: JoinedInstitutionValueFacet,
              filter: InstitutionValueFilter
            ): React.ReactNode {
              throw new EvalError("not implemented");
            },

            createStringPropertyValueFilterControl(
              facet: JoinedStringPropertyValueFacet,
              filter: StringPropertyValueFilter
            ): React.ReactNode {
              return (
                <Grid
                  className="facet"
                  // data-cy={propertyFacet.definition.uri + "-facet"}
                  item
                  key={filterI}
                >
                  <Accordion TransitionProps={{unmountOnExit: true}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      {filter.label}
                    </AccordionSummary>
                    <AccordionDetails>
                      <ValueFilterTable
                        facet={facet}
                        filter={filter}
                        onChange={onChangeFilter}
                      />
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              );
            },
          },
          filter,
        });
      })}
    </Grid>
  );
};
