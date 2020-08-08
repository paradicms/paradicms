import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const FacetExpansionPanel: React.FunctionComponent<React.PropsWithChildren<{
  id: string;
  title: string;
}>> = ({children, id, title}) => {
  return (
    <Grid item className="facet" data-cy={id + "-facet"}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {title}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Grid>
  );
};
