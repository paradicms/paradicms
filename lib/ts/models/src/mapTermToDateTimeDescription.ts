import {Term} from "@rdfjs/types";
import anyDateParser from "any-date-parser";
import {DateTimeDescription} from "./DateTimeDescription";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {dateTimeDescriptionFactories} from "./dateTimeDescriptionFactories";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";

import log from "loglevel";

/**
 * Map a term in a modelSet to a DateTimeDescription.
 */
export const mapTermToDateTimeDescription = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): DateTimeDescription | null => {
  switch (term.termType) {
    case "BlankNode":
    case "NamedNode":
      return mapTermToResourceBackedModel({
        factories: dateTimeDescriptionFactories,
        modelParameters,
        term,
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
        log.debug("unable to parse literal date-time: ", term.value);
        return null;
      }
    }
    default:
      return null;
  }
};
