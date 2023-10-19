import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "../ResourceBackedModelParameters";
import {SchemaQuantitativeValue} from "./SchemaQuantitativeValue";

export const mapSchemaQuantitativeValue = (
  modelParameters: Omit<ResourceBackedModelParameters, "iri">,
  term: Term
): SchemaQuantitativeValue | null => {
  switch (term.termType) {
    case "NamedNode":
      return new SchemaQuantitativeValue({
        ...modelParameters,
        iri: term,
      });
    default:
      return null;
  }
};
