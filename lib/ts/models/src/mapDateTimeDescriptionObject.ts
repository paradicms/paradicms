import {Term} from "@rdfjs/types";
import anyDateParser from "any-date-parser";
import {DateTimeDescription} from "./DateTimeDescription";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {OwlTimeDateTimeDescription} from "./owl-time/OwlTimeDateTimeDescription";
import {rdf, time} from "@paradicms/vocabularies";

/**
 * Map a term in a modelSet to a DateTimeDescription.
 */
export const mapDateTimeDescriptionObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): DateTimeDescription | null => {
  switch (term.termType) {
    case "BlankNode":
    case "NamedNode":
      for (const rdfTypeQuad of modelParameters.dataset.match(
        term,
        rdf.type,
        null,
        modelParameters.graph
      )) {
        if (rdfTypeQuad.object.equals(time.DateTimeDescription)) {
          return new OwlTimeDateTimeDescription({
            ...modelParameters,
            identifier: term,
          });
        } else {
          throw new RangeError(
            "unknown DateTimeDescription rdf:type: " + rdfTypeQuad.object.value
          );
        }
      }
      throw new RangeError("DateTimeDescription node has no rdf:type");
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
