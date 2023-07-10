import {Term} from "@rdfjs/types";
import anyDateParser from "any-date-parser";
import {DateTimeDescription} from "./DateTimeDescription";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {dateTimeDescriptionFactories} from "./dateTimeDescriptionFactories";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";
import log from "loglevel";

const yearMonthDayFormat = require("any-date-parser/src/formats/yearMonthDay/yearMonthDay");

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
      log.debug("parsed", JSON.stringify(parsed), "from", "term.value");
      anyDateParser.removeFormat(yearMonthDayFormat); // Parses "1925" as "2019-2-5";
      if (!parsed.invalid) {
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
          return {
            displayString: term.value,
            ...partialDateTime,
          };
        }
      } else {
        log.debug(
          "unable to parse literal date-time",
          term.value,
          ":",
          parsed.invalid
        );
        return {
          day: null,
          displayString: term.value,
          hour: null,
          minute: null,
          month: null,
          second: null,
          year: null,
        };
      }
    }
    default:
      return null;
  }
};
