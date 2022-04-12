import {WorksheetState} from "~/models/WorksheetState";
import {WorksheetMark} from "~/models/WorksheetMark";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetFeatureSet} from "~/models/WorksheetFeatureSet";
import {WorksheetFeatureSetState} from "~/models/WorksheetFeatureSetState";

export class Worksheet {
  readonly definition: WorksheetDefinition;
  readonly featureSets: WorksheetFeatureSet[];
  private readonly stateCtime: Date;
  private readonly stateId: string;
  text?: string;

  constructor(kwds: {
    currentMark: WorksheetMark;
    definition: WorksheetDefinition;
    initialState: WorksheetState;
  }) {
    const {initialState} = kwds;
    this.definition = kwds.definition;
    this.featureSets = this.definition.featureSets.map(
      (featureSetDefinition) =>
        new WorksheetFeatureSet({
          definition: featureSetDefinition,
          initialState: initialState.featureSets?.find(
            (featureSetState) =>
              featureSetState.uri === featureSetDefinition.uri
          ),
        })
    );
    this.stateCtime = initialState.ctime;
    this.stateId = initialState.id;
    this.text = initialState.text;
  }

  get state(): WorksheetState {
    const featureSetStates: WorksheetFeatureSetState[] = [];
    for (const featureSet of this.featureSets) {
      const featureSetState = featureSet.state;
      if (featureSetState) {
        featureSetStates.push(featureSetState);
      }
    }

    return {
      ctime: this.stateCtime,
      featureSets: featureSetStates.length > 0 ? featureSetStates : undefined,
      id: this.stateId,
      mtime: new Date(),
      text: this.text,
    };
  }
}
