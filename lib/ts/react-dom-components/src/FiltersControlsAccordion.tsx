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
  const [openAccordionId, setOpenAccordionId] = useState<string>("0");

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
        <AccordionItem key={filterI}>
          <AccordionHeader targetId={filterI.toString()}>
            <span style={{fontSize: "smaller"}}>{filter.label}</span>
          </AccordionHeader>
          <AccordionBody accordionId={filterI.toString()}>
            {control}
          </AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
