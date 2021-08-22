import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@material-ui/core";
import {
  Facet,
  Filter,
  StringPropertyValueFacet,
  StringPropertyValueFilter,
} from "@paradicms/models";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {ValueFilterTable} from "@paradicms/react-search";

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

        switch (filter.type) {
          case "StringPropertyValue": {
            const concreteFilter: StringPropertyValueFilter = filter as StringPropertyValueFilter;
            const facet: StringPropertyValueFacet | undefined = facets.find(
              facet =>
                facet.type === "StringPropertyValue" &&
                (facet as StringPropertyValueFacet).propertyUri ===
                  concreteFilter.propertyUri
            ) as StringPropertyValueFacet | undefined;
            if (!facet) {
              return;
            }
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
                      filter={concreteFilter}
                      onChange={onChangeFilter}
                    />
                  </AccordionDetails>
                </Accordion>
              </Grid>
            );
          }
        }
      })}
    </Grid>
  );
};
