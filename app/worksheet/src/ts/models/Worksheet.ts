import {WorksheetState} from "~/models/WorksheetState";
import {WorksheetMark} from "~/models/WorksheetMark";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetFeatureSet} from "~/models/WorksheetFeatureSet";
import {WorksheetFeatureSetState} from "~/models/WorksheetFeatureSetState";
import {WorksheetStateService} from "~/services/WorksheetStateService";
import {WorksheetFeature} from "~/models/WorksheetFeature";
import {WorksheetMode} from "~/models/WorksheetMode";

const isEqual = (
  leftMark: WorksheetMark,
  rightMark: WorksheetMark
): boolean => {
  if (leftMark.featureSetUri !== rightMark.featureSetUri) {
    return false;
  }
  if (leftMark.featureUri !== rightMark.featureUri) {
    return false;
  }
  if (leftMark.review !== rightMark.review) {
    return false;
  }
  if (leftMark.worksheetStateId !== rightMark.worksheetStateId) {
    return false;
  }
  return true;
};

export class Worksheet {
  readonly currentMark: WorksheetMark;
  readonly definition: WorksheetDefinition;
  readonly featureSets: WorksheetFeatureSet[];
  private readonly featureSetsByUri: {[index: string]: WorksheetFeatureSet};
  private marks: readonly WorksheetMark[];
  private readonly stateCtime: Date;
  readonly stateId: string;
  private readonly stateService: WorksheetStateService;
  text?: string;

  constructor(kwds: {
    currentMark: WorksheetMark;
    definition: WorksheetDefinition;
    initialState: WorksheetState;
    stateService: WorksheetStateService;
  }) {
    const {initialState} = kwds;
    this.currentMark = kwds.currentMark;
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
    this.featureSetsByUri = this.featureSets.reduce((map, featureSet) => {
      map[featureSet.uri] = featureSet;
      return map;
    }, {} as {[index: string]: WorksheetFeatureSet});
    this.stateCtime = initialState.ctime;
    this.stateId = initialState.id;
    this.stateService = kwds.stateService;
    this.text = initialState.text;

    this.marks = this.recalculateMarks(initialState);
  }

  get currentFeature(): WorksheetFeature | undefined {
    if (!this.currentMark.featureUri) {
      return undefined;
    }
    const currentFeatureSet = this.currentFeatureSet;
    if (!currentFeatureSet) {
      return undefined;
    }
    return currentFeatureSet.featureByUri(this.currentMark.featureUri);
  }

  get currentFeatureSet(): WorksheetFeatureSet | undefined {
    if (!this.currentMark.featureSetUri) {
      return undefined;
    }
    return this.featureSetByUri(this.currentMark.featureSetUri);
  }

  get currentMarkIndex(): number {
    for (let markI = 0; markI < this.marks.length; markI++) {
      if (isEqual(this.currentMark, this.marks[markI])) {
        return markI;
      }
    }
    throw new EvalError("current mark not found in state machine");
  }

  private featureSetByUri(uri: string): WorksheetFeatureSet {
    const featureSet = this.featureSetsByUri[uri];
    if (!featureSet) {
      throw new RangeError(
        "no such feature set " + this.currentMark.featureSetUri
      );
    }
    return featureSet;
  }

  get firstMark(): WorksheetMark {
    return this.marks[0];
  }

  get lastMark(): WorksheetMark {
    return this.marks[this.lastMarkIndex];
  }

  private get lastMarkIndex(): number {
    return this.marks.length - 1;
  }

  get nextMark(): WorksheetMark {
    const currentStateMarkIndex = this.currentMarkIndex;
    if (currentStateMarkIndex + 1 === this.marks.length) {
      throw new EvalError();
    }
    return this.marks[currentStateMarkIndex + 1];
  }

  get previousMark(): WorksheetMark {
    const currentStateMarkIndex = this.currentMarkIndex;
    if (currentStateMarkIndex === 0) {
      throw new EvalError();
    }
    return this.marks[currentStateMarkIndex - 1];
  }

  get progressPercentage(): number {
    return Math.round((this.currentMarkIndex / this.lastMarkIndex) * 100.0);
  }

  private recalculateMarks(state: WorksheetState): readonly WorksheetMark[] {
    const marks: WorksheetMark[] = [];

    // First state, always the worksheet start
    const worksheetStateId = state.id;
    marks.push({
      featureSetUri: null,
      featureUri: null,
      review: false,
      mode: this.currentMark.mode,
      worksheetStateId,
    });

    if (state.featureSets && state.featureSets.length > 0) {
      for (const featureSetState of state.featureSets) {
        const featureSetUri = featureSetState.uri;
        const featureSet = this.featureSetByUri(featureSetUri);

        // Feature set start
        marks.push({
          featureUri: null,
          featureSetUri,
          review: false,
          mode: this.currentMark.mode,
          worksheetStateId,
        });

        if (this.currentMark.mode !== WorksheetMode.ADVANCED) {
          for (const feature of featureSet.features) {
            // Feature start is the same as review
            marks.push({
              featureUri: feature.uri,
              featureSetUri,
              review: false,
              mode: this.currentMark.mode,
              worksheetStateId,
            });
          }

          // Feature set review
          marks.push({
            featureSetUri,
            featureUri: null,
            review: true,
            mode: this.currentMark.mode,
            worksheetStateId,
          });
        }
      }
    }

    // Worksheet review, always the last state
    marks.push({
      featureSetUri: null,
      featureUri: null,
      review: true,
      mode: this.currentMark.mode,
      worksheetStateId,
    });

    return marks;
  }

  save(): Promise<void> {
    const newState = this.state;
    return this.stateService.putWorksheetState(newState).then(() => {
      this.marks = this.recalculateMarks(newState);
    });
  }

  get selectedFeatureSetCount(): number {
    return this.featureSets.reduce(
      (count, featureSet) => (featureSet.selected ? count + 1 : count),
      0
    );
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
