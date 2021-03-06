import {NamedValue} from "./NamedValue";
import {Literal, NamedNode, Quad} from "n3";
import {Text} from "./Text";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Image} from "./Image";
import {Dataset} from "./Dataset";
import {Agent} from "./Agent";
import {CMS, RDF} from "@paradicms/vocabularies";

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

  private static fromQuad(dataset: Dataset, quad: Quad): PropertyValue | null {
    switch (quad.object.termType) {
      case "BlankNode": {
        const objectRdfTypeQuads = dataset.store.getQuads(
          quad.object,
          RDF.type,
          CMS.Text,
          quad.graph
        );
        if (objectRdfTypeQuads.length === 0) {
          return null;
        }
        return PropertyValue.fromText(
          new Text({
            dataset,
            graphNode: quad.graph as NamedNode, // Blank node must be in the same graph as the current node
            node: quad.object,
          })
        );
      }
      case "NamedNode": {
        // #78 index lookups take half as much time (amortized over multiple works)
        // as getting the rdf:type of the NamedNode and branching on its value.
        {
          const namedValue = dataset.namedValueByUriOptional(quad.object.value);
          if (namedValue) {
            return PropertyValue.fromNamedValue(namedValue);
          }
        }
        {
          const organization = dataset.organizationByUriOptional(
            quad.object.value
          );
          if (organization) {
            return PropertyValue.fromAgent(organization);
          }
        }
        {
          const person = dataset.personByUriOptional(quad.object.value);
          if (person) {
            return PropertyValue.fromAgent(person);
          }
        }
        return null;
      }
      case "Literal":
        return PropertyValue.fromLiteral(quad.object as Literal);
      default:
        return null;
    }
  }

  static fromQuads(
    dataset: Dataset,
    quads: readonly Quad[]
  ): readonly PropertyValue[] {
    const propertyValues: PropertyValue[] = [];
    for (const quad of quads) {
      const propertyValue = PropertyValue.fromQuad(dataset, quad);
      if (propertyValue) {
        propertyValues.push(propertyValue);
      }
    }
    return propertyValues;
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
    return this.namedValue.title ?? this.value;
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
