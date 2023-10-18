import {ModelSet} from "@paradicms/models";
import {NamedNode} from "@rdfjs/types";
import {Memoize} from "typescript-memoize";
import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";
import {WorksheetFeatureSetDefinition} from "~/models/WorksheetFeatureSetDefinition";
import {WorksheetFeatureValueDefinition} from "~/models/WorksheetFeatureValueDefinition";

export class WorksheetDefinition {
  constructor(private readonly modelSet: ModelSet) {}

  @Memoize()
  get features(): readonly WorksheetFeatureDefinition[] {
    return this.modelSet.properties.map(
      property => new WorksheetFeatureDefinition(property)
    );
  }

  @Memoize()
  featureSetByIri(iri: NamedNode): WorksheetFeatureSetDefinition | null {
    const propertyGroup = this.modelSet.propertyGroupByIri(iri);
    return propertyGroup
      ? new WorksheetFeatureSetDefinition(propertyGroup)
      : null;
  }

  @Memoize()
  get featureSets(): readonly WorksheetFeatureSetDefinition[] {
    return this.modelSet.propertyGroups.map(
      propertyGroup => new WorksheetFeatureSetDefinition(propertyGroup)
    );
  }

  featureValueByIri(iri: NamedNode): WorksheetFeatureValueDefinition | null {
    return (
      this.featureValues.find(featureValue => featureValue.iri === iri) ?? null
    );
  }

  @Memoize()
  get featureValues(): readonly WorksheetFeatureValueDefinition[] {
    return this.modelSet.concepts.map(
      concept => new WorksheetFeatureValueDefinition(concept)
    );
  }
}
