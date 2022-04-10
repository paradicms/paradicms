import {WorksheetFeatureSetState} from "~/models/WorksheetFeatureSetState";
import {WorksheetFeatureSetDefinition} from "~/models/WorksheetFeatureSetDefinition";
import {WorksheetFeature} from "~/models/WorksheetFeature";
import {WorksheetFeatureState} from "~/models/WorksheetFeatureState";

export class WorksheetFeatureSet {
  readonly definition: WorksheetFeatureSetDefinition;
  readonly features: readonly WorksheetFeature[];

  constructor(kwds: {
    definition: WorksheetFeatureSetDefinition;
    initialState?: WorksheetFeatureSetState;
  }) {
    this.definition = kwds.definition;
    this.features = this.definition.features.map(
      (featureDefinition) =>
        new WorksheetFeature({
          definition: featureDefinition,
          initialState: kwds.initialState?.features?.find(
            (featureState) => featureState.uri === featureDefinition.uri
          ),
        })
    );
  }

  get state(): WorksheetFeatureSetState | undefined {
    const featureStates: WorksheetFeatureState[] = [];
    for (const feature of this.features) {
      const featureState = feature.state;
      if (featureState) {
        featureStates.push(featureState);
      }
    }
    return featureStates.length > 0
      ? {
          features: featureStates.length > 0 ? featureStates : undefined,
          uri: this.definition.uri,
        }
      : undefined;
  }
}
