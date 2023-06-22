import {Term} from "@rdfjs/types";
import {xsd} from "@tpluscode/rdf-ns-builders";

export const mapTermToBoolean = (term: Term): boolean | null => {
  if (term.termType !== "Literal") {
    return null;
  }
  if (!term.datatype || term.datatype.value !== xsd.boolean.value) {
    return null;
  }
  return term.value === "true" || term.value === "1";
};
