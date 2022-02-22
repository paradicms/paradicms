import * as React from "react";
import {useCallback, useState} from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import {Filter} from "@paradicms/filters";

export const FiltersControlsAccordion: React.FunctionComponent<{
  filtersControls: readonly {control: React.ReactElement; filter: Filter}[];
}> = ({filtersControls}) => {
  const [openAccordionId, setOpenAccordionId] = useState<string>("");

  const toggleFilterAccordion = useCallback(
    (newOpenAccordionId: string) => {
      if (newOpenAccordionId === openAccordionId) {
        setOpenAccordionId("");
      } else {
        setOpenAccordionId(newOpenAccordionId);
      }
    },
    [openAccordionId]
  );

  const accordionProps: any = {
    flush: true,
    open: openAccordionId,
    toggle: toggleFilterAccordion,
  };

  return (
    <Accordion {...accordionProps}>
      {filtersControls.map(({filter, control}, filterI) => (
        <AccordionItem>
          <AccordionHeader targetId={filterI.toString()}>
            {filter.label}
          </AccordionHeader>
          <AccordionBody accordionId={filterI.toString()}>
            {control}
          </AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
