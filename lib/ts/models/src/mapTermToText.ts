import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Text} from "./Text";
import {LiteralText} from "./literal/LiteralText";
import {SchemaTextObject} from "./schema/SchemaTextObject";

/**
 * Map a term in a modelSet to a Text.
 */
export const mapTermToText = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Text | null => {
  switch (term.termType) {
    case "NamedNode":
      return new SchemaTextObject({
        ...modelParameters,
        identifier: term,
      });
    case "Literal":
      return new LiteralText({literal: term});
    default:
      return null;
  }
};
