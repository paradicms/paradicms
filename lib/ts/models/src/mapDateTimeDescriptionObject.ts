import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {DateTimeDescription} from "./DateTimeDescription";
import anyDateParser from "any-date-parser";
import {CmsDateTimeDescription} from "CmsDateTimeDescription";

/**
 * Map a term in a modelSet to a PartialDateTime.
 */
export const mapDateTimeDescriptionObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "node">,
  term: Term
): DateTimeDescription | null => {
  switch (term.termType) {
    case "BlankNode":
    case "NamedNode":
      return new CmsDateTimeDescription({
        ...modelParameters,
        node: term,
      });
    case "Literal": {
      const parsed = anyDateParser.attempt(term.value);
      const partialDateTime = {
        day: parsed.day ?? null,
        hour: parsed.hour ?? null,
        minute: parsed.minute ?? null,
        month: parsed.month ?? null,
        second: parsed.second ?? null,
        year: parsed.year ?? null,
      };
      if (
        (partialDateTime.day !== null ||
          partialDateTime.hour !== null ||
          partialDateTime.minute !== null ||
          partialDateTime.month !== null,
        partialDateTime.second !== null || partialDateTime.year !== null)
      ) {
        return partialDateTime;
      } else {
        return null;
      }
    }
    default:
      return null;
  }
};
