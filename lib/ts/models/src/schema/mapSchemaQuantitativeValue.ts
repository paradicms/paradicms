import {Term} from "@rdfjs/types";
import {SchemaQuantitativeValue} from "./SchemaQuantitativeValue";
import {ResourceBackedModelParameters} from "../ResourceBackedModelParameters";

export const mapSchemaQuantitativeValue = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): SchemaQuantitativeValue | null => {
  switch (term.termType) {
    case "NamedNode":
      return new SchemaQuantitativeValue({
        ...modelParameters,
        identifier: term,
      });
    default:
      return null;
  }
};
