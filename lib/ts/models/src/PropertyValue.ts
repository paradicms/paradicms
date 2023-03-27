import {Concept} from "./Concept";
import {BlankNode, DefaultGraph, Literal, NamedNode, Quad, Quad_Graph, Term} from "@rdfjs/types";
import {Text} from "./Text";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Image} from "./Image";
import {ModelSet} from "./ModelSet";
import {Agent} from "./Agent";
import {cms, rdf} from "@paradicms/vocabularies";

export abstract class PropertyValue {
  static fromAgent(agent: Agent) {
    return new AgentPropertyValue(agent);
  }

  static fromConcept(concept: Concept) {
    return new ConceptPropertyValue(concept);
  }

  /**
   * Abstract base class with factories for adapting other classes to a common interface.
   *
   * This is used to treat "properties" of a model similarly.
   */
  static fromLiteral(literal: Literal) {
    return new LiteralPropertyValue(literal);
  }

  static fromQuadObjects(
    modelSet: ModelSet,
    quads: readonly Quad[]
  ): readonly PropertyValue[] {
    const propertyValues: PropertyValue[] = [];
    for (const quad of quads) {
      const propertyValue = PropertyValue.fromTerm(modelSet, quad.object, quad.graph);
      if (propertyValue) {
        propertyValues.push(propertyValue);
      }
    }
    return propertyValues;
  }

  static fromQuadSubjects(
      modelSet: ModelSet,
      quads: readonly Quad[]
  ): readonly PropertyValue[] {
    const propertyValues: PropertyValue[] = [];
    for (const quad of quads) {
      const propertyValue = PropertyValue.fromTerm(modelSet, quad.subject, quad.graph);
      if (propertyValue) {
        propertyValues.push(propertyValue);
      }
    }
    return propertyValues;
  }

  private static fromTerm(
      modelSet: ModelSet,
      term: Term,
      termGraph: Quad_Graph,
  ): PropertyValue | null {
    switch (term.termType) {
      case "BlankNode": {
        if (
            modelSet.dataset.match(term, rdf.type, cms.Text, termGraph)
                .size === 0
        ) {
          return null;
        }
        return PropertyValue.fromText(
            new Text({
              modelSet,
              graphNode: termGraph as BlankNode | DefaultGraph | NamedNode, // Blank node must be in the same graph as the current node
              node: term,
            })
        );
      }
      case "NamedNode": {
        // #78 index lookups take half as much time (amortized over multiple works)
        // as getting the rdf:type of the NamedNode and branching on its value.
        {
          const concept = modelSet.conceptByUriOptional(
              term.value
          );
          if (concept) {
            return PropertyValue.fromConcept(concept);
          }
        }
        {
          const organization = modelSet.organizationByUriOptional(
              term.value
          );
          if (organization) {
            return PropertyValue.fromAgent(organization);
          }
        }
        {
          const person = modelSet.personByUriOptional(term.value);
          if (person) {
            return PropertyValue.fromAgent(person);
          }
        }
        return null;
      }
      case "Literal":
        return PropertyValue.fromLiteral(term);
      default:
        return null;
    }
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

class ConceptPropertyValue extends PropertyValue {
  constructor(readonly concept: Concept) {
    super();
  }

  get label() {
    return this.concept.prefLabel ?? this.value;
  }

  override thumbnail(selector: ThumbnailSelector) {
    return this.concept.thumbnail(selector);
  }

  get value() {
    return this.concept.value.value;
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
