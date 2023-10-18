import {NamedNode} from "@rdfjs/types";
import {WorksheetFeature} from "~/models/WorksheetFeature";
import {WorksheetFeatureSetDefinition} from "~/models/WorksheetFeatureSetDefinition";
import {WorksheetFeatureSetState} from "~/models/WorksheetFeatureSetState";
import {WorksheetFeatureState} from "~/models/WorksheetFeatureState";

export class WorksheetFeatureSet {
  readonly definition: WorksheetFeatureSetDefinition;
  readonly features: readonly WorksheetFeature[];
  private readonly featuresByIri: {[index: string]: WorksheetFeature};
  selected: boolean;

  constructor(kwds: {
    definition: WorksheetFeatureSetDefinition;
    initialState?: WorksheetFeatureSetState;
  }) {
    const {initialState} = kwds;
    this.definition = kwds.definition;
    this.features = this.definition.features
      .map(
        featureDefinition =>
          new WorksheetFeature({
            definition: featureDefinition,
            initialState: initialState?.features?.find(
              featureState => featureState.uri === featureDefinition.iri.value
            ),
          })
      )
      .sort((left, right) => left.definition.order - right.definition.order);
    this.featuresByIri = this.features.reduce((map, feature) => {
      map[feature.key] = feature;
      return map;
    }, {} as {[index: string]: WorksheetFeature});
    this.selected = !!initialState;
  }

  featureByIri(iri: NamedNode): WorksheetFeature {
    const feature = this.featuresByIri[iri.value];
    if (!feature) {
      throw new RangeError("no such feature " + iri.value);
    }
    return feature;
  }

  get iri(): NamedNode {
    return this.definition.iri;
  }

  select(): void {
    this.selected = true;
  }

  get state(): WorksheetFeatureSetState | undefined {
    if (!this.selected) {
      return undefined;
    }

    const featureStates: WorksheetFeatureState[] = [];
    for (const feature of this.features) {
      const featureState = feature.state;
      if (featureState) {
        featureStates.push(featureState);
      }
    }
    return {
      features: featureStates.length > 0 ? featureStates : undefined,
      uri: this.definition.iri.value,
    };
  }

  unselect(): void {
    this.selected = false;
  }
}
