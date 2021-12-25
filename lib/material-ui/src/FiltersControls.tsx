import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {createFilterControl, ValueFilterTable} from "@paradicms/react-search";
import {Facet} from "@paradicms/facets";
import {Filter} from "@paradicms/filters";

export const FiltersControls: React.FunctionComponent<{
  facets: readonly Facet[];
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
            createCollectionValueFilterControl(facet, filter) {
              throw new EvalError("not implemented");
            },

            createInstitutionValueFilterControl(facet, filter) {
              throw new EvalError("not implemented");
            },

            createStringPropertyValueFilterControl(facet, filter) {
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
