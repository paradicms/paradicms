import {BlankNode, Literal, NamedNode} from "n3";
import {Model} from "./Model";
import {DCTERMS, PARADICMS, XSD} from "./vocabularies";
import {Rights} from "./Rights";
import {Text} from "./Text";
import {DateTimeDescription} from "./DateTimeDescription";
import {ModelParameters} from "./ModelParameters";

export class NamedModel extends Model {
  get node(): NamedNode {
    return this._node as NamedNode;
  }

  private optionalLiteralOrUnnamedModel<LiteralT, ModelT extends Model>(
    literalFactory: (literal: Literal) => LiteralT,
    modelFactory: (kwds: ModelParameters) => ModelT,
    modelRdfType: NamedNode,
    property: NamedNode
  ): LiteralT | ModelT | null {
    for (const object of this.store.getObjects(
      this.node,
      property,
      this.graphNode
    )) {
      switch (object.termType) {
        case "BlankNode":
          if (this.hasRdfType(object as BlankNode, modelRdfType)) {
            return modelFactory({
              dataset: this.dataset,
              graphNode: this.graphNode,
              node: object,
            });
          }
          break;
        case "Literal":
          return literalFactory(object);
      }
    }
    return null;
  }

  // DateTimeDescription is a Model, so this must be in NamedModel to avoid a circular dependency.
  protected optionalDateTimeDescriptionOrNumberOrString(
    property: NamedNode
  ): DateTimeDescription | number | string | null {
    return this.optionalLiteralOrUnnamedModel(
      literal =>
        literal.datatype.value === XSD.integer.value
          ? parseInt(literal.value)
          : literal.value,
      kwds => new DateTimeDescription(kwds),
      PARADICMS.DateTimeDescription,
      property
    );
  }

  // Text is a Model, so this must be in NamedModel to avoid a circular dependency.
  protected optionalStringOrText(property: NamedNode): string | Text | null {
    return this.optionalLiteralOrUnnamedModel(
      literal => literal.value,
      kwds => new Text(kwds),
      PARADICMS.Text,
      property
    );
  }

  private get relationUrls(): readonly URL[] {
    const result: URL[] = [];
    for (const relationObject of this.store.getObjects(
      this.node,
      DCTERMS.relation,
      this.graphNode
    )) {
      if (relationObject.termType !== "NamedNode") {
        continue;
      }
      try {
        result.push(new URL(relationObject.value));
      } catch {}
    }
    return result;
  }

  protected get _rights(): Rights | null {
    return Rights.optional({
      dataset: this.dataset,
      graphNode: this.graphNode,
      node: this.node,
    });
  }

  protected get _wikipediaUrl(): string | null {
    for (const relationUrl of this.relationUrls) {
      if (
        relationUrl.host.endsWith("wikipedia.org") &&
        relationUrl.pathname.startsWith("/wiki/")
      ) {
        return relationUrl.toString();
      }
    }
    return null;
  }

  protected get _wikidataConceptUri(): string | null {
    for (const relationUrl of this.relationUrls) {
      if (
        relationUrl.host === "www.wikidata.org" &&
        relationUrl.pathname.startsWith("/entity/")
      ) {
        return relationUrl.toString();
      }
    }
    return null;
  }

  get uri(): string {
    return this.node.value;
  }
}
