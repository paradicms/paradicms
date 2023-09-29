import {DatasetCore, Literal} from "@rdfjs/types";
import {Model} from "../Model";
import {ModelIdentifier} from "../ModelIdentifier";

export class LiteralModel implements Model {
  protected readonly literal: Literal;
  readonly label: string;

  constructor(kwds: {literal: Literal; label?: string | null}) {
    this.label = kwds.label ?? kwds.literal.value;
    this.literal = kwds.literal;
  }

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

  preMemoize(): void {}

  toRdf(addToDataset: DatasetCore) {}
}
