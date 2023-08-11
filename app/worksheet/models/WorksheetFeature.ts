import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";
import {WorksheetFeatureState} from "~/models/WorksheetFeatureState";
import {WorksheetFeatureValue} from "~/models/WorksheetFeatureValue";
import {WorksheetFeatureValueState} from "~/models/WorksheetFeatureValueState";

export class WorksheetFeature {
  readonly definition: WorksheetFeatureDefinition;
  text?: string;
  readonly values: readonly WorksheetFeatureValue[];

  constructor(kwds: {
    definition: WorksheetFeatureDefinition;
    initialState?: WorksheetFeatureState;
  }) {
    const {initialState} = kwds;
    this.definition = kwds.definition;
    this.values = this.definition.values
      .map(
        valueDefinition =>
          new WorksheetFeatureValue({
            definition: valueDefinition,
            initialState: initialState?.values?.find(
              featureValueState => featureValueState.uri === valueDefinition.iri
            ),
          })
      )
      .sort((left, right) =>
        left.definition.label.localeCompare(right.definition.label)
      );
  }

  get iri(): string {
    return this.definition.iri;
  }

  get key(): string {
    return this.definition.key;
  }

  get state(): WorksheetFeatureState | undefined {
    const valueStates: WorksheetFeatureValueState[] = [];
    for (const value of this.values) {
      const valueState = value.state;
      if (valueState) {
        valueStates.push(valueState);
      }
    }
    return valueStates.length > 0 || this.text
      ? {
          text: this.text,
          uri: this.definition.iri,
          values: valueStates.length > 0 ? valueStates : undefined,
        }
      : undefined;
  }
}
