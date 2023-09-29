import { DataFactory, Resource } from "@paradicms/rdf";
import { DatasetCore } from "@rdfjs/types";
import { Memoize } from "typescript-memoize";
import { Model } from "./Model";
import { ModelGraphIdentifier } from "./ModelGraphIdentifier";
import { ModelIdentifier } from "./ModelIdentifier";
import { ModelSet } from "./ModelSet";
import { Property } from "./Property";
import { PropertyValue } from "./PropertyValue";
import { ResourceBackedModelParameters } from "./ResourceBackedModelParameters";
import { createPropertyValuesFromQuadObjects } from "./createPropertyValuesFromQuadObjects";
import { modelIdentifiersToKey } from "./modelIdentifiersToKey";

export abstract class ResourceBackedModel extends Resource implements Model {
  readonly dataset: DatasetCore;
  readonly graph: ModelGraphIdentifier;
  readonly modelSet: ModelSet;

  constructor(kwds: ResourceBackedModelParameters) {
    super({identifier: kwds.identifier});
    this.dataset = kwds.dataset;
    this.modelSet = kwds.modelSet;
    this.graph = kwds.graph;
  }

  get dependencies(): readonly Model[] {
    return [];
  }

  override get identifier(): ModelIdentifier {
    return this._identifier as ModelIdentifier;
  }

  get identifiers(): readonly ModelIdentifier[] {
    return [this.identifier];
  }

  override get iri(): string {
    return this.identifier.value;
  }

  @Memoize()
  get iris(): readonly string[] {
    return [this.iri];
  }

  @Memoize()
  get key(): string {
    return modelIdentifiersToKey(this.identifiers);
  }

  preMemoize(): void {
    this.iris;
    this.key;
  }

  @Memoize()
  get propertyValues(): readonly PropertyValue[] {
    return this.modelSet.properties.flatMap(property => property.iris.flatMap(propertyIri => this.propertyValuesByProperty(property, propertyIri)));
  }

  private propertyValuesByProperty(property: Property, propertyIri: string): readonly PropertyValue[] {
    return createPropertyValuesFromQuadObjects({
      dataset: this.dataset,
      modelSet: this.modelSet,
      property,
      quads: [...this.dataset
          .match(
              this.identifier,
              DataFactory.namedNode(propertyIri),
              null,
              this.graph
          )]
    });
  }

  @Memoize()
  propertyValuesByPropertyIri(propertyIri: string): readonly PropertyValue[] {
    const property = this.modelSet.propertyByIri(propertyIri);
    if (!property) {
      return [];
    }
    return this.propertyValuesByProperty(property, propertyIri);
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
