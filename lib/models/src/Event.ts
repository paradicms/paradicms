import {NamedModel} from "./NamedModel";
import {DateTimeDescription} from "./DateTimeDescription";
import {DCTERMS, VRA, XSD} from "./vocabularies";
import {NamedNode} from "n3";
import {Location} from "./Location";

export class Event extends NamedModel {
  get date(): DateTimeDescription | number | string | null {
    return this.datePropertyValue(DCTERMS.date);
  }

  private datePropertyValue(
    property: NamedNode
  ): DateTimeDescription | number | string | null {
    for (const term of this.propertyObjects(property)) {
      switch (term.termType) {
        case "BlankNode":
          return new DateTimeDescription({
            dataset: this.dataset,
            graphNode: this.graphNode,
            node: term,
          });
        case "Literal":
          if (term.datatype.value === XSD.integer.value) {
            return parseInt(term.value);
          } else {
            return term.value;
          }
      }
    }
    return null;
  }

  get earliestDate(): DateTimeDescription | number | string | null {
    return this.datePropertyValue(VRA.earliestDate);
  }

  get location(): Location | number | string | null {
    for (const term of this.propertyObjects(DCTERMS.spatial)) {
      switch (term.termType) {
        case "BlankNode":
          return new Location({
            dataset: this.dataset,
            graphNode: this.graphNode,
            node: term,
          });
        case "Literal":
          if (term.datatype.value === XSD.integer.value) {
            return parseInt(term.value);
          } else {
            return term.value;
          }
      }
    }
    return null;
  }

  get latestDate(): DateTimeDescription | number | string | null {
    return this.datePropertyValue(VRA.latestDate);
  }
}
