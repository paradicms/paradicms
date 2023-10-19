import {Concept, Image, Text} from "@paradicms/models";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";

export class WorksheetFeatureValueDefinition {
  constructor(private readonly concept: Concept) {}

  get altLabels(): readonly Literal[] {
    return this.concept.altLabels;
  }

  get description(): Text | null {
    return this.concept.description;
  }

  get images(): readonly Image[] {
    return this.concept.images;
  }

  get iri() {
    return this.concept.iri;
  }

  get label(): string {
    return this.concept.label;
  }

  get value(): BlankNode | Literal | NamedNode {
    return this.concept.value;
  }
}
