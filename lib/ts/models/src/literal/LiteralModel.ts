import {Model} from "../Model";
import {DatasetCore, Literal} from "@rdfjs/types";
import {ModelIdentifier} from "../ModelIdentifier";

export class LiteralModel implements Model {
  constructor(protected readonly literal: Literal) {}

  get dependencies(): readonly Model[] {
    return [];
  }

  get identifiers(): readonly ModelIdentifier[] {
    return [];
  }

  get key(): string {
    return `|${this.literal.termType}-${this.literal.value}|`;
  }

  get iris(): readonly string[] {
    return [];
  }

  get label(): string {
    return this.literal.value;
  }

  toRdf(addToDataset: DatasetCore) {}
}
