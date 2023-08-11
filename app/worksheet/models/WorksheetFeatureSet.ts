import {WorksheetFeatureSetState} from "~/models/WorksheetFeatureSetState";
import {WorksheetFeatureSetDefinition} from "~/models/WorksheetFeatureSetDefinition";
import {WorksheetFeature} from "~/models/WorksheetFeature";
import {WorksheetFeatureState} from "~/models/WorksheetFeatureState";

export class WorksheetFeatureSet {
  readonly definition: WorksheetFeatureSetDefinition;
  readonly features: readonly WorksheetFeature[];
  private readonly featuresByKey: {[index: string]: WorksheetFeature};
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
              featureState => featureState.uri === featureDefinition.iri
            ),
          })
      )
      .sort((left, right) => left.definition.order - right.definition.order);
    this.featuresByKey = this.features.reduce((map, feature) => {
      map[feature.key] = feature;
      return map;
    }, {} as {[index: string]: WorksheetFeature});
    this.selected = !!initialState;
  }

  featureByKey(key: string): WorksheetFeature {
    const feature = this.featuresByKey[key];
    if (!feature) {
      throw new RangeError("no such feature " + key);
    }
    return feature;
  }

  get iri(): string {
    return this.definition.iri;
  }

  get key(): string {
    return this.definition.key;
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
      uri: this.definition.iri,
    };
  }

  unselect(): void {
    this.selected = false;
  }
}
