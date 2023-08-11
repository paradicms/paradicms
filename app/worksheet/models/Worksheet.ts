import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetFeature} from "~/models/WorksheetFeature";
import {WorksheetFeatureSet} from "~/models/WorksheetFeatureSet";
import {WorksheetFeatureSetState} from "~/models/WorksheetFeatureSetState";
import {WorksheetMark} from "~/models/WorksheetMark";
import {WorksheetMode} from "~/models/WorksheetMode";
import {WorksheetState} from "~/models/WorksheetState";
import {WorksheetStateService} from "~/services/WorksheetStateService";

const isEqual = (
  leftMark: WorksheetMark,
  rightMark: WorksheetMark
): boolean => {
  if (leftMark.featureSetKey !== rightMark.featureSetKey) {
    return false;
  }
  if (leftMark.featureKey !== rightMark.featureKey) {
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
  private readonly featureSetsByIri: {[index: string]: WorksheetFeatureSet};
  private readonly featureSetsByKey: {[index: string]: WorksheetFeatureSet};
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
    this.featureSets = this.definition.featureSets
      .map(
        featureSetDefinition =>
          new WorksheetFeatureSet({
            definition: featureSetDefinition,
            initialState: initialState.featureSets?.find(
              featureSetState =>
                featureSetState.uri === featureSetDefinition.iri
            ),
          })
      )
      .sort((left, right) =>
        left.definition.label.localeCompare(right.definition.label)
      );
    this.featureSetsByIri = this.featureSets.reduce((map, featureSet) => {
      map[featureSet.iri] = featureSet;
      return map;
    }, {} as {[index: string]: WorksheetFeatureSet});
    this.featureSetsByKey = this.featureSets.reduce((map, featureSet) => {
      map[featureSet.key] = featureSet;
      return map;
    }, {} as {[index: string]: WorksheetFeatureSet});
    this.stateCtime = initialState.ctime;
    this.stateId = initialState.id;
    this.stateService = kwds.stateService;
    this.text = initialState.text;

    this.marks = this.recalculateMarks(initialState);
  }

  get currentFeature(): WorksheetFeature | undefined {
    if (!this.currentMark.featureKey) {
      return undefined;
    }
    const currentFeatureSet = this.currentFeatureSet;
    if (!currentFeatureSet) {
      return undefined;
    }
    return currentFeatureSet.featureByKey(this.currentMark.featureKey);
  }

  get currentFeatureSet(): WorksheetFeatureSet | undefined {
    if (!this.currentMark.featureSetKey) {
      return undefined;
    }
    return this.featureSetsByKey[this.currentMark.featureSetKey];
  }

  get currentMarkIndex(): number {
    for (let markI = 0; markI < this.marks.length; markI++) {
      if (isEqual(this.currentMark, this.marks[markI])) {
        return markI;
      }
    }
    throw new EvalError("current mark not found in state machine");
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
      featureSetKey: null,
      featureKey: null,
      review: false,
      mode: this.currentMark.mode,
      worksheetStateId,
    });

    if (state.featureSets && state.featureSets.length > 0) {
      for (const featureSetState of state.featureSets) {
        const featureSetIri = featureSetState.uri;
        const featureSet = this.featureSetsByIri[featureSetIri];

        if (!featureSet) {
          continue;
        }

        // Feature set start
        marks.push({
          featureKey: null,
          featureSetKey: featureSet.key,
          review: false,
          mode: this.currentMark.mode,
          worksheetStateId,
        });

        if (this.currentMark.mode !== WorksheetMode.ADVANCED) {
          for (const feature of featureSet.features) {
            // Feature start is the same as review
            marks.push({
              featureKey: feature.key,
              featureSetKey: featureSet.key,
              review: false,
              mode: this.currentMark.mode,
              worksheetStateId,
            });
          }

          // Feature set review
          marks.push({
            featureSetKey: featureSet.key,
            featureKey: null,
            review: true,
            mode: this.currentMark.mode,
            worksheetStateId,
          });
        }
      }
    }

    // Worksheet review, always the last state
    marks.push({
      featureSetKey: null,
      featureKey: null,
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
