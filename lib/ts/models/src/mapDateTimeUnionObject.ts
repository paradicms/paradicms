import {Term} from "@rdfjs/types";
import {ModelParameters} from "./ModelParameters";
import {DateTimeUnion} from "./DateTimeUnion";
import {DateTimeDescription} from "./DateTimeDescription";
import {xsd} from "@paradicms/vocabularies";
import dayjs from "dayjs";

/**
 * Map a term in a modelSet to a DateTimeUnion.
 */
export const mapDateTimeUnionObject = (
  modelParameters: Omit<ModelParameters, "node">,
  term: Term
): DateTimeUnion | null => {
  switch (term.termType) {
    case "BlankNode":
      return new DateTimeDescription({
        ...modelParameters,
        node: term,
      });
    case "Literal":
      if (term.datatype.value === xsd.dateTime.value) {
        const dayjs_ = dayjs(term.value);
        return dayjs_.toDate();
      } else if (term.datatype.value === xsd.integer.value) {
        return parseInt(term.value);
      } else {
        return term.value;
      }
    default:
      return null;
  }
};
