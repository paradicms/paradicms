import {Term} from "@rdfjs/types";
import anyDateParser from "any-date-parser";
import {DateTimeDescription} from "./DateTimeDescription";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {rdf} from "@paradicms/vocabularies";
import {dateTimeDescriptionFactories} from "./dateTimeDescriptionFactories";

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
      for (const rdfTypeQuad of modelParameters.dataset.match(
        term,
        rdf.type,
        null,
        modelParameters.graph
      )) {
        if (rdfTypeQuad.object.termType !== "NamedNode") {
          continue;
        }
        const dateTimeDescriptionFactory = dateTimeDescriptionFactories.get(
          rdfTypeQuad.object
        );
        if (dateTimeDescriptionFactory) {
          return new dateTimeDescriptionFactory({
            ...modelParameters,
            identifier: term,
          });
        }
      }
      throw new RangeError(
        "unable to determine DateTimeDescription type from blank/named node"
      );
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
