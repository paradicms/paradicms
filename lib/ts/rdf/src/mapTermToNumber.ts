import {Term} from "@rdfjs/types";
import {xsd} from "@tpluscode/rdf-ns-builders";

export const mapTermToNumber = (term: Term): number | null => {
  if (term.termType !== "Literal") {
    return null;
  }

  if (
    term.datatype.equals(xsd.float) ||
    term.datatype.equals(xsd.double) ||
    term.datatype.equals(xsd.decimal)
  ) {
    const parsedFloat = parseFloat(term.value);
    if (!isNaN(parsedFloat)) {
      return parsedFloat;
    } else {
      return null;
    }
  } else if (
    term.datatype.equals(xsd.int) ||
    term.datatype.equals(xsd.integer) ||
    term.datatype.equals(xsd.long)
  ) {
    const parsedInt = parseInt(term.value);
    if (!isNaN(parsedInt)) {
      return parsedInt;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
