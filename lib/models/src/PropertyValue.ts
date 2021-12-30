import {NamedValue} from "./NamedValue";
import {BlankNode, Literal, NamedNode, Quad} from "n3";
import {Text} from "./Text";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Image} from "./Image";
import {PARADICMS, RDF} from "./vocabularies";
import {Dataset} from "./Dataset";
import {Agent} from "./Agent";

export abstract class PropertyValue {
  static fromAgent(agent: Agent) {
    return new AgentPropertyValue(agent);
  }

  /**
   * Abstract base class with factories for adapting other classes to a common interface.
   *
   * This is used to treat "properties" of a model similarly.
   */
  static fromLiteral(literal: Literal) {
    return new LiteralPropertyValue(literal);
  }

  static fromNamedValue(namedValue: NamedValue) {
    return new NamedPropertyValue(namedValue);
  }

  static fromQuads(
    dataset: Dataset,
    quads: readonly Quad[]
  ): readonly PropertyValue[] {
    const result: PropertyValue[] = [];
    for (const quad of quads) {
      switch (quad.object.termType) {
        case "BlankNode": {
          if (
            dataset.store.getQuads(quad.object, RDF.type, PARADICMS.Text, null)
              .length > 0
          ) {
            result.push(
              PropertyValue.fromText(
                new Text({
                  dataset,
                  graphNode: quad.graph as NamedNode, // Blank node must be in the same graph as the current node
                  node: quad.object as BlankNode,
                })
              )
            );
          }
          break;
        }
        case "Literal":
          result.push(PropertyValue.fromLiteral(quad.object as Literal));
          break;
        case "NamedNode": {
          const rdfTypeQuads = dataset.store.getQuads(
            quad.object,
            RDF.type,
            PARADICMS.NamedValue,
            null
          );
          if (rdfTypeQuads.length > 0) {
            const rdfTypeQuad = rdfTypeQuads[0];
            result.push(
              PropertyValue.fromNamedValue(
                new NamedValue({
                  dataset,
                  graphNode: rdfTypeQuad.graph as NamedNode,
                  node: quad.object as NamedNode,
                })
              )
            );
          }
          break;
        }
      }
    }
    return result;
  }

  static fromText(text: Text) {
    return new TextPropertyValue(text);
  }

  abstract get label(): string;

  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }

  toString() {
    throw new EvalError("use .value, not .toString()");
  }

  abstract get value(): string;
}

class AgentPropertyValue extends PropertyValue {
  constructor(readonly agent: Agent) {
    super();
  }

  get label() {
    return this.agent.name;
  }

  get value() {
    return this.agent.uri;
  }
}

class LiteralPropertyValue extends PropertyValue {
  constructor(readonly literal: Literal) {
    super();
  }

  get label() {
    return this.literal.value;
  }

  get value() {
    return this.literal.value;
  }
}

class NamedPropertyValue extends PropertyValue {
  constructor(readonly namedValue: NamedValue) {
    super();
  }

  get label() {
    return this.namedValue.label ?? this.value;
  }

  thumbnail(selector: ThumbnailSelector) {
    return this.namedValue.thumbnail(selector);
  }

  get value() {
    return this.namedValue.value.value;
  }
}

class TextPropertyValue extends PropertyValue {
  constructor(readonly text: Text) {
    super();
  }

  get label() {
    return this.value;
  }

  get value() {
    return this.text.value;
  }
}
