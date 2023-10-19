import { Resource } from "@paradicms/rdf";
import { DatasetCore, NamedNode } from "@rdfjs/types";
import { Memoize } from "typescript-memoize";
import { Model } from "./Model";
import { ModelSet } from "./ModelSet";
import { Property } from "./Property";
import { PropertyValue } from "./PropertyValue";
import { ResourceBackedModelParameters } from "./ResourceBackedModelParameters";
import { createPropertyValuesFromQuadObjects } from "./createPropertyValuesFromQuadObjects";

export abstract class ResourceBackedModel extends Resource implements Model {
  readonly dataset: DatasetCore;
  readonly graph: NamedNode;
  readonly modelSet: ModelSet;

  constructor(kwds: ResourceBackedModelParameters) {
    super({identifier: kwds.iri});
    this.dataset = kwds.dataset;
    this.modelSet = kwds.modelSet;
    this.graph = kwds.graph;
  }

  get iri(): NamedNode {
    return this._identifier as NamedNode;
  }

  @Memoize()
  get propertyValues(): readonly PropertyValue[] {
    return this.modelSet.properties.flatMap(property => this.propertyValuesByProperty(property));
  }

  private propertyValuesByProperty(property: Property): readonly PropertyValue[] {
    return createPropertyValuesFromQuadObjects({
      dataset: this.dataset,
      modelSet: this.modelSet,
      property,
      quads: [...this.dataset
          .match(
              this.identifier,
              property.iri,
              null,
              this.graph
          )]
    });
  }

  @Memoize()
  propertyValuesByPropertyIri(propertyIri: NamedNode): readonly PropertyValue[] {
    const property = this.modelSet.propertyByIri(propertyIri);
    if (!property) {
      return [];
    }
    return this.propertyValuesByProperty(property);
  }

  toRdf(addToDataset: DatasetCore) {
    for (const quad of this.dataset.match(null, null, null, this.graph)) {
      addToDataset.add(quad);
    }
  }

  override toString(): string {
    throw new EvalError("should never call toString()");
  }
}
